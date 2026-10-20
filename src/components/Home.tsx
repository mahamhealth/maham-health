'use client';

import React, { useState, useId } from 'react';
import {
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Globe,
  Sparkles,
  Stethoscope,
  HeartPulse,
  Award,
  Users,
  Clock,
  ChevronRight,
  ChevronLeft,
  Upload,
  MessageSquare,
  FileText,
  HelpCircle,
  Menu,
  X,
  ExternalLink,
  Activity,
  Heart,
  Zap
} from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

interface Specialty {
  id: string;
  name: Record<Language, string>;
  category: Record<Language, string>;
  duration: Record<Language, string>;
  hospitalStay: Record<Language, string>;
  recovery: Record<Language, string>;
  iranCost: string;
  benchmarkCost: string;
  savings: string;
  description: Record<Language, string>;
  icon: string;
}

const SPECIALTIES: Specialty[] = [
  {
    id: 'rhinoplasty',
    name: {
      en: 'Rhinoplasty & Facial Plastic Surgery',
      fa: 'جراحی بینی و زیبایی صورت',
      ar: 'جراحی تجميل الانف وتجميل الوجه',
      sw: 'Upasuaji wa Pua na Usoni',
      hi: 'राइनोप्लास्टी और फेशियल प्लास्टिक सर्जरी',
      ur: 'رائنو پلاسٹی اور فیشل پلاسٹک سرجری'
    },
    category: {
      en: 'Cosmetic Surgery',
      fa: 'جراحی زیبایی',
      ar: 'جراحة التجميل',
      sw: 'Upasuaji wa Urembo',
      hi: 'कॉस्मेटिक सर्जरी',
      ur: 'کاسمیٹک سرجری'
    },
    duration: {
      en: '2 Hours',
      fa: '۲ ساعت',
      ar: 'ساعتان',
      sw: 'Saa 2',
      hi: '2 घंटे',
      ur: '2 گھنٹے'
    },
    hospitalStay: {
      en: '1 Day',
      fa: '۱ روز',
      ar: 'يوم واحد',
      sw: 'Siku 1',
      hi: '1 दिन',
      ur: '1 دن'
    },
    recovery: {
      en: '7-10 Days',
      fa: '۷ تا ۱۰ روز',
      ar: '٧-١٠ أيام',
      sw: 'Siku 7-10',
      hi: '7-10 दिन',
      ur: '7-10 دن'
    },
    iranCost: '$2,200',
    benchmarkCost: '$12,000',
    savings: '82%',
    description: {
      en: 'Tehran is the rhinoplasty capital of the world, performed by world-renowned board-certified plastic surgeons with state-of-the-art facilities.',
      fa: 'تهران پایتخت جراحی زیبایی بینی در جهان است که توسط فوق تخصصان برجسته و با امکانات فوق‌پیشرفته انجام می‌شود.',
      ar: 'تعتبر طهران عاصمة جراحة تجميل الأنف في العالم، ويجريها جراحون معتمدون ذوو شهرة عالمية في مرافق حديثة.',
      sw: 'Tehran ni mji mkuu wa upasuaji wa pua duniani, unaofanywa na madaktari bingwa waliobobea wenye vifaa vya kisasa.',
      hi: 'तेहरान दुनिया की राइनोप्लास्टी राजधानी है, जिसे विश्व प्रसिद्ध प्लास्टिक सर्जनों द्वारा अत्याधुनिक सुविधाओं के साथ किया जाता है।',
      ur: 'تہران دنیا کا رائنو پلاسٹی کا دارالحکومت ہے، جو دنیا کے معروف پلاسٹک سرجنوں کے ذریعے جدید ترین سہولیات کے ساتھ انجام دیا جاتا ہے۔'
    },
    icon: 'Sparkles'
  },
  {
    id: 'dental-implants',
    name: {
      en: 'Advanced Dental Implants & Smile Design',
      fa: 'ایمپلنت پیشرفته دندان و طراحی لبخند',
      ar: 'زراعة الأسنان المتقدمة وتصميم الابتسامة',
      sw: 'Upandikizaji wa Kina wa Meno',
      hi: 'उन्नत डेंटल इम्प्लांट और स्माइल डिज़ाइन',
      ur: 'جدید ڈینٹل امپلانٹس اور اسمائل ڈیزائن'
    },
    category: {
      en: 'Dental Care',
      fa: 'دندانپزشکی تخصصی',
      ar: 'رعاية الأسنان',
      sw: 'Huduma ya Meno',
      hi: 'डेंटल केयर',
      ur: 'ڈینٹل کیئر'
    },
    duration: {
      en: '1-3 Sessions',
      fa: '۱ تا ۳ جلسه',
      ar: '1-3 جلسات',
      sw: 'Vipindi 1-3',
      hi: '1-3 सत्र',
      ur: '1-3 سیشن'
    },
    hospitalStay: {
      en: 'Outpatient',
      fa: 'سرپایی',
      ar: 'عيادة خارجية',
      sw: 'Mgonjwa wa nje',
      hi: 'आउट पेशेंट',
      ur: 'آؤٹ پیشنٹ'
    },
    recovery: {
      en: '1-3 Days',
      fa: '۱ تا ۳ روز',
      ar: '1-3 أيام',
      sw: 'Siku 1-3',
      hi: '1-3 दिन',
      ur: '1-3 دن'
    },
    iranCost: '$450 / tooth',
    benchmarkCost: '$3,500 / tooth',
    savings: '85%',
    description: {
      en: 'Swiss & German titanium implants placed by top maxillofacial specialists with guaranteed lifetime durability and painless techniques.',
      fa: 'ایمپلنت‌های تیتانیومی سوئیسی و آلمانی توسط فوق تخصصان فک و صورت با ضمانت مادام‌العمر و تکنیک‌های بدون درد.',
      ar: 'غرسات التيتانيوم السويسرية والألمانية التي يضعها كبار أخصائيي جراحة الوجه والفكين مع ضمان مدى الحياة.',
      sw: 'Vipandikizi vya titani vya Uswisi na Ujerumani vilivyowekwa na wataalamu wakuu wenye dhamana ya maisha.',
      hi: 'स्विस और जर्मन टाइटेनियम इम्प्लांट्स शीर्ष मैक्सिलोफेशियल विशेषज्ञों द्वारा जीवन भर की वारंटी के साथ।',
      ur: 'سوئس اور جرمن ٹائٹینیم امپلانٹس جو کہ ماہرین کے ذریعہ تاحیات ضمانت کے ساتھ لگائے جاتے ہیں۔'
    },
    icon: 'Stethoscope'
  },
  {
    id: 'lasik',
    name: {
      en: 'LASIK & Advanced Eye Vision Correction',
      fa: 'لیزیک و جراحی پیشرفته اصلاح بینایی',
      ar: 'جراحة تصحيح الإبصار بالليزر (ليزك)',
      sw: 'Kurekebisha Macho kwa LASIK',
      hi: 'लासिक और उन्नत नेत्र दृष्टि सुधार',
      ur: 'لاسک اور جدید بینائی کی درستگی'
    },
    category: {
      en: 'Ophthalmology',
      fa: 'چشم‌پزشکی',
      ar: 'طب العيون',
      sw: 'Macho',
      hi: 'नेत्र विज्ञान',
      ur: 'امراض چشم'
    },
    duration: {
      en: '30 Minutes',
      fa: '۳۰ دقیقه',
      ar: '30 دقيقة',
      sw: 'Dakika 30',
      hi: '30 मिनट',
      ur: '30 منٹ'
    },
    hospitalStay: {
      en: 'Outpatient',
      fa: 'سرپایی',
      ar: 'عيادة خارجية',
      sw: 'Mgonjwa wa nje',
      hi: 'आउट पेशेंट',
      ur: 'آؤٹ پیشنٹ'
    },
    recovery: {
      en: '24-48 Hours',
      fa: '۲۴ تا ۴۸ ساعت',
      ar: '24-48 ساعة',
      sw: 'Saa 24-48',
      hi: '24-48 घंटे',
      ur: '24-48 گھنٹے'
    },
    iranCost: '$650 (Both Eyes)',
    benchmarkCost: '$4,200',
    savings: '84%',
    description: {
      en: 'Wavelight Femto-LASIK and PRK performed in JCI-accredited ophthalmic centers with 99.4% success rates.',
      fa: 'فمتولیزیک و PRK موج‌بر با مراکز فوق تخصصی چشم‌پزشکی استاندارد و میزان موفقیت ۹۹.۴ درصد.',
      ar: 'عمليات الليزك الفيمتو المتقدمة في مراكز العيون المعتمدة دولياً بمعدلات نجاح بلغت 99.4%.',
      sw: 'Femto-LASIK ya kisasa inayofanywa katika vituo vilivyoidhinishwa vya macho na viwango vya juu vya mafanikio.',
      hi: 'वेवलाइट फेम्टो-लासिक और पीआरके जेसीआई-मान्यता प्राप्त नेत्र केंद्रों में 99.4% सफलता दर के साथ।',
      ur: 'جدید فیمٹو لاسیک اور پی آر کے بین الاقوامی مراکز میں 99.4 فیصد کامیابی کے ساتھ۔'
    },
    icon: 'Activity'
  },
  {
    id: 'hair-transplant',
    name: {
      en: 'Micro-Graft Hair Transplantation (SUT / DHI)',
      fa: 'کاشت مو با روش‌های فوق پیشرفته (SUT / DHI)',
      ar: 'زراعة الشعر بتقنيات Micro-Graft (SUT / DHI)',
      sw: 'Kupandikiza Nywele (SUT / DHI)',
      hi: 'माइक्रोग्रफ्ट हेयर ट्रांसप्लांटेशन (SUT / DHI)',
      ur: 'مائکرو گرافٹ ہیئر ٹرانسپلانٹیشن (SUT / DHI)'
    },
    category: {
      en: 'Hair Restoration',
      fa: 'ترمیم مو',
      ar: 'استعادة الشعر',
      sw: 'Urejeshaji Nywele',
      hi: 'हेयर रिस्टोरिंग',
      ur: 'بالوں کی بحالی'
    },
    duration: {
      en: '6-8 Hours',
      fa: '۶ تا ۸ ساعت',
      ar: '6-8 ساعات',
      sw: 'Saa 6-8',
      hi: '6-8 घंटे',
      ur: '6-8 گھنٹے'
    },
    hospitalStay: {
      en: 'Outpatient',
      fa: 'سرپایی',
      ar: 'عيادة خارجية',
      sw: 'Mgonjwa wa nje',
      hi: 'आउट पेशेंट',
      ur: 'آؤٹ پیشنٹ'
    },
    recovery: {
      en: '5-7 Days',
      fa: '۵ تا ۷ روز',
      ar: '5-7 أيام',
      sw: 'Siku 5-7',
      hi: '5-7 दिन',
      ur: '5-7 دن'
    },
    iranCost: '$1,200',
    benchmarkCost: '$7,500',
    savings: '84%',
    description: {
      en: 'Maximum density natural hairline restoration using latest SUT and DHI sapphire blades with written lifetime growth guarantee.',
      fa: 'بازیابی خط رویش طبیعی با حداکثر تراکم با جدیدترین تیغه‌های سفایر SUT و DHI همراه با ضمانت کتبی رشد مادام‌العمر.',
      ar: 'استعادة خط الشعر الطبيعي بأقصى كثافة باستخدام أحدث شفرات الياقوت مع ضمان كتابي لمدى الحياة.',
      sw: 'Urejeshaji wa nywele asili kwa kutumia teknolojia ya kisasa na dhamana ya maandishi.',
      hi: 'সর্বোচ্চ ঘনত্বের সাথে প্রাকৃতিক হেয়ারলাইন পুনরুদ্ধার, লিখিত আজীবন বৃদ্ধির গ্যারান্টি সহ।',
      ur: 'جدید ترین ایس یو ٹی اور ڈی ایچ آئی تکنیک کے ساتھ قدرتی بالوں کی بحالی اور تاحیات تحریری ضمانت۔'
    },
    icon: 'Sparkles'
  },
  {
    id: 'ivf',
    name: {
      en: 'IVF, Fertility & Reproductive Medicine',
      fa: 'IVF، درمان ناباروری و پزشکی تولید مثل',
      ar: 'أطفال الأنابيب (IVF) وتخصصات خصوبة الإنجاب',
      sw: 'Matibabu ya Uzazi na IVF',
      hi: 'आईवीएफ, फर्टिलिटी और रिप्रोडक्टिव मेडिसिन',
      ur: 'آئی وی ایف، زرخیزی اور تولیدی ادویات'
    },
    category: {
      en: 'Fertility & IVF',
      fa: 'باروری و IVF',
      ar: 'الخصوبة وأطفال الأنابيب',
      sw: 'Uzazi',
      hi: 'फर्टिलिटी और आईवीएफ',
      ur: 'زرخیزی اور آئی وی ایف'
    },
    duration: {
      en: '2-3 Weeks Cycle',
      fa: 'چرخه ۲ تا ۳ هفته‌ای',
      ar: 'دورة مدتها 2-3 أسابيع',
      sw: 'Wiki 2-3',
      hi: '2-3 सप्ताह चक्र',
      ur: '2-3 ہفتے کا سائیکل'
    },
    hospitalStay: {
      en: 'Day Care',
      fa: 'مراقبت روزانه',
      ar: 'رعاية يومية',
      sw: 'Kliniki ya Mchana',
      hi: 'डे केयर',
      ur: 'ڈے केयर'
    },
    recovery: {
      en: '3-5 Days',
      fa: '۳ تا ۵ روز',
      ar: '3-5 أيام',
      sw: 'Siku 3-5',
      hi: '3-5 दिन',
      ur: '3-5 دن'
    },
    iranCost: '$2,800',
    benchmarkCost: '$15,000',
    savings: '81%',
    description: {
      en: 'Advanced PGT-A genetic embryo screening, ICSI, and high success rate fertility clinics led by top endocrinologists.',
      fa: 'غربالگری ژنتیکی جنین PGT-A، ICSI و کلینیک‌های باروری با نرخ موفقیت بالا زیر نظر فوق تخصصان غدد و باروری.',
      ar: 'فحص الأجنة الجيني المتقدم ICSI ومراكز الخصوبة عالية النجاح بإشراف كبار استشاريي الغدد الصماء.',
      sw: 'Uchunguzi wa vinasaba wa kijeni wa PGT-A na vituo vya uzazi vyenye viwango vya juu vya mafanikio.',
      hi: 'उन्नत पीजीटी-ए जेनेटिक एम्ब्रीियो स्क्रीनिंग, आईसीएसआई और शीर्ष एंडोक्राइनोलॉजिस्ट के नेतृत्व में फर्टिलिटी क्लीनिक।',
      ur: 'جدید جینیاتی اسکریننگ PGT-A، ICSI اور اعلی درجے کے حاملہ علاج کے مراکز۔'
    },
    icon: 'Heart'
  },
  {
    id: 'orthopedic',
    name: {
      en: 'Orthopedic Joint Replacement & Spine Surgery',
      fa: 'تعویض مفصل ارتوپدی و جراحی ستون فقرات',
      ar: 'جراحة استبدال المفاصل وجراحة العمود الفقري',
      sw: 'Upasuaji wa Mifupa na Viungo',
      hi: 'ऑर्थोपेडिक ज्वाइंट रिप्लेसमेंट और स्पाइन सर्जरी',
      ur: 'جوڑوں کی تبدیلی اور ریڑھ کی ہڈی کی سرجری'
    },
    category: {
      en: 'Orthopedics',
      fa: 'ارتوپدی',
      ar: 'جراحة العظام',
      sw: 'Mifupa',
      hi: 'ऑर्थोपेडिक्स',
      ur: 'آرتھوپیডکس'
    },
    duration: {
      en: '2-3 Hours',
      fa: '۲ تا ۳ ساعت',
      ar: '2-3 ساعات',
      sw: 'Saa 2-3',
      hi: '2-3 घंटे',
      ur: '2-3 گھنٹے'
    },
    hospitalStay: {
      en: '3-5 Days',
      fa: '۳ تا ۵ روز',
      ar: '3-5 أيام',
      sw: 'Siku 3-5',
      hi: '3-5 दिन',
      ur: '3-5 دن'
    },
    recovery: {
      en: '4-6 Weeks',
      fa: '۴ تا ۶ هفته',
      ar: '4-6 أسابيع',
      sw: 'Wiki 4-6',
      hi: '4-6 सप्ताह',
      ur: '4-6 ہفتے'
    },
    iranCost: '$4,800',
    benchmarkCost: '$35,000',
    savings: '86%',
    description: {
      en: 'Total knee and hip arthroplasty using Zimmer Biomet and DePuy implants with dedicated post-op VIP physiotherapy rehabilitation.',
      fa: 'آرتروپلاستی کامل زانو و لگن با پروتزهای Zimmer Biomet و DePuy همراه با فیزیوتراپی اختصاصی پس از جراحی.',
      ar: 'استبدال مفصل الركبة والورك بالكامل باستخدام غرسات عالمية مع إعادة تأهيل علاج طبيعي مخصص.',
      sw: 'Upandikizaji wa magoti na viuno kwa kutumia vipandikizi vya kimataifa na huduma za urekebishaji.',
      hi: 'जिमर बायोमेट और डीपुय इम्प्लांट्स का उपयोग करके कुल घुटना और कूल्हा प्रतिस्थापन और विशेष फिजियोथेरेपी।',
      ur: 'زیمر بائیومیٹ امپلانٹس کے ساتھ گھٹنے اور کولهے کی تبدیلی اور خصوصی فزیوتھراپی بحالی۔'
    },
    icon: 'Activity'
  },
  {
    id: 'cardiology',
    name: {
      en: 'Cardiology, Angiography & Cardiac Stent',
      fa: 'قلب و عروق، آنژیوگرافی و استنت گذاری قلب',
      ar: 'أمراض القلب، قسطرة الأوعية الدموية والدعامات',
      sw: 'Magonjwa ya Moyo na Mishipa',
      hi: 'कार्डियोलॉजी, एंजियोग्राफी और कार्डियक स्टेंट',
      ur: 'کارڈیالوجی، انجیوگرافی اور کارڈیک سٹینٹ'
    },
    category: {
      en: 'Cardiology',
      fa: 'قلب و عروق',
      ar: 'أمراض القلب',
      sw: 'Moyo',
      hi: 'कार्डियोलॉजी',
      ur: 'کارڈیالوجی'
    },
    duration: {
      en: '1-2 Hours',
      fa: '۱ تا ۲ ساعت',
      ar: '1-2 ساعة',
      sw: 'Saa 1-2',
      hi: '1-2 घंटे',
      ur: '1-2 گھنٹے'
    },
    hospitalStay: {
      en: '1-2 Days',
      fa: '۱ تا ۲ روز',
      ar: '1-2 يوم',
      sw: 'Siku 1-2',
      hi: '1-2 दिन',
      ur: '1-2 دن'
    },
    recovery: {
      en: '1-2 Weeks',
      fa: '۱ تا ۲ هفته',
      ar: '1-2 أسبوع',
      sw: 'Wiki 1-2',
      hi: '1-2 सप्ताह',
      ur: '1-2 ہفتے'
    },
    iranCost: '$3,200',
    benchmarkCost: '$28,000',
    savings: '88%',
    description: {
      en: 'State-of-the-art cardiac catheterization labs, coronary angioplasty, and bypass surgery performed by elite cardiovascular surgeons.',
      fa: 'آزمایشگاه‌های کاتتریزاسیون پیشرفته قلب، آنژیوپلاستی عروق کرونر و جراحی بای‌پس توسط جراحان برجسته قلب و عروق.',
      ar: 'مختبرات قسطرة القلب الحديثة، رأب الأوعية الدموية وجراحة المجازة الشرتاجية بواسطة جراحي القلب.',
      sw: 'Maabara za kisasa za moyo, upasuaji wa mishipa ya damu na madaktari bingwa wakuu wa moyo.',
      hi: 'अत्याधुनिक कार्डियक कैथीटेराइजेशन लैब, कोरोनरी एंजियोप्लास्टी और बायपास सर्जरी शीर्ष हृदय सर्जनों द्वारा।',
      ur: 'جدید ترین کارڈیالوجی لیبارٹریز، انجیو پلاسٹی اور بائی پاس سرجری ماہر سرجنوں کے ذریعے۔'
    },
    icon: 'HeartPulse'
  },
  {
    id: 'oncology',
    name: {
      en: 'Oncology & Advanced Cancer Care',
      fa: 'انکولوژی و درمان تخصصی سرطان',
      ar: 'علم الأورام والرعاية المتقدمة للسرطان',
      sw: 'Huduma ya Kansa na Oncology',
      hi: 'ऑन्कोलॉजी और उन्नत कैंसर देखभाल',
      ur: 'انکالوجی اور جدید کینسر کی دیکھ بھال'
    },
    category: {
      en: 'Oncology',
      fa: 'انکولوژی',
      ar: 'علاج الأورام',
      sw: 'Saratani',
      hi: 'ऑन्कोलॉजी',
      ur: 'انکالوجی'
    },
    duration: {
      en: 'Varies by Protocol',
      fa: 'متغیر بر اساس پروتکل',
      ar: 'يختلف حسب البروتوكول',
      sw: 'Inatofautiana',
      hi: 'प्रोटोकॉल के अनुसार',
      ur: 'پروٹوکول کے مطابق مختلف'
    },
    hospitalStay: {
      en: 'Inpatient / Outpatient',
      fa: 'بستری / سرپایی',
      ar: 'مقيم / عيادة خارجية',
      sw: 'Kulingana na hali',
      hi: 'इन पेशेंट / आउट पेशेंट',
      ur: 'داخل / آؤٹ پیشنٹ'
    },
    recovery: {
      en: 'Personalized Plan',
      fa: 'برنامه شخصی‌سازی شده',
      ar: 'خطة مخصصة',
      sw: 'Mpango maalum',
      hi: 'व्यक्तिगत योजना',
      ur: 'ذاتی نوعیت کا منصوبہ'
    },
    iranCost: '$3,500 / cycle',
    benchmarkCost: '$25,000 / cycle',
    savings: '86%',
    description: {
      en: 'Comprehensive cancer treatment including targeted therapy, immunotherapy, and advanced radiation oncology at specialized hospitals.',
      fa: 'درمان جامع سرطان شامل درمان هدفمند، ایمونوتراپی و رادیوتراپی پیشرفته در بیمارستان‌های فوق تخصصی.',
      ar: 'علاج شامل للسرطان بما في ذلك العلاج الموجه، العلاج المناعي والعلاج الإشعاعي المتقدم.',
      sw: 'Matibabu ya kina ya saratani pamoja na tiba za kisasa katika hospitali maalum.',
      hi: 'व्यापक कैंसर उपचार जिसमें लक्षित चिकित्सा, इम्यूनोथेरेपी और उन्नत विकिरण ऑन्कोलॉजी शामिल है।',
      ur: 'کینسر کا جامع علاج بشمول ٹارগেটেড تھراپی، امیونو تھراپی اور جدید ریڈی ایشن آنکالوجی۔'
    },
    icon: 'ShieldCheck'
  },
  {
    id: 'bariatric',
    name: {
      en: 'Bariatric Weight Loss Surgery (Sleeve / Bypass)',
      fa: 'جراحی چاقی و لاغری (اسلیو / بای‌پس معده)',
      ar: 'جراحات السمنة وفقدان الوزن (تكميم المعدة / التحويل)',
      sw: 'Upasuaji wa Kupunguza Uzito (Sleeve / Bypass)',
      hi: 'बैरीऐट्रिक वजन घटाने की सर्जरी (स्लीव / बायपास)',
      ur: 'بیریٹ्रिक وزن کم کرنے کی سرجری (سلیو / بائی پاس)'
    },
    category: {
      en: 'Weight Loss',
      fa: 'جراحی چاقی',
      ar: 'جراحة السمنة',
      sw: 'Kupunguza Uzito',
      hi: 'वजन घटाना',
      ur: 'وزن میں کمی'
    },
    duration: {
      en: '1-2 Hours',
      fa: '۱ تا ۲ ساعت',
      ar: '1-2 ساعة',
      sw: 'Saa 1-2',
      hi: '1-2 घंटे',
      ur: '1-2 گھنٹے'
    },
    hospitalStay: {
      en: '2 Days',
      fa: '۲ روز',
      ar: 'يومان',
      sw: 'Siku 2',
      hi: '2 दिन',
      ur: '2 دن'
    },
    recovery: {
      en: '1-2 Weeks',
      fa: '۱ تا ۲ هفته',
      ar: '1-2 أسبوع',
      sw: 'Wiki 1-2',
      hi: '1-2 सप्ताह',
      ur: '1-2 ہفتے'
    },
    iranCost: '$3,100',
    benchmarkCost: '$18,000',
    savings: '83%',
    description: {
      en: 'Laparoscopic sleeve gastrectomy and gastric bypass performed by expert bariatric surgeons with 100% FDA-approved staplers.',
      fa: 'اسلیو معده لاپاراسکوپیک و بای‌پس معده توسط جراحان مجرب با منگنه‌های ۱۰۰ درصد تأیید شده FDA آمریکا.',
      ar: 'تكميم المعدة بالمنظار وتحويل المسار بواسطة جراحي السمنة الخبراء باستخدام أدوات معتمدة بنسبة 100%.',
      sw: 'Upasuaji wa kupunguza tumbo kwa njia ya matundu unaofanywa na wataalamu bingwa.',
      hi: 'लैपरोस्कोपिक स्लीव गैस्ट्रektomy और गैस्ट्रिक बायपास विशेषज्ञ सर्जनों द्वारा 100% एफडीए स्वीकृत स्टेपलर के साथ।',
      ur: 'لیپروسکوپک سلیو گیسٹریکٹومی اور گیسٹریک بائی پاس ماہر سرجنوں کے ذریعہ ایف ڈی اے سے منظور شدہ آلات کے ساتھ۔'
    },
    icon: 'Activity'
  }
];

const TRANSLATIONS = {
  en: {
    brandName: 'Maham Health',
    tagline: 'Elite Medical Tourism & Concierge Services in Iran',
    subtitle: 'Under Soorin Maham Trade & Industry Development Corporation',
    navTreatments: 'Specialties',
    navWhyIran: 'Why Iran',
    navProcess: 'Concierge Process',
    navPackages: 'VIP Packages',
    navContact: 'Contact Us',
    ctaConsultation: 'Free Medical Review',
    heroBadge: 'JCI-Accredited Hospitals • 70-90% Savings • 100% Visa Support',
    heroTitle: 'World-Class Healthcare Meets',
    heroTitleHighlight: 'Persian Hospitality & Luxury',
    heroDesc: 'Experience flawless medical tourism in Iran. From renowned plastic surgeons and complex cardiac procedures to fertility and dental care, Maham Health delivers end-to-end VIP concierge, private translation, luxury recovery suites, and dedicated medical escorts.',
    statsSaved: 'Average Cost Savings',
    statsSuccess: 'Surgical Success Rate',
    statsHospitals: 'JCI-Accredited Partner Hospitals',
    statsPatients: 'International Patients Cared For',
    specialtiesTitle: 'Medical Specialties & Transparent Pricing',
    specialtiesSubtitle: 'Compare Tehran benchmark prices against US, UAE, and European rates with zero hidden fees.',
    compareIran: 'Maham Health Iran',
    compareBenchmark: 'US / UAE / EU Benchmark',
    compareSavings: 'Your Savings',
    detailsBtn: 'View Procedure Details',
    durationLabel: 'Procedure Duration:',
    hospitalStayLabel: 'Hospital Stay:',
    recoveryLabel: 'Recovery Time:',
    wizardTitle: '3-Step Instant Consultation & Treatment Plan',
    wizardSubtitle: 'Upload your medical summary or photos and receive a comprehensive specialist review within 12 hours.',
    step1Title: '1. Select Specialty',
    step2Title: '2. Patient Details & Timeline',
    step3Title: '3. Medical Files & Submission',
    nextBtn: 'Continue to Next Step',
    backBtn: 'Back',
    submitBtn: 'Submit Consultation Request via WhatsApp & Email',
    whyTitle: 'Why Choose Maham Health & Iran?',
    whySubtitle: 'Combining world-class medical expertise, cutting-edge hospital infrastructure, and unrivaled affordability.',
    why1Title: 'World-Class Board-Certified Surgeons',
    why1Desc: 'Iranian surgeons perform thousands of successful procedures annually, holding American and European board certifications and fellowships.',
    why2Title: '70% to 90% Cost Advantage',
    why2Desc: 'Enjoy premium medical care at a fraction of US, UK, and UAE costs without compromising clinical excellence or safety.',
    why3Title: 'End-to-End VIP Concierge',
    why3Desc: 'From official medical visa invitation letters and VIP airport transfers to 5-star recovery hotels and private medical translators.',
    why4Title: 'JCI-Accredited Hospitals',
    why4Desc: 'Treatment in ultra-modern, hospital facilities equipped with advanced robotic surgery and intensive care units.',
    packagesTitle: 'All-Inclusive VIP Care Packages',
    packagesSubtitle: 'Designed for absolute comfort, security, and peace of mind for international patients and their families.',
    essentialTitle: 'Essential Care Package',
    essentialPrice: 'Included in Treatment',
    essential1: 'Airport VIP fast-track & private transfers',
    essential2: '3-4 Star recovery hotel accommodation',
    essential3: 'Professional medical translator / guide',
    essential4: 'Initial doctor consultation & lab tests',
    essential5: '24/7 patient coordinator support',
    vipTitle: 'Luxury Royal VIP Concierge',
    vipPrice: 'Ultimate Comfort',
    vip1: 'VIP Airport Meet & Greet with luxury car service',
    vip2: '5-Star luxury hotel / private recovery suite',
    vip3: 'Dedicated personal medical escort & nurse',
    vip4: 'All VIP hospital VIP rooms & private nursing',
    vip5: 'Tehran historical & cultural city tour (optional)',
    selectPackageBtn: 'Select This Package',
    footerAbout: 'Soorin Maham Trade & Industry Development Corporation',
    footerDesc: 'Your trusted gateway to world-class medical tourism, healthcare excellence, and international trade in Iran, Dubai, Tanzania, and India.',
    regionsLabel: 'Operating Regions:',
    regionsText: 'Iran (Tehran, Shiraz, Kish) • Dubai, UAE • Dar es Salaam, Tanzania • Mumbai, India',
    contactWhatsapp: 'WhatsApp Concierge:',
    contactEmail: 'Official Email:',
    rightsText: '© 2026 Soorin Maham Trade & Industry Development Corporation. All rights reserved.',
    modalClose: 'Close',
    fullNamePlaceholder: 'Full Name (e.g., John Doe)',
    emailPlaceholder: 'Email Address',
    phonePlaceholder: 'WhatsApp Number (with country code)',
    notesPlaceholder: 'Briefly describe your medical condition, goals, or questions...',
    agePlaceholder: 'Age',
    genderPlaceholder: 'Gender',
    male: 'Male',
    female: 'Female',
    timeframePlaceholder: 'Preferred Travel / Treatment Timeframe'
  },
  fa: {
    brandName: 'مهام هلث | Maham Health',
    tagline: 'گردشگری پزشکی لوکس و خدمات تشریفات در ایران',
    subtitle: 'تحت پوشش شرکت توسعه صنعت و تجارت سورین مهام',
    navTreatments: 'تخصص‌های پزشکی',
    navWhyIran: 'چرا ایران؟',
    navProcess: 'مراحل پذیرش',
    navPackages: 'پکیج‌های VIP',
    navContact: 'ارتباط با ما',
    ctaConsultation: 'مشاوره پزشکی رایگان',
    heroBadge: 'بیمارستان‌های دارای اعتباربخشی JCI • ۷۰ تا ۹۰ درصد صرفه‌جویی • اخذ وویزای درمانی',
    heroTitle: 'پزشکی تراز اول جهانی در تلفیق با',
    heroTitleHighlight: 'مهمان‌نوازی و لوکس ایرانی',
    heroDesc: 'تجربه‌ای بی‌نقص از گردشگری پزشکی در ایران. از جراحان برجسته پلاستیک و جراحی‌های پیشرفته قلب تا ناباروری و دندانپزشکی؛ مهام هلث خدمات کامل تشریفات VIP، مترجم اختصاصی، سوئیت‌های نقاهتگاهی لوکس و همراهی پزشکی را به شما ارائه می‌دهد.',
    statsSaved: 'میانگین صرفه‌جویی هزینه',
    statsSuccess: 'نرخ موفقیت جراحی',
    statsHospitals: 'بیمارستان‌های همکار دارای استاندارد JCI',
    statsPatients: 'بیماران بین‌المللی پذیرش‌شده',
    specialtiesTitle: 'تخصص‌های پزشکی و هزینه‌های شفاف',
    specialtiesSubtitle: 'مقایسه هزینه‌های تهران با تعرفه‌های آمریکا، امارات و اروپا بدون هیچ‌گونه هزینه پنهان.',
    compareIran: 'مهام هلث ایران',
    compareBenchmark: 'تعرفه آمریکا / امارات / اروپا',
    compareSavings: 'صرفه جویی شما',
    detailsBtn: 'مشاهده جزئیات عمل',
    durationLabel: 'مدت زمان عمل:',
    hospitalStayLabel: 'مدت بستری:',
    recoveryLabel: 'دوره نقاهت:',
    wizardTitle: 'فرم مشاوره آنلاین و برنامه درمانی ۳ مرحله‌ای',
    wizardSubtitle: 'خلاصه پرونده پزشکی یا تصاویر خود را بارگذاری کنید و ظرف ۱۲ ساعت ارزیابی کامل پزشک متخصص را دریافت نمایید.',
    step1Title: '۱. انتخاب تخصص پزشکی',
    step2Title: '۲. مشخصات بیمار و زمان‌بندی',
    step3Title: '۳. مدارک پزشکی و ارسال نهایی',
    nextBtn: 'مرحله بعد',
    backBtn: 'مرحله قبل',
    submitBtn: 'ارسال درخواست مشاوره از طریق واتساپ و ایمیل',
    whyTitle: 'چرا مهام هلث و ایران را انتخاب کنیم؟',
    whySubtitle: 'ترکیب دانش پزشکی جهان، زیرساخت بیمارستانی پیشرفته و مقرون‌به‌صرفه‌بودن بی‌نظیر.',
    why1Title: 'جراحان فوق تخصص و برجسته',
    why1Desc: 'جراحان ایرانی با انجام سالانه هزاران عمل موفق و دارای بورد تخصصی و فلوشیپ از معتبرترین دانشگاه‌های آمریکا و اروپا.',
    why2Title: '۷۰ تا ۹۰ درصد صرفه‌جویی مالی',
    why2Desc: 'بهره‌مندی از خدمات پزشکی ممتاز با کسر کوچکی از هزینه‌های آمریکا، انگلستان و امارات بدون افت کیفیت یا ایمنی.',
    why3Title: 'تشریفات و خدمات VIP تمام‌عیار',
    why3Desc: 'از دعوت‌نامه رسمی ویزای درمانی و ترانسفر تشریفاتی فرودگاه تا هتل‌های نقاهتگاهی ۵ ستاره و مترجم اختصاصی پزشکی.',
    why4Title: 'بیمارستان‌های مدرن با استاندارد JCI',
    why4Desc: 'درمان در پیشرفته‌ترین مراکز بیمارستانی مجهز به اتاق‌های عمل رباتیک و بخش‌های مراقبت ویژه استاندارد.',
    packagesTitle: 'پکیج‌های مراقبتی و VIP تمام‌خدمات',
    packagesSubtitle: 'طراحی‌شده برای آرامش خاطر کامل، امنیت و رفاه بیماران بین‌المللی و همراهان گرامی.',
    essentialTitle: 'پکیج مراقبت استاندارد (Essential)',
    essentialPrice: 'رایگان در طرح درمان',
    essential1: 'تشریفات اختصاصی فرودگاه و ترانسفر VIP',
    essential2: 'اقامت در هتل نقاهتگاهی ۳ تا ۴ ستاره',
    essential3: 'مترجم و راهنمای حرفه‌ای پزشکی',
    essential4: 'ویزیت اولیه پزشک و آزمایش‌های بالینی',
    essential5: 'پشتیبانی ۲۴ ساعته هماهنگ‌کننده بیمار',
    vipTitle: 'پکیج رویال VIP لوکس',
    vipPrice: 'حداکثر آسایش و رفاه',
    vip1: 'استقبال فرودگاهی با خودروی تشریفاتی لکسوس / بنز',
    vip2: 'هتل ۵ ستاره لوکس / سوئیت نقاهتگاهی اختصاصی',
    vip3: 'پرستار و همراه پزشکی شخصی اختصاصی',
    vip4: 'اتاق‌های VIP بیمارستان و پرستار اختصاصی شبانه‌روزی',
    vip5: 'تور گردشگری فرهنگی و تاریخی تهران (اختیاری)',
    selectPackageBtn: 'انتخاب این پکیج',
    footerAbout: 'شرکت توسعه صنعت و تجارت سورین مهام',
    footerDesc: 'درگاه مطمئن شما به سوی گردشگری پزشکی تراز اول، تعالی خدمات سلامت و تجارت بین‌الملل در ایران، امارات، تانزانیا و هند.',
    regionsLabel: 'مناطق فعالیت:',
    regionsText: 'ایران (تهران، شیراز، کیش) • دبی، امارات • دارالسلام، تانزانیا • بمبئی، هند',
    contactWhatsapp: 'واتساپ پشتیبانی:',
    contactEmail: 'ایمیل رسمی:',
    rightsText: '© ۲۰۲۶ شرکت توسعه صنعت و تجارت سورین مهام. تمامی حقوق محفوظ است.',
    modalClose: 'بستن',
    fullNamePlaceholder: 'نام و نام خانوادگی (مثال: علی رضایی)',
    emailPlaceholder: 'آدرس ایمیل',
    phonePlaceholder: 'شماره واتساپ (با کد کشور)',
    notesPlaceholder: 'شرح مختصر وضعیت پزشکی، انتظارات یا سوالات شما...',
    agePlaceholder: 'سن',
    genderPlaceholder: 'جنسیت',
    male: 'مرد',
    female: 'زن',
    timeframePlaceholder: 'زمان‌بندی ترجیحی سفر و درمان'
  },
  ar: {
    brandName: 'مهام هلث | Maham Health',
    tagline: 'السياحة العلاجية الفاخرة وخدمات الكونسيرج في إيران',
    subtitle: 'تحت إشراف شركة سورين مهام لتطوير الصناعة والتجارة',
    navTreatments: 'التخصصات الطبية',
    navWhyIran: 'لماذا إيران؟',
    navProcess: 'خطوات العلاج',
    navPackages: 'باقات VIP',
    navContact: 'اتصل بنا',
    ctaConsultation: 'استشارة طبية مجانية',
    heroBadge: 'مستشفيات معتمدة من JCI • توفير 70-90% • تأشيرة علاجية مضمونة',
    heroTitle: 'الرعاية الصحية العالمية تلتقي مع',
    heroTitleHighlight: 'الضيافة الفارسية والفخامة',
    heroDesc: 'اختبر سياحة علاجية لا تشوبها شائبة في إيران. من جراحي التجميل المشهورين وعمليات القلب المعقدة إلى الخصوبة وطب الأسنان، تقدم مهام هلث خدمات كونسيرج متكاملة، مترجم خاص، أجنحة نقاهة فاخرة، ومرافقين طبيين.',
    statsSaved: 'متوسط توفير التكاليف',
    statsSuccess: 'معدل نجاح العمليات',
    statsHospitals: 'مستشفيات شريكة معتمدة دولياً',
    statsPatients: 'مرضى دوليون تمت خدمتهم',
    specialtiesTitle: 'التخصصات الطبية والأسعار الشفافة',
    specialtiesSubtitle: 'قارن أسعار طهران مع المعايير الأمريكية والإماراتية والأوروبية دون أي رسوم مخفية.',
    compareIran: 'مهام هلث إيران',
    compareBenchmark: 'معيار أمريكا / الإمارات / أوروبا',
    compareSavings: 'توفيرك الإجمالي',
    detailsBtn: 'عرض تفاصيل العملية',
    durationLabel: 'مدة الإجراء:',
    hospitalStayLabel: 'الإقامة بالمستشفى:',
    recoveryLabel: 'فترة التعافي:',
    wizardTitle: 'استشارة فورية وخطة علاجية في 3 خطوات',
    wizardSubtitle: 'قم بتحميل ملفك الطبي أو صورك واحصل على تقييم شامل من استشاري متخصص خلال 12 ساعة.',
    step1Title: '1. اختر التخصص الطبي',
    step2Title: '2. تفاصيل المريض والجدول الزمني',
    step3Title: '3. الملفات الطبية وإرسال الطلب',
    nextBtn: 'الانتقال للخطوة التالية',
    backBtn: 'السابق',
    submitBtn: 'إرسال طلب الاستشارة عبر الواتساب والبريد الإلكتروني',
    whyTitle: 'لماذا تختار مهام هلث وإيران؟',
    whySubtitle: 'الجمع بين الخبرة الطبية العالمية، وبنية تحتية متطورة للمستشفيات، وتكلفة تنافسية لا تضاهى.',
    why1Title: 'جراحون معتمدون وذوو شهرة عالمية',
    why1Desc: 'يجري الجراحون الإيرانيون آلاف العمليات الناجحة سنوياً وهم حاصلون على البورد الأمريكي والأوروبي.',
    why2Title: 'توفير مالي من 70% إلى 90%',
    why2Desc: 'استمتع برعاية طبية ممتازة بجزء بسيط من تكاليف الولايات المتحدة وبريطانيا والإمارات.',
    why3Title: 'خدمات كونسيرج VIP متكاملة',
    why3Desc: 'من خطابات الدعوة الرسمية للتأشيرة والاستقبال الفاخر بالمطار إلى فنادق النقاهة ومترجمين طبيين.',
    why4Title: 'مستشفيات حديثة معتمدة من JCI',
    why4Desc: 'العلاج في مستشفيات حديثة مجهزة بغرف عمليات روبوتية ووحدات عناية مركزية متطورة.',
    packagesTitle: 'باقات الرعاية الشاملة VIP',
    packagesSubtitle: 'مصممة خصيصاً لضمان الراحة التامة والأمان والرفاهية للمرضى الدوليين وعائلاتهم.',
    essentialTitle: 'باقة الرعاية الأساسية',
    essentialPrice: 'مشمولة في خطة العلاج',
    essential1: 'استقبال سريع بالمطار وخدمة نقل خاصة',
    essential2: 'إقامة بفندق نقاهة 3-4 نجوم',
    essential3: 'مترجم ومرافق طبي محترف',
    essential4: 'الاستشارة الأولية للطب والفحوصات',
    essential5: 'دعم منسق المرضى على مدار الساعة',
    vipTitle: 'باقة كونسيرج VIP الملكية الفاخرة',
    vipPrice: 'أقصى درجات الراحة',
    vip1: 'استقبال خاص في المطار مع سيارة ليموزين فاخرة',
    vip2: 'إقامة في فندق 5 نجوم / جناح نقاهة خاص',
    vip3: 'ممرض ومرافق شخصي خاص للمريض',
    vip4: 'غرف VIP بالمستشفى وتمريض خاص على مدار الساعة',
    vip5: 'جولة سياحية تاريخية وثقافية في طهران (اختياري)',
    selectPackageBtn: 'اختر هذه الباقة',
    footerAbout: 'شركة سورين مهام لتطوير الصناعة والتجارة',
    footerDesc: 'بوابتك الموثوقة للسياحة العلاجية الفاخرة، التميز الصحي، والتجارة الدولية في إيران، دبي، تانزانيا والهند.',
    regionsLabel: 'مناطق العمليات:',
    regionsText: 'إيران (طهران، شيراز، كيش) • دبي، الإمارات • دار السلام، تانزانيا • مومباي، الهند',
    contactWhatsapp: 'واتساب خدمة العملاء:',
    contactEmail: 'البريد الإلكتروني الرسمي:',
    rightsText: '© 2026 شركة سورين مهام لتطوير الصناعة والتجارة. جميع الحقوق محفوظة.',
    modalClose: 'إغلاق',
    fullNamePlaceholder: 'الاسم الكامل (مثال: محمد أحمد)',
    emailPlaceholder: 'عنوان البريد الإلكتروني',
    phonePlaceholder: 'رقم الواتساب (مع رمز الدولة)',
    notesPlaceholder: 'صف باختصار حالتك الطبية أو أهدافك أو استفساراتك...',
    agePlaceholder: 'العمر',
    genderPlaceholder: 'الجنس',
    male: 'ذكر',
    female: 'أنثى',
    timeframePlaceholder: 'الوقت المفضل للسفر والعلاج'
  },
  sw: {
    brandName: 'Maham Health',
    tagline: 'Utalii wa Kiafya wa Kiwango cha Juu nchini Iran',
    subtitle: 'Chini ya Soorin Maham Trade & Industry Development Corporation',
    navTreatments: 'Matibabu',
    navWhyIran: 'Kwa Nini Iran',
    navProcess: 'Mchakato',
    navPackages: 'Vifurushi vya VIP',
    navContact: 'Wasiliana Nasi',
    ctaConsultation: 'Ushauri wa Bure wa Matibabu',
    heroBadge: 'Hospitali Zilizoidhinishwa na JCI • Akiba ya 70-90% • Msaada wa Visa',
    heroTitle: 'Huduma Bora za Kiafya Kutana na',
    heroTitleHighlight: 'Ukarimu na Anasa za Kiajemi',
    heroDesc: 'Pata huduma bora za utalii wa kimatibabu nchini Iran. Kuanzia madaktari bingwa wa upasuaji na magonjwa ya moyo hadi uzazi na meno, Maham Health inakupa huduma za VIP, wakalimani, na hoteli za kifahari.',
    statsSaved: 'Wastani wa Akiba ya Gharama',
    statsSuccess: 'Kiwango cha Mafanikio ya Upasuaji',
    statsHospitals: 'Hospitali Shirikishi za JCI',
    statsPatients: 'Wagonjwa wa Kimataifa Waliotibiwa',
    specialtiesTitle: 'Tanzu za Matibabu na Bei za Wazi',
    specialtiesSubtitle: 'Linganisha bei za Tehran na viwango vya Marekani, UAE, na Ulaya bila ada yoyote iliyofichwa.',
    compareIran: 'Maham Health Iran',
    compareBenchmark: 'Kiwango cha Marekani / UAE / Ulaya',
    compareSavings: 'Akiba Yako',
    detailsBtn: 'Tazama Maelezo ya Upasuaji',
    durationLabel: 'Muda wa Upasuaji:',
    hospitalStayLabel: 'Kukaa Hospitalini:',
    recoveryLabel: 'Muda wa Kupona:',
    wizardTitle: 'Mpango wa Ushauri na Matibabu wa Hatua 3',
    wizardSubtitle: 'Pakia muhtasari wako wa matibabu na upate tathmini ya kina ndani ya masaa 12.',
    step1Title: '1. Chagua Utalaamu',
    step2Title: '2. Taarifa za Mgonjwa',
    step3Title: '3. Faili za Matibabu na Tuma',
    nextBtn: 'Endelea Hatua Inayofuata',
    backBtn: 'Rudi',
    submitBtn: 'Tuma Ombi la Ushauri kupitia WhatsApp na Barua Pepe',
    whyTitle: 'Kwa Nini Uchague Maham Health na Iran?',
    whySubtitle: 'Kuchanganya utaalam wa kiwango cha juu wa matibabu na unafuu mkubwa wa gharama.',
    why1Title: 'Madaktari Bingwa Waliobobea',
    why1Desc: 'Madaktari wa Iran wanafanya maelfu ya upasuaji wenye mafanikio kila mwaka wakiwa na vyeti vya Marekani na Ulaya.',
    why2Title: 'Akiba ya Gharama ya 70% hadi 90%',
    why2Desc: 'Furahia matibabu ya kiwango cha juu kwa gharama ndogo sana ikilinganishwa na nchi za Magharibi.',
    why3Title: 'Huduma Kamili za VIP',
    why3Desc: 'Kuanzia barua ya mwaliko wa visa, usafiri wa kibinafsi wa uwanja wa ndege hadi hoteli za nyota 5 na wakalimani.',
    why4Title: 'Hospitali Zilizoidhinishwa na JCI',
    why4Desc: 'Matibabu katika vifaa vya kisasa vya hospitali vilivyo na teknolojia ya hali ya juu.',
    packagesTitle: 'Vifurushi vya Huduma za VIP vya All-Inclusive',
    packagesSubtitle: 'Imeundwa kwa ajili ya faraja kamili, usalama na amani ya akili kwa wagonjwa na familia zao.',
    essentialTitle: 'Kifurushi Muhimu cha Utunzaji',
    essentialPrice: 'Kimejumuishwa katika Mpango',
    essential1: 'Huduma ya haraka ya uwanja wa ndege na usafiri binafsi',
    essential2: 'Malazi ya hoteli ya nyota 3-4',
    essential3: 'Mkalimani na mwongozo wa kitaalamu wa matibabu',
    essential4: 'Ushauri wa awali na vipimo vya maabara',
    essential5: 'Usaidizi wa mratibu wa wagonjwa 24/7',
    vipTitle: 'Kifurushi cha Kifalme cha VIP',
    vipPrice: 'Faraja Kuu',
    vip1: 'Mapokezi ya VIP uwanja wa ndege na gari la kifahari',
    vip2: 'Hoteli ya nyota 5 ya kifahari / chumba binafsi cha kupona',
    vip3: 'Muuguzi binafsi na msaidizi wa matibabu',
    vip4: 'Vyumba vya VIP hospitalini na muuguzi wa saa 24',
    vip5: 'Ziara ya kihistoria na kitamaduni Tehran (si lazima)',
    selectPackageBtn: 'Chagua Kifurushi Hiki',
    footerAbout: 'Soorin Maham Trade & Industry Development Corporation',
    footerDesc: 'Lango lako la kuaminika la utalii wa matibabu wa kiwango cha juu na biashara ya kimataifa.',
    regionsLabel: 'Maeneo ya Uendeshaji:',
    regionsText: 'Iran (Tehran, Shiraz, Kish) • Dubai, UAE • Dar es Salaam, Tanzania • Mumbai, India',
    contactWhatsapp: 'WhatsApp ya Huduma:',
    contactEmail: 'Barua Pepe Rasmi:',
    rightsText: '© 2026 Soorin Maham Trade & Industry Development Corporation. Haki zote zimehifadhiwa.',
    modalClose: 'Funga',
    fullNamePlaceholder: 'Jina Kamili',
    emailPlaceholder: 'Barua Pepe',
    phonePlaceholder: 'Namba ya WhatsApp (yenye nchi)',
    notesPlaceholder: 'Eleza kwa ufupi hali yako ya kiafya...',
    agePlaceholder: 'Umri',
    genderPlaceholder: 'Jinsia',
    male: 'Mume',
    female: 'Mke',
    timeframePlaceholder: 'Muda unaopendelea wa kusafiri'
  },
  hi: {
    brandName: 'Maham Health',
    tagline: 'ईरान में एलीट मेडिकल टूरिज्म और कॉन्cierगे सेवाएं',
    subtitle: 'सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन के अंतर्गत',
    navTreatments: 'विशेषताएं',
    navWhyIran: 'ईरान क्यों',
    navProcess: 'कंसर्ज प्रक्रिया',
    navPackages: 'वीआईपी पैकेज',
    navContact: 'संपर्क करें',
    ctaConsultation: 'निःशुल्क चिकित्सा समीक्षा',
    heroBadge: 'JCI-मान्यता प्राप्त अस्पताल • 70-90% बचत • 100% वीज़ा सहायता',
    heroTitle: 'विश्व स्तरीय स्वास्थ्य सेवा मिलती है',
    heroTitleHighlight: 'फारसी आतिथ्य और विलासिता के साथ',
    heroDesc: 'ईरान में त्रुटिहीन चिकित्सा पर्यटन का अनुभव करें। प्रसिद्ध प्लास्टिक सर्जनों और जटिल हृदय प्रक्रियाओं से लेकर फर्टिलिटी और दंत चिकित्सा तक, महाम Health वीआईपी कॉन्cierगे, निजी अनुवादक और समर्पित चिकित्सा दल प्रदान करता है।',
    statsSaved: 'औसत लागत बचत',
    statsSuccess: 'सर्जिकल सफलता दर',
    statsHospitals: 'JCI-मान्यता प्राप्त भागीदार अस्पताल',
    statsPatients: 'देखभाल किए गए अंतर्राष्ट्रीय रोगी',
    specialtiesTitle: 'चिकित्सा विशेषताएँ और पारदर्शी मूल्य निर्धारण',
    specialtiesSubtitle: 'बिना किसी छिपे हुए शुल्क के यूएस, यूएई और यूरोपीय दरों के साथ तेहरान बेंचमार्क कीमतों की तुलना करें।',
    compareIran: 'महाम हेल्थ ईरान',
    compareBenchmark: 'यूएस / यूएई / ईयू बेंचमार्क',
    compareSavings: 'आपकी बचत',
    detailsBtn: 'प्रक्रिया विवरण देखें',
    durationLabel: 'प्रक्रिया की अवधि:',
    hospitalStayLabel: 'अस्पताल में रहना:',
    recoveryLabel: 'रिकवरी का समय:',
    wizardTitle: '3-चरण तत्काल परामर्श और उपचार योजना',
    wizardSubtitle: 'अपना मेडिकल सारांश या तस्वीरें अपलोड करें और 12 घंटे के भीतर व्यापक विशेषज्ञ समीक्षा प्राप्त करें।',
    step1Title: '1. विशेषता चुनें',
    step2Title: '2. रोगी विवरण और समय सीमा',
    step3Title: '3. चिकित्सा फ़ाइलें और प्रस्तुतीकरण',
    nextBtn: 'अगले चरण पर जाएं',
    backBtn: 'वापस',
    submitBtn: 'व्हाट्सएप और ईमेल के माध्यम से परामर्श अनुरोध जमा करें',
    whyTitle: 'महाम हेल्थ और ईरान क्यों चुनें?',
    whySubtitle: 'विश्व स्तरीय चिकित्सा विशेषज्ञता, अत्याधुनिक अस्पताल के बुनियादी ढांचे और अद्वितीय सामर्थ्य का संयोजन।',
    why1Title: 'विश्व स्तरीय बोर्ड-प्रमाणित सर्जन',
    why1Desc: 'ईरानी सर्जन अमेरिकी और यूरोपीय बोर्ड प्रमाणपत्रों के साथ सालाना हजारों सफल प्रक्रियाएं करते हैं।',
    why2Title: '70% से 90% लागत लाभ',
    why2Desc: 'नैदानिक उत्कृष्टता या सुरक्षा से समझौता किए बिना अमेरिकी और यूके की लागत के एक अंश पर प्रीमियम चिकित्सा देखभाल का आनंद लें।',
    why3Title: 'एंड-टू-एंड वीआईपी कॉन्cierगे',
    why3Desc: 'आधिकारिक चिकित्सा वीज़ा निमंत्रण पत्र और वीआईपी हवाई अड्डे के हस्तांतरण से लेकर 5-सितारा रिकवरी होटल तक।',
    why4Title: 'JCI-मान्यता प्राप्त अस्पताल',
    why4Desc: 'उन्नत रोबोटिक सर्जरी और गहन देखभाल इकाइयों से सुसज्जित अल्ट्रा-आधुनिक अस्पताल सुविधाओं में उपचार।',
    packagesTitle: 'सर्व-समावेशी वीआईपी देखभाल पैकेज',
    packagesSubtitle: 'अंतर्राष्ट्रीय रोगियों और उनके परिवारों के लिए पूर्ण आराम, सुरक्षा और मन की शांति के लिए डिज़ाइन किया गया।',
    essentialTitle: 'आवश्यक देखभाल पैकेज',
    essentialPrice: 'उपचार योजना में शामिल',
    essential1: 'एयरपोर्ट वीआईपी फास्ट-ट्रैक और निजी ट्रांसफर',
    essential2: '3-4 स्टार रिकवरी होटल आवास',
    essential3: 'पेशेवर चिकित्सा अनुवादक / गाइड',
    essential4: 'प्रारंभिक डॉक्टर परामर्श और लैब परीक्षण',
    essential5: '24/7 रोगी समन्वयक सहायता',
    vipTitle: 'लक्जरी रॉयल वीआईपी कॉन्cierगे',
    vipPrice: 'परम आराम',
    vip1: 'लक्जरी कार सेवा के साथ वीआईपी एयरपोर्ट मीट एंड ग्रीट',
    vip2: '5-सितारा लक्जरी होटल / निजी रिकवरी सुइट',
    vip3: 'समर्पित व्यक्तिगत चिकित्सा escort और नर्स',
    vip4: 'सभी वीआईपी अस्पताल वीआईपी कमरे और निजी नर्सिंग',
    vip5: 'तेहरान ऐतिहासिक और सांस्कृतिक शहर का दौरा (वैकल्पिक)',
    selectPackageBtn: 'इस पैकेज को चुनें',
    footerAbout: 'सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन',
    footerDesc: 'ईरान, दुबई, तंजानिया और भारत में विश्व स्तरीय चिकित्सा पर्यटन और स्वास्थ्य सेवा उत्कृष्टता के लिए आपका विश्वसनीय द्वार।',
    regionsLabel: 'संचालन क्षेत्र:',
    regionsText: 'ईरान (तेहरान, शिراز, किश) • दुबई, यूएई • डार es सलाम, तंजानिया • मुंबई, भारत',
    contactWhatsapp: 'व्हाट्सएप कॉन्cierगे:',
    contactEmail: 'आधिकारिक ईमेल:',
    rightsText: '© 2026 सूरिन महाम ट्रेड एंड इंडस्ट्री डेवलपमेंट कॉरपोरेशन। सर्वाधिकार सुरक्षित।',
    modalClose: 'बंद करें',
    fullNamePlaceholder: 'पूरा नाम',
    emailPlaceholder: 'ईमेल पता',
    phonePlaceholder: 'व्हाट्सएप नंबर (देश कोड के साथ)',
    notesPlaceholder: 'संक्षेप में अपनी चिकित्सा स्थिति या लक्ष्य बताएं...',
    agePlaceholder: 'आयु',
    genderPlaceholder: 'लिंग',
    male: 'पुरुष',
    female: 'महिला',
    timeframePlaceholder: 'पसंदीदा यात्रा / उपचार समय-सीमा'
  },
  ur: {
    brandName: 'مھام ہیلتھ | Maham Health',
    tagline: 'ایران میں ایلیٹ میڈیکل ٹ্যورزم اور وی آئی پی خدمات',
    subtitle: 'سورین مھام ٹریڈ اینڈ انڈسٹری ڈویلپمنٹ کارپوریشن کے تحت',
    navTreatments: 'تخصصات',
    navWhyIran: 'ایران کیوں؟',
    navProcess: 'طریقہ کار',
    navPackages: 'وی آئی پی پیکیجز',
    navContact: 'رابطہ کریں',
    ctaConsultation: 'مفت طبی مشورہ',
    heroBadge: 'جے سی آئی منظور شدہ اسپتال • 70-90% بچت • ویزا معاونت',
    heroTitle: 'عالمی معیار کی صحت کی دیکھ بھال',
    heroTitleHighlight: 'اور فارسی مہمان نوازی کا حسین امتزاج',
    heroDesc: 'ایران میں بہترین میڈیکل ٹ্যورزم کا تجربہ کریں۔ نامور پلاسٹک سرجنز، دل کے پیچیدہ علاج، اور دندان سازی سے لے کر، مھام ہیلتھ آپ کو وی آئی پی کونسیرج اور جدید سہولیات فراہم کرتا ہے۔',
    statsSaved: 'اوسط لاگت کی بچت',
    statsSuccess: 'سرجری کی کامیابی کی شرح',
    statsHospitals: 'جے سی آئی سے منظور شدہ پارٹنر اسپتال',
    statsPatients: 'بین الاقوامی مریض جن کی دیکھ بھال کی گئی',
    specialtiesTitle: 'طبی شعبے اور شفاف قیمتیں',
    specialtiesSubtitle: 'امریکہ، یو اے ای اور یورپی نرخوں کے مقابلے میں تہران کے بینچ مارک کا موازنہ کریں۔',
    compareIran: 'مھام ہیلتھ ایران',
    compareBenchmark: 'امریکہ / یو اے ای / ای یو بینچ مارک',
    compareSavings: 'آپ کی بچت',
    detailsBtn: 'تفصیلات دیکھیں',
    durationLabel: 'عمل کا دورانیہ:',
    hospitalStayLabel: 'اسپتال میں قیام:',
    recoveryLabel: 'صحتیابی کا وقت:',
    wizardTitle: '3 مراحل میں فوری طبی مشورہ اور علاج کا منصوبہ',
    wizardSubtitle: 'اپنی طبی رپورٹ یا تصاویر اپ لوڈ کریں اور 12 گھنٹے کے اندر ماہر ڈاکٹر کا جائزہ حاصل کریں۔',
    step1Title: '1. شعبہ منتخب کریں',
    step2Title: '2. مریض کی تفصیلات اور وقت',
    step3Title: '3. طبی فائلیں اور جمع کرانا',
    nextBtn: 'اگلا مرحلہ',
    backBtn: 'واپس',
    submitBtn: 'واٹس ایپ اور ای میل کے ذریعے درخواست جمع کروائیں',
    whyTitle: 'مھام ہیلتھ اور ایران کا انتخاب کیوں کریں؟',
    whySubtitle: 'عالمی معیار کی طبی مہارت اور غیر معمولی کفایت شعاری کا امتزاج۔',
    why1Title: 'عالمی معیار کے سرجنز',
    why1Desc: 'ایرانی سرجن امریکی اور یورپی بورڈ کی سند یافتہ قابلیت کے ساتھ ہزاروں کامیاب سرجریز کرتے ہیں۔',
    why2Title: '70% سے 90% تک بچت',
    why2Desc: 'امریکہ اور یورپ کے مقابلے میں کم لاگت میں اعلیٰ ترین طبی خدمات حاصل کریں۔',
    why3Title: 'مکمل وی آئی پی کونسیرج',
    why3Desc: 'ویزا کی دعوت نامے سے لے کر ایئرپورٹ پک اپ، 5 ستارہ ہوٹل اور مترجم تک تمام سہولیات۔',
    why4Title: 'جے سی آئی منظور شدہ اسپتال',
    why4Desc: 'جدید ترین روبوٹک سرجری اور آئی سی یو کی سہولیات سے آراستہ اسپتالوں میں علاج۔',
    packagesTitle: 'آل انکلুসিو وی آئی پی کیئر پیکیجز',
    packagesSubtitle: 'بین الاقوامی مریضوں اور ان کے اہل خانہ کے لیے آرام اور سکون کے لیے ڈیزائن کیا گیا ہے۔',
    essentialTitle: 'ضروری نگداشت کا پیکیج',
    essentialPrice: 'علاج کے منصوبے میں شامل',
    essential1: 'ایئرپورٹ وی آئی پی فاسٹ ٹریک اور نجی ٹرانسفر',
    essential2: '3-4 ستارہ ریکوری ہوٹل کی رہائش',
    essential3: 'پیشہ ورانہ میڈیکل مترجم / گائیڈ',
    essential4: 'ابتدائی ڈاکٹر کا مشورہ اور لیب ٹیسٹ',
    essential5: '24/7 مریض کوآرڈینیٹر سپورٹ',
    vipTitle: 'لژری رائل وی آئی پی کونسیرج',
    vipPrice: 'انتہائی سکون اور آرام',
    vip1: 'لژری کار سروس کے ساتھ وی آئی پی ایئرپورٹ ریسپشن',
    vip2: '5 ستارہ لگژری ہوٹل / نجی ریکوری سویٹ',
    vip3: 'مخصوص ذاتی طبی معاون اور نرس',
    vip4: 'اسپتال کے تمام وی آئی پی کمرے اور نرسنگ',
    vip5: 'تہران کی تاریخی اور ثقافتی شہر کا دورہ (اختیاری)',
    selectPackageBtn: 'یہ پیکیج منتخب کریں',
    footerAbout: 'سورین مھام ٹریڈ اینڈ انڈسٹری ڈویلپمنٹ کارپوریشن',
    footerDesc: 'ایران، دبئی، تنزانیہ اور بھارت میں عالمی معیار کی طبی سیاحت اور بین الاقوامی تجارت کا آپ کا قابل اعتماد مرکز۔',
    regionsLabel: 'آپریٹنگ کے علاقے:',
    regionsText: 'ایران (تہران، شیراز، کیش) • دبئی، یو اے ای • دارالسلام، تنزانیہ • ممبئی، بھارت',
    contactWhatsapp: 'واٹس ایپ کونسیرج:',
    contactEmail: 'سرکاری ای میل:',
    rightsText: '© 2026 سورین مھام ٹریڈ اینڈ انڈسٹری ڈویلپمنٹ کارپوریشن۔ تمام حقوق محفوظ ہیں۔',
    modalClose: 'بند کریں',
    fullNamePlaceholder: 'पूरा नाम / پورا نام',
    emailPlaceholder: 'ای میل ایڈریس',
    phonePlaceholder: 'واٹس ایپ نمبر (ملک کے کوڈ کے ساتھ)',
    notesPlaceholder: 'اپنی طبی حالت یا سوالات کا مختصر ذکر کریں...',
    agePlaceholder: 'عمر',
    genderPlaceholder: 'جنس',
    male: 'مرد',
    female: 'عورت',
    timeframePlaceholder: 'سفر اور علاج کا ترجیحی وقت'
  }
};

export default function Home({ initialLanguage = 'en' }: { initialLanguage?: Language }) {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const isRtl = ['fa', 'ar', 'ur'].includes(lang);

  const [wizardStep, setWizardStep] = useState<number>(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('rhinoplasty');
  const [patientAge, setPatientAge] = useState<string>('');
  const [patientGender, setPatientGender] = useState<string>('Female');
  const [timeframe, setTimeframe] = useState<string>('');
  const [medicalNotes, setMedicalNotes] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('Essential Care');
  const [selectedModalSpecialty, setSelectedModalSpecialty] = useState<Specialty | null>(null);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Maham Health,\n\nI would like to request a consultation:\n- Specialty: ${selectedSpecialty}\n- Name: ${fullName}\n- Age: ${patientAge}\n- Gender: ${patientGender}\n- Timeframe: ${timeframe}\n- Package: ${selectedPackage}\n- Notes: ${medicalNotes}\n- Email: ${email}`
    );
    window.open(`https://wa.me/989055240772?text=${message}`, '_blank');
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      {/* Top Notification Bar */}
      <div className="bg-blue-900 text-blue-100 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-blue-800">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          {t.heroBadge}
          <a
            href="https://wa.me/989055240772"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-2 font-bold text-amber-300 hover:text-amber-200"
          >
            WhatsApp: +98 905 524 0772
          </a>
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-blue-900">
                {t.brandName}
              </span>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
            <a href="#treatments" className="hover:text-blue-600 transition">
              {t.navTreatments}
            </a>
            <a href="#why-iran" className="hover:text-blue-600 transition">
              {t.navWhyIran}
            </a>
            <a href="#wizard" className="hover:text-blue-600 transition">
              {t.navProcess}
            </a>
            <a href="#packages" className="hover:text-blue-600 transition">
              {t.navPackages}
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              {t.navContact}
            </a>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold shadow-sm hover:bg-slate-100 transition">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 hidden group-hover:block z-50">
                {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium uppercase hover:bg-blue-50 hover:text-blue-600 transition ${
                      lang === l ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    {l === 'en' && 'English'}
                    {l === 'fa' && 'فارسی'}
                    {l === 'ar' && 'العربية'}
                    {l === 'sw' && 'Kiswahili'}
                    {l === 'hi' && 'हिन्दी'}
                    {l === 'ur' && 'اردو'}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#wizard"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-blue-700 transition"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              {t.ctaConsultation}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              {t.tagline}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              {t.heroTitle}{' '}
              <span className="text-blue-600 underline decoration-amber-400 decoration-wavy underline-offset-8">
                {t.heroTitleHighlight}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#wizard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition transform hover:-translate-y-0.5"
              >
                {t.ctaConsultation}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/989055240772"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-300 text-slate-800 font-bold text-sm shadow-sm hover:bg-slate-100 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                Chat via WhatsApp
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">70-90%</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.statsSaved}</div>
            </div>
            <div className="text-center p-4 border-l border-slate-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">99.4%</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.statsSuccess}</div>
            </div>
            <div className="text-center p-4 border-l border-slate-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">15+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.statsHospitals}</div>
            </div>
            <div className="text-center p-4 border-l border-slate-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">5,000+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.statsPatients}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties & Pricing Section */}
      <section id="treatments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.specialtiesTitle}
            </h2>
            <p className="text-base text-slate-600">{t.specialtiesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((spec) => (
              <div
                key={spec.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                      {spec.category[lang] || spec.category.en}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      {spec.savings} {t.compareSavings}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {spec.name[lang] || spec.name.en}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {spec.description[lang] || spec.description.en}
                  </p>
                </div>

                <div>
                  {/* Price Comparison Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-500 font-medium">{t.compareIran}</span>
                      <span className="text-base font-extrabold text-blue-600">{spec.iranCost}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                      <span className="text-xs text-slate-500 font-medium">{t.compareBenchmark}</span>
                      <span className="text-sm font-semibold text-slate-700 line-through">
                        {spec.benchmarkCost}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedModalSpecialty(spec);
                      setSelectedSpecialty(spec.id);
                    }}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <span>{t.detailsBtn}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Consultation Wizard */}
      <section id="wizard" className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.wizardTitle}
            </h2>
            <p className="text-base text-slate-600">{t.wizardSubtitle}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200 text-xs sm:text-sm font-bold">
              <div className={`flex items-center gap-2 ${wizardStep === 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${wizardStep === 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
                <span>{t.step1Title}</span>
              </div>
              <div className={`flex items-center gap-2 ${wizardStep === 2 ? 'text-blue-600' : 'text-slate-400'}`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${wizardStep === 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
                <span>{t.step2Title}</span>
              </div>
              <div className={`flex items-center gap-2 ${wizardStep === 3 ? 'text-blue-600' : 'text-slate-400'}`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${wizardStep === 3 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
                <span>{t.step3Title}</span>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit}>
              {wizardStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-800">{t.step1Title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SPECIALTIES.map((spec) => (
                      <div
                        key={spec.id}
                        onClick={() => setSelectedSpecialty(spec.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                          selectedSpecialty === spec.id
                            ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">
                            {spec.name[lang] || spec.name.en}
                          </h4>
                          <span className="text-xs text-blue-600 font-semibold">{spec.iranCost}</span>
                        </div>
                        <input
                          type="radio"
                          name="specialty"
                          checked={selectedSpecialty === spec.id}
                          onChange={() => setSelectedSpecialty(spec.id)}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setWizardStep(2)}
                      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition flex items-center gap-2"
                    >
                      <span>{t.nextBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {wizardStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-800">{t.step2Title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">{t.agePlaceholder}</label>
                      <input
                        type="number"
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        placeholder="e.g., 34"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">{t.genderPlaceholder}</label>
                      <select
                        value={patientGender}
                        onChange={(e) => setPatientGender(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      >
                        <option value="Female">{t.female}</option>
                        <option value="Male">{t.male}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">{t.timeframePlaceholder}</label>
                    <input
                      type="text"
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                      placeholder="e.g., Next month / Within 3 months"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Select Concierge Package</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div
                        onClick={() => setSelectedPackage('Essential Care')}
                        className={`p-4 rounded-xl border cursor-pointer ${selectedPackage === 'Essential Care' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200'}`}
                      >
                        <h4 className="font-bold text-sm text-slate-900">{t.essentialTitle}</h4>
                        <span className="text-xs text-slate-500">Standard VIP Support</span>
                      </div>
                      <div
                        onClick={() => setSelectedPackage('Luxury VIP')}
                        className={`p-4 rounded-xl border cursor-pointer ${selectedPackage === 'Luxury VIP' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200'}`}
                      >
                        <h4 className="font-bold text-sm text-slate-900">{t.vipTitle}</h4>
                        <span className="text-xs text-amber-600 font-semibold">Ultimate Comfort & Suite</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setWizardStep(1)}
                      className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition"
                    >
                      {t.backBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => setWizardStep(3)}
                      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition flex items-center gap-2"
                    >
                      <span>{t.nextBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {wizardStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-800">{t.step3Title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">{t.fullNamePlaceholder}</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">{t.phonePlaceholder}</label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">{t.emailPlaceholder}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">{t.notesPlaceholder}</label>
                    <textarea
                      rows={4}
                      value={medicalNotes}
                      onChange={(e) => setMedicalNotes(e.target.value)}
                      placeholder="Describe your medical history or attach tests description..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    ></textarea>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setWizardStep(2)}
                      className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition"
                    >
                      {t.backBtn}
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-xl hover:bg-emerald-700 transition flex items-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>{t.submitBtn}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Iran & Maham Health */}
      <section id="why-iran" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-base text-slate-600">{t.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t.why1Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.why1Desc}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t.why2Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.why2Desc}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t.why3Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.why3Desc}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t.why4Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.why4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Packages Section */}
      <section id="packages" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {t.packagesTitle}
            </h2>
            <p className="text-base text-slate-600">{t.packagesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Essential Care */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.essentialTitle}</h3>
                <div className="text-sm font-semibold text-blue-600 mb-6">{t.essentialPrice}</div>
                <ul className="space-y-4 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{t.essential1}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{t.essential2}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{t.essential3}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{t.essential4}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{t.essential5}</span>
                  </li>
                </ul>
              </div>
              <a
                href="#wizard"
                onClick={() => setSelectedPackage('Essential Care')}
                className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-bold transition text-center block"
              >
                {t.selectPackageBtn}
              </a>
            </div>

            {/* Luxury VIP */}
            <div className="bg-blue-900 text-white border border-blue-800 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-blue-950 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl">
                Recommended VIP
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.vipTitle}</h3>
                <div className="text-sm font-semibold text-amber-300 mb-6">{t.vipPrice}</div>
                <ul className="space-y-4 mb-8 text-sm text-blue-100">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{t.vip1}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{t.vip2}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{t.vip3}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{t.vip4}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>{t.vip5}</span>
                  </li>
                </ul>
              </div>
              <a
                href="#wizard"
                onClick={() => setSelectedPackage('Luxury VIP')}
                className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-blue-950 text-xs font-extrabold transition text-center block shadow-lg"
              >
                {t.selectPackageBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Corporate Footer */}
      <footer id="contact" className="bg-[#06101E] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Maham Health</span>
                  <p className="text-xs text-amber-400">Soorin Maham Trade & Industry Development Corporation</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {t.footerDesc}
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-white">{t.regionsLabel}</p>
                <p>{t.regionsText}</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li><a href="#treatments" className="hover:text-white transition">{t.navTreatments}</a></li>
                <li><a href="#why-iran" className="hover:text-white transition">{t.navWhyIran}</a></li>
                <li><a href="#wizard" className="hover:text-white transition">{t.navProcess}</a></li>
                <li><a href="#packages" className="hover:text-white transition">{t.navPackages}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Contact & Inquiries</h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href="https://wa.me/989055240772" target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium">
                    +98 905 524 0772 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href="mailto:health@maham-group.com" className="hover:text-white font-medium">
                    health@maham-group.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Tehran, Iran & Maham Group Regional Offices</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
            {t.rightsText}
          </div>
        </div>
      </footer>

      {/* Procedure Detail Modal */}
      {selectedModalSpecialty && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedModalSpecialty(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              {selectedModalSpecialty.category[lang] || selectedModalSpecialty.category.en}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {selectedModalSpecialty.name[lang] || selectedModalSpecialty.name.en}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedModalSpecialty.description[lang] || selectedModalSpecialty.description.en}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <div>
                <div className="text-[10px] text-slate-500 font-medium mb-1">{t.durationLabel}</div>
                <div className="text-xs font-bold text-slate-800">
                  {selectedModalSpecialty.duration[lang] || selectedModalSpecialty.duration.en}
                </div>
              </div>
              <div className="border-x border-slate-200 px-2">
                <div className="text-[10px] text-slate-500 font-medium mb-1">{t.hospitalStayLabel}</div>
                <div className="text-xs font-bold text-slate-800">
                  {selectedModalSpecialty.hospitalStay[lang] || selectedModalSpecialty.hospitalStay.en}
                </div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium mb-1">{t.recoveryLabel}</div>
                <div className="text-xs font-bold text-slate-800">
                  {selectedModalSpecialty.recovery[lang] || selectedModalSpecialty.recovery.en}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-blue-50/50 p-4 rounded-2xl border border-blue-200 mb-6">
              <div>
                <span className="text-xs text-blue-800 font-medium block">Estimated Cost in Iran</span>
                <span className="text-2xl font-extrabold text-blue-600">{selectedModalSpecialty.iranCost}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 font-medium block">US/EU Benchmark</span>
                <span className="text-sm font-semibold text-slate-700 line-through">{selectedModalSpecialty.benchmarkCost}</span>
              </div>
            </div>

            <a
              href="#wizard"
              onClick={() => {
                setSelectedSpecialty(selectedModalSpecialty.id);
                setSelectedModalSpecialty(null);
              }}
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-lg hover:bg-blue-700 transition text-center block"
            >
              {t.ctaConsultation}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
