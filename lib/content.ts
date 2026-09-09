/**
 * Single source of truth for everything on the page.
 *
 * Deliberately excludes education / university, per the site owner's request.
 */

export const profile = {
  name: "Abdul Hadi",
  role: "Software Engineer",
  headline: "Software Engineer & Computer Vision Developer",
  location: "Multan, Pakistan",
  email: "anhadisk11@gmail.com",
  phone: "+92 300 6341150",
  phoneHref: "+923006341150",
  github: "https://github.com/ABDULHADI089",
  linkedin: "https://www.linkedin.com/in/abdul-hadi-72b190201",
  available: true,
  availabilityNote: "Available for new work",
  summary:
    "Software engineer working across full-stack web and mobile products and applied computer vision — taking models out of notebooks and getting them running where the lighting is bad and the phones are slow.",
} as const;

export const heroMeta = [
  { label: "ROLE", value: "Software Engineer" },
  { label: "FOCUS", value: "Full-stack + computer vision" },
  { label: "BASED", value: "Multan, Pakistan" },
  { label: "STACK", value: "TypeScript, Python, C++" },
] as const;

export const stats = [
  { value: 4, suffix: "+", label: "YEARS SHIPPING" },
  { value: 6, suffix: "+", label: "PRODUCTS DELIVERED" },
  { value: 3, suffix: "", label: "COMPANIES" },
  { value: 2, suffix: "", label: "DISCIPLINES" },
] as const;

export const marquee = [
  "NEXT.JS",
  "REACT NATIVE",
  "NESTJS",
  "SUPABASE",
  "PYTORCH",
  "OPENCV",
  "TENSORFLOW",
  "TURBOREPO",
  "DOCKER",
] as const;

export const aboutParagraphs = [
  {
    text: "I started in AI — training models at Heapware, then building a real-time facial recognition attendance system at Intermarket Knit that replaced punch cards for an entire knitwear factory. It didn't stay a demo. I wired it into the ERP's HR and payroll modules so attendance reconciled itself and manual payroll errors stopped happening.",
    emphasis: "real-time facial recognition attendance system",
  },
  {
    text: "These days at DevNodes I mostly ship product: a commuter rail platform for South Africa, a cloud POS running a live electronics store, and Turborepo monorepos where a Next.js web app and an Expo mobile app share one backend and one set of types.",
    emphasis: null,
  },
  {
    text: "The vision work never left. Smart Cric is the current one — ball tracking and umpiring decisions from a phone camera, on the kind of uneven street pitch no dataset has ever seen.",
    emphasis: null,
  },
] as const;

export const aboutFacts = [
  { label: "CURRENTLY", value: "Software Engineer at DevNodes", accent: "DevNodes" },
  { label: "PREVIOUSLY", value: "Intermarket Knit · Heapware", accent: null },
  { label: "WORKING IN", value: "Next.js, Expo, NestJS, PyTorch", accent: null },
  { label: "STATUS", value: "Open to opportunities", accent: "Open to opportunities" },
] as const;

export const heroPhoto = {
  src: "/media/travel/summit.jpg",
  alt: "Abdul Hadi against a mountain skyline in northern Pakistan",
  caption: "Signal: 0 bars. View: 10/10.",
} as const;

export const aboutPhoto = {
  src: "/media/travel/about-portrait.jpg",
  alt: "Abdul Hadi looking out at a waterfall in northern Pakistan",
  caption: "Multan, PK",
} as const;

/**
 * The personal, non-work side of the page. Photos live in public/media/travel,
 * resized/compressed from the originals — see scripts note in git history.
 */
export const beyond = {
  tag: "Off the clock",
  heading: "Same instinct, different terrain",
  lead: "The step most vision projects skip is testing where the thing will actually run — a dusty factory floor, a street pitch, bad lighting. I apply the same instinct off-screen: go and see how it actually behaves in the real world.",
  photos: [
    {
      src: "/media/travel/waterfall.jpg",
      alt: "Abdul Hadi sitting by a waterfall with a rainbow in the spray",
      caption: "Found an edge case with a rainbow in it",
      tall: true,
    },
    {
      src: "/media/travel/canyon.jpg",
      alt: "Abdul Hadi smiling in a narrow canyon beneath a waterfall",
      caption: "No dataset has ever seen this pitch either",
      tall: false,
    },
    {
      src: "/media/travel/waterfall-2.jpg",
      alt: "Abdul Hadi sitting by a waterfall with a rainbow in the spray, first take",
      caption: "Same waterfall, different commit",
      tall: false,
    },
    {
      src: "/media/travel/about-portrait.jpg",
      alt: "Abdul Hadi looking out at a waterfall in northern Pakistan",
      caption: "Staring at the render, not the water",
      tall: true,
    },
    {
      src: "/media/travel/waterfall-3.jpg",
      alt: "Abdul Hadi sitting by a waterfall with a rainbow in the spray, second take",
      caption: "Reran it. Same rainbow.",
      tall: false,
    },
    {
      src: "/media/travel/waterfall-recline.jpg",
      alt: "Abdul Hadi sitting sideways on rocks looking out at a waterfall and lake",
      caption: "Taking a break between deploys",
      tall: false,
    },
  ],
} as const;

export type Project = {
  id: string;
  kind: string;
  title: string;
  blurb: string;
  stack: readonly string[];
  glyph: "orbit" | "scan" | "rail" | "pos" | "house" | "face";
  wide?: boolean;
  video?: string;
};

export const projects: readonly Project[] = [
  {
    id: "smart-cric",
    kind: "COMPUTER VISION · IN PROGRESS",
    title: "Smart Cric — AI umpire for tape-ball cricket",
    blurb:
      "Real-time ball tracking and umpiring decisions from a phone camera, with a live scoreboard — built for street cricket, where there are no line markings, no fixed camera and no clean footage. Now growing into a Turborepo monorepo with a Next.js web app, an Expo mobile app and live score API integration.",
    stack: ["OpenCV", "PyTorch", "Expo", "Next.js", "Turborepo"],
    glyph: "orbit",
    wide: true,
    video: "/media/smart-cric-demo.mp4",
  },
  {
    id: "facial-attendance",
    kind: "COMPUTER VISION · SHIPPED",
    title: "Facial Attendance System",
    blurb:
      "Touchless staff attendance for a knitwear factory floor. Recognises faces in real time and feeds straight into the ERP's HR and payroll modules, so the register reconciles itself.",
    stack: ["TensorFlow", "OpenCV", "Python", "SQL"],
    glyph: "scan",
  },
  {
    id: "trektrain",
    kind: "WEB PLATFORM · SHIPPED",
    title: "TrekTrain",
    blurb:
      "A commuter rail booking platform for the South African market, built at DevNodes — schedules, seat selection and ticketing for daily riders.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    glyph: "rail",
  },
  {
    id: "pk-electric-pos",
    kind: "RETAIL SOFTWARE · LIVE",
    title: "Pakistan Electric POS",
    blurb:
      "Cloud-based, multi-user EPOS running an electronics retail store — inventory, billing and multi-terminal sync, used daily by staff on the shop floor.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    glyph: "pos",
  },
  {
    id: "household-staff",
    kind: "MONOREPO · WEB + MOBILE",
    title: "Household Staff Manager",
    blurb:
      "A Turborepo monorepo pairing a Next.js dashboard with an Expo mobile app on a shared Supabase backend, for assigning and tracking household staff work.",
    stack: ["Turborepo", "Expo", "Supabase"],
    glyph: "house",
  },
  {
    id: "emotion-checker",
    kind: "DEEP LEARNING",
    title: "Emotion Checker",
    blurb:
      "Classifies human emotion from facial expressions with a deep learning model, and a visualization layer that makes the prediction legible instead of a bare label.",
    stack: ["Keras", "OpenCV", "Python"],
    glyph: "face",
  },
];

export const experience = [
  {
    when: "Present",
    live: true,
    role: "Software Engineer",
    org: "DevNodes",
    points: [
      "Build full-stack web and mobile products with Next.js, React Native (Expo), Node.js, NestJS and Supabase/PostgreSQL.",
      "Developed TrekTrain, a commuter rail booking platform for the South African market.",
      "Architected a NestJS + Drizzle ORM backend monorepo with Zod validation, containerized with Docker.",
      "Work in Turborepo monorepos where a Next.js web app and an Expo mobile app share one backend.",
      "Delivered Pakistan Electric POS, a cloud-based multi-user EPOS for an electronics retailer.",
    ],
  },
  {
    when: "Mar 2025 — Nov 2025",
    live: false,
    role: "Software Developer",
    org: "Intermarket Knit Pvt., Lahore",
    points: [
      "Led development and deployment of an ERP spanning Finance, HR and Inventory to centralize operations.",
      "Built a real-time facial recognition attendance system replacing legacy time tracking.",
      "Integrated it with HR and payroll, automating reconciliation and removing manual errors.",
      "Engineered SQL schemas and queries handling large transactional volumes with real-time reporting.",
      "Ran requirement analysis and UAT directly with HR and Finance department heads.",
    ],
  },
  {
    when: "Jun 2023 — Mar 2024",
    live: false,
    role: "AI Engineer",
    org: "Heapware Technologies, Lahore",
    points: [
      "Developed and shipped AI models across a range of applications as part of the AI engineering team.",
      "Improved existing solutions and integrated new features into production pipelines.",
      "Worked with the wider dev team to get models deployed and running reliably.",
    ],
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Understand",
    body: "I sit with the people who'll actually use the thing. At Intermarket I ran requirement analysis directly with HR and Finance heads — that's where you find the real rules nobody wrote down.",
    chips: ["Stakeholder interviews", "Requirement analysis", "Scoping"],
  },
  {
    n: "02",
    title: "Model the data",
    body: "Schema first. Get the relationships and constraints right early and the rest of the app mostly writes itself. Get them wrong and you pay for it six months later.",
    chips: ["PostgreSQL", "Drizzle ORM", "Zod"],
  },
  {
    n: "03",
    title: "Build",
    body: "Typed end to end, usually in a Turborepo monorepo so the web app and the mobile app share one backend and one set of types instead of drifting apart.",
    chips: ["Next.js", "Expo", "NestJS", "Turborepo"],
  },
  {
    n: "04",
    title: "Test in the real world",
    body: "The step most vision projects skip. A model that scores well on clean data still fails on a dusty factory floor or a street pitch at 6pm. So I test where it will actually run.",
    chips: ["UAT", "Edge cases", "On-device performance"],
  },
  {
    n: "05",
    title: "Ship and iterate",
    body: "Containerized, deployed, then watched. Software running inside a business changes every week, and handover isn't the end of the job.",
    chips: ["Docker", "Vercel", "Monitoring"],
  },
] as const;

export const toolkit = [
  {
    group: "Web & mobile",
    items: [
      "Next.js",
      "React",
      "React Native (Expo)",
      "Node.js",
      "NestJS",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "SCSS",
      "Fabric.js",
    ],
  },
  {
    group: "Backend & data",
    items: ["Supabase", "PostgreSQL", "SQL", "Drizzle ORM", "Zod", "Docker", "Turborepo"],
  },
  {
    group: "AI & computer vision",
    items: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "Facial recognition",
      "Object tracking",
      "Emotion detection",
    ],
  },
  {
    group: "Foundations",
    items: ["C++", "Data structures", "Algorithms", "OOP"],
  },
] as const;

export const sections = [
  { id: "top", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "process", label: "PROCESS" },
  { id: "toolkit", label: "TOOLKIT" },
  { id: "beyond", label: "BEYOND" },
  { id: "contact", label: "CONTACT" },
] as const;

export const CV_FILE = "/cv/Abdul-Hadi-CV.pdf";
