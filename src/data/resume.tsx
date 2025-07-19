import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raquib Reyaz",
  initials: "DV",
  url: "https://github.com/raqibreyaz",
  location: "Varanasi, India",
  locationLink: "https://www.google.com/maps/place/varanasi",
  description:
    "Full Stack Developer with a System Programming Core — building from frontend to the kernel",
  summary:
    "I'm a full stack developer with a strong foundation in C++, operating systems, and low-level networking. From building intuitive UIs with React to engineering performant backends and writing custom file sync or proxy servers in C/C++, I love creating end-to-end systems that are both user-friendly and deeply optimized. I believe in understanding things from the metal up — whether it's browser-side rendering or socket-level data transfer.",
  avatarUrl: "/Raquib Reyaz.jpeg",
  skills: [
    "Typescript",
    "C/C++",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
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
      title: "Banaras Mart",
      href: "https://banaras-mart.vercel.app/",
      dates: "May 2024 - Aug 2024",
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
          href: "https://github.com/Raqibreyaz/Banaras-Mart-Backend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raqibreyaz/Banaras-Mart-Frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/banaras-mart.png",
      video: "",
    },
    {
      title: "ProxyRaQ",
      href: "https://youtu.be/sULLf803qwQ",
      dates: "Feb 2025 - July 2025",
      active: true,
      description:
        "Developed a multi-threaded HTTP/HTTPS proxy server using POSIX threads, sockets, and OpenSSL for secure SSL tunneling.Load tested with 10K requests @ 100 concurrent clients over real content (1.2KB per request), sustaining 3150+ req/sec, 0% failure, and ~4MB/sec throughput",
      technologies: [
        "C",
        "Sockets",
        "HTTP Parsing",
        "Posix Threads",
        "Thread Pool",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Raqibreyaz/Multithreaded-Proxy-Web-Server-With-Cache",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/sULLf803qwQ",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/code.jpg",
      video: "",
    },
    {
      title: "Finance Manager",
      href: "https://finance-manager-raqib.vercel.app/",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description:
        "Finance Manager - a sleek PWA that tracks your income, expenses, and savings with precision. Filter by payee, category, or account; generate insightful reports with charts; and manage multiple accounts effortlessly. Built with Next.js, TypeScript, and PostgreSQL — it’s your personal finance dashboard, anytime, anywhere. ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "Hono.js",
        "TailwindCSS",
        "Shadcn",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://finance-manager-raqib.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Raqibreyaz/Finance-Manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Finance-Manager.png",
      video: "",
    },
    {
      title: "Synclet",
      href: "https://youtu.be/t_7HGiFl3x0",
      dates: "May 2025 - July 2025",
      active: true,
      description:
        "Tired of constant polling? So were we. Tired of syncing whole files just because 2 bytes changed? Same here. Synclet is built to sync files precisely, using content-defined chunking, event-driven notifications, and peer-based snapshots, all without wasting cycles.",
      technologies: [
        "C++",
        "Inotify",
        "Epoll",
        "Content-Defined-Chunking",
        "Rolling Hash",
        "SHA-256",
        "Custom Protocol",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Raqibreyaz/Synclet",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/t_7HGiFl3x0",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/sync.jpg",
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
