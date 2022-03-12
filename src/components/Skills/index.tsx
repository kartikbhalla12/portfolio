import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import withToolTip from '@components/helpers/WithTooltip';

import { SkillsProps } from './skills.interface';

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
		name: 'TypeScript',
		alt: 'typescript',
		url: 'https://www.typescriptlang.org/',
	},
	{
		Component: JavaScript,
		name: 'JavaScript',
		alt: 'javascript',
		url: 'https://www.javascript.com/',
	},
	{
		Component: ReactIcon,
		name: 'ReactJS',
		alt: 'react',
		url: 'https://reactjs.org/',
		animate: true,
	},
	{
		Component: NextIcon,
		name: 'NextJS',
		alt: 'next',
		url: 'https://nextjs.org/',
		fillMode: true,
	},
	{
		Component: Redux,
		name: 'ReduxJS',
		alt: 'redux',
		url: 'https://redux.js.org/',
	},
	{
		Component: Socket,
		name: 'Socket.IO',
		alt: 'socket.io',
		url: 'https://socket.io/',
		fillMode: true,
	},
	{
		Component: HtmlIcon,
		name: 'HTML',
		alt: 'html',
		url: 'https://html.spec.whatwg.org/multipage/',
	},
	{
		Component: Sass,
		name: 'Sass',
		alt: 'sass',
		url: 'https://sass-lang.com/',
	},
	{
		Component: Bootstrap,
		name: 'Bootstrap',
		alt: 'bootstrap',
		url: 'https://getbootstrap.com/',
	},
	{
		Component: Firebase,
		name: 'Firebase',
		alt: 'firebase',
		url: 'https://firebase.google.com/',
	},
	{
		Component: CssIcon,
		name: 'CSS',
		alt: 'css',
		url: 'https://www.w3.org/Style/CSS/Overview.en.html',
	},
	{
		Component: Figma,
		name: 'Figma',
		alt: 'figma',
		url: 'https://www.figma.com',
	},
	{
		Component: Node,
		name: 'NodeJS',
		alt: 'node.js',
		url: 'https://nodejs.org/en/',
	},
	{
		Component: Express,
		name: 'ExpressJS',
		alt: 'express.js',
		url: 'https://expressjs.com/',
		fillMode: true,
	},
	{
		Component: Mongo,
		name: 'MongoDB',
		alt: 'mongodb',
		url: 'https://www.mongodb.com/',
	},
	{
		Component: Github,
		name: 'GitHub',
		alt: 'github',
		url: 'https://github.com/',
		fillMode: true,
	},
	{ Component: Git, name: 'Git', alt: 'git', url: 'https://git-scm.com/' },
];

const Skills: FC<SkillsProps> = ({ isMobile }) => {
	return (
		<div id='skills' className={styles.skills}>
			<div className={styles.container}>
				<div className={styles.iconsContainer}>
					{techIcons.map(icon => {
						const SkillComponent = () => {
							return (
								<Link href={icon.url} key={icon.alt} passHref>
									<a
										className={classNames({
											[styles.fill]: icon.fillMode,
											[styles.animate]: icon.animate,
										})}
										target='_blank'
										rel='noreferrer'>
										<icon.Component alt={icon.alt} />
									</a>
								</Link>
							);
						};

						const ComponentWithToolTip = withToolTip<{ alt: string }>(
							SkillComponent,
							icon.name
						);

						return isMobile ? (
							<SkillComponent key={icon.alt} />
						) : (
							<ComponentWithToolTip alt={icon.alt} key={icon.alt} />
						);
					})}
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
