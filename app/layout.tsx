import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdulhadi089.github.io/MY-Portfolio";

const title = `${profile.name} — ${profile.headline}`;
const description =
  "Abdul Hadi — software engineer in Multan, Pakistan. Full-stack web and mobile with Next.js, Expo and NestJS, plus applied computer vision in PyTorch, TensorFlow and OpenCV.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    "Abdul Hadi",
    "software engineer",
    "computer vision developer",
    "full-stack developer",
    "Next.js developer",
    "React Native Expo",
    "NestJS",
    "PyTorch",
    "OpenCV",
    "Multan",
    "Pakistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Structured data so search engines read this as a real person, not a blob of text. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Multan",
    addressCountry: "PK",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Computer Vision",
    "Full-stack Web Development",
    "React Native",
    "Next.js",
    "NestJS",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="loading">
        <script
          type="application/ld+json"
          // Serialized from a local constant — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
