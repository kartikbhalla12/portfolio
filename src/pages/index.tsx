import type { NextPage } from 'next';

import Home from '@components/Home';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Projects from '@components/Projects';

import styles from './index.module.scss';
import { Theme } from '@interfaces/theme';

interface LandingPageProps {
	isMobile: boolean;
	theme: Theme;
}

const LandingPage: NextPage<LandingPageProps> = ({ isMobile, theme }) => {
	return (
		<main tabIndex={-1}>
			<Home isMobile={isMobile} />
			<Skills isMobile={isMobile} />
			<Experience isMobile={isMobile} />
			<Projects isMobile={isMobile} theme={theme} />
		</main>
	);
};

export default LandingPage;
