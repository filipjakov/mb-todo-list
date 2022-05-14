import classNames from 'classnames/bind';

import { Layout } from '@components/Layout';
import { Todos } from '@components/Todos';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export default function Home() {
	return (
		<Layout>
			<main className={cx('content')}>
				<h1 className={cx('heading')}>TODO list app</h1>

				<Todos />
			</main>
		</Layout>
	);
}
