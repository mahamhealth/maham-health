import type { Metadata } from 'next';
import Home from '../../components/Home';

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fa' },
    { locale: 'ar' },
    { locale: 'sw' },
    { locale: 'hi' },
    { locale: 'ur' }
  ];
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale || 'en';

  return {
    title: `Maham Health | Medical Concierge (${locale})`,
    description: 'Medical travel and concierge services in Iran.'
  };
}

export default function LocalePage({ params }: { params: { locale: string } }) {
  return <Home initialLanguage={params.locale as any} />;
}
