import type { Metadata } from "next";
import { Montserrat, Open_Sans, Kode_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kode-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Варта-Щит Україна — Охоронна компанія, системи безпеки",
  description:
    "Відеоспостереження, контроль доступу, пожежна сигналізація, пошук жучків, фізична охорона та автоматизовані системи безпеки в Києві.",
};

const BASE_URL = "https://vartasecurity.com.ua";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Варта-Щит Україна",
    url: BASE_URL,
    logo: `${BASE_URL}/assets/home/logo-nobg.png`,
    email: "vartasecurity@gmail.com",
    telephone: "+380677778510",
    address: {
      "@type": "PostalAddress",
      streetAddress: "вул. Зоологічна, буд. 4-а, оф. 139/2",
      addressLocality: "Київ",
      postalCode: "04119",
      addressCountry: "UA",
    },
    sameAs: ["https://facebook.com", "https://instagram.com"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Варта-Щит Україна",
    url: BASE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "Головна",
      "Компанія",
      "Послуги",
      "Відеоспостереження",
      "Захист інформації — пошук жучків",
      "Системи контролю доступу",
      "Структуровані кабельні системи",
      "Охоронно-пожежна сигналізація",
      "Фізична охорона",
      "Автоматизовані системи управління",
      "Використання ШІ для захисту",
      "Контакти",
    ],
    url: [
      BASE_URL,
      `${BASE_URL}/company`,
      `${BASE_URL}/services`,
      `${BASE_URL}/services/video`,
      `${BASE_URL}/services/infosec`,
      `${BASE_URL}/services/access`,
      `${BASE_URL}/services/scs`,
      `${BASE_URL}/services/fire`,
      `${BASE_URL}/services/physical`,
      `${BASE_URL}/services/automation`,
      `${BASE_URL}/services/ai-protection`,
      `${BASE_URL}/contacts`,
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${openSans.variable} ${kodeMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollRevealInit />
        <Navbar />
        <main style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
