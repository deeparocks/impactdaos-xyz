export type Site = {
  website: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
};

export const SITE: Site = {
  website: "https://impactdaos.xyx",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Impact DAOs",
  ogImage: "hero.jpg",
  lightAndDarkMode: true,
};
