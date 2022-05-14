import classNames from 'classnames/bind';
import { AnimatePresence, Reorder } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ComponentProps, DOMAttributes, FC, FormEvent, useCallback, useState } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Todo, TodoData } from '@components/Todo';
import { TodoEditDialog } from '@components/TodoEditDialog';
import { useEntriesStorage } from '@hooks/useEntriesStorage';
import { useHotKeys } from '@hooks/useHotKeys';
import { useRetrievableState } from '@hooks/useRetrievableState';

import styles from './index.module.css';

const cx = classNames.bind(styles);

// Lazy load the whole dialog component on first edit interaction
const DynamicTodoEditDialog = dynamic<ComponentProps<typeof TodoEditDialog>>(
	() => import('../TodoEditDialog').then((mod) => mod.TodoEditDialog),
	{ ssr: true }
);

export const Todos: FC<ComponentProps<'section'>> = ({ className, ...rest }) => {
	const { state: todos, push, back, forward, reset } = useRetrievableState<Array<TodoData>>([]);
	const [editItem, setEditItem] = useState<TodoData | null>(null);

	useEntriesStorage({ onMount: reset, data: todos });
	useHotKeys({ onUndo: back, onRedo: forward });

	// Handlers
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const { text, due } = Object.fromEntries(new FormData(form));

		push(
			todos.concat({
				id: new Date().getTime(),
				text: text!.toString(),
				due: due?.toString(),
				isDone: false,
			})
		);

		form.reset();
	};

	const onRemove: DOMAttributes<HTMLButtonElement>['onClick'] = ({ currentTarget }) => {
		const removedItemIndex = +currentTarget.dataset['index']!;

		push(todos.filter((_, i) => i !== removedItemIndex));
	};

	const onEdit: DOMAttributes<HTMLButtonElement>['onClick'] = ({ currentTarget }) => {
		const itemToEditIndex = +currentTarget.dataset['index']!;
		setEditItem(todos[itemToEditIndex]!);
	};

	const onToggle = (index: number) => () => {
		push(
			todos.reduce((accumulator, item, currentIndex) => {
				// Flip the existing checkbox value
				const newItem = index === currentIndex ? { ...item, isDone: !item.isDone } : item;
				return accumulator.concat(newItem);
			}, [] as typeof todos)
		);
	};

	// Dialog methods
	const onEditDone = useCallback(
		(item: TodoData) => {
			push(
				todos.reduce((accumulator, currentItem) => {
					// Flip the existing checkbox value
					const newItem = currentItem.id === item.id ? item : currentItem;
					return accumulator.concat(newItem);
				}, [] as typeof todos)
			);
		},
		[push, todos]
	);

	const onDialogDismiss = useCallback(() => setEditItem(null), []);

	return (
		<section className={cx('root')} {...rest}>
			{todos.length > 0 ? (
				<Reorder.Group className={cx('todo-container')} axis="y" layoutScroll values={todos} onReorder={push}>
					<AnimatePresence initial={false}>
						{todos.map((item, i) => (
							<Reorder.Item
								className={cx('todo')}
								key={item.id}
								value={item}
								initial={{ x: '-110%' }}
								animate={{ x: 0 }}
								exit={{ x: '110%' }}
								transition={{
									x: { type: 'spring', stiffness: 300, damping: 30 },
									opacity: { duration: 0.2 },
								}}
							>
								<Todo isDone={item.isDone} text={item.text} due={item.due} onToggle={onToggle(i)} />

								<button data-index={i} onClick={onEdit} title="Edit">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width="20"
										height="20"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 21h18M12.222 5.828 15.05 3 20 7.95l-2.828 2.828m-4.95-4.95-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607m-4.95-4.95 4.95 4.95"
										/>
									</svg>
								</button>

								<button data-index={i} onClick={onRemove} title="Delete">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width="20"
										height="20"
									>
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.992 13h6" />
										<path
											stroke="currentColor"
											d="M3.04 4.294a.496.496 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.496.496 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944l-1.7-12.744Z"
										/>
										<path stroke="currentColor" d="M3 5c2.571 2.667 15.429 2.667 18 0" />
									</svg>
								</button>
							</Reorder.Item>
						))}
					</AnimatePresence>
				</Reorder.Group>
			) : (
				<div className={cx('no-items')}>Enter a new todo below</div>
			)}

			<form onSubmit={onSubmit} className={cx(className, 'form')} autoComplete="off">
				<label>
					<Input type="text" placeholder="Your next TODO item" name="text" required />
				</label>

				<label>
					<Input
						type="date"
						name="due"
						min={new Date().toJSON().slice(0, 10)}
						placeholder={new Date().toJSON().slice(0, 10)}
					/>
				</label>

				<Button type="submit">Submit</Button>
			</form>

			{editItem && <DynamicTodoEditDialog item={editItem} onDismiss={onDialogDismiss} onDone={onEditDone} />}
		</section>
	);
};
