// The real backend: Firebase on the client, SvelteKit's /api routes on the server.
// Pages import this as `$backend`; the static demo build swaps in ../demo instead.
import { base } from '$app/paths';
import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '$lib/firebase';

export { Doc } from 'sveltefire';
export { default as BackendProvider } from './Provider.svelte';

export const DEMO = false;

/** Calls one of the app's /api endpoints. */
export const api = (path: string, init?: RequestInit) => fetch(base + path, init);

export async function signIn() {
    const credential = await signInWithPopup(auth, new GoogleAuthProvider());
    const idToken = await credential.user.getIdToken();
    await api('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
    });
}

export async function signOut() {
    await api('/api/auth', { method: 'DELETE' });
    await firebaseSignOut(auth);
}
