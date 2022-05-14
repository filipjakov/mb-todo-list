import { DialogContent, DialogOverlay } from '@reach/dialog';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, FormEvent } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { TodoData } from '@components/Todo';

import styles from './index.module.css';

const cx = classNames.bind(styles);

interface TodoEditDialogProps<T> {
	item: T;
	onDismiss: (...args: any) => any;
	onDone: (item: T) => any;
}

export const TodoEditDialog: FC<TodoEditDialogProps<TodoData>> = ({ item, onDismiss, onDone }) => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { text, due } = Object.fromEntries(new FormData(e.currentTarget));

		onDone({
			...item,
			text: text!.toString(),
			...(due && { due: due.toString() }),
		});

		onDismiss();
	};

	return (
		<AnimatePresence>
			<DialogOverlay
				className={cx('overlay')}
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onDismiss={onDismiss}
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
					<button className={cx('close')} onClick={onDismiss}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path
								stroke="currentColor"
								d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
							/>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m10 14.243 2.121-2.122m0 0L14.243 10m-2.122 2.121L10 10m2.121 2.121 2.122 2.122M6 8h1"
							/>
						</svg>
					</button>

					<form autoComplete="off" onSubmit={onSubmit}>
						<label>
							<Input type="text" placeholder="Your next TODO item" name="text" value={item.text} required />
						</label>

						<label>
							<Input
								type="date"
								name="due"
								min={new Date().toJSON().slice(0, 10)}
								{...(item.due && { value: item.due })}
							/>
						</label>

						<Button type="submit">Save</Button>
					</form>
				</DialogContent>
			</DialogOverlay>
		</AnimatePresence>
	);
};
