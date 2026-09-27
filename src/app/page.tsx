'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  PiggyBank, 
  Clock, 
  Check, 
  Send, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight,
  Globe2,
  Stethoscope,
  X,
  FileText
} from 'lucide-react';
import { TRANSLATIONS, type Language } from '@/data/translations';
import { SPECIALTIES_DATA } from '@/data/specialties';

const FORM_ENDPOINT = "https://formspree.io/f/mjykapno";

type PackageChoice = 'essential' | 'luxury';

type ConsultationForm = {
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
  package: 'luxury',
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
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
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          submissionDate: new Date().toISOString(),
          source: 'Maham Health Web Portal'
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      alert("Something went wrong. Please email us directly at health@maham-group.com");
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
    <div className="min-h-screen bg-[#08111d] text-slate-100 antialiased" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#08111d]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-amber-500/20">
              M
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">MAHAM HEALTH</span>
              <span className="text-[10px] tracking-widest uppercase text-amber-400 font-semibold block">Exclusive Medical Concierge</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Selector */}
            <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-300">
              <Globe2 className="w-3.5 h-3.5 text-amber-400 mr-2 rtl:ml-2 rtl:mr-0" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                aria-label="Select Language"
                className="bg-transparent text-slate-200 focus:outline-none cursor-pointer pr-4"
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
              onClick={() => setModal(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              Start Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-300 text-xs font-medium mb-8">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Premier Medical Concierge in Iran • Official IPD Partner Hospitals</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          World-Class Healthcare, At <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">70–90% Below</span> Global Costs
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Soorin Maham orchestrates private medical journeys to Tehran&apos;s leading accredited hospitals, offering dedicated specialists, VIP hospitality, and personal concierge care.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setModal(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Begin Free Assessment</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          <a
            href="https://wa.me/989120000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/40 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
            <Building2 className="w-6 h-6 text-amber-400 mb-3 mx-auto" />
            <div className="text-3xl font-extrabold text-white">40+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">IPD Partner Centers</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
            <UserCheck className="w-6 h-6 text-amber-400 mb-3 mx-auto" />
            <div className="text-3xl font-extrabold text-white">180+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Board-Certified Specialists</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
            <PiggyBank className="w-6 h-6 text-amber-400 mb-3 mx-auto" />
            <div className="text-3xl font-extrabold text-amber-300">70–90%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Potential Savings</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
            <Clock className="w-6 h-6 text-amber-400 mb-3 mx-auto" />
            <div className="text-3xl font-extrabold text-white">&lt; 3 Days</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Waiting Time</div>
          </div>
        </div>
      </section>

      {/* Specialties & Cost Comparison Table */}
      <section className="py-20 bg-slate-950/60 border-y border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Transparent Global Price Benchmark</h2>
            <p className="mt-4 text-slate-400">All-inclusive estimates covering clinical procedures, internationally accredited surgical teams, and dedicated care.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-slate-900/60">
            <table className="w-full text-left rtl:text-right border-collapse">
              <thead>
                <tr className="bg-slate-900/90 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-white/10">
                  <th className="p-5">Procedure / Specialty</th>
                  <th className="p-5 text-amber-400">Iran (Maham Health)</th>
                  <th className="p-5">India</th>
                  <th className="p-5">UAE / Turkey</th>
                  <th className="p-5">USA / UK</th>
                  <th className="p-5 text-right rtl:text-left">Inquire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {SPECIALTIES_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-5">
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.category} • {item.recoveryDays} Stay</div>
                    </td>
                    <td className="p-5">
                      <span className="text-lg font-bold text-amber-400">${item.mahamIranPrice.toLocaleString()}</span>
                      <span className="block text-xs text-emerald-400 font-medium">Save up to {item.savings}</span>
                    </td>
                    <td className="p-5 text-slate-400">${item.indiaPrice.toLocaleString()}+</td>
                    <td className="p-5 text-slate-400">${item.uaeTurkeyPrice.toLocaleString()}+</td>
                    <td className="p-5 text-slate-500">${item.usUkPrice.toLocaleString()}+</td>
                    <td className="p-5 text-right rtl:text-left">
                      <button 
                        onClick={() => {
                          setForm(prev => ({ ...prev, specialty: item.name }));
                          setModal(true);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-medium cursor-pointer transition-all"
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

      {/* Concierge Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Curated Concierge Packages</h2>
          <p className="mt-4 text-slate-400">Choose the level of personal assistance and comfort suited for you and your companion.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Essential Care */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2">Standard Support</div>
              <h3 className="text-2xl font-bold text-white mb-4">Essential Medical Care</h3>
              <p className="text-slate-400 text-sm mb-6">Designed for clinical focus and seamless hospital navigation.</p>
              
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Full treatment scheduling at top IPD hospital</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Airport greeting and private hospital transfers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Dedicated medical translator and local SIM card</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Iran medical visa (T-Visa) authorization letter</span>
                </li>
              </ul>
            </div>
            
            <button
              onClick={() => {
                handlePackageSelect('essential');
                setModal(true);
              }}
              className="mt-8 w-full py-3.5 rounded-xl border border-white/20 hover:border-amber-400/50 text-white font-medium text-sm transition-all cursor-pointer"
            >
              Choose Essential Care
            </button>
          </div>

          {/* Luxury VIP */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-amber-500/10 via-slate-900/70 to-slate-900/90 border-2 border-amber-500/40 relative flex flex-col justify-between shadow-2xl shadow-amber-500/5">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase px-4 py-1 rounded-full shadow-md">
              Most Recommended
            </div>
            <div>
              <div className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2">All-Inclusive Luxury</div>
              <h3 className="text-2xl font-bold text-white mb-4">Luxury VIP Concierge</h3>
              <p className="text-slate-300 text-sm mb-6">Unrivaled comfort, five-star hospitality, and end-to-end discreet service.</p>
              
              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>5-Star luxury hotel suite for patient and companion</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Private chauffeur throughout your entire stay</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Priority access to Chief Medical Department Heads</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>VIP airport terminal lounge access & expedited customs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Post-operative wellness and customized nutritional diet</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                handlePackageSelect('luxury');
                setModal(true);
              }}
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Choose Luxury VIP
            </button>
          </div>
        </div>
      </section>

      {/* 3-Step Consultation Modal Wizard */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0b1727] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Our International Patient Coordinator will review your case with the specialist medical board and reach out on WhatsApp within 12 hours.
                </p>
                <button
                  onClick={resetModal}
                  className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Stepper Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Step {step} of 3</span>
                    <span className="text-xs text-slate-400">
                      {step === 1 && "Procedure & Timing"}
                      {step === 2 && "Patient Background"}
                      {step === 3 && "Contact & Tier"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Treatment & Timeframe */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Select Your Treatment</h3>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Primary Medical Specialty</label>
                      <select
                        name="specialty"
                        value={form.specialty}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        {SPECIALTIES_DATA.map((s, i) => (
                          <option key={i} value={s.name} className="bg-slate-900">{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Estimated Travel Timeframe</label>
                      <select
                        name="timeframe"
                        value={form.timeframe}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
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
                        className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Patient Demographics & History */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Patient Profile</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">Age</label>
                        <input
                          type="number"
                          name="age"
                          placeholder="e.g. 34"
                          value={form.age}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">Gender</label>
                        <select
                          name="gender"
                          value={form.gender}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Medical History / Specific Notes</label>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Describe any existing conditions, previous surgeries, or preferred surgeon requirements..."
                        value={form.notes}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-2.5 rounded-lg border border-white/20 text-slate-300 text-sm hover:border-white/40"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Concierge Package */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Contact & Accommodation</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">Country of Residence</label>
                        <input
                          type="text"
                          name="country"
                          placeholder="e.g. Tanzania, UAE, UK"
                          value={form.country}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">WhatsApp Number (with country code)</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="+..."
                          value={form.whatsapp}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
                        <input
                          type="email"
