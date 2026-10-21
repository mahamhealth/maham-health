export type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

export const LOCALES: { code: Language; name: string; native: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', name: 'English', native: 'English', dir: 'ltr' },
  { code: 'fa', name: 'Persian', native: 'فارسی', dir: 'rtl' },
  { code: 'ar', name: 'Arabic', native: 'العربية', dir: 'rtl' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', native: 'اردو', dir: 'rtl' }
];

export const RTL_LANGUAGES: Language[] = ['fa', 'ar', 'ur'];

export const SITE_URL = 'https://mahamhealth.github.io/maham-health';

export interface FaqItem {
  q: string;
  a: string;
}

export interface I18nSet {
  brandTitle: string;
  brandSub: string;
  tagline: string;
  heroBadge: string;
  heroHeading: string;
  heroSub: string;
  ctaBookNow: string;
  ctaWhatsApp: string;
  ctaCalculator: string;
  
  statsSavings: string;
  statsHospitals: string;
  statsVisa: string;
  statsSupport: string;

  calcTitle: string;
  calcSub: string;
  selectSpecialty: string;
  selectPackage: string;
  selectCurrency: string;
  estimatedCost: string;
  vsWesternBenchmark: string;
  stayDuration: string;
  recoveryDuration: string;
  daysUnit: string;
  downloadQuoteBtn: string;

  tierEssential: string;
  tierEssentialDesc: string;
  tierPremium: string;
  tierPremiumDesc: string;
  tierVip: string;
  tierVipDesc: string;

  specialtiesHeading: string;
  specialtiesSub: string;
  compareWithUs: string;
  iranPriceCol: string;
  indiaPriceCol: string;
  uaeTurkeyCol: string;
  usUkCol: string;
  detailsBtn: string;

  wizardHeading: string;
  wizardSub: string;
  step1Title: string;
  step2Title: string;
  step3Title: string;
  fullName: string;
  emailLabel: string;
  phoneLabel: string;
  countryLabel: string;
  medicalHistoryLabel: string;
  submitWizard: string;
  successMessage: string;

  faqTitle: string;
  faqSub: string;
  faq: FaqItem[];

  footerAbout: string;
  footerCorporate: string;
  footerRights: string;
  currencyLabel: string;
}

export const CURRENCY_RATES: Record<string, { rate: number; symbol: string }> = {
  USD: { rate: 1, symbol: '$' },
  EUR: { rate: 0.92, symbol: '€' },
  AED: { rate: 3.67, symbol: 'AED ' },
  GBP: { rate: 0.79, symbol: '£' },
  OMR: { rate: 0.38, symbol: 'OMR ' },
  INR: { rate: 83.2, symbol: '₹' }
};

export const TRANSLATIONS: Record<Language, I18nSet> = {
  en: {
    brandTitle: 'Maham Health',
    brandSub: 'Soorin Maham Trade & Industry Development Corporation',
    tagline: 'Elite Medical Tourism Concierge in Iran',
    heroBadge: 'JCI Accredited Hospitals • Fast-Track Medical T-Visa • VIP Concierge',
    heroHeading: 'World-Class Healthcare in Iran with 70%–90% Savings',
    heroSub: 'Experience elite medical tourism managed by Soorin Maham. JCI-accredited hospitals, world-renowned surgeons, VIP private recovery suites, and end-to-end concierge care.',
    ctaBookNow: 'Book Free Consultation',
    ctaWhatsApp: 'Chat on WhatsApp',
    ctaCalculator: 'Estimate Cost & Packages',
    statsSavings: 'Average Cost Savings vs US/EU',
    statsHospitals: 'JCI & Ministry Accredited IPD',
    statsVisa: 'Fast-Track Medical T-Visa Support',
    statsSupport: '24/7 Dedicated Multilingual Concierge',
    calcTitle: 'Interactive Treatment Cost & Package Estimator',
    calcSub: 'Select your specialty, package tier, and preferred currency to get instant transparent pricing.',
    selectSpecialty: 'Select Medical Specialty',
    selectPackage: 'Select Care Package Tier',
    selectCurrency: 'Currency',
    estimatedCost: 'Estimated Treatment Package',
    vsWesternBenchmark: 'Savings compared to US/UK benchmark',
    stayDuration: 'Recommended Hospital & Hotel Stay',
    recoveryDuration: 'Estimated Recovery Time',
    daysUnit: 'Days',
    downloadQuoteBtn: 'Download Official Branded Quote (PDF / Print)',
    tierEssential: 'Essential Care',
    tierEssentialDesc: 'Hospital stay, surgeon fees, airport pickup, and dedicated medical interpreter.',
    tierPremium: 'Premium Comfort',
    tierPremiumDesc: 'Adds 4-star hotel stay, private transport, companion visa support, and local SIM.',
    tierVip: 'VIP Elite Concierge',
    tierVipDesc: 'Adds 5-star suite accommodation, 24/7 private nurse, VIP CIP airport lounge & excursions.',
    specialtiesHeading: 'Our Core Medical Specialties & Cost Comparison',
    specialtiesSub: 'Compare Iran’s elite clinical standards against international medical hubs.',
    compareWithUs: 'Global Cost Benchmarks',
    iranPriceCol: 'Iran (Maham)',
    indiaPriceCol: 'India',
    uaeTurkeyCol: 'UAE / Turkey',
    usUkCol: 'US / UK',
    detailsBtn: 'View Procedure Details & Timeline',
    wizardHeading: 'Start Your Secure Medical Journey',
    wizardSub: 'Fill out our 3-step consultation form. Our medical coordinators will reply within 2 hours.',
    step1Title: '1. Select Specialty',
    step2Title: '2. Patient Details',
    step3Title: '3. Medical Upload & Submit',
    fullName: 'Full Name',
    emailLabel: 'Email Address',
    phoneLabel: 'WhatsApp / Mobile Number',
    countryLabel: 'Country of Residence',
    medicalHistoryLabel: 'Medical History & Notes (Optional)',
    submitWizard: 'Submit Confidential Consultation Request',
    successMessage: 'Thank you! Your request has been securely submitted. Our medical team is reviewing your case and will contact you via WhatsApp shortly.',
    faqTitle: 'Frequently Asked Questions about Medical Tourism in Iran',
    faqSub: 'Everything you need to know about safety, visas, payments, and hospital standards.',
    faq: [
      {
        q: 'How does the Iranian Medical T-Visa work?',
        a: 'Soorin Maham acts as your official guarantor and medical liaison. We submit your passport copy and medical report to the Ministry of Foreign Affairs to issue your official Medical T-Visa authorization code within 3–5 working days, allowing smooth visa stamping at your nearest Iranian embassy or on arrival.'
      },
      {
        q: 'Are the hospitals in Iran safe and internationally accredited?',
        a: 'Yes. Iran features state-of-the-art hospitals with JCI (Joint Commission International) accreditations and dedicated International Patient Departments (IPD) equipped with cutting-edge medical technology matching US and German standards.'
      },
      {
        q: 'How do international payments work given banking sanctions?',
        a: 'Soorin Maham provides official, secure corporate invoicing and assists patients with approved international payment channels, tourist debit cards (MahCard/Daric), or direct wire transfers to corporate accounts.'
      },
      {
        q: 'Will I have a translator and private support during my stay?',
        a: 'Absolutely. Every patient is assigned a 24/7 dedicated personal concierge and medical translator who accompanies you from airport arrival through consultations, surgery, and post-op recovery.'
      },
      {
        q: 'What is included in the Maham Health care packages?',
        a: 'Depending on your chosen tier (Essential, Premium, or VIP), packages cover hospital admission, surgeon fees, luxury hotel or suite stay, VIP airport transfers, private nursing, and local telecommunications.'
      },
      {
        q: 'How do I send my medical records for a preliminary doctor evaluation?',
        a: 'You can upload your diagnostic scans, photos, or lab results directly through our 3-step consultation wizard or send them securely via our 24/7 WhatsApp concierge (+989055240772).'
      }
    ],
    footerAbout: 'Maham Health is the premier medical-tourism concierge service operated under Soorin Maham Trade & Industry Development Corporation, connecting international patients with Iran’s elite medical specialists.',
    footerCorporate: 'Soorin Maham Trade & Industry Development Corporation — Registered International Trade & Medical Services.',
    footerRights: 'All rights reserved.',
    currencyLabel: 'Currency'
  },
  fa: {
    brandTitle: 'مهم سلامت (Maham Health)',
    brandSub: 'شرکت توسعه صنعت و تجارت سورین مهام',
    tagline: 'پرفروش‌ترین و معتبرترین خدمات گردشگری پزشکی در ایران',
    heroBadge: 'بیمارستان‌های دارای استاندارد JCI • ویزای درمانی فوری (T-Visa) • خدمات تشریفات VIP',
    heroHeading: 'خدمات پزشکی و درمانی سطح جهانی در ایران با ۷۰٪ تا ۹۰٪ صرفه‌جویی',
    heroHeading: 'خدمات پزشکی و درمانی سطح جهانی در ایران با ۷۰٪ تا ۹۰٪ صرفه‌جویی',
    heroSub: 'تجربه گردشگری پزشکی لوکس زیر نظر سورین مهام. بیمارستان‌های مجهز، جراحان برجسته بین‌المللی، سوئیت‌های اختصاصی اقامتی و پشتیبانی ۲۴ ساعته.',
    ctaBookNow: 'رزرو مشاوره رایگان پزشکی',
    ctaWhatsApp: 'گفتگو در واتساپ',
    ctaCalculator: 'محاسبه آنلاین هزینه و پکیج‌ها',
    statsSavings: 'میانگین صرفه‌جویی هزینه در مقایسه با آمریکا و اروپا',
    statsHospitals: 'بیمارستان‌های تخصصی با مجوز رسمی IPD',
    statsVisa: 'پشتیبانی سریع صدور ویزای درمانی (T-Visa)',
    statsSupport: 'پشتیبان اختصاصی و مترجم چندزبانه ۲۴/۷',
    calcTitle: 'محاسبه‌گر تعاملی هزینه‌ها و پکیج‌های درمانی',
    calcSub: 'تخصص، سطح پکیج و ارز مورد نظر خود را انتخاب کنید تا قیمت شفاف را فورا مشاهده کنید.',
    selectSpecialty: 'انتخاب تخصص پزشکی',
    selectPackage: 'انتخاب سطح پکیج خدماتی',
    selectCurrency: 'واحد پول',
    estimatedCost: 'برآورد هزینه پکیج درمانی',
    vsWesternBenchmark: 'صرفه‌جویی نسبت به میانگین آمریکا و اروپا',
    stayDuration: 'مدت اقامت پیشنهادی در بیمارستان و هتل',
    recoveryDuration: 'مدت زمان تخمینی بهبودی',
    daysUnit: 'روز',
    downloadQuoteBtn: 'دانلود پیش‌فاکتور رسمی شرکتی (PDF / پرینت)',
    tierEssential: 'پکیج مراقبت اساسی',
    tierEssentialDesc: 'اقامت در بیمارستان، هزینه‌های جراح، ترانسفر فرودگاهی و مترجم اختصاصی پزشکی.',
    tierPremium: 'پکیج راحتی ممتاز',
    tierPremiumDesc: 'شامل اقامت در هتل ۴ ستاره، ترانسفر خصوصی، ویزای همراه و سیمکارت محلی.',
    tierVip: 'پکیج تشریفات VIP الیت',
    tierVipDesc: 'شامل هتل ۵ ستاره، پرستار خصوصی ۲۴ ساعته، تشریفات CIP فرودگاه و گشت‌های شهری.',
    specialtiesHeading: 'تخصص‌های پزشکی و مقایسه هزینه جهانی',
    specialtiesSub: 'مقایسه استانداردهای بالینی ایران با سایر هاب‌های پزشکی دنیا.',
    compareWithUs: 'مقایسه هزینه جهانی',
    iranPriceCol: 'ایران (مهام)',
    indiaPriceCol: 'هند',
    uaeTurkeyCol: 'امارات / ترکیه',
    usUkCol: 'آمریکا / انگلیس',
    detailsBtn: 'مشاهده جزئیات روند درمان',
    wizardHeading: 'شروع فرآیند امن سفر درمانی',
    wizardSub: 'فرم مشاوره ۳ مرحله‌ای را تکمیل کنید. هماهنگ‌کنندگان پزشکی ما ظرف ۲ ساعت پاسخ خواهند داد.',
    step1Title: '۱. انتخاب تخصص',
    step2Title: '۲. اطلاعات بیمار',
    step3Title: '۳. ارسال مدارک پزشکی',
    fullName: 'نام و نام خانوادگی',
    emailLabel: 'آدرس ایمیل',
    phoneLabel: 'شماره واتساپ / موبایل',
    countryLabel: 'کشور محل سکونت',
    medicalHistoryLabel: 'سوابق پزشکی و توضیحات (اختیاری)',
    submitWizard: 'ارسال درخواست مشاوره محرمانه',
    successMessage: 'با سپاس! درخواست شما با موفقیت ثبت شد. تیم پزشکی ما پرونده شما را بررسی کرده و به زودی از طریق واتساپ با شما تماس خواهد گرفت.',
    faqTitle: 'سوالات متداول گردشگری پزشکی در ایران',
    faqSub: 'هرآنچه باید درباره امنیت، ویزا، پرداخت‌ها و استانداردهای بیمارستانی بدانید.',
    faq: [
      {
        q: 'ویزای درمانی (T-Visa) ایران چگونه صادر می‌شود؟',
        a: 'شرکت سورین مهام به عنوان ضامن رسمی شما، تصویر پاسپورت و مدارک پزشکی شما را به وزارت امور خارجه ارسال کرده و کد رهگیری ویزای درمانی را ظرف ۳ الی ۵ روز کاری صادر می‌کند تا در سفارت یا فرودگاه ویزای شما صادر شود.'
      },
      {
        q: 'آیا بیمارستان‌های ایران ایمن و دارای استانداردهای بین‌المللی هستند؟',
        a: 'بله. ایران دارای بیمارستان‌های فوق پیشرفته با استانداردهای بین‌المللی JCI و بخش‌های اختصاصی بیماران بین‌الملل (IPD) مجهز به فناوری‌های روز دنیا است.'
      },
      {
        q: 'با وجود تحریم‌های بانکی، پرداخت‌های بین‌المللی چگونه انجام می‌شود؟',
        a: 'سورین مهام فاکتورهای رسمی شرکتی امن صادر کرده و راهکارهای تاییدشده انتقال وجه، کارت‌های اعتباری گردشگری (مه‌کارت) یا صرافی‌های معتبر را فراهم می‌کند.'
      },
      {
        q: 'آیا در طول اقامت مترجم و همراه اختصاصی خواهم داشت؟',
        a: 'قطعاً. به هر بیمار یک مشاور و مترجم اختصاصی ۲۴ ساعته اختصاص می‌یابد که از فرودگاه تا ترخیص و بهبودی کامل همراه شماست.'
      },
      {
        q: 'پکیج‌های خدماتی مهام سلامت شامل چه مواردی است؟',
        a: 'بسته به پکیج انتخابی (اساسی، ممتاز یا VIP)، خدمات شامل پذیرش بیمارستان، دستمزد جراح، هتل یا سوئیت لوکس، ترانسفر CIP، پرستار خصوصی و ارتباطات است.'
      },
      {
        q: 'چگونه مدارک پزشکی خود را برای ارزیابی اولیه پزشک ارسال کنم؟',
        a: 'شما می‌توانید اسکن‌ها و مدارک خود را از طریق ویزارد مشاوره یا واتساپ اختصاصی (+989055240772) به صورت امن ارسال کنید.'
      }
    ],
    footerAbout: 'مهم سلامت (Maham Health) سرویس پیشتاز گردشگری پزشکی تحت نظارت شرکت توسعه صنعت و تجارت سورین مهام است که بیماران بین‌المللی را به متخصصان برتر ایران متصل می‌کند.',
    footerCorporate: 'شرکت توسعه صنعت و تجارت سورین مهام — خدمات بازرگانی و پزشکی بین‌المللی.',
    footerRights: 'تمامی حقوق محفوظ است.',
    currencyLabel: 'واحد پول'
  },
  ar: {
    brandTitle: 'مهام هيلث (Maham Health)',
    brandSub: 'شركة سورين مهام للتجارة وتطوير الصناعة',
    tagline: 'كونسيرج السياحة العلاجية النخبة في إيران',
    heroBadge: 'مستشفيات معتمدة من JCI • تأشيرة علاجية سريعة • خدمات VIP',
    heroHeading: 'رعاية صحية عالمية المستوى في إيران بتوفير 70٪ إلى 90٪',
    heroSub: 'اختبر السياحة العلاجية الفاخرة تحت إدارة سورين مهام. مستشفيات معتمدة دولياً، أطباء عالميون، وأجنحة استشفاء خاصة.',
    ctaBookNow: 'احجز استشارة مجانية',
    ctaWhatsApp: 'تواصل عبر واتساب',
    ctaCalculator: 'حساب التكاليف والباقات',
    statsSavings: 'متوسط توفير التكاليف مقارنة بأمريكا وأوروبا',
    statsHospitals: 'مستشفيات معتمدة لمرضى الدوليين IPD',
    statsVisa: 'دعم سريع لاستخراج التأشيرة العلاجية T-Visa',
    statsSupport: 'فريق دعم ومترجمون متعددوا اللغات على مدار الساعة',
    calcTitle: 'حاسبة تكاليف العلاج والباقات التفاعلية',
    calcSub: 'اختر تخصصك الطبي، مستوى الباقة، والعملة المفضلة للحصول على تقدير سعر دقيق وفوري.',
    selectSpecialty: 'اختر التخصص الطبي',
    selectPackage: 'اختر فئة الباقة',
    selectCurrency: 'العملة',
    estimatedCost: 'تكلفة باقة العلاج المقدرة',
    vsWesternBenchmark: 'التوفير مقارنة بمعايير الولايات المتحدة وأوروبا',
    stayDuration: 'الإقامة الموصى بها في المستشفى والفندق',
    recoveryDuration: 'وقت التعافي المقدر',
    daysUnit: 'أيام',
    downloadQuoteBtn: 'تحميل عرض الأسعار الرسمي (PDF / طباعة)',
    tierEssential: 'العناية الأساسية',
    tierEssentialDesc: 'إقامة المستشفى، رسوم الجراح، الاستقبال بالمطار، ومترجم طبي.',
    tierPremium: 'الراحة الممتازة',
    tierPremiumDesc: 'يضيف إقامة فندق 4 نجوم، مواصلات خاصة، تأشيرة المرافق، وشريحة اتصال.',
    tierVip: 'كبار الشخصيات VIP',
    tierVipDesc: 'يضيف جناح فندق 5 نجوم، ممرضة خاصة على مدار الساعة، صالة CIP بالمطار وجولات.',
    specialtiesHeading: 'تخصصاتنا الطبية ومقارنة الأسعار العالمية',
    specialtiesSub: 'قارن المعايير السريرية الرائدة في إيران مع المراكز الطبية العالمية.',
    compareWithUs: 'معايير التكلفة العالمية',
    iranPriceCol: 'إيران (مهام)',
    indiaPriceCol: 'الهند',
    uaeTurkeyCol: 'الإمارات / تركيا',
    usUkCol: 'أمريكا / بريطانيا',
    detailsBtn: 'عرض تفاصيل الإجراء',
    wizardHeading: 'ابدأ رحلتك العلاجية الآمنة',
    wizardSub: 'املأ نموذج الاستشارة المكون من 3 خطوات. سيقوم منسقونا الطبيون بالرد خلال ساعتين.',
    step1Title: '1. اختر التخصص',
    step2Title: '2. بيانات المريض',
    step3Title: '3. إرسال التقارير الطبية',
    fullName: 'الاسم الكامل',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الواتساب / الجوال',
    countryLabel: 'دولة الإقامة',
    medicalHistoryLabel: 'التاريخ الطبي وملاحظات (اختياري)',
    submitWizard: 'إرسال طلب الاستشارة السرية',
    successMessage: 'شكراً لك! تم إرسال طلبك بنجاح. يقوم فريقنا الطبي بمراجعة حالتك وسيتواصل معك عبر واتساب قريباً.',
    faqTitle: 'الأسئلة الشائعة حول السياحة العلاجية في إيران',
    faqSub: 'كل ما تحتاج معرفته حول الأمان، التأشيرات، المدفوعات ومعايير المستشفيات.',
    faq: [
      {
        q: 'كيف تعمل تأشيرة العلاج الإيرانية (T-Visa)؟',
        a: 'تعمل شركة سورين مهام كضامن رسمي لك. نرسل صورة جواز السفر والتقرير الطبي لوزارة الخارجية لإصدار رمز الموافقة خلال 3-5 أيام عمل.'
      },
      {
        q: 'هل المستشفيات في
