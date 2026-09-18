import { getDefaultThemeCookie } from "@utils/server/theme.server";
import { isMobile } from "@utils/server/isMobile.server";

import ceraPro from "@styles/fonts";
import { rootMetadata } from "@constants/metadata";
import "@styles/globals.scss";

export const metadata = rootMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, mobile] = await Promise.all([
    getDefaultThemeCookie(),
    isMobile(),
  ]);

  return (
    <html
      lang="en"
      className={`${ceraPro.variable} theme-${theme} preloader-lock${
        mobile ? " preloader-lock-mobile" : ""
      }`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body suppressHydrationWarning>
        <script>0</script>
        {children}
      </body>
    </html>
  );
}
