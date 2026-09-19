import Link from 'next/link';

import type { ProjectContent } from 'src/sanity/types';
import styles from './archive.module.scss';

const hostLabel = (url?: string) => {
	if (!url) return null;
	try {
		return new URL(url).hostname.replace(/^www\./, '');
	} catch {
		return url;
	}
};

const Archive = ({ projects }: { projects: ProjectContent[] }) => {
	return (
		<div className={styles.archive}>
			<div className={styles.container}>
				<p className={styles.kicker}>
					<Link href="/#projects" prefetch={false}>
						← Featured work
					</Link>
				</p>
				<h1>All Projects</h1>
				<p className={styles.intro}>
					A complete list of selected work, with links and the stack used
					for each project.
				</p>

				<div className={styles.tableWrap}>
					<table>
						<thead>
							<tr>
								<th>Project</th>
								<th>Built with</th>
								<th>Link</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project) => {
								const href =
									project.links.project || project.links.github;
								const label = project.links.project
									? hostLabel(project.links.project)
									: project.links.github
										? 'GitHub'
										: null;

								return (
									<tr key={project._id}>
										<td className={styles.name}>{project.name}</td>
										<td className={styles.stack}>
											{project.keywords.join(' · ')}
										</td>
										<td className={styles.link}>
											{href && label ? (
												<Link
													href={href}
													prefetch={false}
													target="_blank"
													rel="noreferrer"
												>
													{label}
												</Link>
											) : (
												'—'
											)}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Archive;
