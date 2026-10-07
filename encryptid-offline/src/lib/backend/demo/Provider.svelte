<script lang="ts">
    // Wraps the app in the demo: a sign-in dialog standing in for Google's popup,
    // and a strip explaining where the data lives, with sign out / reset.
    import { base } from '$app/paths';
    import { goto, invalidateAll } from '$app/navigation';
    import { resetDemo, session } from './store';
    import { finishSignIn, signInOpen } from './signin';

    let dialog: HTMLDialogElement;
    let email = '';

    $: if (dialog && $signInOpen && !dialog.open) dialog.showModal();

    function submit() {
        if (!email.includes('@')) return;
        finishSignIn(email);
        dialog.close();
        email = '';
    }

    async function signOut() {
        session.set(null);
        await goto(`${base}/ready`);
        await invalidateAll();
    }

    async function reset() {
        if (!confirm('wipe every demo user, team and answer stored in this browser?')) return;
        resetDemo();
        await goto(`${base}/`);
        await invalidateAll();
    }
</script>

<slot />

<div class="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-center gap-x-3 bg-base-300/90 px-4 py-1 text-xs text-neutral-400">
    <span>demo mode: no server, everything is saved in this browser</span>
    {#if $session}<button class="link" on:click={signOut}>sign out</button>{/if}
    <button class="link" on:click={reset}>reset demo</button>
</div>

<dialog bind:this={dialog} class="modal" on:close={() => finishSignIn(null)}>
    <form class="modal-box border border-neutral-700" on:submit|preventDefault={submit}>
        <h3 class="mb-2 text-2xl font-bold text-primary">sign in</h3>
        <p class="mb-4 text-sm">
            this demo has no google sign-in: type any email. one ending in <b>iitm.ac.in</b>
            (like you@smail.iitm.ac.in) puts your team in the running for points.
            open a second tab and sign in with another email to play as a teammate.
        </p>
        <input id="demo-email" class="input input-bordered mb-4 w-full" type="email" required
               placeholder="you@smail.iitm.ac.in" bind:value={email} />
        <div class="flex justify-end gap-2">
            <button type="button" class="btn btn-ghost" on:click={() => dialog.close()}>cancel</button>
            <button type="submit" class="btn btn-primary">sign in</button>
        </div>
    </form>
</dialog>
