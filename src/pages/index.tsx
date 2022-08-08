import type { NextPage } from 'next';

import Home from '@components/Home';
import Skills from '@components/Skills';
import Experience from '@components/Experience';

import styles from './index.module.scss';

interface LandingPageProps {
	isMobile: boolean;
}

const LandingPage: NextPage<LandingPageProps> = ({ isMobile }) => {
	return (
		<main tabIndex={-1}>
			<Home isMobile={isMobile} />
			<Skills isMobile={isMobile} />
			<Experience isMobile={isMobile} />
		</main>
	);
};

export default LandingPage;
