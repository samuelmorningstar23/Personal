import { sentryVitePlugin } from "@sentry/vite-plugin";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // only upload releases/source maps to Sentry when a token is configured
    const { SENTRY_AUTH_TOKEN } = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [sveltekit(), ...(SENTRY_AUTH_TOKEN ? [sentryVitePlugin({
            org: "krishaay-jois",
            project: "encryptid",
            authToken: SENTRY_AUTH_TOKEN
        })] : []),],

        // pre-transform every page at startup so vite discovers all dependencies
        // at once, instead of force-reloading the browser on each page's first visit
        server: {
            warmup: {
                clientFiles: ['./src/hooks.client.ts', './src/routes/**/+page.svelte', './src/routes/+layout.svelte']
            }
        },

        // imported from inside svelte libraries, so vite only finds them after its
        // first optimize pass; listing them avoids a forced reload on a cold start
        optimizeDeps: {
            include: [
                'firebase/analytics', 'firebase/database', 'tslib',
                'dayjs', 'dayjs/plugin/duration.js', 'dayjs/plugin/utc.js',
                'dayjs/plugin/timezone.js', 'dayjs/plugin/customParseFormat.js',
                'framesync', 'popmotion', 'hey-listen', 'style-value-types'
            ]
        },

        build: {
            sourcemap: true
        }
    };
});
