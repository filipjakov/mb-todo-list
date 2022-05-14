import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import { ComponentProps, useCallback, useState } from 'react';

import { HelpDialog } from '@components/HelpDialog';
import { Layout } from '@components/Layout';
import { Todos } from '@components/Todos';

import styles from './index.module.css';

const cx = classNames.bind(styles);

// Lazy load the whole dialog component on first edit interaction
const DynamicHelpDialog = dynamic<ComponentProps<typeof HelpDialog>>(
	() => import('../components/HelpDialog').then((mod) => mod.HelpDialog),
	{ ssr: true }
);

export default function Home() {
	const [shouldOpenDialog, setShouldOpenDialog] = useState(false);

	const toggle = useCallback(() => {
		setShouldOpenDialog((s) => !s);
	}, []);

	return (
		<Layout>
			<button className={cx('help')} onClick={toggle}>
				<span>Click for help</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					width="24"
					height="24"
				>
					<path
						stroke="hsl(var(--color-primary))"
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M20 11a8 8 0 1 0-16 0"
					/>
					<path
						stroke="hsl(var(--color-primary))"
						d="M2 15.438v-1.876a2 2 0 0 1 1.515-1.94l1.74-.436a.6.6 0 0 1 .745.582v5.463a.6.6 0 0 1-.746.583l-1.74-.435A2 2 0 0 1 2 15.439ZM22 15.438v-1.876a2 2 0 0 0-1.515-1.94l-1.74-.436a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.583l1.74-.435A2 2 0 0 0 22 15.439ZM20 18v.5a2 2 0 0 1-2 2h-3.5"
					/>
					<path stroke="hsl(var(--color-primary))" d="M13.5 22h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3Z" />
				</svg>
			</button>

			<main className={cx('content')}>
				<h1 className={cx('heading')}>TODO list app</h1>

				<Todos />

				{shouldOpenDialog && <DynamicHelpDialog close={toggle} />}
			</main>
		</Layout>
	);
}
