import { ImageResponse } from "next/og";
import { person } from "@/app/data/content";

export const dynamic = "force-static";
export const alt = `${person.name} — ${person.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
                    backgroundColor: "#0e0d0b",
                    color: "#f5f1e8",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", width: 64, height: 6, backgroundColor: "#ffba08", marginBottom: 36 }} />
                <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
                    {person.name}
                </div>
                <div style={{ display: "flex", fontSize: 40, color: "#ffba08", marginTop: 18 }}>
                    {person.headline}
                </div>
                <div style={{ display: "flex", fontSize: 26, color: "#a69e8d", marginTop: 28, maxWidth: 820 }}>
                    {person.supportingLine}
                </div>
                <div style={{ display: "flex", fontSize: 24, color: "#a69e8d", marginTop: 56 }}>
                    a-mamdouh.com
                </div>
            </div>
        ),
        { ...size }
    );
}
