import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import TypeScript from '@icons/tech/ts.svg';
import JavaScript from '@icons/tech/js.svg';
import ReactIcon from '@icons/tech/react.svg';
import NextIcon from '@icons/tech/next.svg';
import Redux from '@icons/tech/redux.svg';
import Socket from '@icons/tech/socket.svg';
import HtmlIcon from '@icons/tech/html.svg';
import Sass from '@icons/tech/sass.svg';
import Bootstrap from '@icons/tech/bootstrap.svg';
import Firebase from '@icons/tech/firebase.svg';
import CssIcon from '@icons/tech/css.svg';
import Figma from '@icons/tech/figma.svg';
import Node from '@icons/tech/nodejs.svg';
import Express from '@icons/tech/express.svg';
import Mongo from '@icons/tech/mongodb.svg';
import Github from '@icons/tech/github.svg';
import Git from '@icons/tech/git.svg';

import styles from './skills.module.scss';

const techIcons = [
	{
		Component: TypeScript,
		alt: 'typescript',
		url: 'https://www.typescriptlang.org/',
	},
	{
		Component: JavaScript,
		alt: 'javascript',
		url: 'https://www.javascript.com/',
	},
	{ Component: ReactIcon, alt: 'react', url: 'https://reactjs.org/' },
	{
		Component: NextIcon,
		alt: 'next',
		url: 'https://nextjs.org/',
		fillMode: true,
	},
	{ Component: Redux, alt: 'redux', url: 'https://redux.js.org/' },
	{
		Component: Socket,
		alt: 'socket.io',
		url: 'https://socket.io/',
		fillMode: true,
	},
	{
		Component: HtmlIcon,
		alt: 'html',
		url: 'https://html.spec.whatwg.org/multipage/',
	},
	{ Component: Sass, alt: 'sass', url: 'https://sass-lang.com/' },
	{ Component: Bootstrap, alt: 'bootstrap', url: 'https://getbootstrap.com/' },
	{ Component: Firebase, alt: 'firebase', url: 'https://firebase.google.com/' },
	{
		Component: CssIcon,
		alt: 'css',
		url: 'https://www.w3.org/Style/CSS/Overview.en.html',
	},
	{ Component: Figma, alt: 'figma', url: 'https://www.figma.com' },
	{ Component: Node, alt: 'node.js', url: 'https://nodejs.org/en/' },
	{
		Component: Express,
		alt: 'express.js',
		url: 'https://expressjs.com/',
		fillMode: true,
	},
	{ Component: Mongo, alt: 'mongodb', url: 'https://www.mongodb.com/' },
	{
		Component: Github,
		alt: 'github',
		url: 'https://github.com/',
		fillMode: true,
	},
	{ Component: Git, alt: 'git', url: 'https://git-scm.com/' },
];

const Skills: FC = () => {
	return (
		<div id='skills' className={styles.skills}>
			<div className={styles.container}>
				<div className={styles.iconsContainer}>
					{techIcons.map(icon => (
						<Link href={icon.url} key={icon.alt} passHref>
							<a
								className={classNames({ [styles.fill]: icon.fillMode })}
								target='_blank'
								rel='noreferrer'>
								<icon.Component alt={icon.alt} />
							</a>
						</Link>
					))}
				</div>
				<div className={styles.description}>
					<h1>My Skills</h1>
					<p>
						I love to learn new things and experiment with new technologies.
						These are the tech I use to on regular basis to build exceptional
						softwares on the web.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
