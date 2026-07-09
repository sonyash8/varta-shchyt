import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section
        className="home-hero-section"
        style={{
          position: "relative",
          minHeight: "620px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/assets/home/hero-bg.png"
          alt=""
          fill
          priority
          className="hero-bg"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "220px",
            zIndex: 1,
            background: "linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "25%",
            zIndex: 1,
            background: "linear-gradient(to left, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100px",
            zIndex: 1,
            background: "linear-gradient(to bottom, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0) 100%)",
          }}
        />

        <div
          className="rsp-hero-pad"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "100px 40px 100px",
            maxWidth: "580px",
          }}
        >
          <h1
            className="hero-title"
            style={{ fontFamily: "Montserrat,sans-serif", fontSize: "clamp(52px,7vw,80px)", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", color: "#fff", marginBottom: "18px" }}
          >
            <span style={{ whiteSpace: "nowrap" }}>ВАРТА-ЩИТ</span><br />УКРАЇНА
          </h1>
          <p
            className="hero-sub"
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#ccc",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            ОХОРОННА КОМПАНІЯ, СИСТЕМИ БЕЗПЕКИ
          </p>
          <p className="hero-desc home-hero-desc" style={{ fontSize: "15px", color: "#fff", lineHeight: 1.65, marginBottom: "36px", maxWidth: "520px" }}>
            Стоїмо за ваш бізнес, майно та близьких — 24/7.<br />
            Підбираємо рішення під ваш об&apos;єкт і швидко реагуємо на загрози.
          </p>
          <div className="hero-cta" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/services"
              className="btn-gold-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#F5A623",
                color: "#000",
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "1px",
                padding: "13px 22px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              ПІДІБРАТИ ЗАХИСТ →
            </Link>
            <Link
              href="/company"
              className="btn-hover home-hero-btn2"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "1px",
                padding: "13px 22px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              ЯК МИ ПРАЦЮЄМО
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT BLOCK ===================== */}
      <section className="rsp-sec" style={{ padding: "72px 40px" }}>
        <div
          data-reveal
          className="rsp-2col home-about-card"
          style={{
            background: "#141414",
            border: "1px solid #F5A623",
            borderRadius: "8px",
            padding: "40px 40px 36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "stretch",
            boxShadow: "0 0 40px rgba(245,166,35,0.22), 0 0 80px rgba(245,166,35,0.08)",
          }}
        >
          {/* Left column */}
          <div className="home-about-left">
            <div className="home-about-label" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>ПРО КОМПАНІЮ</span>
              <div style={{ width: "40px", height: "1px", background: "#F5A623" }} />
            </div>

            <h2
              className="home-about-h2"
              style={{
                fontFamily: "Montserrat,sans-serif",
                fontSize: "28px",
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 1.15,
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              ВАШ СПОКІЙ —<br />
              <span style={{ color: "#F5A623" }}>НАША ВІДПОВІДАЛЬНІСТЬ</span>
            </h2>

            <p className="about-desc" style={{ fontSize: "19px", color: "#fff", lineHeight: 1.7, marginBottom: "24px" }}>
              Варта-Щит Україна — це комплексний підхід до безпеки бізнесу,
              дому та приватних об&apos;єктів. Ми поєднуємо сучасні технології
              та досвідчену команду.
            </p>

            <Link
              href="/company"
              className="btn-hover home-about-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#fff",
                border: "1px solid #555",
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "1px",
                padding: "10px 18px",
                borderRadius: "12px",
                textDecoration: "none",
                marginBottom: "32px",
              }}
            >
              ДІЗНАТИСЬ БІЛЬШЕ →
            </Link>

            {/* 3 feature icons — з вертикальними роздільниками */}
            <div className="home-about-icons" style={{ display: "flex", marginTop: "8px" }}>
              {[
                { src: "/assets/home/icon-check.png", label1: "Професійний підхід", label2: "Рішення під конкретний об'єкт", w: 34, h: 42 },
                { src: "/assets/home/icon-operational.png", label1: "Оперативність", label2: "Швидкий виїзд на об'єкт", w: 40, h: 40 },
                { src: "/assets/home/icon-lock.png", label1: "Конфіденційність", label2: "Ваші дані та звернення захищені", w: 33, h: 42 },
              ].map((f, i) => (
                <div
                  key={f.label1}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "8px",
                    flex: 1,
                    padding: "0 16px",
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.18)" : "none",
                  }}
                >
                  <Image src={f.src} alt={f.label1} width={f.w} height={f.h} style={{ objectFit: "contain" }} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff", fontFamily: "Montserrat,sans-serif", lineHeight: 1.3 }}>{f.label1}</span>
                  <span style={{ fontSize: "10px", color: "#aaa", lineHeight: 1.4 }}>{f.label2}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — monitors image */}
          <div className="home-about-img" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "inset 0 0 0 3px #141414" }}>
            <Image
              src="/assets/home/about-monitors.png"
              alt="Центр моніторингу Варта-Щит"
              width={600}
              height={380}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "16px", transform: "scale(1.03)" }}
            />
          </div>
        </div>
      </section>

      {/* ===================== SERVICES — TITLE ===================== */}
      <section className="rsp-sec-b" style={{ padding: "0 40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "14px" }}>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>ПОСЛУГИ</span>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
          </div>
          <h2 data-reveal style={{ fontFamily: "Montserrat,sans-serif", fontSize: "32px", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>
            КОМПЛЕКС ПОСЛУГ БЕЗПЕКИ
          </h2>
        </div>

        {/* 6 service cards — 4 зверху + 2 знизу, зрізаний кут */}
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
              <div className="rsp-2tabs" style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "64px" }}>
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

        {/* ===================== ВІДГУКИ КЛІЄНТІВ ===================== */}
        <div style={{ textAlign: "center", margin: "16px 0 36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "14px" }}>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
            <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>ВІДГУКИ</span>
            <div style={{ width: "36px", height: "1px", background: "#F5A623" }} />
          </div>
          <h2 data-reveal style={{ fontFamily: "Montserrat,sans-serif", fontSize: "32px", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>
            ЩО КАЖУТЬ ПРО НАС
          </h2>
        </div>

        <div className="home-svc-rows" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {[
            { text: "Звернулись за встановленням відеоспостереження на складі — зробили швидко, все пояснили і показали, як користуватись системою.", name: "Олександр К.", role: "приватний клієнт" },
            { text: "We connected our office to the access control system. It's convenient to see who entered the building and when.", name: "Stuart D.", role: "приватний клієнт" },
            { text: "Замовляли перевірку приміщення на прослуховування перед важливими переговорами. Все пройшло делікатно й професійно.", name: "Ігор П.", role: "приватний клієнт" },
          ].map((r) => (
            <div
              key={r.name}
              data-reveal="fade"
              style={{ background: "#111", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "28px 26px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "174px" }}
            >
              <p style={{ fontSize: "14px", color: "#ccc", lineHeight: 1.7, marginBottom: "20px", fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>&laquo;{r.text}&raquo;</p>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", fontFamily: "Montserrat,sans-serif" }}>{r.name}</div>
                <div style={{ fontSize: "12px", color: "#888" }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section
        className="rsp-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          padding: "56px 40px",
          borderTop: "1px solid #1e1e1e",
          borderBottom: "1px solid #1e1e1e",
          background: "#0d0d0d",
          marginTop: "48px",
          textAlign: "center",
        }}
      >
        {[
          { num: "15+", sub: "років\nдосвіду" },
          { num: "500+", sub: "задоволених\nклієнтів" },
          { num: "100%", sub: "конфіденційність" },
        ].map((s, i) => (
          <div key={s.num} data-reveal data-delay={String(i + 1)}>
            <div className="stat-num" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "52px", fontWeight: 900, color: "#F5A623", lineHeight: 1 }}>{s.num}</div>
            <div className="stat-sub" style={{ fontSize: "15px", color: "#aaa", fontFamily: "Montserrat,sans-serif", marginTop: "8px", whiteSpace: "pre-line", lineHeight: 1.4 }}>{s.sub}</div>
          </div>
        ))}
      </section>

      {/* ===================== HOW WE WORK ===================== */}
      <section className="rsp-sec home-steps-sec" style={{ padding: "72px 40px" }}>
        <h2 data-reveal style={{ fontFamily: "Montserrat,sans-serif", fontSize: "32px", fontWeight: 800, textTransform: "uppercase", textAlign: "center", color: "#fff", marginBottom: "40px" }}>
          ЯК МИ ПРАЦЮЄМО
        </h2>

        <div className="home-steps" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "40px" }}>
          {[
            { num: "1.", title: "Аналізуємо об'єкт", desc: "Визначаємо ризики, потреби та формат захисту." },
            { num: "2.", title: "Підбираємо рішення", desc: "Пропонуємо оптимальний набір послуг і систем безпеки." },
            { num: "3.", title: "Запускаємо захист", desc: "Підключаємо моніторинг, обладнання або організовуємо охорону." },
          ].map((step, i) => (
            <div
              key={step.num}
              data-reveal
              data-delay={String(i + 1)}
              style={{
                background: "#141414",
                border: "1px solid rgba(245,166,35,0.2)",
                borderLeft: "3px solid #F5A623",
                borderRadius: "6px",
                padding: "28px 24px",
                boxShadow: "0 0 20px rgba(245,166,35,0.07)",
              }}
            >
              <p className="step-num" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "17px", fontWeight: 700, color: "#F5A623", marginBottom: "10px" }}>
                {step.num} {step.title}
              </p>
              <p className="step-desc" style={{ fontSize: "14px", color: "#fff", lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div data-reveal style={{ textAlign: "center" }}>
          <Link
            href="/contacts"
            className="btn-hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid #555",
              borderRadius: "12px",
              padding: "13px 28px",
              fontSize: "13px",
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "#fff",
              textDecoration: "none",
              marginBottom: "12px",
            }}
          >
            ОТРИМАТИ КОНСУЛЬТАЦІЮ →
          </Link>
          <p style={{ fontSize: "13px", color: "#444" }}>Усі звернення обробляються конфіденційно.</p>
        </div>
      </section>
    </>
  );
}
