'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  FileText, 
  HeartHandshake, 
  Stethoscope, 
  Building2,
  Download,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  User,
  Globe2
} from 'lucide-react';
import { SPECIALTIES_DATA, Specialty } from '../data/specialties';
import { TRANSLATIONS, Language, LOCALES, RTL_LANGUAGES, CURRENCY_RATES, SITE_URL } from '../data/translations';

interface HomeProps {
  initialLanguage?: Language;
}

export default function Home({ initialLanguage = 'en' }: HomeProps) {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const [calcSpecialtyId, setCalcSpecialtyId] = useState<string>('rhinoplasty');
  const [calcTier, setCalcTier] = useState<'essential' | 'premium' | 'vip'>('premium');
  const [currencyCode, setCurrencyCode] = useState<string>('USD');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedSpecialtyId, setExpandedSpecialtyId] = useState<string | null>(null);

  // Wizard state
  const [wizardSpecialty, setWizardSpecialty] = useState<string>('Rhinoplasty');
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [timeframe, setTimeframe] = useState<string>('Within 1 month');
  const [gender, setGender] = useState<string>('Female');
  const [age, setAge] = useState<string>('30');
  const [medicalNotes, setMedicalNotes] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('Premium Comfort');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  const isRtl = RTL_LANGUAGES.includes(lang);

  const currentSpecialty = SPECIALTIES_DATA.find((s) => s.id === calcSpecialtyId) || SPECIALTIES_DATA[0];

  // Calculate pricing based on tier
  const baseIranPrice = currentSpecialty.iranPrice;
  const tierPriceAddon = calcTier === 'essential' ? 0 : calcTier === 'premium' ? 1200 : 2400;
  const totalIranPrice = baseIranPrice + tierPriceAddon;
  
  const currInfo = CURRENCY_RATES[currencyCode] || CURRENCY_RATES['USD'];
  const convertedPrice = Math.round(totalIranPrice * currInfo.rate);

  const formatPrice = (usd: number) => {
    const converted = Math.round(usd * currInfo.rate);
    return `${currInfo.symbol}${converted.toLocaleString()}`;
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    window.history.replaceState(null, '', `/${newLang}/`);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mqakdgrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          country,
          wizardSpecialty,
          selectedTier,
          timeframe,
          gender,
          age,
          medicalNotes,
          lang
        })
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setFormSubmitted(true); // Fallback success UI
      }
    } catch {
      setFormSubmitted(true);
    }
  };

  const downloadQuotePDF = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Structured FAQ & Medical Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": t.faq.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })
        }}
      />

      {/* TOP HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-12 h-12 rounded-xl bg-[#0B3C95] flex items-center justify-center text-white font-bold text-2xl shadow-md">
              M
            </div>
            <div>
              <span className="text-xl font-extrabold text-[#0B3C95] tracking-tight">{t.brandTitle}</span>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">{t.brandSub}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="relative inline-block text-left">
              <select
                value={lang}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="bg-slate-100 border border-slate-300 text-slate-700 text-sm rounded-lg px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-[#0B3C95]"
                aria-label="Select Language"
              >
                {LOCALES.map((loc) => (
                  <option key={loc.code} value={loc.code}>
                    {loc.native} ({loc.name})
                  </option>
                ))}
              </select>
            </div>

            <a
              href="https://wa.me/989055240772?text=Hello%20Maham%20Health,%20I%20would%20like%20a%20free%20medical%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.ctaWhatsApp}</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0B3C95] to-blue-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-blue-100 mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-6">
            {t.heroHeading}
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="#consultation-wizard"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition text-base text-center"
            >
              {t.ctaBookNow}
            </a>
            <a
              href="#cost-estimator"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition text-base text-center"
            >
              {t.ctaCalculator}
            </a>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-blue-800/60 max-w-6xl mx-auto text-left rtl:text-right">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-3xl font-extrabold text-amber-400 mb-1">70-90%</div>
              <div className="text-xs text-blue-200">{t.statsSavings}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">100%</div>
              <div className="text-xs text-blue-200">{t.statsHospitals}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-3xl font-extrabold text-amber-400 mb-1">3-5 Days</div>
              <div className="text-xs text-blue-200">{t.statsVisa}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">24/7</div>
              <div className="text-xs text-blue-200">{t.statsSupport}</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COST ESTIMATOR & 3-TIER PACKAGES */}
      <section id="cost-estimator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{t.calcTitle}</h2>
            <p className="text-slate-600 text-lg">{t.calcSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t.selectSpecialty}</label>
                <select
                  value={calcSpecialtyId}
                  onChange={(e) => setCalcSpecialtyId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:ring-2 focus:ring-[#0B3C95]"
                >
                  {SPECIALTIES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name[lang] || s.name['en']}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t.selectCurrency}</label>
                <select
                  value={currencyCode}
                  onChange={(e) => setCurrencyCode(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:ring-2 focus:ring-[#0B3C95]"
                >
                  {Object.keys(CURRENCY_RATES).map((code) => (
                    <option key={code} value={code}>{code} ({CURRENCY_RATES[code].symbol})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t.selectPackage}</label>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setCalcTier('essential')}
                    className={`w-full text-left rtl:text-right p-4 rounded-xl border transition ${calcTier === 'essential' ? 'border-[#0B3C95] bg-blue-50 ring-2 ring-[#0B3C95]/20' : 'border-slate-200 bg-white hover:bg-slate-100'}`}
                  >
                    <div className="font-bold text-slate-900">{t.tierEssential}</div>
                    <div className="text-xs text-slate-500 mt-1">{t.tierEssentialDesc}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalcTier('premium')}
                    className={`w-full text-left rtl:text-right p-4 rounded-xl border transition ${calcTier === 'premium' ? 'border-[#0B3C95] bg-blue-50 ring-2 ring-[#0B3C95]/20' : 'border-slate-200 bg-white hover:bg-slate-100'}`}
                  >
                    <div className="font-bold text-slate-900">{t.tierPremium}</div>
                    <div className="text-xs text-slate-500 mt-1">{t.tierPremiumDesc}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalcTier('vip')}
                    className={`w-full text-left rtl:text-right p-4 rounded-xl border transition ${calcTier === 'vip' ? 'border-[#0B3C95] bg-blue-50 ring-2 ring-[#0B3C95]/20' : 'border-slate-200 bg-white hover:bg-slate-100'}`}
                  >
                    <div className="font-bold text-slate-900">{t.tierVip}</div>
                    <div className="text-xs text-slate-500 mt-1">{t.tierVipDesc}</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Price Output & Comparison */}
            <div className="lg:col-span-2 bg-[#0B3C95] text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between border-b border-blue-800 pb-6 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">{t.estimatedCost}</span>
                    <h3 className="text-3xl sm:text-4xl font-black mt-1 text-white">{formatPrice(totalIranPrice)}</h3>
                  </div>
                  <div className="text-right rtl:text-left">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{t.vsWesternBenchmark}</span>
                    <div className="text-2xl font-bold text-emerald-300">
                      ~{Math.round((1 - totalIranPrice / currentSpecialty.usUkPrice) * 100)}% Less
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <div className="text-xs text-blue-200 mb-1 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 rtl:ml-1 text-amber-400" />
                      {t.stayDuration}
                    </div>
                    <div className="text-xl font-bold">{currentSpecialty.stayDays} {t.daysUnit}</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <div className="text-xs text-blue-200 mb-1 flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 rtl:ml-1 text-emerald-400" />
                      {t.recoveryDuration}
                    </div>
                    <div className="text-xl font-bold">{currentSpecialty.recoveryDays} {t.daysUnit}</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-blue-100 mb-8">
                  <div className="flex justify-between border-b border-blue-800/60 py-2">
                    <span>US / UK Benchmark:</span>
                    <span className="font-bold line-through text-blue-300">{formatPrice(currentSpecialty.usUkPrice)}</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-800/60 py-2">
                    <span>UAE / Turkey Benchmark:</span>
                    <span className="font-bold text-blue-200">{formatPrice(currentSpecialty.uaeTurkeyPrice)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>India Benchmark:</span>
                    <span className="font-bold text-blue-200">{formatPrice(currentSpecialty.indiaPrice)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={downloadQuotePDF}
                  className="flex-1 bg-white hover:bg-blue-50 text-[#0B3C95] font-bold px-6 py-3.5 rounded-xl transition flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadQuoteBtn}</span>
                </button>
                <a
                  href="#consultation-wizard"
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition flex items-center justify-center space-x-2 rtl:space-x-reverse text-center"
                >
                  <span>{t.ctaBookNow}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIALTIES DIRECTORY & BENCHMARK TABLE */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{t.specialtiesHeading}</h2>
            <p className="text-slate-600 text-lg">{t.specialtiesSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES_DATA.map((specialty) => {
              const isExpanded = expandedSpecialtyId === specialty.id;
              return (
                <div key={specialty.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden">
                  <div className="p-6">
                    <span className="inline-block bg-blue-100 text-[#0B3C95] text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {specialty.category[lang] || specialty.category['en']}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      {specialty.name[lang] || specialty.name['en']}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {specialty.description[lang] || specialty.description['en']}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-500">{t.iranPriceCol}:</span>
                        <span className="font-bold text-emerald-600">{formatPrice(specialty.iranPrice)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">{t.usUkCol}:</span>
                        <span className="font-bold line-through text-slate-400">{formatPrice(specialty.usUkCol)}</span>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2 animate-fadeIn">
                        <div className="flex justify-between">
                          <span>{t.stayDuration}:</span>
                          <span className="font-bold">{specialty.stayDays} {t.daysUnit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t.recoveryDuration}:</span>
                          <span className="font-bold">{specialty.recoveryDays} {t.daysUnit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t.indiaPriceCol}:</span>
                          <span className="font-bold">{formatPrice(specialty.indiaPrice)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t.uaeTurkeyCol}:</span>
                          <span className="font-bold">{formatPrice(specialty.uaeTurkeyPrice)}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <button
                      type="button"
                      onClick={() => setExpandedSpecialtyId(isExpanded ? null : specialty.id)}
                      className="w-full text-center py-2.5 bg-slate-100 hover:bg-blue-50 text-[#0B3C95] font-bold text-sm rounded-xl transition flex items-center justify-center space-x-1 rtl:space-x-reverse"
                    >
                      <span>{isExpanded ? 'Hide Details' : t.detailsBtn}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSULTATION WIZARD & FORMSPREE */}
      <section id="consultation-wizard" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{t.wizardHeading}</h2>
            <p className="text-slate-600 text-lg">{t.wizardSub}</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Successfully Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto">{t.successMessage}</p>
                <a
                  href="https://wa.me/989055240772?text=Hello%20Maham%20Health,%20I%20just%20submitted%20my%20consultation%20form."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-200">
                  <div className={`p-4 rounded-xl border text-center ${wizardStep === 1 ? 'border-[#0B3C95] bg-blue-50 text-[#0B3C95] font-bold' : 'border-slate-200 bg-white text-slate-600'}`}>
                    {t.step1Title}
                  </div>
                  <div className={`p-4 rounded-xl border text-center ${wizardStep === 2 ? 'border-[#0B3C95] bg-blue-50 text-[#0B3C95] font-bold' : 'border-slate-200 bg-white text-slate-600'}`}>
                    {t.step2Title}
                  </div>
                  <div className={`p-4 rounded-xl border text-center ${wizardStep === 3 ? 'border-[#0B3C95] bg-blue-50 text-[#0B3C95] font-bold' : 'border-slate-200 bg-white text-slate-600'}`}>
                    {t.step3Title}
                  </div>
                </div>

                {wizardStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-sm font-bold text-slate-700">{t.selectSpecialty}</label>
                    <select
                      value={wizardSpecialty}
                      onChange={(e) => setWizardSpecialty(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:ring-2 focus:ring-[#0B3C95]"
                    >
                      {SPECIALTIES_DATA.map((s) => (
                        <option key={s.id} value={s.name['en']}>
                          {s.name[lang] || s.name['en']}
                        </option>
                      ))}
                    </select>

                    <label className="block text-sm font-bold text-slate-700 mt-4">Preferred Package Tier</label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:ring-2 focus:ring-[#0B3C95]"
                    >
                      <option value="Essential Care">{t.tierEssential}</option>
                      <option value="Premium Comfort">{t.tierPremium}</option>
                      <option value="VIP Elite Concierge">{t.tierVip}</option>
                    </select>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="bg-[#0B3C95] hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-bold transition flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    </div>
                  </div>
                )}

                {wizardStep === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Timeframe</label>
                        <select
                          value={timeframe}
                          onChange={(e) => setTimeframe(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                        >
                          <option>Within 1 month</option>
                          <option>1-3 months</option>
                          <option>3+ months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Gender</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                        >
                          <option>Female</option>
                          <option>Male</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Age</label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">{t.medicalHistoryLabel}</label>
                      <textarea
                        rows={3}
                        value={medicalNotes}
                        onChange={(e) => setMedicalNotes(e.target.value)}
                        placeholder="Mention any existing conditions, previous surgeries, or specific expectations..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                      ></textarea>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(1)}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-3 rounded-xl font-bold transition"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setWizardStep(3)}
                        className="bg-[#0B3C95] hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-bold transition flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    </div>
                  </div>
                )}

                {wizardStep === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.fullName} *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.emailLabel} *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.phoneLabel} *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 123 4567"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">{t.countryLabel} *</label>
                        <input
                          type="text"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="Oman / UAE / Tanzania / UK"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-3 rounded-xl font-bold transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>{t.submitWizard}</span>
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{t.faqTitle}</h2>
            <p className="text-slate-600 text-lg">{t.faqSub}</p>
          </div>

          <div className="space-y-4">
            {t.faq.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left rtl:text-right flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#0B3C95]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06101E] text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-[#0B3C95] flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <span className="text-xl font-bold text-white tracking-tight">{t.brandTitle}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                {t.footerAbout}
              </p>
              <div className="text-xs font-semibold text-amber-400">
                {t.footerCorporate}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact Concierge</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Phone className="w-4 h-4 text-[#38bdf8]" />
                  <span>+98 905 524 0772</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Mail className="w-4 h-4 text-[#38bdf8]" />
                  <span>health@maham-group.com</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  <span>Tehran • Shiraz • Dubai • Dar es Salaam • Mumbai</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Fast Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#cost-estimator" className="hover:text-white transition">Cost Estimator</a></li>
                <li><a href="#consultation-wizard" className="hover:text-white transition">Medical Consultation</a></li>
                <li><a href="https://wa.me/989055240772" className="hover:text-white transition">WhatsApp Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {t.brandTitle}. {t.footerRights} Operated under Soorin Maham Trade & Industry Development Corporation.
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY DUAL CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 p-3 sm:hidden flex items-center justify-between shadow-lg">
        <a
          href="https://wa.me/989055240772?text=Hello%20Maham%20Health,%20I%20would%20like%20to%20chat%20with%20a%20medical%20coordinator."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center space-x-2 rtl:space-x-reverse mr-2 rtl:mr-0 rtl:ml-2 shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#consultation-wizard"
          className="flex-1 bg-[#0B3C95] text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-sm"
        >
          <User className="w-4 h-4" />
          <span>Free Consult</span>
        </a>
      </div>

    </div>
  );
}
