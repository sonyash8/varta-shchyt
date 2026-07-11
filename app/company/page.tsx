import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про компанію — Варта-Щит Україна",
  description: "Охоронна компанія Варта-Щит Україна: досвід, комплексний підхід і сучасні технології безпеки для бізнесу та приватних клієнтів у Києві.",
};

const ADVANTAGES = [
  { num: "15+", label: "років досвіду" },
  { num: "500+", label: "задоволених клієнтів" },
  { num: "100%", label: "конфіденційність" },
];

export default function CompanyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "580px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Image
          src="/assets/home/company-hero.png"
          alt=""
          fill
          priority
          className="hero-bg"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
        {/* overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0) 75%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", zIndex: 1, background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100px", zIndex: 1, background: "linear-gradient(to bottom, rgba(13,13,13,0.4) 0%, transparent 100%)" }} />

        <div className="rsp-hero-pad" style={{ position: "relative", zIndex: 2, padding: "100px 40px", maxWidth: "600px" }}>
          <div className="hero-sub" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>ПРО КОМПАНІЮ</span>
            <div style={{ width: "40px", height: "1px", background: "#F5A623" }} />
          </div>
          <h1
            className="hero-title"
            style={{ fontFamily: "Montserrat,sans-serif", fontSize: "clamp(40px,6vw,64px)", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", color: "#fff", marginBottom: "16px" }}
          >
            ВАРТА-ЩИТ<br />УКРАЇНА
          </h1>
          <div className="hero-desc" style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.75, marginBottom: "32px", maxWidth: "520px" }}>
            <p style={{ marginBottom: "12px" }}>Ми професійна та ефективна компанія, на чолі якої стоять люди з колосальним досвідом роботи у сфері безпеки.</p>
            <p>Підбираємо рішення індивідуально під кожен об'єкт — від невеликого офісу до масштабного підприємства — і відповідаємо за результат на всіх етапах співпраці.</p>
          </div>
          <div className="hero-cta" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/contacts"
              className="btn-gold-hover"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "13px 24px", borderRadius: "12px", textDecoration: "none" }}
            >
              ЗВ'ЯЗАТИСЬ З НАМИ →
            </Link>
            <Link
              href="/services"
              className="btn-hover"
              style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#fff", border: "1px solid #fff", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "13px 24px", borderRadius: "12px", textDecoration: "none" }}
            >
              НАШІ ПОСЛУГИ
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="rsp-sec" style={{ padding: "72px 40px" }}>
        <div
          data-reveal
          className="rsp-2col company-about-card"
          style={{ background: "#141414", border: "1px solid #F5A623", borderRadius: "20px", padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start", boxShadow: "0 0 40px rgba(245,166,35,0.18), 0 0 80px rgba(245,166,35,0.07)" }}
        >
          <div style={{ alignSelf: "center" }}>
            <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "28px", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.2, marginBottom: "20px" }}>
              ВАШ СПОКІЙ —<br /><span style={{ color: "#F5A623" }}>НАША ВІДПОВІДАЛЬНІСТЬ</span>
            </h2>
            <p style={{ fontSize: "14px", color: "#ccc", lineHeight: 1.75, marginBottom: "14px" }}>
              Ми застосовуємо сучасні технології та індивідуальний підхід до кожного клієнта, щоб забезпечити надійний захист у будь-яких умовах.
            </p>
            <p style={{ fontSize: "14px", color: "#ccc", lineHeight: 1.75 }}>
              Наша мета — не просто встановити обладнання, а створити систему безпеки, якій ви можете довіряти.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "2px", color: "#F5A623", textTransform: "uppercase", marginBottom: "20px" }}>ЩО МИ ЗАБЕЗПЕЧУЄМО</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Захист інформації — пошук жучків", "Відеоспостереження", "Системи контролю доступу", "Структуровані кабельні системи", "Охоронно-пожежна сигналізація", "Автоматизовані системи управління", "Використання ШІ для захисту"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#ccc" }}>
                  <span style={{ color: "#F5A623", fontFamily: "monospace" }}>├</span>
                  {item}
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#ccc" }}>
                <span style={{ color: "#F5A623", fontFamily: "monospace" }}>└</span>
                Фізична охорона ›
              </div>
              <div style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Особиста охорона", "Пост охорони", "Супровід вантажів"].map((sub, i, arr) => (
                  <div key={sub} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", color: "#666" }}>
                    <span style={{ color: "#F5A623", fontFamily: "monospace" }}>{i === arr.length - 1 ? "└" : "├"}</span>
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="rsp-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding: "56px 40px", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", background: "#0d0d0d", textAlign: "center" }}>
        {ADVANTAGES.map((a, i) => (
          <div key={a.num} data-reveal data-delay={String(i + 1)}>
            <div className="stat-num" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "52px", fontWeight: 900, color: "#F5A623", lineHeight: 1 }}>{a.num}</div>
            <div className="stat-sub" style={{ fontSize: "14px", color: "#aaa", fontFamily: "Montserrat,sans-serif", marginTop: "8px" }}>{a.label}</div>
          </div>
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section className="rsp-sec" style={{ padding: "72px 40px" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "14px" }}>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>ПОСЛУГИ</span>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
          </div>
          <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "32px", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>ОСНОВНІ ПОСЛУГИ</h2>
        </div>

        {(() => {
          const cutPolygon = "polygon(0 0, 100% 0, 100% calc(100% - 26px), calc(100% - 26px) 100%, 0 100%)";
          const cutPolygonBoth = "polygon(0 26px, 26px 0, 100% 0, 100% calc(100% - 26px), calc(100% - 26px) 100%, 0 100%)";
          const outerStyle: import("react").CSSProperties = {
            position: "relative",
            display: "flex",
            background: "rgba(245,166,35,0.65)",
            clipPath: cutPolygon,
            borderRadius: "20px",
            padding: "1px",
            boxShadow: "0 8px 30px rgba(245,166,35,0.08)",
            minHeight: "220px",
          };
          const innerStyle: import("react").CSSProperties = {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "18px",
            padding: "56px 20px 32px",
            background: "#141414",
            clipPath: cutPolygon,
            borderRadius: "19px",
            overflow: "hidden",
          };
          const iconBoxStyle: import("react").CSSProperties = {
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          };
          const top = [
            { icon: "/assets/home/icon-cctv-cam.png",   label: "Відеоспостереження",  w: 76, h: 52, href: "/services/video" },
            { icon: "/assets/home/icon-access.png",     label: "Системи контролю доступу (СКД)",       w: 66, h: 79, href: "/services/access" },
            { icon: "/assets/home/icon-solution.png",   label: "Структуровані кабельні системи (СКС)", w: 56, h: 68, href: "/services/scs" },
            { icon: "/assets/home/icon-bug-search.png", label: "Захист інформації — пошук жучків", w: 76, h: 71, href: "/services/infosec" },
          ];
          const bottom = [
            { icon: "/assets/home/icon-fire.png",  label: "Охоронно-пожежна сигналізація", w: 64, h: 77, href: "/services/fire" },
            { icon: "/assets/home/icon-rapid.png", label: "Фізична охорона",               w: 96, h: 64, href: "/services/physical" },
          ];
          const bottom2 = [
            { icon: "/assets/home/icon-fast.png", label: "Автоматизовані системи управління", w: 58, h: 58, href: "/services/automation" },
            { icon: "/assets/home/icon-ai-protection.png", label: "Використання ШІ для захисту", w: 46, h: 58, href: "/services/ai-protection" },
          ];
          return (
            <>
              <div data-reveal data-delay="2" className="rsp-4tabs" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", marginBottom: "20px" }}>
                {top.map((card, i) => (
                  <Link
                    key={card.label}
                    href={card.href}
                    className="svc-card"
                    style={{ ...outerStyle, clipPath: i === 1 ? "none" : cutPolygon, textDecoration: "none" }}
                  >
                    <div style={{ ...innerStyle, clipPath: i === 1 ? "none" : cutPolygon }}>
                      <div style={iconBoxStyle}>
                        <Image src={card.icon} alt={card.label} width={card.w} height={card.h} style={{ objectFit: "contain" }} />
                      </div>
                      <span style={{ fontSize: "13px", fontFamily: "Montserrat,sans-serif", fontWeight: 600, color: "#ccc", textAlign: "center", lineHeight: 1.4 }}>{card.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="rsp-2tabs" style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
                {bottom.map((card, i) => (
                  <Link
                    key={card.label}
                    href={card.href}
                    className="svc-card"
                    style={{
                      ...outerStyle,
                      clipPath: i === 0 ? cutPolygonBoth : cutPolygon,
                      textDecoration: "none",
                      flex: "none",
                      width: i === 0 ? "calc((100% - 60px) / 4)" : "calc((100% - 60px) / 2 + 20px)",
                    }}
                  >
                    <div style={{ ...innerStyle, clipPath: i === 0 ? cutPolygonBoth : cutPolygon }}>
                      <div style={iconBoxStyle}>
                        <Image src={card.icon} alt={card.label} width={card.w} height={card.h} style={{ objectFit: "contain" }} />
                      </div>
                      <span style={{ fontSize: "13px", fontFamily: "Montserrat,sans-serif", fontWeight: 600, color: "#ccc", textAlign: "center", lineHeight: 1.4 }}>{card.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="rsp-2tabs" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                {bottom2.map((card, i) => (
                  <Link
                    key={card.label}
                    href={card.href}
                    className="svc-card"
                    style={{
                      ...outerStyle,
                      clipPath: i === 1 ? cutPolygonBoth : cutPolygon,
                      textDecoration: "none",
                      flex: "none",
                      width: "calc((100% - 60px) / 4)",
                    }}
                  >
                    <div style={{ ...innerStyle, clipPath: i === 1 ? cutPolygonBoth : cutPolygon }}>
                      <div style={iconBoxStyle}>
                        <Image src={card.icon} alt={card.label} width={card.w} height={card.h} style={{ objectFit: "contain" }} />
                      </div>
                      <span style={{ fontSize: "13px", fontFamily: "Montserrat,sans-serif", fontWeight: 600, color: "#ccc", textAlign: "center", lineHeight: 1.4 }}>{card.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          );
        })()}
      </section>

      {/* ── CTA ── */}
      <section className="rsp-sec-b" style={{ padding: "0 40px 72px" }}>
        <div
          data-reveal
          style={{ background: "#141414", borderRadius: "20px", padding: "56px 48px", textAlign: "center" }}
        >
          <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "28px", fontWeight: 800, textTransform: "uppercase", marginBottom: "12px" }}>ПОТРІБНА КОНСУЛЬТАЦІЯ?</h3>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "32px" }}>Допоможемо підібрати рішення для вашого об&apos;єкта, бізнесу або дому.</p>
          <Link
            href="/contacts"
            className="btn-gold-hover"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none" }}
          >
            ЗВ'ЯЗАТИСЬ З НАМИ →
          </Link>
        </div>
      </section>
    </>
  );
}
