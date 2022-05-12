import type { AppProps, NextWebVitalsMetric } from 'next/app';
import '../styles/index.css';

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
	const cWindow = window as Window & { dataLayer?: Array<any> };
	const dataLayer = cWindow.dataLayer ?? [];

	dataLayer.push({
		event: 'web-vitals',
		event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		event_action: name,
		event_value: Math.round(name === 'CLS' ? value * 1000 : value),
		event_label: id,
		non_interaction: true,
	});
}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
