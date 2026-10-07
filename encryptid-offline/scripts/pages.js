// Builds or serves the static, browser-only demo that GitHub Pages hosts.
//   node scripts/pages.js build [base]   static site in build/, e.g. base "/Personal"
//   node scripts/pages.js dev            dev server for the demo
import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const [command = 'build', base = ''] = process.argv.slice(2);
const env = { ...process.env, DEMO: 'true', BASE_PATH: base };
const vite = (...args) => spawnSync('npx', ['vite', ...args], { env, stdio: 'inherit', shell: process.platform === 'win32' });

if (command === 'dev') {
	process.exit(vite('dev').status ?? 1);
}

const { status } = vite('build');
if (status !== 0) process.exit(status ?? 1);
// GitHub Pages runs Jekyll by default, which drops the _app/ folder
writeFileSync('build/.nojekyll', '');
console.log(`demo built in build/ for base path "${base || '/'}"`);
