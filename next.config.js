/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const withPreact = require('next-plugin-preact');
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants') ;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withBundleAnalyzer(
	withPreact({
		// https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
		reactStrictMode: true,
		optimizeFonts: false,
		// https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
		poweredByHeader: false,
		eslint: {
			dirs: ['src'],
		},
		// https://github.com/vercel/next.js/issues/30750#issuecomment-962198711
		experimental: { esmExternals: false },
	})
);

module.exports = (phase) => {
	console.info('Phase: ', phase);

	return nextConfig;
};
