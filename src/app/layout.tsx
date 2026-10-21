import type { Metadata } from 'next';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Maham Health | Elite Medical Tourism Concierge',
  description: 'World-class healthcare in Iran with 70%-90% savings under Soorin Maham.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
