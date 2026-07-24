export type Project = {
  id: string;
  title: string;
  category: "ai-cv" | "product";
  tags: string[];
  problem: string;
  build: string;
  role: string;
  outcome: string;
  image: string;
  href?: string;
  featured: boolean;
};

export type SkillGroup = {
  tier: "AI / Computer Vision" | "Full-Stack / Product" | "AI Integration / Automation";
  skills: string[];
};

export type CareerEntry = {
  company: string;
  role: string;
  period: string;
  summary: string;
};
