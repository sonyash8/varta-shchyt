import Image from "next/image";
import Link from "next/link";

export default function SmartPage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <Image src="/assets/home/svc-smart.png" alt="" width={48} height={48} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                РОЗУМНИЙ ДІМ
              </h1>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                АВТОМАТИЗАЦІЯ ДЛЯ КОМФОРТУ<br />ТА БЕЗПЕКИ
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Проєктуємо та встановлюємо системи "Розумний дім" для квартир, будинків, офісів та комерційних об'єктів. Об'єднуємо освітлення, клімат, безпеку, відеоспостереження й інші системи в єдине зручне керування.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                "Розумний дім" — це комплекс технологій, який дозволяє керувати інженерними системами локально або дистанційно зі смартфона, планшета чи панелі управління.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Система може автоматично реагувати на події: рух у приміщенні, зміну температури, спрацювання датчиків, відкриття дверей, витік води або інші ситуації. Це підвищує комфорт, економить ресурси та допомагає швидко реагувати на небезпеку.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Проєктування системи",  desc: "Визначаємо, які функції потрібні для об'єкта, та створюємо зручну схему керування." },
                  { title: "Підбір обладнання",     desc: "Допомагаємо обрати датчики, панелі керування, контролери, модулі освітлення, клімату та безпеки." },
                  { title: "Монтаж і налаштування", desc: "Встановлюємо обладнання, підключаємо системи та налаштовуємо сценарії роботи." },
                  { title: "Дистанційне керування", desc: "Налаштовуємо управління зі смартфона, планшета або іншого зручного пристрою." },
                  { title: "Інтеграція з безпекою", desc: "Підключаємо відеоспостереження, сигналізацію, контроль доступу та аварійні датчики." },
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
                МОЖЛИВОСТІ СИСТЕМИ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Керування освітленням",    desc: "Створення сценаріїв освітлення для різних ситуацій: вечір, робота, відпочинок або відсутність вдома." },
                  { title: "Контроль клімату",         desc: "Автоматичне регулювання температури, вологості та роботи кліматичного обладнання." },
                  { title: "Безпека об'єкта",          desc: "Підключення охоронної та пожежної сигналізації, датчиків руху, відкриття дверей, витоку води або газу." },
                  { title: "Відеоспостереження",       desc: "Можливість переглядати камери онлайн і контролювати ситуацію на об'єкті дистанційно." },
                  { title: "Керування ролетами та шторами", desc: "Автоматичне або ручне керування ролетами, жалюзі та шторами." },
                  { title: "Мультимедіа",              desc: "Налаштування аудіо- та відеосистем для комфортного використання в різних кімнатах." },
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
                  { title: "Комплексний підхід",       desc: "Об'єднуємо комфорт, безпеку та інженерні системи в єдине рішення." },
                  { title: "Зручність для користувача", desc: "Налаштовуємо систему так, щоб нею було легко керувати щодня." },
                  { title: "Індивідуальні сценарії",   desc: "Створюємо автоматизацію під ваш спосіб життя, об'єкт і потреби." },
                  { title: "Досвід спеціалістів",      desc: "Підбираємо обладнання, виконуємо монтаж і налаштування системи під ключ." },
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
                src="/assets/home/svc-smart-hero.png"
                alt="Розумний дім"
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
