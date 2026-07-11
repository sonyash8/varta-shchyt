import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Системи контролю доступу (СКД) — Варта-Щит Україна",
  description: "Обмеження доступу, облік робочого часу та контроль відвідувачів для офісів, підприємств і житлових комплексів.",
};

export default function AccessPage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px" }}>
                <Image src="/assets/home/svc-access.png" alt="" width={48} height={48} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                СИСТЕМИ КОНТРОЛЮ ДОСТУПУ
              </h1>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                КОНТРОЛЬ ПЕРСОНАЛУ<br />ТА БЕЗПЕЧНИЙ ДОСТУП
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Встановлюємо системи контролю доступу для офісів, підприємств, складів, бізнес-центрів, житлових комплексів та інших об'єктів. Допомагаємо організувати пропускний режим, облік робочого часу та контроль доступу до окремих зон.
              </p>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                Система контролю доступу дозволяє обмежити вхід сторонніх осіб, розмежувати права доступу для працівників і контролювати переміщення персоналу або відвідувачів.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Такі системи можуть бути простими — для відкриття дверей карткою чи кодом, або більш складними — з біометрією, розпізнаванням номерів авто, турнікетами, електронними замками та інтеграцією з відеоспостереженням.
              </p>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Проєктування системи",  desc: "Визначаємо, які зони потрібно контролювати, які типи доступу використовувати та як система має працювати." },
                  { title: "Підбір обладнання",     desc: "Допомагаємо обрати контролери, зчитувачі, електронні замки, турнікети, кнопки виходу та програмне забезпечення." },
                  { title: "Монтаж і підключення",  desc: "Встановлюємо обладнання, прокладаємо кабелі, підключаємо всі елементи системи та перевіряємо їхню роботу." },
                  { title: "Налаштування доступу",  desc: "Створюємо рівні доступу для працівників, відвідувачів або окремих груп користувачів." },
                  { title: "Навчання персоналу",    desc: "Пояснюємо, як користуватися системою, керувати доступом і працювати з програмою." },
                ].map(item => (
                  <div key={item.title}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ccc", fontFamily: "Montserrat,sans-serif", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contacts"
              className="btn-gold-hover"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", marginTop: "45px" }}
            >
              ОТРИМАТИ КОНСУЛЬТАЦІЮ →
            </Link>
          </div>

          {/* RIGHT */}
          <div data-reveal="right" className="rsp-svc-sticky" style={{ position: "sticky", top: "120px" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(245,166,35,0.2)", marginBottom: "22px" }}>
              <Image
                src="/assets/home/svc-access-hero.png"
                alt="Системи контролю доступу"
                width={600}
                height={320}
                style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                МОЖЛИВОСТІ СИСТЕМИ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Контроль входу та виходу",       desc: "Фіксація доступу до приміщень, робочих зон або території об'єкта." },
                  { title: "Облік робочого часу",            desc: "Можливість відстежувати присутність персоналу та час перебування на об'єкті." },
                  { title: "Розмежування прав доступу",      desc: "Налаштування доступу для окремих працівників, відділів або груп." },
                  { title: "Контроль транспорту",            desc: "Організація заїзду та виїзду автомобілів на територію об'єкта." },
                  { title: "Інтеграція з відеоспостереженням", desc: "Об'єднання контролю доступу, камер і сигналізації в єдину систему безпеки." },
                ].map(item => (
                  <div key={item.title}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ccc", fontFamily: "Montserrat,sans-serif", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЧОМУ ОБИРАЮТЬ НАС
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Комплексний підхід",    desc: "Беремо на себе всі етапи: від консультації та проєкту до монтажу, налаштування й підтримки." },
                  { title: "Досвід спеціалістів",   desc: "Враховуємо не лише технічні вимоги, а й реальні сценарії використання системи." },
                  { title: "Зручність для клієнта", desc: "Підбираємо рішення так, щоб система була зрозумілою, ефективною та зручною в щоденному використанні." },
                  { title: "Надійне обладнання",    desc: "Працюємо з перевіреними виробниками та підбираємо оптимальне співвідношення ціни й якості." },
                ].map(item => (
                  <div key={item.title}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ccc", fontFamily: "Montserrat,sans-serif", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
