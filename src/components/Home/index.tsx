import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import { HomeProps } from './home.interface';

import Facebook from '@icons/facebook-1.svg';
import Github from '@icons/github-1.svg';
import Linkedin from '@icons/linkedin-1.svg';
import Instagram from '@icons/instagram-1.svg';
import Twitter from '@icons/twitter-1.svg';

import styles from './home.module.scss';

const Home: FC<HomeProps> = ({ isMobile }) => {
	const socialIcons = [
		{
			Component: Github,
			alt: 'github',
			url: 'https://github.com/thedemon12',
		},
		{
			Component: Linkedin,
			alt: 'linkedin',
			url: 'https://www.linkedin.com/in/kartikbhalla/',
		},
		{
			Component: Instagram,
			alt: 'instagram',
			url: 'https://www.instagram.com/_kartikbhalla/',
		},
		{
			Component: Facebook,
			alt: 'facebook',
			url: 'https://www.facebook.com/kbhalla12',
		},
		{
			Component: Twitter,
			alt: 'twitter',
			url: 'https://twitter.com/kartikbhalla12',
		},
	];

	const AboutContainer: FC<{ className?: string }> = props => (
		<div className={classNames(styles.aboutContainer, props.className)}>
			<p>
				I have experience working with the most advanced tools and libraries
				like React.js and Redux for front-end and using Node.js along with
				modern practices like Serverless, Docker & Kubernetes for back-end.
			</p>
			<p>
				Software Development Engineer at
				<Link href='https://upgradabroad.com' passHref>
					<a target='_blank'> upGrad</a>
				</Link>
				.
			</p>
			<button>Check out my work!</button>
		</div>
	);

	return (
		<div className={styles.container}>
			<div className={styles.socialContainer}>
				<div className={styles.iconsContainer}>
					{socialIcons.map(icon => (
						<a
							href={icon.url}
							className={styles.iconLink}
							target='_blank'
							rel='noreferrer'
							key={icon.alt}>
							<icon.Component className={styles.icon} alt={icon.alt} />
						</a>
					))}
				</div>
			</div>
			<div className={styles.email}>
				<p>
					<a
						href='mailto:contact@kartikbhalla.dev'
						target='_blank'
						rel='noreferrer'>
						<span>contact</span>@kartikbhalla.dev
					</a>
				</p>
			</div>
			<div className={classNames(styles.home, { [styles.mobile]: isMobile })}>
				<div className={styles.content}>
					<div className={styles.information}>
						<h3>Hey, my name is</h3>
						<h1>Kartik Bhalla.</h1>
						<h2>A full-stack web developer.</h2>

						<AboutContainer className={styles.about} />
					</div>
					<div className={styles.imageContainer}>
						<Image
							src='/kartik.png'
							layout='fill'
							alt='kartik bhalla'
							priority
							placeholder='blur'
							blurDataURL='data:image/png;base64,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'
						/>
					</div>
					<AboutContainer className={styles.aboutMobile} />
				</div>
			</div>
		</div>
	);
};

export default Home;
