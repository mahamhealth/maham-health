'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Award, 
  Globe2, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  UploadCloud, 
  X, 
  Check, 
  PhoneCall, 
  Building2, 
  HeartHandshake 
} from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

interface Specialty {
  id: string;
  nameKey: string;
  deptKey: string;
  stayDays: string;
  iranPrice: number;
  indiaPrice: number;
  uaeTurkPrice: number;
  usUkPrice: number;
}

const SPECIALTIES: Specialty[] = [
  { id: 'rhinoplasty', nameKey: 'rhinoplasty', deptKey: 'plasticSurgery', stayDays: '7–10', iranPrice: 1650, indiaPrice: 2800, uaeTurkPrice: 4500, usUkPrice: 8500 },
  { id: 'dental', nameKey: 'dental', deptKey: 'dentalCare', stayDays: '3–5', iranPrice: 550, indiaPrice: 800, uaeTurkPrice: 1500, usUkPrice: 2800 },
  { id: 'lasik', nameKey: 'lasik', deptKey: 'ophthalmology', stayDays: '2–3', iranPrice: 1100, indiaPrice: 1400, uaeTurkPrice: 2800, usUkPrice: 4200 },
  { id: 'hair', nameKey: 'hair', deptKey: 'hairRestoration', stayDays: '3–4', iranPrice: 1250, indiaPrice: 2000, uaeTurkPrice: 2600, usUkPrice: 6000 },
  { id: 'ivf', nameKey: 'ivf', deptKey: 'fertility', stayDays: '10–14', iranPrice: 3200, indiaPrice: 4500, uaeTurkPrice: 7500, usUkPrice: 15000 },
  { id: 'knee', nameKey: 'knee', deptKey: 'orthopedics', stayDays: '10–14', iranPrice: 4200, indiaPrice: 7500, uaeTurkPrice: 11000, usUkPrice: 22000 },
  { id: 'cardiology', nameKey: 'cardiology', deptKey: 'cardiologyDept', stayDays: '4–7', iranPrice: 3800, indiaPrice: 6500, uaeTurkPrice: 9500, usUkPrice: 20000 },
  { id: 'oncology', nameKey: 'oncology', deptKey: 'oncologyDept', stayDays: '7–14', iranPrice: 4500, indiaPrice: 8000, uaeTurkPrice: 12000, usUkPrice: 25000 },
  { id: 'bariatric', nameKey: 'bariatric', deptKey: 'weightLoss', stayDays: '5–7', iranPrice: 2850, indiaPrice: 4800, uaeTurkPrice: 6500, usUkPrice: 12000 }
];

const I18N = {
  en: {
    brandSubtitle: 'Premier Medical Concierge in Iran • Official IPD Partner Hospitals',
    heroTitle: 'World-Class Healthcare, At 70–90% Below Global Costs',
    heroDesc: 'Soorin Maham orchestrates private medical journeys to Tehran’s leading accredited hospitals, offering dedicated specialists, VIP hospitality, and personal concierge care.',
    ctaConsultation: 'Begin Free Medical Assessment',
    ctaWhatsApp: 'Chat on WhatsApp',
    badgeSavings: '70–90% Potential Savings',
    statHospitals: '40+ IPD Partner Centers',
    statDoctors: '180+ Board-Certified Specialists',
    statWait: '< 3 Days Waiting Time',
    benchmarkTitle: 'Transparent Global Price Benchmark',
    benchmarkSubtitle: 'Direct price comparison: Iran vs. India, UAE/Turkey, and US/UK hospitals.',
    thProcedure: 'Procedure / Specialty',
    thIran: 'Iran (Maham Health)',
    thIndia: 'India',
    thUaeTurk: 'UAE / Turkey',
    thUsUk: 'USA / UK',
    btnInquire: 'Inquire Now',
    packagesTitle: 'Curated Concierge Packages',
    packagesSubtitle: 'Select the optimal level of comfort, logistics, and VIP escort for your medical journey.',
    tierEssentialName: 'Essential Care',
    tierEssentialTag: 'Clinical Focus',
    tierEssentialDesc: 'Direct, streamlined hospital admission and accredited medical logistics.',
    tierPremiumName: 'Premium Comfort',
    tierPremiumTag: 'Most Popular',
    tierPremiumDesc: 'Enhanced private hospitality, 4-star suite, and full local assistance.',
    tierRoyalName: 'Royal VIP Concierge',
    tierRoyalTag: 'All-Inclusive Luxury',
    tierRoyalDesc: 'Five-star luxury residence, dedicated private chauffeur, and VIP clinical escort.',
    selectTier: 'Select Package',
    daysStay: 'days stay',
    // Form Wizard
    modalTitle: 'Medical Tourism Consultation',
    step1Title: 'Select Specialty',
    step2Title: 'Clinical Background',
    step3Title: 'Contact & Package',
    labelSpecialty: 'Medical Specialty',
    labelTimeframe: 'Desired Travel Timeframe',
    optImmediate: 'Immediately (Within 2 weeks)',
    opt1to3m: '1 to 3 Months',
    opt3to6m: '3 to 6 Months',
    optPlanning: 'Just Planning / Inquiring',
    labelAge: 'Patient Age',
    labelGender: 'Biological Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    labelNotes: 'Medical History / Current Diagnosis / Surgical Goals',
    labelUpload: 'Medical Reports / Scans (Optional)',
    labelUploadHint: 'Click to upload reports, discharge notes, or photos (PDF, JPG, PNG up to 10MB)',
    labelName: 'Full Legal Name',
    labelCountry: 'Country of Residence',
    labelWhatsApp: 'WhatsApp Number (with Country Code)',
    labelEmail: 'Email Address',
    labelPackageTier: 'Chosen Concierge Package',
    btnBack: 'Back',
    btnNext: 'Next Step',
    btnSubmit: 'Submit Consultation Request',
    submitting: 'Securing Your Booking...',
    successTitle: 'Inquiry Received Successfully',
    successDesc: 'Our medical liaison team will review your records and reach out via WhatsApp and Email within 24 hours with your preliminary treatment plan.',
    btnClose: 'Close Window',
    // Specialties & Departments
    rhinoplasty: 'Rhinoplasty (Nose Surgery)',
    dental: 'Dental Implants (Premium Titanium)',
    lasik: 'LASIK / Femto-LASIK (Both Eyes)',
    hair: 'Hair Transplant (Micro-FUE)',
    ivf: 'IVF (Full Treatment Cycle + ICSI)',
    knee: 'Total Knee Replacement',
    cardiology: 'Cardiology Stent / Angioplasty',
    oncology: 'Cancer Treatment (Initial Protocol)',
    bariatric: 'Bariatric Sleeve Surgery',
    plasticSurgery: 'Cosmetic & Plastic Surgery',
    dentalCare: 'Dental Care & Surgery',
    ophthalmology: 'Ophthalmology',
    hairRestoration: 'Aesthetic Restoration',
    fertility: 'Fertility & Reproductive Health',
    orthopedics: 'Orthopedics & Joint Surgery',
    cardiologyDept: 'Cardiology & Vascular',
    oncologyDept: 'Oncology & Chemotherapy',
    weightLoss: 'Metabolic & Weight Surgery'
  },
  fa: {
    brandSubtitle: 'کنسیرژ درمانی ممتاز در ایران • بیمارستان‌های طرف قرارداد دارای بخش IPD',
    heroTitle: 'خدمات پزشکی در تراز جهانی، با ۷۰ تا ۹۰ درصد صرفه‌جویی اقتصادی',
    heroDesc: 'سورین مهام سفرهای درمانی اختصاصی به مجهزترین بیمارستان‌های معتبر تهران را همراه با پزشکان برجسته، خدمات VIP و پشتیبانی کامل ۲۴ ساعته برگزار می‌کند.',
    ctaConsultation: 'شروع ارزیابی رایگان پزشکی',
    ctaWhatsApp: 'گفتگو در واتس‌اپ',
    badgeSavings: '۷۰ تا ۹۰ درصد صرفه‌جویی ارزی',
    statHospitals: '+۴۰ مرکز درمانی دارای IPD',
    statDoctors: '+۱۸۰ پزشک فوق‌تخصص و جراح برجسته',
    statWait: 'کمتر از ۳ روز زمان پذیرش',
    benchmarkTitle: 'جدول شفاف مقایسه هزینه‌های درمانی بین‌المللی',
    benchmarkSubtitle: 'مقایسه مستقیم برآورد هزینه‌ها: ایران در برابر هند، امارات/ترکیه و آمریکا/اروپا.',
    thProcedure: 'عمل / تخصص پزشکی',
    thIran: 'ایران (ماهام هلث)',
    thIndia: 'هند',
    thUaeTurk: 'امارات / ترکیه',
    thUsUk: 'آمریکا / بریتانیا',
    btnInquire: 'ثبت درخواست',
    packagesTitle: 'بسته‌های اختصاصی کنسیرژ درمانی',
    packagesSubtitle: 'سطح رفاه، خدمات اقامتی و همراهی بیمارستانی متناسب با نیاز خود و همراهانتان را انتخاب کنید.',
    tierEssentialName: 'مراقبت پایه (Essential Care)',
    tierEssentialTag: 'تمرکز بالینی',
    tierEssentialDesc: 'پذیرش مستقیم در بیمارستان IPD، ترنسفر فرودگاهی و مترجم تخصصی.',
    tierPremiumName: 'آسایش ویژه (Premium Comfort)',
    tierPremiumTag: 'محبوب‌ترین انتخاب',
    tierPremiumDesc: 'سوئیت ۴ ستاره، ترنسفر اختصاصی و پشتیبانی کامل رفاهی در طول درمان.',
    tierRoyalName: 'کنسیرژ مجلل رویال (Royal VIP)',
    tierRoyalTag: 'اقامت و تشریفات لوکس',
    tierRoyalDesc: 'اقامت ۵ ستاره، خودرو اختصاصی با راننده تمام‌وقت، پذیرش VIP فرودگاهی و مترجم همراه.',
    selectTier: 'انتخاب این بسته',
    daysStay: 'روز اقامت',
    modalTitle: 'درخواست مشاوره و برآورد درمان',
    step1Title: 'انتخاب تخصص پزشکی',
    step2Title: 'اطلاعات بالینی بیمار',
    step3Title: 'اطلاعات تماس و بسته اقامتی',
    labelSpecialty: 'تخصص یا درمان درخواستی',
    labelTimeframe: 'زمان مد نظر برای سفر',
    optImmediate: 'فوری (ظرف دو هفته آینده)',
    opt1to3m: '۱ تا ۳ ماه آینده',
    opt3to6m: '۳ تا ۶ ماه آینده',
    optPlanning: 'در حال بررسی و برنامه‌ریزی',
    labelAge: 'سن بیمار',
    labelGender: 'جنسیت',
    genderMale: 'مرد',
    genderFemale: 'زن',
    labelNotes: 'سابقه بیماری / توضیحات تشخیصی و انتظارات درمانی',
    labelUpload: 'بارگذاری مدارک پزشکی یا عکس (اختیاری)',
    labelUploadHint: 'برای بارگذاری آزمایش‌ها، پرونده قبلی یا عکس کلیک کنید (PDF، JPG تا ۱۰ مگابایت)',
    labelName: 'نام و نام خانوادگی کامل',
    labelCountry: 'کشور محل سکونت',
    labelWhatsApp: 'شماره واتس‌اپ (همراه با کد کشور)',
    labelEmail: 'آدرس ایمیل',
    labelPackageTier: 'بسته کنسیرژ انتخابی',
    btnBack: 'مرحله قبل',
    btnNext: 'مرحله بعد',
    btnSubmit: 'ارسال نهایی درخواست مشاوره',
    submitting: 'در حال ثبت اطلاعات...',
    successTitle: 'درخواست شما با موفقیت ثبت شد',
    successDesc: 'تیم پزشکی ما پس از بررسی اولیه مدارک، ظرف حداکثر ۲۴ ساعت آینده از طریق واتس‌اپ و ایمیل جهت ارائه طرح درمان و برآورد با شما تماس خواهد گرفت.',
    btnClose: 'بستن پنجره',
    rhinoplasty: 'جراحی زیبایی بینی (رینوپلاستی)',
    dental: 'ایمپلنت دندان (تایتانیوم درجه یک)',
    lasik: 'عمل لیزیک / فمتولیزیک (هر دو چشم)',
    hair: 'کاشت مو (میکرو FUE)',
    ivf: 'درمان ناباروری و IVF کامل (+ICSI)',
    knee: 'تعویض کامل مفصل زانو',
    cardiology: 'آنژیوپلاستی و فنرگذاری قلب',
    oncology: 'درمان سرطان (پروتکل اولیه آنکولوژی)',
    bariatric: 'جراحی اسلیو معده',
    plasticSurgery: 'جراحی پلاستیک و زیبایی',
    dentalCare: 'خدمات تخصصی دندانپزشکی',
    ophthalmology: 'چشم‌پزشکی و جراحی لیزیک',
    hairRestoration: 'ترمیم و پیوند مو',
    fertility: 'باروری و درمان نازایی',
    orthopedics: 'ارتوپدی و جراحی مفاصل',
    cardiologyDept: 'قلب و عروق',
    oncologyDept: 'آنکولوژی و شیمی‌درمانی',
    weightLoss: 'جراحی لاغری و متابولیک'
  },
  ar: {
    brandSubtitle: 'الرعاية الطبية الفاخرة في إيران • مستشفيات معتمدة دولياً (IPD)',
    heroTitle: 'رعاية صحية عالمية المستوى، بتكلفة أقل بنسبة 70-90٪ عالمياً',
    heroDesc: 'تنظم سورين مهام رحلات علاجية خاصة لأفضل مستشفيات طهران المعتمدة مع أمهر الجراحين وخدمات الضيافة الفندقية والمرافقة الشخصية.',
    ctaConsultation: 'ابدأ التقييم الطبي المجاني',
    ctaWhatsApp: 'تواصل عبر واتساب',
    badgeSavings: 'وفر من 70٪ إلى 90٪ من التكاليف',
    statHospitals: '+40 مركزاً معتمداً للسياحة العلاجية',
    statDoctors: '+180 استشارياً وجراحاً بارزاً',
    statWait: 'أقل من 3 أيام لبدء العلاج',
    benchmarkTitle: 'جدول مقارنة الأسعار الدولية بشفافية',
    benchmarkSubtitle: 'مقارنة مباشرة لأسعار الإجراءات: إيران مقابل الهند، الإمارات/تركيا، وأمريكا/أوروبا.',
    thProcedure: 'الإجراء الطبي / التخصص',
    thIran: 'إيران (ماهام هلث)',
    thIndia: 'الهند',
    thUaeTurk: 'الإمارات / تركيا',
    thUsUk: 'أمريكا / بريطانيا',
    btnInquire: 'طلب استشارة',
    packagesTitle: 'باقات الضيافة والكونسيرج الطبي',
    packagesSubtitle: 'اختر باقة الدعم والإقامة المناسبة لك ولمرافقيك خلال فترة العلاج.',
    tierEssentialName: 'الرعاية الأساسية (Essential)',
    tierEssentialTag: 'التركيز السريري',
    tierEssentialDesc: 'تنسيق كامل للمستشفى، الاستقبال في المطار، مترجم شخصي وتأشيرة العلاج.',
    tierPremiumName: 'الراحة الممتازة (Premium)',
    tierPremiumTag: 'الأكثر طلباً',
    tierPremiumDesc: 'إقامة في جناح فندقي 4 نجوم، تنقلات خاصة ودعم شخصي متكامل.',
    tierRoyalName: 'الكونسيرج الملكي الفاخر (Royal VIP)',
    tierRoyalTag: 'فخامة شاملة',
    tierRoyalDesc: 'أجنحة فندقية 5 نجوم، سائق خاص على مدار الساعة، صالة كبار الشخصيات بالمطار.',
    selectTier: 'اختيار هذه الباقة',
    daysStay: 'أيام إقامة',
    modalTitle: 'طلب استشارة طبية خاصة',
    step1Title: 'اختيار التخصص',
    step2Title: 'الملف الطبي للمريض',
    step3Title: 'بيانات التواصل والباقة',
    labelSpecialty: 'التخصص الطبي المطلوب',
    labelTimeframe: 'الموعد المفضل للسفر',
    optImmediate: 'فوراً (خلال أسبوعين)',
    opt1to3m: 'من شهر إلى 3 أشهر',
    opt3to6m: 'من 3 إلى 6 أشهر',
    optPlanning: 'في مرحلة التخطيط والاستفسار',
    labelAge: 'عمر المريض',
    labelGender: 'الجنس',
    genderMale: 'ذكر',
    genderFemale: 'أنثى',
    labelNotes: 'التاريخ الطبي / التشخيص الحالي والملاحظات',
    labelUpload: 'إرفاق التقارير الطبية أو الصور (اختياري)',
    labelUploadHint: 'انقر لتحميل التقارير أو الفحوصات (PDF أو صور حتى 10 ميغابايت)',
    labelName: 'الاسم الكامل',
    labelCountry: 'بلد الإقامة',
    labelWhatsApp: 'رقم الواتساب (مع رمز الدولة)',
    labelEmail: 'البريد الإلكتروني',
    labelPackageTier: 'الباقة المختارة',
    btnBack: 'السابق',
    btnNext: 'التالي',
    btnSubmit: 'إرسال طلب الاستشارة',
    submitting: 'جاري تسجيل الطلب...',
    successTitle: 'تم استلام طلبكم بنجاح',
    successDesc: 'سيقوم فريقنا الطبي بدراسة بياناتكم والتواصل معكم عبر واتساب والبريد الإلكتروني خلال 24 ساعة لتقديم خطة العلاج والتقدير المالي.',
    btnClose: 'إغلاق',
    rhinoplasty: 'تجميل الأنف (رينوبلاستي)',
    dental: 'زراعة الأسنان (تيتانيوم فاخر)',
    lasik: 'ليزك وفيمتو ليزك (للعينين)',
    hair: 'زراعة الشعر (تقنية Micro-FUE)',
    ivf: 'أطفال الأنابيب والحقن المجهري (IVF)',
    knee: 'تبديل مفصل الركبة بالكامل',
    cardiology: 'قسطرة وتركيب دعامات القلب',
    oncology: 'علاج الأورام والسرطان (البروتوكول الأولي)',
    bariatric: 'جراحة تكميم المعدة (السمنة)',
    plasticSurgery: 'جراحة التجميل والترميم',
    dentalCare: 'طب وجراحة الأسنان',
    ophthalmology: 'طب وجراحة العيون',
    hairRestoration: 'علاج وزراعة الشعر',
    fertility: 'الخصوبة والمساعدة على الإنجاب',
    orthopedics: 'جراحة العظام والمفاصل',
    cardiologyDept: 'أمراض القلب والأوعية الدموية',
    oncologyDept: 'علاج الأورام والسرطان',
    weightLoss: 'جراحات السمنة وإنقاص الوزن'
  },
  sw: {
    brandSubtitle: 'Huduma Maalum za Matibabu Iran • Hospitali Washirika za IPD',
    heroTitle: 'Matibabu ya Hadhi ya Kimataifa, Gharama Nafuu kwa 70–90%',
    heroDesc: 'Soorin Maham inaratibu safari binafsi za matibabu katika hospitali bora zaidi za Tehran ikiwa na madaktari bingwa na huduma za kiwango cha juu.',
    ctaConsultation: 'Anza Tathmini ya Bure ya Matibabu',
    ctaWhatsApp: 'Wasiliana kwa WhatsApp',
    badgeSavings: 'Punguzo la 70–90% ya Gharama',
    statHospitals: 'Vituo 40+ vya IPD',
    statDoctors: 'Madaktari Bingwa 180+',
    statWait: 'Muda wa Kusubiri < Siku 3',
    benchmarkTitle: 'Ulinganisho wa Bei za Matibabu Duniani',
    benchmarkSubtitle: 'Tazama tofauti ya gharama: Iran dhidi ya India, UAE/Uturuki, na Marekani/Uingereza.',
    thProcedure: 'Aina ya Matibabu',
    thIran: 'Iran (Maham Health)',
    thIndia: 'India',
    thUaeTurk: 'UAE / Uturuki',
    thUsUk: 'Marekani / UK',
    btnInquire: 'Uliza Sasa',
    packagesTitle: 'Vifurushi vya Huduma na Malazi',
    packagesSubtitle: 'Chagua kiwango cha malazi na huduma unachopendelea wewe na msindikizaji wako.',
    tierEssentialName: 'Essential Care',
    tierEssentialTag: 'Msisitizo wa Kitiba',
    tierEssentialDesc: 'Ratiba ya hospitali, makaribisho uwanja wa ndege, na mkalimani wa matibabu.',
    tierPremiumName: 'Premium Comfort',
    tierPremiumTag: 'Maarufu Zaidi',
    tierPremiumDesc: 'Malazi ya hoteli ya nyota 4, gari binafsi, na usaidizi kamili wa kila siku.',
    tierRoyalName: 'Royal VIP Concierge',
    tierRoyalTag: 'Fahari Isiyo na Kifani',
    tierRoyalDesc: 'Hoteli ya nyota 5, dereva binafsi masaa yote, na mapokezi ya hadhi ya juu VIP.',
    selectTier: 'Chagua Kifurushi',
    daysStay: 'siku za kukaa',
    modalTitle: 'Ombi la Ushauri wa Matibabu',
    step1Title: 'Chagua Huduma',
    step2Title: 'Taarifa za Afya',
    step3Title: 'Mawasiliano na Malazi',
    labelSpecialty: 'Kitengo cha Matibabu',
    labelTimeframe: 'Muda Unaokusudia Kusafiri',
    optImmediate: 'Mara Moja (Ndani ya wiki 2)',
    opt1to3m: 'Miezi 1 hadi 3',
    opt3to6m: 'Miezi 3 hadi 6',
    optPlanning: 'Ninapanga tu kwa sasa',
    labelAge: 'Umri wa Mgonjwa',
    labelGender: 'Jinsia',
    genderMale: 'Mwanaume',
    genderFemale: 'Mwanamke',
    labelNotes: 'Historia ya Ugonjwa au Maelezo ya Ziada',
    labelUpload: 'Ripoti za Matibabu (Hiari)',
    labelUploadHint: 'Pakia ripoti za vipimo au picha (PDF/JPG hadi 10MB)',
    labelName: 'Jina Kamili',
    labelCountry: 'Nchi Unayoishi',
    labelWhatsApp: 'Nambari ya WhatsApp (pamoja na kodi ya nchi)',
    labelEmail: 'Barua Pepe',
    labelPackageTier: 'Kifurushi Ulichochagua',
    btnBack: 'Rudi',
    btnNext: 'Mbele',
    btnSubmit: 'Tuma Ombi la Matibabu',
    submitting: 'Inatuma maelezo...',
    successTitle: 'Tumepokea Ombi Lako Kikamilifu',
    successDesc: 'Madaktari wetu watapitia taarifa zako na tutawasiliana nawe ndani ya saa 24 kupitia WhatsApp na Barua Pepe.',
    btnClose: 'Funga',
    rhinoplasty: 'Upasuaji wa Pua (Rhinoplasty)',
    dental: 'Kupandikiza Meno (Titanium)',
    lasik: 'Upasuaji wa Macho (LASIK)',
    hair: 'Kupandikiza Nywele (FUE)',
    ivf: 'Uzazi wa Maabara (IVF + ICSI)',
    knee: 'Kubadilisha Goti (Knee Replacement)',
    cardiology: 'Upasuaji wa Moyo na Mirija (Stent)',
    oncology: 'Matibabu ya Saratani (Oncology)',
    bariatric: 'Upasuaji wa Kupunguza Uzito (Sleeve)',
    plasticSurgery: 'Upasuaji wa Urembo',
    dentalCare: 'Tiba ya Meno',
    ophthalmology: 'Magonjwa ya Macho',
    hairRestoration: 'Urejeshaji wa Nywele',
    fertility: 'Uzazi na Ujauzito',
    orthopedics: 'Mifupa na Viungo',
    cardiologyDept: 'Magonjwa ya Moyo',
    oncologyDept: 'Matibabu ya Saratani',
    weightLoss: 'Kupunguza Unene'
  },
  hi: {
    brandSubtitle: 'ईरान में प्रमुख मेडिकल कंसीयज • आधिकारिक IPD पार्टनर अस्पताल',
    heroTitle: 'विश्वस्तरीय स्वास्थ्य सेवा, वैश्विक दरों से 70-90% कम खर्च में',
    heroDesc: 'सूरीन महाम तेहरान के शीर्ष मान्यता प्राप्त अस्पतालों में विशेषज्ञ डॉक्टरों, वीआईपी आतिथ्य और व्यक्तिगत सहायता के साथ यात्रा की सुविधा प्रदान करता है।',
    ctaConsultation: 'निःशुल्क मूल्यांकन शुरू करें',
    ctaWhatsApp: 'व्हाट्सएप पर बात करें',
    badgeSavings: '70–90% तक की भारी बचत',
    statHospitals: '40+ अधिकृत IPD केंद्र',
    statDoctors: '180+ विशेषज्ञ चिकित्सक एवं सर्जन',
    statWait: '< 3 दिन में इलाज की शुरुआत',
    benchmarkTitle: 'पारदर्शी वैश्विक मूल्य तुलना',
    benchmarkSubtitle: 'ईरान बनाम भारत, यूएई/तुर्की और अमेरिका/यूके के अस्पताल खर्चों की सीधी तुलना।',
    thProcedure: 'प्रक्रिया / चिकित्सा विशेषता',
    thIran: 'ईरान (महाम हेल्थ)',
    thIndia: 'भारत',
    thUaeTurk: 'यूएई / तुर्की',
    thUsUk: 'यूएसए / यूके',
    btnInquire: 'पूछताछ करें',
    packagesTitle: 'कंसीयज और आतिथ्य पैकेज',
    packagesSubtitle: 'अपनी चिकित्सा यात्रा के लिए उपयुक्त स्तर की सुविधा, होटल और लॉजिस्टिक्स चुनें।',
    tierEssentialName: 'एसेंशियल केयर (Essential Care)',
    tierEssentialTag: 'चिकित्सा प्राथमिकता',
    tierEssentialDesc: 'अस्पताल प्रवेश, एयरपोर्ट पिकअप, मेडिकल अनुवादक और टी-वीज़ा सहायता।',
    tierPremiumName: 'प्रीमियम कम्फर्ट (Premium Comfort)',
    tierPremiumTag: 'सर्वाधिक लोकप्रिय',
    tierPremiumDesc: '4-सितारा होटल सुइट, निजी परिवहन और निरंतर समर्पित व्यक्तिगत सहायता।',
    tierRoyalName: 'रॉयल वीआईपी कंसीयज (Royal VIP)',
    tierRoyalTag: 'सर्वश्रेष्ठ लग्जरी अनुभव',
    tierRoyalDesc: '5-सितारा लक्जरी सुइट, निजी चौफ़र, वीआईपी एयरपोर्ट लाउंज और प्राथमिकता उपचार।',
    selectTier: 'यह पैकेज चुनें',
    daysStay: 'दिन प्रवास',
    modalTitle: 'चिकित्सा परामर्श अनुरोध',
    step1Title: 'विशेषता चुनें',
    step2Title: 'रोगी का विवरण',
    step3Title: 'संपर्क एवं पैकेज',
    labelSpecialty: 'चिकित्सा विशेषता',
    labelTimeframe: 'यात्रा का संभावित समय',
    optImmediate: 'तत्काल (2 सप्ताह के भीतर)',
    opt1to3m: '1 से 3 महीने में',
    opt3to6m: '3 से 6 महीने में',
    optPlanning: 'केवल जानकारी / योजना बना रहे हैं',
    labelAge: 'रोगी की उम्र',
    labelGender: 'लिंग',
    genderMale: 'पुरुष',
    genderFemale: 'महिला',
    labelNotes: 'चिकित्सा इतिहास / वर्तमान लक्षण या प्रश्न',
    labelUpload: 'मेडिकल रिपोर्ट या जांच रिपोर्ट (वैकल्पिक)',
    labelUploadHint: 'रिपोर्ट्स या फ़ोटो अपलोड करने के लिए क्लिक करें (PDF/JPG अधिकतम 10MB)',
    labelName: 'पूरा नाम',
    labelCountry: 'निवास का देश',
    labelWhatsApp: 'व्हाट्सएप नंबर (कंट्री कोड सहित)',
    labelEmail: 'ईमेल आईडी',
    labelPackageTier: 'चुना हुआ पैकेज',
    btnBack: 'पिछला',
    btnNext: 'आगे बढ़ें',
    btnSubmit: 'परामर्श अनुरोध भेजें',
    submitting: 'अनुरोध दर्ज हो रहा है...',
    successTitle: 'अनुरोध सफलतापूर्वक प्राप्त हुआ',
    successDesc: 'हमारी मेडिकल टीम आपकी रिपोर्ट की समीक्षा करेगी और 24 घंटे के भीतर व्हाट्सएप और ईमेल पर आपसे संपर्क करेगी।',
    btnClose: 'बंद करें',
    rhinoplasty: 'राइनोप्लास्टी (नाक की सर्जरी)',
    dental: 'डेंटल इम्प्लांट्स (प्रीमियम टाइटेनियम)',
    lasik: 'लैसिक / फेम्टो-लैसिक (दोनों आंखें)',
    hair: 'हेयर ट्रांसप्लांट (माइक्रो-FUE)',
    ivf: 'आईवीएफ उपचार (IVF + ICSI)',
    knee: 'घुटना प्रत्यारोपण (Total Knee Replacement)',
    cardiology: 'हृदय स्टेंट / एंजियोप्लास्टी',
    oncology: 'कैंसर उपचार (प्रारंभिक प्रोटोकॉल)',
    bariatric: 'बेरिएट्रिक स्लीव सर्जरी (मोटापा निवारण)',
    plasticSurgery: 'कॉस्मेटिक एवं प्लास्टिक सर्जरी',
    dentalCare: 'दंत चिकित्सा एवं सर्जरी',
    ophthalmology: 'नेत्र रोग विज्ञान (आई केयर)',
    hairRestoration: 'बाल प्रत्यारोपण',
    fertility: 'प्रजनन एवं निसंतानता उपचार',
    orthopedics: 'हड्डी एवं जोड़ रोग सर्जरी',
    cardiologyDept: 'हृदय एवं रक्तवाहिनी रोग',
    oncologyDept: 'कैंसर एवं कीमोथेरेपी',
    weightLoss: 'वजन घटाने की सर्जरी'
  },
  ur: {
    brandSubtitle: 'ایران میں پریمیئر میڈیکل کنسیئرج • مستند IPD پارٹنر ہسپتال',
    heroTitle: 'عالمی معیار کا علاج، بین الاقوامی اخراجات سے 70 تا 90 فیصد کم',
    heroDesc: 'سورین مہام تہران کے اعلیٰ ترین ہسپتالوں میں ماہر سرجنز، وی آئی پی رہائش اور مکمل ذاتی نگہداشت کے ساتھ پرائیویٹ علاج کا انتظام کرتا ہے۔',
    ctaConsultation: 'مفت طبی معائنہ شروع کریں',
    ctaWhatsApp: 'واٹس ایپ پر رابطہ کریں',
    badgeSavings: '70 سے 90 فیصد تک بچت',
    statHospitals: '40+ بین الاقوامی IPD مراکز',
    statDoctors: '180+ مستند ماہر ڈاکٹر اور سرجنز',
    statWait: '3 دن سے کم انتظار کا وقت',
    benchmarkTitle: 'طبی اخراجات کا شفاف تقابل',
    benchmarkSubtitle: 'ایران، بھارت، متحدہ عرب امارات/ترکی اور امریکہ/برطانیہ کے ہسپتالوں کے اخراجات کا تقابل۔',
    thProcedure: 'طبی طریقہ علاج / شعبہ',
    thIran: 'ایران (ماہام ہیلتھ)',
    thIndia: 'بھارت',
    thUaeTurk: 'یو اے ای / ترکی',
    thUsUk: 'امریکہ / برطانیہ',
    btnInquire: 'معلومات حاصل کریں',
    packagesTitle: 'کنسیئرج اور رہائشی پیکیجز',
    packagesSubtitle: 'اپنے اور اپنے ساتھی کے لیے موزوں رہائشی و سفری سہولیات کا انتخاب کریں۔',
    tierEssentialName: 'اسینشل کیئر (Essential Care)',
    tierEssentialTag: 'بنیادی طبی نگہداشت',
    tierEssentialDesc: 'ہسپتال میں داخلہ، ائیرپورٹ پک اپ، میڈیکل ٹرانسلیٹر اور ویزا معاونت۔',
    tierPremiumName: 'پریمیم کمفرٹ (Premium Comfort)',
    tierPremiumTag: 'سب سے مقبول',
    tierPremiumDesc: '4 ستارہ ہوٹل سوئیٹ، ذاتی گاڑی اور ہمہ وقت ذاتی معاونت۔',
    tierRoyalName: 'رائل وی آئی پی کنسیئرج (Royal VIP)',
    tierRoyalTag: 'پرتعیش وی آئی پی',
    tierRoyalDesc: '5 ستارہ لگژری ہوٹل، پرائیویٹ شوفر کار، اور ائیرپورٹ وی آئی پی لاؤنج پروٹوکول۔',
    selectTier: 'پیکیج منتخب کریں',
    daysStay: 'دن قیام',
    modalTitle: 'طبی مشاورت کی درخواست',
    step1Title: 'شعبہ منتخب کریں',
    step2Title: 'مریض کی تفصیلات',
    step3Title: 'رابطہ اور پیکیج',
    labelSpecialty: 'مطلوبہ علاج / شعبہ',
    labelTimeframe: 'سفر کا متوقع وقت',
    optImmediate: 'فوری (دو ہفتوں کے اندر)',
    opt1to3m: '1 سے 3 ماہ',
    opt3to6m: '3 سے 6 ماہ',
    optPlanning: 'ابھی صرف معلومات حاصل کر رہے ہیں',
    labelAge: 'مریض کی عمر',
    labelGender: 'جنس',
    genderMale: 'مرد',
    genderFemale: 'خاتون',
    labelNotes: 'طبی تاریخ / بیماری کی تفصیلات',
    labelUpload: 'میڈیکل رپورٹس یا تصاویر (اختیاری)',
    labelUploadHint: 'رپورٹس یا تصاویر اپ لوڈ کرنے کے لیے کلک کریں (PDF یا JPG زیادہ سے زیادہ 10MB)',
    labelName: 'مکمل نام',
    labelCountry: 'رہائشی ملک',
    labelWhatsApp: 'واٹس ایپ نمبر (ملکی کوڈ کے ساتھ)',
    labelEmail: 'ای میل ایڈریس',
    labelPackageTier: 'منتخب کردہ پیکیج',
    btnBack: 'پیچھے',
    btnNext: 'اگلا مرحلہ',
    btnSubmit: 'درخواست ارسال کریں',
    submitting: 'ارسال کیا جا رہا ہے...',
    successTitle: 'درخواست کامیابی سے موصول ہوئی',
    successDesc: 'ہماری میڈیکل ٹیم آپ کے کیس کا جائزہ لے کر اگلے 24 گھنٹوں میں واٹس ایپ اور ای میل کے ذریعے رابطہ کرے گی۔',
    btnClose: 'بند کریں',
    rhinoplasty: 'ناک کی سرجری (رائنوپلاسٹی)',
    dental: 'ڈینٹل امپلانٹس (پریمیم ٹائٹینیم)',
    lasik: 'لیسک / فیمٹو لیسک (دونوں آنکھیں)',
    hair: 'بالوں کی پیوند کاری (Micro-FUE)',
    ivf: 'بانجھ پن کا علاج (IVF + ICSI)',
    knee: 'گھٹنے کا مکمل متبادل (Knee Replacement)',
    cardiology: 'دل کا سٹینٹ / اینجیو پلاسٹی',
    oncology: 'کینسر کا علاج (ابتدائی پروٹوکول)',
    bariatric: 'موٹاپے کی سرجری (سلیو گیسٹریکٹومی)',
    plasticSurgery: 'کاسمیٹک و پلاسٹک سرجری',
    dentalCare: 'دانتوں کا علاج اور سرجری',
    ophthalmology: 'امراض چشم',
    hairRestoration: 'بالوں کی بحالی',
    fertility: 'تولیدی صحت اور آئی وی ایف',
    orthopedics: 'ہڈیوں اور جوڑوں کی سرجری',
    cardiologyDept: 'امراض قلب',
    oncologyDept: 'کینسر اور کیموتھراپی',
    weightLoss: 'وزن کم کرنے کی سرجری'
  }
};

const FORM_ENDPOINT = 'https://formspree.io/f/mqakdgrw';

export default function MahamHealthPage() {
  const [lang, setLang] = useState<Language>('en');
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const [formData, setFormData] = useState({
    specialty: 'rhinoplasty',
    timeframe: 'Immediately (Within 2 weeks)',
    age: '',
    gender: 'Female',
    notes: '',
    fileName: '',
    name: '',
    country: '',
    whatsapp: '',
    email: '',
    packageTier: 'Premium Comfort'
  });

  const t = I18N[lang];
  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const handleOpenWizard = (specialtyId?: string, tierName?: string) => {
    if (specialtyId) setFormData(prev => ({ ...prev, specialty: specialtyId }));
    if (tierName) setFormData(prev => ({ ...prev, packageTier: tierName }));
    setStep(1);
    setStatus('idle');
    setModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          locale: lang,
          submittedAt: new Date().toISOString(),
          portal: 'Maham Health Global'
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        alert('There was a temporary issue submitting your assessment. You may also contact us via WhatsApp.');
        setStatus('idle');
      }
    } catch (err) {
      alert('Network issue. Please contact our team directly via WhatsApp.');
      setStatus('idle');
    }
  };

  return (
    <div className={`min-h-screen bg-[#08111d] text-slate-100 antialiased selection:bg-[#c5a059] selection:text-black`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Notification / Trust Bar */}
      <header className="border-b border-slate-800/80 bg-[#060c14]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#99793d] to-[#d4af37] flex items-center justify-center shadow-lg shadow-amber-900/20">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">MAHAM HEALTH</span>
              <span className="text-[11px] text-[#c5a059] tracking-widest uppercase font-semibold">Soorin Maham Medical Group</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Selector */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse bg-slate-900/90 border border-slate-700/60 rounded-lg px-3 py-1.5 shadow-sm">
              <Globe2 className="w-4 h-4 text-[#c5a059]" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                aria-label="Select Language"
                className="bg-transparent text-sm text-slate-200 outline-none cursor-pointer font-medium"
              >
                <option value="en" className="bg-slate-900 text-slate-200">English (EN)</option>
                <option value="fa" className="bg-slate-900 text-slate-200">فارسی (FA)</option>
                <option value="ar" className="bg-slate-900 text-slate-200">العربية (AR)</option>
                <option value="sw" className="bg-slate-900 text-slate-200">Kiswahili (SW)</option>
                <option value="hi" className="bg-slate-900 text-slate-200">हिन्दी (HI)</option>
                <option value="ur" className="bg-slate-900 text-slate-200">اردو (UR)</option>
              </select>
            </div>

            <button
              onClick={() => handleOpenWizard()}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#b38f48] to-[#d4af37] text-slate-950 text-sm font-semibold hover:brightness-110 shadow-md shadow-amber-950/30 transition-all"
            >
              {t.ctaConsultation}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,160,89,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#c5a059]/40 text-[#d4af37] text-xs font-medium mb-6 backdrop-blur">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>{t.brandSubtitle}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            {t.heroTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            {t.heroDesc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#b38f48] via-[#d4af37] to-[#e6ca65] text-slate-950 text-base font-bold shadow-xl shadow-amber-900/30 hover:brightness-110 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>{t.ctaConsultation}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>

            <a
              href="https://wa.me/989120000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 text-slate-200 text-base font-semibold transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <PhoneCall className="w-4 h-4 text-[#25D366]" />
              <span>{t.ctaWhatsApp}</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left rtl:text-right">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur">
              <Building2 className="w-5 h-5 text-[#c5a059] mb-2" />
              <div className="text-xl font-bold text-white">{t.statHospitals}</div>
              <div className="text-xs text-slate-400 mt-0.5">Tehran & Shiraz Centers</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur">
              <Award className="w-5 h-5 text-[#c5a059] mb-2" />
              <div className="text-xl font-bold text-white">{t.statDoctors}</div>
              <div className="text-xs text-slate-400 mt-0.5">Professors & Surgeons</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur">
              <Sparkles className="w-5 h-5 text-[#c5a059] mb-2" />
              <div className="text-xl font-bold text-[#d4af37]">{t.badgeSavings}</div>
              <div className="text-xs text-slate-400 mt-0.5">All-Inclusive Savings</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur">
              <Clock className="w-5 h-5 text-[#c5a059] mb-2" />
              <div className="text-xl font-bold text-white">{t.statWait}</div>
              <div className="text-xs text-slate-400 mt-0.5">Rapid Hospital Intake</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Global Price Benchmark Table */}
      <section className="py-16 bg-[#060c14]/70 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.benchmarkTitle}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              {t.benchmarkSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl">
            <table className="w-full text-left rtl:text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-xs sm:text-sm font-semibold text-slate-300">
                  <th className="py-4 px-4 sm:px-6">{t.thProcedure}</th>
                  <th className="py-4 px-4 sm:px-6 text-[#d4af37]">{t.thIran}</th>
                  <th className="py-4 px-4 sm:px-6 text-slate-400">{t.thIndia}</th>
                  <th className="py-4 px-4 sm:px-6 text-slate-400">{t.thUaeTurk}</th>
                  <th className="py-4 px-4 sm:px-6 text-slate-400">{t.thUsUk}</th>
                  <th className="py-4 px-4 sm:px-6 text-right rtl:text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-sm">
                {SPECIALTIES.map((spec) => {
                  const nameTranslated = (t as Record<string, string>)[spec.nameKey] || spec.nameKey;
                  const deptTranslated = (t as Record<string, string>)[spec.deptKey] || spec.deptKey;

                  return (
                    <tr key={spec.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-semibold text-white">{nameTranslated}</div>
                        <div className="text-xs text-slate-400">{deptTranslated} • {spec.stayDays} {t.daysStay}</div>
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        <span className="text-base sm:text-lg font-bold text-[#d4af37]">
                          ${spec.iranPrice.toLocaleString()}
                        </span>
                        <span className="block text-[11px] text-emerald-400 font-medium">Save ~{Math.round(((spec.usUkPrice - spec.iranPrice) / spec.usUkPrice) * 100)}%</span>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-300">${spec.indiaPrice.toLocaleString()}+</td>
                      <td className="py-4 px-4 sm:px-6 text-slate-300">${spec.uaeTurkPrice.toLocaleString()}+</td>
                      <td className="py-4 px-4 sm:px-6 text-slate-300">${spec.usUkPrice.toLocaleString()}+</td>
                      <td className="py-4 px-4 sm:px-6 text-right rtl:text-left">
                        <button
                          onClick={() => handleOpenWizard(spec.id)}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-[#c5a059] hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
                        >
                          {t.btnInquire}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3-Tier Concierge Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.packagesTitle}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              {t.packagesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Care */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
                  {t.tierEssentialTag}
                </span>
                <h3 className="text-2xl font-bold text-white">{t.tierEssentialName}</h3>
                <p className="mt-3 text-sm text-slate-400">{t.tierEssentialDesc}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>IPD Hospital Fast-Track Admission</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>Airport Transfer & Local Medical SIM</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>Medical Translator for Clinical Consultations</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>Iran Medical T-Visa Official Letter</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenWizard(undefined, 'Essential Care')}
                className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all"
              >
                {t.selectTier}
              </button>
            </div>

            {/* Premium Comfort (Most Popular) */}
            <div className="rounded-2xl bg-slate-900/90 border-2 border-[#c5a059] p-8 flex flex-col justify-between shadow-2xl shadow-amber-950/20 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#b38f48] to-[#d4af37] text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                {t.tierPremiumTag}
              </div>
              <div>
                <div className="h-2"></div>
                <h3 className="text-2xl font-bold text-white">{t.tierPremiumName}</h3>
                <p className="mt-3 text-sm text-slate-400">{t.tierPremiumDesc}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#d4af37]" />
                    <span className="font-semibold text-white">4-Star Hotel Suite for Patient & Companion</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#d4af37]" />
                    <span>Dedicated Medical Concierge Manager</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#d4af37]" />
                    <span>Private Car & Driver for All Clinical Visits</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#d4af37]" />
                    <span>Prescription Delivery & Follow-up Nursing Support</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenWizard(undefined, 'Premium Comfort')}
                className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-[#b38f48] to-[#d4af37] text-slate-950 text-sm font-bold shadow-lg hover:brightness-110 transition-all"
              >
                {t.selectTier}
              </button>
            </div>

            {/* Royal VIP Concierge */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-[#d4af37] text-xs font-medium mb-4">
                  {t.tierRoyalTag}
                </span>
                <h3 className="text-2xl font-bold text-white">{t.tierRoyalName}</h3>
                <p className="mt-3 text-sm text-slate-400">{t.tierRoyalDesc}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span className="font-semibold text-white">5-Star Luxury Residence or Suite</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>24/7 Dedicated Chauffeur & Private Security (Optional)</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>CIP Airport Terminal Lounge & Fast-Track Customs</span>
                  </li>
                  <li className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>Head-of-Department Professor Priority Consultation</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenWizard(undefined, 'Royal VIP Concierge')}
                className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all"
              >
                {t.selectTier}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#060c14] py-12 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corp. (Maham Health). All rights reserved.</p>
        <p className="mt-2 text-slate-600">Tehran • Dubai • Dar es Salaam • New Delhi</p>
      </footer>

      {/* 3-Step Consultation Wizard Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#091322] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">{t.successTitle}</h3>
                <p className="mt-3 text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  {t.successDesc}
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-[#c5a059] text-slate-950 font-semibold hover:brightness-110"
                >
                  {t.btnClose}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#c5a059] tracking-wider uppercase">
                    Step {step} of 3 • {step === 1 ? t.step1Title : step === 2 ? t.step2Title : t.step3Title}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{t.modalTitle}</h3>
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#b38f48] to-[#d4af37] h-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* STEP 1: Specialty & Timing */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelSpecialty}</label>
                      <select
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                      >
                        {SPECIALTIES.map(s => (
                          <option key={s.id} value={s.id}>
                            {(t as Record<string, string>)[s.nameKey] || s.nameKey} (${s.iranPrice})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelTimeframe}</label>
                      <select
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                      >
                        <option value="Immediately">{t.optImmediate}</option>
                        <option value="1-3 Months">{t.opt1to3m}</option>
                        <option value="3-6 Months">{t.opt3to6m}</option>
                        <option value="Exploring">{t.optPlanning}</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#b38f48] to-[#d4af37] text-slate-950 font-bold text-sm hover:brightness-110 flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>{t.btnNext}</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Clinical Details */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelAge}</label>
                        <input
                          type="number"
                          name="age"
                          required
                          min="1"
                          max="110"
                          placeholder="e.g. 34"
                          value={formData.age}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelGender}</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                        >
                          <option value="Female">{t.genderFemale}</option>
                          <option value="Male">{t.genderMale}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelNotes}</label>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Brief summary of your condition, past surgeries, or questions..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                      ></textarea>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-700"
                      >
                        {t.btnBack}
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#b38f48] to-[#d4af37] text-slate-950 font-bold text-sm hover:brightness-110 flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>{t.btnNext}</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact, Upload & Package Choice */}
                {step === 3 && (
                  <div className="space-y-4">
                    {/* File Upload Field */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelUpload}</label>
                      <label className="border-2 border-dashed border-slate-700 hover:border-[#c5a059] rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer bg-slate-900/60 transition-colors">
                        <UploadCloud className="w-6 h-6 text-[#c5a059] mb-1" />
                        <span className="text-xs text-slate-300 text-center">{formData.fileName || t.labelUploadHint}</span>
                        <input type="file" onChange={handleFileUpload} className="hidden" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelName}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelCountry}</label>
                        <input
                          type="text"
                          name="country"
                          required
                          placeholder="e.g. Tanzania, UAE, UK"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelWhatsApp}</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          placeholder="+255 / +971 / +44 ..."
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelEmail}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="patient@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">{t.labelPackageTier}</label>
                      <select
                        name="packageTier"
                        value={formData.packageTier}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-[#c5a059]"
                      >
                        <option value="Essential Care">Essential Care (Clinical Focus)</option>
                        <option value="Premium Comfort">Premium Comfort (4-Star Suite & Chauffeur)</option>
                        <option value="Royal VIP Concierge">Royal VIP Concierge (5-Star Luxury & CIP Access)</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-700"
                      >
                        {t.btnBack}
                      </button>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#b38f48] via-[#d4af37] to-[#e6ca65] text-slate-950 font-bold text-sm shadow-lg hover:brightness-110 disabled:opacity-50"
                      >
                        {status === 'submitting' ? t.submitting : t.btnSubmit}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
