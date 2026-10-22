// src/components/Home.tsx
'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TRANSLATIONS, LOCALES, RTL_LANGUAGES, type Language } from '../data/translations';
import Image from 'next/image';
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  Globe,
  Sparkles,
  Building2,
  Stethoscope,
  Calculator,
  UserCheck,
  ArrowRight,
  Menu,
  X,
  Star,
  Activity,
  Download,
  FileText,
} from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';
type Dir = 'ltr' | 'rtl';

const WHATSAPP_NUMBER = '989055240772';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = 'health@maham-group.com';

const SUPPORTED_LANGUAGES: { code: Language; label: string; dir: Dir }[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'fa', label: 'FA', dir: 'rtl' },
  { code: 'ar', label: 'AR', dir: 'rtl' },
  { code: 'sw', label: 'SW', dir: 'ltr' },
  { code: 'hi', label: 'HI', dir: 'ltr' },
  { code: 'ur', label: 'UR', dir: 'rtl' },
];

function getDir(lang: Language): Dir {
  return SUPPORTED_LANGUAGES.find((l) => l.code === lang)?.dir ?? 'ltr';
}

function normalizeLang(input: string | null | undefined): Language {
  const raw = (input || '').toLowerCase().trim();
  const primary = raw.split('-')[0] as Language;
  if ((SUPPORTED_LANGUAGES.map((l) => l.code) as Language[]).includes(primary)) return primary;
  return 'en';
}

function detectInitialLanguage(initialLanguage?: string): Language {
  // Priority: explicit prop -> localStorage -> browser locale -> fallback
  if (initialLanguage) return normalizeLang(initialLanguage);
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem('mh_lang');
    if (stored) return normalizeLang(stored);
    const nav = navigator.language || (navigator.languages && navigator.languages[0]);
    return normalizeLang(nav);
  }
  return 'en';
}

const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, name: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: 'Euro' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, name: 'UAE Dirham' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound' },
  OMR: { code: 'OMR', symbol: 'ر.ع.', rate: 0.38, name: 'Omani Rial' },
  INR: { code: 'INR', symbol: '₹', rate: 83.0, name: 'Indian Rupee' },
};

type SpecialtyId =
  | 'rhinoplasty'
  | 'dental'
  | 'lasik'
  | 'hair'
  | 'ivf'
  | 'orthopedic'
  | 'cardio'
  | 'oncology'
  | 'bariatric';

type Specialty = {
  id: SpecialtyId;
  category: string;
  recoveryDays: string;
  iranPrice: number; // USD baseline
  indiaPrice: number;
  uaeTurkeyPrice: number;
  usUkPrice: number;
  savings: string;
  name: { en: string };
  timeline: { label: string; detail: string }[];
};

const SPECIALTIES: Specialty[] = [
  {
    id: 'rhinoplasty',
    category: 'Plastic Surgery',
    recoveryDays: '7–10 Days',
    iranPrice: 2200,
    indiaPrice: 3500,
    uaeTurkeyPrice: 5000,
    usUkPrice: 12500,
    savings: '82%',
    name: { en: 'Rhinoplasty & Facial Surgery' },
    timeline: [
      { label: 'Day 1', detail: 'Arrival, pre-op evaluation, surgeon consult.' },
      { label: 'Day 2', detail: 'Procedure + monitored recovery.' },
      { label: 'Day 3–5', detail: 'Follow-up, swelling management, rest.' },
      { label: 'Day 6–10', detail: 'Final check and fit-to-fly clearance.' },
    ],
  },
  {
    id: 'dental',
    category: 'Dental Implants',
    recoveryDays: '3–5 Days',
    iranPrice: 450,
    indiaPrice: 700,
    uaeTurkeyPrice: 1200,
    usUkPrice: 4000,
    savings: '88%',
    name: { en: 'Dental Implants (Per Implant)' },
    timeline: [
      { label: 'Day 1', detail: 'Imaging, consult, planning.' },
      { label: 'Day 2', detail: 'Implant placement procedure.' },
      { label: 'Day 3–5', detail: 'Checkups and post-op care plan.' },
      { label: 'Later', detail: 'Crown phase as per medical protocol.' },
    ],
  },
  {
    id: 'lasik',
    category: 'Ophthalmology',
    recoveryDays: '2–3 Days',
    iranPrice: 800,
    indiaPrice: 1200,
    uaeTurkeyPrice: 2000,
    usUkPrice: 5000,
    savings: '84%',
    name: { en: 'LASIK Eye Surgery (Both Eyes)' },
    timeline: [
      { label: 'Day 1', detail: 'Diagnostics + eligibility confirmation.' },
      { label: 'Day 2', detail: 'Procedure + short recovery.' },
      { label: 'Day 3', detail: 'Post-op check and discharge.' },
      { label: 'Week 1', detail: 'Remote follow-up support.' },
    ],
  },
  {
    id: 'hair',
    category: 'Hair Restoration',
    recoveryDays: '4–7 Days',
    iranPrice: 1500,
    indiaPrice: 2000,
    uaeTurkeyPrice: 3500,
    usUkPrice: 10000,
    savings: '85%',
    name: { en: 'FUE / DHI Hair Transplant' },
    timeline: [
      { label: 'Day 1', detail: 'Design, consult, lab work.' },
      { label: 'Day 2', detail: 'Procedure day.' },
      { label: 'Day 3–4', detail: 'Washes, aftercare instruction.' },
      { label: 'Day 5–7', detail: 'Checkup + travel clearance.' },
    ],
  },
  {
    id: 'ivf',
    category: 'Fertility',
    recoveryDays: '10–14 Days',
    iranPrice: 3500,
    indiaPrice: 4500,
    uaeTurkeyPrice: 7000,
    usUkPrice: 18000,
    savings: '80%',
    name: { en: 'IVF Treatment Cycle' },
    timeline: [
      { label: 'Day 1–2', detail: 'Initial consult + baseline testing.' },
      { label: 'Day 3–10', detail: 'Stimulation monitoring + support.' },
      { label: 'Day 11–12', detail: 'Retrieval + lab phase.' },
      { label: 'Day 13–14', detail: 'Transfer + rest plan.' },
    ],
  },
  {
    id: 'orthopedic',
    category: 'Orthopedics',
    recoveryDays: '14–21 Days',
    iranPrice: 5500,
    indiaPrice: 7500,
    uaeTurkeyPrice: 11000,
    usUkPrice: 35000,
    savings: '84%',
    name: { en: 'Knee / Hip Joint Replacement' },
    timeline: [
      { label: 'Day 1', detail: 'Imaging + surgical plan.' },
      { label: 'Day 2', detail: 'Procedure day.' },
      { label: 'Day 3–7', detail: 'Physio, pain mgmt, mobility training.' },
      { label: 'Week 2–3', detail: 'Rehab + fit-to-fly protocol.' },
    ],
  },
  {
    id: 'cardio',
    category: 'Cardiology',
    recoveryDays: '3–7 Days',
    iranPrice: 1800,
    indiaPrice: 2500,
    uaeTurkeyPrice: 4500,
    usUkPrice: 15000,
    savings: '88%',
    name: { en: 'Angiography / Stent (Case-Based)' },
    timeline: [
      { label: 'Day 1', detail: 'Diagnostics + cardiology board review.' },
      { label: 'Day 2', detail: 'Procedure + monitored recovery.' },
      { label: 'Day 3–5', detail: 'Medication plan + discharge check.' },
      { label: 'Week 1', detail: 'Remote follow-up and escalation path.' },
    ],
  },
  {
    id: 'oncology',
    category: 'Oncology',
    recoveryDays: 'Varies',
    iranPrice: 2500,
    indiaPrice: 3200,
    uaeTurkeyPrice: 6500,
    usUkPrice: 20000,
    savings: '87%',
    name: { en: 'Oncology Initial Treatment (Assessment & Plan)' },
    timeline: [
      { label: 'Day 1–2', detail: 'Imaging review + pathology coordination.' },
      { label: 'Day 3–5', detail: 'Tumor board plan + roadmap.' },
      { label: 'Week 1', detail: 'Start protocol as clinically advised.' },
      { label: 'Ongoing', detail: 'Care coordination + remote continuity.' },
    ],
  },
  {
    id: 'bariatric',
    category: 'Bariatric Surgery',
    recoveryDays: '10–14 Days',
    iranPrice: 4800,
    indiaPrice: 6200,
    uaeTurkeyPrice: 9500,
    usUkPrice: 22000,
    savings: '78%',
    name: { en: 'Sleeve Gastrectomy (Package)' },
    timeline: [
      { label: 'Day 1', detail: 'Pre-op labs + anesthesia clearance.' },
      { label: 'Day 2', detail: 'Surgery + monitored recovery.' },
      { label: 'Day 3–5', detail: 'Diet plan + walking protocol.' },
      { label: 'Day 6–14', detail: 'Follow-up + fit-to-fly clearance.' },
    ],
  },
];

const CLINICS = [
  { name: 'Gandhi Hospital', location: 'Tehran', specialty: 'JCI Accredited, Multi-Specialty & Plastic Surgery' },
  { name: 'Moheb Hospital', location: 'Tehran', specialty: 'Advanced Cardiac & Orthopedic Center' },
  { name: 'Kish International Hospital', location: 'Kish Island', specialty: 'Resort Recovery & Premium VIP Suites' },
  { name: 'Dorna Clinic', location: 'Shiraz', specialty: 'Ophthalmology & Fertility Excellence' },
];

const FAQS = [
  {
    q: 'Why is medical care in Iran so affordable?',
    a: 'Highly skilled board-certified doctors, favorable exchange rates, and lower operational overhead allow top-tier hospitals to offer world-class care at a fraction of US/UK costs.',
  },
  {
    q: 'How does the T‑Visa process work?',
    a: 'Maham Health submits your medical dossier to support the Iranian medical travel visa pathway. Typical authorization steps can be expedited depending on documentation completeness.',
  },
  {
    q: 'Who will assist me during my stay?',
    a: 'A dedicated bilingual VIP concierge manager can support airport pickup, hospital visits, and recovery logistics based on your selected package.',
  },
];

type PackageTier = 'essential' | 'premium' | 'elite';
const TIER_LABEL: Record<PackageTier, string> = {
  essential: 'Essential Care',
  premium: 'Premium Comfort',
  elite: 'VIP Elite Concierge',
};

const TIER_OFFSET_USD: Record<PackageTier, number> = {
  essential: 500,
  premium: 1200,
  elite: 2400,
};

// IMPORTANT: Set these to your real logo file path(s) in /public.
// This fixes the current issue where a placeholder PlusIcon is used.
const LOGO_SRC = '/logo.png'; // e.g. /public/logo.png
const LOGO_ALT = 'Maham Health';

function buildWhatsAppText(params: {
  title: string;
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  treatment?: string;
  tier?: string;
  estimate?: string;
  notes?: string;
}) {
  const lines: string[] = [];
  lines.push(`*${params.title}*`);
  if (params.name) lines.push(`*Name:* ${params.name}`);
  if (params.country) lines.push(`*Country:* ${params.country}`);
  if (params.phone) lines.push(`*WhatsApp/Phone:* ${params.phone}`);
  if (params.email) lines.push(`*Email:* ${params.email}`);
  if (params.treatment) lines.push(`*Treatment:* ${params.treatment}`);
  if (params.tier) lines.push(`*Package:* ${params.tier}`);
  if (params.estimate) lines.push(`*Estimated Total:* ${params.estimate}`);
  if (params.notes) lines.push(`*Notes:* ${params.notes}`);
  return encodeURIComponent(lines.join('\n'));
}

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export default function HomePage({ initialLanguage = 'en' }: { initialLanguage?: string }) {
  // Robust language selector: persists, updates <html dir/lang>, safe fallback
  const [language, setLanguage] = useState<Language>(() => detectInitialLanguage(initialLanguage));
  const dir = getDir(language);
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;
  const isRTL = RTL_LANGUAGES.includes(language);

  useEffect(() => {
    try {
      window.localStorage.setItem('mh_lang', language);
    } catch {
      // ignore
    }
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const [currency, setCurrency] = useState<keyof typeof CURRENCIES>('USD');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<SpecialtyId>(SPECIALTIES[0].id);
  const [packageTier, setPackageTier] = useState<PackageTier>('premium');

  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [wizardSubmitted, setWizardSubmitted] = useState(false);

  // Quote modal (print-to-PDF)
  const [quoteOpen, setQuoteOpen] = useState(false);
  useLockBodyScroll(quoteOpen);
  const printRef = useRef<HTMLDivElement | null>(null);

  const curr = CURRENCIES[currency];

  const selectedSpecialty = useMemo(
    () => SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0],
    [selectedSpecialtyId]
  );

  const formatMoney = (amountUSD: number) => {
    const converted = Math.round(amountUSD * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  const tierOffset = TIER_OFFSET_USD[packageTier];
  const iranTotalUSD = selectedSpecialty.iranPrice + tierOffset;
  const savingsUSD = Math.max(0, selectedSpecialty.usUkPrice - iranTotalUSD);

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWizardSubmitted(true);

    const text = buildWhatsAppText({
      title: 'New Medical Inquiry - Maham Health',
      name: patientName,
      email: patientEmail,
      phone: patientPhone,
      treatment: selectedSpecialty.name.en,
      tier: `${TIER_LABEL[packageTier]} (${packageTier.toUpperCase()})`,
      estimate: formatMoney(iranTotalUSD),
      notes: patientNotes,
    });

    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenQuote = () => {
    setQuoteOpen(true);
    // allow modal paint then focus
    setTimeout(() => {
      const el = document.getElementById('mh-quote-title');
      el?.focus();
    }, 0);
  };

  const handlePrintQuote = () => {
    // Basic print-to-PDF via browser print dialog. Works in static export.
    // We temporarily add a class so print CSS (if any) can target.
    document.documentElement.classList.add('mh-printing');
    window.print();
    setTimeout(() => document.documentElement.classList.remove('mh-printing'), 250);
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar */}
      <div className="bg-[#08111d] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" /> Tehran • Shiraz • Kish • Dubai • Mumbai
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Soorin Maham Trade & Industry
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-blue-400" /> {EMAIL}
            </a>

            <span className="text-slate-600">|</span>

            {/* Language selector (robust, visible, persisted) */}
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(normalizeLang(e.target.value))}
                aria-label="Select Language"
                className="bg-slate-900 text-slate-200 border border-slate-800 rounded px-1.5 py-0.5 text-xs outline-none focus:border-blue-500"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            <span className="text-slate-600">|</span>

            {/* Currency selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as keyof typeof CURRENCIES)}
              aria-label="Select Currency"
              className="bg-slate-900 text-slate-200 border border-slate-800 rounded px-1.5 py-0.5 text-xs outline-none focus:border-blue-500"
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c}>
                  {c} ({CURRENCIES[c as keyof typeof CURRENCIES].symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            {/* Top-left logo (fix: use the real site logo, not PlusIcon) */}
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
              <Image src={LOGO_SRC} alt={LOGO_ALT} width={40} height={40} className="w-9 h-9 object-contain" />
            </div>

            <div className="leading-tight">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#0B3C95] to-blue-600 bg-clip-text text-transparent">
                MAHAM HEALTH
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-500 font-medium">
                Medical Tourism Concierge
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
            <a href="#specialties" className="hover:text-blue-600 transition">
              Specialties
            </a>
            <a href="#calculator" className="hover:text-blue-600 transition">
              Cost Estimator
            </a>
            <a href="#clinics" className="hover:text-blue-600 transition">
              Top Hospitals
            </a>
            <a href="#process" className="hover:text-blue-600 transition">
              Journey
            </a>
            <a href="#faq" className="hover:text-blue-600 transition">
              FAQ
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={handleOpenQuote}
              className="bg-white border border-slate-200 hover:border-blue-300 text-slate-800 font-semibold px-4 py-2.5 rounded-xl shadow-sm transition flex items-center gap-2 text-sm"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              Download Quote
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 transition flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> WhatsApp VIP
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-700 p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl">
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">
              Specialties
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">
              Cost Estimator
            </a>
            <a href="#clinics" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">
              Top Hospitals
            </a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">
              Journey
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">
              FAQ
            </a>

            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenQuote();
                }}
                className="w-full bg-white border border-slate-200 text-slate-900 text-center py-3 rounded-xl font-semibold block shadow-sm"
              >
                Download Quote
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white text-center py-3 rounded-xl font-medium block shadow"
              >
                WhatsApp VIP Concierge
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white py-24 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Soorin Maham Medical Concierge
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              World-Class Healthcare in Iran, Curated with Luxury.
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience top hospitals, world-renowned specialists, and 70–90% savings compared to Western benchmarks.
              Full VIP concierge service from arrival to recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#calculator"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/30 transition flex items-center justify-center gap-2"
              >
                Calculate Your Savings <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-400" /> Free WhatsApp Consultation
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div>
                <div className="text-3xl font-extrabold text-white">70–90%</div>
                <div className="text-xs text-slate-400 mt-1">Average Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">JCI</div>
                <div className="text-xs text-slate-400 mt-1">Partner Hospitals</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">24/7</div>
                <div className="text-xs text-slate-400 mt-1">VIP Concierge Support</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Fast-Track Medical Travel Support
              </div>

              <h3 className="text-xl font-bold mb-2">Request Free Treatment Plan</h3>
              <p className="text-slate-300 text-xs mb-6">
                Share your records for specialist review and a curated plan.
              </p>

              <form onSubmit={handleWizardSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Select Specialty</label>
                  <select
                    value={selectedSpecialtyId}
                    onChange={(e) => setSelectedSpecialtyId(e.target.value as SpecialtyId)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {SPECIALTIES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Medical Notes or Symptoms</label>
                  <textarea
                    rows={2}
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    placeholder="Briefly describe your condition or desired procedure..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-5 h-5" /> Get Free Opinion & Quote via WhatsApp
                </button>

                {wizardSubmitted && (
                  <div className="text-[11px] text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Redirecting you to WhatsApp with your details…
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            World-Class Procedures
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">High-Precision Medical Specialties</h2>
          <p className="text-slate-600 mt-3">
            Compare Iranian clinical excellence against Western benchmarks with transparent estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">{s.category}</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Save {s.savings}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.name.en}</h3>
                <div className="text-xs text-slate-500 flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-blue-600" /> Recovery: {s.recoveryDays}
                </div>

                {/* Mini timeline */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5">
                  <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-700">
                    <Activity className="w-4 h-4 text-blue-600" />
                    Recovery Timeline
                  </div>
                  <div className="space-y-2">
                    {s.timeline.slice(0, 3).map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="mt-0.5 inline-flex h-5 min-w-12 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 font-semibold px-2">
                          {t.label}
                        </span>
                        <span className="leading-relaxed">{t.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl mb-6 text-sm border border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Iran VIP Package:</span>
                    <span className="font-bold text-blue-600">{formatMoney(s.iranPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">India Benchmark:</span>
                    <span className="font-semibold text-slate-700">{formatMoney(s.indiaPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">UAE / Turkey:</span>
                    <span className="font-semibold text-slate-700">{formatMoney(s.uaeTurkeyPrice)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-200">
                    <span className="text-slate-500">US / UK Average:</span>
                    <span className="font-bold line-through text-slate-400">{formatMoney(s.usUkPrice)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedSpecialtyId(s.id);
                  const el = document.getElementById('calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm"
              >
                Configure Treatment <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="py-20 bg-slate-900 text-white px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full">
              Transparent Budgeting
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">Interactive Treatment Cost Estimator</h2>
            <p className="text-slate-400 mt-3">Customize your package tier and see savings instantly.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-800/50 border border-slate-700/60 p-6 sm:p-10 rounded-3xl">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">1. Select Medical Specialty</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-2">
                  {SPECIALTIES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSpecialtyId(s.id)}
                      className={`text-left p-3.5 rounded-2xl border transition flex flex-col justify-between ${
                        selectedSpecialtyId === s.id
                          ? 'bg-blue-600/20 border-blue-500 text-white'
                          : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span className="font-bold text-sm">{s.name.en}</span>
                      <span className="text-xs text-blue-300 mt-1 font-semibold">From {formatMoney(s.iranPrice)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">2. Select Service Tier</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(
                    [
                      { id: 'essential', name: 'Essential Care', desc: '+$500: Standard VIP + Hotel' },
                      { id: 'premium', name: 'Premium Comfort', desc: '+$1,200: 5-Star + Nurse' },
                      { id: 'elite', name: 'VIP Elite', desc: '+$2,400: Ultra Luxury + Security' },
                    ] as const
                  ).map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setPackageTier(tier.id)}
                      className={`p-4 rounded-2xl border text-left transition ${
                        packageTier === tier.id
                          ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                          : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-bold text-sm">{tier.name}</div>
                      <div className="text-[10px] opacity-80 mt-1">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-sm font-bold mb-3">
                  <HeartHandshake className="w-5 h-5 text-emerald-400" />
                  What your package includes
                </div>
                <ul className="text-xs text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                    VIP airport pickup, concierge coordination, and medical appointment management.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                    Hotel / recovery stay arrangement based on selected tier.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                    Support for medical travel documentation workflow (case-dependent).
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-900 p-8 rounded-3xl border border-blue-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Estimated Summary</span>
                  <span className="bg-emerald-500/20 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                    Save {formatMoney(savingsUSD)}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold mb-1">{selectedSpecialty.name.en}</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Package Tier: <span className="uppercase text-white font-bold">{packageTier}</span>
                </p>

                <div className="space-y-3 py-4 border-t border-b border-slate-700/60 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Base Medical Cost:</span>
                    <span className="font-bold">{formatMoney(selectedSpecialty.iranPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Tier Concierge & Stay:</span>
                    <span className="font-bold">{formatMoney(tierOffset)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-extrabold text-blue-200 pt-3 border-t border-slate-700">
                    <span>Total Estimate:</span>
                    <span>{formatMoney(iranTotalUSD)}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 leading-relaxed space-y-1 mb-8">
                  <p>✓ Estimates may vary based on clinical complexity, hospital selection, and physician plan.</p>
                  <p>✓ You can request a formal quote PDF from the header button.</p>
                </div>
              </div>

              <a
                href={`${WHATSAPP_LINK}?text=${buildWhatsAppText({
                  title: 'Booking Request - Maham Health',
                  treatment: selectedSpecialty.name.en,
                  tier: `${TIER_LABEL[packageTier]} (${packageTier.toUpperCase()})`,
                  estimate: formatMoney(iranTotalUSD),
                })}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-600/30 transition flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-5 h-5" /> Book This Package on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Hospitals */}
      <section id="clinics" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Excellence in Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Our Partner Hospitals</h2>
          <p className="text-slate-600 mt-3">
            We coordinate care with advanced medical centers equipped with modern technology and International Patient Departments (IPD).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINICS.map((clinic, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{clinic.name}</h3>
              <p className="text-xs text-blue-600 font-medium mb-3">{clinic.location}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{clinic.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Journey Process */}
      <section id="process" className="py-20 bg-slate-100 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">
              Seamless Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Your 5-Step Medical Journey</h2>
            <p className="text-slate-600 mt-3">
              From your first inquiry to a safe return home, Maham Health manages coordination end‑to‑end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Consultation & Review', desc: 'Submit records via WhatsApp or web form for evaluation.' },
              { step: '02', title: 'Quote & Treatment Plan', desc: 'Receive transparent estimate, itinerary, and next steps.' },
              { step: '03', title: 'Travel Coordination', desc: 'VIP pickup, hotel planning, and scheduling assistance.' },
              { step: '04', title: 'Procedure & Care', desc: 'Hospital coordination and concierge support during visits.' },
              { step: '05', title: 'Recovery & Return', desc: 'Follow-ups, discharge plan, and remote support.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-black text-blue-600/20">{item.step}</span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-extrabold text-slate-900">Fast‑Track Medical Travel Assurance</div>
                <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Coordinated support under Soorin Maham Trade & Industry Development Corporation. Documentation workflow and timing depend on case and submitted records.
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-700">
                <Star className="w-4 h-4 text-amber-500" />
                High‑Trust Concierge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Frequently Asked Questions</h2>
          <p className="text-slate-600 mt-3">Everything you need to know about traveling to Iran for care coordination.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#06101e] text-slate-400 py-16 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-800/60 flex items-center justify-center overflow-hidden">
                <Image src={LOGO_SRC} alt={LOGO_ALT} width={36} height={36} className="w-8 h-8 object-contain" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">MAHAM HEALTH</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              A premier medical-tourism concierge operated under Soorin Maham Trade & Industry Development Corporation.
              Connecting international patients with Iran&apos;s medical specialists.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Offices & Presence</h4>
            <ul className="space-y-2 text-xs">
              <li>Iran: Tehran & Shiraz</li>
              <li>Iran: Kish & Qeshm Free Zones</li>
              <li>Dubai, UAE</li>
              <li>Dar es Salaam, Tanzania</li>
              <li>Lucknow & Mumbai, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Specialties</h4>
            <ul className="space-y-2 text-xs">
              <li>Rhinoplasty & Facial Surgery</li>
              <li>Dental Implants</li>
              <li>LASIK</li>
              <li>Hair Transplant</li>
              <li>IVF</li>
              <li>Orthopedic Replacement</li>
              <li>Cardiology</li>
              <li>Oncology</li>
              <li>Bariatric Sleeve</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Direct Contact</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href={WHATSAPP_LINK} className="hover:text-white transition">
                  +98 905 524 0772
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>www.maham-group.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corporation. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="/disclaimer" className="hover:text-white transition">
              Medical Disclaimer
            </a>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      {quoteOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-slate-950/60"
            onClick={() => setQuoteOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-0 overflow-y-auto px-4 py-10">
            <div className="mx-auto max-w-3xl">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-slate-200 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      id="mh-quote-title"
                      tabIndex={-1}
                      className="text-lg sm:text-xl font-extrabold text-slate-900"
                    >
                      Branded Quote Summary
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Use Print to save as PDF. (Works with static export)
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuoteOpen(false)}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-700"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div ref={printRef} className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                      <Image src={LOGO_SRC} alt={LOGO_ALT} width={40} height={40} className="w-9 h-9 object-contain" />
                    </div>
                    <div className="leading-tight">
                      <div className="font-extrabold text-slate-900">MAHAM HEALTH</div>
                      <div className="text-[11px] text-slate-500 tracking-widest uppercase">Medical Tourism Concierge</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                      <div className="text-xs font-bold text-slate-700 mb-2">Treatment</div>
                      <div className="text-sm font-extrabold text-slate-900">{selectedSpecialty.name.en}</div>
                      <div className="text-xs text-slate-600 mt-2">Recovery: {selectedSpecialty.recoveryDays}</div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                      <div className="text-xs font-bold text-slate-700 mb-2">Package</div>
                      <div className="text-sm font-extrabold text-slate-900">{TIER_LABEL[packageTier]}</div>
                      <div className="text-xs text-slate-600 mt-2">Tier add-on: {formatMoney(tierOffset)}</div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:col-span-2">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-bold text-slate-700">Estimated Total</div>
                        <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                          Estimated savings: {formatMoney(savingsUSD)}
                        </div>
                      </div>
                      <div className="mt-2 text-2xl font-black text-[#0B3C95]">{formatMoney(iranTotalUSD)}</div>
                      <div className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                        This is an estimate for planning purposes. Final clinical pricing depends on diagnostics, surgeon plan, and hospital selection.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-[#08111d] text-slate-200 rounded-2xl p-4 border border-slate-800">
                    <div className="text-xs font-bold text-white mb-2">Contact</div>
                    <div className="text-xs text-slate-300 space-y-1">
                      <div>
                        WhatsApp: <span className="font-semibold text-white">+98 905 524 0772</span>
                      </div>
                      <div>
                        Email: <span className="font-semibold text-white">{EMAIL}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-2">
                        Operated under Soorin Maham Trade & Industry Development Corporation.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 border-t border-slate-200 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={handlePrintQuote}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg shadow-blue-600/20 transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Print / Save as PDF
                  </button>

                  <a
                    href={`${WHATSAPP_LINK}?text=${buildWhatsAppText({
                      title: 'Quote Confirmation - Maham Health',
                      name: patientName || undefined,
                      email: patientEmail || undefined,
                      phone: patientPhone || undefined,
                      treatment: selectedSpecialty.name.en,
                      tier: TIER_LABEL[packageTier],
                      estimate: formatMoney(iranTotalUSD),
                      notes: patientNotes || undefined,
                    })}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-4 h-4" /> Send Quote via WhatsApp
                  </a>
                </div>
              </div>

              <div className="text-center text-[11px] text-slate-300 mt-4">
                Tip: In the print dialog, choose “Save as PDF”.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
