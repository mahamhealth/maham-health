'use client';

import React, { useState } from 'react';
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
  Download,
  Check
} from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

interface Specialty {
  id: string;
  name: string;
  category: string;
  stayDays: string;
  recoveryDays: string;
  iranPrice: number;
  indiaPrice: number;
  uaeTurkeyPrice: number;
  usUkPrice: number;
}

interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
  name: string;
}

const CURRENCIES: Record<string, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, name: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: 'Euro' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, name: 'UAE Dirham' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound' },
  OMR: { code: 'OMR', symbol: 'ر.ع.', rate: 0.38, name: 'Omani Rial' },
  INR: { code: 'INR', symbol: '₹', rate: 83.0, name: 'Indian Rupee' },
};

const SPECIALTIES: Specialty[] = [
  {
    id: 'rhinoplasty',
    name: 'Rhinoplasty & Facial Plastic Surgery',
    category: 'Plastic Surgery',
    stayDays: '7–10 days',
    recoveryDays: '10–14 days',
    iranPrice: 2500,
    indiaPrice: 4000,
    uaeTurkeyPrice: 6500,
    usUkPrice: 12000,
  },
  {
    id: 'dental',
    name: 'Dental Implants & Smile Makeover',
    category: 'Dental Care',
    stayDays: '5–7 days',
    recoveryDays: '3–5 days',
    iranPrice: 3200,
    indiaPrice: 5000,
    uaeTurkeyPrice: 8000,
    usUkPrice: 22000,
  },
  {
    id: 'lasik',
    name: 'LASIK & Advanced Eye Surgery',
    category: 'Ophthalmology',
    stayDays: '3–4 days',
    recoveryDays: '2–3 days',
    iranPrice: 1400,
    indiaPrice: 2500,
    uaeTurkeyPrice: 4000,
    usUkPrice: 8500,
  },
  {
    id: 'hair',
    name: 'Hair Transplant (FUE / DHI)',
    category: 'Hair Restoration',
    stayDays: '5–6 days',
    recoveryDays: '7–10 days',
    iranPrice: 1800,
    indiaPrice: 3000,
    uaeTurkeyPrice: 4500,
    usUkPrice: 15000,
  },
  {
    id: 'ivf',
    name: 'IVF & Fertility Treatments',
    category: 'Reproductive Health',
    stayDays: '10–21 days',
    recoveryDays: 'Cycle dependent',
    iranPrice: 3800,
    indiaPrice: 5500,
    uaeTurkeyPrice: 9000,
    usUkPrice: 24000,
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic Knee / Hip Replacement',
    category: 'Orthopedics',
    stayDays: '14–21 days',
    recoveryDays: '6–12 weeks',
    iranPrice: 6500,
    indiaPrice: 9000,
    uaeTurkeyPrice: 14000,
    usUkPrice: 45000,
  },
  {
    id: 'cardiology',
    name: 'Cardiology Stent & Angiography',
    category: 'Cardiology',
    stayDays: '5–10 days',
    recoveryDays: '1–3 weeks',
    iranPrice: 5200,
    indiaPrice: 7500,
    uaeTurkeyPrice: 12000,
    usUkPrice: 38000,
  },
  {
    id: 'oncology',
    name: 'Oncology Initial Treatment & Protocol',
    category: 'Cancer Care',
    stayDays: '10–21 days',
    recoveryDays: 'Protocol dependent',
    iranPrice: 7000,
    indiaPrice: 10000,
    uaeTurkeyPrice: 16000,
    usUkPrice: 55000,
  },
  {
    id: 'bariatric',
    name: 'Bariatric Sleeve & Weight Loss',
    category: 'General Surgery',
    stayDays: '7–10 days',
    recoveryDays: '2–4 weeks',
    iranPrice: 3900,
    indiaPrice: 6000,
    uaeTurkeyPrice: 9500,
    usUkPrice: 25000,
  },
];

export default function HomePage({ initialLanguage = 'en' }: { initialLanguage?: Language }) {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const [calcSpecialtyId, setCalcSpecialtyId] = useState<string>('rhinoplasty');
  const [calcTier, setCalcTier] = useState<'essential' | 'premium' | 'vip'>('premium');
  const [currencyCode, setCurrencyCode] = useState<string>('USD');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Wizard state
  const [wizardSpecialty, setWizardSpecialty] = useState<string>('Rhinoplasty');
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [timeframe, setTimeframe] = useState<string>('Within 1 month');
  const [gender, setGender] = useState<'Male' | 'Female'>('Female');
  const [age, setAge] = useState<string>('30');
  const [medicalNotes, setMedicalNotes] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<'Essential Care' | 'Premium Comfort' | 'VIP Elite Concierge'>('Premium Comfort');
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const selectedSpecialty = SPECIALTIES.find((s) => s.id === calcSpecialtyId) || SPECIALTIES[0];
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  const tierOffset = calcTier === 'vip' ? 2400 : calcTier === 'premium' ? 1200 : 500;
  const iranTotalUSD = selectedSpecialty.iranPrice + tierOffset;
  const savingsUSD = selectedSpecialty.usUkPrice - iranTotalUSD;

  const formatMoney = (amountUSD: number) => {
    const converted = Math.round(amountUSD * currency.rate);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const isRTL = lang === 'fa' || lang === 'ar' || lang === 'ur';

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `Hello Maham Health,%0A*Inquiry Details:*%0A- Specialty: ${wizardSpecialty}%0A- Tier: ${selectedTier}%0A- Name: ${fullName}%0A- Country: ${country}%0A- WhatsApp: ${whatsapp}%0A- Email: ${email}%0A- Notes: ${medicalNotes}`;
    window.open(`https://wa.me/989055240772?text=${msg}`, '_blank');
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B3C95] flex items-center justify-center text-white font-bold text-xl shadow-md">
              M
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#06101E]">MAHAM HEALTH</span>
              <span className="block text-[10px] tracking-widest text-[#0B3C95] font-semibold uppercase">
                Medical Concierge Iran
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Currency Selector */}
            <select
              value={currencyCode}
              onChange={(e) => setCurrencyCode(e.target.value)}
              aria-label="Select Currency"
              className="text-xs font-medium bg-slate-100 border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#0B3C95]"
            >
              {Object.keys(CURRENCIES).map((code) => (
                <option key={code} value={code}>
                  {code} ({CURRENCIES[code].symbol})
                </option>
              ))}
            </select>

            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              {(['en', 'fa', 'ar', 'sw', 'hi', 'ur'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-semibold uppercase rounded-md transition-all ${
                    lang === l ? 'bg-[#0B3C95] text-white shadow-sm' : 'text-slate-600 hover:text-[#0B3C95]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/989055240772"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#0B3C95] hover:bg-[#082d70] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20 lg:py-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B3C95] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Medical Tourism Concierge in Iran</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#06101E] leading-tight">
                World-Class Healthcare <br />
                <span className="text-[#0B3C95]">Meet 5-Star Luxury</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Experience exceptional medical procedures in Iran with Soorin Maham Trade & Industry Development Corporation. Enjoy up to 85% savings, JCI-accredited hospitals, expert surgeons, and end-to-end VIP concierge service.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 bg-[#0B3C95] hover:bg-[#082d70] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Treatment Estimate</span>
                </a>
                <a
                  href="#wizard"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0B3C95] border border-blue-200 font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all text-sm"
                >
                  <span>Start Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-bold text-[#06101E]">99.4%</div>
                  <div className="text-xs text-slate-500 font-medium">Patient Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#06101E]">JCI</div>
                  <div className="text-xs text-slate-500 font-medium">Accredited Hospitals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#06101E]">85%</div>
                  <div className="text-xs text-slate-500 font-medium">Average Cost Savings</div>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 relative">
                <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  VIP Concierge
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3C95]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Soorin Maham Assurance</h3>
                    <p className="text-xs text-slate-500">Official Medical Tourism Provider</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Medical Visa (T-Visa) Fast-Track Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Dedicated 24/7 Personal Interpreter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>5-Star Hotel & Airport VIP Transfer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Board-Certified Surgeons & Top IPD Clinics</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Presence in Tehran, Shiraz, Kish</span>
                  <span className="text-xs font-bold text-[#0B3C95]">Global Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cost Calculator & Three-Tier Pricing */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#06101E] tracking-tight sm:text-4xl">
              Transparent Cost Calculator & Package Tiers
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Select your procedure, choose your preferred luxury tier, and instantly compare Iran treatment estimates against US, UK, and regional benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Select Procedure / Specialty
                </label>
                <select
                  value={calcSpecialtyId}
                  onChange={(e) => setCalcSpecialtyId(e.target.value)}
                  aria-label="Select Procedure Specialty"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0B3C95]"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Stay & Recovery Timeline Info Badge */}
              <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0B3C95]">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Recommended Stay</span>
                    <span className="text-sm font-bold text-slate-800">{selectedSpecialty.stayDays}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Recovery Timeline</span>
                    <span className="text-sm font-bold text-slate-800">{selectedSpecialty.recoveryDays}</span>
                  </div>
                </div>
              </div>

              {/* Three-Tier Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Choose Concierge Package Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalcTier('essential')}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      calcTier === 'essential'
                        ? 'border-[#0B3C95] bg-blue-50/50 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">Essential Care</div>
                    <div className="text-xs text-[#0B3C95] font-semibold mt-1">+$500 package</div>
                    <div className="text-[11px] text-slate-500 mt-2">4-star hotel, airport transfer & support</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalcTier('premium')}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      calcTier === 'premium'
                        ? 'border-[#0B3C95] bg-blue-50/50 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">Premium Comfort</div>
                    <div className="text-xs text-[#0B3C95] font-semibold mt-1">+$1,200 package</div>
                    <div className="text-[11px] text-slate-500 mt-2">5-star hotel, private nurse & interpreter</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalcTier('vip')}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      calcTier === 'vip'
                        ? 'border-[#0B3C95] bg-blue-50/50 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">VIP Elite Concierge</div>
                    <div className="text-xs text-[#0B3C95] font-semibold mt-1">+$2,400 package</div>
                    <div className="text-[11px] text-slate-500 mt-2">Luxury suite, chauffeur & 24/7 private nurse</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Calculator Output & Quote Download */}
            <div className="lg:col-span-5 bg-[#06101E] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-32 h-32 bg-[#0B3C95]/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Estimated Investment</span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">{selectedSpecialty.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Save {formatMoney(savingsUSD)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Procedure Base Cost:</span>
                    <span className="font-semibold">{formatMoney(selectedSpecialty.iranPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Concierge Tier ({calcTier.toUpperCase()}):</span>
                    <span className="font-semibold">{formatMoney(tierOffset)}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                    <span className="font-bold text-base text-white">Total Iran Estimate:</span>
                    <span className="text-2xl font-extrabold text-amber-400">{formatMoney(iranTotalUSD)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-400">
                  <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                    <div>US / UK Benchmark</div>
                    <div className="text-white font-bold text-sm mt-1">{formatMoney(selectedSpecialty.usUkPrice)}</div>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                    <div>India / UAE Benchmark</div>
                    <div className="text-white font-bold text-sm mt-1">{formatMoney(selectedSpecialty.uaeTurkeyPrice)}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full mt-4 bg-[#0B3C95] hover:bg-[#093077] text-white font-semibold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print Branded Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Patient Journey Timeline & Visa Assurance */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#06101E] tracking-tight sm:text-4xl">
              The 5-Step Seamless Patient Journey
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We handle every logistical and medical detail from your first inquiry to your full recovery at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Share Your Case', desc: 'Send your medical reports, photos, and goals securely.' },
              { step: '02', title: 'Specialist Review', desc: 'Our medical board reviews your file and provides a transparent quote.' },
              { step: '03', title: 'Visa & Travel', desc: 'We issue your official Medical T-Visa and arrange flights and VIP airport pickup.' },
              { step: '04', title: 'Procedure & Care', desc: 'Undergo treatment at a JCI hospital with 24/7 personal interpreter support.' },
              { step: '05', title: 'Return & Follow-Up', desc: 'Receive your Fit-to-Fly certificate and remote post-op checkups.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative">
                <div className="text-3xl font-extrabold text-[#0B3C95]/20 mb-3">{item.step}</div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Visa Assurance Banner */}
          <div className="mt-12 bg-blue-900 text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800 text-blue-200 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Fast-Track Corporate Medical T-Visa</span>
              </div>
              <h3 className="text-2xl font-bold">Guaranteed Visa Support Within 48-72 Hours</h3>
              <p className="text-sm text-blue-100 max-w-2xl">
                Through Soorin Maham’s official corporate registration, we secure direct Ministry of Foreign Affairs medical invitation codes for patients and their companions.
              </p>
            </div>
            <a
              href="#wizard"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm whitespace-nowrap"
            >
              Start Consultation Now
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Wizard */}
      <section id="wizard" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#06101E] tracking-tight sm:text-4xl">
              Start Your Medical Journey
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Complete our secure 3-step assessment to receive a personalized treatment plan and cost breakdown.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Successfully Sent!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. Your request has been forwarded to our senior medical coordinators. WhatsApp has also been opened with your inquiry pre-filled.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#0B3C95] text-white px-6 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleWizardSubmit} className="space-y-8">
                {/* Step Indicators */}
                <div className="flex items-center justify-center gap-4 pb-6 border-b border-slate-200 text-xs font-bold">
                  <div className={`flex items-center gap-2 ${wizardStep === 1 ? 'text-[#0B3C95]' : 'text-slate-400'}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${wizardStep === 1 ? 'bg-[#0B3C95] text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
                    <span>Procedure</span>
                  </div>
                  <div className="w-8 h-px bg-slate-300"></div>
                  <div className={`flex items-center gap-2 ${wizardStep === 2 ? 'text-[#0B3C95]' : 'text-slate-400'}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${wizardStep === 2 ? 'bg-[#0B3C95] text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
                    <span>Package Tier</span>
                  </div>
                  <div className="w-8 h-px bg-slate-300"></div>
                  <div className={`flex items-center gap-2 ${wizardStep === 3 ? 'text-[#0B3C95]' : 'text-slate-400'}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${wizardStep === 3 ? 'bg-[#0B3C95] text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
                    <span>Patient Info</span>
                  </div>
                </div>

                {wizardStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="font-bold text-lg text-slate-900">Step 1: Select Your Treatment & Timeframe</h3>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">Specialty</label>
                      <select
                        value={wizardSpecialty}
                        onChange={(e) => setWizardSpecialty(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0B3C95]"
                      >
                        {SPECIALTIES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">Preferred Timeframe</label>
                        <select
                          value={timeframe}
                          onChange={(e) => setTimeframe(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                        >
                          <option>Within 1 month</option>
                          <option>1-3 months</option>
                          <option>Flexible / Planning</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">Gender</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value as any)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                        >
                          <option>Female</option>
                          <option>Male</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">Age</label>
                        <input
                          type="text"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="bg-[#0B3C95] text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2"
                      >
                        <span>Next: Choose Package</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {wizardStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-bold text-lg text-slate-900">Step 2: Select Concierge Package Tier</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {(['Essential Care', 'Premium Comfort', 'VIP Elite Concierge'] as const).map((t) => (
                        <div
                          key={t}
                          onClick={() => setSelectedTier(t)}
                          className={`p-5 rounded-xl border cursor-pointer transition-all ${
                            selectedTier === t ? 'border-[#0B3C95] bg-blue-50/50 shadow-sm ring-2 ring-[#0B3C95]/20' : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="font-bold text-sm text-slate-900">{t}</div>
                          <div className="text-xs text-[#0B3C95] font-semibold mt-1">
                            {t === 'Essential Care' ? '+$500 package' : t === 'Premium Comfort' ? '+$1,200 package' : '+$2,400 package'}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(1)}
                        className="bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold text-sm"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setWizardStep(3)}
                        className="bg-[#0B3C95] text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2"
                      >
                        <span>Next: Contact Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {wizardStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="font-bold text-lg text-slate-900">Step 3: Your Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sarah Johnson"
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Country of Residence *</label>
                        <input
                          type="text"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="e.g. United Kingdom"
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Number *</label>
                        <input
                          type="text"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+44 7000 000000"
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sarah@example.com"
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Medical History / Notes (Optional)</label>
                      <textarea
                        rows={3}
                        value={medicalNotes}
                        onChange={(e) => setMedicalNotes(e.target.value)}
                        placeholder="Mention any past conditions, medications, or specific questions..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm"
                      ></textarea>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold text-sm"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry & Open WhatsApp</span>
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
      <footer className="bg-[#06101E] text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B3C95] flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <span className="text-lg font-bold text-white">MAHAM HEALTH</span>
                  <span className="block text-[10px] tracking-widest text-blue-400 uppercase font-semibold">
                    Soorin Maham Trade & Industry Development Corporation
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Premier medical tourism concierge connecting international patients with accredited JCI hospitals, board-certified surgeons, and elite travel logistics in Iran.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Contact & Locations</h4>
              <ul className="space-y-2 text-xs">
                <li>Tehran • Shiraz • Kish • Dubai • Mumbai • Dar es Salaam</li>
                <li>WhatsApp: +98 905 524 0772</li>
                <li>Email: health@maham-group.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Legal & Compliance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operated under Soorin Maham Trade & Industry Development Corporation. Final medical quotations are confirmed following direct physician case review.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corporation. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Quote Download Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#0B3C95] uppercase tracking-widest">Official Quote Summary</span>
                <h3 className="text-xl font-bold text-slate-900">Maham Health Concierge</h3>
              </div>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border">
              <div className="flex justify-between">
                <span className="text-slate-500">Procedure:</span>
                <span className="font-bold text-slate-900">{selectedSpecialty.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Tier:</span>
                <span className="font-bold text-slate-900 capitalize">{calcTier} Care</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Recommended Stay:</span>
                <span className="font-bold text-slate-900">{selectedSpecialty.stayDays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Total:</span>
                <span className="font-bold text-[#0B3C95]">{formatMoney(iranTotalUSD)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-slate-500">Estimated Savings:</span>
                <span className="font-bold text-emerald-600">{formatMoney(savingsUSD)}</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 leading-relaxed">
              * Note: This estimate includes procedure, hospital fees, and chosen concierge tier. Final invoice confirmed in USD after official case evaluation by lead surgeon.
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex-1 bg-[#0B3C95] text-white font-semibold py-3 rounded-xl text-sm shadow-md"
              >
                Print / Save PDF
              </button>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="px-6 bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
