import type { SiteSettings } from "src/sanity/types";
import { urlFor } from "src/sanity/image";
import { isSanityImage } from "src/sanity/CmsImage";

const SITE_URL = "https://www.kartikbhalla.dev";
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profile`;

const personImage = (settings: SiteSettings) => {
  if (settings.ogImage && isSanityImage(settings.ogImage) && settings.ogImage.asset) {
    return urlFor(settings.ogImage).width(1200).height(630).url();
  }

  return `${SITE_URL}/logo-light.svg`;
};

const personName = (settings: SiteSettings) =>
  `${settings.firstName} ${settings.lastName}`.trim();

export const getPersonStructuredData = (settings: SiteSettings) => {
  const name = personName(settings);
  const sameAs = (settings.socials || [])
    .map((social) => social.url)
    .filter((url) => url && !url.startsWith("mailto:"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name,
    givenName: settings.firstName,
    familyName: settings.lastName,
    alternateName: [settings.username, "Kartikbhalla", "kartikbhalla.dev"].filter(
      Boolean,
    ),
    url: SITE_URL,
    image: personImage(settings),
    email: settings.email,
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
  const name = personName(settings);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: settings.siteName || name,
    alternateName: ["Kartik Bhalla Portfolio", "kartikbhalla.dev"],
    url: SITE_URL,
    description: settings.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
};

export const getProfilePageStructuredData = (settings: SiteSettings) => {
  const name = personName(settings);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": PROFILE_ID,
    url: SITE_URL,
    name: `${name} | ${settings.jobTitle}`,
    description: settings.description,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
};
