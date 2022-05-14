import classNames from 'classnames/bind';
import { ComponentProps, FC } from 'react';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const Input: FC<ComponentProps<'input'>> = ({ className, ...rest }) => {
	return <input className={cx(className, 'root')} {...rest} />;
};
