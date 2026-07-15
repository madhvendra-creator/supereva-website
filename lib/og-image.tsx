import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

type RenderOgImageParams = {
  eyebrow: string;
  title: string;
};

export function renderOgImage({ eyebrow, title }: RenderOgImageParams) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(99,102,241,0.35), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#f4f4f5", fontSize: 28, fontWeight: 700 }}>
          Supereva
        </div>

        <div style={{ display: "flex", marginTop: 64 }}>
          <span
            style={{
              color: "#a5b4fc",
              fontSize: 24,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {eyebrow}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            color: "#ffffff",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
