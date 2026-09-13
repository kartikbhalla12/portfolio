const imageProjection = `{
  asset->{
    _id,
    url,
    metadata { lqip, dimensions }
  },
  crop,
  hotspot
}`;

export const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  siteName,
  title,
  description,
  ogImage ${imageProjection},
  resume { asset->{ url, originalFilename } },
  email,
  firstName,
  lastName,
  username,
  twitterHandle,
  jobTitle,
  companyName,
  companyUrl
}`;

export const headerQuery = `*[_id == "header"][0]{
  navLinks
}`;

export const footerQuery = `*[_id == "footer"][0]{
  socials[]{
    name,
    url,
    sidebarIcon ${imageProjection},
    footerIcon ${imageProjection}
  }
}`;

export const homeQuery = `*[_id == "home"][0]{
  greeting,
  name,
  subtitle,
  about,
  companyName,
  companyUrl,
  email,
  ctaLabel,
  ctaHref,
  photo ${imageProjection},
  photoAlt,
  skillsIntro,
  projectsIntro
}`;

export const skillsQuery = `*[_type == "skill"] | order(order asc){
  _id,
  name,
  url,
  icon ${imageProjection},
  fillMode,
  animate
}`;

export const experiencesQuery = `*[_type == "experience"] | order(order asc){
  _id,
  position,
  from,
  to,
  companyName,
  companyUrl,
  tasks[]{ detail, url }
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc){
  _id,
  name,
  description,
  keywords,
  projectUrl,
  githubUrl,
  desktopImage ${imageProjection},
  mobileImage ${imageProjection}
}`;
