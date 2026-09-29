'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { 
  Globe2, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  PhoneCall, 
  Send, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Sparkles, 
  Check, 
  X,
  Stethoscope,
  Building2,
  FileText
} from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';
type PackageTier = 'essential' | 'premium' | 'royal';

interface FormData {
  specialty: string;
  timeframe: string;
  age: string;
  gender: string;
  medicalNotes: string;
  name: string;
  country: string;
  whatsapp: string;
  email: string;
  packageTier: PackageTier;
  fileName?: string;
}

export default function Page() {
  const [lang, setLang] = useState<Language>('en');
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormData>({
    specialty: 'Rhinoplasty (Nose Surgery)',
    timeframe: 'Immediately (Within 2–4 weeks)',
    age: '',
    gender: 'Male',
    medicalNotes: '',
    name: '',
    country: '',
    whatsapp: '',
    email: '',
    packageTier: 'premium',
    fileName: ''
  });

  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const specialties = [
    { name: 'Rhinoplasty (Nose Surgery)', category: 'Cosmetic & Plastic Surgery', days: '7–10 days', iran: '$1,650', savings: 'Up to 80%', india: '$2,800+', uaeTurkey: '$4,500+', usUk: '$8,500+' },
    { name: 'Dental Implants (Titanium)', category: 'Dental Care', days: '3–5 days', iran: '$550', savings: 'Up to 80%', india: '$800+', uaeTurkey: '$1,500+', usUk: '$2,800+' },
    { name: 'LASIK / Femto-LASIK (Both Eyes)', category: 'Ophthalmology', days: '2–3 days', iran: '$1,100', savings: 'Up to 74%', india: '$1,400+', uaeTurkey: '$2,800+', usUk: '$4,200+' },
    { name: 'Hair Transplant (FUE / Micro-FUE)', category: 'Cosmetic & Hair', days: '3–4 days', iran: '$1,250', savings: 'Up to 79%', india: '$2,000+', uaeTurkey: '$2,600+', usUk: '$6,000+' },
    { name: 'IVF (Full Treatment Cycle + ICSI)', category: 'Fertility & Reproductive', days: '10–14 days', iran: '$3,200', savings: 'Up to 78%', india: '$4,500+', uaeTurkey: '$7,500+', usUk: '$15,000+' },
    { name: 'Total Knee Replacement', category: 'Orthopedics & Joint Surgery', days: '10–14 days', iran: '$4,200', savings: 'Up to 81%', india: '$7,500+', uaeTurkey: '$11,000+', usUk: '$22,000+' },
    { name: 'Cardiology Stent / Angioplasty', category: 'Cardiology & Vascular', days: '4–7 days', iran: '$3,800', savings: 'Up to 81%', india: '$6,500+', uaeTurkey: '$9,500+', usUk: '$20,000+' },
    { name: 'Cancer Treatment (Initial Protocol)', category: 'Oncology', days: '7–14 days', iran: '$4,500', savings: 'Up to 82%', india: '$8,000+', uaeTurkey: '$12,000+', usUk: '$25,000+' },
    { name: 'Bariatric Sleeve Surgery', category: 'Weight Loss Surgery', days: '5–7 days', iran: '$2,850', savings: 'Up to 76%', india: '$4,800+', uaeTurkey: '$6,500+', usUk: '$12,000+' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageSelect = (tier: PackageTier) => {
    setForm(prev => ({ ...prev, packageTier: tier }));
    setStep(1);
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating endpoint dispatch (e.g. Formspree or internal API)
    try {
      await fetch('https://formspree.io/f/mqakdgrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.warn('Form dispatch fallback triggered');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-[#08111d] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-900">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#08111d]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="text-xl font-bold tracking-tight text-white">
              MAHAM <span className="text-amber-400 font-light">HEALTH</span>
            </span>
            <span className="hidden sm:inline-block rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-amber-300 border border-slate-700">
              Soorin Maham Group
            </span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 rounded-lg border border-slate-700 bg-slate-900/80 px-2.5 py-1 rtl:space-x-reverse">
              <Globe2 className="h-4 w-4 text-amber-400" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-slate-200 outline-none cursor-pointer"
                aria-label="Select Language"
              >
                <option value="en" className="bg-[#08111d]">English</option>
                <option value="fa" className="bg-[#08111d]">فارسی</option>
                <option value="ar" className="bg-[#08111d]">العربية</option>
                <option value="sw" className="bg-[#08111d]">Kiswahili</option>
                <option value="hi" className="bg-[#08111d]">हिन्दी</option>
                <option value="ur" className="bg-[#08111d]">اردو</option>
              </select>
            </div>

            <button
              onClick={() => { setStep(1); setSubmitted(false); setModalOpen(true); }}
              className="rounded-lg bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-amber-300"
            >
              Get Free Assessment
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#0b1626] to-[#08111d] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Premier Medical Concierge in Iran • Official IPD Partner Hospitals</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            World-Class Healthcare, At <span className="text-amber-400">70–90% Below</span> Global Costs
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Soorin Maham orchestrates private medical journeys to Tehran&apos;s leading accredited IPD hospitals, offering dedicated specialists, VIP hospitality, and personal concierge care.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => { setStep(1); setSubmitted(false); setModalOpen(true); }}
              className="rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-amber-300 transition"
            >
              Start Free Medical Consultation
            </button>
            <a
              href="https://wa.me/255744956506"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-700 transition"
            >
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">40+</div>
              <div className="text-xs text-slate-400 mt-1">IPD Partner Centers</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">180+</div>
              <div className="text-xs text-slate-400 mt-1">Board-Certified Specialists</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">70–90%</div>
              <div className="text-xs text-slate-400 mt-1">Potential Savings</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">&lt; 3 Days</div>
              <div className="text-xs text-slate-400 mt-1">Waiting Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty & Price Benchmark Section */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-[#08111d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Transparent Global Price Benchmark</h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              All-inclusive estimates covering clinical procedures, internationally accredited surgical teams, and dedicated care.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-2xl">
            <table className="w-full text-left text-sm rtl:text-right">
              <thead className="bg-[#0d1a2d] text-xs font-semibold uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Procedure / Specialty</th>
                  <th className="px-6 py-4 text-amber-400">Iran (Maham Health)</th>
                  <th className="px-6 py-4">India</th>
                  <th className="px-6 py-4">UAE / Turkey</th>
                  <th className="px-6 py-4">USA / UK</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-[#08111d]/60">
                {specialties.map((spec, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{spec.name}</div>
                      <div className="text-xs text-slate-400">{spec.category} • {spec.days} Stay</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-amber-400">
                      <div>{spec.iran}</div>
                      <span className="text-[11px] font-normal text-emerald-400">Save {spec.savings}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{spec.india}</td>
                    <td className="px-6 py-4 text-slate-400">{spec.uaeTurkey}</td>
                    <td className="px-6 py-4 text-slate-400">{spec.usUk}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          setForm(prev => ({ ...prev, specialty: spec.name }));
                          setStep(1);
                          setSubmitted(false);
                          setModalOpen(true);
                        }}
                        className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-amber-400 hover:bg-slate-700 transition"
                      >
                        Inquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3-TIER CONCIERGE PACKAGES SECTION (The Pivot) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#08111d] to-[#0c1827] border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Personalized Hospital & Travel Management</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Curated Concierge Packages</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Choose the level of clinical focus, hotel comfort, and private assistance that matches your medical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* TIER 1: Essential Care */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0d1a2d]/80 p-6 sm:p-8 backdrop-blur-sm">
              <div>
                <div className="inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 mb-4">
                  Standard Support
                </div>
                <h3 className="text-xl font-bold text-white">Essential Care</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400">
                  Ideal for clinical focus, clear medical navigation, and standard hospital companion support.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>IPD hospital scheduling with lead specialist</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Airport pickup & hospital transport coordination</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Dedicated medical translator (English/Arabic/Persian)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Iran medical visa (T-Visa) authorization letter</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handlePackageSelect('essential')}
                className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-800 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-700 transition"
              >
                Select Essential Care
              </button>
            </div>

            {/* TIER 2: Premium Comfort (Most Popular / Compromise Effect Anchor) */}
            <div className="relative flex flex-col justify-between rounded-2xl border-2 border-amber-400/80 bg-[#0f2038] p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                Most Popular • Recommended
              </div>
              <div>
                <div className="inline-block rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300 mb-4 mt-1">
                  Full Comfort & Balance
                </div>
                <h3 className="text-xl font-bold text-white">Premium Comfort</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Enhanced 4-star hospitality, dedicated on-ground coordinator, and prioritized clinic consultations.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Everything in Essential Care</strong></span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>4-Star premium hotel accommodation (Patient + Companion)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Dedicated bilingual personal concierge available 24/7</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Private chauffeured airport & clinical transfers</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Local 5G SIM card, high-speed Wi-Fi & pharmacy support</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handlePackageSelect('premium')}
                className="mt-8 w-full rounded-xl bg-amber-400 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-300 transition shadow-lg shadow-amber-400/20"
              >
                Select Premium Comfort
              </button>
            </div>

            {/* TIER 3: Royal VIP Concierge */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0d1a2d]/80 p-6 sm:p-8 backdrop-blur-sm">
              <div>
                <div className="inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-amber-300 mb-4">
                  Ultra-Luxury & Discretion
                </div>
                <h3 className="text-xl font-bold text-white">Royal VIP Concierge</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400">
                  Top-tier private healthcare, 5-star presidential suites, private chauffeur, and complete executive discretion.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Everything in Premium Comfort</strong></span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>5-Star luxury suite with private companion lodging</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>VIP CIP airport terminal reception & expedited customs</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Direct priority consults with Department Chief Professors</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Post-operative wellness, private nurse & custom nutrition</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handlePackageSelect('royal')}
                className="mt-8 w-full rounded-xl border border-amber-500/40 bg-slate-800 py-3 text-xs sm:text-sm font-bold text-amber-300 hover:bg-slate-700 transition"
              >
                Select Royal VIP Concierge
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3-STEP CONSULTATION WIZARD MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-2xl border border-slate-700 bg-[#0d1a2a] p-6 sm:p-8 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white rtl:left-4 rtl:right-auto"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{form.name}</strong>. Our medical travel director will review your clinical request ({form.specialty}) and reach you on WhatsApp within 4 hours.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-6 rounded-lg bg-amber-400 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                {/* Stepper Header */}
                <div className="mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center justify-between text-xs font-medium text-amber-400 mb-2">
                    <span>Step {step} of 3</span>
                    <span>
                      {step === 1 && "Procedure & Timing"}
                      {step === 2 && "Patient Background"}
                      {step === 3 && "Tier & Contact Details"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800">
                    <div
                      className="h-1.5 rounded-full bg-amber-400 transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Desired Treatment / Specialty
                        </label>
                        <select
                          name="specialty"
                          value={form.specialty}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        >
                          {specialties.map((s, idx) => (
                            <option key={idx} value={s.name}>{s.name} ({s.iran})</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Target Travel Timeframe
                        </label>
                        <select
                          name="timeframe"
                          value={form.timeframe}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        >
                          <option value="Immediately (Within 2–4 weeks)">Immediately (Within 2–4 weeks)</option>
                          <option value="Next 1–3 months">Next 1–3 months</option>
                          <option value="In 3–6 months">In 3–6 months</option>
                          <option value="Exploring estimates & visa only">Exploring estimates & visa only</option>
                        </select>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="flex items-center gap-1.5 rounded-lg bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300"
                        >
                          Next Step
                          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Age</label>
                          <input
                            type="number"
                            name="age"
                            placeholder="e.g. 42"
                            value={form.age}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Gender</label>
                          <select
                            name="gender"
                            value={form.gender}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Medical History & Notes
                        </label>
                        <textarea
                          name="medicalNotes"
                          rows={3}
                          placeholder="Briefly describe symptoms, previous diagnoses, or specific surgeon requests..."
                          value={form.medicalNotes}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 p
