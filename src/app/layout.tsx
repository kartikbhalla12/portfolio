import { getDefaultThemeCookie } from "@utils/server/theme.server";

import ceraPro from "@styles/fonts";
import { rootMetadata } from "@constants/metadata";
import "@styles/globals.scss";

export const metadata = rootMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getDefaultThemeCookie();

  return (
    <html lang="en" className={`${ceraPro.variable} theme-${theme}`}>
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
