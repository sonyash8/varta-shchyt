import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Послуги — Варта-Щит Україна",
  description: "Відеоспостереження, СКД, СКС, пошук жучків, пожежна сигналізація, фізична охорона, автоматизація та ШІ-захист від Варта-Щит Україна.",
};

const MAIN_SERVICES = [
  { icon: "/assets/home/svc-video.png",    title: "Відеоспостереження",              desc: "Системи відеоконтролю для нагляду за об'єктом і фіксації подій.",             w: 58, h: 58, href: "/services/video" },
  { icon: "/assets/home/svc-access.png",   title: "Системи контролю доступу (СКД)",  desc: "Обмеження доступу, облік робочого часу та контроль відвідувачів.",            w: 58, h: 58, href: "/services/access" },
  { icon: "/assets/home/icon-solution.png", title: "Структуровані кабельні системи (СКС)", desc: "Проєктування та монтаж кабельної інфраструктури для систем безпеки.", w: 46, h: 46, href: "/services/scs" },
  { icon: "/assets/home/svc-infosec.png",  title: "Захист інформації — пошук жучків", desc: "Пошук прихованих мікрофонів, камер і GPS-маячків, аудит безпеки даних.",       w: 46, h: 46, href: "/services/infosec" },
  { icon: "/assets/home/svc-fire.png",     title: "Охоронно-пожежна сигналізація",   desc: "Виявлення загроз і миттєве сповіщення про небезпеку.",                        w: 58, h: 58, href: "/services/fire" },
  { icon: "/assets/home/icon-fast.png",    title: "Автоматизовані системи управління", desc: "Автоматика керує замість Вас — охорона, доступ і клімат за сценарієм.",       w: 54, h: 54, href: "/services/automation" },
  { icon: "/assets/home/icon-ai-protection.png", title: "Використання ШІ для захисту", desc: "Розумний аналіз відео та миттєві сповіщення про реальні загрози.",           w: 46, h: 58, href: "/services/ai-protection" },
];

const PHYSICAL = [
  { icon: "/assets/home/svc-personal.png", title: "Особиста охорона",  desc: "Захист життя та здоров'я клієнтів у будь-яких умовах.",       w: 48, h: 48 },
  { icon: "/assets/home/svc-post.png",     title: "Пост охорони",      desc: "Організація та забезпечення контролю доступу на об'єкти.",    w: 76, h: 76 },
  { icon: "/assets/home/svc-cargo.png",    title: "Супровід вантажів", desc: "Надійний супровід та охорона вантажів у дорозі.",             w: 76, h: 76 },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "580px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Image
          src="/assets/home/services-hero.png"
          alt=""
          fill
          priority
          className="hero-bg"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.0) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", zIndex: 1, background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100px", zIndex: 1, background: "linear-gradient(to bottom, rgba(13,13,13,0.4) 0%, transparent 100%)" }} />

        {/* floating decorative icons */}
        {[
          { src: "/assets/home/svc-video.png",    top: "12%",  right: "28%", size: 38, cls: "float-a" },
          { src: "/assets/home/svc-access.png",   top: "55%",  right: "18%", size: 34, cls: "float-b" },
          { src: "/assets/home/svc-fire.png",     top: "22%",  right: "10%", size: 36, cls: "float-c" },
          { src: "/assets/home/svc-cargo.png",    top: "38%",  right: "6%",  size: 40, cls: "float-b" },
          { src: "/assets/home/svc-physical.png", top: "80%",  right: "14%", size: 34, cls: "float-c" },
          { src: "/assets/home/svc-infosec.png",  top: "8%",   right: "46%", size: 30, cls: "float-b" },
        ].map((ic, i) => (
          <div
            key={i}
            className={ic.cls}
            style={{ position: "absolute", top: ic.top, right: ic.right, zIndex: 1, opacity: 0.18, pointerEvents: "none" }}
          >
            <Image src={ic.src} alt="" width={ic.size} height={ic.size} style={{ objectFit: "contain" }} />
          </div>
        ))}

        <div className="rsp-hero-pad" style={{ position: "relative", zIndex: 2, padding: "100px 40px", maxWidth: "600px" }}>
          <div className="hero-sub" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>ПОСЛУГИ</span>
            <div style={{ width: "40px", height: "1px", background: "#F5A623" }} />
          </div>
          <h1
            className="hero-title"
            style={{ fontFamily: "Montserrat,sans-serif", fontSize: "clamp(40px,6vw,64px)", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", color: "#fff", marginBottom: "20px" }}
          >
            КОМПЛЕКСНІ<br />РІШЕННЯ ДЛЯ<br /><span style={{ color: "#F5A623" }}>ВАШОЇ БЕЗПЕКИ</span>
          </h1>
          <p className="hero-desc" style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.75, marginBottom: "32px", maxWidth: "480px" }}>
            Сучасні системи безпеки та досвід наших фахівців — надійний захист для вашого бізнесу, дому та приватної власності.
          </p>
          <div className="hero-cta">
            <Link
              href="/contacts"
              className="btn-gold-hover"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "13px 24px", borderRadius: "12px", textDecoration: "none" }}
            >
              ЗВ'ЯЗАТИСЬ З НАМИ →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ОСНОВНІ ПОСЛУГИ ── */}
      <section className="rsp-sec" style={{ padding: "72px 40px" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "14px" }}>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>НАШІ ПОСЛУГИ</span>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
          </div>
          <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "32px", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>ОСНОВНІ ПОСЛУГИ</h2>
        </div>

        <div className="rsp-5cards" style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: "16px" }}>
          {MAIN_SERVICES.map((svc, i) => (
            <Link
              key={svc.title}
              href={svc.href}
              data-reveal
              data-delay={String(i + 1)}
              className="svc-plain-card"
              style={{ gridColumn: i === 4 ? "2 / span 2" : "span 2", background: "#0e0e0e", border: "1px solid rgba(245,166,35,0.35)", borderRadius: "20px", padding: "32px 20px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "space-between", textDecoration: "none" }}
            >
              <div style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                <Image src={svc.icon} alt={svc.title} width={svc.w} height={svc.h} style={{ objectFit: "contain" }} />
              </div>
              <h4 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: "10px" }}>{svc.title}</h4>
              <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.6 }}>{svc.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ФІЗИЧНА ОХОРОНА ── */}
      <section className="rsp-sec-b" style={{ padding: "0 40px 72px" }}>
        <div
          data-reveal
          style={{ position: "relative", border: "0.5px solid rgba(245,166,35,0.6)", borderRadius: "16px", padding: "48px 40px 40px", marginTop: "20px" }}
        >
          {/* Title sitting on the border */}
          <h2 style={{
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#0d0d0d",
            padding: "0 28px",
            fontFamily: "Montserrat,sans-serif",
            fontSize: "26px",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            whiteSpace: "nowrap",
          }}>ФІЗИЧНА ОХОРОНА</h2>

          {/* 3 items with vertical dividers */}
          <div className="rsp-physical" style={{ display: "flex", alignItems: "stretch" }}>
            {PHYSICAL.map((svc, i) => (
              <div key={svc.title} style={{ display: "contents" }}>
                <Link href="/services/physical" className="svc-bottom-underline" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "20px 24px", textDecoration: "none", borderRadius: "16px", position: "relative" }}>
                  <div style={{ width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src={svc.icon} alt={svc.title} width={svc.w} height={svc.h} style={{ objectFit: "contain" }} />
                  </div>
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <h4 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>{svc.title}</h4>
                    <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.65 }}>{svc.desc}</p>
                  </div>
                </Link>
                {i < PHYSICAL.length - 1 && (
                  <div className="rsp-hide" style={{ width: "1px", background: "rgba(245,166,35,0.4)", flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="rsp-sec-b" style={{ padding: "0 40px 72px" }}>
        <div
          data-reveal
          className="rsp-cta-col"
          style={{ background: "#141414", borderRadius: "20px", padding: "36px 48px", display: "flex", alignItems: "center", gap: "40px", overflow: "visible", position: "relative" }}
        >
          <div className="rsp-hide" style={{ flexShrink: 0, marginTop: "-102px", marginBottom: "-102px" }}>
            <Image src="/assets/home/logo-shield.png" alt="Варта-Щит Україна" width={348} height={348} style={{ objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "28px", fontWeight: 800, textTransform: "uppercase", marginBottom: "12px" }}>ПОТРІБНА КОНСУЛЬТАЦІЯ?</h3>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "32px" }}>Підберемо оптимальне рішення під ваш об&apos;єкт і бюджет.</p>
          </div>
          <Link
            href="/contacts"
            className="btn-gold-hover"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", flexShrink: 0 }}
          >
            ОТРИМАТИ КОНСУЛЬТАЦІЮ →
          </Link>
        </div>
      </section>
    </>
  );
}
