import { getDefaultThemeCookie } from '@utils/server/theme.server';
import { isMobile } from '@utils/server/isMobile.server';

import LayoutClient from '@components/Layout';
import '@styles/globals.scss';

import { rootMetadata } from '@constants/metadata';
import {
    getPersonStructuredData,
    getWebsiteStructuredData,
} from '@utils/structured-data';
import Head from 'next/head';

export const metadata = rootMetadata;

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = await getDefaultThemeCookie();
    const mobile = await isMobile();

    return (
        <html lang='en' className={`theme-${theme}`}>
            {/* Preconnect to Google Analytics for faster loading */}
            <Head>
                <link rel='preconnect' href='https://www.googletagmanager.com' />
                <link rel='preconnect' href='https://www.google-analytics.com' />
                <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
                <link rel='dns-prefetch' href='https://www.google-analytics.com' />

                {/* DNS prefetch for external social media domains */}
                <link rel='dns-prefetch' href='https://github.com' />
                <link rel='dns-prefetch' href='https://www.linkedin.com' />
                <link rel='dns-prefetch' href='https://www.instagram.com' />
                <link rel='dns-prefetch' href='https://www.facebook.com' />
                <link rel='dns-prefetch' href='https://twitter.com' />
                <link rel='dns-prefetch' href='https://upgradabroad.com' />

                {/* Preload critical font files */}
                <link
                    rel='preload'
                    href='/fonts/cerapro-regular.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />
                <link
                    rel='preload'
                    href='/fonts/cerapro-medium.woff2'
                    as='font'
                    type='font/woff2'
                    crossOrigin='anonymous'
                />

                {/* Structured Data */}
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(getPersonStructuredData()),
                    }}
                />
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(getWebsiteStructuredData()),
                    }}
                />
            </Head>
            <body suppressHydrationWarning>
                <script>0</script>
                <a href='#main-content' className='skip-link'>
                    Skip to main content
                </a>
                <LayoutClient isMobile={mobile} theme={theme}>
                    {children}
                </LayoutClient>
            </body>
        </html>
    );
}

