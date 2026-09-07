import type { NextConfig } from "next";

/**
 * The same build targets two hosts:
 *   - GitHub Pages, served from /MY-Portfolio  (workflow sets NEXT_PUBLIC_BASE_PATH)
 *   - Vercel / a custom domain, served from /  (variable is left unset)
 *
 * basePath has to be inlined at build time, so everything that isn't routed
 * through next/link reads the same value via lib/asset.ts.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // No image optimization server exists behind a static export.
    unoptimized: true,
  },
};

export default nextConfig;
