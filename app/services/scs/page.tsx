import Image from "next/image";
import Link from "next/link";

export default function ScsPage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <Image src="/assets/home/icon-solution.png" alt="" width={48} height={48} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                СТРУКТУРОВАНІ КАБЕЛЬНІ СИСТЕМИ
              </h1>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                НАДІЙНА ІНФРАСТРУКТУРА<br />ДЛЯ ВАШИХ СИСТЕМ БЕЗПЕКИ
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Проєктуємо та монтуємо кабельну інфраструктуру для відеоспостереження, контролю доступу, сигналізації та локальної мережі. Якісна СКС — основа стабільної роботи будь-якої системи безпеки на об'єкті.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                Структурована кабельна система (СКС) — це впорядкована мережа кабелів, розеток і комутаційного обладнання, яка об'єднує камери, контролери доступу, датчики сигналізації та мережеве обладнання в єдину систему.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Правильно спроєктована й змонтована СКС спрощує обслуговування, зменшує ризик збоїв і дозволяє легко масштабувати систему безпеки в майбутньому.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Проєктування СКС",         desc: "Розраховуємо трасування кабелів, кількість портів і місця розташування комутаційного обладнання." },
                  { title: "Прокладання кабелю",        desc: "Монтуємо кабельні траси відкритим або прихованим способом з дотриманням норм і естетики приміщення." },
                  { title: "Монтаж шаф і патч-панелей",  desc: "Встановлюємо комутаційні шафи, патч-панелі та комутатори для зручного обслуговування системи." },
                  { title: "Маркування та тестування",  desc: "Маркуємо кожну лінію і перевіряємо якість з'єднання спеціальним обладнанням." },
                  { title: "Здача в експлуатацію",      desc: "Передаємо систему з повною схемою розводки та документацією." },
                ].map(item => (
                  <div key={item.title}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ccc", fontFamily: "Montserrat,sans-serif", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ДЛЯ ЯКИХ СИСТЕМ ПОТРІБНА СКС
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Відеоспостереження",   desc: "Кабельні лінії для камер, реєстраторів і серверів зберігання відео." },
                  { title: "Контроль доступу",      desc: "Підключення контролерів, зчитувачів і електронних замків." },
                  { title: "Охоронно-пожежна сигналізація", desc: "Лінії зв'язку для датчиків, сповіщувачів та приймально-контрольних приладів." },
                  { title: "Локальна мережа й телефонія", desc: "Інфраструктура для інтернету, робочих станцій та IP-телефонії." },
                  { title: "Серверні та комутаційні вузли", desc: "Організація стійок, шаф та точок підключення обладнання." },
                ].map(item => (
                  <div key={item.title}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ccc", fontFamily: "Montserrat,sans-serif", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЧОМУ ОБИРАЮТЬ НАС
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Комплексний підхід",    desc: "Проєктуємо й монтуємо кабельну інфраструктуру разом з самою системою безпеки." },
                  { title: "Акуратний монтаж",       desc: "Дбаємо про естетичність трас і зручність подальшого обслуговування." },
                  { title: "Якісні матеріали",       desc: "Використовуємо сертифікований кабель і комутаційне обладнання." },
                  { title: "Документація системи",   desc: "Надаємо схему розводки, щоб обслуговування в майбутньому було простим." },
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
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none" }}
            >
              ОТРИМАТИ КОНСУЛЬТАЦІЮ →
            </Link>
          </div>

          {/* RIGHT */}
          <div data-reveal="right" className="rsp-svc-sticky" style={{ position: "sticky", top: "120px" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(245,166,35,0.2)" }}>
              <Image
                src="/assets/home/services-hero.png"
                alt="Структуровані кабельні системи"
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
