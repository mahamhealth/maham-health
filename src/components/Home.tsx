// src/components/Home.tsx
'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ChevronRight, 
  Globe, 
  Sparkles, 
  Building2, 
  Stethoscope, 
  FileText, 
  Download, 
  Calculator, 
  UserCheck, 
  ArrowRight,
  Menu,
  X,
  Star,
  Activity
} from 'lucide-react';

const SPECIALTIES = [
  { id: 'rhinoplasty', category: 'Plastic Surgery', recoveryDays: '7-10 Days', iranPrice: 2200, indiaPrice: 3500, uaeTurkeyPrice: 5000, usUkPrice: 12500, savings: '82%', name: { en: 'Rhinoplasty & Facial Surgery' } },
  { id: 'dental', category: 'Dental Implants', recoveryDays: '3-5 Days', iranPrice: 450, indiaPrice: 700, uaeTurkeyPrice: 1200, usUkPrice: 4000, savings: '88%', name: { en: 'Dental Implants (Per Implant)' } },
  { id: 'lasik', category: 'Ophthalmology', recoveryDays: '2-3 Days', iranPrice: 800, indiaPrice: 1200, uaeTurkeyPrice: 2000, usUkPrice: 5000, savings: '84%', name: { en: 'LASIK Eye Surgery (Both Eyes)' } },
  { id: 'hair', category: 'Hair Restoration', recoveryDays: '4-7 Days', iranPrice: 1500, indiaPrice: 2000, uaeTurkeyPrice: 3500, usUkPrice: 10000, savings: '85%', name: { en: 'FUE / DHI Hair Transplant' } },
  { id: 'ivf', category: 'Fertility', recoveryDays: '10-14 Days', iranPrice: 3500, indiaPrice: 4500, uaeTurkeyPrice: 7000, usUkPrice: 18000, savings: '80%', name: { en: 'IVF Treatment Cycle' } },
  { id: 'orthopedic', category: 'Orthopedics', recoveryDays: '14-21 Days', iranPrice: 5500, indiaPrice: 7500, uaeTurkeyPrice: 11000, usUkPrice: 35000, savings: '84%', name: { en: 'Knee / Hip Joint Replacement' } },
];

const CLINICS = [
  { name: 'Gandhi Hospital', location: 'Tehran', specialty: 'JCI Accredited, Multi-Specialty & Plastic Surgery' },
  { name: 'Moheb Hospital', location: 'Tehran', specialty: 'Advanced Cardiac & Orthopedic Center' },
  { name: 'Kish International Hospital', location: 'Kish Island', specialty: 'Resort Recovery & Premium VIP Suites' },
  { name: 'Dorna Clinic', location: 'Shiraz', specialty: 'Ophthalmology & Fertility Excellence' },
];

const FAQS = [
  { q: 'Why is medical care in Iran so affordable?', a: 'Highly skilled board-certified doctors, favorable exchange rates, and lower operational overhead allow top-tier JCI hospitals to offer world-class care at a fraction of US/UK costs.' },
  { q: 'How does the T-Visa process work?', a: 'Maham Health submits your official medical dossier directly to the Iranian Ministry of Foreign Affairs to issue an expedited T-Visa authorization code within 48–72 hours.' },
  { q: 'Who will assist me during my stay?', a: 'A dedicated, bilingual VIP concierge manager greets you at the airport, accompanies you to all hospital appointments, and manages your luxury recovery hotel.' }
];

const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, name: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: 'Euro' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, name: 'UAE Dirham' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound' },
  OMR: { code: 'OMR', symbol: 'ر.ع.', rate: 0.38, name: 'Omani Rial' },
  INR: { code: 'INR', symbol: '₹', rate: 83.0, name: 'Indian Rupee' },
};

export default function HomePage({ initialLanguage = 'en' }: { initialLanguage?: string }) {
  const [currency, setCurrency] = useState<keyof typeof CURRENCIES>('USD');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>(SPECIALTIES[0].id);
  const [packageTier, setPackageTier] = useState<'essential' | 'premium' | 'elite'>('premium');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [wizardSubmitted, setWizardSubmitted] = useState(false);

  const curr = CURRENCIES[currency];
  const selectedSpecialty = SPECIALTIES.find(s => s.id === selectedSpecialtyId) || SPECIALTIES[0];

  const formatMoney = (amountUSD: number) => {
    const converted = Math.round(amountUSD * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  const tierOffset = packageTier === 'essential' ? 500 : packageTier === 'premium' ? 1200 : 2400;
  const iranTotalUSD = selectedSpecialty.iranPrice + tierOffset;
  const savingsUSD = Math.max(0, selectedSpecialty.usUkPrice - iranTotalUSD);

  const handleWizardSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setWizardSubmitted(true);
  const text = `*New Medical Inquiry - Maham Health*%0A*Name:* ${patientName}%0A*Email:* ${patientEmail}%0A*Treatment:* ${selectedSpecialty.name.en}%0A*Package:* ${packageTier.toUpperCase()}%0A*Estimated Total:* ${formatMoney(iranTotalUSD)}%0A*Phone:* ${patientPhone}%0A*Notes:* ${patientNotes}`;
  window.open(`https://wa.me/989055240772?text=${text}`, '_blank');
};

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar */}
      <div className="bg-[#08111d] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Tehran • Shiraz • Kish • Dubai • Mumbai</span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Soorin Maham Trade & Industry</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:health@maham-group.com" className="hover:text-white transition flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-blue-400" /> health@maham-group.com
            </a>
            <span className="text-slate-600">|</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as any)}
              aria-label="Select Currency"
              className="bg-slate-900 text-slate-200 border border-slate-800 rounded px-1.5 py-0.5 text-xs outline-none focus:border-blue-500"
            >
              {Object.keys(CURRENCIES).map(c => (
                <option key={c} value={c}>{c} ({CURRENCIES[c as keyof typeof CURRENCIES].symbol})</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white shadow-md">
              <PlusIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">MAHAM HEALTH</span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-500 font-medium">Medical Tourism Concierge</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
            <a href="#specialties" className="hover:text-blue-600 transition">Specialties</a>
            <a href="#calculator" className="hover:text-blue-600 transition">Cost Estimator</a>
            <a href="#clinics" className="hover:text-blue-600 transition">Top Hospitals</a>
            <a href="#process" className="hover:text-blue-600 transition">Journey</a>
            <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/989055240772"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 transition flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> WhatsApp VIP
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-slate-700 p-2" aria-label="Toggle Menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl">
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Specialties</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Cost Estimator</a>
            <a href="#clinics" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Top Hospitals</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Journey</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">FAQ</a>
            <div className="pt-2">
              <a
                href="https://wa.me/989055240772"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white text-center py-3 rounded-xl font-medium block shadow"
              >
                WhatsApp VIP Concierge
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white py-24 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Soorin Maham Medical Concierge
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              World-Class Healthcare in Iran, Curated with Luxury.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience JCI-accredited hospitals, world-renowned surgeons, and 70-90% savings compared to Western benchmarks. Complete VIP concierge service from arrival to recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#calculator" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/30 transition flex items-center justify-center gap-2">
                Calculate Your Savings <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/989055240772" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" /> Free WhatsApp Consultation
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div>
                <div className="text-3xl font-extrabold text-white">70-90%</div>
                <div className="text-xs text-slate-400 mt-1">Average Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">JCI</div>
                <div className="text-xs text-slate-400 mt-1">Accredited Partner Hospitals</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">24/7</div>
                <div className="text-xs text-slate-400 mt-1">Dedicated VIP Concierge</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Fast-Track T-Visa
              </div>
              <h3 className="text-xl font-bold mb-2">Request Free Treatment Plan</h3>
              <p className="text-slate-300 text-xs mb-6">Upload your medical scans or reports for direct evaluation by top Iranian specialists within 24 hours.</p>
              
              <form onSubmit={handleWizardSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Select Specialty</label>
                  <select
                    value={selectedSpecialtyId}
                    onChange={(e) => setSelectedSpecialtyId(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {SPECIALTIES.map(s => (
                      <option key={s.id} value={s.id}>{s.name.en}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Medical Notes or Symptoms</label>
                  <textarea
                    rows={2}
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    placeholder="Briefly describe your condition or desired procedure..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-5 h-5" /> Get Free Opinion & Quote via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">World-Class Procedures</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">High-Precision Medical Specialties</h2>
          <p className="text-slate-600 mt-3">Compare Iranian clinical excellence against Western benchmarks with transparent pricing and guaranteed safety.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((s) => (
            <div key={s.id} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">{s.category}</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Save {s.savings}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.name.en}</h3>
                <div className="text-xs text-slate-500 flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-blue-600" /> Recovery: {s.recoveryDays}
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Iran VIP Package:</span>
                    <span className="font-bold text-blue-600">{formatMoney(s.iranPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">India Benchmark:</span>
                    <span className="font-semibold text-slate-700">{formatMoney(s.indiaPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">UAE / Turkey:</span>
                    <span className="font-semibold text-slate-700">{formatMoney(s.uaeTurkeyPrice)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-200">
                    <span className="text-slate-500">US / UK Average:</span>
                    <span className="font-bold line-through text-slate-400">{formatMoney(s.usUkPrice)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedSpecialtyId(s.id);
                  const el = document.getElementById('calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm"
              >
                Configure Treatment <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="py-20 bg-slate-900 text-white px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full">Transparent Budgeting</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">Interactive Treatment Cost Estimator</h2>
            <p className="text-slate-400 mt-3">Customize your medical journey package and see exact savings instantly.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-800/50 border border-slate-700/60 p-6 sm:p-10 rounded-3xl">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">1. Select Medical Specialty</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-2">
                  {SPECIALTIES.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSpecialtyId(s.id)}
                      className={`text-left p-3.5 rounded-2xl border transition flex flex-col justify-between ${selectedSpecialtyId === s.id ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'}`}
                    >
                      <span className="font-bold text-sm">{s.name.en}</span>
                      <span className="text-xs text-blue-400 mt-1 font-semibold">From {formatMoney(s.iranPrice)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">2. Select Service Tier</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'essential', name: 'Essential Care', desc: 'Standard VIP + Hotel' },
                    { id: 'premium', name: 'Premium Comfort', desc: '5-Star + Private Nurse' },
                    { id: 'elite', name: 'Elite Luxury', desc: 'Palace Stay + Bodyguard' },
                  ].map(tier => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setPackageTier(tier.id as any)}
                      className={`p-4 rounded-2xl border text-left transition ${packageTier === tier.id ? 'bg-blue-600 border-blue-500 text-white shadow-lg' : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'}`}
                    >
                      <div className="font-bold text-sm">{tier.name}</div>
                      <div className="text-[10px] opacity-80 mt-1">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-900 p-8 rounded-3xl border border-blue-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Estimated Summary</span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">Save {formatMoney(savingsUSD)}</span>
                </div>

                <h3 className="text-2xl font-extrabold mb-1">{selectedSpecialty.name.en}</h3>
                <p className="text-xs text-slate-400 mb-6">Package Tier: <span className="uppercase text-white font-bold">{packageTier}</span></p>

                <div className="space-y-3 py-4 border-t border-b border-slate-700/60 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Base Medical Cost:</span>
                    <span className="font-bold">{formatMoney(selectedSpecialty.iranPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tier Concierge & Stay:</span>
                    <span className="font-bold">{formatMoney(tierOffset)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-extrabold text-blue-300 pt-3 border-t border-slate-700">
                    <span>Total Estimate:</span>
                    <span>{formatMoney(iranTotalUSD)}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 leading-relaxed space-y-1 mb-8">
                  <p>✓ Includes hospital fees, surgeon honorarium, VIP airport pickup, and 4-star/5-star accommodation.</p>
                  <p>✓ Free T-Visa official support letter issued within 48 hours.</p>
                </div>
              </div>

              <a
                href={`https://wa.me/989055240772?text=Hello%20Maham%20Health,%20I%20want%20to%20book%20${encodeURIComponent(selectedSpecialty.name.en)}%20(${packageTier.toUpperCase()}%20package)%20estimated%20at%20${encodeURIComponent(formatMoney(iranTotalUSD))}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-emerald-600/30 transition flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-5 h-5" /> Book This Package on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Hospitals */}
      <section id="clinics" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Excellence in Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Our JCI-Accredited Partner Hospitals</h2>
          <p className="text-slate-600 mt-3">We partner exclusively with Iran&apos;s most advanced medical centers equipped with state-of-the-art technology and dedicated International Patient Departments (IPD).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINICS.map((clinic, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{clinic.name}</h3>
              <p className="text-xs text-blue-600 font-medium mb-3">{clinic.location}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{clinic.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Journey Process */}
      <section id="process" className="py-20 bg-slate-100 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">Seamless Experience</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Your 5-Step Medical Journey</h2>
            <p className="text-slate-600 mt-3">From your first online inquiry to a safe, fully recovered return home, Maham Health manages every detail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Consultation & Review', desc: 'Submit records via WhatsApp or web form for doctor evaluation.' },
              { step: '02', title: 'Quote & Treatment Plan', desc: 'Receive transparent pricing, surgeon profile, and itinerary.' },
              { step: '03', title: 'Visa & Travel Booking', desc: 'We issue official T-Visa support and book VIP flights/hotels.' },
              { step: '04', title: 'Arrival & Surgery', desc: 'Airport VIP greeting, private nurse, and surgery at JCI hospital.' },
              { step: '05', title: 'Recovery & Return', desc: 'Post-op checkups, Tehran/Shiraz tourism, and safe flight home.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-black text-blue-600/20">{item.step}</span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">Frequently Asked Questions</h2>
          <p className="text-slate-600 mt-3">Everything you need to know about traveling to Iran for world-class medical care.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#06101e] text-slate-400 py-16 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <PlusIcon className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">MAHAM HEALTH</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              A premier medical-tourism concierge operated under Soorin Maham Trade & Industry Development Corporation. Connecting international patients with Iran&apos;s finest medical specialists.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Offices & Presence</h4>
            <ul className="space-y-2 text-xs">
              <li>🇮🇷 Tehran & Shiraz (Headquarters)</li>
              <li>🇮🇷 Kish & Qeshm Free Zones</li>
              <li>🇦🇪 Dubai, UAE</li>
              <li>🇹🇿 Dar es Salaam, Tanzania</li>
              <li>🇮🇳 Lucknow & Mumbai, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Specialties</h4>
            <ul className="space-y-2 text-xs">
              <li>Rhinoplasty & Facial Surgery</li>
              <li>Dental Implants & Smile Makeover</li>
              <li>IVF & Fertility Treatments</li>
              <li>Orthopedic Joint Replacement</li>
              <li>Cardiology & Bariatric Surgery</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Direct Contact</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href="https://wa.me/989055240772" className="hover:text-white transition">+98 905 524 0772</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:health@maham-group.com" className="hover:text-white transition">health@maham-group.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>www.maham-group.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corporation. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/disclaimer" className="hover:text-white transition">Medical Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
