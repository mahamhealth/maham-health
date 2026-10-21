import { Metadata } from 'next';
import Home from '@/components/Home';
import { Language, LOCALES, SITE_URL } from '@/data/translations';

interface PageProps {
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return LOCALES.map((loc) => ({ locale: loc.code }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (['en', 'fa', 'ar', 'sw', 'hi', 'ur'].includes(params.locale) ? params.locale : 'en') as Language;

  const titles: Record<Language, string> = {
    en: 'Maham Health | Elite Medical Tourism Concierge in Iran',
    fa: 'مهم سلامت | گردشگری پزشکی لوکس در ایران',
    ar: 'مهام هيلث | كونسيرج السياحة العلاجية الفاخرة في إيران',
    sw: 'Maham Health | Huduma za Utalii wa Matibabu Iran',
    hi: 'महम हेल्थ | ईरान में एलीट मेडिकल टूरिज्म',
    ur: 'مہم ہیلتھ | ایران میں ایلیٹ میڈیکل ٹ্যুরিজم'
  };

  const descriptions: Record<Language, string> = {
    en: 'World-class healthcare in Iran with 70%-90% savings. JCI accredited hospitals, fast-track Medical T-Visa, and VIP concierge under Soorin Maham.',
    fa: 'خدمات درمانی سطح جهانی در ایران با ۷۰ تا ۹۰ درصد صرفه‌جویی. بیمارستان‌های JCI، ویزای درمانی فوری و تشریفات VIP زیر نظر سورین مهام.',
    ar: 'رعاية صحية عالمية في إيران بتوفير 70-90%. مستشفيات معتمدة من JCI، تأشيرة علاجية سريعة، وخدمات VIP تحت إدارة سورين مهام.',
    sw: 'Huduma za afya za kiwango cha dunia nchini Iran kwa akiba ya 70%-90%. Hospitali za JCI na Visa ya haraka chini ya Soorin Maham.',
    hi: '70%-90% की बचत के साथ ईरान में विश्व स्तरीय स्वास्थ्य सेवा। JCI अस्पताल और फास्ट-ट्रैक मेडिकल टी-वीज़ा।',
    ur: 'ایران میں دنیا بھر کے معیار کی طبی سہولیات 70% تا 90% بچت کے ساتھ۔ JCI مصدقہ اسپتال اور فوری میڈیکل ٹی ویزا।'
  };

  const currentTitle = titles[locale] || titles['en'];
  const currentDesc = descriptions[locale] || descriptions['en'];

  return {
    title: currentTitle,
    description: currentDesc,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        'en': '/en/',
        'fa': '/fa/',
        'ar': '/ar/',
        'sw': '/sw/',
        'hi': '/hi/',
        'ur': '/ur/',
        'x-default': '/en/'
      }
    },
    openGraph: {
      title: currentTitle,
      description: currentDesc,
      url: `${SITE_URL}/${locale}/`,
      siteName: 'Maham Health',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: currentTitle,
      description: currentDesc
    }
  };
}

export default function LocalePage({ params }: PageProps) {
  const locale = (['en', 'fa', 'ar', 'sw', 'hi', 'ur'].includes(params.locale) ? params.locale : 'en') as Language;

  return (
    <>
      {/* Medical Organization JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Maham Health",
            "legalName": "Soorin Maham Trade & Industry Development Corporation",
            "url": SITE_URL,
            "logo": `${SITE_URL}/logo.png`,
            "telephone": "+989055240772",
            "email": "health@maham-group.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tehran",
              "addressCountry": "Iran"
            },
            "sameAs": [
              "https://maham-group.com"
            ]
          })
        }}
      />
      <Home initialLanguage={locale} />
    </>
  );
}
