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
type TierType = 'essential' | 'vip';

const SPECIALTIES = SPECIALTIES_DATA;
const I18N = TRANSLATIONS;

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
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

  const tierCost = selectedTier === 'vip' ? 1400 : 650;
  const iranTotal = selectedSpecialty.iranPrice + tierCost;
  const totalSavings = Math.max(0, benchmarkCost - iranTotal);
  const savingsPct = benchmarkCost > 0 ? Math.round((totalSavings / benchmarkCost) * 100) : 0;

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppWizardLink = () => {
    const text = encodeURIComponent(
      `Hello Maham Health,

I would like to request a consultation:
- Treatment: ${wizardSpecialty}
- Timeframe: ${timeframe}
- Age: ${age}
- Gender: ${gender}
- Name: ${fullName}
- Country: ${country}
- WhatsApp: ${whatsapp}
- Email: ${email}
- Selected Tier: ${wizardTier}

Medical Notes:
${medicalNotes}`
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
            <a
              href="https://wa.me/989055240772"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white border border-slate-300 text-slate-700 hover:border-[#0062E6] font-semibold rounded-xl shadow-sm transition duration-200 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              {t.whatsappDirect}
            </a>
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
                  onChange={(e) => setSelectedSpecialtyId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
                <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Typical recovery: {selectedSpecialty.recoveryDays}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.compareAgainst}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBenchmarkRegion('usUk')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border text-center transition ${
                      benchmarkRegion === 'usUk'
                        ? 'bg-[#0B3C95] border-[#0B3C95] text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    US / UK
                  </button>
                  <button
                    type="button"
                    onClick={() => setBenchmarkRegion('uaeTurkey')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border text-center transition ${
                      benchmarkRegion === 'uaeTurkey'
                        ? 'bg-[#0B3C95] border-[#0B3C95] text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    UAE / Turkey
                  </button>
                  <button
                    type="button"
                    onClick={() => setBenchmarkRegion('india')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border text-center transition ${
                      benchmarkRegion === 'india'
                        ? 'bg-[#0B3C95] border-[#0B3C95] text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    India
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.packageTier}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedTier('essential')}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      selectedTier === 'essential'
                        ? 'bg-blue-50/50 border-[#0062E6] text-[#0B3C95]'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div className="font-bold text-sm">Essential Care</div>
                    <div className="text-xs text-slate-500 mt-0.5">+$650 (Transfers + Interpreter)</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTier('vip')}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      selectedTier === 'vip'
                        ? 'bg-blue-50/50 border-[#0062E6] text-[#0B3C95]'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div className="font-bold text-sm">Luxury VIP</div>
                    <div className="text-xs text-slate-500 mt-0.5">+$1,400 (5★ Suite + Private Escort)</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B3C95] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                  Cost Breakdown
                </div>
                <div className="mt-4 pb-4 border-b border-blue-800 flex justify-between items-center text-sm">
                  <span className="text-blue-100">Selected Benchmark Cost</span>
                  <span className="font-semibold line-through text-blue-300">
                    ${benchmarkCost.toLocaleString()}
                  </span>
                </div>
                <div className="mt-4 pb-4 border-b border-blue-800 flex justify-between items-center text-sm">
                  <span className="text-blue-100">Base Iran Clinical Cost</span>
                  <span className="font-semibold">${selectedSpecialty.iranPrice.toLocaleString()}</span>
                </div>
                <div className="mt-4 pb-4 border-b border-blue-800 flex justify-between items-center text-sm">
                  <span className="text-blue-100">Concierge Services</span>
                  <span className="font-semibold">${tierCost.toLocaleString()}</span>
                </div>
                <div className="mt-6">
                  <div className="text-xs font-medium text-blue-200">{t.estimatedTotal}</div>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    ${iranTotal.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-800">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-xs font-semibold text-blue-200">{t.estimatedSavings}</div>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    ${totalSavings.toLocaleString()}{' '}
                    <span className="text-sm font-semibold text-emerald-400">({savingsPct}% Saved)</span>
                  </div>
                </div>
                <a
                  href="#consultation"
                  className="mt-4 w-full py-3 bg-[#0062E6] hover:bg-blue-600 text-white font-semibold rounded-xl transition text-center block"
                >
                  Book Treatment at This Price
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B3C95]">Schedule Confidential Assessment</h2>
            <p className="mt-2 text-slate-600 text-sm">
              Direct connection to medical directors and personalized quotation within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Successfully Received</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our senior international medical coordinator is reviewing your submission and will contact you via WhatsApp shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={getWhatsAppWizardLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl shadow-md transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Open in WhatsApp Directly
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-3 gap-2 mb-8 pb-6 border-b border-slate-100 text-center">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`text-xs font-bold py-1 border-b-2 ${
                        wizardStep === step ? 'border-[#0062E6] text-[#0062E6]' : 'border-transparent text-slate-400'
                      }`}
                    >
                      {step}. {step === 1 ? 'Treatment' : step === 2 ? 'Profile' : 'Contact'}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleWizardSubmit}>
                  {wizardStep === 1 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Select Required Specialty / Treatment
                        </label>
                        <select
                          value={wizardSpecialty}
                          onChange={(e) => setWizardSpecialty(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        >
                          {SPECIALTIES.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={() => {
                            if (validateStep(1)) {
                              setWizardStep(2);
                            }
                          }}
                          className="px-6 py-2.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl transition flex items-center gap-2"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {wizardStep === 2 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Patient Age
                          </label>
                          <input
                            type="number"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="e.g. 38"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Gender
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          >
                            <option value="male">{t.male}</option>
                            <option value="female">{t.female}</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Preferred Travel Timeframe
                        </label>
                        <select
                          value={timeframe}
                          onChange={(e) => setTimeframe(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        >
                          <option value="immediate">Immediate (within 2 weeks)</option>
                          <option value="1month">Within 1 month</option>
                          <option value="planning">Exploring options / 2–3 months</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Medical History & Specific Requirements
                        </label>
                        <textarea
                          rows={3}
                          value={medicalNotes}
                          onChange={(e) => setMedicalNotes(e.target.value)}
                          placeholder="Describe condition, current medications, or previous surgeries..."
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none text-sm"
                        />
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setWizardStep(1)}
                          className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl transition"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (validateStep(2)) {
                              setWizardStep(3);
                            }
                          }}
                          className="px-6 py-2.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl transition flex items-center gap-2"
                        >
                          Next Step <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {wizardStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1">
                            Country of Residence
                          </label>
                          <input
                            type="text"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="e.g. Tanzania, UAE, India"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1">
                            WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="+1234567890"
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">
                          Concierge Package Preference
                        </label>
                        <select
                          value={wizardTier}
                          onChange={(e) => setWizardTier(e.target.value as TierType)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#0062E6] focus:outline-none"
                        >
                          <option value="essential">Essential Care Package</option>
                          <option value="vip">Luxury VIP Concierge Package</option>
                        </select>
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setWizardStep(2)}
                          className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl transition"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-2.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl transition shadow-md flex items-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          {t.submit}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-lg">MAHAM HEALTH</div>
            <p className="text-xs text-slate-400 mt-1">
              Part of Soorin Maham Trade & Industry Development Corp.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <span>Inquiries: health@maham-group.com</span>
            <span>WhatsApp: +98 905 524 0772</span>
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Maham Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
