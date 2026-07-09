import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти — Варта-Щит Україна",
  description: "Зв'яжіться з Варта-Щит Україна: телефон, email, адреса офісу в Києві та форма заявки на консультацію.",
};

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
