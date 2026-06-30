"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Головна" },
    { href: "/company", label: "Компанія" },
    { href: "/services", label: "Послуги" },
    { href: "/contacts", label: "Контакти" },
  ];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
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
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "Montserrat,sans-serif",
                  color: pathname === link.href ? "#F5A623" : "#ccc",
                }}
              >
                {link.label}
              </Link>
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
          <span style={{ fontSize: "12px", color: "#F5A623", fontWeight: 700, fontFamily: "Montserrat,sans-serif" }}>+38(044) 123-45-67</span>
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
              className={`nav-mobile-link${pathname === link.href ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+380441234567" className="nav-mobile-phone">
            +38(044) 123-45-67
          </a>
        </div>
      )}
    </>
  );
}
