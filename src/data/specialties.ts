import type { Language } from './translations';

export interface Specialty {
  id: string;
  name: Record<Language, string>;
  category: string;
  recoveryDays: string;
  iranPrice: number;
  indiaPrice: number;
  uaeTurkeyPrice: number;
  usUkPrice: number;
  savings: string;
}

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: 'rhinoplasty',
    name: {
      en: 'Rhinoplasty (Nose Surgery)',
      fa: 'جراحی بینی',
      ar: 'تجميل الأنف',
      sw: 'Rhinoplasty',
      hi: 'नाकoplasty',
      ur: 'جراحی بینی'
    },
    category: 'Cosmetic & Plastic Surgery',
    recoveryDays: '7–10 days',
    iranPrice: 1650,
    indiaPrice: 2800,
    uaeTurkeyPrice: 4500,
    usUkPrice: 8500,
    savings: '80%'
  },
  {
    id: 'dental-implants',
    name: {
      en: 'Dental Implants (Premium Titanium)',
      fa: 'ایمپلنت دندان',
      ar: 'زراعة الأسنان',
      sw: 'Dental Implants',
      hi: 'दंत इम्प्लांट',
      ur: 'دانتوں کے ایمپلانٹس'
    },
    category: 'Dental Care',
    recoveryDays: '3–5 days',
    iranPrice: 550,
    indiaPrice: 800,
    uaeTurkeyPrice: 1500,
    usUkPrice: 2800,
    savings: '80%'
  },
  {
    id: 'lasik',
    name: {
      en: 'LASIK / Femto-LASIK (Both Eyes)',
      fa: 'لیزیک / فمتولیزیک',
      ar: 'الليزك / الليزك الفمتو',
      sw: 'LASIK / Femto-LASIK',
      hi: 'लेसिक / फेमटो-लेसिक',
      ur: 'لیسک / فیمٹو لیسک'
    },
    category: 'Ophthalmology',
    recoveryDays: '2–3 days',
    iranPrice: 1100,
    indiaPrice: 1400,
    uaeTurkeyPrice: 2800,
    usUkPrice: 4200,
    savings: '74%'
  },
  {
    id: 'hair-transplant',
    name: {
      en: 'Hair Transplant (FUE / Micro-FUE)',
      fa: 'پیوند مو',
      ar: 'زراعة الشعر',
      sw: 'Hair Transplant',
      hi: 'हेयर ट्रांसप्लांट',
      ur: 'بالوں کی پیوند'
    },
    category: 'Restoration & Aesthetics',
    recoveryDays: '3–4 days',
    iranPrice: 1250,
    indiaPrice: 2000,
    uaeTurkeyPrice: 2600,
    usUkPrice: 6000,
    savings: '79%'
  },
  {
    id: 'ivf',
    name: {
      en: 'IVF (Full Treatment Cycle + ICSI)',
      fa: 'لقاح مصنوعی IVF',
      ar: 'التلقيح الصناعي',
      sw: 'IVF',
      hi: 'आईवीएफ',
      ur: 'آئی وی ایف'
    },
    category: 'Reproductive Medicine',
    recoveryDays: '10–14 days',
    iranPrice: 3200,
    indiaPrice: 4500,
    uaeTurkeyPrice: 7500,
    usUkPrice: 15000,
    savings: '78%'
  },
  {
    id: 'knee-replacement',
    name: {
      en: 'Total Knee Replacement',
      fa: 'تعویض کامل زانو',
      ar: 'استبدال الركبة الكامل',
      sw: 'Knee Replacement',
      hi: 'कुल Knie रिप्लेसमेंट',
      ur: 'مکمل زانو کی جگہ'
    },
    category: 'Orthopedics & Joint Care',
    recoveryDays: '10–14 days',
    iranPrice: 4200,
    indiaPrice: 7500,
    uaeTurkeyPrice: 11000,
    usUkPrice: 22000,
    savings: '81%'
  },
  {
    id: 'cardiology-stent',
    name: {
      en: 'Cardiology Stent / Angioplasty',
      fa: 'استنت قلبی',
      ar: 'دعامة القلب / التوسيع',
      sw: 'Cardiology Stent',
      hi: 'कार्डियोलॉजी स्टेंट',
      ur: 'کارڈیو اسٹنٹ'
    },
    category: 'Cardiovascular Care',
    recoveryDays: '4–7 days',
    iranPrice: 3800,
    indiaPrice: 6500,
    uaeTurkeyPrice: 9500,
    usUkPrice: 20000,
    savings: '81%'
  },
  {
    id: 'oncology-protocol',
    name: {
      en: 'Oncology Initial Treatment Protocol',
      fa: 'پروتکل درمانی سرطان',
      ar: 'بروتوكول العلاج ألأولي للسرطان',
      sw: 'Oncology Initial Treatment',
      hi: 'ऑन्कोलॉजी प्रारंभिक उपचार',
      ur: 'سرطان کا ابتدائی علاج پروٹوکول'
    },
    category: 'Oncology & Chemotherapy',
    recoveryDays: '7–14 days',
    iranPrice: 4500,
    indiaPrice: 8000,
    uaeTurkeyPrice: 12000,
    usUkPrice: 25000,
    savings: '82%'
  },
  {
    id: 'bariatric-sleeve',
    name: {
      en: 'Bariatric Sleeve Surgery',
      fa: 'جراحی اسلیو معده',
      ar: 'جراحة السليول المعدي',
      sw: 'Bariatric Sleeve Surgery',
      hi: 'बैरियाट्रिक स्लीव सर्जरी',
      ur: 'باریاٹریک سلوی سرجری'
    },
    category: 'Metabolic & Weight Loss',
    recoveryDays: '5–7 days',
    iranPrice: 2850,
    indiaPrice: 4800,
    uaeTurkeyPrice: 6500,
    usUkPrice: 12000,
    savings: '76%'
  }
];
