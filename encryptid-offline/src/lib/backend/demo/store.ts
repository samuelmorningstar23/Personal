// In-browser stand-in for Firestore, used by the static (GitHub Pages) demo.
// The "database" lives in localStorage, so every tab of this browser shares it,
// and the signed-in user lives in sessionStorage, so two tabs can be two players.
import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export type DB = {
	accounts: Record<string, string>; // email -> uid
	emails: Record<string, string>; // uid -> email
	users: Record<string, any>;
	teams: Record<string, any>;
	logs: Record<string, any>;
};

const DB_KEY = 'encryptid-demo:db';
const SESSION_KEY = 'encryptid-demo:session';
const empty = (): DB => ({ accounts: {}, emails: {}, users: {}, teams: {}, logs: {} });

// storage can be missing or throw (private windows, blocked site data): fall
// back to memory so the demo still works for the current page
function read<T>(storage: () => Storage, key: string, fallback: T): T {
	try {
		const raw = storage().getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function write(storage: () => Storage, key: string, value: unknown) {
	try {
		storage().setItem(key, JSON.stringify(value));
	} catch {
		/* keep it in memory only */
	}
}

const local = () => localStorage;
const tab = () => sessionStorage;

export const db = writable<DB>(read(local, DB_KEY, empty()));
export const session = writable<string | null>(read(tab, SESSION_KEY, null));

if (browser) {
	db.subscribe((value) => write(local, DB_KEY, value));
	session.subscribe((value) => write(tab, SESSION_KEY, value));
	// another tab changed the database: pick it up so teams update live
	window.addEventListener('storage', (e) => {
		if (e.key === DB_KEY) db.set(read(local, DB_KEY, empty()));
	});
}

/** Applies a change to the database and saves it. */
export function update(change: (d: DB) => void) {
	// start from what's saved, in case another tab wrote since we last synced
	const d = browser ? read(local, DB_KEY, get(db)) : get(db);
	change(d);
	db.set(d);
}

export const isIitm = (d: DB, uid: string) => (d.emails[uid] || '').endsWith('iitm.ac.in');

export function newId(length = 20) {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	const bytes = crypto.getRandomValues(new Uint8Array(length));
	return Array.from(bytes, (b) => chars[b % chars.length]).join('');
}

/** Signs in as `email`, creating the account the first time. */
export function signInAs(email: string) {
	email = email.trim().toLowerCase();
	let uid = get(db).accounts[email];
	if (!uid) {
		uid = newId(28);
		const created = uid;
		update((d) => {
			d.accounts[email] = created;
			d.emails[created] = email;
		});
	}
	session.set(uid);
}

export function resetDemo() {
	db.set(empty());
	session.set(null);
}
