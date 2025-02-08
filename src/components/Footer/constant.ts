// TODO: fix this imports so that it won't hamper in data serialization
// import { Facebook, Instagram, Linkedin, Youtube } from "mdi-material-ui";
import { IFooterSection } from "./interface";

export const footerData: IFooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "Home", url: "/home" },
      // { label: "Events", url: "/events" },
      { label: "About Us", url: "/about-us" },
      { label: "Contact Us", url: "/contact-us" },
      // {
      //   label: "Privacy Policy",
      //   url: "/privacy-policy",
      // },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Corporate Events", url: "/corporate-events" },
      { label: "Personal Events", url: "/personal-events" },
      { label: "Sports Events", url: "/sports-events" },
      { label: "Promotional Events", url: "/promotional-events" },
    ],
  },
  // {
  //   title: "Services",
  //   links: [
  //     {
  //       label: "Terms and Conditions",
  //       url: "/terms-and-conditions",
  //     },
  //     // { label: "FAQs", url: "/faqs" },
  //     { label: "Blogs", url: "/blogs" },
  //   ],
  // },
  {
    title: "Socials",
    links: [
      {
        label: "Facebook",
        url: "https://facebook.com",
        icon: "Facebook",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/noshievents",
        icon: "Instagram",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/noshievents",
        icon: "Linkedin",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UC43-JcTDGR0Ickfxznz3YTQ",
        icon: "Youtube",
      },
    ],
  },
  {
    title: "Blogs",
    links: [
      { label: "What is Event Planning?", url: "/blog/what-is-event-planning-strategies-and-examples" },
      { label: "How to Choose the Perfect Venue for Your Event", url: "/blog/how-to-choose-perfect-event-venue" },
      { label: "Common Challenges in Event Planning", url: "/blog/common-challenges-event-planning-overcome" },
      { label: "Top Trends in Event Themes for 2025", url: "/blog/top-trends-event-themes-2025" },
      { label: "The Ultimate Checklist for Planning a Wedding", url: "/blog/ultimate-checklist-for-planning-a-wedding" },
    ],
  },
];
