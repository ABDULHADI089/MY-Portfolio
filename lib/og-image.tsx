import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const ogImageSize = { width: 1200, height: 630 } as const;
export const ogImageContentType = "image/png";

const chips = ["NEXT.JS", "REACT NATIVE", "PYTORCH", "OPENCV"];

/**
 * Shared renderer for opengraph-image.tsx and twitter-image.tsx — Next only
 * needs each file's default export to be a function, not to define one itself.
 */
export function renderProfileImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0a0c10",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 640,
            height: 640,
            top: -240,
            right: -180,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(139,156,255,0.55) 0%, rgba(139,156,255,0.18) 45%, rgba(139,156,255,0) 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            bottom: -200,
            left: -160,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(111,227,196,0.45) 0%, rgba(111,227,196,0.14) 45%, rgba(111,227,196,0) 72%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            width: "100%",
            padding: "0 76px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 15,
                height: 15,
                borderRadius: 9999,
                background: "#6fe3c4",
              }}
            />
            <span
              style={{
                fontSize: 22,
                letterSpacing: 4,
                color: "#8b93a1",
              }}
            >
              ABDUL HADI
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline" }}>
            <span style={{ fontSize: 76, fontWeight: 600, color: "#e9ecf1" }}>
              I build software&nbsp;
            </span>
            <span style={{ fontSize: 76, fontWeight: 600, color: "#8b9cff" }}>that sees.</span>
          </div>

          <span style={{ fontSize: 30, color: "#aeb6c2", maxWidth: 820 }}>
            {profile.headline} — {profile.location}
          </span>

          <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
            {chips.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  fontSize: 20,
                  letterSpacing: 1,
                  color: "#8b93a1",
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: 9999,
                  padding: "10px 22px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
