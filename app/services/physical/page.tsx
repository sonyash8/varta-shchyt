import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фізична охорона — Варта-Щит Україна",
  description: "Особиста охорона, пости охорони та супровід вантажів для бізнесу та приватних клієнтів у Києві.",
};

export default function PhysicalPage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px" }}>
                <Image src="/assets/home/svc-physical.png" alt="" width={52} height={52} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                ФІЗИЧНА ОХОРОНА
              </h1>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                ЗАХИСТ ОБ'ЄКТІВ<br />ТА КОНТРОЛЬ БЕЗПЕКИ
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Організовуємо фізичну охорону для бізнесу, підприємств, складів, будівельних майданчиків, житлових комплексів та приватних об'єктів. Забезпечуємо пропускний режим, контроль території, безпеку персоналу й захист майна.
              </p>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                Фізична охорона потрібна там, де важлива постійна присутність спеціалістів, швидке реагування та контроль ситуації на місці.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Охоронці допомагають запобігти проникненню сторонніх осіб, порушенням пропускного режиму, спробам крадіжок, конфліктним ситуаціям та іншим ризикам для об'єкта. Такий формат захисту особливо ефективний у поєднанні з відеоспостереженням, сигналізацією та системами контролю доступу.
              </p>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Аналіз об'єкта",            desc: "Оцінюємо територію, можливі ризики, режим роботи, кількість входів, персоналу та транспорту." },
                  { title: "Організація постів охорони", desc: "Визначаємо оптимальну кількість постів і зони відповідальності для кожного охоронця." },
                  { title: "Контроль доступу",           desc: "Забезпечуємо пропускний режим для працівників, відвідувачів і автотранспорту." },
                  { title: "Патрулювання території",     desc: "Проводимо планові та позапланові обходи для контролю порядку й виявлення порушень." },
                  { title: "Реагування на інциденти",    desc: "Діємо за інструкціями у випадку тривоги, конфліктів, пожежі, спроб проникнення або інших нестандартних ситуацій." },
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
                src="/assets/home/svc-physical-hero.png"
                alt="Фізична охорона"
                width={600}
                height={320}
                style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "22px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ДЛЯ ЯКИХ ОБ'ЄКТІВ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Бізнес-центри та офіси",          desc: "Контроль входу, відвідувачів, персоналу та внутрішнього порядку." },
                  { title: "Склади й підприємства",           desc: "Захист матеріальних цінностей, території, техніки та виробничих зон." },
                  { title: "Будівельні майданчики",           desc: "Охорона обладнання, матеріалів і контроль доступу на територію." },
                  { title: "Житлові комплекси та приватні об'єкти", desc: "Безпека мешканців, майна, в'їздів, паркінгів і прилеглої території." },
                  { title: "Магазини та торгові об'єкти",     desc: "Запобігання крадіжкам, контроль порядку й оперативне реагування на ситуації." },
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
                  { title: "Комплексний підхід",        desc: "Враховуємо особливості об'єкта, рівень ризиків і потрібний формат охорони." },
                  { title: "Підготовлений персонал",    desc: "Підбираємо охоронців відповідно до задач об'єкта та режиму роботи." },
                  { title: "Чіткі інструкції",          desc: "Розробляємо порядок дій для охорони у стандартних і нестандартних ситуаціях." },
                  { title: "Контроль якості",           desc: "Здійснюємо перевірку роботи охорони та підтримуємо постійний зв'язок з об'єктом." },
                  { title: "Інтеграція з технічними системами", desc: "За потреби поєднуємо фізичну охорону з відеоспостереженням, сигналізацією та контролем доступу." },
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

      {/* ── НАПРЯМКИ ФІЗИЧНОЇ ОХОРОНИ ── */}
      <section className="rsp-sec-b" style={{ padding: "0 40px 72px" }}>
        <div
          data-reveal
          style={{ position: "relative", border: "0.5px solid rgba(245,166,35,0.6)", borderRadius: "16px", padding: "48px 40px 40px", marginTop: "20px" }}
        >
          <h2 style={{
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#0d0d0d",
            padding: "0 28px",
            fontFamily: "Montserrat,sans-serif",
            fontSize: "26px",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            whiteSpace: "nowrap",
          }}>НАПРЯМКИ ОХОРОНИ</h2>

          <div className="rsp-physical" style={{ display: "flex", alignItems: "stretch" }}>
            {[
              { icon: "/assets/home/svc-personal.png", title: "Особиста охорона",  desc: "Захист життя та здоров'я клієнтів у будь-яких умовах.",    w: 48, h: 48 },
              { icon: "/assets/home/svc-post.png",     title: "Пост охорони",      desc: "Організація та забезпечення контролю доступу на об'єкти.", w: 76, h: 76 },
              { icon: "/assets/home/svc-cargo.png",    title: "Супровід вантажів", desc: "Надійний супровід та охорона вантажів у дорозі.",          w: 76, h: 76 },
            ].map((svc, i, arr) => (
              <div key={svc.title} style={{ display: "contents" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "20px 24px" }}>
                  <div style={{ width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src={svc.icon} alt={svc.title} width={svc.w} height={svc.h} style={{ objectFit: "contain" }} />
                  </div>
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <h4 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>{svc.title}</h4>
                    <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.65 }}>{svc.desc}</p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="rsp-hide" style={{ width: "1px", background: "rgba(245,166,35,0.4)", flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
