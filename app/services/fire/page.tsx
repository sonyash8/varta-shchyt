import Image from "next/image";
import Link from "next/link";

export default function FirePage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <Image src="/assets/home/svc-fire.png" alt="" width={48} height={48} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                ОХОРОННО-ПОЖЕЖНА СИГНАЛІЗАЦІЯ
              </h1>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                СИСТЕМИ ЗАХИСТУ<br />ДЛЯ ЖИТТЯ І МАЙНА
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Проєктуємо, встановлюємо та налаштовуємо охоронні й пожежні сигналізації для бізнесу, дому, офісів, складів та інших об'єктів. Підбираємо рішення під ваші потреби, бюджет і рівень безпеки.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                Охоронно-пожежна сигналізація допомагає вчасно виявити загрозу: несанкціоноване проникнення, спробу злому, задимлення або пожежу.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Система працює цілодобово та може передавати сигнал власнику, на мобільний телефон або на пульт охорони. Правильно спроєктована сигналізація дозволяє швидко реагувати на небезпечні ситуації та мінімізувати ризики для людей і майна.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Проєктування системи",     desc: "Визначаємо оптимальне розміщення датчиків, сирен, кабельних ліній та обладнання." },
                  { title: "Підбір обладнання",        desc: "Допомагаємо обрати охоронні, пожежні або комбіновані системи під конкретний об'єкт." },
                  { title: "Монтаж сигналізації",      desc: "Встановлюємо датчики, контрольні панелі, сирени та інші елементи системи." },
                  { title: "Налаштування і запуск",    desc: "Проводимо пусконалагоджувальні роботи та перевіряємо коректну роботу сигналізації." },
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
                ВИДИ СИГНАЛІЗАЦІЇ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Провідна сигналізація",  desc: "Надійне рішення для об'єктів, де можливе прокладання кабелів. Підходить для офісів, складів, підприємств і великих приміщень." },
                  { title: "Бездротова сигналізація", desc: "Зручний варіант для квартир, будинків, готових ремонтів або об'єктів, де важливо мінімізувати монтажні роботи." },
                  { title: "Комбінована система",     desc: "Поєднує кілька типів обладнання та дозволяє адаптувати сигналізацію під особливості конкретного об'єкта." },
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
                  { title: "Комплексний підхід",   desc: "Беремо на себе всі етапи: від консультації та проєкту до монтажу, налаштування й підтримки." },
                  { title: "Досвід спеціалістів",  desc: "Враховуємо не лише технічні вимоги, а й реальні сценарії використання системи." },
                  { title: "Зручність для клієнта", desc: "Підбираємо рішення так, щоб система була зрозумілою, ефективною та зручною в щоденному використанні." },
                  { title: "Надійне обладнання",   desc: "Працюємо з перевіреними виробниками та підбираємо оптимальне співвідношення ціни й якості." },
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
                src="/assets/home/svc-fire-hero.png"
                alt="Охоронно-пожежна сигналізація"
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
