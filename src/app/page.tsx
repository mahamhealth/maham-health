'use client';

import React, { useState, useId } from 'react';
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
  ArrowRight
} from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

interface Specialty {
  id: string;
  name: string;
  category: string;
  recoveryDays: string;
  iranPrice: number;
  indiaPrice: number;
  uaeTurkeyPrice: number;
  usUkPrice: number;
}

const SPECIALTIES: Specialty[] = [
  {
    id: 'rhinoplasty',
    name: 'Rhinoplasty (Nose Surgery)',
    category: 'Cosmetic & Plastic Surgery',
    recoveryDays: '7–10 days',
    iranPrice: 1650,
    indiaPrice: 2800,
    uaeTurkeyPrice: 4500,
    usUkPrice: 8500
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants (Premium Titanium)',
    category: 'Dental Care',
    recoveryDays: '3–5 days',
    iranPrice: 550,
    indiaPrice: 800,
    uaeTurkeyPrice: 1500,
    usUkPrice: 2800
  },
  {
    id: 'lasik',
    name: 'LASIK / Femto-LASIK (Both Eyes)',
    category: 'Ophthalmology',
    recoveryDays: '2–3 days',
    iranPrice: 1100,
    indiaPrice: 1400,
    uaeTurkeyPrice: 2800,
    usUkPrice: 4200
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant (FUE / Micro-FUE)',
    category: 'Restoration & Aesthetics',
    recoveryDays: '3–4 days',
    iranPrice: 1250,
    indiaPrice: 2000,
    uaeTurkeyPrice: 2600,
    usUkPrice: 6000
  },
  {
    id: 'ivf',
    name: 'IVF (Full Treatment Cycle + ICSI)',
    category: 'Reproductive Medicine',
    recoveryDays: '10–14 days',
    iranPrice: 3200,
    indiaPrice: 4500,
    uaeTurkeyPrice: 7500,
    usUkPrice: 15000
  },
  {
    id: 'knee-replacement',
    name: 'Total Knee Replacement',
    category: 'Orthopedics & Joint Care',
    recoveryDays: '10–14 days',
    iranPrice: 4200,
    indiaPrice: 7500,
    uaeTurkeyPrice: 11000,
    usUkPrice: 22000
  },
  {
    id: 'cardiology-stent',
    name: 'Cardiology Stent / Angioplasty',
    category: 'Cardiovascular Care',
    recoveryDays: '4–7 days',
    iranPrice: 3800,
    indiaPrice: 6500,
    uaeTurkeyPrice: 9500,
    usUkPrice: 20000
  },
  {
    id: 'oncology-protocol',
    name: 'Oncology Initial Treatment Protocol',
    category: 'Oncology & Chemotherapy',
    recoveryDays: '7–14 days',
    iranPrice: 4500,
    indiaPrice: 8000,
    uaeTurkeyPrice: 12000,
    usUkPrice: 25000
  },
  {
    id: 'bariatric-sleeve',
    name: 'Bariatric Sleeve Surgery',
    category: 'Metabolic & Weight Loss',
    recoveryDays: '5–7 days',
    iranPrice: 2850,
    indiaPrice: 4800,
    uaeTurkeyPrice: 6500,
    usUkPrice: 12000
  }
];

const I18N: Record<Language, {
  brand: string;
  badge: string;
  heroTitle: string;
  heroSub: string;
  startAssessment: string;
  whatsappDirect: string;
  statPartners: string;
  statSpecialists: string;
  statSavings: string;
  statWait: string;
  calculatorTitle: string;
  calculatorSub: string;
  selectProcedure: string;
  compareAgainst: string;
  packageTier: string;
  estimatedTotal: string;
  estimatedSavings: string;
  timelineTitle: string;
  timelineSub: string;
  packagesTitle: string;
  packagesSub: string;
  step1: string;
  step2: string;
  step3: string;
  submit: string;
  male: string;
  female: string;
}> = {
  en: {
    brand: 'Maham Health',
    badge: 'Premier Medical Concierge • Official IPD Partner Hospitals',
    heroTitle: 'World-Class Healthcare, At 70–90% Below Global Costs',
    heroSub: 'Orchestrating bespoke private medical journeys to leading accredited hospitals in Iran with internationally trained specialists and white-glove concierge care.',
    startAssessment: 'Start Free Assessment',
    whatsappDirect: 'Chat on WhatsApp',
    statPartners: '40+ IPD Partner Centers',
    statSpecialists: '180+ Board-Certified Specialists',
    statSavings: '70–90% Typical Savings',
    statWait: '< 3 Days Wait Time',
    calculatorTitle: 'Interactive Savings Calculator',
    calculatorSub: 'Select your procedure and origin benchmark to view estimated savings.',
    selectProcedure: 'Select Treatment / Procedure',
    compareAgainst: 'Compare Against Benchmark',
    packageTier: 'Concierge Package Tier',
    estimatedTotal: 'Estimated Iran Treatment Cost',
    estimatedSavings: 'Your Estimated Cost Savings',
    timelineTitle: 'Your Patient Journey',
    timelineSub: 'A seamless, discreet 5-stage medical travel experience from initial consultation to recovery.',
    packagesTitle: 'Curated Concierge Packages',
    packagesSub: 'Choose the level of clinical support and luxury hospitality tailored for you and your companion.',
    step1: 'Step 1: Clinical Focus',
    step2: 'Step 2: Patient Profile',
    step3: 'Step 3: Contact & Concierge',
    submit: 'Submit Confidential Request',
    male: 'Male',
    female: 'Female'
  },
  fa: {
    brand: 'ماهام هلث',
    badge: 'دپارتمان خدمات بین‌المللی سلامت • بیمارستان‌های معتبر IPD',
    heroTitle: 'خدمات درمانی فوق تخصصی، با ۷۰ تا ۹۰ درصد صرفه‌جویی جهانی',
    heroSub: 'هماهنگی خدمات درمانی تشریفاتی در برترین بیمارستان‌های معتبر ایران با پزشکان فوق تخصص و مراقبت VIP.',
    startAssessment: 'درخواست ارزیابی رایگان',
    whatsappDirect: 'ارتباط مستقیم در واتس‌اپ',
    statPartners: '۴۰+ مرکز همکار IPD',
    statSpecialists: '۱۸۰+ پزشک فوق تخصص',
    statSavings: '۷۰–۹۰٪ صرفه‌جویی نوعی',
    statWait: 'کمتر از ۳ روز نوبت‌دهی',
    calculatorTitle: 'محاسبه‌گر هوشمند صرفه‌جویی هزینه',
    calculatorSub: 'درمان و کشور مقصد مقایسه را انتخاب کنید تا میزان صرفه‌جویی محاسبه شود.',
    selectProcedure: 'انتخاب نوع خدمت درمانی',
    compareAgainst: 'مقایسه با هزینه جهانی در',
    packageTier: 'سطح پکیج همراهی و تشریفات',
    estimatedTotal: 'برآورد هزینه درمان در ایران',
    estimatedSavings: 'صرفه‌جویی تخمینی شما',
    timelineTitle: 'مراحل سفر درمانی شما',
    timelineSub: 'مسیری شفاف و دقیق از ارزیابی پرونده تا درمان و بهبودی کامل.',
    packagesTitle: 'پکیج‌های تشریفات و اقامت',
    packagesSub: 'سطح خدمات تشریفاتی و رفاهی متناسب با نیاز بیمار و همراه را انتخاب نمایید.',
    step1: 'مرحله ۱: انتخاب درمان',
    step2: 'مرحله ۲: مشخصات بیمار',
    step3: 'مرحله ۳: اطلاعات تماس و پکیج',
    submit: 'ثبت درخواست محرمانه',
    male: 'مرد',
    female: 'زن'
  },
  ar: {
    brand: 'مهام هيلث',
    badge: 'خدمات الرعاية الطبية الفاخرة • مستشفيات IPD المعتمدة',
    heroTitle: 'رعاية صحية عالمية المستوى، بتوفير ٧٠–٩٠٪ من التكاليف العالمية',
    heroSub: 'تنظيم رحلات علاجية خاصة لأفضل المستشفيات المعتمدة في إيران مع كبار الاستشاريين وخدمات كونسيرج متكاملة.',
    startAssessment: 'ابدأ التقييم المجاني',
    whatsappDirect: 'تواصل عبر واتساب',
    statPartners: '+٤٠ مركزاً معتمداً IPD',
    statSpecialists: '+١٨٠ طبيباً استشارياً',
    statSavings: '٧٠–٩٠٪ توفير معتاد',
    statWait: 'أقل من ٣ أيام للانتظار',
    calculatorTitle: 'حاسبة التوفير التقديرية',
    calculatorSub: 'اختر الإجراء الطبي والوجهة المقارنة لحساب التوفير المتوقع.',
    selectProcedure: 'اختر الإجراء العلاجي',
    compareAgainst: 'المقارنة مع الوجهة',
    packageTier: 'فئة باقة الكونسيرج',
    estimatedTotal: 'التكلفة المقدرة في إيران',
    estimatedSavings: 'التوفير المتوقع لك',
    timelineTitle: 'رحلتك العلاجية',
    timelineSub: 'تجربة علاجية سلسة وخاصة عبر ٥ مراحل تبدأ بالاستشارة وحتى التعافي التام.',
    packagesTitle: 'باقات الكونسيرج المختارة',
    packagesSub: 'اختر مستوى الدعم الطبي والإقامة الفندقية الفاخرة المناسب لك ولمرافقك.',
    step1: 'الخطوة ١: التخصص العلاجي',
    step2: 'الخطوة ٢: بيانات المريض',
    step3: 'الخطوة ٣: التواصل والباقة',
    submit: 'إرسال طلب الاستشارة',
    male: 'ذكر',
    female: 'أنثى'
  },
  sw: {
    brand: 'Maham Health',
    badge: 'Huduma Maalum za Matibabu • Hospitali Rasmi za IPD',
    heroTitle: 'Huduma Bora za Kimatibabu, Okoa 70–90% ya Gharama Duniani',
    heroSub: 'Mpangilio maalum wa safari za kimatibabu katika hospitali zinazoaminika Iran zikiwa na madaktari bingwa.',
    startAssessment: 'Anza Tathmini ya Bure',
    whatsappDirect: 'Wasiliana kwa WhatsApp',
    statPartners: 'Vituo 40+ vya IPD',
    statSpecialists: 'Madaktari Bingwa 180+',
    statSavings: '70–90% Makadirio ya Kuokoa',
    statWait: '< Siku 3 Muda wa Kusubiri',
    calculatorTitle: 'Kikokotoo cha Makadirio ya Akiba',
    calculatorSub: 'Chagua huduma ya matibabu ili kuona makadirio ya kuokoa gharama.',
    selectProcedure: 'Chagua Huduma ya Matibabu',
    compareAgainst: 'Linganisha na Nchi',
    packageTier: 'Kiwango cha Huduma',
    estimatedTotal: 'Makadirio ya Gharama Iran',
    estimatedSavings: 'Kiasi Utakachookoa',
    timelineTitle: 'Hatua za Safari Yako',
    timelineSub: 'Mpangilio makini wa hatua 5 kuanzia tathmini ya kwanza hadi kupona kikamilifu.',
    packagesTitle: 'Vifurushi vya Huduma',
    packagesSub: 'Chagua kiwango cha huduma ya matibabu na makazi kinachokufaa wewe na msindikizaji wako.',
    step1: 'Hatua 1: Aina ya Matibabu',
    step2: 'Hatua 2: Taarifa za Mgonjwa',
    step3: 'Hatua 3: Mawasiliano na Kifurushi',
    submit: 'Tuma Ombi la Ushauri',
    male: 'Mwanaume',
    female: 'Mwanamke'
  },
  hi: {
    brand: 'माहाम हेल्थ',
    badge: 'प्रीमियर मेडिकल कंसीयज • आधिकारिक IPD पार्टनर अस्पताल',
    heroTitle: 'विश्व स्तरीय स्वास्थ्य सेवा, वैश्विक लागत से 70-90% कम',
    heroSub: 'ईरान के शीर्ष मान्यता प्राप्त अस्पतालों में विशेषज्ञ डॉक्टरों और वीआईपी कंसीयज देखभाल के साथ सुरक्षित चिकित्सा यात्रा।',
    startAssessment: 'निःशुल्क मूल्यांकन शुरू करें',
    whatsappDirect: 'व्हाट्सएप पर चैट करें',
    statPartners: '40+ IPD पार्टनर केंद्र',
    statSpecialists: '180+ विशेषज्ञ डॉक्टर',
    statSavings: '70–90% औसत बचत',
    statWait: '< 3 दिन प्रतीक्षा समय',
    calculatorTitle: 'इंटरैक्टिव बचत कैलकुलेटर',
    calculatorSub: 'अनुमानित बचत देखने के लिए अपना उपचार और तुलना देश चुनें।',
    selectProcedure: 'उपचार / प्रक्रिया चुनें',
    compareAgainst: 'तुलना देश चुनें',
    packageTier: 'कंसीयज पैकेज स्तर',
    estimatedTotal: 'ईरान में अनुमानित लागत',
    estimatedSavings: 'आपकी अनुमानित बचत',
    timelineTitle: 'आपकी उपचार यात्रा',
    timelineSub: 'प्रारंभिक परामर्श से लेकर पूर्ण स्वस्थ होने तक 5 चरणों का सहज अनुभव।',
    packagesTitle: 'विशेष कंसीयज पैकेज',
    packagesSub: 'अपने और अपने साथी के लिए उपयुक्त आवास और सेवा स्तर चुनें।',
    step1: 'चरण 1: उपचार का चयन',
    step2: 'चरण 2: रोगी का विवरण',
    step3: 'चरण 3: संपर्क और पैकेज',
    submit: 'गोपनीय अनुरोध भेजें',
    male: 'पुरुष',
    female: 'महिला'
  },
  ur: {
    brand: 'ماہام ہیلتھ',
    badge: 'پریمیئر میڈیکل کونسیرج • سرکاری IPD پارٹنر ہسپتال',
    heroTitle: 'عالمی معیار کا علاج، بین الاقوامی لاگت سے 70 تا 90 فیصد کم',
    heroSub: 'ایران کے اعلیٰ ترین مصدقہ ہسپتالوں میں نامور ماہرین امراض اور وی آئی پی خدمات کے ساتھ پرسکون طبی سفر۔',
    startAssessment: 'مفت طبی جائزہ شروع کریں',
    whatsappDirect: 'واٹس ایپ پر رابطہ کریں',
    statPartners: '40+ پارٹنر ہسپتال',
    statSpecialists: '180+ ماہر ڈاکٹرز',
    statSavings: '70–90٪ متوقع بچت',
    statWait: '3 دن سے کم انتظار',
    calculatorTitle: 'بچت کیلکولیٹر',
    calculatorSub: 'اپنی متوقع بچت دیکھنے کے لیے علاج اور موازنہ ملک منتخب کریں۔',
    selectProcedure: 'علاج یا سرجری منتخب کریں',
    compareAgainst: 'موازنہ ملک',
    packageTier: 'کونسیرج پیکیج کا درجہ',
    estimatedTotal: 'ایران میں تخمینی لاگت',
    estimatedSavings: 'آپ کی متوقع بچت',
    timelineTitle: 'آپ کا طبی سفر',
    timelineSub: 'ابتدائی جائزے سے مکمل صحت یابی تک 5 مرحلہ وار منظم سفر۔',
    packagesTitle: 'منتخب کونسیرج پیکیجز',
    packagesSub: 'اپنے اور اپنے ساتھی کے لیے موزوں رہائش اور طبی خدمات کا انتخاب کریں۔',
    step1: 'مرحلہ 1: علاج کا انتخاب',
    step2: 'مرحلہ 2: مریض کی تفصیلات',
    step3: 'مرحلہ 3: رابطہ اور پیکیج',
    submit: 'درخواست ارسال کریں',
    male: 'مرد',
    female: 'خواتین'
  }
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('rhinoplasty');
  const [benchmarkCountry, setBenchmarkCountry] = useState<'us' | 'uae' | 'india'>('us');
  const [packageTier, setPackageTier] = useState<'essential' | 'luxury'>('luxury');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [patientName, setPatientName] = useState('');
  const [patientGender, setPatientGender] = useState<'Male' | 'Female'>('Male');
  const [patientAge, setPatientAge] = useState('');
  const [timeframe, setTimeframe] = useState('Within 1 Month');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [country, setCountry] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');

  const procedureSelectId = useId();
  const benchmarkSelectId = useId();
  const packageSelectId = useId();

  const isRtl = lang === 'fa' || lang === 'ar' || lang === 'ur';
  const t = I18N[lang] || I18N.en;

  const activeSpecialty = SPECIALTIES.find((s) => s.id === selectedSpecialty) || SPECIALTIES[0];

  const getBenchmarkPrice = () => {
    if (benchmarkCountry === 'us') return activeSpecialty.usUkPrice;
    if (benchmarkCountry === 'uae') return activeSpecialty.uaeTurkeyPrice;
    return activeSpecialty.indiaPrice;
  };

  const currentBenchmarkPrice = getBenchmarkPrice();
  const packageAddon = packageTier === 'luxury' ? 1200 : 450;
  const totalIranEstimate = activeSpecialty.iranPrice + packageAddon;
  const estimatedSavings = Math.max(0, currentBenchmarkPrice - totalIranEstimate);
  const savingsPercent = Math.round((estimatedSavings / currentBenchmarkPrice) * 100);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          specialty: selectedSpecialty,
          patientName,
          patientGender,
          patientAge,
          timeframe,
          medicalNotes,
          country,
          whatsapp,
          email,
          packageTier
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedSpecialtyObj = SPECIALTIES.find((s) => s.id === selectedSpecialty) || SPECIALTIES[0];
  const encodedWhatsappMsg = encodeURIComponent(
    `Hello Maham Health, I would like to consult regarding ${selectedSpecialtyObj.name}. Patient: ${patientName || 'Private Inquiry'} (${country || 'International'}). Timeframe: ${timeframe}. Package: ${packageTier === 'luxury' ? 'Luxury VIP Concierge' : 'Essential Medical Care'}.`
  );
  const whatsappUrl = `https://wa.me/989055240772?text=${encodedWhatsappMsg}`;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Maham Health" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-blue-900 leading-none">MAHAM HEALTH</span>
              <span className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold mt-1">International Healthcare Concierge</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
              <Globe2 className="w-4 h-4 text-slate-500 mx-2" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-sm font-semibold text-slate-700 outline-none cursor-pointer pr-2"
                aria-label="Language selection"
              >
                <option value="en">English (EN)</option>
                <option value="fa">فارسی (FA)</option>
                <option value="ar">العربية (AR)</option>
                <option value="sw">Kiswahili (SW)</option>
                <option value="hi">हिन्दी (HI)</option>
                <option value="ur">اردو (UR)</option>
              </select>
            </div>

            <button
              onClick={() => { setIsModalOpen(true); setSubmitted(false); setWizardStep(1); }}
              className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200"
            >
              <span>{t.startAssessment}</span>
              <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{t.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              {t.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
              {t.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => { setIsModalOpen(true); setSubmitted(false); setWizardStep(1); }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
              >
                <span>{t.startAssessment}</span>
                <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <a
                href="https://wa.me/989055240772"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-emerald-700 border border-slate-200 text-base font-semibold px-8 py-4 rounded-xl shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>{t.whatsappDirect}</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-950 mb-1">40+</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600">{t.statPartners}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-950 mb-1">180+</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600">{t.statSpecialists}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-950 mb-1">70–90%</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600">{t.statSavings}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-950 mb-1">&lt; 3 Days</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600">{t.statWait}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Cost Transparency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">{t.calculatorTitle}</h2>
            <p className="text-slate-600">{t.calculatorSub}</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor={procedureSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.selectProcedure}
                </label>
                <select
                  id={procedureSelectId}
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {SPECIALTIES.map((spec) => (
                    <option key={spec.id} value={spec.id}>
                      {spec.name}
                    </option>
                  ))}
                </select>
                <span className="inline-block mt-2 text-xs font-medium text-blue-600">
                  Standard Recovery Stay: {activeSpecialty.recoveryDays}
                </span>
              </div>

              <div>
                <label htmlFor={benchmarkSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.compareAgainst}
                </label>
                <select
                  id={benchmarkSelectId}
                  value={benchmarkCountry}
                  onChange={(e) => setBenchmarkCountry(e.target.value as 'us' | 'uae' | 'india')}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option value="us">USA / UK Benchmark</option>
                  <option value="uae">UAE / Turkey Benchmark</option>
                  <option value="india">India Benchmark</option>
                </select>
              </div>

              <div>
                <label htmlFor={packageSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.packageTier}
                </label>
                <select
                  id={packageSelectId}
                  value={packageTier}
                  onChange={(e) => setPackageTier(e.target.value as 'essential' | 'luxury')}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option value="essential">Essential Medical Care (+$450)</option>
                  <option value="luxury">Luxury VIP Concierge (+$1,200)</option>
                </select>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="bg-slate-900 text-white p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-medium text-slate-400">{t.estimatedTotal}</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">
                  ${totalIranEstimate.toLocaleString()}{' '}
                  <span className="text-sm font-normal text-slate-400">USD</span>
                </div>
              </div>

              <div className="hidden sm:block h-12 w-px bg-slate-700" />

              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-medium text-slate-400">
                  {benchmarkCountry === 'us' ? 'USA / UK' : benchmarkCountry === 'uae' ? 'UAE / Turkey' : 'India'} Benchmark
                </div>
                <div className="text-2xl font-bold text-slate-300 line-through">
                  ${currentBenchmarkPrice.toLocaleString()} USD
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 text-center sm:text-right">
                <div className="text-xs uppercase tracking-wider font-semibold text-blue-300">{t.estimatedSavings}</div>
                <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">
                  ~{savingsPercent}% (${estimatedSavings.toLocaleString()} USD)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">{t.timelineTitle}</h2>
            <p className="text-slate-600">{t.timelineSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">1</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Clinical Review & Visa</h3>
              <p className="text-sm text-slate-600">Review of records by lead surgeon, followed by official Iran T-Visa authorization in 48h.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">2</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">VIP Arrival & Transfer</h3>
              <p className="text-sm text-slate-600">Personal meet-and-greet at airport customs, private chauffeur, and luxury hotel check-in.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">3</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Hospital & Surgery</h3>
              <p className="text-sm text-slate-600">IPD admissions, pre-op tests, treatment performed by department heads, and companion support.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">4</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Monitored Recovery</h3>
              <p className="text-sm text-slate-600">Post-operative hotel monitoring, customized clinical meals, and dedicated interpreter.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">5</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Fit-to-Fly & Follow-up</h3>
              <p className="text-sm text-slate-600">Final specialist sign-off, official medical flight clearance, and continuous telemedicine care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Pricing Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Transparent Benchmark Pricing</h2>
            <p className="text-slate-600">Verified cost comparisons across leading medical destinations worldwide.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 uppercase font-semibold text-xs border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4">Specialty & Recovery</th>
                  <th scope="col" className="px-6 py-4 text-blue-600">Iran (Maham Health)</th>
                  <th scope="col" className="px-6 py-4">India</th>
                  <th scope="col" className="px-6 py-4">UAE / Turkey</th>
                  <th scope="col" className="px-6 py-4">USA / UK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SPECIALTIES.map((spec) => (
                  <tr key={spec.id} className="hover:bg-slate-50/75 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      <div>{spec.name}</div>
                      <div className="text-xs font-normal text-slate-500 mt-0.5">{spec.recoveryDays}</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-blue-600 text-base">${spec.iranPrice.toLocaleString()}</td>
                    <td className="px-6 py-4">${spec.indiaPrice.toLocaleString()}</td>
                    <td className="px-6 py-4">${spec.uaeTurkeyPrice.toLocaleString()}</td>
                    <td className="px-6 py-4 font-medium text-slate-900">${spec.usUkPrice.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Concierge Packages */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">{t.packagesTitle}</h2>
            <p className="text-slate-600">{t.packagesSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Essential */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Clinical Focus</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">Essential Medical Care</h3>
                <ul className="space-y-3 text-sm text-slate-600 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Priority IPD appointment scheduling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Airport reception & private hospital transfers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Dedicated medical translator during procedures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Official Iran T-Visa authorization letter</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => { setPackageTier('essential'); setIsModalOpen(true); }}
                className="w-full py-3 px-4 rounded-xl font-semibold bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors"
              >
                Select Essential Plan
              </button>
            </div>

            {/* Luxury VIP */}
            <div className="p-8 rounded-2xl bg-blue-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Signature Concierge</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">Luxury VIP Concierge</h3>
                <ul className="space-y-3 text-sm text-blue-100 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>5-Star Suite accommodation (Espinas Palace / Wisteria)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Private dedicated chauffeur on standby 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>VIP fast-track airport customs and lounge access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Post-operative nutritional care & companion lodging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Direct access to department head surgeons</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => { setPackageTier('luxury'); setIsModalOpen(true); }}
                className="w-full py-3 px-4 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                Select Luxury VIP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/989055240772"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 transition-transform duration-200 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold text-sm hidden sm:inline">WhatsApp Concierge</span>
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Maham Health. Soorin Maham Trade & Industry Development Corp.</p>
          <p className="mt-2 text-slate-500">Tehran • Dubai • Dar es Salaam • New Delhi</p>
        </div>
      </footer>

      {/* 3-Step Consultation Wizard Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            {!submitted ? (
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">
                      {wizardStep === 1 ? t.step1 : wizardStep === 2 ? t.step2 : t.step3}
                    </h3>
                    <p className="text-xs text-slate-500">Step {wizardStep} of 3</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={wizardStep === 3 ? handleSubmit : (e) => { e.preventDefault(); setWizardStep(wizardStep + 1); }}>
                  {wizardStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-600 mb-2">Select Procedure</label>
                        <select
                          value={selectedSpecialty}
                          onChange={(e) => setSelectedSpecialty(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 font-medium"
                        >
                          {SPECIALTIES.map((spec) => (
                            <option key={spec.id} value={spec.id}>{spec.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-900">
                        Typical recovery stay: <strong>{activeSpecialty.recoveryDays}</strong>
                      </div>

                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        Continue to Patient Profile
                      </button>
                    </div>
                  )}

                  {wizardStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-600 mb-2">Desired Timeframe</label>
                        <select
                          value={timeframe}
                          onChange={(e) => setTimeframe(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                        >
                          <option>Immediately (Within 2 Weeks)</option>
                          <option>Within 1 Month</option>
                          <option>1–3 Months</option>
                          <option>Flexible / Planning Ahead</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase text-slate-600 mb-2">Gender</label>
                          <select
                            value={patientGender}
                            onChange={(e) => setPatientGender(e.target.value as 'Male' | 'Female')}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                          >
                            <option value="Male">{t.male}</option>
                            <option value="Female">{t.female}</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase text-slate-600 mb-2">Age</label>
                          <input
                            type="number"
                            required
                            min="1"
                            max="110"
                            value={patientAge}
                            onChange={(e) => setPatientAge(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                            placeholder="e.g. 42"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-600 mb-2">Brief Medical Notes</label>
                        <textarea
                          rows={3}
                          value={medicalNotes}
                          onChange={(e) => setMedicalNotes(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                          placeholder="Relevant medical history or current diagnosis..."
                        />
                      </div>

                      <div className="flex gap-3 mt-4">
                        <button
                          type="button"
                          onClick={() => setWizardStep(1)}
                          className="w-1/3 border border-slate-300 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setWizardStep(3)}
                          className="w-2/3 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700"
                        >
                          Continue to Contact
                        </button>
                      </div>
                    </div>
                  )}

                  {wizardStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Full Legal Name</label>
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                          placeholder="As printed in passport"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Country of Origin</label>
                          <input
                            type="text"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                            placeholder="e.g. Tanzania, UAE, UK"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">WhatsApp Number</label>
                          <input
                            type="tel"
                            required
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                            placeholder="+..."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800"
                          placeholder="doctor-review@..."
                        />
                      </div>

                      <div className="flex gap-3 mt-6">
                        <button
                          type="button"
                          onClick={() => setWizardStep(2)}
                          className="w-1/3 border border-slate-300 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? 'Submitting...' : t.submit}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Our clinical director and assigned concierge case manager will review your records discreetly.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Instant Priority Review via WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
