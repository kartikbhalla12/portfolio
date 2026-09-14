import Link from 'next/link';

import type { BlogPost } from '@utils/blogs';
import styles from './blogs.module.scss';

const Blogs = ({ posts }: { posts: BlogPost[] }) => {
	return (
		<div className={styles.blogs}>
			<div className={styles.container}>
				<h1>Blogs</h1>
				<p className={styles.intro}>
					Writing on frontend engineering, infrastructure, and the tools I use
					day to day. Full posts live on DevDispatch.
				</p>

				{posts.length ? (
					<ul className={styles.list}>
						{posts.map((post) => (
							<li key={post.url}>
								<p className={styles.date}>{post.date}</p>
								<h2>
									<Link href={post.url} prefetch={false} target="_blank" rel="noreferrer">
										{post.title}
									</Link>
								</h2>
								{post.excerpt ? <p className={styles.excerpt}>{post.excerpt}</p> : null}
							</li>
						))}
					</ul>
				) : (
					<p className={styles.fallback}>
						Posts are on{' '}
						<Link
							href="https://devdispatch.kartikbhalla.dev"
							prefetch={false}
							target="_blank"
							rel="noreferrer"
						>
							devdispatch.kartikbhalla.dev
						</Link>
						.
					</p>
				)}
			</div>
		</div>
	);
};

export default Blogs;
