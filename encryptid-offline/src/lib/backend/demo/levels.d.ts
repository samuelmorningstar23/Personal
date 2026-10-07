// Provided by the demo-levels plugin in vite.config.ts: seed/levels.json with
// each answer replaced by the SHA-256 of its normalised form.
declare module 'virtual:demo-levels' {
	const levels: Array<{
		uid: string;
		level: number;
		creator: string;
		prompt: string;
		answerHash: string;
		comment: string;
		images: string[];
		files: { name: string; url: string }[];
	}>;
	export default levels;
}
