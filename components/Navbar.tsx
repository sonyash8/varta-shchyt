"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const SERVICES_LIST = [
  { href: "/services/video",         label: "Відеоспостереження" },
  { href: "/services/access",        label: "Системи контролю доступу (СКД)" },
  { href: "/services/scs",           label: "Структуровані кабельні системи (СКС)" },
  { href: "/services/infosec",       label: "Захист інформації — пошук жучків" },
  { href: "/services/fire",          label: "Охоронно-пожежна сигналізація" },
  { href: "/services/physical",      label: "Фізична охорона" },
  { href: "/services/automation",    label: "Автоматизовані системи управління" },
  { href: "/services/ai-protection", label: "Використання ШІ для захисту" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServicesDelayed = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 300);
  };

  const links = [
    { href: "/", label: "Головна" },
    { href: "/company", label: "Компанія" },
    { href: "/services", label: "Послуги" },
    { href: "/contacts", label: "Контакти" },
  ];

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(10,10,10,0.97)",
          borderBottom: "1px solid #222",
          backdropFilter: "blur(10px)",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px 0 20px",
        }}
      >
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image
            src="/assets/home/logo-nobg.png"
            alt="Варта-Щит Україна"
            width={72}
            height={54}
            style={{ objectFit: "contain" }}
          />
          <div className="nav-logo-text" style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
            <strong style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, color: "#fff", letterSpacing: "0.5px" }}>ВАРТА-ЩИТ</strong>
            <span style={{ fontFamily: "Montserrat,sans-serif", fontSize: "11px", fontWeight: 400, color: "#aaa" }}>Україна</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links-desktop" style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li
              key={link.href}
              style={{ position: "relative" }}
              onMouseEnter={() => link.href === "/services" && openServices()}
              onMouseLeave={() => link.href === "/services" && closeServicesDelayed()}
            >
              <Link
                href={link.href}
                className={`nav-link${isLinkActive(link.href) ? " active" : ""}`}
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "Montserrat,sans-serif",
                  color: isLinkActive(link.href) ? "#F5A623" : "#ccc",
                }}
              >
                {link.label}
              </Link>

              {link.href === "/services" && servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "36px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(10,10,10,0.98)",
                    border: "1px solid rgba(245,166,35,0.35)",
                    borderRadius: "12px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    width: "280px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    zIndex: 200,
                  }}
                >
                  {SERVICES_LIST.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      style={{
                        textDecoration: "none",
                        fontSize: "12.5px",
                        fontFamily: "Montserrat,sans-serif",
                        fontWeight: 500,
                        color: "#ccc",
                        padding: "9px 12px",
                        borderRadius: "8px",
                        lineHeight: 1.4,
                      }}
                      className="nav-dropdown-link"
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop phone */}
        <Link
          href="/contacts"
          className="nav-phone-desktop"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <span style={{ fontSize: "9px", color: "#888", letterSpacing: "1px", fontFamily: "Montserrat,sans-serif", textTransform: "uppercase" }}>ОТРИМАТИ КОНСУЛЬТАЦІЮ</span>
          <span style={{ fontSize: "12px", color: "#F5A623", fontWeight: 700, fontFamily: "Montserrat,sans-serif" }}>+38(067) 777-85-10</span>
        </Link>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-mobile-link${isLinkActive(link.href) ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+380677778510" className="nav-mobile-phone">
            +38(067) 777-85-10
          </a>
        </div>
      )}
    </>
  );
}
