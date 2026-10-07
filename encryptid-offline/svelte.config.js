import adapterVercel from '@sveltejs/adapter-vercel';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// DEMO=true builds the static, browser-only demo hosted on GitHub Pages
// (see scripts/pages.js); BASE_PATH is the sub-path it is served from.
const demo = process.env.DEMO === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: demo ? adapterStatic({ fallback: '404.html' }) : adapterVercel(),
		alias: {
			"@/*": "src/lib/*",
			// pages talk to the backend through this, so the demo can swap it out
			"$backend": demo ? "src/lib/backend/demo/index.ts" : "src/lib/backend/real/index.ts",
		},
		...(demo && {
			paths: { base: process.env.BASE_PATH ?? '' },
			// same pages, but loaders that run in the browser and no server code
			files: {
				routes: 'src/demo/routes',
				hooks: { server: 'src/demo/hooks.server', client: 'src/demo/hooks.client' }
			}
		})
	}
};

export default config;
