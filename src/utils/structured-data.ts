import type { SiteSettings } from "src/sanity/types";
import { urlFor } from "src/sanity/image";
import { isSanityImage } from "src/sanity/CmsImage";

const personImage = (settings: SiteSettings) => {
  if (settings.ogImage && isSanityImage(settings.ogImage) && settings.ogImage.asset) {
    return urlFor(settings.ogImage).width(1200).height(630).url();
  }

  return "https://www.kartikbhalla.dev/logo-light.svg";
};

export const getPersonStructuredData = (settings: SiteSettings) => {
  const sameAs = (settings.socials || [])
    .map((social) => social.url)
    .filter((url) => url && !url.startsWith("mailto:"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${settings.firstName} ${settings.lastName}`,
    url: "https://www.kartikbhalla.dev",
    image: personImage(settings),
    sameAs,
    jobTitle: settings.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: settings.companyName,
      url: settings.companyUrl,
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Netaji Subhas University of Technology",
        url: "https://www.nsut.ac.in",
      },
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "TypeScript",
      "JavaScript",
      "Frontend Architecture",
      "Performance Optimization",
    ],
    description: settings.description,
  };
};

export const getWebsiteStructuredData = (settings: SiteSettings) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: settings.siteName,
    url: "https://www.kartikbhalla.dev",
    description: settings.description,
    author: {
      "@type": "Person",
      name: `${settings.firstName} ${settings.lastName}`,
    },
  };
};
