// Browser versions of the src/routes/api endpoints, answering with the same
// status codes so the pages' existing response handling works unchanged.
import { get } from 'svelte/store';
import levels from 'virtual:demo-levels';
import { db, isIitm, newId, session, update, type DB } from './store';

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const fail = (status: number, message: string) => json({ message }, status);

async function sha256(text: string) {
	const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
	return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

function newTeamCode(d: DB) {
	const taken = new Set(Object.values(d.teams).map((t) => t.code));
	let code;
	do code = newId(8).toLowerCase();
	while (taken.has(code));
	return code;
}

type Handler = (body: any, uid: string | null, d: DB) => Response | Promise<Response>;

const routes: Record<string, Handler> = {
	'/api/create': (body, uid, d) => {
		if (!uid) return fail(401, 'Unauthorized');
		const { first, last, username } = body;
		if (typeof first !== 'string' || typeof last !== 'string' || typeof username !== 'string')
			return fail(400, 'Invalid request');
		const name = username.toLowerCase();
		if (Object.values(d.users).some((u) => u.username === name)) return fail(409, 'Username already exists');
		update((d) => {
			d.users[uid] = { first, last, username: name, team: null, uid, created: Date.now() };
		});
		return json({ success: true });
	},

	'/api/team/create': (body, uid, d) => {
		const user = uid && d.users[uid];
		if (!uid || !user || user.team !== null) return fail(401, 'Unauthorized');
		if (typeof body.teamName !== 'string' || body.teamName.trim() === '') return fail(400, 'Bad Request');
		const teamName = body.teamName.toLowerCase();
		if (Object.values(d.teams).some((t) => t.teamName === teamName)) return fail(429, 'Team name is already taken');
		update((d) => {
			const id = newId();
			const now = Date.now();
			d.teams[id] = {
				created: now,
				last_change: now,
				teamName,
				uid: id,
				code: newTeamCode(d),
				owner: uid,
				members: [uid],
				level: 1,
				banned: false,
				iitm_verified: isIitm(d, uid),
				completed_levels: []
			};
			d.users[uid].team = id;
		});
		return json({ success: true });
	},

	'/api/team/join': (body, uid, d) => {
		const user = uid && d.users[uid];
		if (!uid || !user) return fail(401, 'Unauthorized');
		if (typeof body.inviteCode !== 'string' || body.inviteCode.trim() === '') return fail(400, 'Bad Request');
		const code = body.inviteCode.toLowerCase();
		const team = Object.values(d.teams).find((t) => t.code === code);
		if (!team) return fail(404, 'Not Found');
		if (team.members.length >= 3) return fail(419, 'Team is full');
		if (team.members.includes(uid)) return fail(418, 'Already in this team');
		if (user.team !== null) return fail(403, 'Already in a team');
		update((d) => {
			const t = d.teams[team.uid];
			t.members.push(uid);
			if (!isIitm(d, uid)) t.iitm_verified = false;
			d.users[uid].team = t.uid;
		});
		return json({ success: true, teamID: team.uid });
	},

	'/api/team/leave': (_body, uid, d) => {
		const user = uid && d.users[uid];
		if (!uid || !user || user.team === null) return fail(401, 'Unauthorized');
		if (!d.teams[user.team]) return fail(404, 'Not Found');
		update((d) => {
			const team = d.teams[user.team];
			const members = team.members.filter((m: string) => m !== uid);
			if (members.length === 0) {
				delete d.teams[user.team];
			} else {
				team.owner = members[0];
				team.members = members;
				team.iitm_verified = members.every((m: string) => isIitm(d, m));
			}
			d.users[uid].team = null;
		});
		return json({ success: true });
	},

	'/api/submit': async (body, uid, d) => {
		const user = uid && d.users[uid];
		if (!uid || !user || user.team === null) return fail(401, 'Unauthorized');
		const level = levels.find((l) => l.uid === body.questionId);
		if (!level) return fail(404, 'Not Found');
		if (typeof body.answer !== 'string' || body.answer.trim() === '') return fail(400, 'Bad Request');
		const team = d.teams[user.team];
		if ((team.completed_levels || []).includes(level.uid)) return json({ correct: true });

		const entered = body.answer.toLowerCase();
		const correct = (await sha256(entered.replace(/\s/g, ''))) === level.answerHash;
		update((d) => {
			const t = d.teams[user.team];
			if (correct) {
				t.completed_levels = [...(t.completed_levels || []), level.uid];
				// as on the server: only IITM-verified teams earn points
				if (t.iitm_verified) t.level++;
				t.last_change = Date.now();
			}
			const log = (d.logs[t.uid] ||= { count: 0, logs: [] });
			log.count++;
			log.logs.push({
				timestamp: Date.now(),
				questionId: level.uid,
				type: correct ? 'correct_answer' : 'wrong_answer',
				entered,
				userId: uid
			});
		});
		return json({ correct });
	}
};

/** Same signature as the real backend's `api`: answers locally instead of over HTTP. */
export async function api(path: string, init: RequestInit = {}) {
	const handler = routes[path];
	if (!handler) return fail(404, 'Not Found');
	let body = {};
	try {
		body = typeof init.body === 'string' ? JSON.parse(init.body) : {};
	} catch {
		return fail(400, 'Bad Request');
	}
	return handler(body, get(session), get(db));
}

/** What the server's hooks put in `locals` for the signed-in user. */
export function getLocals() {
	const uid = get(session);
	const user = uid ? get(db).users[uid] : undefined;
	return { userID: uid, userExists: Boolean(user), userTeam: user?.team ?? null, banned: false };
}

export const getQuestions = () => [...levels].sort((a, b) => a.level - b.level);

export function getLeaderboard() {
	return Object.values(get(db).teams)
		.sort((a, b) => Number(b.iitm_verified) - Number(a.iitm_verified) || b.level - a.level || a.last_change - b.last_change)
		.map((t) => ({ teamName: t.teamName, score: (t.level - 1) * 100, members: t.members.length, iitm: t.iitm_verified }));
}
