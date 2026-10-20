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
    name: 'Rhinoplasty & Facial Plastic Surgery',
    category: 'Plastic Surgery',
    recoveryDays: '7–10 days',
    iranPrice: 1650,
    indiaPrice: 2800,
    uaeTurkeyPrice: 4500,
    usUkPrice: 8500
  },
  {
    id: 'dental-implants',
    name: 'Full-Mouth Dental Implants (Per Arch)',
    category: 'Dentistry',
    recoveryDays: '5–7 days',
    iranPrice: 550,
    indiaPrice: 800,
    uaeTurkeyPrice: 1500,
    usUkPrice: 2800
  },
  {
    id: 'lasik',
    name: 'LASIK Laser Eye Surgery (Both Eyes)',
    category: 'Ophthalmology',
    recoveryDays: '2–3 days',
    iranPrice: 1100,
    indiaPrice: 1400,
    uaeTurkeyPrice: 2800,
    usUkPrice: 4200
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplantation FUE/DHI (4000+ Grafts)',
    category: 'Hair Restoration',
    recoveryDays: '4–5 days',
    iranPrice: 1250,
    indiaPrice: 2000,
    uaeTurkeyPrice: 2600,
    usUkPrice: 6000
  },
  {
    id: 'ivf',
    name: 'IVF Fertility Treatment (Full Cycle)',
    category: 'Fertility & IVF',
    recoveryDays: '12–14 days',
    iranPrice: 3200,
    indiaPrice: 4500,
    uaeTurkeyPrice: 7500,
    usUkPrice: 15000
  },
  {
    id: 'joint-replacement',
    name: 'Orthopedic Joint & Knee Replacement',
    category: 'Orthopedics',
    recoveryDays: '14–21 days',
    iranPrice: 4200,
    indiaPrice: 7500,
    uaeTurkeyPrice: 11000,
    usUkPrice: 22000
  },
  {
    id: 'cardiology-stent',
    name: 'Cardiology Angiography & Stent Placement',
    category: 'Cardiology',
    recoveryDays: '5–7 days',
    iranPrice: 3800,
    indiaPrice: 6500,
    uaeTurkeyPrice: 9500,
    usUkPrice: 20000
  },
  {
    id: 'oncology-protocol',
    name: 'Oncology Initial Protocol & Evaluation',
    category: 'Oncology',
    recoveryDays: '10–14 days',
    iranPrice: 4500,
    indiaPrice: 8000,
    uaeTurkeyPrice: 12000,
    usUkPrice: 25000
  },
  {
    id: 'bariatric-sleeve',
    name: 'Bariatric Sleeve Gastrectomy',
    category: 'Weight Loss',
    recoveryDays: '7–10 days',
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
  usUk: string;
  uaeTurkey: string;
  india: string;
}> = {
  en: {
    brand: 'MAHAM HEALTH',
    badge: 'Premier Medical Concierge • Official IPD Partner Hospitals',
    heroTitle: 'World-Class Healthcare, At 70–90% Below Global Costs',
    heroSub: 'Seamless medical-tourism coordination across Iran’s elite JCI-accredited hospitals. VIP visa fast-tracking, luxury recovery suites, and dedicated personal medical concierges.',
    startAssessment: 'Start Free Assessment',
    whatsappDirect: 'WhatsApp Concierge',
    statPartners: '40+ IPD Partner Centers',
    statSpecialists: '180+ Board-Certified Specialists',
    statSavings: '70–90% Typical Savings',
    statWait: '< 3 Days Wait Time',
    calculatorTitle: 'Interactive Savings Calculator',
    calculatorSub: 'Select a procedure and compare Iran’s transparent treatment costs against major global healthcare hubs.',
    selectProcedure: 'Select Medical Procedure',
    compareAgainst: 'Compare Against Hub',
    packageTier: 'Concierge Package Tier',
    estimatedTotal: 'Estimated Total in Iran',
    estimatedSavings: 'Your Estimated Savings',
    timelineTitle: 'Your 5-Step Patient Journey',
    timelineSub: 'From initial records review to safe post-operative return, our dedicated concierge team manages every detail.',
    packagesTitle: 'Curated Concierge Packages',
    packagesSub: 'All-inclusive coordination designed for international patients seeking absolute comfort and clinical precision.',
    step1: '1. Virtual Consultation',
    step2: '2. Travel & Visa Fast-Track',
    step3: '3. Arrival & Treatment',
    submit: 'Submit Consultation Request',
    male: 'Male',
    female: 'Female',
    usUk: 'US / UK Average',
    uaeTurkey: 'UAE / Turkey Average',
    india: 'India Average'
  },
  fa: {
    brand: 'ماهام هلث',
    badge: 'کنسیرژ پیشتاز درمان • بیمارستان‌های تخصصی همکار',
    heroTitle: 'درمان در سطح جهانی با ۷۰ تا ۹۰ درصد هزینه کمتر',
    heroSub: 'هماهنگی یکپارچه گردشگری سلامت در برترین بیمارستان‌های دارای استاندارد بین‌المللی در ایران. دریافت سریع ویزای درمانی، سوئیت‌های اقامتی لوکس و همراهی پزشکی اختصاصی.',
    startAssessment: 'شروع ارزیابی رایگان',
    whatsappDirect: 'ارتباط با واتساپ',
    statPartners: '+۴۰ مرکز درمانی همکار',
    statSpecialists: '+۱۸۰ پزشک فوق تخصص',
    statSavings: '۷۰ الی ۹۰٪ صرفه‌جویی',
    statWait: 'کمتر از ۳ روز انتظار',
    calculatorTitle: 'محاسبه‌گر آنلاین هزینه‌ها',
    calculatorSub: 'تخصص مورد نظر خود را انتخاب کرده و هزینه‌های شفاف درمان در ایران را با مراکز معتبر جهانی مقایسه کنید.',
    selectProcedure: 'انتخاب عمل جراحی یا درمان',
    compareAgainst: 'مقایسه با هاب پزشکی',
    packageTier: 'سطح پکیج خدمات کنسیرژ',
    estimatedTotal: 'برآورد کل هزینه‌ها در ایران',
    estimatedSavings: 'صرفه‌جویی مالی تخمینی شما',
    timelineTitle: 'مسیر ۵ مرحله‌ای درمان شما',
    timelineSub: 'از بررسی اولیه پرونده پزشکی تا بازگشت ایمن پس از عمل، تیم کنسیرژ ماهام در کنار شماست.',
    packagesTitle: 'پکیج‌های اختصاصی کنسیرژ',
    packagesSub: 'خدمات جامع و هماهنگ‌شده برای بیماران بین‌المللی به همراه بالاترین سطح رفاه و دقت بالینی.',
    step1: '۱. مشاوره آنلاین و ارزیابی',
    step2: '۲. صدور فوری ویزای پزشکی',
    step3: '۳. استقبال، پذیرش و درمان',
    submit: 'ارسال درخواست مشاوره',
    male: 'مرد',
    female: 'زن',
    usUk: 'میانگین آمریکا / انگلستان',
    uaeTurkey: 'میانگین امارات / ترکیه',
    india: 'میانگین هند'
  },
  ar: {
    brand: 'مهام هيلث',
    badge: 'الكونسيرج الطبي الرائد • المستشفيات الاعتماد الدولي',
    heroTitle: 'رعاية صحية عالمية المستوى، بأسعار أقل بنسبة 70-90٪',
    heroSub: 'تنسيق سلس للسياحة العلاجية عبر أرقى المستشفيات المعتمدة في إيران. استخراج سريع للتأشيرات الطبية، أجنحة نقاهة فاخرة، ومرافق طبي شخصي.',
    startAssessment: 'ابدأ التقييم المجاني',
    whatsappDirect: 'مراسلة الواتساب',
    statPartners: '+40 مركزاً معتمداً',
    statSpecialists: '+180 أخصائياً معلماً',
    statSavings: '70-90٪ توفير تقديري',
    statWait: 'أقل من 3 أيام انتظار',
    calculatorTitle: 'حاسبة التوفير التفاعلية',
    calculatorSub: 'اختر إجراءً طبياً وقارن تكاليف العلاج الشفافة في إيران بالمراكز الطبية العالمية الكبرى.',
    selectProcedure: 'اختر الإجراء الطبي',
    compareAgainst: 'المقارنة مع المركز',
    packageTier: 'مستوى باقة الكونسيرج',
    estimatedTotal: 'الإجمالي المقدر في إيران',
    estimatedSavings: 'توفيرك المقدر',
    timelineTitle: 'رحلة المريض المكونة من 5 خطوات',
    timelineSub: 'من مراجعة السجلات الأولية إلى العودة الآمنة بعد العملية، يدير فريقنا كل التفاصيل.',
    packagesTitle: 'باقات الكونسيرج المختارة',
    packagesSub: 'تنسيق شامل مصمم للمرضى الدوليين الساعين للراحة التامة والدقة السريرية.',
    step1: '1. الاستشارة الافتراضية',
    step2: '2. تأشيرة السفر السريعة',
    step3: '3. الوصول والعلاج',
    submit: 'إرسال طلب الاستشارة',
    male: 'ذكر',
    female: 'أنثى',
    usUk: 'متوسط أمريكا / بريطانيا',
    uaeTurkey: 'متوسط الإمارات / تركيا',
    india: 'متوسط الهند'
  },
  sw: {
    brand: 'Maham Health',
    badge: 'Huduma za Uganga Bingwa • Hospitali Zilizoidhinishwa',
    heroTitle: 'Huduma Bora za Afya, Kwa 70–90% Chini ya Gharama za Kimataifa',
    heroSub: 'Uratibu wa utalii wa kimatibabu kupitia hospitali kuu za Iran zenye viwango vya JCI. Huduma ya haraka ya visa ya matibabu, vyumba vya kifahari vya nafuu na wasaidizi maalum.',
    startAssessment: 'Anza Tathmini ya Bure',
    whatsappDirect: 'WhatsApp ya Usaidizi',
    statPartners: 'Vituo 40+ Vinavyoshirikiana',
    statSpecialists: 'Wataalamu 180+ Bingwa',
    statSavings: '70–90% Akiba ya Kawaida',
    statWait: '< Siku 3 za Kusubiri',
    calculatorTitle: 'Kokotoo cha Akiba',
    calculatorSub: 'Chagua huduma ya afya na ulinganishe gharama za uwazi nchini Iran na vituo vikuu vya dunia.',
    selectProcedure: 'Chagua Utaratibu wa Matibabu',
    compareAgainst: 'Linganisha Na',
    packageTier: 'Ngazi ya Kifurushi',
    estimatedTotal: 'Makadirio ya Jumla Iran',
    estimatedSavings: 'Akiba Yako Inayokadiriwa',
    timelineTitle: 'Safari Yako ya Hatua 5',
    timelineSub: 'Kuanzia ukaguzi wa awali wa kumbukumbu hadi kurejea salama baada ya matibabu.',
    packagesTitle: 'Vifurushi Vilivyochaguliwa Maalum',
    packagesSub: 'Uratibu wa kina ulioundwa kwa ajili ya wagonjwa wa kimataifa.',
    step1: '1. Ushauri wa Mtandaoni',
    step2: '2. Visa ya Haraka',
    step3: '3. Kuwasili na Matibabu',
    submit: 'Wasilisha Ombi la Ushauri',
    male: 'Mme',
    female: 'Mke',
    usUk: 'Wastani wa Marekani / Uingereza',
    uaeTurkey: 'Wastani wa UAE / Uturuki',
    india: 'Wastani wa India'
  },
  hi: {
    brand: 'महाम हेल्थ',
    badge: 'प्रमुख मेडिकल कंसierge • आधिकारिक आईपी पार्टनर अस्पताल',
    heroTitle: 'विश्व स्तरीय स्वास्थ्य सेवा, वैश्विक लागत से 70-90% कम',
    heroSub: 'ईरान के शीर्ष JCI-मान्यता प्राप्त अस्पतालों में सहज चिकित्सा-पर्यटन समन्वय। वीआईपी वीज़ा फास्ट-ट्रैकिंग, और समर्पित व्यक्तिगत मेडिकल कंसierge।',
    startAssessment: 'निःशुल्क मूल्यांकन शुरू करें',
    whatsappDirect: 'व्हाट्सएप कंसierge',
    statPartners: '40+ आईपी पार्टनर केंद्र',
    statSpecialists: '180+ बोर्ड-प्रमाणित विशेषज्ञ',
    statSavings: '70–90% विशिष्ट बचत',
    statWait: '< 3 दिन प्रतीक्षा समय',
    calculatorTitle: 'इंटरैक्टिव बचत कैलकुलेटर',
    calculatorSub: 'एक प्रक्रिया चुनें और प्रमुख वैश्विक स्वास्थ्य केंद्रों के मुकाबले ईरान की पारदर्शी लागत की तुलना करें।',
    selectProcedure: 'चिकित्सा प्रक्रिया चुनें',
    compareAgainst: 'तुलना केंद्र',
    packageTier: 'कंसierge पैकेज टियर',
    estimatedTotal: 'ईरान में अनुमानित कुल लागत',
    estimatedSavings: 'आपकी अनुमानित बचत',
    timelineTitle: 'आपकी 5-चरणीय रोगी यात्रा',
    timelineSub: 'प्रारंभिक रिकॉर्ड समीक्षा से लेकर सुरक्षित पोस्ट-ऑपरेटिव वापसी तक, हमारी टीम हर विवरण का प्रबंधन करती है।',
    packagesTitle: 'क्यूरेटेड कंसierge पैकेज',
    packagesSub: 'पूर्ण आराम चाहने वाले अंतर्राष्ट्रीय रोगियों के लिए डिज़ाइन किया गया सर्व-समावेशी समन्वय।',
    step1: '1. वर्चुअल परामर्श',
    step2: '2. यात्रा और वीज़ा फास्ट-ट्रैक',
    step3: '3. आगमन और उपचार',
    submit: 'परामर्श अनुरोध सबमिट करें',
    male: 'पुरुष',
    female: 'महिला',
    usUk: 'अमेरिका / यूके औसत',
    uaeTurkey: 'यूएई / तुर्की औसत',
    india: 'भारत औसत'
  },
  ur: {
    brand: 'ماہم ہیلتھ',
    badge: 'پریمیئر میڈیکل کنسیرج • آفیشل آئی پی ڈی پارٹنر اسپتال',
    heroTitle: 'عالمی معیار کی صحت کی دیکھ بھال، عالمی لاگت سے 70-90% کم',
    heroSub: 'ایران کے اعلی ترین جے سی آئی سے منظور شدہ اسپتالوں میں طبی سیاحت کا ہموار امتزاج۔ وی آئی پی ویزا فاسٹ ٹریکنگ اور ذاتی طبی کنسیرج۔',
    startAssessment: 'مفت تشخیص شروع کریں',
    whatsappDirect: 'واٹس ایپ رابطہ',
    statPartners: '40+ آئی پی ڈی پارٹنر مراکز',
    statSpecialists: '180+ ماہرین صحت',
    statSavings: '70-90% عام بچت',
    statWait: '< 3 دن انتظار کا وقت',
    calculatorTitle: 'انٹرایکٹو بچت کیلکولیٹر',
    calculatorSub: 'ایک طریقہ کار منتخب کریں اور ایران میں علاج کے شفاف اخراجات کا موازنہ عالمی مراکز سے کریں۔',
    selectProcedure: 'طبی طریقہ کار منتخب کریں',
    compareAgainst: 'موازنہ کا مرکز',
    packageTier: 'کنسیرج پیکیج ٹियर',
    estimatedTotal: 'ایران میں تخمینی کل لاگت',
    estimatedSavings: 'آپ کی تخمینی بچت',
    timelineTitle: 'آپ کا 5 مراحل کا مریض کا سفر',
    timelineSub: 'ابتدائی ریکارڈ کے جائزے سے لے کر محفوظ واپسی تک، ہماری سرشار ٹیم ہر تفصیل کا انتظام کرتی ہے۔',
    packagesTitle: 'منتخب کنسیرج پیکجز',
    packagesSub: 'بین الاقوامی مریضوں کے لیے تمام شمولیت کا رابطہ۔',
    step1: '1. ورچوئل مشاورت',
    step2: '2. سفری ویزا فاسٹ ٹریک',
    step3: '3. آمد اور علاج',
    submit: 'مشاورت کی درخواست جمع کروائیں',
    male: 'مرد',
    female: 'عورت',
    usUk: 'امریکہ / برطانیہ اوسط',
    uaeTurkey: 'متحدہ عرب امارات / ترکی اوسط',
    india: 'بھارت اوسط'
  }
};

type Props = { initialLanguage?: Language };

export default function HomePage({ initialLanguage = 'en' }: Props) {
  const [lang, setLang] = useState<Language>(initialLanguage || 'en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  // Consultation Wizard State
  const [specialty, setSpecialty] = useState(SPECIALTIES[0].id);
  const [timeframe, setTimeframe] = useState('Within 30 days');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [notes, setNotes] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState<'Essential Care' | 'Luxury VIP Concierge'>('Luxury VIP Concierge');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Calculator State
  const [calcSpecialtyId, setCalcSpecialtyId] = useState(SPECIALTIES[0].id);
  const [calcBenchmark, setCalcBenchmark] = useState<'us' | 'uae' | 'india'>('us');
  const [calcPackage, setCalcPackage] = useState<'essential' | 'vip'>('vip');

  // Form IDs for accessibility
  const specialtyId = useId();
  const timeframeId = useId();
  const ageId = useId();
  const notesId = useId();
  const nameId = useId();
  const countryId = useId();
  const whatsappId = useId();
  const emailId = useId();

  const selectedCalcSpecialty = SPECIALTIES.find((s) => s.id === calcSpecialtyId) || SPECIALTIES[0];
  const packageOffset = calcPackage === 'vip' ? 1200 : 450;
  const iranTotal = selectedCalcSpecialty.iranPrice + packageOffset;
  const benchmarkPrice =
    calcBenchmark === 'us'
      ? selectedCalcSpecialty.usUkPrice
      : calcBenchmark === 'uae'
      ? selectedCalcSpecialty.uaeTurkeyPrice
      : selectedCalcSpecialty.indiaPrice;
  const dollarSavings = Math.max(0, benchmarkPrice - iranTotal);
  const percentSavings = Math.round((dollarSavings / benchmarkPrice) * 100);

  const t = I18N[lang] || I18N.en;
  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mqakdgrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ specialty, timeframe, age, gender, notes, name, country, whatsapp, email, tier })
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to submit request. Please try again or contact via WhatsApp.');
      }
    } catch {
      alert('Network error. Please try reaching us directly on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  const selectedSpecialtyObj = SPECIALTIES.find((s) => s.id === specialty) || SPECIALTIES[0];
  const whatsappUrl = `https://wa.me/989055240772?text=Hello Maham Health Concierge, I am interested in ${encodeURIComponent(
    selectedSpecialtyObj.name
  )} and would like to arrange a consultation.`;

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-[#08111d] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#08111d]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 flex items-center justify-center shadow-lg shadow-blue-900/30 border border-amber-400/30">
              <span className="text-white font-black text-xl tracking-tighter">M</span>
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
                {t.brand}
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                  IPD Partner
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Soorin Maham Medical Concierge Group</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-lg px-2 py-1.5">
              <Globe2 className="w-4 h-4 text-amber-400 mr-1.5 rtl:ml-1.5 rtl:mr-0" />
              <select
                aria-label="Select Language"
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer pr-4"
              >
                <option value="en" className="bg-slate-900 text-slate-200">English</option>
                <option value="fa" className="bg-slate-900 text-slate-200">فارسی</option>
                <option value="ar" className="bg-slate-900 text-slate-200">العربية</option>
                <option value="sw" className="bg-slate-900 text-slate-200">Kiswahili</option>
                <option value="hi" className="bg-slate-900 text-slate-200">हिन्दी</option>
                <option value="ur" className="bg-slate-900 text-slate-200">اردو</option>
              </select>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setSubmitted(false);
                setIsModalOpen(true);
              }}
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200 border border-blue-400/30"
            >
              {t.startAssessment}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#08111d] to-[#08111d] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-amber-300 text-xs font-medium mb-6 backdrop-blur-md shadow-inner">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
              {t.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setStep(1);
                  setSubmitted(false);
                  setIsModalOpen(true);
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 hover:from-blue-500 to-blue-700 hover:to-blue-600 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-3 border border-blue-400/30"
              >
                <span>{t.startAssessment}</span>
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 font-bold text-base border border-slate-700/80 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>{t.whatsappDirect}</span>
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t.statPartners, val: '40+', icon: Building2 },
              { label: t.statSpecialists, val: '180+', icon: Stethoscope },
              { label: t.statSavings, val: '70–90%', icon: Award },
              { label: t.statWait, val: '< 3 Days', icon: Clock }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-500/20 text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{stat.val}</div>
                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section id="calculator" className="py-24 bg-slate-950/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t.calculatorTitle}</h2>
            <p className="text-slate-400 text-base">{t.calculatorSub}</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {t.selectProcedure}
                </label>
                <select
                  aria-label={t.selectProcedure}
                  value={calcSpecialtyId}
                  onChange={(e) => setCalcSpecialtyId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-blue-500"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {t.compareAgainst}
                </label>
                <select
                  aria-label={t.compareAgainst}
                  value={calcBenchmark}
                  onChange={(e) => setCalcBenchmark(e.target.value as 'us' | 'uae' | 'india')}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-blue-500"
                >
                  <option value="us">{t.usUk} (${selectedCalcSpecialty.usUkPrice.toLocaleString()})</option>
                  <option value="uae">{t.uaeTurkey} (${selectedCalcSpecialty.uaeTurkeyPrice.toLocaleString()})</option>
                  <option value="india">{t.india} (${selectedCalcSpecialty.indiaPrice.toLocaleString()})</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {t.packageTier}
                </label>
                <select
                  aria-label={t.packageTier}
                  value={calcPackage}
                  onChange={(e) => setCalcPackage(e.target.value as 'essential' | 'vip')}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-blue-500"
                >
                  <option value="essential">Essential Care (+ $450)</option>
                  <option value="vip">Luxury VIP Concierge (+ $1,200)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-center">
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                <div className="text-xs text-slate-400 font-semibold mb-1">{t.estimatedTotal}</div>
                <div className="text-3xl font-black text-white">${iranTotal.toLocaleString()}</div>
                <div className="text-[10px] text-amber-400 font-medium mt-1">Includes hospital, surgeon & concierge</div>
              </div>

              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                <div className="text-xs text-slate-400 font-semibold mb-1">Benchmark Price</div>
                <div className="text-3xl font-black text-slate-300">${benchmarkPrice.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 font-medium mt-1">Standard international market rate</div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-emerald-900/40 p-5 rounded-2xl border border-emerald-500/30">
                <div className="text-xs text-emerald-300 font-semibold mb-1">{t.estimatedSavings}</div>
                <div className="text-3xl font-black text-emerald-400">${dollarSavings.toLocaleString()} ({percentSavings}%)</div>
                <div className="text-[10px] text-emerald-300/80 font-medium mt-1">Immediate net financial savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES TABLE SECTION */}
      <section id="specialties" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Elite Specialties & Transparent Pricing</h2>
          <p className="text-slate-400 text-base">Compare Iran’s clinical pricing directly against international medical hubs.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
          <table className="w-full text-left rtl:text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <th className="p-4 sm:p-5">Specialty Procedure</th>
                <th className="p-4 sm:p-5">Recovery</th>
                <th className="p-4 sm:p-5 text-amber-400 font-bold">Iran (Maham)</th>
                <th className="p-4 sm:p-5">India</th>
                <th className="p-4 sm:p-5">UAE / Turkey</th>
                <th className="p-4 sm:p-5">US / UK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm">
              {SPECIALTIES.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 sm:p-5">
                    <div className="font-bold text-white">{s.name}</div>
                    <div className="text-xs text-slate-400">{s.category}</div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-300 font-medium">{s.recoveryDays}</td>
                  <td className="p-4 sm:p-5 text-amber-400 font-black text-base">${s.iranPrice.toLocaleString()}</td>
                  <td className="p-4 sm:p-5 text-slate-300 font-medium">${s.indiaPrice.toLocaleString()}</td>
                  <td className="p-4 sm:p-5 text-slate-300 font-medium">${s.uaeTurkeyPrice.toLocaleString()}</td>
                  <td className="p-4 sm:p-5 text-slate-400 font-medium">${s.usUkPrice.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PATIENT JOURNEY TIMELINE */}
      <section className="py-24 bg-slate-950/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t.timelineTitle}</h2>
            <p className="text-slate-400 text-base">{t.timelineSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { phase: 'Phase 1', title: 'Virtual Consultation', desc: 'Secure upload of medical history and diagnostic review with lead surgeons.' },
              { phase: 'Phase 2', title: 'Visa & Travel Fast-Track', desc: 'Official medical T-Visa issuance within 48-72 hours with VIP airport clearance.' },
              { phase: 'Phase 3', title: 'Arrival & Admission', desc: 'VIP meet-and-greet, luxury hotel or recovery suite check-in, and hospital admission.' },
              { phase: 'Phase 4', title: 'Procedure & Recovery', desc: 'State-of-the-art surgery at JCI-accredited partner hospitals with 24/7 nursing.' },
              { phase: 'Phase 5', title: 'Post-Op & Return', desc: 'Final medical clearance, tourism excursions (optional), and safe return flight.' }
            ].map((stepItem, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-900/40 text-amber-400 border border-blue-500/30">
                      {stepItem.phase}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{stepItem.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{stepItem.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] text-slate-500 font-semibold uppercase tracking-widest">
                  Step {idx + 1} of 5
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06101E] border-t border-slate-800 pt-16 pb-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div>
                <div className="font-bold text-white text-base">MAHAM HEALTH</div>
                <div className="text-xs text-slate-400">Medical Concierge</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Premium medical-tourism coordination across Iran’s elite JCI-accredited hospitals and medical centers.
            </p>
            <p className="text-[11px] text-slate-500">
              A healthcare concierge service operated by Soorin Maham Trade & Industry Development Corporation.
            </p>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-4">Maham Health</div>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#specialties" className="hover:text-amber-400 transition-colors">Medical Specialties</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Treatment Cost Calculator</a></li>
              <li><a href="#consultation" onClick={() => setIsModalOpen(true)} className="hover:text-amber-400 transition-colors">Request a Consultation</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-4">Corporate Presence</div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><strong className="text-slate-200">Iran:</strong> Tehran, Shiraz, Kish, Qeshm</li>
              <li><strong className="text-slate-200">UAE:</strong> Dubai Office</li>
              <li><strong className="text-slate-200">Tanzania:</strong> Dar es Salaam</li>
              <li><strong className="text-slate-200">India:</strong> Lucknow & Mumbai</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-4">Contact</div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: +98 905 524 0772</span>
                </a>
              </li>
              <li>
                <a href="mailto:health@maham-group.com" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>health@maham-group.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corporation. All rights reserved.</p>
          <p className="mt-2 text-[11px] text-slate-600">
            Maham Health facilitates medical-tourism coordination and does not provide medical diagnosis or treatment. All clinical procedures are performed by licensed medical specialists at accredited partner hospitals.
          </p>
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-slate-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                    Step {step} of 3 • Secure Medical Intake
                  </div>
                  <h3 className="text-xl font-black text-white">
                    {step === 1 && 'Select Treatment & Timeline'}
                    {step === 2 && 'Patient Profile & Medical Notes'}
                    {step === 3 && 'Contact Details & Concierge Tier'}
                  </h3>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor={specialtyId} className="block text-xs font-semibold text-slate-300 mb-1.5">Medical Specialty</label>
                      <select
                        id={specialtyId}
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                      >
                        {SPECIALTIES.map((s) => (
                          <option key={s.id} value={s.id}>{s.name} ({s.category})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor={timeframeId} className="block text-xs font-semibold text-slate-300 mb-1.5">Intended Travel Timeframe</label>
                      <select
                        id={timeframeId}
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                      >
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={ageId} className="block text-xs font-semibold text-slate-300 mb-1.5">Patient Age</label>
                        <input
                          id={ageId}
                          type="number"
                          required
                          placeholder="e.g. 35"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Gender</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value as 'Male' | 'Female')}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                        >
                          <option value="Male">{t.male}</option>
                          <option value="Female">{t.female}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={notesId} className="block text-xs font-semibold text-slate-300 mb-1.5">Medical History & Notes (Optional)</label>
                      <textarea
                        id={notesId}
                        rows={3}
                        placeholder="Briefly describe your condition or previous surgeries..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={nameId} className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                        <input
                          id={nameId}
                          type="text"
                          required
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor={countryId} className="block text-xs font-semibold text-slate-300 mb-1.5">Country of Residence</label>
                        <input
                          id={countryId}
                          type="text"
                          required
                          placeholder="e.g. United Kingdom"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={whatsappId} className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp Number</label>
                        <input
                          id={whatsappId}
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor={emailId} className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                        <input
                          id={emailId}
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Select Concierge Tier</label>
                      <select
                        value={tier}
                        onChange={(e) => setTier(e.target.value as 'Essential Care' | 'Luxury VIP Concierge')}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
                      >
                        <option value="Essential Care">Essential Care (+ $450)</option>
                        <option value="Luxury VIP Concierge">Luxury VIP Concierge (+ $1,200)</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-500 hover:to-amber-400 text-white font-bold text-sm shadow-lg flex items-center gap-2"
                      >
                        {submitting ? 'Submitting...' : t.submit}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Consultation Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">
                  Thank you, <strong className="text-white">{name}</strong>. Our senior medical concierge team has received your details and will reach out via WhatsApp (<span className="text-emerald-400 font-semibold">{whatsapp}</span>) within 2 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Open WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
