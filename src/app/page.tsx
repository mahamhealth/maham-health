'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  PiggyBank, 
  Clock, 
  Check, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight,
  Globe2,
  X,
  Star,
  Award,
  Crown,
  Plane,
  HeartPulse
} from 'lucide-react';
import { TRANSLATIONS, type Language } from '@/data/translations';
import { SPECIALTIES_DATA } from '@/data/specialties';

const FORM_ENDPOINT = "https://formspree.io/f/mjykapno";
const OFFICIAL_WHATSAPP_NUMBER = "255744956506";
const OFFICIAL_WHATSAPP_DISPLAY = "+255 744 956 506";

export type PackageChoice = 'essential' | 'premium' | 'luxury';

export type ConsultationForm = {
  specialty: string;
  timeframe: string;
  age: string;
  gender: string;
  notes: string;
  name: string;
  country: string;
  whatsapp: string;
  email: string;
  package: PackageChoice;
};

const initialForm: ConsultationForm = {
  specialty: 'Rhinoplasty (Nose Surgery)',
  timeframe: '1-3 months',
  age: '',
  gender: 'Female',
  notes: '',
  name: '',
  country: '',
  whatsapp: '',
  email: '',
  package: 'premium', // Middle tier preselected as the Goldilocks anchor
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageSelect = (pkg: PackageChoice) => {
    setForm(prev => ({ ...prev, package: pkg }));
  };

  const openWizardWithPackage = (pkg: PackageChoice) => {
    handlePackageSelect(pkg);
    setStep(1);
    setModal(true);
  };

  const resetModal = () => {
    setModal(false);
    setStep(1);
    setStatus('idle');
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
          ...form,
          submissionDate: new Date().toISOString(),
          source: 'Maham Health Web Portal (3-Tier Edition)'
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      alert("Submission encountered an issue. You can reach our Medical Director directly on WhatsApp: " + OFFICIAL_WHATSAPP_DISPLAY);
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#08111d] text-slate-100 antialiased font-sans selection:bg-amber-400 selection:text-slate-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Bar Navigation */}
      <header className="border-b border-slate-800/80 bg-[#08111d]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
              M
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">MAHAM HEALTH</span>
              <span className="text-[10px] tracking-widest uppercase text-amber-400/90 font-medium block">
                Soorin Maham Group • Medical Concierge
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative flex items-center bg-slate-900 border border-slate-700/80 rounded-lg px-2 py-1.5 shadow-inner">
              <Globe2 className="w-4 h-4 text-amber-400 mr-1.5 ml-1" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                aria-label="Select Language"
                className="bg-transparent text-xs font-semibold text-slate-200 outline-none cursor-pointer pr-4"
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="fa" className="bg-slate-900 text-white">فارسی</option>
                <option value="ar" className="bg-slate-900 text-white">العربية</option>
                <option value="sw" className="bg-slate-900 text-white">Kiswahili</option>
                <option value="hi" className="bg-slate-900 text-white">हिन्दी</option>
                <option value="ur" className="bg-slate-900 text-white">اردو</option>
              </select>
            </div>

            <button
              onClick={() => { setStep(1); setModal(true); }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 transition shadow-md shadow-amber-400/20"
            >
              Get Free Assessment
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#08111d] to-[#08111d] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-6">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Official IPD Hospital Partners • Ministry of Health Certified</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-none mb-6">
            World-Class Healthcare, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              At 70–90% Below Global Costs
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Soorin Maham orchestrates private medical journeys to Tehran&apos;s leading accredited hospitals, offering dedicated specialists, VIP hospitality, and personal concierge care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => { setStep(1); setModal(true); }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-base hover:brightness-110 transition shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2"
            >
              <span>Book Priority Consultation</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 text-white font-semibold text-base transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Direct: {OFFICIAL_WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <Building2 className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">40+</div>
              <div className="text-xs text-slate-400">IPD Partner Centers</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <UserCheck className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">180+</div>
              <div className="text-xs text-slate-400">Board-Certified Specialists</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <PiggyBank className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">70–90%</div>
              <div className="text-xs text-slate-400">Potential Savings</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">&lt; 3 Days</div>
              <div className="text-xs text-slate-400">Waiting Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Benchmark Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Transparent Global Price Benchmark</h2>
          <p className="text-slate-400 text-sm">
            All-inclusive estimates covering clinical procedures, internationally accredited surgical teams, and dedicated care.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Procedure / Specialty</th>
                <th className="py-4 px-6 text-amber-400 bg-amber-400/5">Iran (Maham Health)</th>
                <th className="py-4 px-6">India</th>
                <th className="py-4 px-6">UAE / Turkey</th>
                <th className="py-4 px-6">USA / UK</th>
                <th className="py-4 px-6 text-center">Inquire</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {SPECIALTIES_DATA.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-slate-400">{item.category} • {item.recoveryDays} Stay</div>
                  </td>
                  <td className="py-4 px-6 font-bold text-amber-300 bg-amber-400/5">
                    <div>{item.mahamIranPrice}</div>
                    <span className="inline-block text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 mt-1">
                      {item.savings}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-300">{item.indiaPrice}</td>
                  <td className="py-4 px-6 text-slate-300">{item.uaeTurkeyPrice}</td>
                  <td className="py-4 px-6 text-slate-400 line-through">{item.usUkPrice}</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => {
                        setForm(prev => ({ ...prev, specialty: item.name }));
                        setStep(1);
                        setModal(true);
                      }}
                      className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition"
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3-Tier Concierge Packages (Psychologically Engineered) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <span>Tailored Medical Journey Options</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {t.packagesTitle || "Curated Concierge Packages"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.packagesSubtitle || "Choose the level of clinical coordination, comfort, and personal care suited for your journey."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* TIER 1: Essential Care */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                  Standard Support
                </span>
                <HeartPulse className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.pkgEssentialTitle || "Essential Care"}</h3>
              <p className="text-slate-400 text-xs mb-6">Designed for clinical focus and seamless hospital navigation.</p>

              <div className="border-t border-slate-800 pt-6 space-y-3.5 mb-8">
                {[
                  "Full treatment scheduling at top IPD accredited hospital",
                  "Airport greeting & dedicated hospital admission transfers",
                  "Dedicated medical translator during consultations",
                  "Iran Medical Visa (T-Visa) authorization code",
                  "Local tourist 5G SIM card with 20GB data",
                  "Standard discharge clinical documentation"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openWizardWithPackage('essential')}
              className="w-full py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-white font-semibold text-sm transition text-center"
            >
              Choose Essential Care
            </button>
          </div>

          {/* TIER 2: Premium Comfort (The Highlighted Hero Tier) */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-[#0c182a] border-2 border-amber-400/80 p-8 flex flex-col justify-between relative shadow-2xl shadow-amber-500/10 md:-translate-y-3">
            {/* Recommendation Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>{t.mostPopularBadge || "Recommended • Most Popular"}</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                  Patient &amp; Companion Favorite
                </span>
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.pkgPremiumTitle || "Premium Comfort"}</h3>
              <p className="text-slate-300 text-xs mb-6">Complete peace of mind, private transfers, and hand-picked hotel stays.</p>

              <div className="border-t border-slate-800/80 pt-6 space-y-3.5 mb-8">
                {[
                  "Senior Board-Certified Specialist & top IPD hospital admission",
                  "4-Star Executive Hotel stay (inclusive of companion breakfast)",
                  "Dedicated private chauffeur for all clinical visits & arrivals",
                  "24/7 Personal Medical Concierge & multilingual translator",
                  "Expedited T-Visa approval with embassy support letter",
                  "Prescription discharge medications delivered to hotel",
                  "6-month remote teleconsultation follow-up with your surgeon"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openWizardWithPackage('premium')}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm hover:brightness-110 transition shadow-lg shadow-amber-400/30 text-center"
            >
              Select Premium Comfort
            </button>
          </div>

          {/* TIER 3: Royal VIP Concierge */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-purple-300 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-800">
                  Ultra-Discreet Luxury
                </span>
                <Crown className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.pkgLuxuryTitle || "Royal VIP Concierge"}</h3>
              <p className="text-slate-400 text-xs mb-6">VIP airport terminal lounge, 5-star suites, and bespoke private care.</p>

              <div className="border-t border-slate-800 pt-6 space-y-3.5 mb-8">
                {[
                  "Chief of Department / Head Surgeon consultation priority",
                  "CIP Airport Terminal fast-track (skip lines, private lounge & customs)",
                  "5-Star Luxury Suite accommodation (Espinas Palace / Parsian Azadi)",
                  "24/7 dedicated private chauffeur & luxury vehicle on standby",
                  "Private duty nurse available for in-room post-op recovery",
                  "Tailored post-operative nutrition and dietary plan",
                  "12-month direct teleconsultation access with surgical lead"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openWizardWithPackage('luxury')}
              className="w-full py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-white font-semibold text-sm transition text-center"
            >
              Inquire for Royal VIP
            </button>
          </div>
        </div>
      </section>

      {/* 5-Step Concierge Journey */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">Your Journey in 5 Simple Steps</h2>
          <p className="text-slate-400 text-sm">From initial inquiry to your safe return home, we handle all administrative and logistical burden.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Medical Dossier", desc: "Share records for free evaluation by our accredited surgical board." },
            { step: "02", title: "T-Visa & Booking", desc: "Receive official medical visa code & customized treatment itinerary." },
            { step: "03", title: "VIP Arrival", desc: "Airport greeting, hotel check-in & hospital pre-operation tests." },
            { step: "04", title: "The Procedure", desc: "Surgery by leading professors with dedicated bedside interpreter." },
            { step: "05", title: "Safe Return", desc: "Final checkup, fit-to-fly clearance & 6-month remote doctor follow-up." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 relative">
              <div className="text-2xl font-black text-amber-400/40 mb-3">{item.step}</div>
              <h3 className="font-bold text-white mb-1.5 text-sm">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Trust Badges */}
      <section className="py-16 bg-[#060c14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <ShieldCheck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="font-bold text-white text-sm">Official IPD Certified</div>
              <div className="text-xs text-slate-400 mt-1">Ministry of Health licensed international hospitals</div>
            </div>
            <div className="p-4">
              <UserCheck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="font-bold text-white text-sm">Board-Certified Chiefs</div>
              <div className="text-xs text-slate-400 mt-1">15+ years experience in complex surgeries</div>
            </div>
            <div className="p-4">
              <Plane className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="font-bold text-white text-sm">Expedited T-Visa</div>
              <div className="text-xs text-slate-400 mt-1">Official visa approval code in under 72 hours</div>
            </div>
            <div className="p-4">
              <PiggyBank className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="font-bold text-white text-sm">Fixed-Price Guarantee</div>
              <div className="text-xs text-slate-400 mt-1">Transparent quotes with zero hidden hospital costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Soorin Maham Trade &amp; Industry Development Corporation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:health@maham-group.com" className="hover:text-slate-300">health@maham-group.com</a>
            <a href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`} className="hover:text-slate-300">WhatsApp: {OFFICIAL_WHATSAPP_DISPLAY}</a>
          </div>
        </div>
      </footer>

      {/* 3-Step Consultation Wizard Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 my-8">
