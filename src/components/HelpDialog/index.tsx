import { DialogContent, DialogOverlay } from '@reach/dialog';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

import { Button } from '@components/Button';

import styles from './index.module.css';

const cx = classNames.bind(styles);

interface HelpDialogProps {
	close: (...args: any) => any;
}

export const HelpDialog: FC<HelpDialogProps> = ({ close }) => {
	return (
		<AnimatePresence>
			<DialogOverlay
				className={cx('overlay')}
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onDismiss={close}
				style={{ overflow: 'hidden' }}
			>
				<DialogContent
					aria-label="Edit Todo entry"
					as={motion.div}
					className={cx('content')}
					initial={{ y: '100%' }}
					animate={{ y: '0%' }}
					transition={{ min: 0, max: 100, bounceDamping: 9 }}
				>
					<ul>
						<li>NOTE: Tested only on MacOS and Android!</li>
						<li>
							Press <kbd>command</kbd> + <kbd>z</kbd> undo.
						</li>
						<li>
							Press <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>z</kbd> redo.
						</li>
						<li>Be sure to delete your local storage if you encounter data corruption problems!</li>
					</ul>

					<Button onClick={close}>Done</Button>
				</DialogContent>
			</DialogOverlay>
		</AnimatePresence>
	);
};
