import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Hadi — AI & CV Engineer · Full-Stack Developer",
  description:
    "AI & Computer Vision Engineer and Full-Stack Developer. I build the intelligence and the product it lives in — real-time CV systems, object tracking, facial recognition, and end-to-end web applications.",
  keywords: [
    "AI engineer",
    "computer vision engineer",
    "full-stack developer",
    "YOLO",
    "OpenCV",
    "Next.js",
    "Abdul Hadi",
  ],
  openGraph: {
    title: "Abdul Hadi — AI & CV Engineer · Full-Stack Developer",
    description: "I build the intelligence and the product it lives in.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
