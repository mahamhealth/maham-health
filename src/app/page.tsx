'use client';

import React, { useState, useId, useEffect } from 'react';
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
  Upload,
  X
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
    name: 'Rhinoplasty (Nose Reshaping)',
    category: 'Cosmetic & Plastic Surgery',
    recoveryDays: '7–10 days',
    iranPrice: 1650,
    indiaPrice: 2800,
    uaeTurkeyPrice: 4500,
    usUkPrice: 8500,
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants (Full Arch / Single)',
    category: 'Advanced Dentistry',
    recoveryDays: '5–7 days',
    iranPrice: 550,
    indiaPrice: 800,
    uaeTurkeyPrice: 1500,
    usUkPrice: 2800,
  },
  {
    id: 'lasik',
    name: 'LASIK / Femto-LASIK (Both Eyes)',
    category: 'Ophthalmology',
    recoveryDays: '2–3 days',
    iranPrice: 1100,
    indiaPrice: 1400,
    uaeTurkeyPrice: 2800,
    usUkPrice: 4200,
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant (FUE / Micro-FUE)',
    category: 'Aesthetic Restoration',
    recoveryDays: '3–4 days',
    iranPrice: 1250,
    indiaPrice: 2000,
    uaeTurkeyPrice: 2600,
    usUkPrice: 6000,
  },
  {
    id: 'ivf',
    name: 'IVF (In Vitro Fertilization Complete Cycle)',
    category: 'Fertility & Reproductive Health',
    recoveryDays: '12–15 days',
    iranPrice: 3200,
    indiaPrice: 4500,
    uaeTurkeyPrice: 7500,
    usUkPrice: 15000,
  },
  {
    id: 'orthopedic-knee',
    name: 'Total Knee Replacement (Bilateral Available)',
    category: 'Orthopedic Surgery',
    recoveryDays: '14–21 days',
    iranPrice: 4200,
    indiaPrice: 7500,
    uaeTurkeyPrice: 1100,
    usUkPrice: 22000,
  },
  {
    id: 'cardiology',
    name: 'Cardiology (Angioplasty & Stent Placement)',
    category: 'Cardiovascular Care',
    recoveryDays: '7–10 days',
    iranPrice: 3800,
    indiaPrice: 6500,
    uaeTurkeyPrice: 9500,
    usUkPrice: 20000,
  },
  {
    id: 'oncology',
    name: 'Oncology (Initial Clinical Protocol & Surgery)',
    category: 'Advanced Oncology',
    recoveryDays: '14–28 days',
    iranPrice: 4500,
    indiaPrice: 8000,
    uaeTurkeyPrice: 12000,
    usUkPrice: 25000,
  },
  {
    id: 'bariatric',
    name: 'Bariatric Sleeve Surgery (Laparoscopic)',
    category: 'Metabolic & Weight Loss Surgery',
    recoveryDays: '7–10 days',
    iranPrice: 2850,
    indiaPrice: 4800,
    uaeTurkeyPrice: 6500,
    usUkPrice: 12000,
  },
];

const I18N: Record<Language, any> = {
  en: {
    brand: 'MAHAM HEALTH',
    badge: 'PREMIUM MEDICAL CONCIERGE • IRAN DESTINATION',
    heroTitle: 'World-Class Healthcare, Coordinated Around You',
    heroSub: 'Connecting international patients with board-certified professors and accredited surgical centers in Iran with white-glove VIP assistance.',
    startAssessment: 'Start Assessment',
    whatsappDirect: 'Chat on WhatsApp',
    statPartners: '40+ IPD Partner Centers',
    statSpecialists: '180+ Board-Certified Specialists',
    statSavings: '70–90% Cost Advantage',
    statWait: 'Under 3 Days to Coordinate',
    calculatorTitle: 'Treatment Price & Savings Benchmark',
    calculatorSub: 'Transparent estimates comparing Iran with international clinical destinations.',
    selectProcedure: 'Select Clinical Specialty',
    compareAgainst: 'Compare Benchmark Against',
    packageTier: 'Concierge Tier',
    estimatedTotal: 'Estimated Iran Total',
    estimatedSavings: 'Estimated Patient Savings',
    timelineTitle: 'Your Patient Journey',
    timelineSub: 'A seamless 5-stage medical travel experience managed by personal coordinators.',
    packagesTitle: 'Concierge Care Packages',
    packagesSub: 'Choose the level of clinical support and VIP facilitation required for your visit.',
    step1: 'Step 1: Clinical Focus',
    step2: 'Step 2: Medical Profile',
    step3: 'Step 3: Verification & Contact',
    submit: 'Submit Confidential Request',
    male: 'Male',
    female: 'Female',
    uploadLabel: 'Upload Medical Records / Photos (PDF, JPG, PNG up to 10MB)',
    essential: 'Essential Medical Care',
    luxury: 'Luxury VIP Concierge',
    disclaimer: 'Benchmarked estimates are for reference only. Final clinical quotes require formal physician review.'
  },
  fa: {
    brand: 'ماهان هلث',
    badge: 'خدمات ویژه درمان و گردشگری سلامت • مقصد ایران',
    heroTitle: 'خدمات درمانی در کلاس جهانی، با برنامه‌ریزی اختصاصی',
    heroSub: 'ارتباط مستقیم بیماران بین‌المللی با جراحان برجسته و مراکز فوق‌تخصصی دارای مجوز IPD در ایران به همراه همراهی VIP.',
    startAssessment: 'درخواست مشاوره تخصصی',
    whatsappDirect: 'گفتگو در واتس‌اپ',
    statPartners: '+۴۰ مرکز درمانی معتبر IPD',
    statSpecialists: '+۱۸۰ پزشک فوق‌تخصص و استاد دانشگاه',
    statSavings: '۷۰٪ تا ۹۰٪ صرفه‌جویی هزینه‌ای',
    statWait: 'هماهنگی پرونده کمتر از ۳ روز',
    calculatorTitle: 'محاسبه‌گر و مقایسه هزینه درمان',
    calculatorSub: 'برآورد شفاف قیمت‌ها در مقایسه با سایر قطب‌های پزشکی منطقه و جهان.',
    selectProcedure: 'انتخاب تخصص بالینی',
    compareAgainst: 'مقایسه با مقصد',
    packageTier: 'نوع بسته خدمات',
    estimatedTotal: 'برآورد هزینه در ایران',
    estimatedSavings: 'میزان صرفه‌جویی تخمینی',
    timelineTitle: 'مسیر همراهی با بیمار',
    timelineSub: 'تجربه‌ای ۵ مرحله‌ای، امن و مطمئن از مشاوره اولیه تا ترخیص و پیگیری.',
    packagesTitle: 'بسته‌های خدمات تشریفات و مراقبت',
    packagesSub: 'سطح پشتیبانی بالینی، اقامت و همراهی اختصاصی مورد نظر خود را انتخاب کنید.',
    step1: 'مرحله ۱: نوع درمان',
    step2: 'مرحله ۲: مشخصات پزشکی',
    step3: 'مرحله ۳: اطلاعات تماس و تایید',
    submit: 'ثبت محرمانه درخواست',
    male: 'مرد',
    female: 'زن',
    uploadLabel: 'آپلود مدارک یا تصاویر پزشکی (PDF، JPG تا ۱۰ مگابایت)',
    essential: 'بسته استاندارد درمانی',
    luxury: 'بسته تشریفات اختصاصی VIP',
    disclaimer: 'قیمت‌ها برآورد اولیه هستند؛ هزینه قطعی پس از بررسی پرونده توسط پزشک تعیین می‌شود.'
  },
  ar: {
    brand: 'مهام هيلث',
    badge: 'خدمات الكونسيرج الطبي الفاخر • وجهة إيران',
    heroTitle: 'رعاية صحية عالمية المستوى، منسقة خصيصاً لك',
    heroSub: 'ربط المرضى الدوليين بنخبة من الجراحين ومراكز الاعتماد الدولي IPD في إيران مع رعاية VIP متكاملة.',
    startAssessment: 'ابدأ الاستشارة الطبية',
    whatsappDirect: 'محادثة عبر واتساب',
    statPartners: '+٤٠ مركزاً طبياً معتمداً IPD',
    statSpecialists: '+١٨٠ طبيباً استشارياً',
    statSavings: 'توفير بين ٧٠٪ إلى ٩٠٪',
    statWait: 'أقل من ٣ أيام للتنسيق',
    calculatorTitle: 'حاسبة ومقارنة تكلفة العلاج',
    calculatorSub: 'تقديرات دقيقة وشفافة تقارن التكاليف في إيران بالوجهات الدولية.',
    selectProcedure: 'اختر التخصص الطبي',
    compareAgainst: 'المقارنة مع دولة',
    packageTier: 'باقة الكونسيرج',
    estimatedTotal: 'التكلفة التقديرية في إيران',
    estimatedSavings: 'نسبة التوفير المتوقعة',
    timelineTitle: 'رحلة علاجك خطوة بخطوة',
    timelineSub: 'مسار رعاية متكامل من ٥ مراحل يضمن الراحة والخصوصية والأمان.',
    packagesTitle: 'باقات الرعاية والضيافة',
    packagesSub: 'اختر باقة التنسيق والإقامة التي تلبي احتياجاتك العلاجية.',
    step1: 'المرحلة ١: التخصص المطلوب',
    step2: 'المرحلة ٢: الملف الصحي',
    step3: 'المرحلة ٣: التأكيد وبيانات الاتصال',
    submit: 'إرسال الطلب بسرية',
    male: 'ذكر',
    female: 'أنثى',
    uploadLabel: 'تحميل التقارير أو الصور الطبية (PDF، JPG حتى ١٠ ميغابايت)',
    essential: 'الرعاية الطبية الأساسية',
    luxury: 'كونسيرج كبار الشخصيات VIP',
    disclaimer: 'الأسعار المعروضة استرشادية؛ السعر النهائي يعتمد على التقييم السريري للطبيب.'
  },
  sw: {
    brand: 'MAHAM HEALTH',
    badge: 'HUDUMA BORA ZA MATIBABU YA KIMATAIFA • IRAN',
    heroTitle: 'Huduma za Afya za Kiwango cha Juu, Zilizoratibiwa Kwako',
    heroSub: 'Kuunganisha wagonjwa wa kimataifa na madaktari bingwa walioidhinishwa na hospitali za IPD nchini Iran.',
    startAssessment: 'Anza Tathmini ya Matibabu',
    whatsappDirect: 'Zungumza kwenye WhatsApp',
    statPartners: 'Vituo 40+ vya IPD',
    statSpecialists: 'Madaktari Bingwa 180+',
    statSavings: '70–90% ya Unaafuu wa Gharama',
    statWait: 'Chini ya Siku 3 Kuratibu',
    calculatorTitle: 'Kikokotoo cha Gharama za Matibabu',
    calculatorSub: 'Ulinganisho wa wazi wa bei nchini Iran dhidi ya nchi nyingine duniani.',
    selectProcedure: 'Chagua Aina ya Matibabu',
    compareAgainst: 'Linganisha Na',
    packageTier: 'Kiwango cha Huduma',
    estimatedTotal: 'Makadirio ya Iran',
    estimatedSavings: 'Makadirio ya Kuokoa',
    timelineTitle: 'Safari ya Mgonjwa',
    timelineSub: 'Hatua 5 wazi na salama kuanzia mazungumzo ya kwanza hadi kupona kabisa.',
    packagesTitle: 'Vifurushi vya Huduma',
    packagesSub: 'Chagua kiwango cha huduma na usafiri kinacholingana na mahitaji yako.',
    step1: 'Hatua 1: Matibabu',
    step2: 'Hatua 2: Maelezo ya Afya',
    step3: 'Hatua 3: Maelezo ya Mawasiliano',
    submit: 'Wasilisha Ombi lako Salama',
    male: 'Mwanaume',
    female: 'Mwanamke',
    uploadLabel: 'Pakia ripoti za matibabu au picha (PDF, JPG hadi 10MB)',
    essential: 'Huduma Muhimu za Matibabu',
    luxury: 'Huduma ya Kifahari ya VIP',
    disclaimer: 'Makadirio haya ni kwa ajili ya mwongozo tu; gharama halisi itathibitishwa na daktari.'
  },
  hi: {
    brand: 'MAHAM HEALTH',
    badge: 'प्रीमियम मेडिकल कंसीयज • ईरान गंतव्य',
    heroTitle: 'विश्व स्तरीय स्वास्थ्य सेवा, आपके लिए समन्वित',
    heroSub: 'ईरान के शीर्ष बोर्ड-प्रमाणित सर्जनों और आधुनिक अस्पतालों के साथ अंतरराष्ट्रीय मरीजों का समन्वय।',
    startAssessment: 'परामर्श शुरू करें',
    whatsappDirect: 'व्हाट्सएप पर बात करें',
    statPartners: '40+ आईपीडी अधिकृत केंद्र',
    statSpecialists: '180+ विशेषज्ञ चिकित्सक',
    statSavings: '70–90% तक की बचत',
    statWait: '3 दिनों से कम में समन्वय',
    calculatorTitle: 'उपचार मूल्य और बचत तुलना',
    calculatorSub: 'ईरान और अन्य देशों के बीच पारदर्शी चिकित्सा लागत तुलना।',
    selectProcedure: 'उपचार चुनें',
    compareAgainst: 'तुलना करें',
    packageTier: 'कंसीयज पैकेज',
    estimatedTotal: 'ईरान में अनुमानित लागत',
    estimatedSavings: 'अनुमानित बचत',
    timelineTitle: 'आपकी स्वास्थ्य यात्रा',
    timelineSub: 'परामर्श से लेकर स्वस्थ होने तक 5 चरणों की सुरक्षित और स्पष्ट यात्रा।',
    packagesTitle: 'कंसीयज पैकेज',
    packagesSub: 'अपनी आवश्यकताओं के अनुसार व्यक्तिगत सहायता और वीआईपी सेवाएं चुनें।',
    step1: 'चरण 1: उपचार का चयन',
    step2: 'चरण 2: स्वास्थ्य विवरण',
    step3: 'चरण 3: संपर्क और पुष्टि',
    submit: 'गोपनीय अनुरोध भेजें',
    male: 'पुरुष',
    female: 'महिला',
    uploadLabel: 'मेडिकल रिपोर्ट या फोटो अपलोड करें (PDF, JPG अधिकतम 10MB)',
    essential: 'आवश्यक चिकित्सा देखभाल',
    luxury: 'लक्जरी वीआईपी कंसीयज',
    disclaimer: 'अनुमानित मूल्य केवल संदर्भ के लिए हैं; वास्तविक लागत चिकित्सक द्वारा निर्धारित होगी।'
  },
  ur: {
    brand: 'مہام ہیلتھ',
    badge: 'پریمیم میڈیکل کنسیرج • ایران منزل',
    heroTitle: 'عالمی معیار کا علاج، آپ کے لیے منظم',
    heroSub: 'ایران کے نامور جراحوں اور منظور شدہ ہسپتالوں کے ساتھ بین الاقوامی مریضوں کا براہ راست رابطہ۔',
    startAssessment: 'مشاورت شروع کریں',
    whatsappDirect: 'واٹس ایپ پر رابطہ کریں',
    statPartners: '+۴۰ منظور شدہ IPD مراکز',
    statSpecialists: '+۱۸۰ ماہر ڈاکٹرز',
    statSavings: '۷۰٪ سے ۹۰٪ تک بچت',
    statWait: '۳ دن سے کم میں رابطہ',
    calculatorTitle: 'علاج کی لاگت اور بچت کا موازنہ',
    calculatorSub: 'ایران اور دنیا کے دیگر مراکز کے درمیان شفاف موازنہ۔',
    selectProcedure: 'علاج کا انتخاب کریں',
    compareAgainst: 'کس سے موازنہ کریں',
    packageTier: 'کنسیرج پیکیج',
    estimatedTotal: 'ایران میں متوقع لاگت',
    estimatedSavings: 'متوقع بچت',
    timelineTitle: 'آپ کا طبی سفر',
    timelineSub: 'پہلی مشاورت سے لے کر مکمل صحت یابی تک ۵ مراحل پر مشتمل محفوظ سفر۔',
    packagesTitle: 'کنسیرج پیکجز',
    packagesSub: 'اپنی ترجیحات کے مطابق مناسب پیکیج منتخب کریں۔',
    step1: 'مرحلہ ۱: علاج کی تفصیل',
    step2: 'مرحلہ ۲: طبی معلومات',
    step3: 'مرحلہ ۳: رابطہ اور تصدیق',
    submit: 'درخواست محفوظ طریقے سے جمع کروائیں',
    male: 'مرد',
    female: 'عورت',
    uploadLabel: 'میڈیکل رپورٹس یا تصاویر اپ لوڈ کریں (PDF, JPG زیادہ سے زیادہ 10MB)',
    essential: 'بنیادی طبی نگہداشت',
    luxury: 'لگژری وی آئی پی کنسیرج',
    disclaimer: 'یہ تخمینہ صرف معلومات کے لیے ہے، حتمی قیمت ڈاکٹر کے جائزے کے بعد طے ہوگی۔'
  }
};

const JOURNEY_STEPS = [
  {
    phase: '01',
    title: 'Clinical Assessment & Teleconsult',
    desc: 'Confidential review of your scans and medical history with board-certified professors.',
    icon: Stethoscope
  },
  {
    phase: '02',
    title: 'VIP Arrival & Concierge Escort',
    desc: 'Medical visa facilitation, airport private transfer, and check-in to partnered 5-star suites.',
    icon: Plane
  },
  {
    phase: '03',
    title: 'IPD Hospitalization & Surgery',
    desc: 'Direct admission to internationally accredited surgical centers with dedicated translators.',
    icon: Building2
  },
  {
    phase: '04',
    title: 'Monitored Recovery & Nursing',
    desc: 'Private nursing, post-op clinical checkups, and bespoke nutrition plans during healing.',
    icon: HeartHandshake
  },
  {
    phase: '05',
    title: 'Fit-to-Fly & Post-Discharge Care',
    desc: 'Comprehensive fit-to-fly clinical certification and 6 months of remote follow-up.',
    icon: CheckCircle2
  }
];

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(SPECIALTIES[0].id);
  const [selectedBenchmark, setSelectedBenchmark] = useState<'us' | 'uae' | 'india'>('us');
  const [selectedPackage, setSelectedPackage] = useState<'essential' | 'luxury'>('luxury');

  const [formData, setFormData] = useState({
    specialty: SPECIALTIES[0].name,
    timeframe: 'Immediate (within 3 weeks)',
    age: '',
    gender: 'Female',
    notes: '',
    name: '',
    country: '',
    whatsapp: '',
    email: '',
    package: 'Luxury VIP Concierge',
    fileName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = I18N[lang] || I18N.en;
  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  // Calculator calculations
  const currentSpecialty = SPECIALTIES.find((s) => s.id === selectedSpecialty) || SPECIALTIES[0];
  const pkgOffset = selectedPackage === 'luxury' ? 1200 : 450;
  const iranTotal = currentSpecialty.iranPrice + pkgOffset;

  let benchmarkPrice = currentSpecialty.usUkPrice;
  if (selectedBenchmark === 'uae') benchmarkPrice = currentSpecialty.uaeTurkeyPrice;
  if (selectedBenchmark === 'india') benchmarkPrice = currentSpecialty.indiaPrice;

  const dollarSavings = Math.max(0, benchmarkPrice - iranTotal);
  const percentSavings = Math.round((dollarSavings / benchmarkPrice) * 100);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjykapno', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          language: lang,
          submittedAt: new Date().toISOString(),
          source: 'Maham Health Production Web Portal'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Could not submit inquiry automatically. Please contact us directly at health@maham-group.com or via WhatsApp.');
      }
    } catch (err) {
      alert('Network issue encountered. Please reach our medical team directly at health@maham-group.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const waLink = `https://wa.me/989120000000?text=${encodeURIComponent(
    `Hello Maham Health. I am interested in confidential coordination for: ${formData.specialty}`
  )}`;

  return (
    <div className={`min-h-screen bg-[#08111d] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Header / Language Switcher */}
      <header className="sticky top-0 z-40 bg-[#08111d]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black tracking-widest text-lg shadow-lg shadow-amber-500/10">
              MH
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white uppercase block leading-tight">
                {t.brand}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                Medical Concierge
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6 rtl:space-x-reverse">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-full p-1 text-xs">
              {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((lng) => (
                <button
                  key={lng}
                  onClick={() => setLang(lng)}
                  className={`px-2.5 py-1 rounded-full uppercase font-medium transition-all ${
                    lang === lng
                      ? 'bg-amber-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lng}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setModalOpen(true);
                setStep(1);
              }}
              className="hidden sm:inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>{t.startAssessment}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            {t.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setModalOpen(true);
                setStep(1);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              <span>{t.startAssessment}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
            <a
              href="https://wa.me/989120000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-slate-900/90 hover:bg-slate-800 border border-slate-700 px-7 py-4 rounded-full text-slate-200 font-semibold text-base transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>{t.whatsappDirect}</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-left rtl:text-right">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <Building2 className="w-6 h-6 text-amber-400 mb-2" />
              <div className="text-xl font-bold text-white">{t.statPartners}</div>
              <div className="text-xs text-slate-400 mt-1">Accredited surgical hospitals</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <Award className="w-6 h-6 text-amber-400 mb-2" />
              <div className="text-xl font-bold text-white">{t.statSpecialists}</div>
              <div className="text-xs text-slate-400 mt-1">Academic department heads</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
              <div className="text-xl font-bold text-white">{t.statSavings}</div>
              <div className="text-xs text-slate-400 mt-1">Compared to US & UK rates</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <Clock className="w-6 h-6 text-amber-400 mb-2" />
              <div className="text-xl font-bold text-white">{t.statWait}</div>
              <div className="text-xs text-slate-400 mt-1">Rapid concierge turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Price & Savings Calculator */}
      <section className="py-16 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-amber-400 text-sm font-semibold mb-2">
              <Calculator className="w-4 h-4" />
              <span>TRANSPARENT MEDICAL SAVINGS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              {t.calculatorTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.calculatorSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {t.selectProcedure}
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {t.compareAgainst}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'us', label: 'US / UK' },
                      { key: 'uae', label: 'UAE / TR' },
                      { key: 'india', label: 'India' }
                    ].map((b) => (
                      <button
                        key={b.key}
                        type="button"
                        onClick={() => setSelectedBenchmark(b.key as any)}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                          selectedBenchmark === b.key
                            ? 'bg-amber-500 text-slate-950 border-amber-400'
                            : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {t.packageTier}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPackage('essential')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        selectedPackage === 'essential'
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      Essential Care
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPackage('luxury')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        selectedPackage === 'luxury'
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      Luxury VIP
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Estimated Stay & Recovery in Iran:</span>
                <span className="font-semibold text-slate-200">{currentSpecialty.recoveryDays}</span>
              </div>
            </div>

            {/* Savings Display Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#101b2b] border border-amber-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
                Comparative Cost Summary
              </div>
              <div className="flex items-baseline space-x-2 rtl:space-x-reverse mb-6">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  ${iranTotal.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">USD (Iran Total)</span>
              </div>

              <div className="space-y-3 mb-6 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Selected Benchmark Price:</span>
                  <span className="font-mono text-slate-400 line-through">
                    ${benchmarkPrice.toLocaleString()} USD
                  </span>
                </div>
                <div className="flex justify-between items-center text-amber-400 font-bold text-base">
                  <span>Net Estimated Saving:</span>
                  <span>${dollarSavings.toLocaleString()} ({percentSavings}%)</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, specialty: currentSpecialty.name }));
                  setModalOpen(true);
                  setStep(1);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
              >
                Book Consultation for {currentSpecialty.id}
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
          Official Benchmark Pricing
        </h2>
        <p className="text-sm text-slate-400 mb-8 text-center max-w-2xl mx-auto">
          Compare starting estimates for surgical procedures performed by certified Iranian professors.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left rtl:text-right text-sm">
            <thead className="bg-slate-950/80 text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Clinical Specialty</th>
                <th className="py-4 px-4 text-amber-400 font-bold">Iran Estimate</th>
                <th className="py-4 px-4">India</th>
                <th className="py-4 px-4">UAE / Turkey</th>
                <th className="py-4 px-4">US / UK</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {SPECIALTIES.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">
                    <div>{item.name}</div>
                    <div className="text-xs text-slate-400">{item.category} • Stay: {item.recoveryDays}</div>
                  </td>
                  <td className="py-4 px-4 font-bold text-amber-300">
                    ${item.iranPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-400">
                    ${item.indiaPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-400">
                    ${item.uaeTurkeyPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-400">
                    ${item.usUkPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, specialty: item.name }));
                        setModalOpen(true);
                        setStep(1);
                      }}
                      className="text-xs bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 px-3.5 py-1.5 rounded-lg border border-slate-700 transition-all font-semibold"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-16 bg-slate-950/70 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              {t.timelineTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.timelineSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {JOURNEY_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative flex flex-col justify-between">
                  <div>
                    <div className="text-2xl font-black text-amber-400/30 mb-3">{s.phase}</div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concierge Packages */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            {t.packagesTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.packagesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Essential Care */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-between">
            <div>
              <div className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">Standard Tier</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.essential}</h3>
              <p className="text-slate-400 text-sm mb-6">
                Comprehensive clinical coordination, hospital booking, and primary interpreter services.
              </p>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Medical Visa Authorization code</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>IPD hospital admission & surgery coordination</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dedicated medical translator at hospital</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Post-discharge clinical documentation</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setFormData((prev) => ({ ...prev, package: 'Essential Medical Care' }));
                setModalOpen(true);
                setStep(1);
              }}
              className="w-full py-3 rounded-xl border border-slate-700 hover:border-amber-400 text-white font-semibold text-sm transition-all"
            >
              Select Essential Care
            </button>
          </div>

          {/* Luxury VIP Concierge */}
          <div className="bg-gradient-to-b from-slate-900 to-[#101e33] border-2 border-amber-500/60 rounded-3xl p-8 relative flex flex-col justify-between shadow-2xl">
            <div className="absolute -top-3 right-8 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Recommended
            </div>
            <div>
              <div className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">All-Inclusive Luxury</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.luxury}</h3>
              <p className="text-slate-300 text-sm mb-6">
                White-glove medical tourism: 5-star hotel, private airport transfers, and 24/7 personal handler.
              </p>
              <ul className="space-y-3 text-sm text-slate-200 mb-8">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>VIP fast-track medical visa handling</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>5-Star partnered hotel suites during recovery</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Private chauffeur airport & hospital transfers</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>24/7 Dedicated personal concierge & nursing</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>6 Months remote telemedicine follow-up</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setFormData((prev) => ({ ...prev, package: 'Luxury VIP Concierge' }));
                setModalOpen(true);
                setStep(1);
              }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Select Luxury VIP Concierge
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="text-white font-bold text-base tracking-wider uppercase">MAHAM HEALTH</div>
          <p className="text-slate-400 max-w-md mx-auto">
            A specialized healthcare concierge division under Soorin Maham / Maham Group.
          </p>
          <div className="text-amber-400/90 font-mono">
            Direct Inquiries: health@maham-group.com
          </div>
          <div className="text-slate-400 text-[11px] pt-4 border-t border-slate-900">
            Regional Presence & Coordination Hubs: Tehran • Dubai • Dar es Salaam • New Delhi
          </div>
          <div className="text-[10px] text-slate-400">
            © {new Date().getFullYear()} Maham Health. All clinical procedures require physician sign-off.
          </div>
        </div>
      </footer>

      {/* 3-Step Consultation Wizard Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                {/* Stepper indicator */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 text-xs font-semibold">
                  <span className={step >= 1 ? 'text-amber-400' : 'text-slate-400'}>1. Treatment</span>
                  <span className={step >= 2 ? 'text-amber-400' : 'text-slate-400'}>2. Profile</span>
                  <span className={step >= 3 ? 'text-amber-400' : 'text-slate-400'}>3. Contact & Documents</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Step 1: Treatment & Timeframe */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white mb-2">{t.step1}</h3>
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">Select Specialty</label>
                        <select
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                        >
                          {SPECIALTIES.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1">Travel Timeframe</label>
                        <select
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                        >
                          <option value="Immediate (within 3 weeks)">Immediate (within 3 weeks)</option>
                          <option value="1 to 2 months">1 to 2 months</option>
                          <option value="3 to 6 months">3 to 6 months</option>
                          <option value="Just planning & exploring">Just planning & exploring</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full mt-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition-all"
                      >
                        Continue to Step 2
                      </button>
                    </div>
                  )}

                  {/* Step 2: Medical Profile */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white mb-2">{t.step2}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-slate-300 mb-1">Age</label>
                          <input
                            type="number"
                            name="age"
                            required
                            placeholder="e.g. 35"
                            value={formData.age}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">Gender</label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setFormData((p) => ({ ...p, gender: 'Male' }))}
                              className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                                formData.gender === 'Male'
                                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                                  : 'bg-slate-950 text-slate-300 border-slate-700'
                              }`}
                            >
                              {t.male}
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData((p) => ({ ...p, gender: 'Female' }))}
                              className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                                formData.gender === 'Female'
                                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                                  : 'bg-slate-950 text-slate-300 border-slate-700'
                              }`}
                            >
                              {t.female}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1">Medical Background & Questions</label>
                        <textarea
                          name="notes"
                          rows={3}
                          placeholder="Briefly describe symptoms, previous surgeries, or specific questions..."
                          value={formData.notes}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 py-3 border border-slate-700 text-slate-300 rounded-xl text-sm"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="w-2/3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition-all"
                        >
                          Continue to Step 3
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Verification & Contact */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white mb-2">{t.step3}</h3>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1">{t.uploadLabel}</label>
                        <div className="border border-dashed border-slate-700 rounded-xl p-4 text-center bg-slate-950 hover:border-amber-400 transition-all cursor-pointer relative">
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                          <Upload className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                          <span className="text-xs text-slate-400 block">
                            {formData.fileName ? formData.fileName : 'Click to select medical scans or reports'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-slate-300 mb-1">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">Country of Residence</label>
                          <input
                            type="text"
                            name="country"
                            required
                            placeholder="e.g. Tanzania, UAE, UK"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-slate-300 mb-1">WhatsApp Number</label>
                          <input
                            type="tel"
                            name="whatsapp"
                            required
                            placeholder="+1 234 567 8900"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-1/3 py-3 border border-slate-700 text-slate-300 rounded-xl text-sm"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-md"
                        >
                          {isSubmitting ? 'Submitting...' : t.submit}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Inquiry Received Confidentially</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Our clinical director will evaluate your inquiry and contact you via WhatsApp and Email within 24 hours.
                </p>
                <div className="pt-4">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Open Direct WhatsApp Handoff</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
