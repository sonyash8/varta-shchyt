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
            alignItems: "start",
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
              дому та приватних об&apos;єктів. Ми поєднуємо сучасні технології,
              досвідчену команду та цілодобовий моніторинг.
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
                { src: "/assets/home/icon-247.png", label1: "Цілодобовий захист", label2: "Моніторинг та реагування 24/7", w: 46, h: 42 },
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

        {/* 4 icon tabs — однакові блоки без виділення */}
        <div data-reveal data-delay="2" className="rsp-4tabs" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0", marginBottom: "16px", border: "1px solid #2a2a2a", borderRadius: "6px", overflow: "hidden" }}>
          {[
            { icon: "/assets/home/icon-cctv-cam.png", label: "Відеоспостереження",        w: 83, h: 56  },
            { icon: "/assets/home/icon-access.png",   label: "Контроль доступу",           w: 68, h: 81  },
            { icon: "/assets/home/icon-rapid.png",    label: "Групи швидкого реагування",  w: 115, h: 71  },
            { icon: "/assets/home/icon-fire.png",     label: "Пожежна безпека",            w: 62, h: 74  },
          ].map((tab, i) => (
            <div
              key={tab.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "22px 16px",
                background: "#111",
                borderRight: i < 3 ? "1px solid #2a2a2a" : "none",
              }}
            >
              <Image src={tab.icon} alt={tab.label} width={tab.w} height={tab.h} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: "12px", fontFamily: "Montserrat,sans-serif", fontWeight: 600, color: "#888", textAlign: "center", lineHeight: 1.3 }}>{tab.label}</span>
            </div>
          ))}
        </div>

        <p className="home-svc-extra" style={{ textAlign: "center", fontSize: "13px", color: "#555", marginBottom: "32px" }}>
          Додатково: захист інформації · тілоохоронці · розумний дім
        </p>

        {/* 4 service rows — макет як на референсі */}
        <div className="home-svc-rows" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* Row 1: фото ЗЛІВА, текст + кнопка СПРАВА (кнопка вирівняна вправо) */}
          <div data-reveal="fade" className="rsp-svcrow" style={{ display: "grid", gridTemplateColumns: "40% 1fr", background: "#111", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "20px", overflow: "hidden", minHeight: "174px" }}>
            <Image src="/assets/home/service-cctv-photo.png" alt="Відеоспостереження та сигналізація" width={500} height={200} style={{ width: "100%", height: "174px", objectFit: "cover", display: "block", transform: "scale(1.05) translateX(-6px)" }} />
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Відеоспостереження та сигналізація</h3>
                <p style={{ fontSize: "12px", color: "#fff", lineHeight: 1.6 }}>Контроль об&apos;єкта в режимі 24/7, фіксація подій та миттєве сповіщення при тривожній ситуації.</p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href="/services" className="btn-hover" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #555", borderRadius: "12px", padding: "8px 18px", fontSize: "13px", color: "#fff", fontFamily: "Montserrat,sans-serif", fontWeight: 600, textDecoration: "none" }}>
                  Детальніше →
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: текст + кнопка ЗЛІВА, фото СПРАВА */}
          <div data-reveal="fade" className="rsp-svcrow" style={{ display: "grid", gridTemplateColumns: "1fr 40%", background: "#111", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "20px", overflow: "hidden", minHeight: "174px" }}>
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Системи контролю доступу</h3>
                <p style={{ fontSize: "12px", color: "#fff", lineHeight: 1.6 }}>Обмеження доступу на об&apos;єкт, облік робочого часу та індивідуальні права доступу для персоналу.</p>
              </div>
              <div>
                <Link href="/services" className="btn-hover" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #555", borderRadius: "12px", padding: "8px 18px", fontSize: "13px", color: "#fff", fontFamily: "Montserrat,sans-serif", fontWeight: 600, textDecoration: "none" }}>
                  Детальніше →
                </Link>
              </div>
            </div>
            <div className="svc-img-wrap" style={{ overflow: "hidden", borderRadius: "0 20px 20px 0", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.7)" }}>
              <Image src="/assets/home/service-access.png" alt="Системи контролю доступу" width={500} height={200} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scale(1.05) translateX(6px)" }} />
            </div>
          </div>

          {/* Row 3: фото ЗЛІВА, текст + кнопка СПРАВА (кнопка вправо) */}
          <div data-reveal="fade" className="rsp-svcrow" style={{ display: "grid", gridTemplateColumns: "40% 1fr", background: "#111", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "20px", overflow: "hidden", minHeight: "174px" }}>
            <div className="svc-img-wrap" style={{ overflow: "hidden", borderRadius: "20px 0 0 20px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.7)" }}>
              <Image src="/assets/home/service-infosec.png" alt="Групи швидкого реагування" width={500} height={200} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scale(1.05) translateX(-6px)" }} />
            </div>
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Групи швидкого реагування</h3>
                <p style={{ fontSize: "12px", color: "#fff", lineHeight: 1.6 }}>Оперативний виїзд на тривожний сигнал та реагування на нестандартні ситуації.</p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href="/services" className="btn-hover" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #555", borderRadius: "12px", padding: "8px 18px", fontSize: "13px", color: "#fff", fontFamily: "Montserrat,sans-serif", fontWeight: 600, textDecoration: "none" }}>
                  Детальніше →
                </Link>
              </div>
            </div>
          </div>

          {/* Row 4: текст + кнопка ЗЛІВА, фото СПРАВА */}
          <div data-reveal="fade" className="rsp-svcrow" style={{ display: "grid", gridTemplateColumns: "1fr 40%", background: "#111", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "20px", overflow: "hidden", minHeight: "174px" }}>
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Пожежна безпека</h3>
                <p style={{ fontSize: "12px", color: "#fff", lineHeight: 1.6 }}>Монтаж, обслуговування та перевірка систем пожежної сигналізації й оповіщення.</p>
              </div>
              <div>
                <Link href="/services" className="btn-hover" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #555", borderRadius: "12px", padding: "8px 18px", fontSize: "13px", color: "#fff", fontFamily: "Montserrat,sans-serif", fontWeight: 600, textDecoration: "none" }}>
                  Детальніше →
                </Link>
              </div>
            </div>
            <Image src="/assets/home/service-physical.png" alt="Пожежна безпека" width={500} height={200} style={{ width: "100%", height: "174px", objectFit: "cover", display: "block", transform: "scale(1.05) translateX(6px)" }} />
          </div>

        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section
        className="rsp-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
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
          { num: "24/7", sub: "цілодобовий\nмоніторинг" },
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
