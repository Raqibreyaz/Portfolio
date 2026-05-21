import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raquib Reyaz",
  initials: "DV",
  url: "https://github.com/raqibreyaz",
  location: "Varanasi, India",
  locationLink: "https://www.google.com/maps/place/varanasi",
  description:
    "Backend-focused Software Engineer | Building reliable systems and cloud products",
  summary: `I build backend systems and cloud products with Node.js, AWS, Linux, and C/C++. I’m especially interested in scalable architecture, storage systems, and the low-level details that make software reliable. 
  
  I enjoy turning ideas into working systems and learning deeply from the process. I’m looking for backend, cloud, and systems roles where I can contribute to real products and keep improving as an engineer..`,
  avatarUrl: "/Raquib Reyaz.jpeg",
  skills: [
    "Typescript",
    "Node.js",
    "Redis",
    "AWS",
    "CI/CD",
    "MongoDB",
    "PostgreSQL",
    "React",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "raquibreyaz111@gmail.com",
    tel: "+919696056005",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raqibreyaz",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raqibreyaz",
        icon: Icons.linkedin,

        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/raquibreyaz",
        icon: Icons.leetcode,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@codin7367",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "raquibreyaz111@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "Bhabha Engineering Research Institute",
      href: "https://www.bhabhauniversity.edu.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/Bhabha_University_logo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Bal Bharatiya English School",
      href: "http://www.bbeschool.com/",
      degree: "Senior Secondary Education (class 12th, ISC)",
      logoUrl: "/bal-bharatiya-english-school.jpg",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Storra",
      href: "https://storra.netlify.app",
      // dates: "May 2024 - Aug 2024",
      active: true,
      description:
        "Storra is a cloud file storage app with hierarchical file management, direct S3 uploads and streaming, recursive folder operations, and subscription-based storage.",
      technologies: [
        "Node.js",
        "Redis",
        "Amazon S3",
        "Cloudfront CDN",
        "Express.js",
        "MongoDB",
        "Emailing System",
        "Razorpay",
        "React.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://storra.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raqibreyaz/Storra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Storra.png",
      video: "",
    },
    {
      title: "Banaras Mart",
      href: "https://banaras-mart.vercel.app/",
      // dates: "May 2024 - Aug 2024",
      active: true,
      description:
        "Banaras Mart — your go-to online store for elegant women's fashion! Seamlessly shop with cash on delivery or Razorpay, manage orders, wishlist favorites, and track returns. Powerful dashboards for sellers and admins, real-time sales charts, and secure login flows make this a complete, stylish, and user-friendly e-commerce experience.",
      technologies: [
        "Javascript",
        "React.js",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Redux Toolkit",
        "Razorpay",
        "Node.js",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://banaras-mart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raqibreyaz/Banaras-Mart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/banaras-mart.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
