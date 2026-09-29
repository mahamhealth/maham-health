'use client';

import React, { useState } from 'react';
import {
  Shield,
  Award,
  Globe2,
  Clock,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Building2,
  UserCheck,
  Plane,
  HeartHandshake,
  Stethoscope,
  Send,
  Calendar,
  User,
  Mail,
  FileText,
  DollarSign,
  TrendingDown
} from 'lucide-react';
import { SPECIALTIES_DATA } from '@/data/specialties';
import { TRANSLATIONS, type Language } from '@/data/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [specialty, setSpecialty] = useState(SPECIALTIES_DATA[0]?.name || 'Rhinoplasty');
  const [timeframe, setTimeframe] = useState('1-3 months');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Female');
  const [notes, setNotes] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState<'Essential' | 'Luxury VIP'>('Luxury VIP');

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const isRtl = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      specialty,
      timeframe,
      age,
      gender,
      notes,
      name,
      country,
      whatsapp,
      email,
      tier,
      language: lang,
      submittedAt: new Date().toISOString()
    };

    try {
      await fetch('https://formspree.io/f/mqakdgrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch {
      // Direct patient seamlessly to WhatsApp regardless of network
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const selectedSpecialtyObj =
    SPECIALTIES_DATA.find((s) => s.name === specialty) || SPECIALTIES_DATA[0];

  const encodedWhatsappMsg = encodeURIComponent(
    `Hello Maham Health Concierge Desk,\n\nI have requested a medical assessment:\n- Name: ${name || 'Prospective Patient'}\n- Procedure: ${selectedSpecialtyObj?.name || specialty}\n- Preferred Timeframe: ${timeframe}\n- Country: ${country || 'International'}\n- Concierge Tier: ${tier}\n\nPlease advise on specialist availability and next steps.`
  );
  const whatsappUrl = `https://wa.me/255744956506?text=${encodedWhatsappMsg}`;

  return (
    <div className={`min-h-screen bg-[#08111d] text-slate-100 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-[#08111d]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Sparkles className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                MAHAM <span className="text-amber-400">HEALTH</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase block font-medium">
                Soorin Maham Group
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-lg p-1">
              <Globe2 className="w-4 h-4 text-slate-400 mx-1.5 hidden sm:block" />
              {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-semibold rounded uppercase transition ${
                    lang === l ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveModal(true);
                setStep(1);
                setSubmitted(false);
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition shadow-md shadow-amber-400/10"
            >
              <Stethoscope className="w-4 h-4" />
              {t.startConsultation}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/10 via-[#08111d]/50 to-[#08111d] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-6">
            <Shield className="w-3.5 h-3.5" />
            {t.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => {
                setActiveModal(true);
                setStep(1);
                setSubmitted(false);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2"
            >
              <span>{t.heroCta}</span>
              <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <a
              href="https://wa.me/255744956506"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              {t.whatsappDirect}
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">70–90%</div>
              <div className="text-xs text-slate-400 mt-1">{t.statSavings}</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-white">40+</div>
              <div className="text-xs text-slate-400 mt-1">{t.statHospitals}</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-white">180+</div>
              <div className="text-xs text-slate-400 mt-1">{t.statSurgeons}</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-white">&lt; 72h</div>
              <div className="text-xs text-slate-400 mt-1">{t.statVisa}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Benchmarks Table */}
      <section className="py-16 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              {t.tableHeading}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.tableSubheading}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#08111d] shadow-2xl">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/90 text-xs uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th scope="col" className="px-6 py-4">{t.colProcedure}</th>
                  <th scope="col" className="px-6 py-4 text-amber-400 font-bold bg-amber-400/5 border-x border-amber-400/20">
                    {t.colIran}
                  </th>
                  <th scope="col" className="px-6 py-4">{t.colIndia}</th>
                  <th scope="col" className="px-6 py-4">{t.colUae}</th>
                  <th scope="col" className="px-6 py-4">{t.colUs}</th>
                  <th scope="col" className="px-6 py-4 text-center">{t.colAction}</th>
                </tr>
              </thead>
              <tbody className="divide-y border-slate-800/60">
                {SPECIALTIES_DATA.map((spec) => (
                  <tr key={spec.name} className="hover:bg-slate-900/40 transition">
                    <td className="px-6 py-4 font-semibold text-white">
                      <div className="flex items-center gap-2">
                        <span>{spec.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-normal">
                          {spec.recoveryDays} {t.daysStay}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-amber-400 bg-amber-400/5 border-x border-amber-400/10">
                      <div>${spec.mahamIranPrice?.toLocaleString()}</div>
                      <div className="text-[10px] font-normal text-emerald-400 flex items-center gap-0.5">
                        <TrendingDown className="w-3 h-3" />
                        {spec.savings}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      ${spec.indiaPrice?.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      ${spec.uaeTurkeyPrice?.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      ${spec.usUkPrice?.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          setSpecialty(spec.name);
                          setActiveModal(true);
                          setStep(1);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 hover:bg-amber-400 hover:text-slate-950 transition"
                      >
                        {t.bookConsult}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Concierge Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              {t.tierHeading}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.tierSubheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Essential Care */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  {t.essentialTitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.essentialPrice}</h3>
                <p className="text-sm text-slate-400 mb-6">{t.essentialDesc}</p>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{t.f1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{t.f2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{t.f3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{t.f4}</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setTier('Essential');
                  setActiveModal(true);
                  setStep(1);
                }}
                className="w-full py-3 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm transition"
              >
                {t.selectEssential}
              </button>
            </div>

            {/* Luxury VIP */}
            <div className="rounded-2xl border-2 border-amber-400/80 bg-gradient-to-b from-slate-900 to-[#08111d] p-8 flex flex-col justify-between relative shadow-2xl shadow-amber-400/5">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-200 text-slate-950 text-[11px] font-extrabold uppercase tracking-wide">
                {t.vipBadge}
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-2">
                  {t.vipTitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.vipPrice}</h3>
                <p className="text-sm text-slate-400 mb-6">{t.vipDesc}</p>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="font-medium text-white">{t.v1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="font-medium text-white">{t.v2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="font-medium text-white">{t.v3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="font-medium text-white">{t.v4}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="font-medium text-white">{t.v5}</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setTier('Luxury VIP');
                  setActiveModal(true);
                  setStep(1);
                }}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-400/20"
              >
                {t.selectVip}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://wa.me/255744956506?text=Hello%20Maham%20Health%20Concierge%20Desk%2C%20I%20would%20like%20to%20inquire%20about%20medical%20travel%20options."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Maham Health on WhatsApp"
        title="WhatsApp Concierge • مشاور واتساپ"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-full shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
        <span className="text-xs hidden sm:inline-block">WhatsApp Concierge • مشاور واتساپ</span>
      </a>

      {/* Consultation Modal Wizard */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.modalTitle}</h3>
                    <p className="text-xs text-slate-400">{t.modalSubtitle}</p>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    Step {step} of 3
                  </span>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          {t.labelSpecialty}
                        </label>
                        <select
                          value={specialty}
                          onChange={(e) => setSpecialty(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                        >
                          {SPECIALTIES_DATA.map((s) => (
                            <option key={s.name} value={s.name}>
                              {s.name} (~${s.mahamIranPrice?.toLocaleString()})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          {t.labelTimeframe}
                        </label>
                        <select
                          value={timeframe}
                          onChange={(e) => setTimeframe(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                          <option value="1-3 months">1–3 months</option>
                          <option value="3-6 months">3–6 months</option>
                          <option value="Just researching">Just researching</option>
                        </select>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition"
                        >
                          {t.btnNext}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            {t.labelAge}
                          </label>
                          <input
                            type="number"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="e.g. 38"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            {t.labelGender}
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                          >
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          {t.labelNotes}
                        </label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder={t.placeholderNotes}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-sm"
                        >
                          {t.btnBack}
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition"
                        >
                          {t.btnNext}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          {t.labelName}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Full Name"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            {t.labelCountry}
                          </label>
                          <input
                            type="text"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="e.g. Tanzania, UAE, UK"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            {t.labelWhatsapp}
                          </label>
                          <input
                            type="tel"
                            required
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="+255..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          {t.labelEmail}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="patient@example.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-sm"
                        >
                          {t.btnBack}
                        </button>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="px-8 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition disabled:opacity-50"
                        >
                          {submitting ? t.btnSubmitting : t.btnSubmit}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              /* Success Handoff */
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.successTitle}</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                  {t.successSubtitle}
                </p>
                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.openWhatsappNow}
                  </a>
                  <button
                    onClick={() => setActiveModal(false)}
                    className="w-full py-2.5 text-xs text-slate-400 hover:text-slate-200"
                  >
                    {t.closeWindow}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corp. All rights reserved.</p>
          <p>Maham Health Medical Concierge • health@maham-group.com</p>
        </div>
      </footer>
    </div>
  );
}
