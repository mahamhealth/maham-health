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
        q: 'هل المستشفيات في إيران آمنة ومعتمدة دولياً؟',
        a: 'نعم. تمتلك إيران مستشفيات متطورة معتمدة من JCI وأقسام مخصصة للمرضى الدوليين (IPD).'
      },
      {
        q: 'كيف يتم الدفع الدولي في ظل القيود المصرفية؟',
        a: 'توفر سورين مهام فواتير شركية رسمية آمنة وتدعم القنوات المعتمدة وبطاقات السياح (مه كارد).'
      },
      {
        q: 'هل سأحصل على مترجم ومرافق خاص طوال فترة إقامتي؟',
        a: 'بالتأكيد. يُخصص لكل مريض منسق ومترجم شخصي يرافقه منذ الوصول للمطار وحتى الشفاء التام.'
      },
      {
        q: 'ماذا تتضمن باقات مهام هيلث؟',
        a: 'تغطي الباقات دخول المستشفى، أجور الجراح، الإقامة الفاخرة، الاستقبال في المطار، والتمريض الخاص.'
      },
      {
        q: 'كيف أرسل تقاريري الطبية للتقييم الأولي؟',
        a: 'يمكنك رفع التقارير والصور عبر نموذج الاستشارة أو إرسالها عبر واتساب (+989055240772).'
      }
    ],
    footerAbout: 'مهام هيلث هو خدمة كونسيرج السياحة العلاجية الرائدة تحت إدارة شركة سورين مهام للتجارة وتطوير الصناعة.',
    footerCorporate: 'شركة سورين مهام للتجارة وتطوير الصناعة — الخدمات التجارية والطبية الدولية.',
    footerRights: 'جميع الحقوق محفوظة.',
    currencyLabel: 'العملة'
  },
  sw: {
    brandTitle: 'Maham Health',
    brandSub: 'Soorin Maham Trade & Industry Development Corporation',
    tagline: 'Huduma za Utalii wa Matibabu za Kipekee nchini Iran',
    heroBadge: 'Hospitali Zilizoidhinishwa na JCI • Visa ya Haraka ya Matibabu • Huduma za VIP',
    heroHeading: 'Huduma za Afya za Kiwango cha Dunia nchini Iran kwa Akiba ya 70%–90%',
    heroSub: 'Pata huduma bora za matibabu zinasimamiwa na Soorin Maham. Hospitali zilizoidhinishwa na JCI, madaktari bingwa duniani, na huduma za VIP.',
    ctaBookNow: 'Weka Miadi ya Bure',
    ctaWhatsApp: 'Wasiliana kupitia WhatsApp',
    ctaCalculator: 'Kadiria Gharama na Vifurushi',
    statsSavings: 'Wastani wa Akiba ya Gharama vs Marekani/Ulaya',
    statsHospitals: 'Hospitali Zilizoidhinishwa za IPD',
    statsVisa: 'Msaada wa Visa ya Haraka ya T-Visa',
    statsSupport: 'Msaada wa Wataalamu wa Lugha 24/7',
    calcTitle: 'Kadirio la Gharama za Matibabu na Vifurushi',
    calcSub: 'Chagua huduma yako, kifurushi, na sarafu upate bei rasmi mara moja.',
    selectSpecialty: 'Chagua Huduma ya Matibabu',
    selectPackage: 'Chagua Kifurushi cha Huduma',
    selectCurrency: 'Sarafu',
    estimatedCost: 'Makadirio ya Kifurushi cha Matibabu',
    vsWesternBenchmark: 'Akiba ikilinganishwa na Marekani/UK',
    stayDuration: 'Muda wa Kukaa Hospitalini na Hoteli',
    recoveryDuration: 'Muda wa Kupona Uliokadiriwa',
    daysUnit: 'Siku',
    downloadQuoteBtn: 'Pakua Nukuu Rasmi ya Kampuni (PDF / Chapisha)',
    tierEssential: 'Huduma Muhimu',
    tierEssentialDesc: 'Kukaa hospitalini, ada ya daktari, usafiri wa uwanja wa ndege, na mkalimani.',
    tierPremium: 'Starehe ya Kwanza',
    tierPremiumDesc: 'Yajumuisha hoteli ya nyota 4, usafiri binafsi, visa ya msindikizaji, na simcard.',
    tierVip: 'VIP Elite Concierge',
    tierVipDesc: 'Yajumuisha hoteli ya nyota 5, muuguzi binafsi 24/7, na mapumziko ya VIP CIP uwanjani.',
    specialtiesHeading: 'Huduma Zetu za Matibabu na Linganisho la Gharama',
    specialtiesSub: 'Linganisho la viwango vya kliniki vya Iran na vituo vya kimataifa.',
    compareWithUs: 'Viwango vya Gharama Duniani',
    iranPriceCol: 'Iran (Maham)',
    indiaPriceCol: 'India',
    uaeTurkeyCol: 'UAE / Uturuki',
    usUkCol: 'Marekani / UK',
    detailsBtn: 'Tazama Maelezo ya Utaratibu',
    wizardHeading: 'Anza Safari Yako Salama ya Matibabu',
    wizardSub: 'Jaza fomu yetu ya mashauriano ya hatua 3. Waratibu wetu watajibu ndani ya saa 2.',
    step1Title: '1. Chagua Huduma',
    step2Title: '2. Maelezo ya Mgonjwa',
    step3Title: '3. Tuma Ripoti na Uwasilishe',
    fullName: 'Jina Kamili',
    emailLabel: 'Barua Pepe',
    phoneLabel: 'Namba ya WhatsApp / Simu',
    countryLabel: 'Nchi Unayoishi',
    medicalHistoryLabel: 'Historia ya Matibabu na Maelezo (Hiari)',
    submitWizard: 'Wasilisha Ombi la Siri la Mashauriano',
    successMessage: 'Asante! Ombi lako limewasilishwa kwa usalama. Timu yetu ya matibabu inakagua kesi yako.',
    faqTitle: 'Maswali Yanayoulizwa Mara kwa Mara Kuhusu Utalii wa Matibabu Iran',
    faqSub: 'Kila kitu unachohitaji kujua kuhusu usalama, visa, malipo na viwango vya hospitali.',
    faq: [
      {
        q: 'Je, Visa ya Matibabu ya Iran (T-Visa) inafanya kazi vipi?',
        a: 'Soorin Maham inafanya kazi kama mdhamini wako rasmi. Tunawasilisha nakala ya pasipoti yako na ripoti ya matibabu ili kutoa msimbo wa uidhinishaji wa T-Visa ndani ya siku 3-5 za kazi.'
      },
      {
        q: 'Je, hospitali nchini Iran ziko salama na zimeidhinishwa kimataifa?',
        a: 'Ndio. Iran ina hospitali za kiszenzi zenye uthibitisho wa JCI na Idara Maalum za Wagonjwa wa Kimataifa (IPD).'
      },
      {
        q: 'Malipo ya kimataifa yanafanywaje kutokana na vikwazo vya benki?',
        a: 'Soorin Maham hutoa ankara salama za kisheria na kusaidia njia zilizoidhinishwa za malipo ya kimataifa na kadi za watalii.'
      },
      {
        q: 'Je, nitakuwa na mkalimani na usaidizi binafsi wakati wote wa kukaa kwangu?',
        a: 'Bila shaka. K සෑම mgonjwa hupewa mratibu binafsi wa 24/7 na mkalimani wa matibabu.'
      },
      {
        q: 'Ni nini kimejumuishwa katika vifurushi vya Maham Health?',
        a: 'Kulingana na kifurushi chako (Muhimu, Premium, au VIP), vinajumuisha malazi, ada za daktari na usafiri wa VIP.'
      },
      {
        q: 'Ninawezaje kutuma kumbukumbu zangu za matibabu kwa tathmini ya awali?',
        a: 'Unaweza kupakia skani zako kupitia fomu ya mashauriano au WhatsApp (+989055240772).'
      }
    ],
    footerAbout: 'Maham Health ni huduma kuu ya utalii wa matibabu chini ya Soorin Maham Trade & Industry Development Corporation.',
    footerCorporate: 'Soorin Maham Trade & Industry Development Corporation — Huduma za Biashara na Matibabu za Kimataifa.',
    footerRights: 'Haki zote zimehifadhiwa.',
    currencyLabel: 'Sarafu'
  },
  hi: {
    brandTitle: 'महम हेल्थ (Maham Health)',
    brandSub: 'सूरिन महम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन',
    tagline: 'ईरान में एलीट मेडिकल टूरिज्म कंसर्ज',
    heroBadge: 'JCI मान्यता प्राप्त अस्पताल • फास्ट-ट्रैक मेडिकल टी-वीज़ा • वीआईपी कॉनकॉर्ज़',
    heroHeading: '70%–90% की बचत के साथ ईरान में विश्व स्तरीय स्वास्थ्य सेवा',
    heroSub: 'सूरिन महम के प्रबंधन में एलीट मेडिकल टूरिज्म का अनुभव करें। JCI-मान्यता प्राप्त अस्पताल, विश्व प्रसिद्ध सर्जन और वीआईपी रिकवरी सुइट्स।',
    ctaBookNow: 'निःशुल्क परामर्श बुक करें',
    ctaWhatsApp: 'व्हाट्सएप पर चैट करें',
    ctaCalculator: 'लागत और पैकेज अनुमान लगाएं',
    statsSavings: 'अमेरिका/यूरोप की तुलना में औसत लागत बचत',
    statsHospitals: 'JCI और मंत्रालय मान्यता प्राप्त IPD',
    statsVisa: 'फास्ट-ट्रैक मेडिकल टी-वीज़ा सहायता',
    statsSupport: '24/7 समर्पित बहुभाषी कॉनकॉर्ज़',
    calcTitle: 'इंटरैक्टिव उपचार लागत और पैकेज अनुमानक',
    calcSub: 'तत्काल पारदर्शी मूल्य निर्धारण प्राप्त करने के लिए अपनी विशेषता, पैकेज टियर और मुद्रा चुनें।',
    selectSpecialty: 'चिकित्सा विशेषता चुनें',
    selectPackage: 'केयर पैकेज टियर चुनें',
    selectCurrency: 'मुद्रा',
    estimatedCost: 'अनुमानित उपचार पैकेज',
    vsWesternBenchmark: 'अमेरिका/ब्रिटेन की तुलना में बचत',
    stayDuration: 'अनुशंसित अस्पताल और होटल में ठहरना',
    recoveryDuration: 'अनुमानित रिकवरी समय',
    daysUnit: 'दिन',
    downloadQuoteBtn: 'आधिकारिक ब्रांडेड कोट डाउनलोड करें (PDF / प्रिंट)',
    tierEssential: 'आवश्यक देखभाल (Essential Care)',
    tierEssentialDesc: 'अस्पताल में रहना, सर्जन शुल्क, एयरपोर्ट पिकअप और समर्पित मेडिकल ट्रांसलेटर।',
    tierPremium: 'प्रीमियम कम्फर्ट (Premium Comfort)',
    tierPremiumDesc: '4-स्टार होटल में ठहरना, निजी परिवहन, साथी वीज़ा सहायता और स्थानीय सिम शामिल।',
    tierVip: 'वीआईपी एलीट कॉनकॉर्ज़ (VIP Elite)',
    tierVipDesc: '5-स्टार सुइट आवास, 24/7 निजी नर्स, वीआईपी सीआईपी एयरपोर्ट लाउंज और यात्राएं।',
    specialtiesHeading: 'हमारी मुख्य चिकित्सा विशेषताएं और लागत तुलना',
    specialtiesSub: 'अंतरराष्ट्रीय चिकित्सा केंद्रों के मुकाबले ईरान के नैदानिक ​​मानकों की तुलना करें।',
    compareWithUs: 'वैश्विक लागत बेंचमार्क',
    iranPriceCol: 'ईरान (महम)',
    indiaPriceCol: 'भारत',
    uaeTurkeyCol: 'यूएई / तुर्की',
    usUkCol: 'यूएस / यूके',
    detailsBtn: 'प्रक्रिया विवरण देखें',
    wizardHeading: 'अपनी सुरक्षित चिकित्सा यात्रा शुरू करें',
    wizardSub: 'हमारा 3-चरणीय परामर्श फॉर्म भरें। हमारे मेडिकल कोऑर्डिनेटर 2 घंटे के भीतर जवाब देंगे।',
    step1Title: '1. विशेषता चुनें',
    step2Title: '2. रोगी का विवरण',
    step3Title: '3. मेडिकल रिपोर्ट अपलोड करें',
    fullName: 'पूरा नाम',
    emailLabel: 'ईमेल पता',
    phoneLabel: 'व्हाट्सएप / मोबाइल नंबर',
    countryLabel: 'निवास का देश',
    medicalHistoryLabel: 'चिकित्सा इतिहास और नोट्स (वैकल्पिक)',
    submitWizard: 'गोपनीय परामर्श अनुरोध सबमिट करें',
    successMessage: 'धन्यवाद! आपका अनुरोध सुरक्षित रूप से सबमिट कर दिया गया है। हमारी मेडिकल टीम जल्द संपर्क करेगी।',
    faqTitle: 'ईरान में मेडिकल टूरिज्म के बारे में अक्सर पूछे जाने वाले प्रश्न',
    faqSub: 'सुरक्षा, वीज़ा, भुगतान और अस्पताल के मानकों के बारे में आपको जो कुछ भी जानना आवश्यक है।',
    faq: [
      {
        q: 'ईरान का मेडिकल टी-वीज़ा कैसे काम करता है?',
        a: 'सूरिन महम आपके आधिकारिक गारंटर के रूप में कार्य करता है। हम 3-5 कार्यदिवसों के भीतर टी-वीज़ा प्राधिकरण कोड जारी करने के लिए विदेश मंत्रालय को पासपोर्ट और मेडिकल रिपोर्ट जमा करते हैं।'
      },
      {
        q: 'क्या ईरान के अस्पताल सुरक्षित और अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त हैं?',
        a: 'हाँ। ईरान में JCI मान्यता प्राप्त और समर्पित अंतर्राष्ट्रीय रोगी विभाग (IPD) वाले अत्याधुनिक अस्पताल हैं।'
      },
      {
        q: 'बैंकिंग प्रतिबंधों को देखते हुए अंतरराष्ट्रीय भुगतान कैसे काम करते हैं?',
        a: 'सूरिन महम आधिकारिक सुरक्षित कॉर्पोरेट चालान प्रदान करता है और स्वीकृत अंतरराष्ट्रीय भुगतान चैनलों में सहायता करता है।'
      },
      {
        q: 'क्या मेरे प्रवास के दौरान मेरे पास अनुवादक और निजी सहायता होगी?',
        a: 'बिल्कुल। प्रत्येक रोगी को 24/7 समर्पित व्यक्तिगत कॉनकॉर्ज़ और मेडिकल अनुवादक सौंपा जाता है।'
      },
      {
        q: 'महम हेल्थ केयर पैकेजों में क्या शामिल है?',
        a: 'चुने गए टियर (आवश्यक, प्रीमियम या वीआईपी) के आधार पर, पैकेजों में अस्पताल में प्रवेश, सर्जन शुल्क और होटल शामिल हैं।'
      },
      {
        q: 'डॉक्टर के प्रारंभिक मूल्यांकन के लिए मैं अपने मेडिकल रिकॉर्ड कैसे भेजूं?',
        a: 'आप हमारे 3-चरणीय परामर्श विज़ार्ड के माध्यम से अपने स्कैन और रिपोर्ट अपलोड कर सकते हैं (+989055240772)।'
      }
    ],
    footerAbout: 'महम हेल्थ, सूरिन महम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन के तहत संचालित प्रमुख मेडिकल-टूरिज्म कॉनकॉर्ज़ सेवा है।',
    footerCorporate: 'सूरिन महम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन — अंतर्राष्ट्रीय व्यापार और चिकित्सा सेवाएं।',
    footerRights: 'सर्वाधिकार सुरक्षित।',
    currencyLabel: 'मुद्रा'
  },
  ur: {
    brandTitle: 'مہم ہیلتھ (Maham Health)',
    brandSub: 'سورین مہم ٹریڈ اینڈ انڈسٹری ڈویلپمنٹ کارپوریشن',
    tagline: 'ایران میں ایلیٹ میڈیکل ٹ্যুরিজم کانسیرج',
    heroBadge: 'JCI سے تصدیق شدہ اسپتال • تیز رفتار میڈیکل ٹی ویزا • وی آئی پی خدمات',
    heroHeading: 'ایران میں دنیا بھر کے معیار کی طبی سہولیات 70% تا 90% بچت کے ساتھ',
    heroSub: 'سورین مہم کے تحت ایلیٹ میڈیکل ٹ্যুরিজم کا تجربہ کریں۔ JCI مصدقہ اسپتال، عالمی شہرت یافتہ سرجن اور VIP پرائیویٹ ریکوری سویٹس۔',
    ctaBookNow: 'مفت مشاورت بک کریں',
    ctaWhatsApp: 'واٹس ایپ پر بات کریں',
    ctaCalculator: 'لاگت اور پیکجز کا تخمینہ لگائیں',
    statsSavings: 'امریکہ اور یورپ کے مقابلے میں اوسط اخراجات کی بچت',
    statsHospitals: 'JCI اور وزارت صحت سے منظور شدہ اسپتال',
    statsVisa: 'فوری میڈیکل ٹی ویزا (T-Visa) سپورٹ',
    statsSupport: '24/7 سرشار کثیر لسانی کانسیرج',
    calcTitle: 'انٹرایکٹو علاج کی لاگت اور پیکج کیلکولیٹر',
    calcSub: 'فوری شفاف قیمتوں کے لیے اپنی طبی تخصیص، پیکج کا درجہ اور ترجیحی کرنسی منتخب کریں۔',
    selectSpecialty: 'طبی شعبہ منتخب کریں',
    selectPackage: 'کیر پیکج کا درجہ منتخب کریں',
    selectCurrency: 'کرنسی',
    estimatedCost: 'تخمینی علاج کا پیکজ',
    vsWesternBenchmark: 'امریکہ / برطانیہ کے مقابلے میں بچت',
    stayDuration: 'اسپتال اور ہوٹل میں تجویز کردہ قیام',
    recoveryDuration: 'تخمینی صحت یابی کا وقت',
    daysUnit: 'دن',
    downloadQuoteBtn: 'آفیشل برانডেڈ کوٹ ڈاؤن لوڈ کریں (PDF / پرنٹ)',
    tierEssential: 'ضروری دیکھ بھال (Essential)',
    tierEssentialDesc: 'اسپتال میں قیام، سرجن کی فیس، ایئرپورٹ پک اپ اور میڈیکل مترجم۔',
    tierPremium: 'پریمیم کمفرٹ (Premium)',
    tierPremiumDesc: '4 اسٹار ہوٹل کا قیام، نجی ٹرانسپورٹ، همراهی ویزا اور مقامی سم کارڈ۔',
    tierVip: 'وی آئی پی ایلیট (VIP Elite)',
    tierVipDesc: '5 اسٹار ہوٹل، 24/7 نجی نرس، VIP CIP ایئرپورٹ لاؤنج اور تفریحی دورے۔',
    specialtiesHeading: 'ہمارے اہم طبی شعبے اور لاگت کا موازنہ',
    specialtiesSub: 'بین الاقوامی طبی مرکزوں کے مقابلے میں ایران کے طبی معیارات کا موازنہ کریں۔',
    compareWithUs: 'عالمی لاگت کے معیارات',
    iranPriceCol: 'ایران (مہم)',
    indiaPriceCol: 'بھارت',
    uaeTurkeyCol: 'متحدہ عرب امارات / ترکی',
    usUkCol: 'امریکہ / برطانیہ',
    detailsBtn: 'طریقہ کار کی تفصیلات دیکھیں',
    wizardHeading: 'اپنے محفوظ طبی سفر کا آغاز کریں',
    wizardSub: 'ہمارا 3 مراحل پر مشتمل مشاورتی فارম پُر کریں۔ ہمارے کواڈینیٹرز 2 گھنٹے میں جواب دیں گے۔',
    step1Title: '1. شعبہ منتخب کریں',
    step2Title: '2. مریض کی تفصیلات',
    step3Title: '3. میڈیکل رپورٹس اپ لوڈ کریں',
    fullName: 'पूरा نام / مکمل نام',
    emailLabel: 'ای میل ایڈریس',
    phoneLabel: 'واٹس ایپ / موبائل نمبر',
    countryLabel: 'رہائش کا ملک',
    medicalHistoryLabel: 'طبی تاریخ اور نوٹس (اختیاری)',
    submitWizard: 'خفیہ مشاورت کی درخواست جمع کروائیں',
    successMessage: 'شکریہ! آپ کی درخواست کامیابی سے جمع ہو گئی ہے۔ ہماری میڈیکل ٹیم جلد رابطہ کرے گی۔',
    faqTitle: 'ایران میں میڈیکل ٹ্যুরিজم کے بارے میں اکثر پوچھے جانے والے سوالات',
    faqSub: 'حفاظت، ویزا، ادئگیوں اور اسپتال کے معیارات کے بارے میں تمام ضروری معلومات۔',
    faq: [
      {
        q: 'ایران کا میڈیکل ٹی ویزا (T-Visa) کیسے کام کرتا ہے؟',
        a: 'سورین مہم آپ کے باضابطہ ضامن کے طور پر کام کرتا ہے۔ ہم پاسپورٹ کی نقل اور میڈیکل رپورٹ وزارت خارجہ کو جمع کرواتے ہیں تاکہ 3 سے 5 یومِ کار میں ٹی ویزا کوڈ جاری کیا جا سکے।'
      },
      {
        q: 'کیا ایران کے اسپتال محفوظ اور بین الاقوامی سطح پر تصدیق شدہ ہیں؟',
        a: 'ہاں۔ ایران میں JCI سے تصدیق شدہ جدید ترین اسپتال اور بین الاقوامی مریضوں کے محکمے (IPD) موجود ہیں۔'
      },
      {
        q: 'بین الاقوامی پابندیوں کے پیشِ نظر مالی لین دین کیسے ہوتا ہے؟',
        a: 'سورین مہم سرکاری اور محفوظ کارپوریٹ انوائس فراہم کرتا ہے اور منظور شدہ بین الاقوامی ادائیگی کے ذرائع میں مدد کرتا ہے۔'
      },
      {
        q: 'کیا میرے قیام کے دوران مترجم اور نجی مددگار موجود ہوگا؟',
        a: 'بالکل۔ ہر مریض کو 24/7 ذاتی کانسیرج اور میڈیکل مترجم فراہم کیا جاتا ہے جو آپ کے ساتھ رہتا ہے۔'
      },
      {
        q: 'مہم ہیلتھ کے کیر پیکجز میں کیا شامل ہے؟',
        a: 'آپ کے منتخب کردہ درجے (اسنشیل، پریمیم یا وی آئی پی) کے مطابق، پیکجز میں اسپتال، فیس، ہوٹل اور ٹرانسفر شامل ہیں۔'
      },
      {
        q: 'ڈاکٹر کے ابتدائی معائنے کے لیے میں اپنی میڈیکل رپورٹس کیسے بھیجوں؟',
        a: 'آپ ہمارے 3 قدمی مشاورتی وزرڈ کے ذریعے یا واٹس ایپ پر براہ راست اپنے اسکینز اور رپورٹس اپ لوڈ کر سکتے ہیں (+989055240772)।'
      }
    ],
    footerAbout: 'مہم ہیلتھ، سورین مہم ٹریڈ اینڈ انڈسٹری डेवलपमेंट کارپوریشن کے تحت چلنے والی ایک نمایاں میڈیکل ٹ্যুরিজم کانسیرج سروس ہے۔',
    footerCorporate: 'سورین مہم ٹریڈ اینڈ انڈسٹری डेवलपमेंट کارپوریشن — بین الاقوامی تجارت اور طبی خدمات۔',
    footerRights: 'تمام حقوق محفوظ ہیں۔',
    currencyLabel: 'کرنسی'
  }
};
