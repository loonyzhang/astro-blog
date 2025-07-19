export const SITE = {
  website: "https://xlabs.eu.org/", // replace this with your deployed domain
  author: "为知",
  profile: "https://xlabs.eu.org/",
  desc: "一个简单的个人博客，随便记录一些东西。",
  title: "为知",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 0,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
