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
  ArrowRight,
  Check
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

  const t = I18N[lang] || I18N['en'];
  const isRtl = lang === 'fa' || lang === 'ar' || lang === 'ur';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [lang, isRtl]);

  const selectedSpecialty =
    SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0];

  const benchmarkCost =
    benchmarkRegion === 'usUk'
      ? selectedSpecialty.usUkPrice
      : benchmarkRegion === 'uaeTurkey'
        ? selectedSpecialty.uaeTurkeyPrice
        : selectedSpecialty.indiaPrice;

  const tierCost = selectedTier === 'vip' ? 1400 : selectedTier === 'premium' ? 950 : 650;
  const iranTotal = selectedSpecialty.iranPrice + tierCost;
  const totalSavings = Math.max(0, benchmarkCost - iranTotal);
  const savingsPct =
    benchmarkCost > 0 ? Math.round((totalSavings / benchmarkCost) * 100) : 0;

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
    if (step === 1) return Boolean(wizardSpecialty);
    if (step === 2) return Boolean(age && age.trim() !== '');
    return true;
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <a
        href="https://wa.me/989055240772"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${
          isRtl ? 'left-6' : 'right-6'
        } z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:bg-[#20ba5a] transition duration-200`}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm">WhatsApp</span>
      </a>

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
                    lang === l
                      ? 'bg-[#0B3C95] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
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

      {/* Calculator Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0B3C95]">{t.calculatorTitle}</h2>
            <p className="mt-2 text-slate-600">{t.calculatorSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                {t.selectProcedure}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {SPECIALTIES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSpecialtyId(s.id)}
                    className={`p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                      selectedSpecialtyId === s.id
                        ? 'bg-[#0B3C95] text-white border-[#0B3C95] shadow-md'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <span className="font-medium text-sm">{s.name[lang] || s.name.en}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.benchmarkRegion}
                  </label>
                  <select
                    value={benchmarkRegion}
                    onChange={(e) => setBenchmarkRegion(e.target.value as BenchmarkRegion)}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0062E6]"
                  >
                    <option value="usUk">{t.usUk}</option>
                    <option value="uaeTurkey">{t.uaeTurkey}</option>
                    <option value="india">{t.india}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.conciergeTier}
                  </label>
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value as TierType)}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0062E6]"
                  >
                    <option value="essential">{t.tierEssential}</option>
                    <option value="premium">{t.tierPremium}</option>
                    <option value="vip">{t.tierVip}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="bg-[#08111d] text-white p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold mb-6 text-blue-100">{t.costBreakdown}</h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">{t.benchmarkCost}</span>
                  <span className="font-semibold">${benchmarkCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">{t.iranBase}</span>
                  <span className="font-semibold">${selectedSpecialty.iranPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">{t.conciergeAddon}</span>
                  <span className="font-semibold">+${tierCost}</span>
                </div>
                <div className="flex justify-between pt-2 text-base font-bold text-blue-400">
                  <span>{t.estimatedSavings}</span>
                  <span>${totalSavings.toLocaleString()} ({savingsPct}%)</span>
                </div>
              </div>

              <a
                href="#consultation"
                className="mt-8 w-full block text-center py-3.5 bg-[#0062E6] hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition"
              >
                {t.proceedWithConsultation}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Wizard Section */}
      <section id="consultation" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B3C95]">{t.wizardTitle}</h2>
            <p className="mt-2 text-slate-600">{t.wizardSub}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B3C95]">{t.successTitle || "Assessment Complete!"}</h3>
                <p className="mt-2 text-slate-600 max-w-md mx-auto">
                  {t.successSub || "Click below to securely forward your case details to our medical coordinators via WhatsApp."}
                </p>
                <a
                  href={getWhatsAppWizardLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.sendToWhatsApp || "Send Details to WhatsApp"}
                </a>
              </div>
            ) : (
              <form onSubmit={handleWizardSubmit}>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                  <span className="text-sm font-bold text-[#0B3C95]">
                    Step {wizardStep} of 3
                  </span>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-8 h-2 rounded-full transition ${
                          wizardStep >= s ? 'bg-[#0062E6]' : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {wizardStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800">{t.step1Title || "Select Your Treatment"}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SPECIALTIES.map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => setWizardSpecialty(s.id)}
                          className={`p-3.5 rounded-xl border text-left transition ${
                            wizardSpecialty === s.id
                              ? 'bg-[#0B3C95] text-white border-[#0B3C95]'
                              : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                          }`}
                        >
                          <span className="font-medium text-sm">{s.name[lang] || s.name.en}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {wizardStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800">{t.step2Title || "Patient Details & Timeframe"}</h3>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Age</label>
                      <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="e.g. 34"
                        className="w-full p-3 bg-white border border-slate-300 rounded-xl text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Gender</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            checked={gender === 'male'}
                            onChange={() => setGender('male')}
                          />
                          <span>Male</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            checked={gender === 'female'}
                            onChange={() => setGender('female')}
                          />
                          <span>Female</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Timeframe</label>
                      <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full p-3 bg-white border border-slate-300 rounded-xl text-sm"
                      >
                        <option value="immediate">Immediate (&lt; 2 weeks)</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">Within 3 months</option>
                      </select>
                    </div>
                  </div>
                )}

                {wizardStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800">{t.step3Title || "Contact & Concierge Tier"}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full p-3 border border-slate-300 rounded-xl text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Country</label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full p-3 border border-slate-300 rounded-xl text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">WhatsApp Number</label>
                        <input
                          type="text"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+1..."
                          className="w-full p-3 border border-slate-300 rounded-xl text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-3 border border-slate-300 rounded-xl text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Concierge Package Tier</label>
                      <select
                        value={wizardTier}
                        onChange={(e) => setWizardTier(e.target.value as TierType)}
                        className="w-full p-3 border border-slate-300 rounded-xl text-sm"
                      >
                        <option value="essential">Essential Care (+$650)</option>
                        <option value="premium">Premium Care (+$950)</option>
                        <option value="vip">Luxury VIP (+$1,400)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between pt-4 border-t border-slate-200">
                  {wizardStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setWizardStep(wizardStep - 1)}
                      className="px-6 py-2.5 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition"
                    >
                      Back
                    </button>
                  )}
                  {wizardStep < 3 ? (
                    <button
                      type="button"
                      disabled={!validateStep(wizardStep)}
                      onClick={() => setWizardStep(wizardStep + 1)}
                      className="ml-auto px-6 py-2.5 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl transition disabled:opacity-50"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-8 py-3 bg-[#0062E6] hover:bg-[#0B3C95] text-white font-semibold rounded-xl shadow-lg transition"
                    >
                      Complete Assessment
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#08111d] text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold text-white">Maham Health — Soorin Maham Trade & Industry Development Corporation</p>
          <p className="mt-2 text-xs text-slate-500">
            Medical Tourism Concierge Services • Iran, UAE, India, Tanzania
          </p>
        </div>
      </footer>
    </div>
  );
}
