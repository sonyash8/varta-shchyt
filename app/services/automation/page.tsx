import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Автоматизовані системи управління — Варта-Щит Україна",
  description: "Автоматика керує замість вас — охорона, доступ і клімат за заданим сценарієм.",
};

export default function AutomationPage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <Image src="/assets/home/icon-fast.png" alt="" width={46} height={46} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                АВТОМАТИЗОВАНІ СИСТЕМИ УПРАВЛІННЯ
              </h1>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                АВТОМАТИКА КЕРУЄ<br />ЗАМІСТЬ ВАС
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Об'єднуємо охорону, доступ, відео та інженерні системи об'єкта в єдиний автоматизований комплекс, який працює за заданими сценаріями — без постійної ручної участі.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                Автоматизована система управління сама вмикає й вимикає охорону, освітлення, клімат чи доступ за розкладом або сигналом від датчиків — без потреби щоразу робити це вручну.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Це зменшує вплив людського фактора, пришвидшує реакцію на тривожні події та дозволяє керувати об'єктом дистанційно, з телефону чи панелі управління.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Проєктування сценаріїв",   desc: "Визначаємо, які процеси й за яких умов мають запускатися автоматично." },
                  { title: "Підбір контролерів",        desc: "Обираємо обладнання для автоматичного керування охороною, доступом і інженерними системами." },
                  { title: "Монтаж і підключення",      desc: "Інтегруємо системи безпеки, відео, доступу та автоматики в єдиний комплекс." },
                  { title: "Налаштування сценаріїв",    desc: "Задаємо розклади, умови спрацювання та реакцію системи на події." },
                  { title: "Навчання персоналу",        desc: "Пояснюємо, як користуватись автоматикою та керувати нею дистанційно." },
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
                  { title: "Автоматичне озброєння/зняття з охорони", desc: "За розкладом або при вході/виході відповідального співробітника." },
                  { title: "Реакція на датчики",       desc: "Автоматичне включення сигналізації, світла чи оповіщення при спрацюванні датчиків." },
                  { title: "Дистанційне керування",    desc: "Контроль об'єкта через смартфон чи панель управління з будь-якої точки." },
                  { title: "Інтеграція систем",         desc: "Об'єднання відеоспостереження, доступу та сигналізації в один автоматизований комплекс." },
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
                  { title: "Комплексний підхід",    desc: "Об'єднуємо охорону та автоматику в одне рішення замість окремих несумісних систем." },
                  { title: "Простота використання", desc: "Налаштовуємо автоматику так, щоб керувати нею було зрозуміло без спеціальних знань." },
                  { title: "Надійне обладнання",     desc: "Працюємо з перевіреними контролерами та комплектуючими." },
                  { title: "Підтримка після монтажу", desc: "Допомагаємо змінювати сценарії роботи системи за потреби." },
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
                src="/assets/home/about-monitors.png"
                alt="Автоматизовані системи управління"
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
