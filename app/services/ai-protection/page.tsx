import Image from "next/image";
import Link from "next/link";

export default function AiProtectionPage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <Image src="/assets/home/icon-ai-protection.png" alt="" width={35} height={44} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                ВИКОРИСТАННЯ ШІ ДЛЯ ЗАХИСТУ
              </h1>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                РОЗУМНИЙ АНАЛІЗ ЗАГРОЗ<br />У РЕАЛЬНОМУ ЧАСІ
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Впроваджуємо штучний інтелект у системи відеоспостереження та сигналізації, щоб об'єкт розпізнавав підозрілу активність і реагував швидше, ніж людина встигне переглянути записи.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                ШІ-аналітика аналізує відеопотік у реальному часі: розпізнає людей і транспорт, помічає проникнення на територію, залишені предмети або скупчення людей — і одразу надсилає сповіщення.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Це суттєво знижує кількість хибних тривог і дозволяє реагувати на реальну загрозу за лічені секунди, а не витрачати час на перегляд годин запису.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Аудит поточної системи",  desc: "Оцінюємо, чи підтримує наявне обладнання підключення ШІ-аналітики." },
                  { title: "Підбір рішення",           desc: "Обираємо алгоритми розпізнавання під конкретні задачі об'єкта." },
                  { title: "Налаштування розпізнавання", desc: "Задаємо, що саме система має відрізняти: людину, авто, залишений предмет тощо." },
                  { title: "Інтеграція зі сповіщеннями", desc: "Підключаємо миттєві сповіщення відповідальним особам при виявленні загрози." },
                  { title: "Тестування та навчання",  desc: "Перевіряємо точність розпізнавання і зменшуємо кількість хибних спрацювань." },
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
                  { title: "Розпізнавання людей і авто", desc: "Точне відрізнення реальної загрози від сторонніх спрацювань." },
                  { title: "Виявлення проникнення",      desc: "Автоматичне сповіщення при перетині заданої зони чи периметра." },
                  { title: "Аналіз нетипової поведінки", desc: "Виявлення скупчень людей, залишених предметів чи підозрілих дій." },
                  { title: "Менше хибних тривог",        desc: "ШІ фільтрує неважливі спрацювання і залишає тільки реальні загрози." },
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
                  { title: "Сучасні технології",   desc: "Впроваджуємо ШІ-рішення поряд із класичною охороною, а не замість неї." },
                  { title: "Швидша реакція",        desc: "Скорочуємо час від події до сповіщення відповідальної особи." },
                  { title: "Гнучке налаштування",   desc: "Адаптуємо алгоритми під особливості конкретного об'єкта." },
                  { title: "Комплексний підхід",    desc: "Поєднуємо ШІ-аналітику з фізичною охороною та реагуванням." },
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
                alt="Використання ШІ для захисту"
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
