export type SpecialtyId = 
  | 'rhinoplasty' 
  | 'dental-implants' 
  | 'lasik' 
  | 'hair-transplant' 
  | 'ivf' 
  | 'knee-replacement' 
  | 'cardiology-stent' 
  | 'oncology-protocol' 
  | 'bariatric-sleeve';

export interface Specialty {
  id: SpecialtyId;
  name: Record<string, string>;
  category: Record<string, string>;
  description: Record<string, string>;
  stayDays: number;
  recoveryDays: number;
  iranPrice: number;
  indiaPrice: number;
  uaeTurkeyPrice: number;
  usUkPrice: number;
}

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: 'rhinoplasty',
    name: {
      en: 'Rhinoplasty (Nose Surgery)',
      fa: 'جراحی زیبایی بینی (رینوپلاستی)',
      ar: 'جراحة تجميل الأنف',
      sw: 'Upasuaji wa Pua (Rhinoplasty)',
      hi: 'राइनोप्लास्टी (नाक की सर्जरी)',
      ur: 'رائنو پلاسٹی (ناک کی سرجری)'
    },
    category: {
      en: 'Cosmetic Surgery',
      fa: 'جراحی زیبایی',
      ar: 'جراحة التجميل',
      sw: 'Upasuaji wa Urembo',
      hi: 'कॉस्मेटिक सर्जरी',
      ur: 'کاسمیٹک سرجری'
    },
    description: {
      en: 'World-renowned Iranian facial plastic surgeons specializing in precision structural, ethnic, and preservation rhinoplasty with natural aesthetic results.',
      fa: 'جراحان برجسته پلاستیک صورت ایران با تخصص در جراحی‌های ساختاری، طبیعی و ترمیمی بینی با بالاترین دقت.',
      ar: 'أبرز جراحي التجميل في إيران المتخصصين في تجميل الأنف الهيكلي والترميمي بدقة متناهية ونتائج طبيعية.',
      sw: 'Madaktaribingwa wa upasuaji wa uso nchini Iran wanaobobea katika urembo wa pua kwa usahihi wa hali ya juu.',
      hi: 'ईरान के विश्व प्रसिद्ध फेशियल प्लास्टिक सर्जन जो प्राकृतिक और सटीक राइनोप्लास्टी में विशेषज्ञ हैं।',
      ur: 'ایران کے ماہر فیشل پلاسٹک سرجن جو قدرتی اور خوبصورت نتائج کے ساتھ رائنو پلاسٹی میں مہارت رکھتے ہیں۔'
    },
    stayDays: 7,
    recoveryDays: 10,
    iranPrice: 1650,
    indiaPrice: 3200,
    uaeTurkeyPrice: 4500,
    usUkPrice: 11000
  },
  {
    id: 'dental-implants',
    name: {
      en: 'Dental Implants & Full Mouth',
      fa: 'ایمپلنت دندان و بازسازی کامل دهان',
      ar: 'زراعة الأسنان وتجميل الفم الكامل',
      sw: 'Vipandikizi vya Meno na Kinywa Kamili',
      hi: 'डेंटल इम्प्लांट और फुल माउथ रिहैabilitation',
      ur: 'ڈینٹل امپلانٹس اور مکمل منہ کا علاج'
    },
    category: {
      en: 'Dental Care',
      fa: 'دندانپزشکی تخصصی',
      ar: 'رعاية الأسنان',
      sw: 'Huduma ya Meno',
      hi: 'दंत चिकित्सा',
      ur: 'دندان سازی'
    },
    description: {
      en: 'State-of-the-art digital dental clinics offering All-on-4, titanium/zirconia implants, and Hollywood smile makeovers with international warranties.',
      fa: 'کلینیک‌های تخصصی دندانپزشکی دیجیتال با خدمات ایمپلنت All-on-4، زیرکونیا و اصلاح طرح لبخند با ضمانت بین‌المللی.',
      ar: 'عيادات الأسنان الرقمية المتطورة التي تقدم تقنيات All-on-4، زراعة التيتانيوم والزركونيا، وابتسامة هوليوود.',
      sw: 'Kliniki za kisasa za meno zinazotoa vipandikizi vya All-on-4, titani na tabasamu la Hollywood.',
      hi: 'अत्याधुनिक डिजिटल डेंटल clínicas जो All-on-4, टाइटेनियम इम्प्लांट और स्माइल मेकओवर प्रदान करती हैं।',
      ur: 'جدید ترین ڈیجیٹل ڈینٹل کلینکس جو آل آن فور، امپلانٹس اور ہالی ووڈ سائل میک اوور کی سہولت دیتے ہیں۔'
    },
    stayDays: 5,
    recoveryDays: 4,
    iranPrice: 850,
    indiaPrice: 1400,
    uaeTurkeyPrice: 2800,
    usUkPrice: 6500
  },
  {
    id: 'lasik',
    name: {
      en: 'LASIK & Advanced Eye Surgery',
      fa: 'لیزیک، فمکتو و جراحی پیشرفته چشم',
      ar: 'عمليات الليزك وتصحيح النظر المتقدمة',
      sw: 'Upasuaji wa Macho wa LASIK',
      hi: 'लैसिक और उन्नत नेत्र शल्य चिकित्सा',
      ur: 'لاسک اور جدید آنکھوں کی سرجری'
    },
    category: {
      en: 'Ophthalmology',
      fa: 'چشم‌پزشکی',
      ar: 'طب العيون',
      sw: 'Macho',
      hi: 'नेत्र विज्ञान',
      ur: 'آنکھوں کی طب'
    },
    description: {
      en: 'Cutting-edge Femto-LASIK, PRK, and cataract procedures performed by top ophthalmologists using German Schwind and Zeiss laser platforms.',
      fa: 'جراحی‌های پیشرفته فمتولیزیک، PRK و آب مروارید با پیشرفته‌ترین تجهیزات لیزری آلمانی زایس و شوینت.',
      ar: 'عمليات الفيمتو ليزك وإزالة المياه البيضاء بأحدث تقنيات الليزر الألمانية من شركة زايس.',
      sw: 'Upasuaji wa kisasa wa Femto-LASIK na kataraksi ukifanywa na madaktari bingwa kwa teknolojia ya Zeiss.',
      hi: 'अत्याधुनिक फेम्तो-लैसिक और मोतियाबिंद सर्जरी, जर्मन ज़ीस और श्विंड लेजर तकनीक द्वारा।',
      ur: 'جدید ترین فیمٹو لاسیک اور موتیے کا آپریشن جرمن زیس اور شوئنڈ لیزر ٹیکنالوجی سے۔'
    },
    stayDays: 4,
    recoveryDays: 3,
    iranPrice: 950,
    indiaPrice: 1800,
    uaeTurkeyPrice: 2500,
    usUkPrice: 5200
  },
  {
    id: 'hair-transplant',
    name: {
      en: 'Hair Transplant (FUT / DHI / Micro-FUE)',
      fa: 'کاشت موی طبیعی (میکرو FUE و DHI)',
      ar: 'زراعة الشعر بأحدث التقنيات (FUE / DHI)',
      sw: 'Upandikizaji wa Nywele (FUE / DHI)',
      hi: 'बाल प्रत्यारोपण (FUE / DHI)',
      ur: 'بالوں کی پیوند کاری (FUE / DHI)'
    },
    category: {
      en: 'Hair Restoration',
      fa: 'ترمیم مو',
      ar: 'استعادة الشعر',
      sw: 'Urejeshaji wa Nywele',
      hi: 'बाल प्रत्यारोपण',
      ur: 'بالوں کی بحالی'
    },
    description: {
      en: 'High-density graft harvesting with manual and motorized Micro-FUE and DHI techniques ensuring natural hairline design and 98%+ survival rate.',
      fa: 'کاشت مو با تراکم بالا به روش‌های نوین Micro-FUE و DHI با طراحی خط رویش طبیعی و درصد ماندگاری بالای ۹۸٪.',
      ar: 'زراعة الشعر بكثافة عالية باستخدام تقنيات Micro-FUE و DHI مع تصميم طبيعي لخط الشعر ونجاح يتجاوز 98%.',
      sw: 'Upandikizaji wa nywele kwa msongamano wa juu kwa kutumia Mbinu za Micro-FUE na DHI.',
      hi: 'हाई-डेंसिटी ग्राफ्ट हार्वेस्टिंग माइक्रो-FUE और DHI तकनीक के साथ, प्राकृतिक हेयरलाइन डिज़ाइन।',
      ur: 'مائکرو فیو اور ڈی ایچ آئی تکنیک کے ساتھ ہائی ڈینسٹی بالوں کی پیوند کاری اور قدرتی ہیئر لائن۔'
    },
    stayDays: 4,
    recoveryDays: 7,
    iranPrice: 1200,
    indiaPrice: 2000,
    uaeTurkeyPrice: 3000,
    usUkPrice: 8500
  },
  {
    id: 'ivf',
    name: {
      en: 'IVF & Fertility Treatments',
      fa: 'IVF، میکروانژکشن و درمان ناباروری',
      ar: 'طفال الأضحى وعلاجات العقم (IVF)',
      sw: 'Matibabu ya Uzazi na IVF',
      hi: 'आईवीएफ और प्रजनन उपचार',
      ur: 'آئی وی ایف اور فرٹیلیٹی علاج'
    },
    category: {
      en: 'Fertility & Gynecology',
      fa: 'ناباروری و زنان',
      ar: 'علاجات الخوبة',
      sw: 'Uzazi',
      hi: 'प्रजनन स्वास्थ्य',
      ur: 'تولیدی صحت'
    },
    description: {
      en: 'Advanced reproductive endocrinology centers featuring PGD/PGS genetic screening, ICSI, and high success-rate IVF protocols in JCI hospitals.',
      fa: 'مراکز پیشرفته درمان ناباروری با غربالگری ژنتیکی PGD/PGS، میکرواینجکشن و بالاترین نرخ موفقیت در بیمارستان‌های تخصصی.',
      ar: 'مراكز الغدد الصماء التناسلية المتقدمة التي تتميز بالفحص الجيني PGD/PGS وبرامج أطفال الأنابيب ذات نسب النجاح العالية.',
      sw: 'Vituo vya juu vya uzazi vinavyoangazia upimaji wa kijeni wa PGD/PGS na itifaki za IVF za kiwango cha juu.',
      hi: 'उन्नत प्रजनन केंद्र जो PGD/PGS आनुवंशिक स्क्रीनिंग और उच्च सफलता दर वाले IVF प्रोटोकॉल प्रदान करते हैं।',
      ur: 'جدید ری پروڈکٹیو کلینکس جن میں پی جی ڈی جینیاتی اسکریننگ اور ہائی سُسیس ریٹ آئی وی ایف پروٹوکولز ہیں۔'
    },
    stayDays: 14,
    recoveryDays: 5,
    iranPrice: 2800,
    indiaPrice: 4000,
    uaeTurkeyPrice: 6500,
    usUkPrice: 16000
  },
  {
    id: 'knee-replacement',
    name: {
      en: 'Orthopedic Joint & Knee Replacement',
      fa: 'تعویض مفصل زانو و جراحی ارتوپدی',
      ar: 'استبدال مفصل الركبة وجراحة العظام',
      sw: 'Upasuaji wa Badili ya Goti na Viungo',
      hi: 'ऑर्थोपेडिक जोड़ और घुटना प्रत्यारोपण',
      ur: 'گھٹنے اور جوڑوں کی تبدیلی کی سرجری'
    },
    category: {
      en: 'Orthopedics',
      fa: 'ارتوپدی',
      ar: 'جراحة العظام',
      sw: 'Mifupa',
      hi: 'ऑर्थोपेडिक्स',
      ur: 'جوڑوں اور ہڈیوں کی سرجری'
    },
    description: {
      en: 'Minimally invasive total knee and hip arthroplasty using US/European titanium implants and rapid robotic-assisted recovery programs.',
      fa: 'جراحی‌های کم تهاجمی تعویض مفصل زانو و لگن با پروتزهای استاندارد آمریکایی و اروپایی همراه با توانبخشی سریع.',
      ar: 'جراحات استبدال مفصل الركبة والورك طفيفة التوغل باستخدام غرسات التيتانيوم الأمريكية والأوروبية.',
      sw: 'Upasuaji mdogo wa kubadilisha goti na nyonga kwa kutumia vipandikizi vya ubora wa juu.',
      hi: 'न्यूनतम इनवेसिव कुल घुटना और कूल्हा प्रत्यारोपण, अमेरिकी और यूरोपीय टाइटेनियम इम्प्लांट के साथ।',
      ur: 'امریکن اور یورپین ٹائٹینیم امپلانٹس کے ساتھ کم سے کم تکلیف والا گھٹنے اور کولہے کی تبدیلی کا آپریشن۔'
    },
    stayDays: 10,
    recoveryDays: 21,
    iranPrice: 4200,
    indiaPrice: 6500,
    uaeTurkeyPrice: 9500,
    usUkPrice: 32000
  },
  {
    id: 'cardiology-stent',
    name: {
      en: 'Cardiology, Angiography & Stenting',
      fa: 'جراحی قلب، آنژیوگرافی و استنت‌گذاری',
      ar: 'أمراض القلب، القسطرة وتركيب الدعامات',
      sw: 'Cardiology, Angiography na Stenting',
      hi: 'हृदय रोग विज्ञान, एंजियोग्राफी और स्टेंटिंग',
      ur: 'کارڈیالوجی، انجیوگرافی اور اسٹنٹنگ'
    },
    category: {
      en: 'Cardiology',
      fa: 'قلب و عروق',
      ar: 'أمراض القلب',
      sw: 'Moyo',
      hi: 'हृदय रोग',
      ur: 'امراض قلب'
    },
    description: {
      en: 'World-class cardiovascular hospitals offering complex coronary angioplasty, bypass surgery, and electrophysiology under eminent cardiologists.',
      fa: 'بیمارستان‌های فوق تخصصی قلب و عروق با امکان انجام آنژیوپلاستی پیچیده عروق کرونر، جراحی بای‌پس و الکتروفیزیولوژی.',
      ar: 'مستشفيات القلب والأوعية الدموية ذات المستوى العالمي التي تقدم قسطرة الشرايين التاجية المعقدة وجراحات القلب المفتوح.',
      sw: 'Hospitali za kiwango cha kimataifa za moyo zinazotoa huduma za angioplasty na upasuaji wa bypass.',
      hi: 'विश्व स्तरीय कार्डियोवैस्कुलर अस्पताल जो जटिल कोरोनरी एंजियोप्लास्टी और बाईपास सर्जरी प्रदान करते हैं।',
      ur: 'عالمی معیار کے کارڈیو ویسکولر اسپتال جو انجیو پلاسٹی اور دل کے بائی پاس آپریشنز کی سہولت دیتے ہیں۔'
    },
    stayDays: 7,
    recoveryDays: 14,
    iranPrice: 3500,
    indiaPrice: 5500,
    uaeTurkeyPrice: 8500,
    usUkPrice: 45000
  },
  {
    id: 'oncology-protocol',
    name: {
      en: 'Oncology & Cancer Treatment Protocols',
      fa: 'انکولوژی و پروتکل‌های پیشرفته درمان سرطان',
      ar: 'الأورام وبروتوكولات علاج السرطان المتقدمة',
      sw: 'Matibabu ya Saratani na Oncology',
      hi: 'ऑन्कोलॉजी और कैंसर उपचार प्रोटोकॉल',
      ur: 'آنکولوجی اور کینسر کے جدید علاج'
    },
    category: {
      en: 'Oncology',
      fa: 'انکولوژی و سرطان',
      ar: 'الأورام',
      sw: 'Saratani',
      hi: 'ऑन्कोलॉजी',
      ur: 'کینسر کے امراض'
    },
    description: {
      en: 'Comprehensive cancer care including precision radiation therapy (TrueBeam/CyberKnife), chemotherapy, and surgical oncology led by national tumor boards.',
      fa: 'درمان جامع سرطان شامل پرتودرمانی پیشرفته (TrueBeam/CyberKnife)، شیمی‌درمانی و جراحی انکولوژی تحت نظر بورد تخصصی تومور.',
      ar: 'رعاية شاملة للسرطان تشمل العلاج الإشعاعي الدقيق، العلاج الكيميائي، والجراحات الأورام المتقدمة.',
      sw: 'Huduma kamili ya saratani ikiwa ni pamoja na tiba ya mionzi ya usahihi na upasuaji wa saratani.',
      hi: 'व्यापक कैंसर देखभाल जिसमें सटीक विकिरण चिकित्सा (TrueBeam/CyberKnife) और कीमोथेरेपी शामिल है।',
      ur: 'کینسر کی جامع دیکھ بھال جس میں ریڈی ایشن تھراپی، کیموتھراپی اور کینسر سرجری شامل ہیں۔'
    },
    stayDays: 14,
    recoveryDays: 30,
    iranPrice: 5000,
    indiaPrice: 8000,
    uaeTurkeyPrice: 14000,
    usUkPrice: 60000
  },
  {
    id: 'bariatric-sleeve',
    name: {
      en: 'Bariatric Surgery (Sleeve & Bypass)',
      fa: 'جراحی چاقی و اسلیو معده',
      ar: 'جراحات السمنة وتكميم المعدة',
      sw: 'Upasuaji wa Kupunguza Uzito (Sleeve)',
      hi: 'बैरीऐट्रिक सर्जरी (स्लीव और बाईपास)',
      ur: 'بیریئٹرک سرجری (سلیو اور بائی پاس)'
    },
    category: {
      en: 'Weight Loss & Metabolic',
      fa: 'لاغری و متابولیک',
      ar: 'فقدان الوزن',
      sw: 'Kupunguza Uzito',
      hi: 'वजन घटाने की सर्जरी',
      ur: 'وزن کم کرنے کی سرجری'
    },
    description: {
      en: 'Laparoscopic sleeve gastrectomy and gastric bypass performed by expert bariatric surgeons with integrated nutritional and lifestyle counseling.',
      fa: 'اسلیو معده و بای‌پس لاپاراسکوپی توسط جراحان مجرب چاقی همراه با مشاوره تخصصی تغذیه و سبک زندگی.',
      ar: 'عمليات تكميم المعدة وتحويل المسار بالمنظار التي يجريها جراحو السمنة الخبراء مع استشارات التغذية المتكاملة.',
      sw: 'Upasuaji wa laparoscopic sleeve gastrectomy na gastric bypass unaofanywa na wataalamu.',
      hi: 'लैप्रोस्कोपिक स्लीव गैस्ट्रेक्टॉमी और गैस्ट्रिक बाईपास, विशेषज्ञ बेरिएट्रिक सर्जनों द्वारा।',
      ur: 'ماہر بیریئٹرک سرجنز کے ذریعے لیپروسکوپک سلیو گیسٹریکٹومی اور معدے کا بائی پاس آپریشن۔'
    },
    stayDays: 6,
    recoveryDays: 14,
    iranPrice: 2400,
    indiaPrice: 3800,
    uaeTurkeyPrice: 5500,
    usUkPrice: 18000
  }
];
