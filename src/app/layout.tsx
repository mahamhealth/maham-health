// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Maham Health | Medical Tourism Concierge Iran",
  description: "Premier medical-tourism concierge operated under Soorin Maham Trade & Industry Development Corporation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
