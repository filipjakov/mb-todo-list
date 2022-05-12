import classNames from 'classnames/bind';
import { ComponentProps, FC } from 'react';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const StrikeThrough: FC<ComponentProps<'s'>> = ({ className, children, ...rest }) => {
	return (
		<s className={cx(className, 'root')} {...rest}>
			{children}
		</s>
	);
};
