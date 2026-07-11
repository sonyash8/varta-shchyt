import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid #1e1e1e", padding: "56px 40px 32px" }}>
      <div className="rsp-footer" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.3fr", gap: "48px", marginBottom: "48px" }}>

        {/* Logo column */}
        <div className="footer-col-logo">
          <Link href="/" className="footer-logo-link" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "16px", marginLeft: "-12px" }}>
            <Image
              src="/assets/home/logo-nobg.png"
              alt="Варта-Щит Україна"
              width={60}
              height={45}
              style={{ objectFit: "contain" }}
            />
            <div className="nav-logo-text" style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
              <strong style={{ fontFamily: "Montserrat,sans-serif", fontSize: "13px", fontWeight: 800, color: "#fff", letterSpacing: "0.5px" }}>ВАРТА-ЩИТ</strong>
              <span style={{ fontFamily: "Montserrat,sans-serif", fontSize: "11px", fontWeight: 400, color: "#aaa" }}>Україна</span>
            </div>
          </Link>
          <p className="footer-logo-desc" style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, margin: "0 0 26px" }}>
            Забезпечуємо надійний захист бізнесу, майна та життя. Працюємо для вашої безпеки 24/7.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex" }}>
              <Image src="/assets/home/icon-facebook.png" alt="Facebook" width={24} height={24} style={{ objectFit: "contain" }} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex" }}>
              <Image src="/assets/home/icon-instagram.png" alt="Instagram" width={24} height={24} style={{ objectFit: "contain" }} />
            </Link>
          </div>
        </div>

        {/* Послуги */}
        <div className="footer-col-services">
          <h5 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#F5A623", marginBottom: "20px", textTransform: "uppercase" }}>ПОСЛУГИ</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { label: "Захист інформації — пошук жучків", href: "/services/infosec" },
              { label: "Відеоспостереження", href: "/services/video" },
              { label: "Охоронно-пожежна сигналізація", href: "/services/fire" },
              { label: "Фізична охорона", href: "/services/physical" },
              { label: "Структуровані кабельні системи", href: "/services/scs" },
              { label: "Системи контролю доступу", href: "/services/access" },
            ].map(item => (
              <li key={item.label} style={{ marginBottom: "10px" }}>
                <Link href={item.href} className="footer-link" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="footer-link" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>Усі послуги</Link>
            </li>
          </ul>
        </div>

        {/* Компанія */}
        <div className="footer-col-company">
          <h5 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#F5A623", marginBottom: "20px", textTransform: "uppercase" }}>КОМПАНІЯ</h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { label: "Про компанію", href: "/company" },
              { label: "Переваги", href: "/company" },
              { label: "Контакти", href: "/contacts" },
            ].map(item => (
              <li key={item.label} style={{ marginBottom: "10px" }}>
                <Link href={item.href} className="footer-link" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Контакти */}
        <div className="footer-col-contacts">
          <h5 style={{ fontFamily: "Montserrat,sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#F5A623", marginBottom: "20px", textTransform: "uppercase" }}>КОНТАКТИ</h5>
          <div className="footer-contacts-grid" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ color: "#666", fontSize: "13px", lineHeight: 1.5 }}>04119, м. Київ, вул. Зоологічна, буд. 4-а, оф. 139/2</div>
            <div style={{ color: "#666", fontSize: "13px", lineHeight: 1.5 }}>vartasecurity@gmail.com</div>
            <div style={{ color: "#666", fontSize: "13px", lineHeight: 1.5 }}>+38 (067) 777-85-10<br />+38 (050) 777-85-11</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
