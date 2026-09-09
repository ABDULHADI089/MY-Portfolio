import { profile } from "@/lib/content";
import { ogImageContentType, ogImageSize, renderProfileImage } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.headline}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderProfileImage();
}
