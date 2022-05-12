import { useEffect, useState } from 'react';

export const useDoesPreferReducedMotion = () => {
	const [preference, setPreference] = useState(false);

	useEffect(() => {
		const mediaString = '(prefers-reduced-motion:reduce)';
		const { matches: prefersReduced } = window.matchMedia(mediaString);
		setPreference(prefersReduced);

		const media = window.matchMedia(mediaString);
		const onChange: Parameters<MediaQueryList['addListener']>[0] = ({ matches }) => setPreference(matches);

		media.addListener(onChange);

		return () => media.removeListener(onChange);
	}, []);

	return { prefersReducedMotion: preference };
};
