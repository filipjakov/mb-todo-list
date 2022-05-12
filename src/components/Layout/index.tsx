import classNames from 'classnames/bind';
import { ComponentProps, FC } from 'react';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const Layout: FC<ComponentProps<'div'>> = ({ className, children, ...rest }) => {
	return (
		<div className={cx(className, 'root')} {...rest}>
			{children}
		</div>
	);
};
