import { useEffect, useLayoutEffect } from 'react';

export const useEntriesStorage = <T>({
	key = 'todos',
	onMount,
	data,
}: {
	key?: string;
	onMount: (data: T) => any;
	data: T;
}) => {
	// retrieve state on component mount, before painting the screen
	useLayoutEffect(() => {
		const savedEntries = localStorage.getItem(key);

		if (!savedEntries) {
			return;
		}

		try {
			onMount(JSON.parse(savedEntries));
		} catch (e) {
			console.error(e);
		}
	}, []);

	// Listen to data changes and update the storage
	useEffect(() => {
		console.log(data); // Log every state change
		localStorage.setItem(key, JSON.stringify(data));
	}, [data, key]);
};
