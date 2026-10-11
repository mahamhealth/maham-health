'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  Globe2, 
  Menu, 
  X, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Calendar,
  Sparkles,
  Plane,
  HeartPulse,
  Stethoscope,
  Eye,
  Activity,
  Smile,
  Scissors,
  Users,
  Compass,
  ArrowRight,
  Send,
  HelpCircle
} from 'lucide-react';
import { SPECIALTIES_DATA } from '@/data/specialties';
import { TRANSLATIONS, SupportedLocale, LocaleConfig } from '@/data/translations';

// Specialty icon mapping
const SPECIALTY_ICONS: Record<string, React.ReactNode> = {
  'rhinoplasty': <Sparkles className="w-5 h-5 text-amber-400" />,
  'dental': <Smile className="w-5 h-5 text-amber-400" />,
  'lasik': <Eye className="w-5 h-5 text-amber-400" />,
  'hair-transplant': <Scissors className="w-5 h-5 text-amber-400" />,
  'ivf': <Users className="w-5 h-5 text-amber-400" />,
  'knee-replacement': <Activity className="w-5 h-5 text-amber-400" />,
  'cardiology-stent': <HeartPulse className="w-5 h-5 text-amber-400" />,
  'cancer-treatment': <Stethoscope className="w-5 h-5 text-amber-400" />,
  'bariatric-sleeve': <Compass className="w-5 h-5 text-amber-400" />
};

export default function HomePage() {
  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('rhinoplasty');
  const [isPending, startTransition] = useTransition();

  // Consultation Wizard State
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form Fields
  const [formData, setFormData] = useState({
    specialtyId: 'rhinoplasty',
    timeframe: '1-3-months',
    ageGroup: '30-45',
    gender: 'prefer-not-to-say',
    conciergeTier: 'vip',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientCountry: '',
    briefNotes: '',
    fileDetails: ''
  });

  // Client-side locale detection
  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem('maham_locale') as SupportedLocale;
      if (savedLocale && TRANSLATIONS[savedLocale]) {
        setCurrentLocale(savedLocale);
      } else {
        const browserLang = navigator.language.split('-')[0].toLowerCase();
        if (browserLang === 'fa' || browserLang === 'ar' || browserLang === 'sw' || browserLang === 'hi' || browserLang === 'ur') {
          setCurrentLocale(browserLang as SupportedLocale);
        }
      }
    } catch {
      // Fallback stays English
    }
  }, []);

  const t: LocaleConfig = TRANSLATIONS[currentLocale] || TRANSLATIONS.en;
  const isRtl = t.dir === 'rtl';

  const handleLanguageChange = (locale: SupportedLocale) => {
    startTransition(() => {
      setCurrentLocale(locale);
      try {
        localStorage.setItem('maham_locale', locale);
      } catch {}
      document.documentElement.dir = TRANSLATIONS[locale].dir;
      document.documentElement.lang = locale;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWizardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch('https://formspree.io/f/mzdjwwba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          specialty: formData.specialtyId,
          tier: formData.conciergeTier,
          timeframe: formData.timeframe,
          ageGroup: formData.ageGroup,
          gender: formData.gender,
          fullName: formData.patientName,
          email: formData.patientEmail,
          phone: formData.patientPhone,
          country: formData.patientCountry,
          notes: formData.briefNotes,
          locale: currentLocale,
          submittedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setFormError('Submission failed. Please contact us directly via WhatsApp or health@maham-group.com');
      }
    } catch {
      setFormError('Network connection error. Please contact our 24/7 desk via WhatsApp.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-[#08111d] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-900 ${isRtl ? 'rtl' : 'ltr'}`} dir={t.dir}>
      {/* Background radial effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-900/20 via-indigo-900/10 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08111d]/85 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 ring-1 ring-amber-300/30 group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-xl text-slate-950">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-serif">
                MAHAM <span className="text-amber-400 font-light text-sm tracking-widest uppercase">HEALTH</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Soorin Maham Medical Concierge
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#specialties" className="hover:text-amber-400 transition-colors">
              {t.nav.specialties}
            </a>
            <a href="#why-iran" className="hover:text-amber-400 transition-colors">
              {t.nav.whyIran}
            </a>
            <a href="#concierge" className="hover:text-amber-400 transition-colors">
              {t.nav.concierge}
            </a>
            <a href="#consultation" className="hover:text-amber-400 transition-colors">
              {t.nav.consultation}
            </a>
            <a href="#hospitals" className="hover:text-amber-400 transition-colors">
              {t.nav.hospitals}
            </a>
          </nav>

          {/* Action CTAs & Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Dropdown Selector */}
            <div className="relative group">
              <button 
                type="button" 
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900/80 border border-slate-700/80 rounded-lg hover:border-amber-400/50 hover:text-white transition-all"
                aria-label="Select Language"
              >
                <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.nativeName}</span>
                <span className="text-slate-500 text-[10px]">▼</span>
              </button>

              <div className="absolute right-0 mt-2 w-48 py-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-50">
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-800 mb-1">
                  Supported Languages
                </div>
                {(Object.keys(TRANSLATIONS) as SupportedLocale[]).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleLanguageChange(loc)}
                    className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-slate-800/80 transition-colors ${
                      currentLocale === loc ? 'text-amber-400 font-bold bg-amber-400/5' : 'text-slate-300'
                    }`}
                  >
                    <span>{TRANSLATIONS[loc].nativeName}</span>
                    <span className="text-[10px] text-slate-500 uppercase">{loc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Consult Button */}
            <a
              href="#consultation"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
            <div className="grid grid-cols-3 gap-2 pb-3 border-b border-slate-800">
              {(Object.keys(TRANSLATIONS) as SupportedLocale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    handleLanguageChange(loc);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium text-center border ${
                    currentLocale === loc 
                      ? 'border-amber-400 text-amber-400 bg-amber-400/10' 
                      : 'border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {TRANSLATIONS[loc].nativeName}
                </button>
              ))}
            </div>

            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
              <a 
                href="#specialties" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-400 py-1"
              >
                {t.nav.specialties}
              </a>
              <a 
                href="#why-iran" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-400 py-1"
              >
                {t.nav.whyIran}
              </a>
              <a 
                href="#concierge" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-400 py-1"
              >
                {t.nav.concierge}
              </a>
              <a 
                href="#consultation" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-400 py-1"
              >
                {t.nav.consultation}
              </a>
            </nav>

            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-md"
            >
              {t.hero.ctaPrimary}
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.15]">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#consultation"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                </a>

                <a
                  href="https://wa.me/989055240772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-3 backdrop-blur-md"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-white font-serif tracking-tight">40+</div>
                  <div className="text-xs text-slate-400 font-medium">IPD Partner Centers</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-white font-serif tracking-tight">180+</div>
                  <div className="text-xs text-slate-400 font-medium">Board-Certified Specialists</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-amber-400 font-serif tracking-tight">70–90%</div>
                  <div className="text-xs text-slate-400 font-medium">Potential Savings</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-white font-serif tracking-tight">&lt; 3 Days</div>
                  <div className="text-xs text-slate-400 font-medium">Waiting Time</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Feature Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                  Direct Care Coordination
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white">Full-Spectrum Medical Concierge</h2>
                      <p className="text-xs text-slate-400">Licensed IPD Hospitals in Tehran</p>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3.5 text-xs text-slate-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Personal Medical Case Officer</strong>
                        Fluent in English, Arabic, Persian &amp; Swahili at bedside.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Expedited Iran T-Visa (Medical Visa)</strong>
                        Digital pre-approval documentation processed in 3–5 working days.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">VIP Hospital En-Suite Rooms</strong>
                        Direct access to accredited private wings at Pars, Khatam, and Gandhi.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Post-Op Recovery &amp; Chauffeur</strong>
                        Luxury 5-star hotel partners with round-the-clock nurse monitoring.
                      </div>
                    </div>
                  </div>

                  {/* Callout box */}
                  <div className="mt-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200/90 flex items-center justify-between">
                    <div>
                      <span className="block font-bold text-amber-300">Need immediate case review?</span>
                      <span className="text-[11px] text-slate-400">Our medical board replies within 12 hours.</span>
                    </div>
                    <a
                      href="#consultation"
                      className="px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES & PRICE BENCHMARK SECTION */}
      <section id="specialties" className="py-20 md:py-28 relative z-10 bg-slate-950/60 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {t.specialties.sectionTitle}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Transparent Global Price Benchmark
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              All-inclusive estimates covering clinical procedures, internationally accredited surgical teams, and dedicated care.
            </p>
          </div>

          {/* Table / Cards Showcase */}
          <div className="space-y-6">
            <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <th className="py-4 px-6">{t.specialties.tableProcedure}</th>
                    <th className="py-4 px-6 text-amber-400">{t.specialties.tableIran}</th>
                    <th className="py-4 px-6">{t.specialties.tableIndia}</th>
                    <th className="py-4 px-6">{t.specialties.tableUaeTurkey}</th>
                    <th className="py-4 px-6">{t.specialties.tableUsaUk}</th>
                    <th className="py-4 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {SPECIALTIES_DATA.map((item) => {
                    const localized = t.specialties.items[item.id as keyof typeof t.specialties.items];
                    const title = localized ? localized.name : item.title;
                    const category = localized ? localized.category : item.category;
                    const recovery = localized ? localized.recoveryDays : `${item.recoveryDays} days Stay`;

                    return (
                      <tr 
                        key={item.id}
                        className="hover:bg-slate-800/40 transition-colors group cursor-pointer"
                        onClick={() => {
                          setSelectedSpecialty(item.id);
                          setFormData(prev => ({ ...prev, specialtyId: item.id }));
                          const el = document.getElementById('consultation');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/60 group-hover:border-amber-400/50 transition-colors">
                              {SPECIALTY_ICONS[item.id] || <Stethoscope className="w-5 h-5 text-amber-400" />}
                            </div>
                            <div>
                              <div className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                                {title}
                              </div>
                              <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                                <span>{category}</span>
                                <span className="text-slate-600">•</span>
                                <span className="text-amber-300/80">{recovery}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Iran Price */}
                        <td className="py-5 px-6">
                          <div className="font-extrabold text-amber-400 text-lg font-serif">
                            {item.iranEstimate}
                          </div>
                          <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                            Save up to {item.savings}
                          </span>
                        </td>

                        {/* Benchmark: India */}
                        <td className="py-5 px-6 text-slate-400 font-medium">
                          {item.indiaBenchmark}
                        </td>

                        {/* Benchmark: UAE/Turkey */}
                        <td className="py-5 px-6 text-slate-400 font-medium">
                          {item.uaeTurkeyBenchmark}
                        </td>

                        {/* Benchmark: USA/UK */}
                        <td className="py-5 px-6 text-slate-400 font-medium">
                          {item.usaUkBenchmark}
                        </td>

                        {/* Direct Consultation Link */}
                        <td className="py-5 px-6 text-center">
                          <button
                            type="button"
                            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all border border-slate-700 hover:border-amber-400"
                          >
                            Inquire
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 text-center italic">
              * Indicative medical quotes based on standard uncomplicated clinical protocols. Final quotation prepared upon review of diagnostic tests and surgeon evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* CONCIERGE PACKAGES SECTION */}
      <section id="concierge" className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {t.concierge.sectionTitle}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Curated Concierge Packages
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Choose the level of personal assistance and comfort suited for you and your companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Essential Care Package */}
            <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  Standard Support
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-serif text-white">{t.concierge.standardTitle}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Designed for clinical focus and seamless hospital navigation.
                  </p>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                  {t.concierge.standardFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, conciergeTier: 'standard' }));
                    const el = document.getElementById('consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700"
                >
                  Select Essential Plan
                </button>
              </div>
            </div>

            {/* Luxury VIP Package */}
            <div className="rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-950 border-2 border-amber-400/60 p-8 flex flex-col justify-between shadow-2xl shadow-amber-500/10 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Most Recommended
              </div>

              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
                  All-Inclusive Luxury
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-serif text-white">{t.concierge.vipTitle}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Unrivaled comfort, five-star hospitality, and end-to-end discreet service.
                  </p>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                  {t.concierge.vipFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-200">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, conciergeTier: 'vip' }));
                    const el = document.getElementById('consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all"
                >
                  Select Luxury VIP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IRAN & ACCREDITATION SECTION */}
      <section id="why-iran" className="py-20 md:py-28 bg-slate-950/70 border-y border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {t.whyIran.sectionTitle}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Medical Excellence &amp; Global Value
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Why thousands of discerning patients from the Middle East, East Africa, and Central Asia choose Iran every year.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyIran.points.map((pt, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3 hover:border-amber-400/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold font-serif">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white">{pt.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* Hospitals showcase strip */}
          <div id="hospitals" className="mt-16 p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-white font-serif">Accredited IPD Partner Hospital Network</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Private medical facilities holding International Patient Department licenses from Iran Ministry of Health.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
                <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/60">Pars Hospital</span>
                <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/60">Khatam Al-Anbia</span>
                <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/60">Gandhi Hotel-Hospital</span>
                <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/60">Noor Eye Hospital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP CONSULTATION WIZARD SECTION */}
      <section id="consultation" className="py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {t.wizard.sectionTitle}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Start Your Private Medical Inquiry
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Our medical board prepares a comprehensive feasibility evaluation and customized quotation within 12 hours.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-10 backdrop-blur-xl relative">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
              <div className={`flex items-center gap-3 ${wizardStep >= 1 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                  wizardStep >= 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  1
                </div>
                <span className="text-xs font-semibold hidden sm:inline">{t.wizard.step1Title}</span>
              </div>

              <div className="h-0.5 w-12 sm:w-20 bg-slate-800" />

              <div className={`flex items-center gap-3 ${wizardStep >= 2 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                  wizardStep >= 2 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  2
                </div>
                <span className="text-xs font-semibold hidden sm:inline">{t.wizard.step2Title}</span>
              </div>

              <div className="h-0.5 w-12 sm:w-20 bg-slate-800" />

              <div className={`flex items-center gap-3 ${wizardStep >= 3 ? 'text-amber-400' : 'text-slate-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                  wizardStep >= 3 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  3
                </div>
                <span className="text-xs font-semibold hidden sm:inline">{t.wizard.step3Title}</span>
              </div>
            </div>

            {/* Error Message */}
            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Success State */}
            {formSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-serif text-white">{t.wizard.successTitle}</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.wizard.successDesc}
                </p>

                {/* Direct WhatsApp Immediate Forward */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {(() => {
                    const selectedObj = SPECIALTIES_DATA.find(s => s.id === formData.specialtyId);
                    const whatsappMsg = `Hello Maham Health Concierge,\n\nI have submitted my medical inquiry:\n- Specialty: ${selectedObj?.title || formData.specialtyId}\n- Name: ${formData.patientName}\n- Country: ${formData.patientCountry || 'International'}\n- Package: ${formData.conciergeTier.toUpperCase()}\n- Notes: ${formData.briefNotes || 'None'}\n\nPlease review my medical travel case.`;
                    const encodedWhatsappMsg = encodeURIComponent(whatsappMsg);
                    const whatsappUrl = `https://wa.me/989055240772?text=${encodedWhatsappMsg}`;

                    return (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Open Consultation on WhatsApp</span>
                      </a>
                    );
                  })()}

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setWizardStep(1);
                    }}
                    className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWizardSubmit} className="space-y-6">
                {/* STEP 1: Select Specialty & Tier */}
                {wizardStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        {t.wizard.fieldSpecialty} *
                      </label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {SPECIALTIES_DATA.map((item) => {
                          const localized = t.specialties.items[item.id as keyof typeof t.specialties.items];
                          const name = localized ? localized.name : item.title;
                          const isSelected = formData.specialtyId === item.id;

                          return (
                            <button
                              type="button"
                              key={item.id}
                              onClick={() => setFormData(prev => ({ ...prev, specialtyId: item.id }))}
                              className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                                isSelected 
                                  ? 'border-amber-400 bg-amber-400/10 text-white' 
                                  : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                                  {SPECIALTY_ICONS[item.id] || <Stethoscope className="w-4 h-4 text-amber-400" />}
                                </span>
                                <span className="text-[11px] font-bold text-amber-400">{item.iranEstimate}</span>
                              </div>
                              <span className="text-xs font-semibold">{name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Concierge Level Selector */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Select Concierge Level *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, conciergeTier: 'standard' }))}
                          className={`p-4 rounded-2xl border text-left transition-all ${
                            formData.conciergeTier === 'standard'
                              ? 'border-amber-400 bg-amber-400/10'
                              : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-xs font-bold text-white">{t.concierge.standardTitle}</div>
                          <div className="text-[11px] text-slate-400 mt-1">Medical coordination &amp; transfers</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, conciergeTier: 'vip' }))}
                          className={`p-4 rounded-2xl border text-left transition-all ${
                            formData.conciergeTier === 'vip'
                              ? 'border-amber-400 bg-amber-400/10'
                              : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-xs font-bold text-amber-400">{t.concierge.vipTitle} (VIP)</div>
                          <div className="text-[11px] text-slate-400 mt-1">5-Star luxury, private chauffeur</div>
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors flex items-center gap-2"
                      >
                        <span>Next: Timeline &amp; Health Profile</span>
                        <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Timeframe & Medical Profile */}
                {wizardStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      {/* Timeframe */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          {t.wizard.fieldTimeframe} *
                        </label>
                        <select
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
                        >
                          <option value="immediate">Immediate (&lt; 2 weeks)</option>
                          <option value="1-month">Within 1 Month</option>
                          <option value="1-3-months">1 to 3 Months</option>
                          <option value="exploring">Flexible / Exploring</option>
                        </select>
                      </div>

                      {/* Age Group */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          {t.wizard.fieldAge}
                        </label>
                        <select
                          name="ageGroup"
                          value={formData.ageGroup}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
                        >
                          <option value="under-18">Under 18</option>
                          <option value="18-30">18 – 30</option>
                          <option value="30-45">30 – 45</option>
                          <option value="45-60">45 – 60</option>
                          <option value="60-plus">60+</option>
                        </select>
                      </div>

                      {/* Gender */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          {t.wizard.fieldGender}
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    {/* Brief Clinical Notes */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        {t.wizard.fieldNotes}
                      </label>
                      <textarea
                        name="briefNotes"
                        rows={3}
                        value={formData.briefNotes}
                        onChange={handleInputChange}
                        placeholder="Please describe symptoms, existing diagnoses, previous surgeries, or specific surgeon preferences..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(1)}
                        className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700 transition-colors"
                      >
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={() => setWizardStep(3)}
                        className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors flex items-center gap-2"
                      >
                        <span>Next: Patient Contact &amp; Records</span>
                        <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Details & Submit */}
                {wizardStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          {t.wizard.fieldName} *
                        </label>
                        <input
                          type="text"
                          required
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          placeholder="Full Name (as in passport)"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
                        />
                      </div>

                      {/* Country of Residence */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          {t.wizard.fieldCountry} *
                        </label>
                        <input
                          type="text"
                          required
                          name="patientCountry"
                          value={formData.patientCountry}
                          onChange={handleInputChange}
                          placeholder="e.g. Tanzania, UAE, Oman, India, UK"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* WhatsApp / Phone */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          {t.wizard.fieldPhone} *
                        </label>
                        <input
                          type="tel"
                          required
                          name="patientPhone"
                          value={formData.patientPhone}
                          onChange={handleInputChange}
                          placeholder="+255 / +971 / +98 Phone Number"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          {t.wizard.fieldEmail} *
                        </label>
                        <input
                          type="email"
                          required
                          name="patientEmail"
                          value={formData.patientEmail}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Confidentiality note */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                      <div className="font-bold text-slate-300 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        <span>Strict Medical Privacy &amp; Non-Disclosure</span>
                      </div>
                      <p>
                        Your medical data is shared exclusively with the attending Chief of Department for clinical review. We never share records with third parties.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700 transition-colors"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 disabled:opacity-50"
                      >
                        {formSubmitting ? (
                          <span>Submitting Case...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>{t.wizard.submitButton}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 relative z-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: Brand */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm">
                  M
                </div>
                <span className="font-bold text-base text-white tracking-tight font-serif">
                  MAHAM HEALTH
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                {t.legal.tradeNote}
              </p>
              <div className="text-[11px] text-slate-500">
                Operating desks in Tehran, Dubai, Dar es Salaam &amp; Mumbai.
              </div>
            </div>

            {/* Col 2: Specialties */}
            <div className="space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Specialties</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#specialties" className="hover:text-amber-400">Cosmetic Rhinoplasty</a></li>
                <li><a href="#specialties" className="hover:text-amber-400">Titanium Dental Implants</a></li>
                <li><a href="#specialties" className="hover:text-amber-400">Femto-LASIK Vision Correction</a></li>
                <li><a href="#specialties" className="hover:text-amber-400">FUE Hair Restoration</a></li>
                <li><a href="#specialties" className="hover:text-amber-400">IVF &amp; Fertility Protocols</a></li>
              </ul>
            </div>

            {/* Col 3: Concierge & Hospitals */}
            <div className="space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Patient Concierge</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#concierge" className="hover:text-amber-400">Iran T-Visa Assistance</a></li>
                <li><a href="#concierge" className="hover:text-amber-400">5-Star Hotel Suites</a></li>
                <li><a href="#concierge" className="hover:text-amber-400">Airport VIP Meet &amp; Greet</a></li>
                <li><a href="#hospitals" className="hover:text-amber-400">Pars &amp; Gandhi IPD Wings</a></li>
                <li><a href="#consultation" className="hover:text-amber-400">Direct Case Submission</a></li>
              </ul>
            </div>

            {/* Col 4: Contact & Inquiries */}
            <div className="space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Direct Inquiries</h5>
              <div className="space-y-2 text-slate-300">
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">Case Evaluation Desk</span>
                  <a href="mailto:health@maham-group.com" className="text-amber-400 hover:underline">
                    health@maham-group.com
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">WhatsApp Concierge Desk</span>
                  <a href="https://wa.me/989055240772" className="text-emerald-400 hover:underline">
                    +98 905 524 0772
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">Parent Corporation</span>
                  <span>Soorin Maham Trade &amp; Industry Development Corp.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Soorin Maham Corp. All rights reserved. {t.legal.disclaimer}
            </div>
            <div className="flex items-center gap-6">
              <a href="#consultation" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#consultation" className="hover:text-slate-400">Terms of Care</a>
              <a href="#consultation" className="hover:text-slate-400">IPD Accreditation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
