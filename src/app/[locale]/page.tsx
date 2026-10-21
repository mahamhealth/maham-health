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
  const isRtl = ['fa', 'ar', 'ur'].includes(locale);
  return {
    title: 'Maham Health | Medical Tourism Concierge Iran',
    description: 'Premier medical-tourism concierge operated under Soorin Maham Trade & Industry Development Corporation.',
    other: {
      dir: isRtl ? 'rtl' : 'ltr',
    },
  };
}

export default function LocalePage({ params }: { params: { locale: string } }) {
  const validLocales: Language[] = ['en', 'fa', 'ar', 'sw', 'hi', 'ur'];
  const locale: Language = validLocales.includes(params.locale as Language)
    ? (params.locale as Language)
    : 'en';

  return <Home initialLanguage={locale} />;
}
