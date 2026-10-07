// The static demo's backend: same exports as ../real, but everything runs in the
// browser (see store.ts), so the site can be hosted on GitHub Pages.
import { session } from './store';

export { default as Doc } from './Doc.svelte';
export { default as BackendProvider } from './Provider.svelte';
export { api, getLeaderboard, getLocals, getQuestions } from './api';
export { signIn } from './signin';

export const DEMO = true;

export async function signOut() {
	session.set(null);
}
