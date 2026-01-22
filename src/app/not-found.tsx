import type { Metadata } from 'next';
import classNames from 'classnames';

import { isMobile } from '@utils/server/isMobile.server';

import styles from './custom404.module.scss';

export const metadata: Metadata = {
    title: '404 - Kartik Bhalla',
    description: 'Kartik Bhalla - Portfolio Website',
};

export default async function NotFound() {
    const mobile = await isMobile();

    return (
        <main>
            <div
                className={classNames(styles.container, {
                    [styles.mobile]: mobile,
                })}>
                <p>
                    <span>404</span> | This page could not be found
                </p>
            </div>
        </main>
    );
}

