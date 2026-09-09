const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a public/ asset with the deployment basePath.
 *
 * next/link handles this itself. next/image normally does too, but only via
 * its default loader — with images.unoptimized (required for static export,
 * see next.config.ts) that loader is bypassed, so `src` is used as-is and
 * needs prefixing here just like a raw <a href> or <video src>.
 */
export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export { BASE_PATH };
