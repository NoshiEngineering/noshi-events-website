// TODO: fix this imports so that it won't hamper in data serialization
// import { Facebook, Instagram, Linkedin, Youtube } from "mdi-material-ui";
import { IFooterSection } from "./interface";

export const footerData: IFooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "Home", url: "/home" },
      { label: "Events", url: "/events" },
      { label: "About Us", url: "/about-us" },
      { label: "Contact Us", url: "/contact-us" },
      {
        label: "Privacy Policy",
        url: "/privacy-policy",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Terms and Conditions",
        url: "/terms-and-conditions",
      },
      { label: "FAQs", url: "/faqs" },
      { label: "Blogs", url: "/blogs" },
    ],
  },
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
        url: "https://instagram.com",
        icon: "Instagram",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com",
        icon: "Linkedin",
      },
      {
        label: "YouTube",
        url: "https://youtube.com",
        icon: "Youtube",
      },
    ],
  },
];
