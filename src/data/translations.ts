export type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

export interface I18nSet {
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
}

export const TRANSLATIONS: Record<Language, I18nSet> = {
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
    timelineSub: 'رحلة رعاية طبية وُفرت بعناية منذ أول استشارة حتى الشفاء التام.',
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
    heroSub: 'विशेषज्ञ डॉक्टरों और वीआईपी कंसीयर्ज सेवाओं के साथ ईरान के अग्रणी अस्पतालों में निजी चिकित्सा यात्रा की व्यवस्था।',
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
    heroSub: 'ایران کے اعلیٰ ترین ہسپتالوں میں معروف ماہرین اور وی آئی پی سہولیات کے ساتھ نجی طبی سفروں کی سہولت۔',
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
    packagesSub: 'اپنی اور اپنے ٹیماردار کی ضروریات کے مطابق پیکیج کا انتخاب کریں۔',
    step1: 'مرحلہ 1: علاج کا انتخاب',
    step2: 'مرحلہ 2: مریض کی معلومات',
    step3: 'مرحلہ 3: رابطہ اور پیکیج',
    submit: 'خفیہ درخواست جمع کروائیں',
    male: 'مرد',
    female: 'عورت'
  }
};
