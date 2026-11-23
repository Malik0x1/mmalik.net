import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://mmalik.net",
    title: "Mohammad Malik",
    description: "Networking and Security Technical Write-ups, certifications, and Android & iOS apps by Mohammad Malik.",
    author: "Mohammad Malik",
    profile: "https://mmalik.net",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Australia/Melbourne",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      url: "https://github.com",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/Malik0x1" },
    { name: "x",        url: "https://x.com/Malik0x1" },
    { name: "linkedin", url: "https://www.linkedin.com/in/mohsinulmalik/" },
    { name: "mail",     url: "mailto:malik@mmalik.net" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
