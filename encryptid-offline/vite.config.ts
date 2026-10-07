import { sentryVitePlugin } from "@sentry/vite-plugin";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// The static demo checks answers in the browser, so it ships seed/levels.json
// with each answer replaced by a SHA-256 hash instead of the plain text.
function demoLevels(base: string): Plugin {
    const id = 'virtual:demo-levels';
    const file = 'seed/levels.json';
    const withBase = (url: string) => (url.startsWith('/') ? base + url : url);
    return {
        name: 'demo-levels',
        resolveId: (source) => (source === id ? '\0' + id : undefined),
        load(source) {
            if (source !== '\0' + id) return;
            this.addWatchFile(file);
            const levels = JSON.parse(readFileSync(file, 'utf8')).map(({ answer, ...level }) => ({
                ...level,
                // same normalisation as the play page and /api/submit
                answerHash: createHash('sha256').update(answer.toLowerCase().replace(/\s/g, '')).digest('hex'),
                images: level.images.map(withBase),
                files: level.files.map((f) => ({ ...f, url: withBase(f.url) })),
            }));
            return `export default ${JSON.stringify(levels)};`;
        },
    };
}

export default defineConfig(({ mode }) => {
    // only upload releases/source maps to Sentry when a token is configured
    const { SENTRY_AUTH_TOKEN } = loadEnv(mode, process.cwd(), '');
    const demo = process.env.DEMO === 'true';
    return {
        plugins: [sveltekit(), ...(SENTRY_AUTH_TOKEN ? [sentryVitePlugin({
            org: "krishaay-jois",
            project: "encryptid",
            authToken: SENTRY_AUTH_TOKEN
        })] : []), ...(demo ? [demoLevels(process.env.BASE_PATH ?? '')] : []),],

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
