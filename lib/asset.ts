const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a public/ asset with the deployment basePath.
 *
 * next/link and next/image handle this themselves; raw <a href>, <video src>
 * and anything handed to the DOM directly does not.
 */
export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export { BASE_PATH };
