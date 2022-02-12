import { FC } from 'react';
import Image from 'next/image';

import { HomeProps } from './home.interface';
import styles from './home.module.scss';

const Home: FC<HomeProps> = ({ isMobile }) => {
	const socialIcons = [
		{
			src: '/icons/github-1.svg',
			alt: 'github',
			url: 'https://github.com/thedemon12',
		},
		{
			src: '/icons/linkedin-1.svg',
			alt: 'linkedin',
			url: 'https://www.linkedin.com/in/kartikbhalla/',
		},
		{
			src: '/icons/instagram-1.svg',
			alt: 'instagram',
			url: 'https://www.instagram.com/_kartikbhalla/',
		},
		{
			src: '/icons/facebook-1.svg',
			alt: 'facebook',
			url: 'https://www.facebook.com/kbhalla12',
		},
		{
			src: '/icons/twitter-1.svg',
			alt: 'twitter',
			url: 'https://twitter.com/kartikbhalla12',
		},
	];
	return (
		<div className={`${styles.home} ${isMobile ? styles.mobile : ''}`}>
			<div className={styles.social}>
				{socialIcons.map(icon => (
					<div key={icon.alt}>
						<a href={icon.url} target='_blank' rel='noreferrer'>
							<Image src={icon.src} layout='fill' alt={icon.alt} />
						</a>
					</div>
				))}
			</div>

			<div className={styles.content}>
				<div className={styles.greet}>
					<h3>Hey, my name is</h3>
					<h1>Kartik Bhalla.</h1>
					<h2>A full-stack web developer.</h2>
				</div>
				<div className={styles.about}>
					<p>
						I have experience working with the most advanced tools and libraries
						like React.js and Redux for front-end and using Node.js along with
						modern practices like Serverless, Docker & Kubernetes for back-end.
					</p>
					<p>
						Upcoming Associate software engineer at <span>Amdocs.</span>
						<button>Check out my work!</button>
					</p>
				</div>
				<div className={styles.imageContainer}>
					<Image src='/kartik.png' layout='fill' alt='kartik bhalla' />
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
		</div>
	);
};

export default Home;
