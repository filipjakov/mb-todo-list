import { useEffect, useRef } from 'react';

interface HotkeyOptions {
	onUndo: (...args: any) => any;
	onRedo: (...args: any) => any;
}

export const useHotKeys = ({ onUndo, onRedo }: HotkeyOptions) => {
	// Ref re-rendering pattern -> avoid unnecessary re-renders
	const undoRef = useRef(onUndo);
	const redoRef = useRef(onRedo);

	useEffect(() => {
		undoRef.current = onUndo;
		redoRef.current = onRedo;
	});

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			// This way we still enable undo/redo functionality on the form controls
			// Checks if some form containes the focusable element
			if (Array.from(document.querySelectorAll('form')).some((form) => form.contains(document.activeElement))) {
				return;
			}

			if (e.metaKey && e.shiftKey && e.key === 'z') {
				e.preventDefault();
				// command + shift + z(y)
				redoRef.current();
			} else if (e.metaKey && e.key === 'z') {
				e.preventDefault();
				// command + z(y)
				undoRef.current();
			}
		};

		document.addEventListener('keydown', onKeyDown);

		return () => document.removeEventListener('keydown', onKeyDown);
	}, []);
};
