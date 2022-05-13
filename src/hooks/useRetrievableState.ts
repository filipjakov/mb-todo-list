import { useCallback, useMemo, useState } from 'react';

export const useRetrievableState = <T>(init: T) => {
	const [states, setStates] = useState([init]);
	const [index, setIndex] = useState(0);

	const state = useMemo(() => states[index], [index, states])!;

	// Clear all state history
	const reset = (init: T) => {
		setIndex(0);
		setStates([init]);
	};

	const push = useCallback(
		(value: T) => {
			// This removes all future (redo) states after current index
			const copy = states.slice(0, index + 1);

			copy.push(value);
			setStates(copy);
			setIndex(copy.length - 1);
		},
		[index, states]
	);

	// Allows you to go back (undo) N steps
	const back = useCallback((steps = 1) => {
		setIndex((prevIndex) => Math.max(0, prevIndex - steps));
	}, []);

	// Allows you to go forward (redo) N steps
	const forward = useCallback(
		(steps = 1) => {
			setIndex((prevIndex) => Math.min(states.length - 1, prevIndex + steps));
		},
		[states.length]
	);

	return {
		state,
		push,
		reset,
		back,
		forward,
	};
};
