// src/data/translations.ts

export type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

export interface LocaleInfo {
  code: Language;
  name: string;
  native: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES: LocaleInfo[] = [
  { code: 'en', name: 'English', native: 'English', dir: 'ltr' },
  { code: 'fa', name: 'Persian', native: 'فارسی', dir: 'rtl' },
  { code: 'ar', name: 'Arabic', native: 'العربية', dir: 'rtl' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', native: 'اردو', dir: 'rtl' },
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

export const CURRENCY_RATES: Record<string, { rate: number; symbol: string; name: string }> = {
  USD: { rate: 1.0, symbol: '$', name: 'USD ($)' },
  EUR: { rate: 0.92, symbol: '€', name: 'EUR (€)' },
  AED: { rate: 3.67, symbol: 'AED ', name: 'AED (د.إ)' },
  GBP: { rate: 0.79, symbol: '£', name: 'GBP (£)' },
  OMR: { rate: 0.38, symbol: 'OMR ', name: 'OMR (ر.ع.)' },
  INR: { rate: 83.2, symbol: '₹', name: 'INR (₹)' },
};

export const TRANSLATIONS: Record<Language, I18nSet> = {
  en: {
    brandTitle: 'Maham Health',
    brandSub: 'Soorin Maham Trade & Industry Development Corporation',
    tagline: 'Official Medical Tourism Concierge for Iran',
    heroBadge: 'JCI Accredited Hospitals • Fast-Track Medical T-Visa • VIP Concierge',
    heroHeading: 'World-Class Healthcare in Iran with 70%–90% Savings',
    heroSub: 'Experience elite medical tourism coordinated by Soorin Maham. JCI-accredited hospitals in Tehran, Shiraz, and Kish, backed by 24/7 bilingual VIP concierge and direct WhatsApp support.',
    ctaBookNow: 'Book Free Consultation',
    ctaWhatsApp: 'WhatsApp VIP Support',
    ctaCalculator: 'Cost Estimator',
    statsSavings: '70%–90% Cost Savings vs US/UK',
    statsHospitals: 'JCI & IPD Certified Hospitals',
    statsVisa: 'Fast-Track Medical T-Visa Support',
    statsSupport: '24/7 Dedicated Bilingual Concierge',
    calcTitle: 'Interactive Treatment Cost & Package Estimator',
    calcSub: 'Select your medical procedure, preferred service tier, and currency to calculate your custom treatment plan in Iran.',
    selectSpecialty: 'Select Medical Procedure',
    selectPackage: 'Select Service Tier',
    selectCurrency: 'Currency',
    estimatedCost: 'Estimated Total in Iran',
    vsWesternBenchmark: 'Savings vs Western Benchmark',
    stayDuration: 'Hospital Stay',
    recoveryDuration: 'Hotel / Local Recovery',
    daysUnit: 'Days',
    downloadQuoteBtn: 'Download Official Quote PDF',
    tierEssential: 'Essential Care',
    tierEssentialDesc: 'Hospital coordination, airport pickup, standard translation, and hotel booking assistance.',
    tierPremium: 'Premium Comfort',
    tierPremiumDesc: 'Private nurse, dedicated VIP liaison, private luxury transfers, and priority scheduling.',
    tierVip: 'VIP Elite Concierge',
    tierVipDesc: '24/7 personal security/concierge escort, 5-star resort recovery suite, post-op private care, and full post-return tele-followup.',
    specialtiesHeading: 'Top-Tier Specialties & Procedures',
    specialtiesSub: 'Compare Iran’s world-class clinical outcomes against international benchmark costs.',
    compareWithUs: 'Benchmark Comparison',
    iranPriceCol: 'Iran (Maham)',
    indiaPriceCol: 'India',
    uaeTurkeyCol: 'UAE / Turkey',
    usUkCol: 'US / UK',
    detailsBtn: 'Configure Treatment',
    wizardHeading: 'Request Free Treatment Plan & Quote',
    wizardSub: 'Fill in your details for a personalized medical review by our clinical board within 2 hours.',
    step1Title: 'Step 1: Patient Details',
    step2Title: 'Step 2: Medical Notes',
    step3Title: 'Step 3: Service Tier',
    fullName: 'Full Name',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone / WhatsApp Number',
    countryLabel: 'Country of Residence',
    medicalHistoryLabel: 'Medical History / Current Condition',
    submitWizard: 'Send Details to WhatsApp (+989055240772)',
    successMessage: 'Your treatment consultation request has been prepared successfully!',
    faqTitle: 'Frequently Asked Questions',
    faqSub: 'Everything you need to know about traveling to Iran for medical care with Maham Health.',
    faq: [
      {
        q: 'Why are medical costs in Iran 70–90% lower?',
        a: 'The lower costs are driven by favorable exchange rates, highly subsidized local medical infrastructure, and competitive pricing by top-tier JCI-accredited hospitals, without any compromise on clinical quality or surgical expertise.'
      },
      {
        q: 'How does the Medical T-Visa process work?',
        a: 'Soorin Maham’s legal and consular team directly submits your Ministry of Foreign Affairs (MFA) electronic visa code application to expedite your official medical entry visa within 3–5 working days.'
      },
      {
        q: 'Who will accompany me during my stay?',
        a: 'Every patient is assigned a dedicated 24/7 bilingual VIP medical coordinator who handles all hospital admissions, translation, transfers, and post-operative hotel care.'
      },
      {
        q: 'Are the hospitals internationally accredited?',
        a: 'Yes. We partner exclusively with premier JCI and IPD-certified hospitals in Tehran, Shiraz, Kish, and Qeshm featuring state-of-the-art surgical theaters and board-certified specialists.'
      },
      {
        q: 'What payment methods are supported?',
        a: 'We support secure wire transfers, corporate accounts via Soorin Maham, and direct payment coordination.'
      },
      {
        q: 'How do I submit my medical reports for a preliminary review?',
        a: 'You can upload your reports or simply message our medical board directly on WhatsApp at +989055240772 or via email at health@maham-group.com.'
      }
    ],
    footerAbout: 'Maham Health is the premier medical tourism concierge operated by Soorin Maham Trade & Industry Development Corporation.',
    footerCorporate: 'Offices in Tehran, Shiraz, Kish, Qeshm, Dubai, Dar es Salaam, and Mumbai/Lucknow.',
    footerRights: '© 2026 Soorin Maham Trade & Industry Development Corporation. All rights reserved.',
    currencyLabel: 'Currency',
  },
  fa: {
    brandTitle: 'ماهام هلث (Maham Health)',
    brandSub: 'شرکت توسعه صنعت و تجارت سورین مهام',
    tagline: 'تسهیل‌گر رسمی گردشگری سلامت ایران',
    heroBadge: 'بیمارستان‌های دارای تاییدیه JCI • ویزا درمان فوری • تشریفات اختصاصی VIP',
    heroHeading: 'خدمات درمانی فوق تخصصی در ایران با ۷۰ الی ۹۰ درصد صرفه‌جویی',
    heroSub: 'تجربه گردشگری پزشکی ممتاز با نظارت سورین مهام. بیمارستان‌های استاندارد بین‌المللی در تهران، شیراز و کیش با همراهی مترجم و تشریفات ۲۴ ساعته VIP و پشتیبانی مستقیم واتساپ.',
    ctaBookNow: 'درخواست مشاوره رایگان',
    ctaWhatsApp: 'پشتیبانی VIP واتساپ',
    ctaCalculator: 'محاسبه‌گر هزینه',
    statsSavings: '۷۰ تا ۹۰ درصد صرفه‌جویی نسبت به غرب',
    statsHospitals: 'بیمارستان‌های گواهی‌شده JCI و IPD',
    statsVisa: 'دریافت سریع ویزای درمانی (T-Visa)',
    statsSupport: 'تیم تشریفات دوزبانه ۲۴ ساعته',
    calcTitle: 'محاسبه‌گر آنلاین هزینه درمان و انتخاب پکیج',
    calcSub: 'تخصص پزشکی، پکیج خدماتی و ارز مورد نظر خود را انتخاب کنید تا هزینه برآوردشده در ایران محاسبه شود.',
    selectSpecialty: 'انتخاب تخصص پزشکی',
    selectPackage: 'انتخاب پکیج خدمات',
    selectCurrency: 'واحد ارز',
    estimatedCost: 'مجموع برآوردی در ایران',
    vsWesternBenchmark: 'صرفه‌جویی نسبت به میانگین غرب',
    stayDuration: 'مدت بستری در بیمارستان',
    recoveryDuration: 'دوره نقاهت در هتل / اقامتگاه',
    daysUnit: 'روز',
    downloadQuoteBtn: 'دانلود پیش‌فاکتور رسمی (PDF)',
    tierEssential: 'پکیج مراقبت ضروری',
    tierEssentialDesc: 'هماهنگی بیمارستان، ترانسفر فرودگاهی، ترجمه استاندارد و کمک به رزرو هتل.',
    tierPremium: 'پکیج آرامش پرمیوم',
    tierPremiumDesc: 'پرستار اختصاصی، رابط VIP اختصاصی، ترانسفر لوکس اختصاصی و نوبت‌دهی اولویت‌دار.',
    tierVip: 'پکیج تشریفات VIP الیت',
    tierVipDesc: 'محافظ/مسئول تشریفات اختصاصی ۲۴ ساعته، سوئیت نقاهت ۵ ستاره، مراقبت خصوصی پس از عمل و پیگیری کامل پزشکی پس از بازگشت.',
    specialtiesHeading: 'تخصص‌ها و جراحی‌های پیشرو',
    specialtiesSub: 'مقایسه نتایج بالینی برتر ایران با هزینه‌های استاندارد بین‌المللی.',
    compareWithUs: 'مقایسه هزینه‌های جهانی',
    iranPriceCol: 'ایران (ماهام)',
    indiaPriceCol: 'هند',
    uaeTurkeyCol: 'امارات / ترکیه',
    usUkCol: 'آمریکا / انگلستان',
    detailsBtn: 'پیکربندی درمان',
    wizardHeading: 'درخواست طرح درمان و پیش‌فاکتور رایگان',
    wizardSub: 'اطلاعات خود را وارد کنید تا توسط شورای پزشکی ما ظرف ۲ ساعت بررسی شود.',
    step1Title: 'مرحله ۱: اطلاعات بیمار',
    step2Title: 'مرحله ۲: شرح حال پزشکی',
    step3Title: 'مرحله ۳: سطح خدمات',
    fullName: 'نام و نام خانوادگی',
    emailLabel: 'پست الکترونیک',
    phoneLabel: 'شماره تماس / واتساپ',
    countryLabel: 'کشور محل سکونت',
    medicalHistoryLabel: 'سوابق پزشکی / وضعیت فعلی',
    submitWizard: 'ارسال جزئیات به واتساپ (+989055240772)',
    successMessage: 'درخواست مشاوره درمان شما با موفقیت آماده شد!',
    faqTitle: 'سؤالات متداول',
    faqSub: 'هرآنچه باید درباره سفر درمانی به ایران با ماهام هلث بدانید.',
    faq: [
      {
        q: 'چرا هزینه‌های درمان در ایران ۷۰ تا ۹۰ درصد پایین‌تر است؟',
        a: 'نرخ مناسب ارز، یارانه‌های زیرساختی پزشکی داخلی و تعرفه‌گذاری رقابتی بیمارستان‌های مجهز JCI دلیل اصلی این مقرون‌به‌صرفه بودن بدون افت کیفیت است.'
      },
      {
        q: 'فرآیند اخذ ویزای درمان (T-Visa) چگونه است؟',
        a: 'تیم حقوقی و کنسولی سورین مهام کد اقامتی وزارت امور خارجه (MFA) را مستقیماً برای صدور سریع ویزای پزشکی در ۳ الی ۵ روز کاری پیگیری می‌کند.'
      },
      {
        q: 'چه کسی در طول اقامت همراه من خواهد بود؟',
        a: 'یک هماهنگ‌کننده پزشکی دوزبانه VIP تمام‌وقت برای پذیرش بیمارستان، ترجمه، ترانسفرها و مراقبت‌های هتل به شما اختصاص می‌یابد.'
      },
      {
        q: 'آیا بیمارستان‌ها دارای گواهینامه بین‌المللی هستند؟',
        a: 'بله. ما با برترین بیمارستان‌های دارای تاییدیه JCI و IPD در تهران، شیراز، کیش و قشم همکاری می‌کنیم.'
      },
      {
        q: 'چه روش‌های پرداختی پشتیبانی می‌شود؟',
        a: 'انتقال بانکی امن، حساب‌های شرکتی از طریق سورین مهام و هماهنگی پرداخت مستقیم.'
      },
      {
        q: 'چگونه مدارک پزشکی خود را برای بررسی اولیه ارسال کنم؟',
        a: 'می‌توانید مدارک خود را آپلود کنید یا مستقیماً به واتساپ +989055240772 یا ایمیل health@maham-group.com ارسال فرمایید.'
      }
    ],
    footerAbout: 'ماهام هلث، تسهیل‌گر پیشتاز گردشگری سلامت تحت نظارت شرکت توسعه صنعت و تجارت سورین مهام است.',
    footerCorporate: 'دارای دفاتر در تهران، شیراز، کیش، قشم، دبی، دارالسلام و بمبئی/دهلی.',
    footerRights: '© ۲۰۲۶ شرکت توسعه صنعت و تجارت سورین مهام. تمامی حقوق محفوظ است.',
    currencyLabel: 'واحد پول',
  },
  ar: {
    brandTitle: 'مهام هيلث (Maham Health)',
    brandSub: 'شركة سورين مهام للتجارة وتطوير الصناعة',
    tagline: 'منسق السياحة العلاجية الرسمي لإيران',
    heroBadge: 'مستشفيات معتمدة من JCI • تأشيرة علاجية سريعة • خدمات VIP',
    heroHeading: 'رعاية صحية عالمية المستوى في إيران بتوفير 70٪–90٪',
    heroSub: 'اختبر السياحة العلاجية النخبوية بالتنسيق مع سورين مهام. مستشفيات معتمدة دولياً في طهران، شيراز، وقشم، مع مرافقة VIP وثنائية اللغة على مدار الساعة.',
    ctaBookNow: 'احجز استشارة مجانية',
    ctaWhatsApp: 'دعم واتساب VIP',
    ctaCalculator: 'حاسبة التكاليف',
    statsSavings: 'توفير 70٪–90٪ مقارنة بالغرب',
    statsHospitals: 'مستشفيات معتمدة من JCI و IPD',
    statsVisa: 'دعم تأشيرة العلاج السريعة',
    statsSupport: 'منسق VIP ثنائي اللغة على مدار الساعة',
    calcTitle: 'حاسبة تكاليف العلاج والباقات التفاعلية',
    calcSub: 'اختر الإجراء الطبي، باقة الخدمات المفضلة، والعملة لحساب خطتك العلاجية المخصصة في إيران.',
    selectSpecialty: 'اختر الإجراء الطبي',
    selectPackage: 'اختر باقة الخدمات',
    selectCurrency: 'العملة',
    estimatedCost: 'التكلفة الإجمالية المقدرة في إيران',
    vsWesternBenchmark: 'التوفير مقارنة بالمعايير الغربية',
    stayDuration: 'الإقامة بالمستشفى',
    recoveryDuration: 'النقاهة بالفندق / محلياً',
    daysUnit: 'أيام',
    downloadQuoteBtn: 'تحميل عرض السعر الرسمي (PDF)',
    tierEssential: 'الرعاية الأساسية',
    tierEssentialDesc: 'تنسيق المستشفى، الاستقبال بالمطار، الترجمة القياسية، والمساعدة في حجز الفندق.',
    tierPremium: 'الراحة الممتازة',
    tierPremiumDesc: 'ممرضة خاصة، منسق VIP مخصص، انتقالات فاخرة، وجدولة ذات أولوية.',
    tierVip: 'كونسيرج النخبة VIP',
    tierVipDesc: 'مرافق أمني/كونسيرج شخصي على مدار الساعة، جناح نقاهة 5 نجوم، رعاية خاصة بعد الجراحة، ومتابعة كاملة بعد العودة.',
    specialtiesHeading: 'التخصصات والإجراءات الرائدة',
    specialtiesSub: 'قارن النتائج السريرية الفائقة في إيران مع التكاليف المعيارية الدولية.',
    compareWithUs: 'مقارنة المعايير الدولية',
    iranPriceCol: 'إيران (مهام)',
    indiaPriceCol: 'الهند',
    uaeTurkeyCol: 'الإمارات / تركيا',
    usUkCol: 'أمريكا / بريطانيا',
    detailsBtn: 'تكوين العلاج',
    wizardHeading: 'طلب خطة علاج وعرض سعر مجاني',
    wizardSub: 'أدخل تفاصيلك لمراجعة طبية شخصية من لجنتنا الطبية خلال ساعتين.',
    step1Title: 'الخطوة 1: تفاصيل المريض',
    step2Title: 'الخطوة 2: الملاحظات الطبية',
    step3Title: 'الخطوة 3: مستوى الخدمة',
    fullName: 'الاسم الكامل',
    emailLabel: 'عنوان البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف / واتساب',
    countryLabel: 'بلد الإقامة',
    medicalHistoryLabel: 'التاريخ الطبي / الحالة الحالية',
    submitWizard: 'إرسال التفاصيل إلى واتساب (+989055240772)',
    successMessage: 'تم إعداد طلب استشارة العلاج الخاص بك بنجاح!',
    faqTitle: 'الأسئلة الشائعة',
    faqSub: 'كل ما تحتاج لمعرفته حول السفر إلى إيران للعلاج مع مهام هيلث.',
    faq: [
      {
        q: 'لماذا تكاليف العلاج في إيران أقل بنسبة 70–90٪؟',
        a: 'تعود التكاليف المنخفضة إلى أسعار الصرف المواتية، والبنية التحتية الطبية المدعومة محلياً، والتسعير التنافسي للمستشفيات المعتمدة من JCI دون أي تنازل عن الجودة السريرية.'
      },
      {
        q: 'كيف تعمل عملية تأشيرة العلاج (T-Visa)؟',
        a: 'يقوم فريق سورين مهام القانوني والقنصلي بتقديم طلب رمز التأشيرة الإلكترونية لوزارة الخارجية مباشرة لتسريع تأشيرة الدخول الطبية خلال 3-5 أيام عمل.'
      },
      {
        q: 'من سيرافقني خلال إقامتي؟',
        a: 'يتم تعيين منسق طبي VIP ثنائي اللغة ومخصص على مدار الساعة لإدارة قبول المستشفى، الترجمة، الانتقالات، ورعاية الفندق بعد العملية الجراحية.'
      },
      {
        q: 'هل المستشفيات معتمدة دولياً؟',
        a: 'نعم. نحن نتشارك حصرياً مع مستشفيات رائدة معتمدة من JCI و IPD في طهران، شيراز، قشم، وكيش تضم غرف عمليات حديثة وأخصائيين معتمدين.'
      },
      {
        q: 'ما هي طرق الدفع المدعومة؟',
        a: 'ندعم التحويلات المصرفية الآمنة، والحسابات المؤسسية عبر سورين مهام، وتنسيق المدفوعات المباشرة.'
      },
      {
        q: 'كيف يمكنني إرسال تقاريري الطبية للمراجعة الأولية؟',
        a: 'يمكنك تحميل تقاريرك أو مراسلة لجنتنا الطبية مباشرة عبر واتساب على الرقم +989055240772 أو عبر البريد الإلكتروني health@maham-group.com.'
      }
    ],
    footerAbout: 'مهام هيلث هو كونسيرج السياحة العلاجية الرائد الذي تدره شركة سورين مهام للتجارة وتطوير الصناعة.',
    footerCorporate: 'مكاتبنا في طهران، شيراز، قشم، كيش، دبي، دار السلام، ومومباي/لخناو.',
    footerRights: '© 2026 شركة سورين مهام للتجارة وتطوير الصناعة. جميع الحقوق محفوظة.',
    currencyLabel: 'العملة',
  },
  sw: {
    brandTitle: 'Maham Health',
    brandSub: 'Soorin Maham Trade & Industry Development Corporation',
    tagline: 'Msaidizi Rasmi wa Utalii wa Matibabu Iran',
    heroBadge: 'Hospitali Zilizoidhinishwa na JCI • Visa ya Matibabu ya Haraka • Huduma ya VIP',
    heroHeading: 'Huduma za Afya za Kiwango cha Kimataifa nchini Iran kwa Okoa 70%–90%',
    heroSub: 'Pata huduma bora za utalii wa matibabu zilizoratibiwa na Soorin Maham. Hospitali zilizoidhinishwa na JCI huko Tehran, Shiraz, na Kish, zikiwa na msaada wa VIP wa lugha mbili masaa 24 na WhatsApp ya moja kwa moja.',
    ctaBookNow: 'Weka Miadi ya Bure',
    ctaWhatsApp: 'Msaada wa WhatsApp VIP',
    ctaCalculator: 'Kadirio la Gharama',
    statsSavings: '70%–90% Kuokoa Gharama vs Marekani/UK',
    statsHospitals: 'Hospitali Zilizoidhinishwa na JCI & IPD',
    statsVisa: 'Msaada wa Haraka wa Visa ya Matibabu ya T',
    statsSupport: 'Msaidizi Maalum wa Lugha Mbili Masaa 24/7',
    calcTitle: 'Kadirio la Gharama za Matibabu na Vifurushi',
    calcSub: 'Chagua matibabu yako, kiwango cha huduma unachopendelea, na sarafu kukadiria mpango wako nchini Iran.',
    selectSpecialty: 'Chagua Matibabu',
    selectPackage: 'Chagua Kifurushi cha Huduma',
    selectCurrency: 'Sarafu',
    estimatedCost: 'Jumla Iliyokadiriwa nchini Iran',
    vsWesternBenchmark: 'Akiba vs Viwango vya Magharibi',
    stayDuration: 'Kukaa Hospitalini',
    recoveryDuration: 'Kupona Hoteli / Ndani',
    daysUnit: 'Siku',
    downloadQuoteBtn: 'Pakua Nukuu Rasmi ya PDF',
    tierEssential: 'Huduma Muhimu',
    tierEssentialDesc: 'Uratibu wa hospitali, usafiri wa uwanja wa ndege, tafsiri ya kawaida, na msaada wa hoteli.',
    tierPremium: 'Faraja ya Kwanza',
    tierPremiumDesc: 'Muuguzi wa kibinafsi, msimamizi maalum wa VIP, usafiri wa kifahari, na ratiba ya kipaumbele.',
    tierVip: 'Msaidizi Maalum wa VIP Elite',
    tierVipDesc: 'Ulinzi wa kibinafsi / usimamizi masaa 24/7, chumba cha mapumziko cha nyota 5, huduma maalum ya baada ya upasuaji, na ufuatiliaji kamili baada ya kurudi.',
    specialtiesHeading: 'Tandem na Taratibu Kuu',
    specialtiesSub: 'Linganisha matokeo bora ya kliniki ya Iran na gharama za kimataifa.',
    compareWithUs: 'Ulinganisho wa Viwango',
    iranPriceCol: 'Iran (Maham)',
    indiaPriceCol: 'India',
    uaeTurkeyCol: 'UAE / Uturuki',
    usUkCol: 'Marekani / UK',
    detailsBtn: 'Sanidi Matibabu',
    wizardHeading: 'Omba Mpango wa Matibabu na Nukuu ya Bure',
    wizardSub: 'Jaza maelezo yako kwa ukaguzi wa matibabu wa kibinafsi kutoka kwa bodi yetu ndani ya masaa 2.',
    step1Title: 'Hatua ya 1: Maelezo ya Mgonjwa',
    step2Title: 'Hatua ya 2: Maelezo ya Matibabu',
    step3Title: 'Hatua ya 3: Kiwango cha Huduma',
    fullName: 'Jina Kamili',
    emailLabel: 'Barua Pepe',
    phoneLabel: 'Namba ya Simu / WhatsApp',
    countryLabel: 'Nchi ya Makazi',
    medicalHistoryLabel: 'Historia ya Matibabu / Hali ya Sasa',
    submitWizard: 'Tuma Maelezo kwa WhatsApp (+989055240772)',
    successMessage: 'Ombi lako la ushauri wa matibabu limetayarishwa kwa mafanikio!',
    faqTitle: 'Maswali Yanayoulizwa Mara kwa Mara',
    faqSub: 'Kila kitu unachohitaji kujua kuhusu kusafiri kwenda Iran kwa matibabu na Maham Health.',
    faq: [
      {
        q: 'Kwa nini gharama za matibabu nchini Iran ziko chini kwa 70–90%?',
        a: 'Gharama za chini zinatokana na viwango vya ubadilishaji vyema, ruzuku za ndani za miundombinu ya matibabu, na bei za ushindani kutoka kwa hospitali zilizoidhinishwa na JCI bila kuathiri ubora wa kimatibabu.'
      },
      {
        q: 'Mchakato wa Visa ya T-Visa ya Matibabu hufanya kazi vipi?',
        a: 'Timu ya kisheria na ya ubalozi ya Soorin Maham huwasilisha ombi lako la msimbo wa visa ya kielektroniki wa Wizara ya Mambo ya Nje moja kwa moja ili kuharakisha visa yako ya kuingia ndani ya siku 3-5 za kazi.'
      },
      {
        q: 'Nani atakuwa nami wakati wa kukaa kwangu?',
        a: 'Kila mgonjwa hupewa msimamizi maalum wa VIP wa lugha mbili masaa 24/7 anayeshughulikia udahili wote wa hospitali, tafsiri, usafiri, na huduma za hotelini.'
      },
      {
        q: 'Je, hospitali zimeidhinishwa kimataifa?',
        a: 'Ndiyo. Tunashirikiana pekee na hospitali kuu zilizoidhinishwa na JCI na IPD huko Tehran, Shiraz, Kish, na Qeshm zenye kumbi za kisasa za upasuaji na wataalamu walioidhinishwa.'
      },
      {
        q: 'Ni njia gani za malipo zinazoungwa mkono?',
        a: 'Tunasaidia uhamisho salama wa kielektroniki, akaunti za shirika kupitia Soorin Maham, na uratibu wa moja kwa moja wa malipo.'
      },
      {
        q: 'Ninawezaje kuwasilisha ripoti zangu za matibabu kwa ukaguzi wa awali?',
        a: 'Unaweza kupakia ripoti zako au kutuma ujumbe moja kwa moja kwa bodi yetu ya matibabu kwenye WhatsApp kwa +989055240772 au barua pepe health@maham-group.com.'
      }
    ],
    footerAbout: 'Maham Health ni msimamizi mkuu wa utalii wa matibabu anayeendeshwa na Soorin Maham Trade & Industry Development Corporation.',
    footerCorporate: 'Ofisi ziko Tehran, Shiraz, Kish, Qeshm, Dubai, Dar es Salaam, na Mumbai/Lucknow.',
    footerRights: '© 2026 Soorin Maham Trade & Industry Development Corporation. Haki zote zimehifadhiwa.',
    currencyLabel: 'Sarafu',
  },
  hi: {
    brandTitle: 'महाम हेल्थ (Maham Health)',
    brandSub: 'सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन',
    tagline: 'ईरान के लिए आधिकारिक चिकित्सा पर्यटन कंसीयर्ज',
    heroBadge: 'JCI मान्यता प्राप्त अस्पताल • त्वरित मेडिकल टी-वीज़ा • वीआईपी कंसीयर्ज',
    heroHeading: 'ईरान में 70%-90% बचत के साथ विश्व स्तरीय स्वास्थ्य सेवा',
    heroSub: 'सूरिन महाम द्वारा समन्वित विशिष्ट चिकित्सा पर्यटन का अनुभव करें। तेहरान, शिراز और किर्श में JCI-मान्यता प्राप्त अस्पताल, 24/7 द्विभाषी वीआईपी कंसीयर्ज और प्रत्यक्ष व्हाट्सएप समर्थन द्वारा समर्थित।',
    ctaBookNow: 'निःशुल्क परामर्श बुक करें',
    ctaWhatsApp: 'व्हाट्सएप वीआईपी सपोर्ट',
    ctaCalculator: 'लागत गणक',
    statsSavings: 'अमेरिका/यूके की तुलना में 70%-90% लागत बचत',
    statsHospitals: 'JCI और IPD प्रमाणित अस्पताल',
    statsVisa: 'त्वरित मेडिकल टी-वीज़ा सहायता',
    statsSupport: '24/7 समर्पित द्विभाषी कंसीयर्ज',
    calcTitle: 'इंटरैक्टिव उपचार लागत और पैकेज अनुमानक',
    calcSub: 'ईरान में अपनी कस्टम उपचार योजना की गणना करने के लिए अपनी चिकित्सा प्रक्रिया, पसंदीदा सेवा स्तर और मुद्रा का चयन करें।',
    selectSpecialty: 'चिकित्सा प्रक्रिया चुनें',
    selectPackage: 'सेवा स्तर चुनें',
    selectCurrency: 'मुद्रा',
    estimatedCost: 'ईरान में अनुमानित कुल लागत',
    vsWesternBenchmark: 'पश्चिमी बेंचमार्क की तुलना में बचत',
    stayDuration: 'अस्पताल में ठहरना',
    recoveryDuration: 'होटल / स्थानीय रिकवरी',
    daysUnit: 'दिन',
    downloadQuoteBtn: 'आधिकारिक उद्धरण पीडीएफ डाउनलोड करें',
    tierEssential: 'आवश्यक देखभाल',
    tierEssentialDesc: 'अस्पताल समन्वय, हवाई अड्डा पिकअप, मानक अनुवाद, और होटल बुकिंग सहायता।',
    tierPremium: 'प्रीमियम आराम',
    tierPremiumDesc: 'निजी नर्स, समर्पित वीआईपी संपर्क, निजी लग्जरी ट्रांसफर और प्राथमिकता शेड्यूलिंग।',
    tierVip: 'वीआईपी एलीट कंसीयर्ज',
    tierVipDesc: '24/7 व्यक्तिगत सुरक्षा/कंसीयर्ज एस्कॉर्ट, 5-स्टार रिज़ॉर्ट रिकवरी सुइट, पोस्ट-ऑप निजी देखभाल, और पूर्ण वापसी उपरांत टेली-फॉलोअप।',
    specialtiesHeading: 'शीर्ष-स्तरीय विशेषताएँ और प्रक्रियाएँ',
    specialtiesSub: 'अंतर्राष्ट्रीय बेंचमार्क लागतों के मुकाबले ईरान के विश्व स्तरीय नैदानिक परिणामों की तुलना करें।',
    compareWithUs: 'बेंचमार्क तुलना',
    iranPriceCol: 'ईरान (महाम)',
    indiaPriceCol: 'भारत',
    uaeTurkeyCol: 'यूएई / तुर्की',
    usUkCol: 'अमेरिका / यूके',
    detailsBtn: 'उपचार कॉन्फ़िगर करें',
    wizardHeading: 'निःशुल्क उपचार योजना और उद्धरण का अनुरोध करें',
    wizardSub: '2 घंटे के भीतर हमारे नैदानिक बोर्ड द्वारा व्यक्तिगत चिकित्सा समीक्षा के लिए अपना विवरण भरें।',
    step1Title: 'चरण 1: रोगी का विवरण',
    step2Title: 'चरण 2: चिकित्सा नोट्स',
    step3Title: 'चरण 3: सेवा स्तर',
    fullName: 'पूरा नाम',
    emailLabel: 'ईमेल पता',
    phoneLabel: 'फ़ोन / व्हाट्सएप नंबर',
    countryLabel: 'निवास का देश',
    medicalHistoryLabel: 'चिकित्सा इतिहास / वर्तमान स्थिति',
    submitWizard: 'व्हाट्सएप पर विवरण भेजें (+989055240772)',
    successMessage: 'आपका उपचार परामर्श अनुरोध सफलतापूर्वक तैयार कर लिया गया है!',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqSub: 'महाम हेल्थ के साथ चिकित्सा देखभाल के लिए ईरान की यात्रा के बारे में आपको जो कुछ भी जानना आवश्यक है।',
    faq: [
      {
        q: 'ईरान में चिकित्सा लागत 70-90% कम क्यों है?',
        a: 'कम लागत अनुकूल विनिमय दरों, अत्यधिक सब्सिडी प्राप्त स्थानीय चिकित्सा बुनियादी ढांचे, और नैदानिक गुणवत्ता से कोई समझौता किए बिना शीर्ष स्तरीय JCI-मान्यता प्राप्त अस्पतालों द्वारा प्रतिस्पर्धी मूल्य निर्धारण से प्रेरित है।'
      },
      {
        q: 'मेडिकल टी-वीज़ा प्रक्रिया कैसे काम करती है?',
        a: 'सूरिन महाम की कानूनी और कांसुलर टीम 3-5 कार्य दिवसों के भीतर आपके आधिकारिक मेडिकल प्रवेश वीज़ा को तेज करने के लिए सीधे विदेश मंत्रालय (MFA) इलेक्ट्रॉनिक वीज़ा कोड आवेदन प्रस्तुत करती है।'
      },
      {
        q: 'मेरे रहने के दौरान मेरे साथ कौन रहेगा?',
        a: 'प्रत्येक रोगी को एक समर्पित 24/7 द्विभाषी वीआईपी चिकित्सा समन्वयक सौंपा जाता है जो सभी अस्पताल में प्रवेश, अनुवाद, स्थानान्तरण और पोस्ट-ऑपरेटिव होटल देखभाल को संभालता है।'
      },
      {
        q: 'क्या अस्पताल अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त हैं?',
        a: 'हाँ। हम तेहरान, शिراز, किर्श और قشم में अत्याधुनिक सर्जिकल थिएटर और बोर्ड-प्रमाणित विशेषज्ञों की विशेषता वाले प्रमुख JCI और IPD-प्रमाणित अस्पतालों के साथ विशेष रूप से साझेदारी करते हैं।'
      },
      {
        q: 'किन भुगतान विधियों का समर्थन किया जाता है?',
        a: 'हम सुरक्षित वायर ट्रांसफर, सूरिन महाम के माध्यम से कॉर्पोरेट खाते और प्रत्यक्ष भुगतान समन्वय का समर्थन करते हैं।'
      },
      {
        q: 'मैं प्रारंभिक समीक्षा के लिए अपनी चिकित्सा रिपोर्ट कैसे जमा करूं?',
        a: 'आप अपनी रिपोर्ट अपलोड कर सकते हैं या +989055240772 पर व्हाट्सएप पर या health@maham-group.com पर सीधे हमारे मेडिकल बोर्ड को संदेश भेज सकते हैं।'
      }
    ],
    footerAbout: 'महाम हेल्थ सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन द्वारा संचालित प्रमुख चिकित्सा पर्यटन कंसीयर्ज है.',
    footerCorporate: 'तेहरान, शिراز, किर्श, قشم, दुबई, दलाल सलाम और मुंबई/लखनऊ में कार्यालय.',
    footerRights: '© 2026 सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन। सर्वाधिकार सुरक्षित।',
    currencyLabel: 'मुद्रा',
  },
  ur: {
    brandTitle: 'ماہم ہیلتھ (Maham Health)',
    brandSub: 'سورین مہام ٹریڈ اینڈ انڈسٹری ڈویلپمنٹ کارپوریشن',
    tagline: 'ایران کے لیے سرکاری میڈیکل ٹ্যুরিজম کانسیرج',
    heroBadge: 'JCI منظور شدہ اسپتال • تیز رفتار میڈیکل ٹی ویزا • وی آئی پی کانسیرج',
    heroHeading: 'ایران میں 70% تا 90% بچت کے ساتھ عالمی معیار کی طبی سہولیات',
    heroSub: 'سورین مہام کے زیر انتظام ایلیٹ میڈیکل ٹ্যুরিজم کا تجربہ کریں۔ تہران، شیراز اور کیش میں JCI سے منظور شدہ اسپتال، 24/7 دو لسانی VIP کانسیرج اور براہ راست واٹس ایپ سپورٹ۔',
    ctaBookNow: 'مفت مشاورت بک کریں',
    ctaWhatsApp: 'واٹس ایپ وی آئی پی سپورٹ',
    ctaCalculator: 'لاگت کا تخمینہ',
    statsSavings: 'امریکہ/یوکے کے مقابلے میں 70%–90% لاگت کی بچت',
    statsHospitals: 'JCI اور IPD مصدقہ اسپتال',
    statsVisa: 'تیز رفتار میڈیکل ٹی ویزا معاونت',
    statsSupport: '24/7 سرشار دو لسانی کانسیرج',
    calcTitle: 'انٹرایکٹو علاج کی لاگت اور پیکیج تخمینہ کار',
    calcSub: 'ایران میں اپنے کسٹم علاج کے منصوبے کا حساب لگانے کے لیے اپنی طبی نوعیت، ترجیحی سروس ٹیر، اور کرنسی کا انتخاب کریں۔',
    selectSpecialty: 'طبی طریقہ کار منتخب کریں',
    selectPackage: 'سروس ٹیر منتخب کریں',
    selectCurrency: 'کرنسی',
    estimatedCost: 'ایران میں تخمینہ شدہ کل لاگت',
    vsWesternBenchmark: 'مغربی بینچ مارک کے مقابلے میں بچت',
    stayDuration: 'اسپتال میں قیام',
    recoveryDuration: 'ہوٹل / مقامی صحت یابی',
    daysUnit: 'دن',
    downloadQuoteBtn: 'سرکاری کوٹیشن پی ڈی ایف ڈاؤن لوڈ کریں',
    tierEssential: 'ضروری نگہداشت',
    tierEssentialDesc: 'اسپتال کا توازن، ہوائی اڈے پر پک اپ، معیاری ترجمہ، اور ہوٹل بکنگ میں معاونت۔',
    tierPremium: 'پریمیم آرام',
    tierPremiumDesc: 'پرائیویٹ نرس، سرشار VIP رابطہ، پرائیویٹ لگژری ٹرانسفر، اور ترجیحی شیڈولنگ۔',
    tierVip: 'وی آئی پی ایلیٹ کانسیرج',
    tierVipDesc: '24/7 ذاتی سیکیورٹی/کانسیرج اسکورٹ، 5-اسٹار ریزورٹ ریکوری سوئیٹ، پوسٹ آپ پرائیویٹ کیئر، اور واپسی کے بعد مکمل ٹیلی فالو اپ۔',
    specialtiesHeading: 'اعلیٰ ترین خصوصیات اور طریقہ کار',
    specialtiesSub: 'بین الاقوامی بینچ مارک کے اخراجات کے خلاف ایران کے عالمی معیار کے طبی نتائج کا موازنہ کریں۔',
    compareWithUs: 'بینچ مارک کا موازنہ',
    iranPriceCol: 'ایران (ماہم)',
    indiaPriceCol: 'بھارت',
    uaeTurkeyCol: 'متحدہ عرب امارات / ترکی',
    usUkCol: 'امریکہ / یوکے',
    detailsBtn: 'علاج کی تشکیل کریں',
    wizardHeading: 'مفت علاج کے منصوبے اور کوٹیشن کی درخواست کریں',
    wizardSub: '2 گھنٹے کے اندر ہمارے کلینیکل بورڈ کے ذریعہ ذاتی نوعیت کے طبی جائزے کے لیے اپنی تفصیلات پُر کریں۔',
    step1Title: 'مرحلہ 1: مریض کی تفصیلات',
    step2Title: 'مرحلہ 2: طبی نوٹس',
    step3Title: 'مرحلہ 3: سروس ٹیر',
    fullName: 'पूरा نام',
    emailLabel: 'ای میل کا پتہ',
    phoneLabel: 'فون / واٹس ایپ نمبر',
    countryLabel: 'رہائش کا ملک',
    medicalHistoryLabel: 'میڈیکل ہسٹری / موجودہ حالت',
    submitWizard: 'تفصیلات واٹس ایپ پر بھیجیں (+989055240772)',
    successMessage: 'آپ کی علاج کی مشاورت کی درخواست کامیابی کے ساتھ تیار کر دی گئی ہے!',
    faqTitle: 'اکثر پوچھے گئے سوالات',
    faqSub: 'ماہم ہیلتھ کے ساتھ طبی دیکھ بھال کے لیے ایران کے سفر کے بارے میں آپ کو جاننے کی ضرورت ہے۔',
    faq: [
      {
        q: 'ایران میں طبی اخراجات 70-90% کم کیوں ہیں؟',
        a: 'کم اخراجات سازگار شرح مبادلہ، انتہائی سبسڈی والے مقامی طبی انفراسٹرکچر، اور طبی معیار پر سمجھوتہ کیے بغیر سرفہرست JCI منظور شدہ اسپتالوں کی طرف سے مسابقتی قیمتوں کے ذریعے کارفرما ہیں۔'
      },
      {
        q: 'میڈیکل ٹی ویزا کا عمل کیسے کام کرتا ہے؟',
        a: 'سورین مہام کی قانونی اور قونصلر ٹیم 3-5 کام کے دنوں کے اندر آپ کے سرکاری میڈیکل انٹری ویزا کو تیز کرنے کے لیے براہ راست وزارت خارجہ (MFA) الیکٹرانک ویزا کوڈ کی درخواست جمع کرتی ہے۔'
      },
      {
        q: 'میرے قیام کے دوران میرے ساتھ کون رہے گا؟',
        a: 'ہر مریض کو ایک سرشار 24/7 دو لسانی VIP میڈیکل کوآرڈینیٹر تفویض کیا جاتا ہے جو اسپتال کے تمام داخلے، ترجمہ، ٹرانسفر، اور postoperative ہوٹل کی دیکھ بھال کو سنبھالتا ہے۔'
      },
      {
        q: 'کیا اسپتال بین الاقوامی سطح پر تسلیم شدہ ہیں؟',
        a: 'جی ہاں. ہم تہران، شیراز، کیش، اور قشم میں جدید ترین جراحی کے تھیٹر اور بورڈ سے تصدیق شدہ ماہرین کی خاصیت والے سرکردہ JCI اور IPD سے تصدیق شدہ اسپتالوں کے ساتھ خصوصی طور پر شراکت کرتے ہیں۔'
      },
      {
        q: 'ادائیگی کے کن طریقوں کی حمایت کی جاتی ہے؟',
        a: 'ہم محفوظ وائر ٹرانسفرز، سورین مہام کے ذریعے کارپوریٹ اکاؤنٹس، اور براہ راست ادائیگی کے توازن کی حمایت کرتے ہیں۔'
      },
      {
        q: 'میں ابتدائی جائزے کے لیے اپنی طبی رپورٹیں کیسے جمع کر سکتا ہوں؟',
        a: 'آپ اپنی رپورٹس اپ لوڈ کر سکتے ہیں یا واٹس ایپ پر +989055240772 پر یا health@maham-group.com پر براہ راست ہمارے میڈیکل بورڈ کو پیغام بھیج سکتے ہیں۔'
      }
    ],
    footerAbout: 'ماہم ہیلتھ سورین مہام ٹریڈ اینڈ انڈسٹری डेवलपमेंट کارپوریشن کے ذریعہ چلایا جانے والا اہم میڈیکل ٹ্যুরزم کانسیرج ہے۔',
    footerCorporate: 'تہران، شیراز، کیش، قشم، دبئی، دارالسلام، اور ممبئی/لکھنؤ میں دفاتر۔',
    footerRights: '© 2026 سورین مہام ٹریڈ اینڈ انڈسٹری ڈویلپمنٹ کارپوریشن۔ جملہ حقوق محفوظ ہیں۔',
    currencyLabel: 'کرنسی',
  },
};
