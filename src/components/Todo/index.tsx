import classNames from 'classnames/bind';
import { ComponentProps, DOMAttributes, FC, useState } from 'react';

import { StrikeThrough } from '../StrikeThrough';
import styles from './index.module.css';

const cx = classNames.bind(styles);

export interface TodoData {
	id: number;
	text: string;
	due: string | undefined;
	isDone: boolean;
}

interface TodoProps extends Omit<TodoData, 'id'>, ComponentProps<'label'> {
	onToggle: (...args: any) => any;
}

export const Todo: FC<TodoProps> = ({ className, isDone, text, due, onToggle, ...rest }) => {
	const [done, setDone] = useState(isDone);
	const Component = done ? StrikeThrough : 'span';

	const onClick: DOMAttributes<HTMLInputElement>['onClick'] = ({ currentTarget }) => {
		setDone(currentTarget.checked);
		onToggle();
	};

	return (
		<label className={cx(className, 'root')} {...rest}>
			<input type="checkbox" onClick={onClick} checked={isDone} />

			<Component>
				{due ? (
					<>
						{text}
						<br />
						Due: {due}
					</>
				) : (
					text
				)}
			</Component>
		</label>
	);
};
