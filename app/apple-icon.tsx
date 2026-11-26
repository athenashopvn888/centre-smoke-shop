import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<div style={{ width: 180, height: 180, display: "flex", alignItems: "center", justifyContent: "center", border: "18px solid #09620F", borderRadius: 44, background: "white", color: "#090B0A", fontSize: 122, fontWeight: 900 }}>C</div>, size);
}
