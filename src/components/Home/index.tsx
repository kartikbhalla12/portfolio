import Image from 'next/image';
import { FC } from 'react';
import styles from './index.module.scss';

interface HomeProps {
	isMobile: boolean;
}
const Home: FC<HomeProps> = ({ isMobile }) => {
	return (
		<div className={`${styles.home} ${isMobile ? styles.mobile : ''}`}>
			<div className={styles.social}>
				<div className={styles.socialIcon}>
					<Image src='/home-github.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={styles.socialIcon}>
					<Image src='/home-linkedin.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={styles.socialIcon}>
					<Image src='/home-instagram.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={styles.socialIcon}>
					<Image src='/home-facebook.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={styles.socialIcon}>
					<Image src='/home-twitter.svg' layout='fill' alt='kb-logo' />
				</div>
			</div>
			<div className={styles.email}>
				<p>
					<span>contact</span>@kartikbhalla.dev
				</p>
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
					<Image src='/kartik-2.png' layout='fill' alt='kartik bhalla' />
				</div>
			</div>
		</div>
	);
};

export default Home;
