module.exports = {
	plugins: [
		'postcss-mixins',
		[
			'postcss-preset-env',
			// https://github.com/csstools/postcss-preset-env/blob/main/src/lib/plugins-by-id.js
			{
				// The stage can be 0 (experimental) through 4 (stable), or false. Setting stage to false will disable every polyfill.
				// Doing this would only be useful if you intended to exclusively use the features option. <-- TODO
				stage: 2,
				// minimumVendorImplementations: 2,
				enableClientSidePolyfills: false,
				debug: Boolean(process.env.APP_ENV === 'dev'),
				autoprefixer: {
					flexbox: false,
					grid: false,
				},
				features: {
					'custom-properties': false,
					'nesting-rules': true,
				},
			},
		],
	],
};
