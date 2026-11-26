import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #09620F", borderRadius: 8, background: "white", color: "#090B0A", fontSize: 22, fontWeight: 900 }}>C</div>, size);
}
