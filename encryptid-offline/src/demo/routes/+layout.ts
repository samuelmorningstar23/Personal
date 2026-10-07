// The GitHub Pages demo: prerendered page shells, with everything else running
// in the browser against the local backend in src/lib/backend/demo.
import { getLocals } from '$backend';

export const ssr = false;
export const prerender = true;
export const trailingSlash = 'always';

// stands in for src/routes/+layout.server.ts; reading the url makes it re-run on
// every navigation, the way the server's hooks work out the user on every request
export const load = ({ url }) => {
    url.pathname;
    return getLocals();
};
