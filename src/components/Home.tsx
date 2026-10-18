'use client';

import React, { useState, useEffect } from 'react';
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
import { SPECIALTIES_DATA } from '../data/specialties';
import { TRANSLATIONS, type Language } from '../data/translations';

type BenchmarkRegion = 'usUk' | 'uaeTurkey' | 'india';
type TierType = 'essential' | 'premium' | 'vip';

const SPECIALTIES = SPECIALTIES_DATA;
const I18N = TRANSLATIONS;

export default function Home({ initialLanguage = 'en' }: { initialLanguage?: Language }) {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>('rhinoplasty');
  const [benchmarkRegion, setBenchmarkRegion] = useState<BenchmarkRegion>('usUk');
  const [selectedTier, setSelectedTier] = useState<TierType>('vip');

  const [wizardStep, setWizardStep] = useState<number>(1);
  const [wizardSpecialty, setWizardSpecialty] = useState<string>('rhinoplasty');
  const [timeframe, setTimeframe] = useState<string>('immediate');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [medicalNotes, setMedicalNotes] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [wizardTier, setWizardTier] = useState<TierType>('vip');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const t = I18N[lang];
  const isRtl = lang === 'fa' || lang === 'ar' || lang === 'ur';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [lang, isRtl]);

  const selectedSpecialty = SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0];

  const benchmarkCost =
    benchmarkRegion === 'usUk'
      ? selectedSpecialty.usUkPrice
      : benchmarkRegion === 'uaeTurkey'
        ? selectedSpecialty.uaeTurkeyPrice
        : selectedSpecialty.indiaPrice;

  const tierCosts: Record<TierType, number> = {
    essential: 650,
    premium: 950,
    vip: 1400
  };

  const tierCost = tierCosts[selectedTier];
  const iranTotal = selectedSpecialty.iranPrice + tierCost;
  const totalSavings = Math.max(0, benchmarkCost - iranTotal);
  const savingsPct = benchmarkCost > 0 ? Math.round((totalSavings / benchmarkCost) * 100) : 0;

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const PACKAGE_LABELS: Record<TierType, string> = {
    essential: 'Essential Care',
    premium: 'Premium Care',
    vip: 'Luxury VIP'
  };

  const PACKAGE_COSTS: Record<TierType, number> = tierCosts;

  const getWhatsAppWizardLink = () => {
    const selectedPackageName = PACKAGE_LABELS[wizardTier];
    const selectedPackageCost = PACKAGE_COSTS[wizardTier];

    const text = encodeURIComponent(
      `Hello Maham Health,\n\nI would like to request a consultation:\n- Treatment: ${wizardSpecialty}\n- Timeframe: ${timeframe}\n- Age: ${age}\n- Gender: ${gender}\n- Name: ${fullName}\n- Country: ${country}\n- WhatsApp: ${whatsapp}\n- Email: ${email}\n- Selected Package: ${selectedPackageName} (+$${selectedPackageCost})\n\nMedical Notes:\n${medicalNotes}`
    );
    return `https://wa.me/989055240772?text=${text}`;
  };

  const validateStep = (step: number) => {
    if (step === 1) {
      return Boolean(wizardSpecialty);
    }
    if (step === 2) {
      return Boolean(age && age.trim() !== '');
    }
    return true;
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B3C95] flex items-center justify-center text-white font-bold text-xl shadow-md">
              M
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0B3C95] block leading-none">
                MAHAM HEALTH
              </span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                Soorin Maham Group
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
              {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded uppercase transition ${
                    lang === l ? 'bg-[#0B3C95] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="#consultation"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#0062E6] hover:bg-[#0B3C95] rounded-lg transition shadow-sm"
            >
              {t.startAssessment}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#0B3C95] text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-[#0062E6]" />
            {t.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3C95] tracking-tight max-w-4xl mx-auto leading-tight">
            {t.heroTitle}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            {t.heroSub}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#consultation"
              className="px-8 py-3.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl shadow-lg transition duration-200 flex items-center gap-2"
            >
              {t.startAssessment}
              <ArrowRight className="w-4 h-4" />
            </a>
            {/* Removed duplicate WhatsApp anchor here; global WhatsAppButton renders it in layout */}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0B3C95]">40+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statPartners}</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0B3C95]">180+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statSpecialists}</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0062E6]">70–90%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statSavings}</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-bold text-[#0B3C95]">&lt; 3 Days</div>
              <div className="text-xs text-slate-500 font-medium mt-1">{t.statWait}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator section */}
      <section className="py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0062E6] uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              Benchmark Analysis
            </div>
            <h2 className="text-3xl font-bold text-[#0B3C95]">{t.calculatorTitle}</h2>
            <p className="mt-3 text-slate-600">{t.calculatorSub}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.selectProcedure}
                </label>
                <select
                  value={selectedSpecialtyId}
                  onChange={(e) => setSelectedSpecialtyId(e.target.valu...