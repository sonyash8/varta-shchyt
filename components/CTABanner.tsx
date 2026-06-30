import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <div
      className="rsp-cta-wrap"
      style={{
        background: "#141414",
        border: "1px solid #2A2A2A",
        borderRadius: "6px",
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
      }}
    >
      <div className="rsp-cta-inner" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <Image
          src="/assets/home/logo.png"
          alt="Варта-Щит Україна"
          width={72}
          height={72}
          style={{ objectFit: "contain", flexShrink: 0 }}
        />
        <div>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 800,
              fontFamily: "Montserrat,sans-serif",
              textTransform: "uppercase",
              marginBottom: "8px",
              color: "#fff",
            }}
          >
            ПОТРІБНА КОНСУЛЬТАЦІЯ?
          </h3>
          <p style={{ fontSize: "13px", color: "#666" }}>
            Наші фахівці допоможуть підібрати оптимальне рішення під ваші потреби та бюджет.
          </p>
        </div>
      </div>
      <Link
        href="/contacts"
        className="rsp-cta-btn"
        style={{
          background: "#F5A623",
          color: "#000",
          padding: "13px 24px",
          fontFamily: "Montserrat,sans-serif",
          fontWeight: 700,
          fontSize: "12px",
          letterSpacing: "1px",
          borderRadius: "3px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        ОТРИМАТИ КОНСУЛЬТАЦІЮ →
      </Link>
    </div>
  );
}
