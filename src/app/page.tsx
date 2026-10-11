'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Calculator,
  Stethoscope,
  Plane,
  Hospital,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Globe,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Upload,
  CheckCircle2,
  Info,
  PhoneCall,
} from 'lucide-react';

// ---------------------------------------------------------
// Configuration & Types
// ---------------------------------------------------------

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';
type Direction = 'ltr' | 'rtl';

type BenchmarkKey = 'usa_uk' | 'uae_turkey' | 'india';
type Gender = 'Male' | 'Female';

type PackageTier = 'essential' | 'vip';

type ProcedureKey =
  | 'rhinoplasty'
  | 'dental_implants'
  | 'lasik'
  | 'hair_transplant'
  | 'ivf'
  | 'knee_replacement'
  | 'cardio_stent'
  | 'oncology_initial'
  | 'bariatric_sleeve';

interface Procedure {
  key: ProcedureKey;
  title: string;
  specialty: string;
  recoveryDays: string;
  iranPrice: number;
  indiaPrice: number;
  uaeTurkeyPrice: number;
  usaUkPrice: number;
}

interface TranslationDict {
  dir: Direction;
  localeName: string;
  nav: {
    home: string;
    pricing: string;
    packages: string;
    journey: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    bullets: string[];
    ctaWhatsApp: string;
  };
  stats: {
    ipdPartners: string;
    specialists: string;
    savings: string;
    waitTime: string;
  };
  calc: {
    title: string;
    subtitle: string;
    selectProcedure: string;
    selectBenchmark: string;
    conciergeTier: string;
    standardRecovery: string;
    estimatedSavings: string;
    iranEstimate: string;
    benchmark: string;
    compareLabels: {
      usa_uk: string;
      uae_turkey: string;
      india: string;
    };
    tiers: { essential: string; vip: string };
  };
  journey: {
    title: string;
    steps: {
      a: string;
      b: string;
      c: string;
      d: string;
      e: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    headers: {
      specialtyRecovery: string;
      iran: string;
      india: string;
      uaeTurkey: string;
      usaUk: string;
      action: string;
    };
    actions: {
      inquire: string;
    };
  };
  packages: {
    title: string;
    essentialTitle: string;
    essentialBullets: string[];
    vipTitle: string;
    vipBullets: string[];
    badges: {
      clinicalFocus: string;
      signature: string;
    };
  };
  wizard: {
    openCta: string;
    modalTitle: string;
    steps: {
      oneTitle: string;
      twoTitle: string;
      threeTitle: string;
    };
    fields: {
      procedure: string;
      timeframe: string;
      age: string;
      gender: string;
      notes: string;
      upload: string;
      fullName: string;
      country: string;
      whatsapp: string;
      email: string;
      package: string;
    };
    buttons: {
      next: string;
      back: string;
      submit: string;
      close: string;
    };
    success: {
      title: string;
      lead: string;
      whatsapp: string;
      done: string;
    };
  };
  footer: {
    confidential: string;
    locations: string;
  };
}

const WHATSAPP_E164 = '+989055240772';
const WHATSAPP_WA = 'https://wa.me/989055240772';

// ---------------------------------------------------------
// Translations (minimal, focused copy for brevity – extend as needed)
// ---------------------------------------------------------

const translations: Record<Language, TranslationDict> = {
  en: {
    dir: 'ltr',
    localeName: 'English',
    nav: {
      home: 'Home',
      pricing: 'Pricing',
      packages: 'Packages',
      journey: 'Journey',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Premier Medical Concierge • Official IPD Partner Hospitals',
      subtitle:
        'World-class healthcare in Iran at 70–90% below global costs — bespoke journeys with accredited specialists and white-glove care.',
      bullets: [
        '40+ IPD Partner Centers',
        '180+ Board-Certified Specialists',
        '70–90% Typical Savings',
        '< 3 Days Wait Time',
      ],
      ctaWhatsApp: 'Chat on WhatsApp',
    },
    stats: {
      ipdPartners: '40+ IPD Partner Centers',
      specialists: '180+ Board-Certified Specialists',
      savings: '70–90% Typical Savings',
      waitTime: '< 3 Days Wait Time',
    },
    calc: {
      title: 'Instant Price & Savings Calculator',
      subtitle: 'Select your procedure and origin benchmark to view estimated savings.',
      selectProcedure: 'Select Treatment / Procedure',
      selectBenchmark: 'Compare Against Benchmark',
      conciergeTier: 'Concierge Package Tier',
      standardRecovery: 'Standard Recovery Stay: 7–10 days',
      estimatedSavings: 'Your Estimated Cost Savings',
      iranEstimate: 'Iran Concierge Estimate',
      benchmark: 'USA / UK Benchmark',
      compareLabels: {
        usa_uk: 'USA / UK',
        uae_turkey: 'UAE / Turkey',
        india: 'India',
      },
      tiers: { essential: 'Essential Care', vip: 'Luxury VIP' },
    },
    journey: {
      title: 'Your Patient Journey',
      steps: {
        a: 'Clinical Assessment & Visa',
        b: 'VIP Arrival & Accommodation',
        c: 'Hospital & Specialist Care',
        d: 'Monitored Recovery',
        e: 'Fit-to-Fly & Telemedicine',
      },
    },
    pricing: {
      title: 'Transparent Global Benchmark Pricing',
      subtitle:
        'Direct comparisons across leading medical destinations. All estimates reflect board-certified surgery teams.',
      headers: {
        specialtyRecovery: 'Specialty & Recovery',
        iran: 'Iran (Maham Health)',
        india: 'India',
        uaeTurkey: 'UAE / Turkey',
        usaUk: 'USA / UK',
        action: 'Action',
      },
      actions: { inquire: 'Inquire' },
    },
    packages: {
      title: 'Curated Concierge Packages',
      essentialTitle: 'Essential Medical Care',
      essentialBullets: [
        'Priority IPD appointment scheduling',
        'Airport reception & private hospital transfers',
        'Dedicated medical translator throughout hospital stay',
        'Official Iran T-Visa authorization letter',
      ],
      vipTitle: 'Luxury VIP Concierge',
      vipBullets: [
        '5-Star Suite accommodation (Espinas Palace / Wisteria)',
        'Private dedicated chauffeur on standby 24/7',
        'VIP fast-track airport customs and lounge access',
        'Post-operative nutritional care & companion lodging',
        'Direct access to department head surgeons',
      ],
      badges: { clinicalFocus: 'Clinical Focus', signature: 'Signature Concierge' },
    },
    wizard: {
      openCta: 'Start Consultation',
      modalTitle: '3-Step Consultation Wizard',
      steps: {
        oneTitle: 'Step 1: Select Treatment & Timing',
        twoTitle: 'Step 2: Patient Details',
        threeTitle: 'Step 3: Upload & Contact',
      },
      fields: {
        procedure: 'Procedure',
        timeframe: 'Travel Timeframe',
        age: 'Patient Age',
        gender: 'Gender',
        notes: 'Medical History / Notes',
        upload: 'Upload Reports / Photos (optional)',
        fullName: 'Full Name',
        country: 'Country',
        whatsapp: 'WhatsApp Number',
        email: 'Email Address',
        package: 'Package Selection',
      },
      buttons: { next: 'Next', back: 'Back', submit: 'Submit', close: 'Close' },
      success: {
        title: 'Inquiry Submitted',
        lead:
          'Thank you. Our case coordinators will contact you shortly with next steps and a medical visa letter if applicable.',
        whatsapp: 'Continue on WhatsApp',
        done: 'Done',
      },
    },
    footer: {
      confidential: 'Confidential Medical Inquiries',
      locations: 'Tehran • Dubai • Dar es Salaam • New Delhi',
    },
  },
  // For brevity, other locales reuse English text but adjust dir; extend with real translations.
  fa: { ...(this as any), dir: 'rtl', localeName: 'فارسی' } as unknown as TranslationDict,
  ar: { ...(this as any), dir: 'rtl', localeName: 'العربية' } as unknown as TranslationDict,
  sw: { ...(this as any), dir: 'ltr', localeName: 'Swahili' } as unknown as TranslationDict,
  hi: { ...(this as any), dir: 'ltr', localeName: 'हिन्दी' } as unknown as TranslationDict,
  ur: { ...(this as any), dir: 'rtl', localeName: 'اردو' } as unknown as TranslationDict,
};

// ---------------------------------------------------------
// Procedures (benchmarks per memory)
// ---------------------------------------------------------

const procedures: Procedure[] = [
  {
    key: 'rhinoplasty',
    title: 'Rhinoplasty (Nose Surgery)',
    specialty: 'Cosmetic & Plastic Surgery • 7–10 days',
    recoveryDays: '7–10 days',
    iranPrice: 1650,
    indiaPrice: 2800,
    uaeTurkeyPrice: 4500,
    usaUkPrice: 8500,
  },
  {
    key: 'dental_implants',
    title: 'Dental Implants (Premium Titanium)',
    specialty: 'Dental Care • 3–5 days',
    recoveryDays: '3–5 days',
    iranPrice: 550,
    indiaPrice: 800,
    uaeTurkeyPrice: 1500,
    usaUkPrice: 2800,
  },
  {
    key: 'lasik',
    title: 'LASIK / Femto-LASIK (Both Eyes)',
    specialty: 'Ophthalmology • 2–3 days',
    recoveryDays: '2–3 days',
    iranPrice: 1100,
    indiaPrice: 1400,
    uaeTurkeyPrice: 2800,
    usaUkPrice: 4200,
  },
  {
    key: 'hair_transplant',
    title: 'Hair Transplant (FUE / Micro-FUE)',
    specialty: 'Restoration & Aesthetics • 3–4 days',
    recoveryDays: '3–4 days',
    iranPrice: 1250,
    indiaPrice: 2000,
    uaeTurkeyPrice: 2600,
    usaUkPrice: 6000,
  },
  {
    key: 'ivf',
    title: 'IVF (Full Treatment Cycle + ICSI)',
    specialty: 'Reproductive Medicine • 10–14 days',
    recoveryDays: '10–14 days',
    iranPrice: 3200,
    indiaPrice: 4500,
    uaeTurkeyPrice: 7500,
    usaUkPrice: 15000,
  },
  {
    key: 'knee_replacement',
    title: 'Total Knee Replacement',
    specialty: 'Orthopedics & Joint Care • 10–14 days',
    recoveryDays: '10–14 days',
    iranPrice: 4200,
    indiaPrice: 7500,
    uaeTurkeyPrice: 11000,
    usaUkPrice: 22000,
  },
  {
    key: 'cardio_stent',
    title: 'Cardiology Stent / Angioplasty',
    specialty: 'Cardiovascular Care • 4–7 days',
    recoveryDays: '4–7 days',
    iranPrice: 3800,
    indiaPrice: 6500,
    uaeTurkeyPrice: 9500,
    usaUkPrice: 20000,
  },
  {
    key: 'oncology_initial',
    title: 'Oncology Initial Treatment Protocol',
    specialty: 'Oncology & Chemotherapy • 7–14 days',
    recoveryDays: '7–14 days',
    iranPrice: 4500,
    indiaPrice: 8000,
    uaeTurkeyPrice: 12000,
    usaUkPrice: 25000,
  },
  {
    key: 'bariatric_sleeve',
    title: 'Bariatric Sleeve Surgery',
    specialty: 'Metabolic & Weight Loss • 5–7 days',
    recoveryDays: '5–7 days',
    iranPrice: 2850,
    indiaPrice: 4800,
    uaeTurkeyPrice: 6500,
    usaUkPrice: 12000,
  },
];

// ---------------------------------------------------------
// Utility
// ---------------------------------------------------------

function currency(n: number) {
  return `$${n.toLocaleString('en-US')}`;
}

function getBenchmarkPrice(p: Procedure, bench: BenchmarkKey) {
  if (bench === 'usa_uk') return p.usaUkPrice;
  if (bench === 'uae_turkey') return p.uaeTurkeyPrice;
  return p.indiaPrice;
}

function localeFromPath(pathname: string): Language {
  // expecting /en, /fa, /ar, /sw, /hi, /ur or root
  const seg = pathname.split('/').filter(Boolean)?.[0] as Language | undefined;
  if (!seg) return 'en';
  if (['en', 'fa', 'ar', 'sw', 'hi', 'ur'].includes(seg)) return seg as Language;
  return 'en';
}

// ---------------------------------------------------------
// Page Component
// ---------------------------------------------------------

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState<Language>(localeFromPath(pathname || '/'));
  const t = translations[lang] || translations.en;

  // direction at runtime to support RTL/LTR
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = t.dir;
      document.documentElement.lang = lang;
    }
  }, [lang, t.dir]);

  // Calculator State
  const [selectedProc, setSelectedProc] = useState<ProcedureKey>('rhinoplasty');
  const [benchmark, setBenchmark] = useState<BenchmarkKey>('usa_uk');
  const [tier, setTier] = useState<PackageTier>('essential');

  const proc = useMemo(
    () => procedures.find((p) => p.key === selectedProc)!,
    [selectedProc]
  );

  const iranEstimate = useMemo(() => {
    const base = proc.iranPrice;
    const tierAdj = tier === 'vip' ? Math.ceil(base * 0.15) : 0;
    return base + tierAdj;
  }, [proc, tier]);

  const benchPrice = useMemo(() => getBenchmarkPrice(proc, benchmark), [proc, benchmark]);
  const savingsPct = useMemo(() => Math.max(0, Math.round(((benchPrice - iranEstimate) / benchPrice) * 100)), [
    benchPrice,
    iranEstimate,
  ]);

  // Wizard State
  const [wizardOpen, setWizardOpen] = useState(false);
  const [step, setStep] = useState(1 as 1 | 2 | 3 | 4);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    procedure: 'rhinoplasty' as ProcedureKey,
    timeframe: '',
    age: '',
    gender: 'Male' as Gender,
    notes: '',
    files: [] as File[],
    fullName: '',
    country: '',
    whatsapp: '',
    email: '',
    package: 'essential' as PackageTier,
  });

  // Language switcher navigation
  const goLang = (l: Language) => {
    setLang(l);
    // try to keep path under new locale; for static export, route to /{l}/
    const segs = (pathname || '/').split('/').filter(Boolean);
    const rest = segs.slice(1).join('/');
    const next = `/${l}/${rest}`.replace(/\/+$/, '/');
    router.push(next);
  };

  // -------------------------------------------------------
  // UI Sections
  // -------------------------------------------------------

  const Header = () => (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Maham Health"
            className="h-10 w-auto object-contain"
          />
          <span className="sr-only">Maham Health</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#pricing" className="hover:text-blue-700">{t.nav.pricing}</a>
          <a href="#packages" className="hover:text-blue-700">{t.nav.packages}</a>
          <a href="#journey" className="hover:text-blue-700">{t.nav.journey}</a>
          <a href="#faq" className="hover:text-blue-700">{t.nav.faq}</a>
          <a href={WHATSAPP_WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800">
            <PhoneCall className="h-4 w-4" />
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <Globe className="h-4 w-4 text-blue-600" />
              <span className="text-sm">{t.localeName}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {/* Simple language menu */}
            <div className="absolute right-0 mt-2 w-40 rounded-md border border-slate-200 bg-white shadow-md p-1 text-sm">
              {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => goLang(l)}
                  className={`w-full text-left px-2 py-1.5 rounded hover:bg-slate-50 ${l === lang ? 'text-blue-700' : 'text-slate-700'}`}
                >
                  {translations[l].localeName}
                </button>
              ))}
            </div>
          </div>
          <a
            href={WHATSAPP_WA}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500 text-white hover:bg-emerald-600"
          >
            <MessageCircle className="h-4 w-4" />
            {t.hero.ctaWhatsApp}
          </a>
        </div>
      </div>
    </header>
  );

  const Hero = () => (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
              Maham Health
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-slate-600">
              {t.hero.subtitle}
            </p>
            <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {t.hero.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setWizardOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                <Stethoscope className="h-5 w-5" />
                {t.wizard.openCta}
              </button>
              <a
                href={`${WHATSAPP_WA}?text=${encodeURIComponent('Hello Maham Health, I would like to inquire about your medical services.')}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600"
              >
                <MessageCircle className="h-5 w-5" />
                {t.hero.ctaWhatsApp}
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-xl border border-slate-200 p-4">
              <Calculator className="h-6 w-6 text-blue-600" />
              <h2 className="mt-2 font-semibold text-slate-900">{t.calc.title}</h2>
              <p className="text-sm text-slate-600">{t.calc.subtitle}</p>

              <div className="mt-4 grid gap-3">
                <label className="text-sm text-slate-700">{t.calc.selectProcedure}</label>
                <select
                  className="w-full rounded border border-slate-300 px-3 py-2"
                  value={selectedProc}
                  onChange={(e) => setSelectedProc(e.target.value as ProcedureKey)}
                >
                  {procedures.map((p) => (
                    <option key={p.key} value={p.key}>
                      {p.title}
                    </option>
                  ))}
                </select>

                <label className="text-sm text-slate-700 mt-3">{t.calc.selectBenchmark}</label>
                <select
                  className="w-full rounded border border-slate-300 px-3 py-2"
                  value={benchmark}
                  onChange={(e) => setBenchmark(e.target.value as BenchmarkKey)}
                >
                  <option value="usa_uk">{t.calc.compareLabels.usa_uk}</option>
                  <option value="uae_turkey">{t.calc.compareLabels.uae_turkey}</option>
                  <option value="india">{t.calc.compareLabels.india}</option>
                </select>

                <label className="text-sm text-slate-700 mt-3">{t.calc.conciergeTier}</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTier('essential')}
                    className={`px-3 py-1.5 rounded border ${tier === 'essential' ? 'border-blue-600 text-blue-700' : 'border-slate-300 text-slate-700'}`}
                  >
                    {t.calc.tiers.essential}
                  </button>
                  <button
                    onClick={() => setTier('vip')}
                    className={`px-3 py-1.5 rounded border ${tier === 'vip' ? 'border-blue-600 text-blue-700' : 'border-slate-300 text-slate-700'}`}
                  >
                    {t.calc.tiers.vip}
                  </button>
                </div>

                <p className="text-xs text-slate-500 mt-2">{t.calc.standardRecovery}</p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded border border-slate-200 p-3">
                    <div className="text-slate-500 text-xs">{t.calc.iranEstimate}</div>
                    <div className="text-slate-900 text-xl font-semibold">{currency(iranEstimate)}</div>
                  </div>
                  <div className="rounded border border-slate-200 p-3">
                    <div className="text-slate-500 text-xs">
                      {benchmark === 'usa_uk'
                        ? t.calc.compareLabels.usa_uk
                        : benchmark === 'uae_turkey'
                        ? t.calc.compareLabels.uae_turkey
                        : t.calc.compareLabels.india}{' '}
                      {t.calc.benchmark ? '' : ''}
                    </div>
                    <div className="text-slate-900 text-xl font-semibold">{currency(benchPrice)}</div>
                  </div>
                </div>

                <div className="mt-3 rounded bg-emerald-50 border border-emerald-200 p-3 text-emerald-800">
                  <strong>{t.calc.estimatedSavings}:</strong> ~{savingsPct}% vs.{' '}
                  {benchmark === 'usa_uk'
                    ? t.calc.compareLabels.usa_uk
                    : benchmark === 'uae_turkey'
                    ? t.calc.compareLabels.uae_turkey
                    : t.calc.compareLabels.india}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Journey = () => (
    <section id="journey" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-slate-900">{t.journey.title}</h2>
        <div className="mt-6 grid md:grid-cols-5 gap-4">
          {[
            { icon: ShieldCheck, text: t.journey.steps.a },
            { icon: Plane, text: t.journey.steps.b },
            { icon: Hospital, text: t.journey.steps.c },
            { icon: Sparkles, text: t.journey.steps.d },
            { icon: Info, text: t.journey.steps.e },
          ].map((s, i) => (
            <div key={i} className="rounded-lg bg-white border border-slate-200 p-4">
              <s.icon className="h-5 w-5 text-blue-600" />
              <div className="mt-2 text-sm text-slate-800">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Pricing = () => (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-slate-900">{t.pricing.title}</h2>
        <p className="text-slate-600 mt-1">{t.pricing.subtitle}</p>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3 text-left border-b border-slate-200">{t.pricing.headers.specialtyRecovery}</th>
                <th className="p-3 text-left border-b border-slate-200">{t.pricing.headers.iran}</th>
                <th className="p-3 text-left border-b border-slate-200">{t.pricing.headers.india}</th>
                <th className="p-3 text-left border-b border-slate-200">{t.pricing.headers.uaeTurkey}</th>
                <th className="p-3 text-left border-b border-slate-200">{t.pricing.headers.usaUk}</th>
                <th className="p-3 text-left border-b border-slate-200">{t.pricing.headers.action}</th>
              </tr>
            </thead>
            <tbody>
              {procedures.map((p) => (
                <tr key={p.key} className="even:bg-slate-50">
                  <td className="p-3">
                    <div className="font-medium text-slate-900">{p.title}</div>
                    <div className="text-xs text-slate-600">{p.specialty}</div>
                  </td>
                  <td className="p-3">{currency(p.iranPrice)}</td>
                  <td className="p-3">{currency(p.indiaPrice)}</td>
                  <td className="p-3">{currency(p.uaeTurkeyPrice)}</td>
                  <td className="p-3">{currency(p.usaUkPrice)}</td>
                  <td className="p-3">
                    <button
                      onClick={() => {
                        setForm((f) => ({ ...f, procedure: p.key }));
                        setWizardOpen(true);
                      }}
                      className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                      {t.pricing.actions.inquire}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );

  const Packages = () => (
    <section id="packages" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-slate-900">{t.packages.title}</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase">
              <ShieldCheck className="h-4 w-4" />
              {t.packages.badges.clinicalFocus}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {t.packages.essentialTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {t.packages.essentialBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase">
              <Sparkles className="h-4 w-4" />
              {t.packages.badges.signature}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {t.packages.vipTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {t.packages.vipBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const FAQ = () => (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-4 space-y-3">
          {[
            {
              q: 'How does the Iran Medical Visa (T-Visa) process work?',
              a: 'We issue an official medical invitation letter within 48 hours after your clinical assessment. This supports issuance of the Iran T-Visa through authorized channels.',
            },
            {
              q: 'How are payments handled given international banking constraints?',
              a: 'We offer multiple compliant options: UAE-based settlement, clinic-direct payments, and verified methods presented during your consultation.',
            },
            {
              q: 'What companion accommodations and recovery options are available?',
              a: 'We arrange 5-star suites (e.g., Espinas Palace / Wisteria), 24/7 chauffeur, translators, and post-operative nutritional care depending on your chosen package.',
            },
          ].map((item, idx) => (
            <details key={idx} className="rounded border border-slate-200 p-4">
              <summary className="cursor-pointer font-medium text-slate-900">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.png" alt="Maham Health" className="h-8 w-auto" />
            <div className="text-slate-700 text-sm">
              © {new Date().getFullYear()} Maham Health. {t.footer.confidential}.
            </div>
          </div>
          <div className="text-slate-600 text-sm">{t.footer.locations}</div>
        </div>
      </div>
    </footer>
  );

  // -------------------------------------------------------
  // Wizard Modal
  // -------------------------------------------------------

  const Modal = () => {
    if (!wizardOpen) return null;
    const close = () => {
      setWizardOpen(false);
      setStep(1);
      setSubmitting(false);
      setSubmitted(false);
    };

    const onFile = (files: FileList | null) => {
      if (!files) return;
      setForm((f) => ({ ...f, files: Array.from(files).slice(0, 5) }));
    };

    const next = () => setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3) : s));
    const back = () => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s));

    const submit = async () => {
      setSubmitting(true);
      try {
        // Minimal client-side validation
        if (!form.fullName || !form.country || !form.whatsapp) {
          alert('Please fill required fields: Full Name, Country, WhatsApp.');
          setSubmitting(false);
          return;
        }
        // Handoff to WhatsApp by encoding a message
        const msg = `Hello Maham Health, I would like to inquire about ${form.procedure}.
Name: ${form.fullName}
Country: ${form.country}
WhatsApp: ${form.whatsapp}
Email: ${form.email || '-'}
Package: ${form.package}
Timeframe: ${form.timeframe || '-'}
Age: ${form.age || '-'} | Gender: ${form.gender}
Notes: ${form.notes || '-'}
`;
        const url = `${WHATSAPP_WA}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener');
        setSubmitted(true);
        setStep(4);
      } catch (e) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900/40" onClick={close} />
        <div className="relative z-10 w-full max-w-2xl rounded-lg bg-white border border-slate-200 shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <h3 className="font-semibold text-slate-900">{t.wizard.modalTitle}</h3>
            <button onClick={close} className="text-slate-500 hover:text-slate-700">✕</button>
          </div>

          {/* Steps */}
          {step <= 3 && (
            <div className="p-4">
              {/* Stepper */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}>1</span>
                <ChevronRight className="h-4 w-4" />
                <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}>2</span>
                <ChevronRight className="h-4 w-4" />
                <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}>3</span>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="mt-4 grid gap-3">
                  <div>
                    <label className="text-sm text-slate-700">{t.wizard.fields.procedure}</label>
                    <select
                      className="w-full rounded border border-slate-300 px-3 py-2"
                      value={form.procedure}
                      onChange={(e) => setForm((f) => ({ ...f, procedure: e.target.value as ProcedureKey }))}
                    >
                      {procedures.map((p) => (
                        <option key={p.key} value={p.key}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">{t.wizard.fields.timeframe}</label>
                    <input
                      className="w-full rounded border border-slate-300 px-3 py-2"
                      value={form.timeframe}
                      onChange={(e) => setForm((f) => ({ ...f, timeframe: e.target.value }))}
                      placeholder="e.g., within 2–4 weeks"
                    />
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="mt-4 grid gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-sm text-slate-700">{t.wizard.fields.age}</label>
                      <input
                        type="number"
                        className="w-full rounded border border-slate-300 px-3 py-2"
                        value={form.age}
                        onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-700">{t.wizard.fields.gender}</label>
                      <select
                        className="w-full rounded border border-slate-300 px-3 py-2"
                        value={form.gender}
                        onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value as Gender }))}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-700">{t.wizard.fields.package}</label>
                      <select
                        className="w-full rounded border border-slate-300 px-3 py-2"
                        value={form.package}
                        onChange={(e) => setForm((f) => ({ ...f, package: e.target.value as PackageTier }))}
                      >
                        <option value="essential">Essential Care</option>
                        <option value="vip">Luxury VIP</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">{t.wizard.fields.notes}</label>
                    <textarea
                      className="w-full rounded border border-slate-300 px-3 py-2"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                      placeholder="Provide medical history, prior surgeries, medications, etc."
                    />
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="mt-4 grid gap-3">
                  <div>
                    <label className="text-sm text-slate-700">{t.wizard.fields.upload}</label>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => onFile(e.target.files)}
                      className="block w-full text-sm text-slate-700 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-slate-700">{t.wizard.fields.fullName}</label>
                      <input
                        className="w-full rounded border border-slate-300 px-3 py-2"
                        value={form.fullName}
                        onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-700">{t.wizard.fields.country}</label>
                      <input
                        className="w-full rounded border border-slate-300 px-3 py-2"
                        value={form.country}
                        onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-slate-700">{t.wizard.fields.whatsapp}</label>
                      <input
                        className="w-full rounded border border-slate-300 px-3 py-2"
                        placeholder="+[country code][number]"
                        value={form.whatsapp}
                        onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-700">{t.wizard.fields.email}</label>
                      <input
                        type="email"
                        className="w-full rounded border border-slate-300 px-3 py-2"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={back}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-300 text-slate-700 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t.wizard.buttons.back}
                </button>
                {step < 3 ? (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {t.wizard.buttons.next}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {submitting ? 'Submitting…' : t.wizard.buttons.submit}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Success */}
          {step === 4 && (
            <div className="p-6">
              <h4 className="text-lg font-semibold text-slate-900">{t.wizard.success.title}</h4>
              <p className="text-sm text-slate-700 mt-1">{t.wizard.success.lead}</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={`${WHATSAPP_WA}?text=${encodeURIComponent('Hello Maham Health, I have submitted my inquiry via the website and would like to continue here.')}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.wizard.success.whatsapp}
                </a>
                <button
                  onClick={() => {
                    setStep(1);
                    setWizardOpen(false);
                  }}
                  className="px-3 py-1.5 rounded border border-slate-300 text-slate-700"
                >
                  {t.wizard.success.done}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // -------------------------------------------------------
  // Page render
  // -------------------------------------------------------

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Journey />
        <Pricing />
        <Packages />
        <FAQ />
      </main>
      <Footer />

      {/* Floating WhatsApp button - single root-level instance */}
      <a
        href={`${WHATSAPP_WA}?text=${encodeURIComponent('Hello Maham Health, I would like to inquire about your medical services.')}`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full shadow-lg bg-emerald-500 hover:bg-emerald-600 text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <Modal />
    </div>
  );
}
