// src/app/[locale]/page.tsx
import Home from '../../components/Home';
import { Language } from '../../data/translations';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fa' },
    { locale: 'ar' },
    { locale: 'sw' },
    { locale: 'hi' },
    { locale: 'ur' },
  ];
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = (params.locale as Language) || 'en';
  return {
    title: 'Maham Health | Medical Tourism Concierge Iran',
    description: 'Premier medical-tourism concierge operated under Soorin Maham Trade & Industry Development Corporation.',
  };
}

export default function LocalePage({ params }: { params: { locale: string } }) {
  const locale = (params.locale as Language) || 'en';
  return <Home initialLanguage={locale} />;
}
