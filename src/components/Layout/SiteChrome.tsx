import Layout from "@components/Layout";
import { getSiteSettings } from "src/sanity/getContent";
import {
  getPersonStructuredData,
  getProfilePageStructuredData,
  getWebsiteStructuredData,
} from "@utils/structured-data";

const SiteChrome = async ({ children }: { children: React.ReactNode }) => {
  const settings = await getSiteSettings();

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
      <Layout settings={settings}>{children}</Layout>
    </>
  );
};

export default SiteChrome;
