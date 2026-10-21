// src/components/Home.tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Award,
  Globe2,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  User,
  Phone,
  Mail,
  Send,
  Plane,
  FileText,
  HeartHandshake,
  Stethoscope,
  ChevronRight,
  Calculator,
  MessageCircle,
  Building2,
  ArrowRight,
  Download,
  Check
} from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

interface Specialty {
  id: string;
  name: Record<Language, string>;
  category: string;
  savings: string;
  recoveryDays: number;
  hospitalStayDays: number;
  essentialPrice: number;
  premiumPrice: number;
  vipPrice: number;
  description: Record<Language, string>;
}

interface CurrencyInfo {
  code: string;
  symbol: string;
  rateToUSD: number;
}

const CURRENCIES: Record<string, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', rateToUSD: 1 },
  EUR: { code: 'EUR', symbol: '€', rateToUSD: 0.92 },
  AED: { code: 'AED', symbol: 'AED ', rateToUSD: 3.67 },
  GBP: { code: 'GBP', symbol: '£', rateToUSD: 0.79 },
  OMR: { code: 'OMR', symbol: 'OMR ', rateToUSD: 0.38 },
  INR: { code: 'INR', symbol: '₹', rateToUSD: 83.2 }
};

const SPECIALTIES: Specialty[] = [
  {
    id: 'rhinoplasty',
    name: {
      en: 'Rhinoplasty & Facial Plastic Surgery',
      fa: 'جراحی زیبایی بینی و صورت',
      ar: 'جراحة تجميل الانف والوجه',
      sw: 'Upasuaji wa Pua na Uso',
      hi: 'राइनोपलास्टी और चेहरे की सर्जरी',
      ur: 'رائنوپلاسٹی اور چہرے کی پلاسٹک سرجری'
    },
    category: 'Cosmetic',
    savings: '80%',
    recoveryDays: 7,
    hospitalStayDays: 1,
    essentialPrice: 2200,
    premiumPrice: 3400,
    vipPrice: 4800,
    description: {
      en: 'World-renowned ENT and plastic surgeons in Tehran and Kish Island delivering precision aesthetic results.',
      fa: 'جراحان برجسته گوش و حلق و بینی و پلاستیک در تهران و جزیره کیش با بالاترین دقت زیبایی.',
      ar: 'أبرز جراحي التجميل في طهران وجزيرة كيش لنتائج جمالية دقيقة.',
      sw: 'Madaktaribingwa wa upasuaji Tehran na Kish kwa matokeo bora ya urembo.',
      hi: 'तेहरान और किर्श द्वीप में विश्व प्रसिद्ध प्लास्टिक सर्जन।',
      ur: 'تہران اور کیش جزیرے میں دنیا کے مایہ ناز پلاسٹک سرجنز۔'
    }
  },
  {
    id: 'dental',
    name: {
      en: 'Full Mouth Dental Implants & Smile Design',
      fa: 'ایمپلنت کامل دندان و طراحی لبخند',
      ar: 'زراعة الأسنان الكاملة وتصميم الابتسامة',
      sw: 'VIP Ya Kupandikiza Meneno na Tabasamu',
      hi: 'फुल माउथ डेंटल इम्प्लांट और स्माइल डिजाइन',
      ur: 'دندانوں کے امپلانٹس اور اسمائل ڈیزائن'
    },
    category: 'Dental',
    savings: '85%',
    recoveryDays: 3,
    hospitalStayDays: 1,
    essentialPrice: 3500,
    premiumPrice: 5200,
    vipPrice: 7500,
    description: {
      en: 'Swiss & German titanium implants with permanent lifetime warranty at state-of-the-art dental clinics.',
      fa: 'ایمپلنت‌های تیتانیومی سوئیسی و آلمانی با گارانتی مادام‌العمر در کلینیک‌های فوق تخصصی.',
      ar: 'غرسات التيتانيوم السويسرية والألمانية مع ضمان مدى الحياة.',
      sw: 'Vifaa vya meno vya Uswisi na Ujerumani vyenye udhamini wa maisha.',
      hi: 'स्विट्जरलैंड और जर्मन टाइटेनियम इम्प्लांट्स आजीवन वारंटी के साथ।',
      ur: 'سوئس اور جرمن ٹائٹینیم امپلانٹس لائف ٹائم وارنٹی کے ساتھ۔'
    }
  },
  {
    id: 'ivf',
    name: {
      en: 'Advanced IVF & Fertility Treatments',
      fa: 'درمان‌های پیشرفته ناباروری و IVF',
      ar: 'علاجات التطفال وأطفال الأنابيب المتقدمة',
      sw: 'Matibabu ya Uzazi na IVF ya Juu',
      hi: 'उन्नत आईवीएफ और फर्टिलिटी उपचार',
      ur: 'آئی وی ایف اور فرٹیلیٹی علاج'
    },
    category: 'Fertility',
    savings: '75%',
    recoveryDays: 5,
    hospitalStayDays: 1,
    essentialPrice: 3800,
    premiumPrice: 5500,
    vipPrice: 8200,
    description: {
      en: 'State-of-the-art embryology labs with PGD/PGS genetic screening and high success rates.',
      fa: 'آزمایشگاه‌های فوق پیشرفته جنین‌شناسی با غربالگری ژنتیکی PGD/PGS و نرخ موفقیت بالا.',
      ar: 'مختبرات الأجنة الحديثة مع الفحص الجيني ونسب نجاح عالية.',
      sw: 'Maabara ya kisasa ya uzazi yenye uchunguzi wa kijeni na mafanikio ya juu.',
      hi: 'उच्च सफलता दर के साथ उन्नत भ्रूणविज्ञान प्रयोगशालाएं।',
      ur: 'جدید ترین ایمبریولوجی لیبارٹریز اور ہائی س outras کامیابی کی شرح۔'
    }
  },
  {
    id: 'orthopedic',
    name: {
      en: 'Orthopedic Joint Replacement (Knee/Hip)',
      fa: 'تعویض مفصل زانو و لگن (ارتوپدی)',
      ar: 'استبدال المفاصل (الركبة / الورك)',
      sw: 'Upasuaji wa Kubadilisha Viungo vya Mifupa',
      hi: 'ऑर्थोपेडिक ज्वाइंट रिप्लेसमेंट (घुटने/कूल्हे)',
      ur: 'جوائنٹ ریپلیسمنٹ (گھٹنا اور کولھا)'
    },
    category: 'Orthopedic',
    savings: '80%',
    recoveryDays: 14,
    hospitalStayDays: 4,
    essentialPrice: 4200,
    premiumPrice: 6500,
    vipPrice: 9500,
    description: {
      en: 'US/EU FDA-approved implants performed by leading orthopedic surgeons with robotic navigation.',
      fa: 'ایمپلنت‌های دارای تأییدیه FDA آمریکا و اروپا توسط جراحان ارتوپدی برجسته با ناوبری رباتیک.',
      ar: 'غرسات معتمدة من إدارة الغذاء والدواء الأمريكية بأيدي نخبة جراحي العظام.',
      sw: 'Vifaa vilivyoidhinishwa na FDA vikifanywa na madaktari bingwa.',
      hi: 'अग्रणी आर्थोपेडिक सर्जनों द्वारा एफडीए-अनुమోदित इम्प्लांट्स।',
      ur: 'ایف ڈی اے منظور شدہ امپلانٹس اور ماہر آर्थوپेडिक سرجنز۔'
    }
  },
  {
    id: 'cardiac',
    name: {
      en: 'Cardiovascular Surgery & Angiography',
      fa: 'جراحی قلب و عروق و آنژیوگرافی',
      ar: 'جراحة القلب والأوعية الدموية وتصوير الأوعية',
      sw: 'Upasuaji wa Moyo na Mishipa',
      hi: 'हृदय शल्य चिकित्सा और एंजियोग्राफी',
      ur: 'کارڈیو ویسکولر سرجری اور اینجیوگرافی'
    },
    category: 'Cardiac',
    savings: '85%',
    recoveryDays: 10,
    hospitalStayDays: 5,
    essentialPrice: 6000,
    premiumPrice: 8800,
    vipPrice: 12500,
    description: {
      en: 'JCI-accredited cardiac hospitals with specialized intensive care units and renowned heart surgeons.',
      fa: 'بیمارستان‌های قلب دارای اعتبارنامه JCI با بخش‌های مراقبت ویژه تخصصی و جراحان قلب نام‌آور.',
      ar: 'مستشفيات قلب معتمدة دولياً مع وحدات عناية مركزة متخصصة.',
      sw: 'Hospitali za moyo zilizoidhinishwa kimataifa zenye wataalamu bingwa.',
      hi: 'जेसीआई-मान्यता प्राप्त हृदय अस्पताल और प्रसिद्ध हृदय सर्जन।',
      ur: 'جے سی آئی سے منظور شدہ کارڈیالوجی ہسپتال اور نامور سرجنز۔'
    }
  },
  {
    id: 'hair',
    name: {
      en: 'Advanced Hair Transplant (FUE / DHI)',
      fa: 'کاشت موی پیشرفته (FUE / DHI)',
      ar: 'زراعة الشعر المتقدمة (FUE / DHI)',
      sw: 'Upandikizaji wa Nywele wa Hali ya Juu',
      hi: 'उन्नत बाल प्रत्यारोपण (FUE / DHI)',
      ur: 'جدید ترین ہیئر ٹرانسپلانٹ (FUE / DHI)'
    },
    category: 'Cosmetic',
    savings: '80%',
    recoveryDays: 5,
    hospitalStayDays: 1,
    essentialPrice: 1400,
    premiumPrice: 2200,
    vipPrice: 3200,
    description: {
      en: 'High-density micro-grafting with natural hairline design and guaranteed graft survival.',
      fa: 'میکروگرافت با تراکم بالا، طراحی خط رویش طبیعی مو و تضمین بقای گرافت‌ها.',
      ar: 'زراعة الشعر بأعلى كثافة وتصميم خط شعر طبيعي ومضمون.',
      sw: 'Upandikizaji wa nywele wenye msongamano mkubwa na matokeo ya asili.',
      hi: 'प्राकृतिक हेयरलाइन डिज़ाइन के साथ उच्च-घनत्व माइक्रो-ग्राफ्टिंग।',
      ur: 'ہائی ڈینسٹی مائیکرو گرافتنگ اور قدرتی ہیئر لائن ڈیزائن۔'
    }
  },
  {
    id: 'lasik',
    name: {
      en: 'Laser Vision Correction (LASIK / PRK / SMILE)',
      fa: 'اصلاح بینایی با لیزر (LASIK / PRK / SMILE)',
      ar: 'تصحيح الإبصار بالليزر (LASIK / PRK / SMILE)',
      sw: 'Upasuaji wa Laser ya Macho',
      hi: 'लेजर विजन करेक्शन (LASIK / PRK / SMILE)',
      ur: 'لیزر وژن کریکشن (LASIK / PRK / SMILE)'
    },
    category: 'Ophthalmology',
    savings: '80%',
    recoveryDays: 2,
    hospitalStayDays: 1,
    essentialPrice: 1100,
    premiumPrice: 1800,
    vipPrice: 2600,
    description: {
      en: 'Latest German Schwind Amaris and Zeiss VisuMax femtosecond laser technology.',
      fa: 'جدیدترین فناوری لیزر فمتوسکند شویند آماریس آلمان و زایس ویسوماکس.',
      ar: 'أحدث تقنيات الليزر الفمتوسكوند الألمانية لتصحيح النظر.',
      sw: 'Teknolojia ya kisasa ya laser ya Ujerumani kwa macho.',
      hi: 'नवीनतम जर्मन श्विंद और ज़ीस फेमटोसेकंड लेजर तकनीक।',
      ur: 'جدید ترین جرمن فیمٹو سیکنڈ لیزر ٹیکنالوجی۔'
    }
  },
  {
    id: 'bariatric',
    name: {
      en: 'Bariatric & Weight Loss Surgery (Sleeve/Bypass)',
      fa: 'جراحی لاغری و اسلیو معده',
      ar: 'جراحة السمنة وتكميم المعدة',
      sw: 'Upasuaji wa Kupunguza Uzito',
      hi: 'बेरिएट्रिक और वजन घटाने की सर्जरी',
      ur: 'بیرییاٹرک اور وزن کم کرنے کی سرجری'
    },
    category: 'General Surgery',
    savings: '75%',
    recoveryDays: 7,
    hospitalStayDays: 2,
    essentialPrice: 3200,
    premiumPrice: 4600,
    vipPrice: 6500,
    description: {
      en: 'Laparoscopic sleeve gastrectomy and gastric bypass by expert bariatric surgeons.',
      fa: 'اسلیو معده و بای‌پس لاپاراسکوپیک توسط جراحان متخصص جراحی چاقی و متابولیک.',
      ar: 'عمليات تكميم المعدة وتحويل المسار بالمنظار على يد خبراء.',
      sw: 'Upasuaji wa laparoskopia wa kupunguza tumbo na wataalamu bingwa.',
      hi: 'विशेषज्ञों द्वारा लेप्रोस्कोपिक स्लीव गैस्ट्रेक्टोमी।',
      ur: 'ماہر سرجنز کے ذریعہ لیپرোস্কوپک سلیو گیسٹریکٹومی۔'
    }
  },
  {
    id: 'oncology',
    name: {
      en: 'Oncology Initial Treatment & Advanced Diagnostics',
      fa: 'تشخیص پیشرفته و درمان اولیه انکولوژی (سرطان)',
      ar: 'التشخيص المتقدم والعلاج الأولي للأورام',
      sw: 'Matibabu ya Saratani na Uchunguzi wa Juu',
      hi: 'ऑन्कोलॉजी प्रारंभिक उपचार और उन्नत निदान',
      ur: 'انکولوجی ابتدائی علاج اور جدید تشخیص'
    },
    category: 'Oncology',
    savings: '70%',
    recoveryDays: 10,
    hospitalStayDays: 3,
    essentialPrice: 5000,
    premiumPrice: 7900,
    vipPrice: 11000,
    description: {
      en: 'Comprehensive cancer care centers featuring PET-CT, targeted immunotherapy, and advanced radiation therapy.',
      fa: 'مراکز جامع درمان سرطان مجهز به پت‌اسکن، ایمنی‌درمانی هدفمند و پرتودرمانی پیشرفته.',
      ar: 'مراكز شاملة لرعاية الأسرطان مع أحدث تقنيات التصوير والعلاج المناعي.',
      sw: 'Vituo vya kina vya saratani vilivyo na teknolojia ya kisasa.',
      hi: 'पेट-स्कैन और उन्नत विकिरण चिकित्सा की सुविधा वाले कैंसर केंद्र।',
      ur: 'جامع کینسر کیئر سینٹرز جو جدید ترین ٹیکنالوجی سے لیس ہیں۔'
    }
  }
];

export default function HomePage({ initialLanguage = 'en' }: { initialLanguage?: Language }) {
  const [lang, setLang] = useState<Language>(initialLanguage);

  // Sync state if prop changes during client-side navigation
  useEffect(() => {
    if (initialLanguage) {
      setLang(initialLanguage);
    }
  }, [initialLanguage]);

  const [calcSpecialtyId, setCalcSpecialtyId] = useState<string>('rhinoplasty');
  const [calcTier, setCalcTier] = useState<'essential' | 'premium' | 'vip'>('premium');
  const [currencyCode, setCurrencyCode] = useState<string>('USD');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Wizard state
  const [wizardSpecialty, setWizardSpecialty] = useState<string>('Rhinoplasty');
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [timeframe, setTimeframe] = useState<string>('Within 1 month');
  const [gender, setGender] = useState<'Male' | 'Female'>('Female');
  const [age, setAge] = useState<string>('30');
  const [medicalNotes, setMedicalNotes] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<
    'Essential Care' | 'Premium Comfort' | 'VIP Elite Concierge'
  >('Premium Comfort');
  const [patientName, setPatientName] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientCountry, setPatientCountry] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const currentSpecialty =
    SPECIALTIES.find((s) => s.id === calcSpecialtyId) || SPECIALTIES[0];
  const currency = CURRENCIES[currencyCode] || CURRENCIES['USD'];

  const getBasePrice = () => {
    if (calcTier === 'essential') return currentSpecialty.essentialPrice;
    if (calcTier === 'vip') return currentSpecialty.vipPrice;
    return currentSpecialty.premiumPrice;
  };

  const convertedPrice = Math.round(getBasePrice() * currency.rateToUSD);

  const translations = {
    en: {
      brandSub: 'Soorin Maham Trade & Industry Development Corporation',
      tagline: 'Premier Medical-Tourism Concierge in Iran',
      navHome: 'Home',
      navSpecialties: 'Specialties',
      navCalculator: 'Cost Calculator',
      navJourney: 'Patient Journey',
      navContact: 'Contact Us',
      heroBadge: 'Official Medical Tourism Provider • Soorin Maham',
      heroTitle1: 'World-Class Healthcare',
      heroTitle2: 'Meets Luxury Concierge in Iran',
      heroSubtitle:
        'Experience JCI-accredited hospitals, world-renowned surgeons, 70-90% treatment savings, and VIP 5-star hospitality managed by Soorin Maham Trade & Industry Development Corporation.',
      ctaBook: 'Book Free Consultation',
      ctaCalculator: 'Calculate Cost',
      visaBanner: 'Medical T-Visa Fast-Track Guarantee & Official Ministry of Health Accreditation',
      statsSpecialists: '150+ Board-Certified Surgeons',
      statsSavings: '70%–90% Average Cost Savings',
      statsHospitals: 'JCI Accredited Partner Hospitals',
      statsConcierge: '24/7 VIP Concierge & Security',
      calculatorTitle: 'Interactive Treatment Cost Estimator',
      calculatorSubtitle:
        'Select your required specialty and care package to view transparent cost estimates compared with US, UK, and UAE benchmarks.',
      selectSpecialty: 'Select Medical Specialty',
      selectTier: 'Select Concierge Tier',
      tierEssential: 'Essential Care',
      tierEssentialDesc: 'Hospitality, airport transfer, nursing support, basic translation.',
      tierPremium: 'Premium Comfort',
      tierPremiumDesc: '4-star hotel, dedicated private nurse, full translation, city tours.',
      tierVip: 'VIP Elite Concierge',
      tierVipDesc: '5-star luxury suite, VIP security, personal manager, 24/7 private escort.',
      estimatedCost: 'Estimated Package Total',
      usBenchmark: 'US / UAE Benchmark: ',
      savingsHighlight: 'You Save:',
      hospitalStay: 'Hospital Stay:',
      recoveryPeriod: 'Estimated Recovery:',
      days: 'Days',
      getDetailedQuote: 'Download Branded Quote Summary',
      journeyTitle: 'Your 5-Step Seamless Medical Journey',
      journeySubtitle: 'Managed end-to-end by Soorin Maham healthcare specialists.',
      step1Title: '1. Free Virtual Consultation',
      step1Desc: 'Upload your medical reports and photos. Our medical board reviews your case within 24 hours.',
      step2Title: '2. Treatment Plan & Visa Support',
      step2Desc: 'Receive a personalized treatment schedule and official Medical T-Visa invitation letter.',
      step3Title: '3. Arrival & VIP Greeting',
      step3Desc: 'VIP airport pickup at Tehran, Shiraz, or Kish by our dedicated concierge executive.',
      step4Title: '4. Treatment & Recovery',
      step4Desc: 'Procedure at a JCI-accredited hospital followed by luxury recovery accommodation.',
      step5Title: '5. Return & Aftercare',
      step5Desc: 'Post-discharge checkups, medical summary release, and safe return home with ongoing support.',
      wizardTitle: 'Start Your Treatment Inquiry',
      wizardSubtitle: 'Fill out this brief form to receive an official consultation and quotation within 24 hours.',
      stepLabel: 'Step',
      next: 'Next Step',
      back: 'Back',
      submit: 'Submit Inquiry',
      successTitle: 'Inquiry Received Successfully!',
      successDesc:
        'Thank you. Your case has been securely transmitted to Maham Health Medical Board under Soorin Maham. A senior concierge manager will contact you via WhatsApp within 2 hours.',
      footerTagline:
        'Operating under Soorin Maham Trade & Industry Development Corporation. Registered international trade and medical tourism enterprise.',
      officesTitle: 'Global Offices & Presence',
      officeIran: 'Tehran, Shiraz, Kish & Qeshm (HQ)',
      officeDubai: 'Dubai, UAE',
      officeTanzania: 'Dar es Salaam, Tanzania',
      officeIndia: 'Lucknow & Mumbai, India',
      contactEmail: 'health@maham-group.com',
      contactPhone: '+98 905 524 0772'
    },
    fa: {
      brandSub: 'شرکت توسعه صنعت و تجارت سورین مهام',
      tagline: 'پیشروترین تشریفات گردشگری سلامت در ایران',
      navHome: 'خانه',
      navSpecialties: 'تخصص‌ها',
      navCalculator: 'محاسبه‌گر هزینه',
      navJourney: 'سفر درمانی شما',
      navContact: 'تماس با ما',
      heroBadge: 'ارائه‌دهنده رسمی گردشگری سلامت • سورین مهام',
      heroTitle1: 'خدمات درمانی در سطح جهانی',
      heroTitle2: 'همراه با تشریفات لوکس در ایران',
      heroSubtitle:
        'بیمارستان‌های دارای اعتبارنامه JCI، جراحان برجسته بین‌المللی، ۷۰ تا ۹۰ درصد صرفه‌جویی در هزینه و پذیرایی VIP زیر نظر شرکت توسعه صنعت و تجارت سورین مهام.',
      ctaBook: 'رزرو مشاوره رایگان',
      ctaCalculator: 'محاسبه هزینه',
      visaBanner: 'تضمین صدور سریع ویزای درمانی (T-Visa) و تأییدیه رسمی وزارت بهداشت',
      statsSpecialists: 'بیش از ۱۵۰ جراح فوق تخصص',
      statsSavings: '۷۰٪ تا ۹۰٪ صرفه‌جویی در هزینه',
      statsHospitals: 'بیمارستان‌های همکار دارای گواهینامه JCI',
      statsConcierge: 'تشریفات VIP و پشتیبانی ۲۴ ساعته',
      calculatorTitle: 'محاسبه‌گر تعاملی هزینه‌های درمان',
      calculatorSubtitle:
        'تخصص پزشکی و پسته خدمات مورد نظر خود را انتخاب کنید تا برآورد شفاف هزینه‌ها را در مقایسه با استانداردهای آمریکا و امارات مشاهده کنید.',
      selectSpecialty: 'انتخاب تخصص پزشکی',
      selectTier: 'انتخاب سطح تشریفات',
      tierEssential: 'مراقبت ضروری',
      tierEssentialDesc: 'ترانسفر فرودگاهی، پرستار همراه، ترجمه پایه مدارک پزشکی.',
      tierPremium: 'آسایش پرمیوم',
      tierPremiumDesc: 'هتل ۴ ستاره، پرستار اختصاصی، ترجمه کامل و گشت شهری.',
      tierVip: 'تشریفات VIP الیت',
      tierVipDesc: 'سوئیت لوکس ۵ ستاره، تیم حفاظت VIP، مدیر شخصی و همراهی ۲۴ ساعته.',
      estimatedCost: 'مجموع برآوردی پکیج',
      usBenchmark: 'شاخص قیمت آمریکا / امارات: ',
      savingsHighlight: 'میزان صرفه‌جویی شما:',
      hospitalStay: 'مدت بستری در بیمارستان:',
      recoveryPeriod: 'دوره نقاهت تخمینی:',
      days: 'روز',
      getDetailedQuote: 'دانلود خلاصه پیش‌فاکتور رسمی',
      journeyTitle: 'سفر درمانی ۵ مرحله‌ای شما',
      journeySubtitle: 'مدیریت کامل از ابتدا تا انتها توسط متخصصان سلامت سورین مهام.',
      step1Title: '۱. مشاوره آنلاین رایگان',
      step1Desc: 'ارسال مدارک پزشکی و عکس‌ها. کمیسیون پزشکی ما پرونده شما را ظرف ۲۴ ساعت بررسی می‌کند.',
      step2Title: '۲. برنامه درمان و اخذ ویزا',
      step2Desc: 'دریافت برنامه درمانی شخصی‌سازی‌شده و دعوت‌نامه رسمی ویزای درمانی (T-Visa).',
      step3Title: '۳. ورود و استقبال VIP',
      step3Desc: 'استقبال تشریفاتی در فرودگاه‌های تهران، شیراز یا کیش توسط مدیر اختصاصی.',
      step4Title: '۴. درمان و دوران نقاهت',
      step4Desc: 'انجام عمل در بیمارستان JCI همراه با اقامت در هتل و استراحتگاه لوکس.',
      step5Title: '۵. بازگشت و پیگیری پس از درمان',
      step5Desc: 'معاینات نهایی، تحویل پرونده پزشکی و بازگشت ایمن به کشور مبدأ با پشتیبانی مداوم.',
      wizardTitle: 'ثبت درخواست مشاوره و درمان',
      wizardSubtitle: 'این فرم کوتاه را تکمیل کنید تا ظرف ۲ ساعت مشاوره و پیش‌فاکتور رسمی دریافت کنید.',
      stepLabel: 'مرحله',
      next: 'مرحله بعد',
      back: 'بازگشت',
      submit: 'ارسال درخواست',
      successTitle: 'درخواست شما با موفقیت ثبت شد!',
      successDesc:
        'با تشکر. پرونده شما به صورت امن به بخش پزشکی سورین مهام ارسال شد. مدیر ارشد تشریفات ظرف ۲ ساعت از طریق واتس‌اپ با شما تماس خواهد گرفت.',
      footerTagline:
        'فعالیت تحت نظارت شرکت توسعه صنعت و تجارت سورین مهام. بنگاه ثبت‌شده تجارت بین‌الملل و گردشگری سلامت.',
      officesTitle: 'دفاتر و حضور بین‌المللی',
      officeIran: 'تهران، شیراز، کیش و قشم (دفتر مرکزی)',
      officeDubai: 'دبی، امارات متحده عربی',
      officeTanzania: 'دارالسلام، تانزانیا',
      officeIndia: 'لخنو و بمبئی، هند',
      contactEmail: 'health@maham-group.com',
      contactPhone: '+98 905 524 0772'
    },
    ar: {
      brandSub: 'شركة سورين مهام للتجارة وتطوير الصناعة',
      tagline: 'الرائدة في السياحة العلاجية الفاخرة في إيران',
      navHome: 'الرئيسية',
      navSpecialties: 'التخصصات',
      navCalculator: 'حاسبة التكاليف',
      navJourney: 'رحلتك العلاجية',
      navContact: 'اتصل بنا',
      heroBadge: 'مزود معتمد للسياحة العلاجية • سورين مهام',
      heroTitle1: 'رعاية صحية عالمية المستوى',
      heroTitle2: 'مع خدمات كونسيرج فاخرة في إيران',
      heroSubtitle:
        'مستشفيات معتمدة دولياً، نخبة الجراحين، توفير بنسبة 70-90% من تكاليف العلاج، وضيافة VIP تدار بواسطة شركة سورين مهام.',
      ctaBook: 'حجز استشارة مجانية',
      ctaCalculator: 'حساب التكلفة',
      visaBanner: 'ضمان تأشيرة العلاج السريعة والاعتماد الرسمي من وزارة الصحة',
      statsSpecialists: 'أكثر من 150 جراحاً معتمداً',
      statsSavings: '70% إلى 90% توفير في التكاليف',
      statsHospitals: 'مستشفيات شركاء بمعايير JCI الدولية',
      statsConcierge: 'خدمات كونسيرج VIP ومرافقة 24/7',
      calculatorTitle: 'حاسبة تكاليف العلاج التفاعلية',
      calculatorSubtitle: 'اختر تخصصك الطبي وباقة الرعاية لعرض التكاليف المقارنة مع الولايات المتحدة ودبي.',
      selectSpecialty: 'اختر التخصص الطبي',
      selectTier: 'اختر مستوى الباقة',
      tierEssential: 'الرعاية الأساسية',
      tierEssentialDesc: 'استقبال المطار، ممرضة مرافق، ترجمة أساسية.',
      tierPremium: 'الراحة المتميزة',
      tierPremiumDesc: 'فندق 4 نجوم، ممرضة خاصة، ترجمة شاملة، جولات سياحية.',
      tierVip: 'كونسيرج النخبة VIP',
      tierVipDesc: 'جناح فاخر 5 نجوم، أمن خاص، مدير شخصي، مرافقة خاصة 24/7.',
      estimatedCost: 'التكلفة الإجمالية المقدرة',
      usBenchmark: 'معيار أمريكا / الإمارات: ',
      savingsHighlight: 'وفوراتك:',
      hospitalStay: 'الإقامة بالمستشفى:',
      recoveryPeriod: 'فترة التعافي المقدرة:',
      days: 'أيام',
      getDetailedQuote: 'تحميل ملخص عرض الأسعار',
      journeyTitle: 'رحلتك العلاجية السلسة في 5 خطوات',
      journeySubtitle: 'تدار بالكامل بواسطة أخصائي الرعاية الصحية في سورين مهام.',
      step1Title: '1. استشارة افتراضية مجانية',
      step1Desc: 'ارفع تقاريرك الطبية وصورك. تراجع لجنتنا الطبية حالتك خلال 24 ساعة.',
      step2Title: '2. خطة العلاج وتأشيرة السفر',
      step2Desc: 'احصل على جدول زمني مخصص وخطاب دعوة رسمي لتأشيرة العلاج.',
      step3Title: '3. الوصول والاستقبال الفاخر',
      step3Desc: 'استقبال VIP في مطار طهران أو شيراز أو كيش بواسطة مسؤول التشریفات.',
      step4Title: '4. العلاج وفترة النقاهة',
      step4Desc: 'إجراء العملية في مستشفى معتمد مع إقامة فاخرة للتعافي.',
      step5Title: '5. العودة والمتابعة',
      step5Desc: 'فحوصات ما بعد العلاج وعودة آمنة للوطن مع دعم مستمر.',
      wizardTitle: 'ابدأ استشارتك العلاجية',
      wizardSubtitle: 'املأ هذا النموذج القصير لتلقي استشارة وعرض أسعار رسمي خلال ساعتين.',
      stepLabel: 'الخطوة',
      next: 'الخطوة التالية',
      back: 'السابق',
      submit: 'إرسال الطلب',
      successTitle: 'تم استلام طلبك بنجاح!',
      successDesc: 'شكراً لك. تم إرسال ملفك بشكل آمن إلى فريق سورين مهام الطبي وسنتواصل معك خلال ساعتين.',
      footerTagline: 'تعمل تحت إشراف شركة سورين مهام للتجارة وتطوير الصناعة. مؤسسة تجارية وسياحية مسجلة.',
      officesTitle: 'المكاتب الدولية',
      officeIran: 'طهران، شيراز، كيش وقشم (المقر الرئيسي)',
      officeDubai: 'دبي، الإمارات العربية المتحدة',
      officeTanzania: 'دار السلام، تنزانيا',
      officeIndia: 'لكناو ومومباي، الهند',
      contactEmail: 'health@maham-group.com',
      contactPhone: '+98 905 524 0772'
    },
    sw: {
      brandSub: 'Soorin Maham Trade & Industry Development Corporation',
      tagline: 'Huduma za Ukarimu na Utalii wa Matibabu Iran',
      navHome: 'Nyumbani',
      navSpecialties: 'Huduma',
      navCalculator: 'Kisio cha Gharama',
      navJourney: 'Safari Yako',
      navContact: 'Wasiliana Nasi',
      heroBadge: 'Mtoa Huduma Rasmi • Soorin Maham',
      heroTitle1: 'Huduma Bora za Afya Duniani',
      heroTitle2: 'Zikiwa na Ukarimu wa Kifahari Iran',
      heroSubtitle:
        'Hospitali zilizoidhinishwa kimataifa, madaktari bingwa, kuokoa 70-90% ya gharama, na huduma za VIP chini ya Soorin Maham.',
      ctaBook: 'Weka Miadi Bure',
      ctaCalculator: 'Hesabu Gharama',
      visaBanner: 'Dhamana ya Haraka ya Visa ya Matibabu na Ithibati ya Wizara ya Afya',
      statsSpecialists: 'Madaktari Bingwa 150+',
      statsSavings: 'Akiba ya 70% hadi 90%',
      statsHospitals: 'Hospitali Zilizoidhinishwa na JCI',
      statsConcierge: 'Ukarimu wa VIP masaa 24/7',
      calculatorTitle: 'Kisio cha Gharama za Matibabu',
      calculatorSubtitle: 'Chagua huduma yako kuona makisio ukilinganisha na Marekani na UAE.',
      selectSpecialty: 'Chagua Utaalamu',
      selectTier: 'Chagua Kiwango cha Huduma',
      tierEssential: 'Huduma Muhimu',
      tierEssentialDesc: 'Usafiri wa uwanja wa ndege, muuguzi, tafsiri ya msingi.',
      tierPremium: 'Faraja ya Premium',
      tierPremiumDesc: 'Hoteli ya nyota 4, muuguzi binafsi, tafsiri kamili, ziara za jiji.',
      tierVip: 'VIP Elite Concierge',
      tierVipDesc: 'Chumba cha kifahari cha nyota 5, ulinzi binafsi, msimamizi binafsi.',
      estimatedCost: 'Jumla ya Gharama Inayokadiriwa',
      usBenchmark: 'Kiwango cha Marekani / UAE: ',
      savingsHighlight: 'Unaokoa:',
      hospitalStay: 'Kukaa Hospitali:',
      recoveryPeriod: 'Kipindi cha Kupona:',
      days: 'Siku',
      getDetailedQuote: 'Pakua Muhtasari wa Nukuu',
      journeyTitle: 'Safari Yako ya Hatua 5',
      journeySubtitle: 'Inasimamiwa kikamilifu na wataalamu wa Soorin Maham.',
      step1Title: '1. Mashauriano ya Mtandaoni Bure',
      step1Desc: 'Pakia ripoti zako za matibabu. Bodi yetu inakagua kesi yako ndani ya masaa 24.',
      step2Title: '2. Mpango wa Matibabu & Visa',
      step2Desc: 'Pata ratiba ya matibabu na barua rasmi ya mwaliko wa visa.',
      step3Title: '3. Kuwasili & Mapokezi ya VIP',
      step3Desc: 'Mapokezi ya VIP katika viwanja vya ndege vya Iran na mtendaji wetu.',
      step4Title: '4. Matibabu na Uponyaji',
      step4Desc: 'Utaratibu katika hospitali ya JCI ukifuatiwa na malazi ya kifahari.',
      step5Title: '5. Kurudi & Huduma za Baada',
      step5Desc: 'Uchunguzi wa baada ya matibabu na kurudi salama nyumbani.',
      wizardTitle: 'Anzisha Uchunguzi Wako',
      wizardSubtitle: 'Jaza fomu hii fupi ili kupata nukuu rasmi ndani ya masaa 2.',
      stepLabel: 'Hatua',
      next: 'Hatua Inayofuata',
      back: 'Rudi',
      submit: 'Wasilisha Ombi',
      successTitle: 'Ombi Limepokelewa!',
      successDesc: 'Asante. Kesi yako imetumತ್ಮва kwa Soorin Maham Medical Board. Meneja wetu atakupigia simu.',
      footerTagline: 'Inafanya kazi chini ya Soorin Maham Trade & Industry Development Corporation.',
      officesTitle: 'Ofisi za Kimataifa',
      officeIran: 'Tehran, Shiraz, Kish na Qeshm (Makao Makuu)',
      officeDubai: 'Dubai, UAE',
      officeTanzania: 'Dar es Salaam, Tanzania',
      officeIndia: 'Lucknow na Mumbai, India',
      contactEmail: 'health@maham-group.com',
      contactPhone: '+98 905 524 0772'
    },
    hi: {
      brandSub: 'सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन',
      tagline: 'ईरान में प्रमुख चिकित्सा-पर्यटन कंसीयज',
      navHome: 'होम',
      navSpecialties: 'विशेषताएं',
      navCalculator: 'लागत कैलकुलेटर',
      navJourney: 'रोगी यात्रा',
      navContact: 'संपर्क करें',
      heroBadge: 'आधिकारिक चिकित्सा पर्यटन प्रदाता • सूरिन महाम',
      heroTitle1: 'विश्व स्तरीय स्वास्थ्य सेवा',
      heroTitle2: 'ईरान में लग्जरी कंसीयज के साथ',
      heroSubtitle:
        'जेसीआई-मान्यता प्राप्त अस्पताल, विश्व प्रसिद्ध सर्जन, 70-90% उपचार बचत, और सूरिन महाम द्वारा प्रबंधित वीआईपी आतिथ्य।',
      ctaBook: 'निःशुल्क परामर्श बुक करें',
      ctaCalculator: 'लागत की गणना करें',
      visaBanner: 'मेडिकल टी-वीजा फास्ट-ट्रैक गारंटी और आधिकारिक स्वास्थ्य मंत्रालय मान्यता',
      statsSpecialists: '150+ बोर्ड-प्रमाणित सर्जन',
      statsSavings: '70%–90% औसत लागत बचत',
      statsHospitals: 'जेसीआई मान्यता प्राप्त अस्पताल',
      statsConcierge: '24/7 वीआईपी कंसीयज और सुरक्षा',
      calculatorTitle: 'इंटरैक्टिव उपचार लागत अनुमानक',
      calculatorSubtitle: 'अमेरिका, यूके और यूएई बेंचमार्क के मुकाबले लागत अनुमान देखने के लिए अपनी विशेषज्ञता चुनें।',
      selectSpecialty: 'चिकित्सा विशेषता चुनें',
      selectTier: 'कंसीएज टियर चुनें',
      tierEssential: 'आवश्यक देखभाल',
      tierEssentialDesc: 'अस्पताल ट्रांसफर, नर्सिंग सहायता, बुनियादी अनुवाद।',
      tierPremium: 'प्रीमियम आराम',
      tierPremiumDesc: '4-स्टार होटल, समर्पित निजी नर्स, पूर्ण अनुवाद, शहर के दौरे।',
      tierVip: 'वीआईपी एलीट कंसीयज',
      tierVipDesc: '5-स्टार सुइट, वीआईपी सुरक्षा, व्यक्तिगत प्रबंधक, 24/7 एस्कॉर्ट।',
      estimatedCost: 'अनुमानित पैकेज कुल',
      usBenchmark: 'यूएस / यूएई बेंचमार्क: ',
      savingsHighlight: 'आप बचाते हैं:',
      hospitalStay: 'अस्पताल में रहना:',
      recoveryPeriod: 'अनुमानित रिकवरी:',
      days: 'दिन',
      getDetailedQuote: 'विस्तृत उद्धरण सारांश डाउनलोड करें',
      journeyTitle: 'आपकी 5-चरणीय सहज चिकित्सा यात्रा',
      journeySubtitle: 'सूरिन महाम स्वास्थ्य विशेषज्ञों द्वारा प्रबंधित।',
      step1Title: '1. निःशुल्क वर्चुअल परामर्श',
      step1Desc: 'अपनी चिकित्सा रिपोर्ट अपलोड करें। हमारी बोर्ड 24 घंटे के भीतर समीक्षा करती है।',
      step2Title: '2. उपचार योजना और वीजा सहायता',
      step2Desc: 'एक व्यक्तिगत उपचार कार्यक्रम और आधिकारिक मेडिकल टी-वीजा आमंत्रण पत्र प्राप्त करें।',
      step3Title: '3. आगमन और वीआईपी अभिवादन',
      step3Desc: 'तेहरान, शिराज या कीश में हमारे समर्पित कार्यकारी द्वारा वीआईपी हवाई अड्डा पिकअप।',
      step4Title: '4. उपचार और रिकवरी',
      step4Desc: 'जेसीआई-मान्यता प्राप्त अस्पताल में प्रक्रिया और शानदार रिकवरी आवास।',
      step5Title: '5. वापसी और अनुवर्ती देखभाल',
      step5Desc: 'डिस्चार्ज के बाद की जांच और निरंतर सहायता के साथ सुरक्षित घर वापसी।',
      wizardTitle: 'अपनी उपचार पूछताछ शुरू करें',
      wizardSubtitle: '2 घंटे के भीतर आधिकारिक उद्धरण प्राप्त करने के लिए यह संक्षिप्त फॉर्म भरें।',
      stepLabel: 'चरण',
      next: 'अगला चरण',
      back: 'پیچھے',
      submit: 'पूछताछ भेजें',
      successTitle: 'पूछताछ सफलतापूर्वक प्राप्त हुई!',
      successDesc:
        'धन्यवाद। आपका मामला सूरिन महाम को भेज दिया गया है। एक वरिष्ठ प्रबंधक 2 घंटे में संपर्क करेगा।',
      footerTagline:
        'सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन के तहत संचालित। पंजीकृत अंतरराष्ट्रीय व्यापार उद्यम।',
      officesTitle: 'वैश्विक कार्यालय और उपस्थिति',
      officeIran: 'तेहरान, शिराज, कीश और केशम (मुख्यालय)',
      officeDubai: 'दुबई, यूएई',
      officeTanzania: 'दार एस सलाम, तंजानिया',
      officeIndia: 'लखनऊ और मुंबई, भारत',
      contactEmail: 'health@maham-group.com',
      contactPhone: '+98 905 524 0772'
    },
    ur: {
      brandSub: 'سورین مہام ٹریڈ اینڈ انڈسٹری ڈویلپمنٹ کارپوریشن',
      tagline: 'ایران میں پریمیئر میڈیکل ٹ্যুরিজم کنسیرج',
      navHome: 'ہوم',
      navSpecialties: 'خصوصیات',
      navCalculator: 'لاگت کا کیلکولیٹر',
      navJourney: 'مریض کا سفر',
      navContact: 'رابطہ کریں',
      heroBadge: 'آفیشل میڈیکل ٹ্যুরিজم فراہم کنندہ • سورین مہام',
      heroTitle1: 'عالمی معیار کی صحت کی دیکھ بھال',
      heroTitle2: 'ایران میں لگژری کنسیرج کے ساتھ',
      heroSubtitle:
        'جے سی آئی منظور شدہ ہسپتال، نامور سرجنز، ۷۰ سے ۹۰ فیصد تک بچت، اور سورین مہام کی زیر نگرانی فائیو سٹار مہمان نوازی۔',
      ctaBook: 'مفت مشاورت کی بکنگ کریں',
      ctaCalculator: 'لاگت کا حساب لگائیں',
      visaBanner: 'میڈیکل ٹی-ویزہ فاسٹ ٹریک گارنٹی اور وزارت صحت کی باضابطہ منظوری',
      statsSpecialists: '۱۵۰+ بورڈ سے تصدیق شدہ سرجنز',
      statsSavings: '۷۰٪ تا ۹۰٪ اوسط لاگت کی بچت',
      statsHospitals: 'جے سی آئی سے منظور شدہ پارٹنر ہسپتال',
      statsConcierge: '۲۴/۷ وی آئی پی کنسیرج اور سکیورٹی',
      calculatorTitle: 'انٹرایکٹو ٹریٹمنٹ کاسٹ ایسٹیمیٹر',
      calculatorSubtitle:
        'امریکہ، برطانیہ اور متحدہ عرب امارات کے بنچ مارکس کے مقابلے میں تخمینہ اخراجات دیکھنے کے لیے اپنی اسپیشلٹی منتخب کریں۔',
      selectSpecialty: 'میڈیکل اسپیشلٹی منتخب کریں',
      selectTier: 'کنسیرج ٹियर منتخب کریں',
      tierEssential: 'ضروری دیکھ بھال',
      tierEssentialDesc: 'ہسپتال کی منتقلی، نرسنگ سپورٹ، بنیادی ترجمہ۔',
      tierPremium: 'پریمیم کمفرٹ',
      tierPremiumDesc: '۴-ستارہ ہوٹل، سرشار نجی نرس، مکمل ترجمہ، سٹی ٹور۔',
      tierVip: 'وی آئی پی ایلیٹ کنسیرج',
      tierVipDesc: '۵-ستارہ لگژری سویٹ، وی آئی پی سکیورٹی، ذاتی مینیجر، ۲۴/۷ پرائیویٹ سکیورٹی۔',
      estimatedCost: 'تخمینہ شدہ پیکیج کل',
      usBenchmark: 'امریکہ / یو اے ای بنچ مارک: ',
      savingsHighlight: 'آپ کی بچت:',
      hospitalStay: 'ہسپتال میں قیام:',
      recoveryPeriod: 'تخمینہ شدہ صحت یابی:',
      days: 'دن',
      getDetailedQuote: 'تفصیلی کوٹ سمری ڈاؤن لوڈ کریں',
      journeyTitle: 'آپ کا ۵ مراحل پر مشتمل میڈیکل سفر',
      journeySubtitle: 'سورین مہام ہیلتھ ماہرین کے ذریعہ آخر تک منظم۔',
      step1Title: '۱. مفت ورچوئل مشاورت',
      step1Desc: 'اپنی طبی رپورٹس اپ لوڈ کریں۔ ہمارا میڈیکل بورڈ ۲۴ گھنٹوں میں جائزہ لیتا ہے۔',
      step2Title: '2. علاج کا منصوبہ اور ویزا سپورٹ',
      step2Desc: 'ذاتی نوعیت کا علاج کا شیڈول اور آفیشل میڈیکل ٹی ویزا دعوت نامہ حاصل کریں۔',
      step3Title: '۳. آمد اور وی آئی پی استقبال',
      step3Desc: 'تہران، شیراز یا کیش میں ہمارے سرشار ایگزیکٹو کے ذریعہ ہوائی اڈے پر وی آئی پی پک اپ۔',
      step4Title: '۴. علاج اور صحت یابی',
      step4Desc: 'جے سی آئی منظور شدہ ہسپتال میں طریقہ کار اور لگژری ریکوری رہائش۔',
      step5Title: '۵. واپسی اور فالو اپ کیئر',
      step5Desc: 'ڈسچارج کے بعد کے چیک اپ اور جاری تعاون کے ساتھ گھر واپسی۔',
      wizardTitle: 'اپنی علاج کی انکوائری شروع کریں',
      wizardSubtitle: '۲ گھنٹے کے اندر آفیشل کوٹیشن حاصل کرنے کے لیے یہ مختصر فارم پُر کریں۔',
      stepLabel: 'مرحلہ',
      next: 'اگلا مرحلہ',
      back: 'پیچھے',
      submit: 'انکوائری جمع کروائیں۔',
      successTitle: 'انکوائری کامیابی سے موصول ہو گئی!',
      successDesc:
        'شکریہ۔ آپ کا کیس سورین مہام میڈیکل بورڈ کو بھیج دیا گیا ہے۔ سینئر مینیجر ۲ گھنٹے میں رابطہ کرے گا۔',
      footerTagline:
        'سورین مہام ٹریڈ اینڈ انڈسٹری डेवलपमेंट کارپوریشن کے تحت کام کر رہا ہے۔ رجسٹرڈ بین الاقوامی تجارتی ادارہ۔',
      officesTitle: 'عالمی دفاتر اور موجودگی',
      officeIran: 'تہران، شیراز، کیش اور قشم (ہیڈ کوارٹر)',
      officeDubai: 'دبی، متحدہ عرب امارات',
      officeTanzania: 'دارالسلام، تنزانیا',
      officeIndia: 'لکھنؤ اور ممبئی، بھارت',
      contactEmail: 'health@maham-group.com',
      contactPhone: '+98 905 524 0772'
    }
  };

  const t = translations[lang] || translations.en;

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white ${
        isRTL ? 'rtl' : 'ltr'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#06101E] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              {t.brandSub}
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">{t.tagline}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:health@maham-group.com"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              health@maham-group.com
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://wa.me/989055240772"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-emerald-400 font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              +98 905 524 0772
            </a>
            <span className="text-slate-600">|</span>
            {/* Language Switcher */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              aria-label="Select Language"
              className="bg-slate-800 text-white rounded px-2 py-0.5 text-xs border border-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="en">English</option>
              <option value="fa">فارسی</option>
              <option value="ar">العربية</option>
              <option value="sw">Kiswahili</option>
              <option value="hi">हिन्दी</option>
              <option value="ur">اردو</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                MAHAM <span className="text-blue-600 font-extrabold">HEALTH</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase block font-medium">
                Soorin Maham Group
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">
              {t.navHome}
            </a>
            <a href="#specialties" className="hover:text-blue-600 transition-colors">
              {t.navSpecialties}
            </a>
            <a href="#calculator" className="hover:text-blue-600 transition-colors">
              {t.navCalculator}
            </a>
            <a href="#journey" className="hover:text-blue-600 transition-colors">
              {t.navJourney}
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              {t.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/989055240772"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Concierge
            </a>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-blue-600/20"
            >
              {t.ctaBook}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-400/10 blur-3xl pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-blue-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              {t.heroBadge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              {t.heroTitle1}{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-blue-600/25"
              >
                {t.ctaBook}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </a>
              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-sm"
              >
                <Calculator className="w-5 h-5 text-blue-600" />
                {t.ctaCalculator}
              </a>
            </div>

            {/* Visa Assurance Banner */}
            <div className="mt-12 inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200/80 px-6 py-3 rounded-2xl shadow-sm text-xs sm:text-sm text-slate-700 font-medium">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
              <span>{t.visaBanner}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.statsSpecialists, icon: Award, desc: 'Tehran & Kish Centers' },
              { title: t.statsSavings, icon: Sparkles, desc: 'vs US / UAE / Europe' },
              { title: t.statsHospitals, icon: Building2, desc: 'JCI & ISO Certified' },
              { title: t.statsConcierge, icon: HeartHandshake, desc: 'End-to-End Support' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{stat.title}</h3>
                <p className="text-xs text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider block mb-2">
              World-Class Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Centers of Medical Excellence
            </h2>
            <p className="text-slate-600 text-base">
              Explore our core specialties backed by board-certified surgeons, state-of-the-art hospitals, and comprehensive VIP care packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((spec) => (
              <div
                key={spec.id}
                className="bg-slate-50/50 rounded-2xl border border-slate-200/80 p-6 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {spec.category}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Save {spec.savings}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {spec.name[lang] || spec.name.en}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {spec.description[lang] || spec.description.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Recovery: {spec.recoveryDays} {t.days}</span>
                  </div>
                  <button
                    onClick={() => {
                      setCalcSpecialtyId(spec.id);
                      const el = document.getElementById('calculator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    <span>Estimate Cost</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cost Calculator & 3-Tier Pricing */}
      <section id="calculator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider block mb-2">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              {t.calculatorTitle}
            </h2>
            <p className="text-slate-400 text-base">{t.calculatorSubtitle}</p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              {/* 1. Specialty Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  {t.selectSpecialty}
                </label>
                <select
                  value={calcSpecialtyId}
                  onChange={(e) => setCalcSpecialtyId(e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-blue-500 font-medium"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name[lang] || s.name.en} (Save {s.savings})
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Concierge Tier Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  {t.selectTier}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'essential', label: 'Essential', priceMod: '+$500' },
                    { id: 'premium', label: 'Premium', priceMod: '+$1,200' },
                    { id: 'vip', label: 'VIP Elite', priceMod: '+$2,400' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setCalcTier(tier.id as any)}
                      className={`px-3 py-3 rounded-xl font-semibold text-xs transition-all border text-center ${
                        calcTier === tier.id
                          ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30'
                          : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div>{tier.label}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{tier.priceMod}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Currency Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  Select Currency
                </label>
                <select
                  value={currencyCode}
                  onChange={(e) => setCurrencyCode(e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-blue-500 font-medium"
                >
                  {Object.keys(CURRENCIES).map((code) => (
                    <option key={code} value={code}>
                      {code} ({CURRENCIES[code].symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-400 font-bold block mb-1">
                  {currentSpecialty.name[lang] || currentSpecialty.name.en}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline gap-2">
                  <span>
                    {currency.symbol}
                    {convertedPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-normal text-slate-400">({currencyCode})</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    {t.savingsHighlight} {currentSpecialty.savings} vs US/UAE
                  </span>
                  <span>•</span>
                  <span>
                    {t.hospitalStay} {currentSpecialty.hospitalStayDays} {t.days}
                  </span>
                  <span>•</span>
                  <span>
                    {t.recoveryPeriod} {currentSpecialty.recoveryDays} {t.days}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  {t.getDetailedQuote}
                </button>
                <a
                  href="#inquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
                >
                  {t.ctaBook}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Patient Journey */}
      <section id="journey" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider block mb-2">
              End-to-End Concierge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {t.journeyTitle}
            </h2>
            <p className="text-slate-600 text-base">{t.journeySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { step: t.step1Title, desc: t.step1Desc, icon: FileText },
              { step: t.step2Title, desc: t.step2Desc, icon: Calendar },
              { step: t.step3Title, desc: t.step3Desc, icon: Plane },
              { step: t.step4Title, desc: t.step4Desc, icon: Stethoscope },
              { step: t.step5Title, desc: t.step5Desc, icon: HeartHandshake }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between relative"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-blue-600/20">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{item.step}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Inquiry Form */}
      <section id="inquiry" className="py-24 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                {t.wizardTitle}
              </h2>
              <p className="text-slate-600 text-sm">{t.wizardSubtitle}</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t.successTitle}</h3>
                <p className="text-sm text-emerald-700 max-w-lg mx-auto mb-6">{t.successDesc}</p>
                <a
                  href="https://wa.me/989055240772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Connect Instantly via WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleWizardSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Alexander Hamilton"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="e.g. alexander@maham-group.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      value={patientCountry}
                      onChange={(e) => setPatientCountry(e.target.value)}
                      placeholder="e.g. United Arab Emirates"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Select Treatment Specialty
                    </label>
                    <select
                      value={wizardSpecialty}
                      onChange={(e) => setWizardSpecialty(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      {SPECIALTIES.map((s) => (
                        <option key={s.id} value={s.name.en}>
                          {s.name[lang] || s.name.en}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Preferred Package Tier
                    </label>
                    <select
                      value={selectedTier}
                      onChange={(e: any) => setSelectedTier(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="Essential Care">Essential Care</option>
                      <option value="Premium Comfort">Premium Comfort</option>
                      <option value="VIP Elite Concierge">VIP Elite Concierge</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Medical Notes & Case Description
                  </label>
                  <textarea
                    rows={4}
                    value={medicalNotes}
                    onChange={(e) => setMedicalNotes(e.target.value)}
                    placeholder="Describe your medical goals, prior surgeries, or attach details about reports..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl text-base transition-all shadow-xl shadow-blue-600/30 w-full sm:w-auto"
                  >
                    <span>{t.submit}</span>
                    <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#06101E] text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-bold text-white tracking-tight">
                    MAHAM <span className="text-blue-500">HEALTH</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-slate-400 uppercase block font-medium">
                    Soorin Maham Group
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
                {t.footerTagline}
              </p>
              <div className="flex items-center gap-4 text-xs text-white font-medium">
                <a
                  href="https://wa.me/989055240772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +98 905 524 0772
                </a>
                <span>•</span>
                <a href="mailto:health@maham-group.com" className="hover:underline text-blue-400">
                  health@maham-group.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {t.officesTitle}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>{t.officeIran}</li>
                <li>{t.officeDubai}</li>
                <li>{t.officeTanzania}</li>
                <li>{t.officeIndia}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    {t.navHome}
                  </a>
                </li>
                <li>
                  <a href="#specialties" className="hover:text-white transition-colors">
                    {t.navSpecialties}
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-white transition-colors">
                    {t.navCalculator}
                  </a>
                </li>
                <li>
                  <a href="#journey" className="hover:text-white transition-colors">
                    {t.navJourney}
                  </a>
                </li>
                <li>
                  <a href="#inquiry" className="hover:text-white transition-colors">
                    {t.ctaBook}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corporation. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-400 transition-colors cursor-pointer">JCI Medical Accreditation</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Summary Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Maham Health Official Quotation Summary</h3>
              <p className="text-xs text-slate-500 mt-1">Soorin Maham Trade & Industry Development Corporation</p>
            </div>

            <div className="space-y-3 text-sm bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-200">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Specialty:</span>
                <span className="font-semibold text-slate-900">
                  {currentSpecialty.name[lang] || currentSpecialty.name.en}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Selected Tier:</span>
                <span className="font-semibold text-slate-900 capitalize">{calcTier} Care Package</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Hospital Stay:</span>
                <span className="font-semibold text-slate-900">{currentSpecialty.hospitalStayDays} Days</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Estimated Recovery:</span>
                <span className="font-semibold text-slate-900">{currentSpecialty.recoveryDays} Days</span>
              </div>
              <div className="flex justify-between py-1 text-base font-bold text-blue-600">
                <span>Total Estimate:</span>
                <span>
                  {currency.symbol}
                  {convertedPrice.toLocaleString()} {currencyCode}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md"
              >
                Print / Save PDF
              </button>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="px-5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 rounded-xl text-sm transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
