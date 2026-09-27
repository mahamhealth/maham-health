import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from '@/components/WhatsAppButton';
export const metadata: Metadata = { title: "Maham Health | Medical Concierge in Iran", description: "Medical travel and concierge services in Iran." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className="bg-navy-950 text-white min-h-screen antialiased">{children}</body></html>; }
