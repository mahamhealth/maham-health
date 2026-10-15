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
    statPartners: '+٤٠ مركزاً طبياً معتمداً',
    statSpecialists: '+١٨٠ طبيباً واستشارياً',
    statSavings: 'وفر ٧٠–٩٠٪ من التكاليف',
    statWait: 'أقل من ٣ أيام للمواعيد',
    calculatorTitle: 'حاسبة توفير التكاليف العلاجية',
    calculatorSub: 'اختر الإجراء الطبي والوجهة المقارنة لمعرفة المبلغ الموفر بدقة.',
    selectProcedure: 'اختر العلاج أو العملية',
    compareAgainst: 'مقارنة التكلفة مع',
    packageTier: 'باقة الكونسيرج والإقامة',
    estimatedTotal: 'التكلفة التقديرية في إيران',
    estimatedSavings: 'إجمالي التوفير التقديري',
    timelineTitle: 'رحلة المريض المتكاملة',
    timelineSub: 'رحلة رعاية طبية وإقامة فاخرة من أول استشارة حتى الشفاء التام.',
    packagesTitle: 'باقات الكونسيرج والضيافة',
    packagesSub: 'اختر مستوى الخدمات اللوجستية والفندقية المصاحبة لرحلتك العلاجية.',
    step1: 'الخطوة ١: التخصص الطبي',
    step2: 'الخطوة ٢: بيانات المريض',
    step3: 'الخطوة ٣: بيانات الاتصال والباقة',
    submit: 'إرسال الطلب بسرية تامة',
    male: 'ذكر',
    female: 'أنثى'
  },
  sw: {
    brand: 'Maham Health',
    badge: 'Huduma Maalum za Matibabu • Hospitali Zilizoidhinishwa za IPD',
    heroTitle: 'Matibabu ya Kimataifa, Okoa 70–90% ya Gharama Duniani',
    heroSub: 'Safari maalum za matibabu ya kibinafsi katika hospitali zinazoongoza nchini Iran na madaktari bingwa.',
    startAssessment: 'Anza Tathmini ya Bure',
    whatsappDirect: 'Wasiliana kwa WhatsApp',
    statPartners: 'Vituo 40+ vya IPD',
    statSpecialists: 'Madaktari Bingwa 180+',
    statSavings: 'Akiba ya 70–90%',
    statWait: 'Chini ya Siku 3',
    calculatorTitle: 'Kikokotoo cha Akiba ya Gharama',
    calculatorSub: 'Chagua huduma na nchi ya kulinganisha kuona kiwango utakachookoa.',
    selectProcedure: 'Chagua Huduma ya Matibabu',
    compareAgainst: 'Linganisha na Gharama za',
    packageTier: 'Kiwango cha Huduma za Concierge',
    estimatedTotal: 'Gharama ya Matibabu Iran',
    estimatedSavings: 'Kiwango Unachookoa',
    timelineTitle: 'Hatua za Safari Yako',
    timelineSub: 'Mpangilio madhubuti kuanzia ukaguzi wa ripoti hadi kupona kabisa.',
    packagesTitle: 'Vifurushi vya Ukarimu na Concierge',
    packagesSub: 'Chagua kiwango cha usaidizi na huduma za malazi unachohitaji.',
    step1: 'Hatua 1: Aina ya Matibabu',
    step2: 'Hatua 2: Wasifu wa Mgonjwa',
    step3: 'Hatua 3: Mawasiliano na Kifurushi',
    submit: 'Tuma Maombi kwa Usiri',
    male: 'Mwanaume',
    female: 'Mwanamke'
  },
  hi: {
    brand: 'महाम हेल्थ',
    badge: 'प्रीमियर मेडिकल कंसीयर्ज • अधिकृत IPD पार्टनर अस्पताल',
    heroTitle: 'विश्व स्तरीय स्वास्थ्य सेवा, वैश्विक लागत से 70-90% कम पर',
    heroSub: 'विशेषज्ञ डॉक्टरों और वीआईपी कंसीयर्ज सेवाओं के साथ ईरान के अग्रणी अस्पतालों में व्यक्तिगत चिकित्सा यात्राएं।',
    startAssessment: 'निःशुल्क मूल्यांकन शुरू करें',
    whatsappDirect: 'व्हाट्सएप पर बात करें',
    statPartners: '40+ IPD पार्टनर अस्पताल',
    statSpecialists: '180+ विशेषज्ञ डॉक्टर्स',
    statSavings: '70–90% बचत',
    statWait: '< 3 दिन प्रतीक्षा समय',
    calculatorTitle: 'लागत बचत कैलकुलेटर',
    calculatorSub: 'अपनी प्रक्रिया चुनें और अनुमानित बचत देखने के लिए तुलना करें।',
    selectProcedure: 'उपचार / प्रक्रिया चुनें',
    compareAgainst: 'तुलना का मानक चुनें',
    packageTier: 'कंसीयर्ज पैकेज स्तर',
    estimatedTotal: 'ईरान में अनुमानित उपचार लागत',
    estimatedSavings: 'आपकी अनुमानित कुल बचत',
    timelineTitle: 'रोगी यात्रा के चरण',
    timelineSub: 'परामर्श से लेकर पूरी रिकवरी तक एक निर्बाध और सुरक्षित चिकित्सा यात्रा।',
    packagesTitle: 'कंसीयर्ज और आतिथ्य पैकेज',
    packagesSub: 'अपनी और अपने साथी की जरूरतों के अनुसार उपयुक्त स्तर चुनें।',
    step1: 'चरण 1: नैदानिक सेवा',
    step2: 'चरण 2: रोगी विवरण',
    step3: 'चरण 3: संपर्क और पैकेज',
    submit: 'गोपनीय अनुरोध भेजें',
    male: 'पुरुष',
    female: 'महिला'
  },
  ur: {
    brand: 'ماہم ہیلتھ',
    badge: 'پریمیئر میڈیکل کونسیرج • باضابطہ IPD پارٹنر ہسپتال',
    heroTitle: 'عالمی معیار کا علاج، بین الاقوامی اخراجات سے 70 تا 90 فیصد کم',
    heroSub: 'ایران کے اعلیٰ ترین ہسپتالوں میں معروف ماہرین اور وی آئی پی سہولیات کے ساتھ نجی طبی اسفار۔',
    startAssessment: 'مفت جائزہ شروع کریں',
    whatsappDirect: 'واٹس ایپ پر رابطہ کریں',
    statPartners: '+40 پارٹنر مراکز',
    statSpecialists: '+180 بورڈ سرٹیفائیڈ ماہرین',
    statSavings: '70–90% بچت',
    statWait: '3 دن سے کم انتظار',
    calculatorTitle: 'لاگت میں بچت کا کیلکولیٹر',
    calculatorSub: 'اپنا طریقہ علاج منتخب کریں اور تخمینہ شدہ بچت معلوم کریں۔',
    selectProcedure: 'طریقہ علاج منتخب کریں',
    compareAgainst: 'موازنہ کس ملک سے کریں',
    packageTier: 'کونسیرج پیکیج کا درجہ',
    estimatedTotal: 'ایران میں علاج کی تخمینہ لاگت',
    estimatedSavings: 'آپ کی کل تخمینہ بچت',
    timelineTitle: 'مریض کا سفری لائحہ عمل',
    timelineSub: 'پہلے مشورے سے مکمل صحت یابی تک کا ایک منظم اور محفوظ سفر۔',
    packagesTitle: 'کونسیرج اور رہائش کے پیکیجز',
    packagesSub: 'اپنی اور اپنے تیماردار کی ضروریات کے مطابق پیکیج کا انتخاب کریں۔',
    step1: 'مرحلہ 1: علاج کا انتخاب',
    step2: 'مرحلہ 2: مریض کی معلومات',
    step3: 'مرحلہ 3: رابطہ اور پیکیج',
    submit: 'خفیہ درخواست جمع کروائیں',
    male: 'مرد',
    female: 'عورت'
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>('rhinoplasty');
  const [benchmarkRegion, setBenchmarkRegion] = useState<'usUk' | 'uaeTurkey' | 'india'>('usUk');
  const [selectedTier, setSelectedTier] = useState<'essential' | 'vip'>('vip');
  
  // Wizard State
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [wizardSpecialty, setWizardSpecialty] = useState<string>('rhinoplasty');
  const [timeframe, setTimeframe] = useState<string>('immediate');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [medicalNotes, setMedicalNotes] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [wizardTier, setWizardTier] = useState<'essential' | 'vip'>('vip');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const t = I18N[lang];
  const isRtl = lang === 'fa' || lang === 'ar' || lang === 'ur';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [lang, isRtl]);
  
  const selectedSpecialty = SPECIALTIES.find(s => s.id === selectedSpecialtyId) || SPECIALTIES[0];
  const benchmarkCost = benchmarkRegion === 'usUk' 
    ? selectedSpecialty.usUkPrice 
    : benchmarkRegion === 'uaeTurkey' 
      ? selectedSpecialty.uaeTurkeyPrice 
      : selectedSpecialty.indiaPrice;
      
  const tierCost = selectedTier === 'vip' ? 1400 : 650;
  const iranTotal = selectedSpecialty.iranPrice + tierCost;
  const totalSavings = Math.max(0, benchmarkCost - iranTotal);
  const savingsPct = Math.round((totalSavings / benchmarkCost) * 100);

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppWizardLink = () => {
    const text = encodeURIComponent(
      `Hello Maham Health,\n\nI would like to request a consultation:\n- Treatment: ${wizardSpecialty}\n- Timeframe: ${timeframe}\n- Name: ${fullName}\n- Country: ${country}\n- Selected Tier: ${wizardTier.toUpperCase()}`
    );
    return `https://wa.me/989055240772?text=${text}`;
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/989055240772"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:bg-[#20ba5a] transition duration-200"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm">WhatsApp</span>
      </a>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B3C95] flex items-center justify-center text-white font-bold text-xl shadow-md">
              M
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0B3C95] block leading-none">
                MAHAM HEALTH
              </span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                Soorin Maham Group
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
              {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded uppercase transition ${
                    lang === l ? 'bg-[#0B3C95] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="#consultation"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#0062E6] hover:bg-[#0B3C95] rounded-lg transition shadow-sm"
            >
              {t.startAssessment}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#0B3C95] text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-[#0062E6]" />
            {t.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3C95] tracking-tight max-w-4xl mx-auto leading-tight">
            {t.heroTitle}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            {t.heroSub}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#consultation"
              className="px-8 py-3.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl shadow-lg transition duration-200 flex items-center gap-2"
            >
              {t.startAssessment}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/989055240772"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white border border-slate-300 text-slate-700 hover:border-[#0062E6] font-semibold rounded-xl shadow-sm transition duration-200 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              {t.whatsappDirect}
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0B3C95]">40+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statPartners}</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0B3C95]">180+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statSpecialists}</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0062E6]">70–90%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statSavings}</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0B3C95]">&lt; 3 Days</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statWait}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0062E6] uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              Benchmark Analysis
            </div>
            <h2 className="text-3xl font-bold text-[#0B3C95]">{t.calculatorTitle}</h2>
            <p className="mt-3 text-slate-600">{t.calculatorSub}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.selectProcedure}
                </label>
                <select
                  value={selectedSpecialtyId}
                  onChange={(e) => setSelectedSpecialtyId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
                <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Typical recovery: {selectedSpecialty.recoveryDays}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.compareAgainst}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBenchmarkRegion('usUk')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border text-center transition ${
                      benchmarkRegion === 'usUk'
                        ? 'bg-[#0B3C95] border-[#0B3C95] text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    US / UK
                  </button>
                  <button
                    type="button"
                    onClick={() => setBenchmarkRegion('uaeTurkey')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border text-center transition ${
                      benchmarkRegion === 'uaeTurkey'
                        ? 'bg-[#0B3C95] border-[#0B3C95] text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    UAE / Turkey
                  </button>
                  <button
                    type="button"
                    onClick={() => setBenchmarkRegion('india')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border text-center transition ${
                      benchmarkRegion === 'india'
                        ? 'bg-[#0B3C95] border-[#0B3C95] text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    India
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.packageTier}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedTier('essential')}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      selectedTier === 'essential'
                        ? 'bg-blue-50/50 border-[#0062E6] text-[#0B3C95]'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div className="font-bold text-sm">Essential Care</div>
                    <div className="text-xs text-slate-500 mt-0.5">+$650 (Transfers + Interpreter)</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTier('vip')}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      selectedTier === 'vip'
                        ? 'bg-blue-50/50 border-[#0062E6] text-[#0B3C95]'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div className="font-bold text-sm">Luxury VIP</div>
                    <div className="text-xs text-slate-500 mt-0.5">+$1,400 (5★ Suite + Private Escort)</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 bg-[#0B3C95] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                  Cost Breakdown
                </div>
                <div className="mt-4 pb-4 border-b border-blue-800 flex justify-between items-center text-sm">
                  <span className="text-blue-100">Selected Benchmark Cost</span>
                  <span className="font-semibold line-through text-blue-300">
                    ${benchmarkCost.toLocaleString()}
                  </span>
                </div>
                <div className="mt-4 pb-4 border-b border-blue-800 flex justify-between items-center text-sm">
                  <span className="text-blue-100">Base Iran Clinical Cost</span>
                  <span className="font-semibold">${selectedSpecialty.iranPrice.toLocaleString()}</span>
                </div>
                <div className="mt-4 pb-4 border-b border-blue-800 flex justify-between items-center text-sm">
                  <span className="text-blue-100">Concierge Services</span>
                  <span className="font-semibold">${tierCost.toLocaleString()}</span>
                </div>
                <div className="mt-6">
                  <div className="text-xs font-medium text-blue-200">{t.estimatedTotal}</div>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    ${iranTotal.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-800">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-xs font-semibold text-blue-200">{t.estimatedSavings}</div>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    ${totalSavings.toLocaleString()}{' '}
                    <span className="text-sm font-semibold text-emerald-400">({savingsPct}% Saved)</span>
                  </div>
                </div>
                <a
                  href="#consultation"
                  className="mt-4 w-full py-3 bg-[#0062E6] hover:bg-blue-600 text-white font-semibold rounded-xl transition text-center block"
                >
                  Book Treatment at This Price
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Wizard Section */}
      <section id="consultation" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B3C95]">Schedule Confidential Assessment</h2>
            <p className="mt-2 text-slate-600 text-sm">
              Direct connection to medical directors and personalized quotation within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Successfully Received</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our senior international medical coordinator is reviewing your submission and will contact you via WhatsApp shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={getWhatsAppWizardLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl shadow-md transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Open in WhatsApp Directly
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* Wizard Steps Indicator */}
                <div className="grid grid-cols-3 gap-2 mb-8 pb-6 border-b border-slate-100 text-center">
                  <div
                    className={`text-xs font-bold py-1 border-b-2 ${
                      wizardStep === 1 ? 'border-[#0062E6] text-[#0062E6]' : 'border-transparent text-slate-400'
                    }`}
                  >
                    1. Treatment
                  </div>
                  <div
                    className={`text-xs font-bold py-1 border-b-2 ${
                      wizardStep === 2 ? 'border-[#0062E6] text-[#0062E6]' : 'border-transparent text-slate-400'
                    }`}
                  >
                    2. Profile
                  </div>
                  <div
                    className={`text-xs font-bold py-1 border-b-2 ${
                      wizardStep === 3 ? 'border-[#0062E6] text-[#0062E6]' : 'border-transparent text-slate-400'
                    }`}
                  >
                    3. Contact
                  </div>
                </div>

                <form onSubmit={handleWizardSubmit}>
                  {/* Step 1 */}
                  {wizardStep === 1 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Select Required Specialty / Treatment
                        </label>
                        <select
                          value={wizardSpecialty}
                          onChange={(e) => setWizardSpecialty(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        >
                          {SPECIALTIES.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={() => setWizardStep(2)}
                          className="px-6 py-2.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl transition flex items-center gap-2"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {wizardStep === 2 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Patient Age
                          </label>
                          <input
                            type="number"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="e.g. 38"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Gender
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          >
                            <option value="male">{t.male}</option>
                            <option value="female">{t.female}</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Preferred Travel Timeframe
                        </label>
                        <select
                          value={timeframe}
                          onChange={(e) => setTimeframe(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        >
                          <option value="immediate">Immediate (within 2 weeks)</option>
                          <option value="1month">Within 1 month</option>
                          <option value="planning">Exploring options / 2–3 months</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Medical History & Specific Requirements
                        </label>
                        <textarea
                          rows={3}
                          value={medicalNotes}
                          onChange={(e) => setMedicalNotes(e.target.value)}
                          placeholder="Describe condition, current medications, or previous surgeries..."
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none text-sm"
                        />
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setWizardStep(1)}
                          className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl transition"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setWizardStep(3)}
                          className="px-6 py-2.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl transition flex items-center gap-2"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {wizardStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1">
                            Country of Residence
                          </label>
                          <input
                            type="text"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="e.g. Tanzania, UAE, India"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1">
                            WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="+1234567890"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">
                          Concierge Package Preference
                        </label>
                        <select
                          value={wizardTier}
                          onChange={(e) => setWizardTier(e.target.value as 'essential' | 'vip')}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        >
                          <option value="essential">Essential Care Package</option>
                          <option value="vip">Luxury VIP Concierge Package</option>
                        </select>
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setWizardStep(2)}
                          className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl transition"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-2.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl transition shadow-md flex items-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          {t.submit}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-lg">MAHAM HEALTH</div>
            <p className="text-xs text-slate-400 mt-1">
              Part of Soorin Maham Trade & Industry Development Corp.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <span>Inquiries: health@maham-group.com</span>
            <span>WhatsApp: +98 905 524 0772</span>
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Maham Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
