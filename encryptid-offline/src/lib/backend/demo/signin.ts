// signIn() opens the demo's sign-in dialog (in Provider.svelte) and resolves
// once it is submitted or dismissed, like Google's popup does for the real app.
import { writable } from 'svelte/store';
import { signInAs } from './store';

export const signInOpen = writable(false);
let resolvePending: (() => void) | null = null;

export function signIn() {
	signInOpen.set(true);
	return new Promise<void>((resolve) => (resolvePending = resolve));
}

/** Called by the dialog: an email signs in, null means it was dismissed. */
export function finishSignIn(email: string | null) {
	if (email) signInAs(email);
	signInOpen.set(false);
	resolvePending?.();
	resolvePending = null;
}
