'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  ChevronDown,
  Sparkles,
  Award,
  Globe2,
  PhoneCall,
  Stethoscope,
  HeartPulse,
  UserCheck,
  Building2,
  FileCheck2,
  Lock
} from 'lucide-react';

type PackageTier = 'essential' | 'premium' | 'royal';

interface Specialty {
  id: string;
  name: string;
  category: string;
  recoveryDays: string;
  prices: {
    iran: number;
    india: number;
    uaeTurkey: number;
    us: number;
  };
  savings: string;
}

const SPECIALTIES: Specialty[] = [
  {
    id: 'rhinoplasty',
    name: 'Rhinoplasty (Nose Surgery)',
    category: 'Cosmetic & Plastic Surgery',
    recoveryDays: '7-10 Days',
    prices: { iran: 1650, india: 2800, uaeTurkey: 4500, us: 8500 },
    savings: '80%'
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants (Per Tooth)',
    category: 'Dentistry & Maxillofacial',
    recoveryDays: '3-5 Days',
    prices: { iran: 550, india: 800, uaeTurkey: 1500, us: 2800 },
    savings: '80%'
  },
  {
    id: 'lasik',
    name: 'LASIK Vision Correction (Both Eyes)',
    category: 'Ophthalmology',
    recoveryDays: '2-4 Days',
    prices: { iran: 1100, india: 1400, uaeTurkey: 2800, us: 4200 },
    savings: '74%'
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant (FUE / DHI)',
    category: 'Cosmetic & Dermatology',
    recoveryDays: '3-5 Days',
    prices: { iran: 1250, india: 2000, uaeTurkey: 2600, us: 6000 },
    savings: '79%'
  },
  {
    id: 'ivf',
    name: 'IVF Fertility (Full Cycle)',
    category: 'Fertility & Reproductive',
    recoveryDays: '10-14 Days',
    prices: { iran: 3200, india: 4500, uaeTurkey: 7500, us: 15000 },
    savings: '78%'
  },
  {
    id: 'knee-replacement',
    name: 'Orthopedic Knee Replacement',
    category: 'Orthopedics & Joint',
    recoveryDays: '14-21 Days',
    prices: { iran: 4200, india: 7500, uaeTurkey: 11000, us: 22000 },
    savings: '81%'
  },
  {
    id: 'cardiology-stent',
    name: 'Cardiology Stent & Angiography',
    category: 'Cardiovascular Care',
    recoveryDays: '5-7 Days',
    prices: { iran: 3800, india: 6500, uaeTurkey: 9500, us: 20000 },
    savings: '81%'
  },
  {
    id: 'oncology',
    name: 'Oncology Comprehensive Evaluation & Care',
    category: 'Cancer Care & Oncology',
    recoveryDays: 'Specialized Regimen',
    prices: { iran: 4500, india: 8000, uaeTurkey: 12000, us: 25000 },
    savings: '82%'
  },
  {
    id: 'bariatric-sleeve',
    name: 'Bariatric Gastric Sleeve',
    category: 'Bariatric & Metabolic',
    recoveryDays: '5-7 Days',
    prices: { iran: 2850, india: 4800, uaeTurkey: 6500, us: 12000 },
    savings: '76%'
  }
];

export default function Page() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('rhinoplasty');
  const [step, setStep] = useState<number>(1);
  const [selectedTier, setSelectedTier] = useState<PackageTier>('premium');

  // Form State
  const [timeframe, setTimeframe] = useState('Within 1 Month');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const activeSpecialty = SPECIALTIES.find((s) => s.id === selectedSpecialty) || SPECIALTIES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mqakdgrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          specialty: activeSpecialty.name,
          tier: selectedTier,
          timeframe,
          age,
          gender,
          medicalNotes,
          fullName,
          country,
          whatsapp,
          email
        })
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert('There was an issue dispatching your request. Please email health@maham-group.com.');
      }
    } catch {
      alert('Network error. Please try again or reach out to health@maham-group.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#08111d] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#08111d]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20">
              <HeartPulse className="h-6 w-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">MAHAM HEALTH</span>
              <span className="block text-[10px] tracking-widest text-amber-400/90 uppercase">
                Concierge Medical Travel
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#specialties" className="transition-colors hover:text-amber-400">Specialties & Pricing</a>
            <a href="#packages" className="transition-colors hover:text-amber-400">Concierge Tiers</a>
            <a href="#wizard" className="transition-colors hover:text-amber-400">Plan Treatment</a>
            <a href="mailto:health@maham-group.com" className="transition-colors hover:text-amber-400">Contact</a>
          </div>
          <a
            href="#wizard"
            className="rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 shadow-md shadow-amber-400/10"
          >
            Start Consultation
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-300 mb-8 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>World-Class Medical Care in Iran • Save 70% to 90%</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            World-Renowned Specialists. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Unrivaled Luxury Concierge.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">
            Access board-certified chief surgeons, internationally accredited clinical facilities, and end-to-end discreet concierge management tailored exclusively for international travelers.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#wizard"
              className="flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-400/20 transition-all hover:bg-amber-300"
            >
              Get Free Treatment Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#specialties"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Compare Global Costs
            </a>
          </div>
        </div>
      </section>

      {/* Specialties & Pricing Comparison */}
      <section id="specialties" className="border-t border-slate-800/80 bg-slate-950/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transparent Global Price Benchmarks
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Discover real procedural savings compared to leading international medical destinations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-800 bg-slate-900/80 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Specialty / Procedure</th>
                  <th className="py-4 px-6 font-semibold text-amber-400">Maham Iran (Est.)</th>
                  <th className="py-4 px-6 font-semibold">India</th>
                  <th className="py-4 px-6 font-semibold">UAE / Turkey</th>
                  <th className="py-4 px-6 font-semibold">United States</th>
                  <th className="py-4 px-6 font-semibold text-right">Est. Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {SPECIALTIES.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-slate-800/30">
                    <td className="py-4 px-6 text-white">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.category} • {item.recoveryDays}</div>
                    </td>
                    <td className="py-4 px-6 font-bold text-amber-400 text-base">
                      ${item.prices.iran.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-slate-400">${item.prices.india.toLocaleString()}</td>
                    <td className="py-4 px-6 text-slate-400">${item.prices.uaeTurkey.toLocaleString()}</td>
                    <td className="py-4 px-6 text-slate-500 line-through">${item.prices.us.toLocaleString()}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                        Save {item.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3-Tier Concierge Packages */}
      <section id="packages" className="py-24 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Concierge Travel & Care Tiers
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Customized comfort suited to individual requirements, from focused medical support to presidential hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Essential Care */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <h3 className="text-xl font-bold text-white">Essential Care</h3>
                <p className="mt-2 text-xs text-slate-400">Streamlined medical journey focused on medical excellence and safety.</p>
                <ul className="mt-6 space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Hospital & surgical booking with leading specialist
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Pre-op clinical consultations & diagnostics
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Airport greeting & roundtrip clinic transfers
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Medical visa support & official documentation
                  </li>
                </ul>
              </div>
              <button
                onClick={() => { setSelectedTier('essential'); document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-8 w-full rounded-xl border border-slate-700 py-3 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Select Essential
              </button>
            </div>

            {/* Premium Comfort - Highlighted */}
            <div className="relative rounded-2xl border-2 border-amber-400 bg-slate-900/90 p-8 shadow-2xl shadow-amber-400/10 flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                Most Popular
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Premium Comfort</h3>
                <p className="mt-2 text-xs text-slate-300">Complete peace of mind with 4-star accommodation & dedicated host.</p>
                <ul className="mt-6 space-y-3.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Everything in Essential Care
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    4-Star hotel accommodation during recovery
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Dedicated bilingual medical concierge & companion
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Chauffeured private vehicle for all appointments
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Local SIM card & 24/7 dedicated care coordination
                  </li>
                </ul>
              </div>
              <button
                onClick={() => { setSelectedTier('premium'); document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-8 w-full rounded-xl bg-amber-400 py-3 text-xs font-bold text-slate-950 hover:bg-amber-300 shadow-md shadow-amber-400/20"
              >
                Select Premium Comfort
              </button>
            </div>

            {/* Royal VIP Concierge */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <h3 className="text-xl font-bold text-white">Royal VIP Concierge</h3>
                <p className="mt-2 text-xs text-slate-400">Unmatched exclusivity, presidential suites, and high-discretion service.</p>
                <ul className="mt-6 space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    5-Star luxury suite accommodation
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Fast-track VIP airport CIP terminal customs & lounge
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Consultation with hospital Chief of Surgery
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Private in-suite post-operative nursing care
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    Bespoke city cultural tour for accompanying family
                  </li>
                </ul>
              </div>
              <button
                onClick={() => { setSelectedTier('royal'); document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-8 w-full rounded-xl border border-slate-700 py-3 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Select Royal VIP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Consultation Wizard */}
      <section id="wizard" className="py-24 border-t border-slate-800/80 bg-slate-950/60">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Personalized Consultation Wizard
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Receive a comprehensive treatment plan and custom price quotation within 24 hours.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl">
            {/* Step Indicators */}
            <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-5">
              <div className="flex items-center gap-3">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  1
                </span>
                <span className={`text-xs font-medium ${step >= 1 ? 'text-white' : 'text-slate-500'}`}>Treatment</span>
              </div>
              <div className="h-0.5 w-12 bg-slate-800" />
              <div className="flex items-center gap-3">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 2 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  2
                </span>
                <span className={`text-xs font-medium ${step >= 2 ? 'text-white' : 'text-slate-500'}`}>Clinical Details</span>
              </div>
              <div className="h-0.5 w-12 bg-slate-800" />
              <div className="flex items-center gap-3">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 3 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  3
                </span>
                <span className={`text-xs font-medium ${step >= 3 ? 'text-white' : 'text-slate-500'}`}>Patient Contact</span>
              </div>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, {fullName}. Our medical coordinator is reviewing your clinical profile and will reach out via WhatsApp / Email within 24 hours.
                </p>
                <button
                  onClick={() => { setIsSuccess(false); setStep(1); }}
                  className="mt-6 rounded-lg bg-slate-800 px-6 py-2.5 text-xs font-semibold text-white hover:bg-slate-700"
                >
                  Start New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                        Select Intended Specialty or Procedure
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SPECIALTIES.map((s) => (
                          <div
                            key={s.id}
                            onClick={() => setSelectedSpecialty(s.id)}
                            className={`cursor-pointer rounded-xl border p-4 transition ${
                              selectedSpecialty === s.id
                                ? 'border-amber-400 bg-amber-400/10 shadow-sm'
                                : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                            }`}
                          >
                            <div className="font-semibold text-sm text-white">{s.name}</div>
                            <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                              <span>Estimated: <strong className="text-amber-400">${s.prices.iran}</strong></span>
                              <span className="text-[11px] text-emerald-400">Save {s.savings}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex items-center gap-1.5 rounded-lg bg-amber-400 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition"
                      >
                        Next: Clinical Details
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Target Timeframe</label>
                        <select
                          value={timeframe}
                          onChange={(e) => setTimeframe(e.target.value)}
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        >
                          <option>As soon as possible</option>
                          <option>Within 1 Month</option>
                          <option>In 1 - 3 Months</option>
                          <option>Flexible / Planning</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Patient Age</label>
                        <input
                          type="number"
                          placeholder="e.g. 38"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Patient Gender</label>
                        <div className="flex gap-2">
                          {(['Male', 'Female'] as const).map((g) => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => setGender(g)}
                              className={`flex-1 rounded-lg border py-2.5 text-xs font-semibold ${
                                gender === g
                                  ? 'border-amber-400 bg-amber-400 text-slate-950'
                                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600'
                              }`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Medical History / Symptoms / Surgeon Preferences
                      </label>
                      <textarea
                        rows={4}
                        value={medicalNotes}
                        onChange={(e) => setMedicalNotes(e.target.value)}
                        placeholder="Please describe symptoms, prior surgeries, or specific requirements..."
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex items-center gap-1.5 rounded-lg bg-amber-400 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition"
                      >
                        Next: Contact & Tier
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Selected Concierge Tier</label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['essential', 'premium', 'royal'] as PackageTier[]).map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setSelectedTier(tier)}
                            className={`rounded-lg border py-2.5 text-xs font-semibold capitalize transition ${
                              selectedTier === tier
                                ? 'border-amber-400 bg-amber-400 text-slate-950'
                                : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your legal name"
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Country of Residence *</label>
                        <input
                          type="text"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="e.g. UAE, UK, Tanzania, India"
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">WhatsApp / Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+971 50 000 0000"
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/50 p-4 text-center">
                      <UploadCloud className="mx-auto h-6 w-6 text-slate-400" />
                      <div className="mt-1 text-xs text-slate-300 font-medium">Medical Reports & Photos (Optional)</div>
                      <p className="text-[11px] text-slate-500">
                        You may also share confidential records directly with your physician over secure WhatsApp.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 rounded-lg bg-amber-400 px-8 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 disabled:opacity-50 transition"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                        <Lock className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#060c14] py-12 text-slate-400 text-xs">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-bold text-white text-sm">MAHAM HEALTH</span>
            <p className="mt-1 text-slate-500">
              A division of Soorin Maham Trade & Industry Development Corp. (شرکت توسعه صنعت و تجارت سورین مهام).
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:health@maham-group.com" className="hover:text-amber-400">health@maham-group.com</a>
            <span>Presence: Iran • Dubai • Tanzania • India</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
