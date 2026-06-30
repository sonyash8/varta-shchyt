import Image from "next/image";
import Link from "next/link";


const ADVANTAGES = [
  { num: "15+", label: "років досвіду" },
  { num: "500+", label: "задоволених клієнтів" },
  { num: "24/7", label: "цілодобовий моніторинг" },
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
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.05) 100%)" }} />
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
            <p style={{ marginBottom: "12px" }}>Наша охоронна фірма працює з такими організаціями, як: Ян Дженерал, Укрвторчермет, Українська фруктова компанія, Дитячий оздоровчий комплекс СЛАВУТИЧ та інші.</p>
            <p>І всі вони серед усього списку охоронних компаній Києва зупинили свій вибір на «Варта-Щит Україна».</p>
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
          <div>
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
              {["Відеоспостереження", "Захист інформації", "Охоронно-пожежна сигналізація", "Системи контролю доступу", "Розумний дім"].map((item) => (
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
      <section className="rsp-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "56px 40px", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", background: "#0d0d0d", textAlign: "center" }}>
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

        <div className="rsp-4cards" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
          {[
            { icon: "/assets/home/icon-cctv-cam.png", title: "Відеоспостереження", desc: "Системи відеоконтролю для вашої безпеки.",        w: 83,  h: 56 },
            { icon: "/assets/home/icon-access.png",   title: "Контроль доступу",   desc: "Облік і контроль доступу персоналу та відвідувачів.", w: 68,  h: 81 },
            { icon: "/assets/home/icon-rapid.png",    title: "Групи швидкого реагування", desc: "Оперативне реагування на тривожні сигнали.", w: 115, h: 71 },
            { icon: "/assets/home/icon-fire.png",     title: "Пожежна безпека",    desc: "Системи пожежної сигналізації та оповіщення.",   w: 62,  h: 74 },
          ].map((svc, i) => (
            <div
              key={svc.title}
              data-reveal
              data-delay={String(i + 1)}
              style={{ background: "#0e0e0e", border: "1px solid rgba(245,166,35,0.35)", borderRadius: "20px", padding: "36px 24px 32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
              <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Image src={svc.icon} alt={svc.title} width={svc.w} height={svc.h} style={{ objectFit: "contain" }} />
              </div>
              <h4 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: "12px" }}>{svc.title}</h4>
              <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>{svc.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#555", marginTop: "24px" }}>Додатково: захист інформації · тілоохоронці · розумний дім</p>
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
