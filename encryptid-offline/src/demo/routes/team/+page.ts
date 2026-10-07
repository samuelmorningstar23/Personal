import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { getLocals } from '$backend';

// stands in for src/routes/team/+page.server.ts
export const load = () => {
    const locals = getLocals();
    if (locals.userTeam === null) redirect(302, `${base}/ready`);
    return locals;
};
