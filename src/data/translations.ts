export type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

export interface Translations {
  packagesTitle: string;
  packagesSubtitle: string;
  pkgEssentialTitle: string;
  pkgEssentialSubtitle: string;
  pkgPremiumTitle: string;
  pkgPremiumSubtitle: string;
  pkgLuxuryTitle: string;
  pkgLuxurySubtitle: string;
  mostPopularBadge: string;
  selectPackage: string;
  [key: string]: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    packagesTitle: "Curated Concierge Packages",
    packagesSubtitle: "Choose the level of clinical coordination, comfort, and personal care suited for your journey.",
    pkgEssentialTitle: "Essential Care",
    pkgEssentialSubtitle: "Clinical Focus & Seamless Navigation",
    pkgPremiumTitle: "Premium Comfort",
    pkgPremiumSubtitle: "Full Coordination & Companion Comfort",
    pkgLuxuryTitle: "Royal VIP Concierge",
    pkgLuxurySubtitle: "5-Star Luxury, CIP Terminal & Private Care",
    mostPopularBadge: "Recommended • Most Popular",
    selectPackage: "Select Tier",
  },
  fa: {
    packagesTitle: "بسته‌های اقامتی و درمانی مهام",
    packagesSubtitle: "سطح هماهنگی بالینی، رفاه و همراهی متناسب با نیاز خود و همراهتان را انتخاب نمایید.",
    pkgEssentialTitle: "مراقبت پایه (اسنشال)",
    pkgEssentialSubtitle: "تمرکز بر درمان و پذیرش مستقیم بیمارستانی",
    pkgPremiumTitle: "رفاه ویژه (پریمیوم)",
    pkgPremiumSubtitle: "هماهنگی کامل، هتل ۴ ستاره و ترانسفر اختصاصی",
    pkgLuxuryTitle: "تشریفات رویال VIP",
    pkgLuxurySubtitle: "هتل ۵ ستاره، خدمات جایگاه تشریفات اختصاصی (CIP) و مراقب اختصاصی",
    mostPopularBadge: "پیشنهاد اصلی • محبوب‌ترین",
    selectPackage: "انتخاب بسته",
  },
  ar: {
    packagesTitle: "باقات الرعاية وخدمات الكونسيرج",
    packagesSubtitle: "اختر مستوى التنسيق الطبي والراحة المناسب لك ولمرافقك.",
    pkgEssentialTitle: "الرعاية الأساسية",
    pkgEssentialSubtitle: "التركيز على العلاج والتنسيق الطبي المباشر",
    pkgPremiumTitle: "الراحة المميزة (بريميوم)",
    pkgPremiumSubtitle: "تنسيق شامل، فندق 4 نجوم ومواصلات خاصة",
    pkgLuxuryTitle: "كونسيرج رويال VIP",
    pkgLuxurySubtitle: "أجنحة فندقية 5 نجوم، صالة CIP الخاصة ومرافق شخصي",
    mostPopularBadge: "الخيار الأفضل • الأكثر طلباً",
    selectPackage: "اختيار الباقة",
  },
  sw: {
    packagesTitle: "Vifurushi vya Huduma ya Matibabu",
    packagesSubtitle: "Chagua kiwango cha uratibu wa kliniki na faraja inayokufaa wewe na msindikizaji wako.",
    pkgEssentialTitle: "Huduma ya Msingi",
    pkgEssentialSubtitle: "Kuzingatia matibabu na uratibu wa hospitali",
    pkgPremiumTitle: "Faraja ya Ziada (Premium)",
    pkgPremiumSubtitle: "Uratibu kamili, hoteli ya nyota 4 na gari binafsi",
    pkgLuxuryTitle: "Royal VIP Concierge",
    pkgLuxurySubtitle: "Hoteli ya nyota 5, huduma za VIP uwanja wa ndege na mhudumu maalum",
    mostPopularBadge: "Inayopendekezwa Zaidi",
    selectPackage: "Chagua Kifurushi",
  },
  hi: {
    packagesTitle: "कंसिएज और चिकित्सा पैकेज",
    packagesSubtitle: "अपनी और अपने साथी की सुविधा के अनुसार सर्वोत्तम पैकेज चुनें।",
    pkgEssentialTitle: "एसेंशियल केयर",
    pkgEssentialSubtitle: "चिकित्सीय समन्वय और अस्पताल प्रवेश",
    pkgPremiumTitle: "प्रीमियम कम्फर्ट",
    pkgPremiumSubtitle: "संपूर्ण सहायता, 4-सितारा होटल और निजी वाहन",
    pkgLuxuryTitle: "रॉयल वीआईपी कंसिएज",
    pkgLuxurySubtitle: "5-सितारा विलासिता, हवाई अड्डे पर CIP और समर्पित टीम",
    mostPopularBadge: "सबसे लोकप्रिय • अनुशंसित",
    selectPackage: "पैकेज चुनें",
  },
  ur: {
    packagesTitle: "طبی اور رہائشی پیکجز",
    packagesSubtitle: "اپنے اور اپنے ہمراہ کے لیے موزوں ترین طبی اور رہائشی سہولیات کا انتخاب کریں۔",
    pkgEssentialTitle: "بنیادی دیکھ بھال (Essential)",
    pkgEssentialSubtitle: "علاج اور ہسپتال کے امور پر مکمل توجہ",
    pkgPremiumTitle: "پریمیم کمفرٹ (Premium)",
    pkgPremiumSubtitle: "مکمل کوآرڈینیشن، 4 ستارہ ہوٹل اور ذاتی ٹرانسپورٹ",
    pkgLuxuryTitle: "رائل وی آئی پی کونسیرج",
    pkgLuxurySubtitle: "5 ستارہ ہوٹل، ایئرپورٹ CIP لاؤنج اور ذاتی نگہداشت",
    mostPopularBadge: "سب سے زیادہ منتخب کردہ",
    selectPackage: "پیکج منتخب کریں",
  }
};
