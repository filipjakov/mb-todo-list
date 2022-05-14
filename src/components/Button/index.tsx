import classNames from 'classnames/bind';
import { ComponentProps, FC } from 'react';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const Button: FC<ComponentProps<'button'>> = ({ className, children, ...rest }) => {
	return (
		<button className={cx(className, 'root')} {...rest}>
			{children}
		</button>
	);
};
