import type { Metadata } from 'next';

import { getDefaultThemeCookie } from '@utils/server/theme.server';
import { isMobile } from '@utils/server/isMobile.server';

import LayoutClient from '@components/Layout';
import '@styles/globals.scss';

import keywords from '@constants/keywords';

export const metadata: Metadata = {
    title: 'Kartik Bhalla - Portfolio Website',
    description:
        'As a passionate full-stack web developer, I create amazing websites and web apps to make the internet a better place. I have experience working with the most advanced tools and libraries like React.js and Redux for front-end and using Node.js along with modern practices like Serverless, Docker & Kubernetes for back-end.',
    authors: [{ name: 'Kartik Bhalla' }],
    keywords: keywords.toString(),
    openGraph: {
        type: 'profile',
        title: 'Kartik Bhalla - Portfolio Website',
        description:
            'As a passionate full-stack web developer, I create amazing websites and web apps to make the internet a better place. I have experience working with the most advanced tools and libraries like React.js and Redux for front-end and using Node.js along with modern practices like Serverless, Docker & Kubernetes for back-end.',
        url: 'https://www.kartikbhalla.dev',
        images: [
            {
                url: 'https://www.kartikbhalla.dev/kartik.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@kartikbhalla12',
        title: 'Kartik Bhalla - Portfolio Website',
        description:
            'As a passionate full-stack web developer, I create amazing websites and web apps to make the internet a better place. I have experience working with the most advanced tools and libraries like React.js and Redux for front-end and using Node.js along with modern practices like Serverless, Docker & Kubernetes for back-end.',
        images: ['https://www.kartikbhalla.dev/kartik.png'],
    },
    icons: {
        icon: '/logo-light.svg',
    },
};

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

