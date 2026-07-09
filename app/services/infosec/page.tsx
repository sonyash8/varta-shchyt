import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пошук жучків та захист інформації — Варта-Щит Україна",
  description: "Пошук прихованих мікрофонів, камер і GPS-маячків, аудит інформаційної безпеки в Києві.",
};

export default function InfosecPage() {
  return (
    <>
      <section className="rsp-svc-section" style={{ padding: "100px 40px 72px" }}>
        <div className="rsp-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* LEFT */}
          <div>
            <div className="svc-title-wrap" style={{ marginBottom: "24px" }}>
              <div className="svc-icon-row" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
                <Image src="/assets/home/icon-bug-search.png" alt="" width={52} height={52} style={{ objectFit: "contain" }} />
                <div style={{ flex: 1, height: "1px", background: "rgba(245,166,35,0.5)" }} />
              </div>
              <h1 className="svc-h1" style={{ fontFamily: "Montserrat,sans-serif", fontSize: "36px", fontWeight: 900, textTransform: "uppercase", color: "#fff", marginBottom: "0" }}>
                ПОШУК ЖУЧКІВ ТА ЗАХИСТ ІНФОРМАЦІЇ
              </h1>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px", lineHeight: 1.4 }}>
                ЗАХИСТ ІНФОРМАЦІЇ ТА<br />ВИЯВЛЕННЯ ПРИХОВАНИХ ПРИСТРОЇВ
              </h2>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Проводимо пошук жучків — прихованих пристроїв прослуховування, відеофіксації та стеження — у приміщеннях, офісах, авто та робочих зонах. Допомагаємо захистити конфіденційні дані бізнесу й приватних клієнтів.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                ПРО ПОСЛУГУ
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "12px" }}>
                Технічний захист інформації потрібен там, де важлива конфіденційність: під час переговорів, роботи з документами, комерційними даними або персональною інформацією.
              </p>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75 }}>
                Приховані диктофони, камери, GPS-маячки чи інші пристрої складно виявити без спеціального обладнання та досвіду. Тому перевірку мають проводити фахівці, які знають, де можуть бути встановлені такі засоби і як правильно їх виявити.
              </p>
            </div>

            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "16px" }}>
                ЩО ВХОДИТЬ У ПОСЛУГУ
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Пошук пристроїв прослуховування", desc: "Перевіряємо приміщення на наявність прихованих мікрофонів, диктофонів та аудіозакладок." },
                  { title: "Виявлення прихованих камер",       desc: "Проводимо пошук прихованих відеокамер та інших засобів відеоспостереження." },
                  { title: "Перевірка GPS-маячків",            desc: "Допомагаємо виявити пристрої відстеження в авто, техніці або особистих речах." },
                  { title: "Аудит інформаційної безпеки",      desc: "Оцінюємо ризики витоку даних і надаємо рекомендації для посилення захисту." },
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
                ЧОМУ ОБИРАЮТЬ НАС
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { title: "Професійне обладнання", desc: "Використовуємо спеціальні технічні засоби для пошуку прихованих пристроїв." },
                  { title: "Конфіденційність",       desc: "Усі перевірки проводяться делікатно, без розголошення інформації." },
                  { title: "Комплексний підхід",     desc: "Перевіряємо не лише очевидні місця, а й потенційні зони ризику." },
                  { title: "Практичний досвід",      desc: "Маємо досвід роботи з об'єктами різного рівня складності." },
                ].map(item => (
                  <div key={item.title}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ccc", fontFamily: "Montserrat,sans-serif", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "12px" }}>
                КОМУ ЦЕ ПОТРІБНО
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Бізнесу — для захисту переговорів, документів, комерційної інформації та внутрішніх даних.",
                  "Керівникам і власникам — для перевірки кабінетів, конференц-залів, службових авто та робочих просторів.",
                  "Приватним клієнтам — для захисту особистого простору, житла, автомобіля та приватного життя.",
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.7 }}>{text}</p>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "40px", background: "#141414", border: "1px solid rgba(245,166,35,0.35)", borderRadius: "16px", padding: "24px 28px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", color: "#F5A623", letterSpacing: "1px", marginBottom: "10px" }}>
                ЦИФРОВА БЕЗПЕКА
              </h3>
              <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.75, marginBottom: "14px" }}>
                Фізичний пошук жучків і прихованих пристроїв — лише частина безпеки. За цифровий захист (акаунти, дані, кіберзагрози) відповідає наша споріднена компанія{" "}
                <strong style={{ color: "#fff", fontFamily: "Montserrat,sans-serif", fontWeight: 800, textTransform: "uppercase" }}>Vartalis</strong> — твій цифровий спокій.
              </p>
              <a
                href="https://vartalis.com.ua"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #555", borderRadius: "12px", padding: "8px 18px", fontSize: "12px", color: "#fff", fontFamily: "Montserrat,sans-serif", fontWeight: 600, textDecoration: "none" }}
              >
                vartalis.com.ua →
              </a>
            </div>

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
                src="/assets/home/svc-infosec-hero.png"
                alt="Пошук жучків"
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
