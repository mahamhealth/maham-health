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
  Award,
  FileCheck2,
  Plane,
  HeartPulse,
  Sparkles,
  Lock
} from 'lucide-react';
import { TRANSLATIONS, type Language } from '@/data/translations';
import { SPECIALTIES_DATA } from '@/data/specialties';

const FORM_ENDPOINT = "https://formspree.io/f/mjykapno";
const WHATSAPP_URL = "https://wa.me/255744956506";

type PackageChoice = 'essential' | 'luxury';

interface ConsultationForm {
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
}

const initialForm: ConsultationForm = {
  specialty: 'Rhinoplasty',
  timeframe: '1-3 months',
  age: '',
  gender: 'Female',
  notes: '',
  name: '',
  country: '',
  whatsapp: '',
  email: '',
  package: 'luxury',
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [modal, setModal] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePackageSelect = (pkg: PackageChoice) => {
    setForm(prev => ({ ...prev, package: pkg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...form,
          submissionDate: new Date().toISOString(),
          source: 'Maham Health Web Portal',
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        alert('There was an issue submitting your request. Please message our Concierge team directly on WhatsApp.');
        setStatus('idle');
      }
    } catch {
      alert('Network error. Please message our Concierge team directly on WhatsApp.');
      setStatus('idle');
    }
  };

  const resetModal = () => {
    setModal(false);
    setStep(1);
    setStatus('idle');
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-[#08111d] text-slate-100 font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#08111d]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="font-serif font-black text-xl text-slate-950">M</span>
            </div>
            <div>
              <span className="font-serif tracking-wider text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
                MAHAM HEALTH
              </span>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest -mt-1">
                Medical Concierge • Iran
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5">
              <Globe2 className="w-4 h-4 text-slate-400 mr-2" />
              <select
                aria-label="Language"
                value={lang}
                onChange={e => setLang(e.target.value as Language)}
                className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-slate-900">English</option>
                <option value="fa" className="bg-slate-900">فارسی</option>
                <option value="ar" className="bg-slate-900">العربية</option>
                <option value="sw" className="bg-slate-900">Kiswahili</option>
                <option value="hi" className="bg-slate-900">हिन्दी</option>
                <option value="ur" className="bg-slate-900">اردو</option>
              </select>
            </div>

            <button
              onClick={() => {
                setModal(true);
                setStep(1);
              }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold tracking-wide transition-all shadow-md shadow-amber-500/10"
            >
              Start Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Premier Medical Concierge in Iran • Official IPD Partner Hospitals</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            World-Class Medical Care at <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              70% to 90% Substantial Savings
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience board-certified surgeons, internationally accredited teaching hospitals, and an exclusive white-glove VIP concierge orchestrating your visa, flights, 5-star suites, and recovery.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setModal(true);
                setStep(1);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <span>Begin Free Assessment</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Key Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Building2 className="w-5 h-5 text-amber-400 mb-2" />
              <div className="text-2xl font-bold text-white">40+</div>
              <div className="text-xs text-slate-400">Accredited IPD Hospitals</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <UserCheck className="w-5 h-5 text-amber-400 mb-2" />
              <div className="text-2xl font-bold text-white">180+</div>
              <div className="text-xs text-slate-400">Board-Certified Specialists</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <PiggyBank className="w-5 h-5 text-amber-400 mb-2" />
              <div className="text-2xl font-bold text-white">70–90%</div>
              <div className="text-xs text-slate-400">Cost Advantage vs US/EU</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Clock className="w-5 h-5 text-amber-400 mb-2" />
              <div className="text-2xl font-bold text-white">&lt; 3 Days</div>
              <div className="text-xs text-slate-400">Average Booking Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Item 5: Trust Badges & Hospital Accreditation Logos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#060c15]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
              Institutional Accreditation & Governance
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <Award className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-sm font-semibold text-white">Ministry of Health IPD</div>
              <div className="text-xs text-slate-400 mt-1">Official International Patient Department Certification</div>
            </div>
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <ShieldCheck className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-sm font-semibold text-white">JCI-Aligned Protocols</div>
              <div className="text-xs text-slate-400 mt-1">Strict sterilization & international clinical guidelines</div>
            </div>
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <FileCheck2 className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-sm font-semibold text-white">Expedited T-Visa Letters</div>
              <div className="text-xs text-slate-400 mt-1">Direct embassy medical visa approval tracking</div>
            </div>
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <Lock className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-sm font-semibold text-white">Fixed-Price Guarantee</div>
              <div className="text-xs text-slate-400 mt-1">Zero hidden hospital or anesthesia surcharges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties & Benchmark Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Transparent Global Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Specialties &amp; Price Benchmarks
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              All Maham Iran packages include surgeon fees, hospital stay, medications, private transfer, and bilingual coordinator.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/90 text-xs text-slate-400 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Procedure / Specialty</th>
                  <th className="py-4 px-6 text-amber-400 font-bold">Maham Health (Iran)</th>
                  <th className="py-4 px-6">Estimated Savings</th>
                  <th className="py-4 px-6">India</th>
                  <th className="py-4 px-6">UAE / Turkey</th>
                  <th className="py-4 px-6">US / UK</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-normal">
                {SPECIALTIES_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.category} • {item.recoveryDays}</div>
                    </td>
                    <td className="py-4 px-6 font-bold text-amber-400 text-base">{item.mahamIranPrice}</td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs">
                        {item.savings}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-400">{item.indiaPrice}</td>
                    <td className="py-4 px-6 text-slate-400">{item.uaeTurkeyPrice}</td>
                    <td className="py-4 px-6 text-slate-400">{item.usUkPrice}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => {
                          setForm(prev => ({ ...prev, specialty: item.name }));
                          setModal(true);
                          setStep(1);
                        }}
                        className="px-3.5 py-1.5 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Concierge Service Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#060c16]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              White-Glove Hospitality
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Curated Concierge Packages
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Select the service tier that matches your comfort expectations. Both tiers guarantee treatment at certified IPD centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Essential Care Package */}
            <div
              onClick={() => handlePackageSelect('essential')}
              className={`p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                form.package === 'essential'
                  ? 'border-amber-400 bg-slate-900/90 ring-1 ring-amber-400/50'
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Essential Medical Care</h3>
                    <p className="text-xs text-slate-400 mt-1">Focused clinical excellence and comfortable logistics</p>
                  </div>
                  <span className="text-xs font-semibold uppercase px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                    Standard Tier
                  </span>
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-6">Procedure + $450</div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Official T-Visa Authorization Code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Airport Pick-Up &amp; Drop-Off (Standard Sedan)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>4-Star Hotel Accommodation (3 Nights included)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Bilingual Medical Translator for all clinical visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Local 4G/5G SIM card &amp; 24/7 WhatsApp emergency support</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePackageSelect('essential');
                  setModal(true);
                  setStep(3);
                }}
                className="w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all border border-slate-700"
              >
                Choose Essential Care
              </button>
            </div>

            {/* Luxury VIP Package */}
            <div
              onClick={() => handlePackageSelect('luxury')}
              className={`p-8 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                form.package === 'luxury'
                  ? 'border-amber-400 bg-slate-900/90 ring-2 ring-amber-400/50 shadow-xl shadow-amber-500/10'
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow">
                Most Popular
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>Luxury VIP Concierge</span>
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">First-class hospitality and round-the-clock accompaniment</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-6">Procedure + $1,200</div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Fast-Track VIP Airport Terminal Escort (CIP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Private Mercedes / Luxury SUV Chauffeur throughout stay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>5-Star Suite Accommodation (Espinas Palace or equivalent)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Dedicated 24/7 Personal Concierge &amp; Dedicated Medical Board Liaison</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Post-Operative Private Duty Nurse &amp; Curated Dietary Room Service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Companion travel arrangements included</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePackageSelect('luxury');
                  setModal(true);
                  setStep(3);
                }}
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold transition-all shadow-md shadow-amber-500/20"
              >
                Choose Luxury VIP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Item 4: 5-Step Concierge Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#060d17]/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Seamless Medical Travel
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Your 5-Step Concierge Journey
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              From your initial dossier review to your safe return home, every detail is orchestrated with white-glove precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="bg-[#0b1524] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Medical Dossier</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our specialist medical board reviews your records and delivers a transparent, all-inclusive treatment quotation within 12 hours.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-400 font-medium">
                Remote Consultation
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0b1524] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-semibold text-white mb-2">T-Visa Authorization</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We issue your official Iran Medical Visa (T-Visa) authorization letter and assist with fast-track embassy or e-visa approval.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-400 font-medium">
                Fast-Track Visa
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0b1524] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-semibold text-white mb-2">VIP Arrival</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Personal airport greeting, VIP terminal escort, private chauffeur transfer, and check-in to your 5-star suite with a dedicated translator.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-400 font-medium">
                Luxury Hospitality
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#0b1524] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Procedure &amp; Care</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Treatment performed by renowned department heads at top accredited IPD hospitals, accompanied by continuous concierge support.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-400 font-medium">
                Clinical Excellence
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#0b1524] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm mb-4">
                  05
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Recovery &amp; Departure</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Post-op clinical checkups, customized wellness nutrition, fit-to-fly clearance certification, and private chauffeur return to the airport.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-400 font-medium">
                Safe Return Home
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => {
                setModal(true);
                setStep(1);
              }}
              className="px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20"
            >
              Start Your Confidential Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#050b12] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center font-serif font-bold text-amber-400">
              M
            </div>
            <div>
              <p className="text-slate-200 font-semibold">Maham Health Medical Concierge</p>
              <p className="text-slate-500">Soorin Maham Trade &amp; Industry Development Corporation</p>
            </div>
          </div>
          <div className="text-center md:text-right space-y-1">
            <p>Direct Concierge Line: +255 744 956 506 • health@maham-group.com</p>
            <p className="text-slate-500">Tehran • Dubai • Dar es Salaam • Mumbai</p>
          </div>
        </div>
      </footer>

      {/* 3-Step Consultation Wizard Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Thank you, <span className="text-white font-semibold">{form.name || 'valued patient'}</span>. Your dossier has been logged under priority triage.
                </p>

                {/* 3-Step Success Roadmap */}
                <div className="bg-[#070e18] border border-slate-800 rounded-xl p-4 text-left max-w-md mx-auto mb-6 space-y-3">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    What happens next:
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span><strong>Board Review:</strong> Medical records presented to leading specialists within 4 hours.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span><strong>Coordinator Assignment:</strong> Your personal concierge connects on WhatsApp to discuss travel details.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span><strong>Transparent Quote:</strong> Receive an itemized hospital &amp; concierge itinerary with T-Visa clearance.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello Maham Health concierge, I have submitted a consultation request for ${form.specialty}. My name is ${form.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Fast-Track on WhatsApp</span>
                  </a>
                  <button
                    onClick={resetModal}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Stepper Header */}
                <div className="border-b border-slate-800 pb-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-amber-400 uppercase tracking-wider">Step {step} of 3</span>
                    <span>
                      {step === 1 && 'Procedure & Timing'}
                      {step === 2 && 'Patient Background'}
                      {step === 3 && 'Contact & Tier'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Procedure & Timing */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Select Your Treatment</h3>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Procedure / Medical Area
                      </label>
                      <select
                        name="specialty"
                        value={form.specialty}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                      >
                        {SPECIALTIES_DATA.map((s, idx) => (
                          <option key={idx} value={s.name}>
                            {s.name} ({s.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Desired Timeframe for Travel
                      </label>
                      <select
                        name="timeframe"
                        value={form.timeframe}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                      >
                        <option value="Immediately (Within 2 weeks)">Immediately (Within 2 weeks)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="Just planning / Exploring">Just planning / Exploring</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all flex items-center gap-1.5"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Patient Profile */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Patient Profile</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Patient Age *
                        </label>
                        <input
                          type="number"
                          name="age"
                          required
                          value={form.age}
                          onChange={handleInputChange}
                          placeholder="e.g. 38"
                          className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Gender *
                        </label>
                        <select
                          name="gender"
                          value={form.gender}
                          onChange={handleInputChange}
                          className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Medical History / Specific Symptoms / Prior Surgeries
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={form.notes}
                        onChange={handleInputChange}
                        placeholder="Please describe any diagnoses, current medications, or specific requests..."
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all flex items-center gap-1.5"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Package Selection */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Contact &amp; Tier Selection</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Your legal name"
                          className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Country of Residence *
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={form.country}
                          onChange={handleInputChange}
                          placeholder="e.g. Tanzania, UAE, UK"
                          className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          value={form.whatsapp}
                          onChange={handleInputChange}
                          placeholder="+255 700 000 000"
                          className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="patient@example.com"
                          className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Preferred Concierge Tier
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handlePackageSelect('essential')}
                          className={`p-3 rounded-lg border text-left text-xs transition-all ${
                            form.package === 'essential'
                              ? 'border-amber-400 bg-amber-500/10 text-white'
                              : 'border-slate-800 bg-slate-800/50 text-slate-400'
                          }`}
                        >
                          <div className="font-bold text-white">Essential Care</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">Procedure + $450</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePackageSelect('luxury')}
                          className={`p-3 rounded-lg border text-left text-xs transition-all ${
                            form.package === 'luxury'
                              ? 'border-amber-400 bg-amber-500/10 text-white'
                              : 'border-slate-800 bg-slate-800/50 text-slate-400'
                          }`}
                        >
                          <div className="font-bold text-white">Luxury VIP</div>
                          <div className="text-[11px] text-amber-400 mt-0.5">Procedure + $1,200</div>
                        </button>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/20 disabled:opacity-50"
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Dossier Request'}
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
