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
    name: 'Hair Transplantation (FUE / DHI, 4000+ Grafts)',
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
    id: 'knee-replacement',
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
}> = {
  en: {
    brand: 'Maham Health',
    badge: 'Official Medical Tourism Concierge for Iran',
    heroTitle: 'World-Class Clinical Care in Iran, Curated with Elite Luxury Concierge',
    heroSub: 'Experience 70% to 90% cost savings across 9 elite specialties without compromising on JCI-accredited hospital standards, VIP airport transfers, and private recovery suites.',
    startAssessment: 'Start Free Consultation',
    whatsappDirect: 'WhatsApp Concierge',
    statPartners: 'JCI-Accredited Hospitals',
    statSpecialists: 'Board-Certified Surgeons',
    statSavings: 'Average Cost Savings',
    statWait: 'Immediate Priority Booking',
    calculatorTitle: 'Treatment Cost & Savings Calculator',
    calculatorSub: 'Select your procedure and destination benchmark to instantly preview your transparent medical travel estimate in Iran.',
    selectProcedure: 'Select Medical Procedure',
    compareAgainst: 'Compare Against Benchmark',
    packageTier: 'Concierge Package Level',
    estimatedTotal: 'Estimated Iran Total',
    estimatedSavings: 'Estimated Patient Savings',
    timelineTitle: 'Your Seamless Medical Journey',
    timelineSub: 'From your initial digital diagnosis to your final fit-to-fly clearance in Tehran or Shiraz.',
    packagesTitle: 'Exclusive Concierge Tiers',
    packagesSub: 'Designed for absolute discretion, uncompromising safety, and 24/7 personal medical translation.',
    step1: 'Step 1: Clinical Assessment & Procedure',
    step2: 'Step 2: Timeframe & Patient Details',
    step3: 'Step 3: Contact & Concierge Tier',
    submit: 'Submit Confidential Request',
    male: 'Male',
    female: 'Female'
  },
  fa: {
    brand: 'مهام هلث',
    badge: 'خدمات تشریفات پزشکی رسمی ایران',
    heroTitle: 'درمان پزشکی سطح جهانی در ایران، با خدمات تشریفات لوکس',
    heroSub: '۷۰ تا ۹۰ درصد صرفه‌جویی در هزینه‌های درمانی در ۹ تخصص برتر پزشکی، همراه با بیمارستان‌های دارای استاندارد بین‌المللی JCI، ترنسفر VIP و سوئیت‌های اختصاصی اقامت.',
    startAssessment: 'شروع مشاوره رایگان',
    whatsappDirect: 'ارتباط مستقیم واتساپ',
    statPartners: 'بیمارستان همکار با استاندارد JCI',
    statSpecialists: 'جراح فوق تخصص و بورد تخصصی',
    statSavings: 'میانگین صرفه‌جویی هزینه',
    statWait: 'پذیرش و نوبت‌دهی فوری',
    calculatorTitle: 'محاسبه‌گر هزینه و صرفه‌جویی درمان',
    calculatorSub: 'نوع عمل جراحی و کشور مبدأ را انتخاب کنید تا برآورد شفاف هزینه‌ها در ایران را بلافاصله مشاهده کنید.',
    selectProcedure: 'انتخاب عمل جراحی',
    compareAgainst: 'مقایسه با کشور مبدأ',
    packageTier: 'سطح پکیج تشریفات',
    estimatedTotal: 'برآورد کل هزینه در ایران',
    estimatedSavings: 'صرفه‌جویی تخمینی بیمار',
    timelineTitle: 'سفر درمانی شما با پشتیبانی کامل',
    timelineSub: 'از مشاوره و ارزیابی اولیه پزشکی تا دریافت تأییدیه پرواز در تهران یا شیراز.',
    packagesTitle: 'پکیج‌های انحصاری تشریفات',
    packagesSub: 'طراحی شده برای بالاترین سطح محرمانگی، امنیت کامل و مترجم اختصاصی پزشکی ۲۴ ساعته.',
    step1: 'مرحله ۱: ارزیابی بالینی و انتخاب عمل',
    step2: 'مرحله ۲: زمان‌بندی و مشخصات بیمار',
    step3: 'مرحله ۳: اطلاعات تماس و سطح پکیج',
    submit: 'ارسال درخواست محرمانه',
    male: 'مرد',
    female: 'زن'
  },
  ar: {
    brand: 'مهام هيلث',
    badge: 'الكونسيرج الطبي الرسمي في إيران',
    heroTitle: 'رعاية طبية عالمية المستوى في إيران مع خدمات كونسيرج فاخرة',
    heroSub: 'وفر من 70% إلى 90% من تكاليف العلاج عبر 9 تخصصات طبية رائدة مع مستشفيات معتمدة دولياً واستقبال VIP.',
    startAssessment: 'ابدأ الاستشارة المجانية',
    whatsappDirect: 'مراسلة الواتساب',
    statPartners: 'مستشفيات معتمدة دولياً',
    statSpecialists: 'جراحون معتمدون',
    statSavings: 'متوسط توفير التكاليف',
    statWait: 'حجز فوري وسريع',
    calculatorTitle: 'حاسبة التكاليف والتوفير العلاجي',
    calculatorSub: 'اختر الإجراء الطبي ومقارنة الأسعار لمعاينة تقديرات السفر الطبي في إيران فوراً.',
    selectProcedure: 'اختر الإجراء الطبي',
    compareAgainst: 'المقارنة مع المعيار',
    packageTier: 'مستوى باقة الكونسيرج',
    estimatedTotal: 'الإجمالي المقدر في إيران',
    estimatedSavings: 'التوفير المقدر للمريض',
    timelineTitle: 'رحلتك العلاجية السلسة',
    timelineSub: 'من التشخيص الرقمي الأولي حتى تصريح السفر النهائي في طهران أو شيراز.',
    packagesTitle: 'باقات الكونسيرج الحصرية',
    packagesSub: 'مصممة للخصوصية المطلقة والسلامة التامة والترجمة الطبية على مدار الساعة.',
    step1: 'الخطوة 1: التقييم السريري والإجراء',
    step2: 'الخطوة 2: الإطار الزمني وتفاصيل المريض',
    step3: 'الخطوة 3: الاتصال وباقة الكونسيرج',
    submit: 'إرسال الطلب السرّي',
    male: 'ذكر',
    female: 'أنثى'
  },
  sw: {
    brand: 'Maham Health',
    badge: 'Huduma Rasmi ya Utalii wa Kitiba Iran',
    heroTitle: 'Huduma za Kitiba za Viwango vya Juu nchini Iran',
    heroSub: 'Okoa 70% hadi 90% ya gharama za matibabu katika maalum 9 bila kuacha viwango vya hospitali za JCI.',
    startAssessment: 'Anza Ushauri wa Bure',
    whatsappDirect: 'WhatsApp ya Haraka',
    statPartners: 'Hospitali Zilizoidhinishwa na JCI',
    statSpecialists: 'Madaktari Bingwa',
    statSavings: 'Wastani wa Akiba ya Gharama',
    statWait: 'Kuhifadhi Nafasi Haraka',
    calculatorTitle: 'Kikokotoo cha Gharama za Matibabu',
    calculatorSub: 'Chagua matibabu yako ili uone makadirio ya wazi nchini Iran.',
    selectProcedure: 'Chagua Matibabu',
    compareAgainst: 'Linganisha Na',
    packageTier: 'Kiwango cha Kifurushi',
    estimatedTotal: 'Makadirio ya Jumla Iran',
    estimatedSavings: 'Makadirio ya Akiba',
    timelineTitle: 'Safari Yako ya Matibabu',
    timelineSub: 'Kutoka tathmini ya kwanza hadi kibali cha kusafiri Tehran.',
    packagesTitle: 'Vifurushi Maalum vya VIP',
    packagesSub: 'Imeundwa kwa ajili ya faragha na usalama kamili.',
    step1: 'Hatua ya 1: Tathmini ya Kliniki',
    step2: 'Hatua ya 2: Muda na Taarifa',
    step3: 'Hatua ya 3: Mawasiliano na Kifurushi',
    submit: 'Wasilisha Ombi',
    male: 'Mwanaume',
    female: 'Mwanamke'
  },
  hi: {
    brand: 'महम हेल्थ',
    badge: 'ईरान के लिए आधिकारिक मेडिकल टूरिज्म कॉन्cierge',
    heroTitle: 'ईरान में विश्व स्तरीय चिकित्सा देखभाल',
    heroSub: 'JCI-मान्यता प्राप्त अस्पतालों, वीआईपी ट्रांसफर और निजी सुइट्स के साथ 9 प्रमुख विशिष्टताओं में 70% से 90% की लागत बचत का अनुभव करें।',
    startAssessment: 'निःशुल्क परामर्श शुरू करें',
    whatsappDirect: 'व्हाट्सएप संपर्क',
    statPartners: 'मान्यता प्राप्त अस्पताल',
    statSpecialists: 'बोर्ड-प्रमाणित सर्जन',
    statSavings: 'औसत लागत बचत',
    statWait: 'तत्काल प्राथमिकता बुकिंग',
    calculatorTitle: 'चिकित्सा लागत और बचत कैलकुलेटर',
    calculatorSub: 'ईरान में अपना पारदर्शी चिकित्सा यात्रा अनुमान तुरंत देखने के लिए अपनी प्रक्रिया और बेंचमार्क चुनें।',
    selectProcedure: 'चिकित्सा प्रक्रिया चुनें',
    compareAgainst: 'बेंचमार्क के खिलाफ तुलना करें',
    packageTier: 'कॉन्cierge पैकेज स्तर',
    estimatedTotal: 'अनुमानित ईरान कुल',
    estimatedSavings: 'अनुमानित रोगी बचत',
    timelineTitle: 'आपकी निर्बाध चिकित्सा यात्रा',
    timelineSub: 'तेहरान या शिराज में आपके प्रारंभिक डिजिटल निदान से लेकर आपकी अंतिम फिट-टू-फ्लाई मंजूरी तक।',
    packagesTitle: 'विशेष कॉन्cierge टियर',
    packagesSub: 'पूर्ण विवेक, सुरक्षा और 24/7 व्यक्तिगत चिकित्सा अनुवाद के लिए डिज़ाइन किया गया।',
    step1: 'चरण 1: नैदानिक ​​मूल्यांकन और प्रक्रिया',
    step2: 'चरण 2: समय सीमा और रोगी विवरण',
    step3: 'चरण 3: संपर्क और पैकेज टियर',
    submit: 'गोपनीय अनुरोध सबमिट करें',
    male: 'पुरुष',
    female: 'महिला'
  },
  ur: {
    brand: 'مہام ہیلتھ',
    badge: 'ایران کے لیے سرکاری میڈیکل ٹ্যুরزم کونسیرج',
    heroTitle: 'ایران میں عالمی معیار کی طبی دیکھ بھال، اعلی درجے کے کونسیرج کے ساتھ',
    heroSub: 'JCI سے تسلیم شدہ اسپتالوں، VIP ہوائی اڈے کی منتقلی اور نجی ریکوری سویٹس کے ساتھ 9 اعلی درجے کی خصوصیات میں 70% سے 90% تک لاگت کی بچت کا تجربہ کریں۔',
    startAssessment: 'مفت مشاورت شروع کریں',
    whatsappDirect: 'واٹس ایپ رابطہ',
    statPartners: 'ایسوسی ایٹڈ جے سی آئی اسپتال',
    statSpecialists: 'ماہر سرجنز',
    statSavings: 'اوسط لاگت کی بچت',
    statWait: 'فوری ترجیحی بکنگ',
    calculatorTitle: 'علاج کی لاگت اور بچت کا کیلکولیٹر',
    calculatorSub: 'ایران میں اپنے شفاف میڈیکل ٹریول کے تخمینے کا فوری جائزہ لینے کے لیے اپنے طریقہ کار اور بینچ مارک کا انتخاب کریں۔',
    selectProcedure: 'طبی طریقہ کار منتخب کریں',
    compareAgainst: 'بینچ مارک کا موازنہ',
    packageTier: 'کونسیرج پیکج لیول',
    estimatedTotal: 'تخمینی کل لاگت ایران',
    estimatedSavings: 'تخمینی مریض کی بچت',
    timelineTitle: 'آپ کا ہموار طبی سفر',
    timelineSub: 'تہران یا شیراز میں آپ کی ابتدایی تشخیص سے لے کر حتمی سفر کی منظوری تک۔',
    packagesTitle: 'خصوصی کونسیرج درجے',
    packagesSub: 'مطلق رازداری، غیر سمجھوتہ شدہ حفاظت، اور 24/7 ذاتی طبی ترجمے کے لیے ڈیزائن کیا گیا۔',
    step1: 'مرحلہ 1: طبی تشخیصی تشخیص اور طریقہ کار',
    step2: 'مرحلہ 2: وقت کا فریم اور مریض کی تفصیلات',
    step3: 'مرحلہ 3: رابطہ اور پیکج ٹیر',
    submit: 'حفاظتی درخواست جمع کروائیں',
    male: 'مرد',
    female: 'عورت'
  }
};

const JOURNEY_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Clinical Assessment & Visa',
    desc: 'Secure digital upload of your medical records and scans reviewed directly by our board-certified Iranian specialist team within 24 hours, alongside fast-track medical visa issuance.'
  },
  {
    phase: 'Phase 02',
    title: 'VIP Arrival & Accommodation',
    desc: 'Bespoke airport tarmac reception, expedited VIP customs clearance, private chauffeured luxury transit, and check-in at our partnered 5-star hotel or private recovery suite.'
  },
  {
    phase: 'Phase 03',
    title: 'Hospital & Specialist Care',
    desc: 'Admission to a premier JCI-accredited Tehran or Shiraz medical center with dedicated 24/7 personal bilingual medical translators, private nursing, and luxury ward accommodations.'
  },
  {
    phase: 'Phase 04',
    title: 'Monitored Recovery',
    desc: 'Discharge to your recovery suite with daily post-operative physician check-ups, tailored nutritional plans, and serene concierge-guided recuperation excursions.'
  },
  {
    phase: 'Phase 05',
    title: 'Fit-to-Fly & Telemedicine',
    desc: 'Final medical clearance certificate issued, celebratory VIP airport send-off, and lifelong secure telemedicine follow-ups with your operating surgeon from your home country.'
  }
];

type Props = {
  initialLanguage?: Language;
};

export default function HomePage({ initialLanguage = 'en' }: Props) {
  const [lang, setLang] = useState<Language>(initialLanguage || 'en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

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

  const [calcSpecialtyId, setCalcSpecialtyId] = useState(SPECIALTIES[0].id);
  const [calcBenchmark, setCalcBenchmark] = useState<'us' | 'uae' | 'india'>('us');
  const [calcPackage, setCalcPackage] = useState<'essential' | 'vip'>('vip');

  const specialtySelectId = useId();
  const timeframeSelectId = useId();
  const ageInputId = useId();
  const notesInputId = useId();
  const nameInputId = useId();
  const countryInputId = useId();
  const whatsappInputId = useId();
  const emailInputId = useId();
  const calcSpecialtySelectId = useId();
  const calcBenchmarkSelectId = useId();

  const selectedCalcSpecialty = SPECIALTIES.find((s) => s.id === calcSpecialtyId) || SPECIALTIES[0];
  const packagePriceOffset = calcPackage === 'vip' ? 1200 : 450;
  const iranTotal = selectedCalcSpecialty.iranPrice + packagePriceOffset;

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
      const response = await fetch('https://formspree.io/f/mqakdgrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          specialty,
          timeframe,
          age,
          gender,
          notes,
          name,
          country,
          whatsapp,
          email,
          tier
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again or contact via WhatsApp.');
      }
    } catch {
      alert('Network error. Please try reaching us directly on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/989055240772?text=${encodeURIComponent(
    `Hello Maham Health Concierge, I am interested in ${specialty} and would like to arrange a consultation.`
  )}`;

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#08111d] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200"
    >
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08111d]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-[#08111d] font-black text-xl">M</span>
            </div>
            <div>
              <span className="font-bold text-xl tracking-wider text-white block">{t.brand}</span>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest block font-medium">Soorin Maham Group</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <select
              aria-label="Select Language"
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400"
            >
              <option value="en">English (EN)</option>
              <option value="fa">فارسی (FA)</option>
              <option value="ar">العربية (AR)</option>
              <option value="sw">Kiswahili (SW)</option>
              <option value="hi">हिन्दी (HI)</option>
              <option value="ur">اردو (UR)</option>
            </select>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.whatsappDirect}</span>
            </a>

            <button
              onClick={() => {
                setStep(1);
                setSubmitted(false);
                setIsModalOpen(true);
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#08111d] font-bold px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.startAssessment}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-[#08111d] to-[#08111d] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">{t.heroSub}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setStep(1);
                  setSubmitted(false);
                  setIsModalOpen(true);
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#08111d] font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-3"
              >
                <span>{t.startAssessment}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-8 py-4 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>{t.whatsappDirect}</span>
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-800">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">15+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.statPartners}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">200+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.statSpecialists}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">75-90%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.statSavings}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">24h</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.statWait}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Savings Calculator */}
      <section className="py-20 bg-slate-950/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.calculatorTitle}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.calculatorSub}</p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label htmlFor={calcSpecialtySelectId} className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  {t.selectProcedure}
                </label>
                <select
                  id={calcSpecialtySelectId}
                  value={calcSpecialtyId}
                  onChange={(e) => setCalcSpecialtyId(e.target.value)}
                  className="w-auto max-w-full bg-slate-950 border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor={calcBenchmarkSelectId} className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  {t.compareAgainst}
                </label>
                <select
                  id={calcBenchmarkSelectId}
                  value={calcBenchmark}
                  onChange={(e) => setCalcBenchmark(e.target.value as any)}
                  className="w-auto max-w-full bg-slate-950 border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400"
                >
                  <option value="us">US / UK Average</option>
                  <option value="uae">UAE / Turkey Average</option>
                  <option value="india">India Average</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  {t.packageTier}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcPackage('essential')}
                    className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                      calcPackage === 'essential'
                        ? 'bg-amber-500 text-[#08111d] border-amber-500'
                        : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    Essential Care
                  </button>
                  <button
                    onClick={() => setCalcPackage('vip')}
                    className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                      calcPackage === 'vip'
                        ? 'bg-amber-500 text-[#08111d] border-amber-500'
                        : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    VIP Luxury
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800 text-center">
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Benchmark Price</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-300">${benchmarkPrice.toLocaleString()}</span>
              </div>
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-amber-500/30">
                <span className="text-xs text-amber-400 uppercase tracking-widest block mb-1">{t.estimatedTotal}</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">${iranTotal.toLocaleString()}</span>
              </div>
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-emerald-500/30">
                <span className="text-xs text-emerald-400 uppercase tracking-widest block mb-1">{t.estimatedSavings}</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                  ${dollarSavings.toLocaleString()} ({percentSavings}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Comparison Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Elite Specialties & Transparent Pricing</h2>
            <p className="text-slate-400 text-sm sm:text-base">Compare Iran’s clinical pricing directly against international medical hubs.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 bg-slate-900/50">
                  <th className="p-4 rounded-l-xl">Specialty Procedure</th>
                  <th className="p-4">Recovery</th>
                  <th className="p-4 text-amber-400">Iran (Maham)</th>
                  <th className="p-4">India</th>
                  <th className="p-4">UAE / Turkey</th>
                  <th className="p-4 rounded-r-xl">US / UK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {SPECIALTIES.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-900/30 transition-colors">
                    <td className="p-4 font-semibold text-white">
                      {s.name}
                      <span className="block text-xs text-slate-400 font-normal mt-0.5">{s.category}</span>
                    </td>
                    <td className="p-4 text-slate-300">{s.recoveryDays}</td>
                    <td className="p-4 font-bold text-amber-400">${s.iranPrice.toLocaleString()}</td>
                    <td className="p-4 text-slate-300">${s.indiaPrice.toLocaleString()}</td>
                    <td className="p-4 text-slate-300">${s.uaeTurkeyPrice.toLocaleString()}</td>
                    <td className="p-4 text-slate-400">${s.usUkPrice.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="py-20 bg-slate-950/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.timelineTitle}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.timelineSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {JOURNEY_STEPS.map((stepItem, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">{stepItem.phase}</span>
                  <h3 className="font-bold text-white text-base mb-3">{stepItem.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{stepItem.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Phase {idx + 1} of 5</span>
                  <CheckCircle2 className="w-4 h-4 text-amber-500/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modal Wizard */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Modal"
              className="absolute top-6 right-6 text-slate-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                    Step {step} of 3
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {step === 1 ? t.step1 : step === 2 ? t.step2 : t.step3}
                  </h3>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor={specialtySelectId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                        {t.selectProcedure}
                      </label>
                      <select
                        id={specialtySelectId}
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                      >
                        {SPECIALTIES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} (${s.iranPrice.toLocaleString()})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor={timeframeSelectId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                        Target Timeframe
                      </label>
                      <select
                        id={timeframeSelectId}
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                      >
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="1-3 months">1–3 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-amber-500 hover:bg-amber-400 text-[#08111d] font-bold py-3.5 rounded-xl transition-all mt-4"
                    >
                      Next Step
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={ageInputId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">Patient Age</label>
                        <input
                          id={ageInputId}
                          type="number"
                          placeholder="e.g. 34"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Gender</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setGender('Male')}
                            className={`py-3 rounded-xl text-xs font-bold border ${gender === 'Male' ? 'bg-amber-500 text-[#08111d] border-amber-500' : 'bg-slate-950 text-slate-300 border-slate-700'}`}
                          >
                            {t.male}
                          </button>
                          <button
                            type="button"
                            onClick={() => setGender('Female')}
                            className={`py-3 rounded-xl text-xs font-bold border ${gender === 'Female' ? 'bg-amber-500 text-[#08111d] border-amber-500' : 'bg-slate-950 text-slate-300 border-slate-700'}`}
                          >
                            {t.female}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={notesInputId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">Medical History & Notes</label>
                      <textarea
                        id={notesInputId}
                        rows={3}
                        placeholder="Please share relevant medical history or specific requirements..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="w-1/2 bg-amber-500 hover:bg-amber-400 text-[#08111d] font-bold py-3.5 rounded-xl transition-all"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={nameInputId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">Full Name</label>
                        <input
                          id={nameInputId}
                          type="text"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label htmlFor={countryInputId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">Country of Residence</label>
                        <input
                          id={countryInputId}
                          type="text"
                          placeholder="e.g. United Kingdom"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          required
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={whatsappInputId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">WhatsApp Number</label>
                        <input
                          id={whatsappInputId}
                          type="tel"
                          placeholder="+44 20 7946 0918"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          required
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label htmlFor={emailInputId} className="block text-xs font-semibold text-slate-300 uppercase mb-2">Email Address</label>
                        <input
                          id={emailInputId}
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Select Concierge Tier</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setTier('Essential Care')}
                          className={`p-3 rounded-xl text-left border ${tier === 'Essential Care' ? 'bg-amber-500/10 border-amber-500 text-amber-400' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                        >
                          <span className="font-bold block text-sm text-white">Essential Care</span>
                          <span className="text-xs">+ $650 package</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setTier('Luxury VIP Concierge')}
                          className={`p-3 rounded-xl text-left border ${tier === 'Luxury VIP Concierge' ? 'bg-amber-500/10 border-amber-500 text-amber-400' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                        >
                          <span className="font-bold block text-sm text-white">Luxury VIP</span>
                          <span className="text-xs">+ $1,400 package</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-1/2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-1/2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#08111d] font-bold py-3.5 rounded-xl transition-all shadow-lg"
                      >
                        {submitting ? 'Submitting...' : t.submit}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-amber-400 font-semibold">{name}</span>. Our senior medical concierge has received your details and will contact you via WhatsApp (<span className="text-emerald-400">{whatsapp}</span>) within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl text-sm"
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
