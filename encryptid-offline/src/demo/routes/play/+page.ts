import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { getLocals, getQuestions } from '$backend';

// stands in for src/routes/play/+page.server.ts
export const load = () => {
    const locals = getLocals();
    if (locals.banned) redirect(302, `${base}/team`);
    if (locals.userID === null || !locals.userExists || locals.userTeam === null) redirect(302, `${base}/ready`);
    return { locals, questions: getQuestions() };
};
