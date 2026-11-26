import { ImageResponse } from "next/og";

export const alt = "Centre Smoke Vape Shop";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", padding: 72, color: "#090B0A", background: "linear-gradient(135deg,#fff 0%,#eef6eb 70%,#a8db17 100%)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", border: "8px solid #09620F", borderRadius: 42, padding: 54, background: "rgba(255,255,255,.9)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}><div style={{ width: 112, height: 112, display: "flex", alignItems: "center", justifyContent: "center", border: "14px solid #09620F", borderRadius: 999, fontSize: 74, fontWeight: 900 }}>C</div><div style={{ fontSize: 34, color: "#09620F", fontWeight: 900, letterSpacing: 7 }}>SMOKE · VAPE · ACCESSORIES</div></div>
        <div style={{ display: "flex", flexDirection: "column", fontWeight: 900, lineHeight: .9, textTransform: "uppercase" }}><div style={{ fontSize: 112 }}>Centre Smoke</div><div style={{ fontSize: 84, color: "#09620F" }}>Vape Shop</div></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 800 }}><span>15 Centre St S</span><span>centresmokeshop.com</span></div>
      </div>
    </div>, size
  );
}
