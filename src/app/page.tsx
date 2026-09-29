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
    statPartners: '+٤٠ مركزاً طبياً معتمداً',
    statSpecialists: '+١٨٠ طبيباً استشارياً',
    statSavings: '٧٠–٩٠٪ نسبة التوفير',
    statWait: 'أقل من ٣ أيام انتظار',
    calculatorTitle: 'حاسبة التوفير التفاعلية',
    calculatorSub: 'اختر الإجراء الطبي وقارن التكاليف لمعرفة نسبة التوفير المتوقعة.',
    selectProcedure: 'اختر التخصص أو الإجراء',
    compareAgainst: 'قارن بالنسبة إلى',
    packageTier: 'باقة الكونسيرج المختارة',
    estimatedTotal: 'التكلفة المقدرة في إيران',
    estimatedSavings: 'مبلغ التوفير التقديري',
    timelineTitle: 'مراحل رحلتك العلاجية',
    timelineSub: 'تجربة رعاية شخصية وسلسة من الاستشارة الأولى وحتى العودة والتعافي.',
    packagesTitle: 'باقات الكونسيرج الفاخرة',
    packagesSub: 'اختر مستوى الرعاية والضيافة الأنسب لك ولمرافقك.',
    step1: 'الخطوة ١: الإجراء الطبي',
    step2: 'الخطوة ٢: ملف المريض',
    step3: 'الخطوة ٣: التواصل والباقة',
    submit: 'إرسال الطلب بسرية',
    male: 'ذكر',
    female: 'أنثى'
  },
  sw: {
    brand: 'Maham Health',
    badge: 'Huduma za Kimatibabu za Hadhi ya Juu • Hospitali Zilizoidhinishwa',
    heroTitle: 'Huduma Bora za Afya, Okoa 70–90% ya Gharama za Kimataifa',
    heroSub: 'Kuratibu safari za matibabu binafsi nchini Iran katika hospitali zilizoidhinishwa na madaktari bingwa.',
    startAssessment: 'Anza Tathmini ya Bure',
    whatsappDirect: 'Wasiliana kwa WhatsApp',
    statPartners: 'Vituo 40+ vya IPD',
    statSpecialists: 'Madaktari Bingwa 180+',
    statSavings: '70–90% Gharama Unazookoa',
    statWait: '< Siku 3 Muda wa Kusubiri',
    calculatorTitle: 'Kikokotoo cha Gharama na Akiba',
    calculatorSub: 'Chagua matibabu ili kuona makadirio ya kiasi unachookoa.',
    selectProcedure: 'Chagua Aina ya Matibabu',
    compareAgainst: 'Linganisha na Bei za',
    packageTier: 'Kiwango cha Huduma',
    estimatedTotal: 'Gharama ya Matibabu Iran',
    estimatedSavings: 'Kiasi Unachookoa',
    timelineTitle: 'Hatua za Safari Yako ya Matibabu',
    timelineSub: 'Mpangilio rahisi na salama kutoka mashauriano hadi kupona kabisa.',
    packagesTitle: 'Vifurushi vya Huduma na Ukarimu',
    packagesSub: 'Chagua huduma inayokufaa wewe na mwenzako.',
    step1: 'Hatua ya 1: Aina ya Matibabu',
    step2: 'Hatua ya 2: Wasifu wa Mgonjwa',
    step3: 'Hatua ya 3: Mawasiliano na Kifurushi',
    submit: 'Tuma Ombi lako',
    male: 'Mwanaume',
    female: 'Mwanamke'
  },
  hi: {
    brand: 'माहाम हेल्थ',
    badge: 'प्रीमियर मेडिकल कंसीयज • आधिकारिक IPD अस्पताल',
    heroTitle: 'विश्व स्तरीय स्वास्थ्य सेवा, वैश्विक लागत से 70-90% कम',
    heroSub: 'ईरान के शीर्ष मान्यता प्राप्त अस्पतालों में विशेषज्ञ डॉक्टरों के साथ व्यक्तिगत चिकित्सा यात्रा का समन्वय।',
    startAssessment: 'निःशुल्क परामर्श शुरू करें',
    whatsappDirect: 'व्हाट्सएप पर चैट करें',
    statPartners: '40+ IPD साझेदार केंद्र',
    statSpecialists: '180+ बोर्ड-प्रमाणित विशेषज्ञ',
    statSavings: '70–90% अनुमानित बचत',
    statWait: '< 3 दिन प्रतीक्षा समय',
    calculatorTitle: 'इंटरैक्टिव बचत कैलकुलेटर',
    calculatorSub: 'अनुमानित बचत देखने के लिए अपनी प्रक्रिया और तुलना देश चुनें।',
    selectProcedure: 'उपचार / प्रक्रिया चुनें',
    compareAgainst: 'तुलना का मानक',
    packageTier: 'कंसीयज पैकेज का स्तर',
    estimatedTotal: 'ईरान में अनुमानित उपचार लागत',
    estimatedSavings: 'आपकी अनुमानित बचत',
    timelineTitle: 'आपकी चिकित्सा यात्रा',
    timelineSub: 'परामर्श से लेकर स्वस्थ होकर लौटने तक की 5-चरणीय यात्रा।',
    packagesTitle: 'क्यूरेटेड कंसीयज पैकेज',
    packagesSub: 'अपने और अपने साथी के लिए व्यक्तिगत सहायता और सुविधाओं का चयन करें।',
    step1: 'चरण 1: प्रक्रिया और समय',
    step2: 'चरण 2: रोगी का विवरण',
    step3: 'चरण 3: संपर्क और पैकेज',
    submit: 'गोपनीय अनुरोध भेजें',
    male: 'पुरुष',
    female: 'महिला'
  },
  ur: {
    brand: 'مہام ہیلتھ',
    badge: 'پریمیئر میڈیکل کونسیرج • باضابطہ IPD پارٹنر ہسپتال',
    heroTitle: 'عالمی معیار کا علاج، عالمی اخراجات سے 70 تا 90 فیصد کم',
    heroSub: 'ایران کے معروف اور تصدیق شدہ ہسپتالوں میں تجربہ کار ماہرین کے ساتھ نجی طبی سفر کی سہولت۔',
    startAssessment: 'مفت جائزہ شروع کریں',
    whatsappDirect: 'واٹس ایپ پر رابطہ کریں',
    statPartners: '+40 پارٹنر مراکز',
    statSpecialists: '+180 تصدیق شدہ ماہرین',
    statSavings: '70–90% متوقع بچت',
    statWait: '3 دن سے کم انتظار کا وقت',
    calculatorTitle: 'بچت کا کیلکولیٹر',
    calculatorSub: 'اپنی متوقع بچت جاننے کے لیے مطلوبہ علاج اور موازنہ منتخب کریں۔',
    selectProcedure: 'علاج یا سرجری کا انتخاب کریں',
    compareAgainst: 'موازنہ برائے ملک',
    packageTier: 'کونسیرج پیکیج کا درجہ',
    estimatedTotal: 'ایران میں متوقع علاج کی لاگت',
    estimatedSavings: 'آپ کی متوقع کل بچت',
    timelineTitle: 'آپ کا طبی سفر',
    timelineSub: 'مشاورت سے لے کر مکمل شفایابی تک آسان اور محفوظ مراحل۔',
    packagesTitle: 'منتخب کونسیرج پیکیجز',
    packagesSub: 'اپنے اور اپنے ساتھی کے لیے آرام دہ سہولیات کا انتخاب کریں۔',
    step1: 'مرحلہ 1: مطلوبہ علاج',
    step2: 'مرحلہ 2: مریض کی تفصیلات',
    step3: 'مرحلہ 3: رابطہ اور پیکیج',
    submit: 'درخواست جمع کروائیں',
    male: 'مرد',
    female: 'خواتین'
  }
};

const JOURNEY_STEPS = [
  {
    phase: '01',
    title: 'Clinical Assessment & Visa',
    desc: 'Submit reports for specialist review, receiving a treatment quote and official Iran T-Visa authorization letter within 48 hours.',
    icon: FileText
  },
  {
    phase: '02',
    title: 'VIP Arrival & Accommodation',
    desc: 'Chauffeured airport pickup, luxury 5-star suite check-in, dedicated medical interpreter, and local high-speed SIM.',
    icon: Plane
  },
  {
    phase: '03',
    title: 'Hospital & Specialist Care',
    desc: 'Private transfers to premier IPD hospital, comprehensive pre-op diagnostics, and surgery led by department chiefs.',
    icon: Stethoscope
  },
  {
    phase: '04',
    title: 'Monitored Recovery',
    desc: 'Post-operative clinical check-ins, round-the-clock nursing assistance, dietary planning, and optional cultural escort.',
    icon: HeartHandshake
  },
  {
    phase: '05',
    title: 'Fit-to-Fly & Telemedicine',
    desc: 'Final surgical clearance, complete translated documentation, and scheduled telemedicine check-ins upon your return home.',
    icon: Award
  }
];

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  // Form Fields
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

  // Submission Status
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Interactive Calculator State
  const [calcSpecialtyId, setCalcSpecialtyId] = useState(SPECIALTIES[0].id);
  const [calcBenchmark, setCalcBenchmark] = useState<'us' | 'uae' | 'india'>('us');
  const [calcPackage, setCalcPackage] = useState<'essential' | 'vip'>('vip');

  const selectedCalcSpecialty = SPECIALTIES.find((s) => s.id === calcSpecialtyId) || SPECIALTIES[0];
  const packagePriceOffset = calcPackage === 'vip' ? 1200 : 450;
  const iranTotal = selectedCalcSpecialty.iranPrice + packagePriceOffset;

  let benchmarkPrice = selectedCalcSpecialty.usUkPrice;
  let benchmarkLabel = 'USA / UK';
  if (calcBenchmark === 'uae') {
    benchmarkPrice = selectedCalcSpecialty.uaeTurkeyPrice;
    benchmarkLabel = 'UAE / Turkey';
  } else if (calcBenchmark === 'india') {
    benchmarkPrice = selectedCalcSpecialty.indiaPrice;
    benchmarkLabel = 'India';
  }

  const dollarSavings = Math.max(0, benchmarkPrice - iranTotal);
  const percentSavings = Math.round((dollarSavings / benchmarkPrice) * 100);

  const t = I18N[lang] || I18N.en;
  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  // Accessibility IDs for form inputs
  const calcSpecialtySelectId = useId();
  const calcBenchmarkSelectId = useId();
  const calcPackageSelectId = useId();
  const formSpecialtySelectId = useId();
  const formTimeframeSelectId = useId();
  const formAgeInputId = useId();
  const formNotesTextareaId = useId();
  const formNameInputId = useId();
  const formCountryInputId = useId();
  const formWhatsappInputId = useId();
  const formEmailInputId = useId();
  const formTierSelectId = useId();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      specialty,
      timeframe,
      age,
      gender,
      notes,
      name,
      country,
      whatsapp,
      email,
      tier,
      language: lang,
      submittedAt: new Date().toISOString()
    };

    try {
      await fetch('https://formspree.io/f/mqakdgrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch {
      // Allow user to proceed to WhatsApp even if network issue occurs
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const selectedSpecialtyObj = SPECIALTIES.find((s) => s.id === specialty) || SPECIALTIES[0];
  const encodedWhatsappMsg = encodeURIComponent(
    `Hello Maham Health Concierge Desk,\n\nI have requested a medical assessment:\n- Name: ${name || 'Prospective Patient'}\n- Procedure: ${selectedSpecialtyObj.name}\n- Preferred Timeframe: ${timeframe}\n- Country: ${country || 'International'}\n- Concierge Tier: ${tier}\n\nPlease advise on specialist availability and next steps.`
  );
  const whatsappUrl = `https://wa.me/255744956506?text=${encodedWhatsappMsg}`;
  const conciergeWhatsappUrl = `https://wa.me/255744956506?text=${encodeURIComponent(
    'Hello Maham Health Concierge Desk. I would like a confidential medical assessment. Please advise on the next steps.'
  )}`;

  return (
    <div className="min-h-screen bg-[#08111d] text-slate-100 font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-[#08111d]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-amber-500/20">
              M
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                {t.brand}
              </span>
              <span className="text-xs text-amber-400/90 font-medium tracking-wide">
                Medical Concierge
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-slate-900/90 p-1 rounded-lg border border-slate-800">
              <Globe2 className="w-4 h-4 text-slate-400 mx-1" />
              {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((locale) => (
                <button
                  key={locale}
                  onClick={() => setLang(locale)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded transition ${
                    lang === locale
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setIsModalOpen(true);
              }}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition"
            >
              {t.startAssessment}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            {t.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {t.heroTitle}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-xl shadow-amber-500/25 transition flex items-center justify-center gap-2"
            >
              {t.startAssessment}
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/255744956506"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              {t.whatsappDirect}
            </a>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <Building2 className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">40+</div>
              <div className="text-xs text-slate-400 mt-1">{t.statPartners}</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <ShieldCheck className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">180+</div>
              <div className="text-xs text-slate-400 mt-1">{t.statSpecialists}</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">70–90%</div>
              <div className="text-xs text-slate-400 mt-1">{t.statSavings}</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">&lt; 3 Days</div>
              <div className="text-xs text-slate-400 mt-1">{t.statWait}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-3">
              <Calculator className="w-3.5 h-3.5" />
              {t.calculatorTitle}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Instant Price & Savings Calculator
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {t.calculatorSub}
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label htmlFor={calcSpecialtySelectId} className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                    {t.selectProcedure}
                  </label>
                  <select
                    id={calcSpecialtySelectId}
                    aria-label={t.selectProcedure}
                    value={calcSpecialtyId}
                    onChange={(e) => setCalcSpecialtyId(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-white font-medium focus:ring-2 focus:ring-amber-400 outline-none"
                  >
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.id}>
                        {spec.name} ({spec.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={calcBenchmarkSelectId} className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                      {t.compareAgainst}
                    </label>
                    <select
                      id={calcBenchmarkSelectId}
                      aria-label={t.compareAgainst}
                      value={calcBenchmark}
                      onChange={(e) => setCalcBenchmark(e.target.value as 'us' | 'uae' | 'india')}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white font-medium focus:ring-2 focus:ring-amber-400 outline-none"
                    >
                      <option value="us">USA / UK Benchmark</option>
                      <option value="uae">UAE / Turkey Benchmark</option>
                      <option value="india">India Benchmark</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={calcPackageSelectId} className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                      {t.packageTier}
                    </label>
                    <select
                      id={calcPackageSelectId}
                      aria-label={t.packageTier}
                      value={calcPackage}
                      onChange={(e) => setCalcPackage(e.target.value as 'essential' | 'vip')}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white font-medium focus:ring-2 focus:ring-amber-400 outline-none"
                    >
                      <option value="vip">Luxury VIP Concierge (+5-Star Suite & Chauffeur)</option>
                      <option value="essential">Essential Medical Care (Clinical Transfers)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Standard Recovery Stay: <strong>{selectedCalcSpecialty.recoveryDays}</strong></span>
                </div>
              </div>

              {/* Output Display Card */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900 border border-amber-500/30 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
                <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                  {t.estimatedSavings}
                </div>
                <div className="mt-3 text-4xl sm:text-5xl font-black text-amber-400">
                  ${dollarSavings.toLocaleString()}
                </div>
                <div className="mt-1 inline-flex items-center gap-1.5 text-emerald-400 text-sm font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <span>Save ~{percentSavings}%</span> vs. {benchmarkLabel}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700/60 flex justify-between items-center text-xs text-slate-300">
                  <span>Iran Concierge Estimate:</span>
                  <span className="font-bold text-white text-sm">${iranTotal.toLocaleString()}</span>
                </div>
                <div className="mt-2 flex justify-between items-center text-xs text-slate-400">
                  <span>{benchmarkLabel} Benchmark:</span>
                  <span className="line-through">${benchmarkPrice.toLocaleString()}</span>
                </div>

                <button
                  onClick={() => {
                    setSpecialty(selectedCalcSpecialty.id);
                    setSubmitted(false);
                    setStep(1);
                    setIsModalOpen(true);
                  }}
                  className="mt-6 w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
                >
                  Book Assessment For This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Timeline */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {t.timelineTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {t.timelineSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {JOURNEY_STEPS.map((stepItem, index) => {
              const StepIcon = stepItem.icon;
              return (
                <div
                  key={stepItem.phase}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-400/40 transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-amber-400/40 group-hover:text-amber-400 transition">
                        {stepItem.phase}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 border border-slate-700">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                  {index < JOURNEY_STEPS.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benchmark Pricing Table */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Transparent Global Benchmark Pricing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Direct comparisons across leading medical destinations. All estimates reflect board-certified surgery teams.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl">
            <table className="w-full text-left text-sm text-slate-300 rtl:text-right">
              <thead className="bg-slate-800/90 text-xs uppercase text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="px-6 py-4">Specialty & Recovery</th>
                  <th className="px-6 py-4 text-amber-400 font-bold">Iran (Maham Health)</th>
                  <th className="px-6 py-4">India</th>
                  <th className="px-6 py-4">UAE / Turkey</th>
                  <th className="px-6 py-4">USA / UK</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {SPECIALTIES.map((spec) => (
                  <tr key={spec.id} className="hover:bg-slate-800/50 transition">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{spec.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{spec.category} • {spec.recoveryDays}</div>
                    </td>
                    <td className="px-6 py-4 text-amber-400 font-extrabold text-base">
                      ${spec.iranPrice.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-400">${spec.indiaPrice.toLocaleString()}</td>
                    <td className="px-6 py-4 text-slate-400">${spec.uaeTurkeyPrice.toLocaleString()}</td>
                    <td className="px-6 py-4 text-slate-400">${spec.usUkPrice.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          setSpecialty(spec.id);
                          setSubmitted(false);
                          setStep(1);
                          setIsModalOpen(true);
                        }}
                        className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition"
                      >
                        Inquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Concierge Packages */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {t.packagesTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {t.packagesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Essential Care */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinical Focus</span>
                <h3 className="text-2xl font-bold text-white mt-1">Essential Medical Care</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Streamlined hospital navigation and core logistics for patients seeking quality care without luxury hotel services.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Priority IPD appointment scheduling</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Airport reception & private hospital transfers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Dedicated medical translator throughout hospital stay</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Official Iran T-Visa authorization letter</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setTier('Essential Care');
                  setSubmitted(false);
                  setStep(1);
                  setIsModalOpen(true);
                }}
                className="mt-8 w-full py-3 rounded-xl border border-slate-700 hover:border-slate-500 font-semibold text-sm transition"
              >
                Select Essential Plan
              </button>
            </div>

            {/* Luxury VIP */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3.5 right-8 bg-amber-400 text-slate-950 text-xs font-extrabold uppercase px-3 py-1 rounded-full">
                Signature Concierge
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">End-to-End White Glove</span>
                <h3 className="text-2xl font-bold text-white mt-1">Luxury VIP Concierge</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Comprehensive five-star hospital and hospitality experience for patient and traveling companion.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>5-Star Suite accommodation (Espinas Palace / Wisteria)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Private dedicated chauffeur on standby 24/7</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>VIP fast-track airport customs and lounge access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Post-operative nutritional care & companion lodging</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Direct access to department head surgeons</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setTier('Luxury VIP Concierge');
                  setSubmitted(false);
                  setStep(1);
                  setIsModalOpen(true);
                }}
                className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 transition"
              >
                Select Luxury VIP Concierge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {t.brand}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span>Confidential Medical Inquiries</span>
            <span>Tehran • Dubai • Dar es Salaam • New Delhi</span>
          </div>
        </div>
      </footer>

      {/* 3-Step Consultation Wizard Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Stepper Progress */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          step === s
                            ? 'bg-amber-400 text-slate-950'
                            : step > s
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {s}
                      </div>
                      <span className="text-xs hidden sm:inline text-slate-300 font-medium">
                        {s === 1 ? 'Procedure' : s === 2 ? 'Patient' : 'Contact'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">{t.step1}</h3>
                    <div>
                      <label htmlFor={formSpecialtySelectId} className="block text-xs font-semibold text-slate-400 mb-1.5">
                        Medical Specialty
                      </label>
                      <select
                        id={formSpecialtySelectId}
                        aria-label="Medical Specialty"
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        {SPECIALTIES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} (Estimated ${s.iranPrice.toLocaleString()})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor={formTimeframeSelectId} className="block text-xs font-semibold text-slate-400 mb-1.5">
                        Anticipated Travel Timeframe
                      </label>
                      <select
                        id={formTimeframeSelectId}
                        aria-label="Anticipated Travel Timeframe"
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="Immediately (Within 7-14 days)">Immediately (Within 7–14 days)</option>
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="Within 1-3 months">Within 1–3 months</option>
                        <option value="Planning / Exploring">Planning / Exploring</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:brightness-110 flex items-center gap-1.5"
                      >
                        Next Step <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">{t.step2}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={formAgeInputId} className="block text-xs font-semibold text-slate-400 mb-1.5">Patient Age</label>
                        <input
                          id={formAgeInputId}
                          type="number"
                          placeholder="e.g. 42"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Gender</label>
                        <div className="flex gap-2">
                          {(['Male', 'Female'] as const).map((g) => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => setGender(g)}
                              className={`flex-1 py-3 text-xs font-bold rounded-xl border transition ${
                                gender === g
                                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                                  : 'bg-slate-800 text-slate-300 border-slate-700'
                              }`}
                            >
                              {g === 'Male' ? t.male : t.female}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={formNotesTextareaId} className="block text-xs font-semibold text-slate-400 mb-1.5">
                        Medical History / Symptoms / Notes
                      </label>
                      <textarea
                        id={formNotesTextareaId}
                        rows={3}
                        placeholder="Brief summary of condition, previous diagnosis, or specific surgical requests..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:brightness-110 flex items-center gap-1.5"
                      >
                        Next Step <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">{t.step3}</h3>
                    <div>
                      <label htmlFor={formNameInputId} className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
                      <input
                        id={formNameInputId}
                        type="text"
                        required
                        placeholder="Patient or Guardian Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={formCountryInputId} className="block text-xs font-semibold text-slate-400 mb-1">Country of Origin</label>
                        <input
                          id={formCountryInputId}
                          type="text"
                          required
                          placeholder="e.g. UAE, Tanzania, UK"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                      <div>
                        <label htmlFor={formWhatsappInputId} className="block text-xs font-semibold text-slate-400 mb-1">WhatsApp Number</label>
                        <input
                          id={formWhatsappInputId}
                          type="tel"
                          required
                          placeholder="+..."
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={formEmailInputId} className="block text-xs font-semibold text-slate-400 mb-1">Email Address</label>
                      <input
                        id={formEmailInputId}
                        type="email"
                        required
                        placeholder="patient@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label htmlFor={formTierSelectId} className="block text-xs font-semibold text-slate-400 mb-1">Selected Package Tier</label>
                      <select
                        id={formTierSelectId}
                        aria-label="Selected Package Tier"
                        value={tier}
                        onChange={(e) => setTier(e.target.value as 'Essential Care' | 'Luxury VIP Concierge')}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="Luxury VIP Concierge">Luxury VIP Concierge (Full 5-Star Hospitality)</option>
                        <option value="Essential Care">Essential Medical Care (Hospital Focus)</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm hover:brightness-110 flex items-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
                      >
                        {submitting ? 'Submitting...' : t.submit}
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* Success & WhatsApp Direct Handoff */
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Your confidential clinical assessment request has been recorded. Our medical coordinator will review your case within 12 hours.
                </p>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Instant Priority Review via WhatsApp
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs text-slate-400 hover:text-white pt-2"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating WhatsApp concierge CTA */}
      <a
        href={conciergeWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with the Maham Health concierge on WhatsApp"
        title="Chat with our medical concierge"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-emerald-300/40 bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-900/40 transition hover:-translate-y-1 hover:from-emerald-400 hover:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#08111d] sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp Concierge • مشاور واتساپ</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
