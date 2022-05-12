import classNames from 'classnames/bind';
import { ComponentProps, DOMAttributes, FC, useState } from 'react';

import { StrikeThrough } from '../StrikeThrough';
import styles from './index.module.css';

const cx = classNames.bind(styles);

interface TodoProps extends ComponentProps<'label'> {
	text: string;
}

export const Todo: FC<TodoProps> = ({ className, text, ...rest }) => {
	const [done, setDone] = useState(false);

	const onClick: DOMAttributes<HTMLInputElement>['onClick'] = ({ currentTarget }) => {
		setDone(currentTarget.checked);
	};

	return (
		<label className={cx(className, 'root')} {...rest}>
			<input type="checkbox" onClick={onClick} />

			{done ? <StrikeThrough>{text}</StrikeThrough> : <span>{text}</span>}
		</label>
	);
};
