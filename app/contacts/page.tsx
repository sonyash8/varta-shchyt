"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactsTitle from "@/components/ContactsTitle";

const FORMSPREE_ID = "mykqjglb";

const QUICK = [
  { icon: "/assets/home/icon-consult.png",  title: "Консультація",       desc: "Безкоштовна консультація наших експертів з безпеки.",   w: 40 },
  { icon: "/assets/home/icon-solution.png", title: "Підбір рішення",     desc: "Підберемо оптимальне рішення під ваші потреби та бюджет.", w: 36 },
  { icon: "/assets/home/icon-fast.png",     title: "Оперативний зв'язок", desc: "Швидка реакція та оперативна обробка ваших запитів.",  w: 40 },
  { icon: "/assets/home/icon-247-orange.png", title: "24/7 підтримка",     desc: "Ми на зв'язку цілодобово, 7 днів на тиждень.",          w: 40 },
];

export default function ContactsPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "520px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Image
          src="/assets/home/contacts-hero.png"
          alt=""
          fill
          priority
          className="hero-bg"
          style={{ objectFit: "cover", objectPosition: "right 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.0) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "220px", zIndex: 1, background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100px", zIndex: 1, background: "linear-gradient(to bottom, rgba(13,13,13,0.4) 0%, transparent 100%)" }} />

        <div className="rsp-hero-pad" style={{ position: "relative", zIndex: 2, padding: "100px 40px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ maxWidth: "560px" }}>
            <div className="hero-sub" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#888", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>КОНТАКТИ</span>
              <div style={{ width: "40px", height: "1px", background: "#F5A623" }} />
            </div>
            <ContactsTitle />
            <p className="hero-desc" style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.75, marginBottom: "32px", maxWidth: "460px" }}>
              Ми завжди на зв'язку, щоб допомогти підібрати рішення для безпеки бізнесу, дому та приватних об'єктів.
            </p>
            <div className="hero-cta" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#form"
                className="btn-gold-hover"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "13px 24px", borderRadius: "12px", textDecoration: "none" }}
              >
                НАДІСЛАТИ ЗАПИТ →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── ФОРМА + ЯК МИ ПРАЦЮЄМО ── */}
      <section id="form" className="rsp-sec" style={{ padding: "72px 40px" }}>
        <div className="rsp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          {/* Form */}
          <div data-reveal className="contacts-card" style={{ background: "#141414", border: "1px solid rgba(245,166,35,0.3)", borderRadius: "20px", padding: "44px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "22px", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>НАПИШІТЬ НАМ</h3>
              <div style={{ width: "40px", height: "2px", background: "#F5A623" }} />
            </div>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
                <h4 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "18px", fontWeight: 700, color: "#F5A623", marginBottom: "8px" }}>Заявку відправлено!</h4>
                <p style={{ fontSize: "13px", color: "#666" }}>Ми зв'яжемося з вами найближчим часом.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { placeholder: "Ваше ім'я", name: "name", type: "text" },
                  { placeholder: "Телефон",   name: "phone", type: "tel" },
                ].map(f => (
                  <div key={f.name} style={{ marginBottom: "14px" }}>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      required
                      style={{ width: "100%", background: "#0e0e0e", border: "1px solid rgba(245,166,35,0.2)", borderRadius: "10px", padding: "12px 16px", color: "#fff", fontSize: "12px", outline: "none", fontFamily: "inherit" }}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: "14px" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    style={{ width: "100%", background: "#0e0e0e", border: "1px solid rgba(245,166,35,0.2)", borderRadius: "10px", padding: "12px 16px", color: "#fff", fontSize: "16px", outline: "none", fontFamily: "inherit" }}
                  />
                </div>
                <div style={{ marginBottom: "24px" }}>
                  <textarea
                    name="message"
                    placeholder="Повідомлення"
                    rows={4}
                    style={{ width: "100%", background: "#0e0e0e", border: "1px solid rgba(245,166,35,0.2)", borderRadius: "10px", padding: "12px 16px", color: "#fff", fontSize: "12px", outline: "none", resize: "none", fontFamily: "inherit" }}
                  />
                </div>
                {status === "error" && (
                  <p style={{ fontSize: "12px", color: "#e55", marginBottom: "12px" }}>Помилка відправки. Спробуйте ще раз.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold-hover"
                  style={{ width: "100%", padding: "14px", background: "#F5A623", color: "#000", border: "none", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", borderRadius: "12px", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}
                >
                  {status === "sending" ? "ВІДПРАВЛЯЄМО..." : "НАДІСЛАТИ ЗАПИТ →"}
                </button>
              </form>
            )}
          </div>

          {/* How we work */}
          <div data-reveal data-delay="1" className="contacts-card" style={{ background: "#141414", border: "1px solid rgba(245,166,35,0.3)", borderRadius: "20px", padding: "44px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
              <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "22px", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>ШВИДКИЙ ЗВ'ЯЗОК</h3>
              <div style={{ width: "40px", height: "2px", background: "#F5A623" }} />
            </div>
            <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6, marginBottom: "28px" }}>Наші фахівці зв'яжуться з вами та допоможуть обрати оптимальне рішення.</p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {QUICK.map((item, i) => (
                <div key={item.title}>
                  <div data-reveal data-delay={String(i + 1)} style={{ display: "flex", alignItems: "center", gap: "18px", padding: "16px 0" }}>
                    <div style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Image src={item.icon} alt={item.title} width={item.w} height={item.w} style={{ objectFit: "contain" }} />
                    </div>
                    <div>
                      <h5 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{item.title}</h5>
                      <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </div>
                  {i < QUICK.length - 1 && (
                    <div style={{ height: "1px", background: "rgba(245,166,35,0.15)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── АДРЕСА + КАРТА ── */}
      <section className="rsp-sec-b" style={{ padding: "0 40px 72px" }}>
        <div data-reveal className="rsp-map" style={{ background: "#141414", border: "1px solid rgba(245,166,35,0.2)", borderRadius: "20px", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 320px" }}>

          {/* Map iframe */}
          <div style={{ position: "relative", minHeight: "320px" }}>
            <iframe
              src="https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB.+%D0%84%D0%B2%D0%B3%D0%B5%D0%BD%D0%B0+%D0%9A%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C%D1%86%D1%8F%2C+18%2C+%D0%9A%D0%B8%D1%97%D0%B2&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "320px", filter: "grayscale(0.3) invert(0.85) hue-rotate(180deg) brightness(0.85) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address info */}
          <div className="rsp-map-addr" style={{ padding: "40px 36px", borderLeft: "1px solid rgba(245,166,35,0.15)", display: "flex", flexDirection: "column", gap: "28px", justifyContent: "center" }}>
            <div>
              <div style={{ fontSize: "13px", letterSpacing: "2px", color: "#F5A623", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase", marginBottom: "8px", fontWeight: 700 }}>АДРЕСА</div>
              <p style={{ fontSize: "12px", color: "#ccc", lineHeight: 1.6 }}>м. Київ,<br />вул. Євгена Коновальця, 18</p>
            </div>
            <div>
              <div style={{ fontSize: "13px", letterSpacing: "2px", color: "#F5A623", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase", marginBottom: "8px", fontWeight: 700 }}>ТЕЛЕФОНИ</div>
              <a href="tel:+380674250404" style={{ display: "block", fontSize: "15px", color: "#ccc", textDecoration: "none", marginBottom: "6px" }}>+38 (067) 425-04-04</a>
              <a href="tel:+380504250404" style={{ display: "block", fontSize: "15px", color: "#ccc", textDecoration: "none" }}>+38 (050) 425-04-04</a>
            </div>
            <div>
              <div style={{ fontSize: "13px", letterSpacing: "2px", color: "#F5A623", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase", marginBottom: "8px", fontWeight: 700 }}>EMAIL</div>
              <a href="mailto:varta-shchyt@ukr.net" style={{ fontSize: "15px", color: "#ccc", textDecoration: "none" }}>varta-shchyt@ukr.net</a>
            </div>
            <div>
              <div style={{ fontSize: "13px", letterSpacing: "2px", color: "#F5A623", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase", marginBottom: "8px", fontWeight: 700 }}>ГРАФІК РОБОТИ</div>
              <p style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.6 }}><span style={{ fontSize: "12px" }}>Пн – Нд</span><br />08:00 – 24:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="rsp-sec" style={{ padding: "48px 40px 72px" }}>
        <div
          data-reveal
          className="rsp-cta-col"
          style={{ background: "#141414", borderRadius: "20px", padding: "36px 48px", display: "flex", alignItems: "center", gap: "40px", overflow: "visible", position: "relative" }}
        >
          <div className="rsp-hide" style={{ flexShrink: 0, marginTop: "-102px", marginBottom: "-102px" }}>
            <Image src="/assets/home/logo-shield.png" alt="Варта-Щит Україна" width={348} height={348} style={{ objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "28px", fontWeight: 800, textTransform: "uppercase", marginBottom: "12px" }}>ЗАЛИШИЛИСЬ ПИТАННЯ?</h3>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "0" }}>Наші фахівці нададуть безкоштовну консультацію та підберуть оптимальне рішення.</p>
          </div>
          <a
            href="tel:+380674250404"
            className="btn-gold-hover"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5A623", color: "#000", fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", flexShrink: 0 }}
          >
            ЗАТЕЛЕФОНУВАТИ →
          </a>
        </div>
      </section>
    </>
  );
}
