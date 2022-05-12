module.exports = {
	'**/*.(ts|js)?(x)': (filenames) => [
		`npm run type-check`,
		// https://github.com/vercel/next.js/pull/28042
		`next lint --fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
		`prettier --write ${filenames.join(' ')}`,
	],
	'**/*.{json,md}': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
