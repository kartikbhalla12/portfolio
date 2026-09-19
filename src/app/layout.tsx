import ceraPro from "@styles/fonts";
import { rootMetadata } from "@constants/metadata";
import { THEME_BOOTSTRAP_SCRIPT } from "@utils/theme";
import "@styles/globals.scss";

export const metadata = rootMetadata;
export const revalidate = 60;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ceraPro.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }}
        />
      </head>
      <body suppressHydrationWarning>
        <script>0</script>
        {children}
      </body>
    </html>
  );
}
