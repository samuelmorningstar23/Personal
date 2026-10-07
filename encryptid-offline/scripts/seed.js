// Seeds the local Firestore emulator with the documents the app expects to exist
// (the user/name indexes) plus the levels from seed/levels.json.
// Only ever talks to the emulator: FIRESTORE_EMULATOR_HOST is always set.
import { readFile } from 'node:fs/promises';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

process.env.FIRESTORE_EMULATOR_HOST ||= '127.0.0.1:8080';
const projectId = process.env.GCLOUD_PROJECT || 'demo-encryptid';

initializeApp({ projectId });
const db = getFirestore();

const indexDocs = {
	userIndex: { '0': null },
	nameIndex: { teamcodes: {}, teamcounts: {}, teamnames: [], usernames: [] }
};

for (const [id, data] of Object.entries(indexDocs)) {
	try {
		// create() fails if the doc exists, so re-seeding never wipes players' data
		await db.collection('index').doc(id).create(data);
		console.log(`seed: created index/${id}`);
	} catch (e) {
		if (e.code !== 6) throw e; // 6 = ALREADY_EXISTS
		console.log(`seed: index/${id} already exists, left as is`);
	}
}

const levels = JSON.parse(await readFile(new URL('../seed/levels.json', import.meta.url), 'utf8'));
for (const level of levels) {
	// /api/submit lower-cases the answer and the play page strips whitespace
	const answer = level.answer.toLowerCase().replace(/\s/g, '');
	await db.collection('levels').doc(level.uid).set({ ...level, answer });
}
console.log(`seed: wrote ${levels.length} levels to ${projectId} on ${process.env.FIRESTORE_EMULATOR_HOST}`);
