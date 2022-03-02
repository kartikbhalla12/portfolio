import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './custom404.module.scss';

interface Custom404Props {
	isMobile: boolean;
}

const Custom404: NextPage<Custom404Props> = ({ isMobile }) => {
	return (
		<>
			<Head>
				<title>404 - Kartik Bhalla</title>
				<meta name='description' content='Kartik Bhalla - Portfolio Website' />
				<link rel='icon' href='/logo.svg' />
			</Head>
			<main>
				<div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
					<p>
						<span>404</span> | This page could not be found
					</p>
				</div>
			</main>
		</>
	);
};

export default Custom404;
