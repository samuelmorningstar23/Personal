import { getLeaderboard } from '$backend';

// stands in for src/routes/leaderboard/+page.server.ts
export const load = () => ({ leaderboard: getLeaderboard() });
