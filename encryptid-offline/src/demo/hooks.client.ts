import type { HandleClientError } from '@sveltejs/kit';

// The static demo doesn't report errors to Sentry; just log them.
export const handleError: HandleClientError = ({ error }) => {
    console.error(error);
};
