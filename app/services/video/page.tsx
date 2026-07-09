import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Відеоспостереження — Варта-Щит Україна",
  description: "Проєктування та монтаж систем відеоспостереження для офісів, складів, будинків і територій у Києві.",
};

export default function VideoPage() {
  return (
    <>
      {/* ── MAIN CONTENT ── */}
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT — text */}
          <div>
            {/* Title + icon row */}
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <Image src="/assets/home/svc-video.png" alt="" width={48} height={48} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                ВІДЕОСПОСТЕРЕЖЕННЯ
              </h1>
            </div>

            {/* Системи контролю */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                СИСТЕМИ КОНТРОЛЮ<br />ДЛЯ ВАШОЇ БЕЗПЕКИ
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Встановлюємо системи відеоспостереження для бізнесу, дому, складів, офісів та приватних об'єктів. Підбираємо обладнання, проєктуємо розміщення камер і налаштовуємо зручний віддалений доступ.
              </p>
            </div>

            {/* Про послугу */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                Якісне відеоспостереження — це не просто встановити камеру. Важливо правильно визначити зони контролю, уникнути «сліпих» місць, підібрати обладнання та налаштувати систему так, щоб вона була ефективною у щоденному використанні.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Ми підходимо до монтажу комплексно: враховуємо особливості об'єкта, рівень безпеки, потреби клієнта та зручність подальшого керування системою.
              </p>
            </div>

            {/* Що входить */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Проєктування системи", desc: "Визначаємо оптимальні місця для камер і зон контролю." },
                  { title: "Підбір обладнання",    desc: "Допомагаємо обрати камери, відеореєстратори та додаткові пристрої." },
                  { title: "Монтаж і налаштування", desc: "Встановлюємо обладнання та підключаємо систему до роботи." },
                  { title: "Віддалений доступ",    desc: "Налаштовуємо перегляд з телефону, комп'ютера або іншого пристрою." },
                ].map(item => (
                  <div key={item.title}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ccc", fontFamily: "Montserrat,sans-serif", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Чому обирають */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ЧОМУ ОБИРАЮТЬ НАС
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Досвідчені спеціалісти – маємо практичний досвід встановлення систем відеоспостереження для різних типів об'єктів.",
                  "Комплексний підхід – враховуємо не тільки технічні вимоги, а й реальні ризики безпеки.",
                  "Гарантійний сервіс – надаємо підтримку після встановлення та допомагаємо з налаштуванням обладнання.",
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.7 }}>{text}</p>
                ))}
              </div>
            </div>

            {/* Переваги */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПЕРЕВАГИ IP-ВІДЕОСПОСТЕРЕЖЕННЯ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                IP-камери забезпечують якісне зображення, деталізацію та можливість зручного онлайн-доступу. Такі системи підходять для об'єктів, де важлива чіткість картинки, контроль подій і швидкий доступ до записів. Ми допоможемо підібрати рішення, яке відповідатиме вашому бюджету, задачам і рівню безпеки.
              </p>
            </div>

            {/* CTA button */}
            <Link
              href="/contacts"
              className="btn-gold-hover"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none" }}
            >
              ОТРИМАТИ КОНСУЛЬТАЦІЮ →
            </Link>
          </div>

          {/* RIGHT — image */}
          <div data-reveal="right" className="rsp-svc-sticky" style={{ position: "sticky", top: "120px" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(245,166,35,0.2)" }}>
              <Image
                src="/assets/home/svc-video-hero.png"
                alt="Відеоспостереження"
                width={600}
                height={480}
                style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
