import {
  RiFacebookFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiCompasses2Fill,
  RiMagicLine,
  RiToolsLine,
  RiAncientPavilionLine,
} from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { GiArtificialIntelligence, GiHalfTornado } from "react-icons/gi";

export const HEADER_NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const FOOTER_NAV_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Our Services", href: "/services" },
  { name: "Our Work", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog & News", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const MOBILE_NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog & News", href: "/blog" },
  { name: "F.A.Q.", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const ADMIN_NAV_LINKS = [
  { name: "Overview", href: "/admin/overview" },
  { name: "Projects", href: "/admin/projects" },
  { name: "Articles", href: "/admin/articles" },
  { name: "Services", href: "/admin/services" },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: RiInstagramLine,
  },
  { label: "Facebook", href: "https://www.facebook.com", icon: RiFacebookFill },
  { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company",
    icon: RiLinkedinFill,
  },
];

export const TEAM_LIST = [
  {
    name: "James Brown",
    slug: "james-brown",
    position: "Design",
    country: "Los Angeles, CA",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/James_Brown.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
  {
    name: "Natalie Martinez",
    slug: "natalie-martinez",
    position: "Design",
    country: "San Francisco, CA",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/Natalie_Martinez.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
  {
    name: "Alan Webber",
    slug: "alan-webber",
    position: "Design",
    country: "Dallas, TX",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/Alan_Webber.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
  {
    name: "Patricia Glasper",
    slug: "patricia-glasper",
    position: "Design",
    country: "New York, NY",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/Patricia_Glasper.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
  {
    name: "Bobby Fetcher",
    slug: "bobby-fetcher",
    position: "Design",
    country: "New York, NY",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/Bobby_Fetcher.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
  {
    name: "Jacqueline Jackson",
    slug: "jacqueline-jackson",
    position: "Design",
    country: "Los Angeles, CA",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/Jacqueline_Jackson.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
  {
    name: "Mark Fitz",
    slug: "mark-fitz",
    position: "Design",
    country: "New York, NY",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/Mark_Fitz.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
  {
    name: "Nora Owen",
    slug: "nora-owen",
    position: "Design",
    country: "Vancouver, BC",
    phone: "+1 (800) 430-2154",
    email: "email@email.com",
    image: "/images/team/Nora_Owen.jpg",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: RiInstagramLine,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: RiFacebookFill,
      },
      { label: "TwitterX", href: "https://x.com", icon: RiTwitterXFill },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: RiLinkedinFill,
      },
    ],
  },
];

export const BRAND_LIST = [
  { label: "ModernHome", image: "/icons/brand_01.svg" },
  { label: "StyleVintageInterior", image: "/icons/brand_02.svg" },
  { label: "Brand", image: "/icons/brand_03.svg" },
  { label: "NatureHome", image: "/icons/brand_04.svg" },
  { label: "ClassicDesignStudio", image: "/icons/brand_05.svg" },
];

export const TESTIMONIAL_LIST = [
  {
    name: "Nattasha Mith",
    location: "New York, USA",
    image: "/images/testimonial/Nattasha_Mith.jpg",
    message:
      "The team exceeded all our expectations! They created a stylish, functional, and cozy interior that perfectly suits our lifestyle. Thank you so much for your professionalism and attention to detail!",
  },
  {
    name: "Raymond Galario",
    location: "Veracruz, Mexico",
    image: "/images/testimonial/Raymond_Galario.jpg",
    message:
      "The designers' work is impressive! Their attentiveness to our wishes and innovative solutions turned our home into a true masterpiece. Highly recommend to anyone dreaming of their ideal space!",
  },
  {
    name: "Benny Roll",
    location: "Sydney, Australia",
    image: "/images/testimonial/Benny_Roll.jpg",
    message:
      "Working with this company was a pleasure and so easy. They considered all our preferences, creating a space we truly love. Thank you for the outstanding service!",
  },
  {
    name: "Leandro Kaplan",
    location: "Basel, Switzerland",
    image: "/images/testimonial/Leandro_Kaplan.jpg",
    message:
      "The designers chose the perfect color palette and furniture, paying attention to every little detail. We’re thrilled with the result — our home is now stylish, modern, and incredibly comfortable!",
  },
  {
    name: "Noelle Otto",
    location: "Oslo, Norway",
    image: "/images/testimonial/Noelle_Otto.jpg",
    message:
      "Our new apartment looks fantastic, all thanks to this professional team! The design was done with every detail in mind, making our lives so much more enjoyable. Thank you for the amazing work!",
  },
];

export const STAT_LIST = [
  { countNum: 12, text: "Years Of Experiance" },
  { countNum: 85, text: "Success Project" },
  { countNum: 15, text: "Active Project" },
  { countNum: 95, text: "Happy Customers" },
];

export const ICON_MAP: Record<string, React.ElementType> = {
  RiCompasses2Fill,
  RiAncientPavilionLine,
  RiMagicLine,
  RiToolsLine,
  BsBuildings,
  GiArtificialIntelligence,
  GiHalfTornado,
};
