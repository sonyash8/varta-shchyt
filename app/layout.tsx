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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${openSans.variable} ${kodeMono.variable}`}>
      <body>
        <ScrollRevealInit />
        <Navbar />
        <main style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
