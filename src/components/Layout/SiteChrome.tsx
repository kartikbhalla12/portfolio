import Layout from "@components/Layout";
import { getDefaultThemeCookie } from "@utils/server/theme.server";
import { isMobile } from "@utils/server/isMobile.server";
import { getSiteSettings } from "src/sanity/getContent";
import {
  getPersonStructuredData,
  getProfilePageStructuredData,
  getWebsiteStructuredData,
} from "@utils/structured-data";

const SiteChrome = async ({ children }: { children: React.ReactNode }) => {
  const [settings, theme, mobile] = await Promise.all([
    getSiteSettings(),
    getDefaultThemeCookie(),
    isMobile(),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPersonStructuredData(settings)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebsiteStructuredData(settings)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProfilePageStructuredData(settings)),
        }}
      />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Layout isMobile={mobile} theme={theme} settings={settings}>
        {children}
      </Layout>
    </>
  );
};

export default SiteChrome;
