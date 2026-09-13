import classNames from 'classnames';

import { isMobile } from '@utils/server/isMobile.server';
import { createMetadata } from '@constants/metadata';
import SiteChrome from '@components/Layout/SiteChrome';

import styles from './custom404.module.scss';

export const metadata = createMetadata({
	title: '404 - Page Not Found',
	description:
		'The page you are looking for could not be found on Kartik Bhalla Portfolio.',
	noindex: true,
});

export default async function NotFound() {
	const mobile = await isMobile();

	return (
		<SiteChrome>
			<main>
				<div
					className={classNames(styles.container, {
						[styles.mobile]: mobile,
					})}>
					<p>
						<span>404</span> | This page could not be found
					</p>
				</div>
			</main>
		</SiteChrome>
	);
}
