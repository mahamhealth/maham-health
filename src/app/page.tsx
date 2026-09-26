'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe2,
  HeartPulse,
  Menu,
  MessageCircle,
  ShieldCheck,
  Upload,
  X,
} from 'lucide-react';
import { TRANSLATIONS, type Language } from '@/data/translations';
import { SPECIALTIES_DATA } from '@/data/specialties';

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
  specialty: '',
  timeframe: '',
  age: '',
  gender: '',
  notes: '',
  name: '',
  country: '',
  whatsapp: '',
  email: '',
  package: 'essential',
};

const languageOptions: Language[] = ['en', 'fa', 'ar', 'sw', 'hi', 'ur'];

export default function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const [modal, setModal] = useState(false);
  const [chat, setChat] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [notice, setNotice] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = TRANSLATIONS[lang];

  const openConsultation = (
    specialty = '',
    packageChoice: PackageChoice = 'essential',
  ) => {
    setForm({
      ...initialForm,
      specialty,
      package: packageChoice,
    });
    setStep(1);
    setSelectedFiles([]);
    setNotice('');
    setModal(true);
  };

  const closeConsultation = () => {
    setModal(false);
    setNotice('');
  };

  useEffect(() => {
    if (!modal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeConsultation();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modal]);

  const updateForm = <K extends keyof ConsultationForm>(
    key: K,
    value: ConsultationForm[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const nextStep = () => {
    setNotice('');
    if (step === 1 && !form.specialty) {
      setNotice('Please select a treatment to continue.');
      return;
    }
    if (step === 2 && (!form.timeframe || !form.age || !form.gender)) {
      setNotice('Please complete the required fields to continue.');
      return;
    }
    setStep((current) => Math.min(current + 1, 3));
  };

  const submitDemo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSelectedFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setNotice(
      'Demo only: your information and files were not sent or saved. Please contact us directly to continue.',
    );
  };

  const formatPrice = (price: number) =>
    `$${price.toLocaleString(lang === 'fa' || lang === 'ar' || lang === 'ur' ? 'en-US' : undefined)}`;

  return (
    <main dir={t.dir} className="min-h-screen bg-navy-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-navy-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#home" className="flex items-center gap-2" aria-label="Maham Health home">
            <HeartPulse className="h-7 w-7 text-gold-400" aria-hidden="true" />
            <span className="text-xl font-bold tracking-wide">
              MAHAM <span className="text-gold-400">HEALTH</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex" aria-label="Main navigation">
            <a className="hover:text-gold-300" href="#specialties">{t.specHeading}</a>
            <a className="hover:text-gold-300" href="#packages">{t.packagesHeading}</a>
            <a className="hover:text-gold-300" href="#journey">Your Medical Journey</a>
          </nav>

          <div className="flex items-center gap-3">
            <label className="sr-only" htmlFor="language-select">Language</label>
            <select
              id="language-select"
              value={lang}
              onChange={(event) => setLang(event.target.value as Language)}
              className="max-w-28 rounded-lg border border-white/20 bg-navy-900 px-2 py-2 text-sm text-white"
            >
              {languageOptions.map((code) => (
                <option key={code} value={code}>
                  {TRANSLATIONS[code].nativeName}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => openConsultation()}
              className="hidden rounded-lg bg-gold-400 px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 sm:inline-flex"
            >
              {t.ctaConsultation}
            </button>
            <a href="#specialties" className="rounded-lg p-2 text-white sm:hidden" aria-label="Browse treatments">
              <Menu className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-black" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 text-sm text-gold-300">
              <ShieldCheck className="h-4 w-4" />
              {t.heroBadge}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t.heroTitle}{' '}
              <span className="text-gold-400">{t.heroHighlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {t.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="inline-flex items-center gap-2 rounded-lg bg-gold-400 px-5 py-3 font-semibold text-navy-950 hover:bg-gold-300"
              >
                {t.ctaConsultation}
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#specialties"
                className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white hover:border-gold-300 hover:text-gold-300"
              >
                {t.ctaPrices}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ['40+', 'IPD Partner Centers'],
              ['180+', 'Board-Certified Specialists'],
              ['70–90%', 'Potential Savings'],
              ['< 3', 'Days Waiting Time'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <div className="text-3xl font-bold text-gold-400">{value}</div>
                <div className="mt-2 text-sm text-white/65">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specialties" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">{t.specHeading}</h2>
          <p className="mt-3 text-white/65">{t.specSubheading}</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead className="bg-white/[0.06] text-white/80">
              <tr>
                <th className="p-4">{t.tableSpecialty}</th>
                <th className="p-4">{t.tableIran}</th>
                <th className="p-4">{t.tableIndia}</th>
                <th className="p-4">{t.tableUAE}</th>
                <th className="p-4">{t.tableUS}</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {SPECIALTIES_DATA.map((item) => (
                <tr key={item.id} className="border-t border-white/10 align-top">
                  <td className="p-4">
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="mt-1 text-xs text-white/50">{item.category}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-gold-300">{formatPrice(item.iranPrice)}</div>
                    <div className="mt-1 text-xs text-white/55">
                      {item.savings} · {item.stayDays}
                    </div>
                  </td>
                  <td className="p-4 text-white/75">{item.indiaRange}</td>
                  <td className="p-4 text-white/75">{item.uaeRange}</td>
                  <td className="p-4 text-white/75">{item.usRange}</td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => openConsultation(item.name)}
                      className="rounded-lg border border-gold-400/50 px-3 py-2 text-xs font-semibold text-gold-300 hover:bg-gold-400 hover:text-navy-950"
                    >
                      {t.ctaConsultation}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-white/50">
          Prices are indicative baseline estimates; confirm eligibility and final quotation with a qualified provider.
        </p>
      </section>

      <section id="packages" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">{t.packagesHeading}</h2>
            <p className="mt-3 text-white/65">{t.packagesSubheading}</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            <PackageCard
              title={t.essentialTitle}
              description="Airport transfers, interpreter, local SIM, visa assistance, and care coordination."
              onChoose={() => openConsultation('', 'essential')}
            />
            <PackageCard
              title={t.luxuryTitle}
              description="Five-star accommodation, private chauffeur, and dedicated concierge support."
              featured
              onChoose={() => openConsultation('', 'luxury')}
            />
          </div>
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold">Your Medical Journey</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            'Assessment & plan',
            'Visa & scheduling',
            'Arrival & reception',
            'Procedure & care',
            'Recovery & follow-up',
          ].map((label, index) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-sm font-bold text-navy-950">
                {index + 1}
              </div>
              <p className="font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>{t.corporateNote}</p>
          <a href="mailto:health@maham-group.com" className="hover:text-gold-300">
            health@maham-group.com
          </a>
          <p>© {new Date().getFullYear()} Maham Health. {t.footerRights}</p>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => setChat((current) => !current)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 font-semibold text-navy-950 shadow-xl hover:bg-gold-300"
        aria-expanded={chat}
      >
        <MessageCircle className="h-5 w-5" />
        {t.aiTitle}
      </button>

      {chat && (
        <div className="fixed bottom-20 right-5 z-40 w-[min(90vw,360px)] rounded-2xl border border-white/15 bg-navy-900 p-5 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold">{t.aiTitle}</h2>
            <button type="button" onClick={() => setChat(false)} aria-label="Close chat">
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="mb-4 text-sm text-white/65">
            I can help explain the medical-travel process. This demo does not provide medical advice.
          </p>
          <label className="sr-only" htmlFor="chat-prompt">{t.aiPromptPlaceholder}</label>
          <input
            id="chat-prompt"
            placeholder={t.aiPromptPlaceholder}
            className="w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
          />
        </div>
      )}

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeConsultation();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
            className="my-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-navy-900 p-5 shadow-2xl sm:p-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gold-300">Free assessment</p>
                <h2 id="consultation-title" className="mt-1 text-2xl font-bold">
                  Start your consultation
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Step {step} of 3
                </p>
              </div>
              <button
                type="button"
                onClick={closeConsultation}
                className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white"
                aria-label="Close consultation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6 flex gap-2" aria-label={`Step ${step} of 3`}>
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className={`h-1.5 flex-1 rounded-full ${number <= step ? 'bg-gold-400' : 'bg-white/15'}`}
                />
              ))}
            </div>

            <form onSubmit={submitDemo}>
              {step === 1 && (
                <div className="space-y-5">
                  <label className="block text-sm font-medium" htmlFor="treatment">
                    Treatment <span className="text-gold-300">*</span>
                  </label>
                  <select
                    id="treatment"
                    required
                    value={form.specialty}
                    onChange={(event) => updateForm('specialty', event.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                  >
                    <option value="">Select a treatment</option>
                    {SPECIALTIES_DATA.map((item) => (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                  <p className="text-xs text-white/50">
                    Prices are estimates and depend on clinical assessment and provider confirmation.
                  </p>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm" htmlFor="timeframe">When are you considering treatment? *</label>
                    <select
                      id="timeframe"
                      required
                      value={form.timeframe}
                      onChange={(event) => updateForm('timeframe', event.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                    >
                      <option value="">Choose timeframe</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-3-months">Within 1–3 months</option>
                      <option value="3-6-months">Within 3–6 months</option>
                      <option value="later">More than 6 months</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm" htmlFor="age">Age *</label>
                    <input
                      id="age"
                      type="number"
                      min="18"
                      max="120"
                      required
                      value={form.age}
                      onChange={(event) => updateForm('age', event.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm" htmlFor="gender">Gender *</label>
                    <select
                      id="gender"
                      required
                      value={form.gender}
                      onChange={(event) => updateForm('gender', event.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                    >
                      <option value="">Select</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm" htmlFor="notes">Additional notes (optional)</label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={form.notes}
                      onChange={(event) => updateForm('notes', event.target.value)}
                      placeholder="Please do not include sensitive medical details in this demo form."
                      className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white placeholder:text-white/35"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div className="rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm text-amber-100">
                    <strong>Demo form — do not enter sensitive medical information.</strong>
                    <p className="mt-1">
                      Files are selected only in your browser. They are not uploaded, sent, or retained.
                      This form does not send or store any information.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm" htmlFor="full-name">Full name *</label>
                      <input
                        id="full-name"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(event) => updateForm('name', event.target.value)}
                        className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm" htmlFor="country">Country *</label>
                      <input
                        id="country"
                        autoComplete="country-name"
                        required
                        value={form.country}
                        onChange={(event) => updateForm('country', event.target.value)}
                        className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm" htmlFor="whatsapp">WhatsApp number *</label>
                      <input
                        id="whatsapp"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={form.whatsapp}
                        onChange={(event) => updateForm('whatsapp', event.target.value)}
                        className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm" htmlFor="email">Email address *</label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(event) => updateForm('email', event.target.value)}
                        className="w-full rounded-lg border border-white/15 bg-navy-950 px-3 py-3 text-white"
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="mb-2 text-sm font-medium">Preferred support package *</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {([
                        ['essential', t.essentialTitle],
                        ['luxury', t.luxuryTitle],
                      ] as const).map(([value, label]) => (
                        <label
                          key={value}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 ${form.package === value ? 'border-gold-400 bg-gold-400/10' : 'border-white/15 bg-white/[0.02]'}`}
                        >
                          <input
                            type="radio"
                            name="package"
                            value={value}
                            checked={form.package === value}
                            onChange={() => updateForm('package', value)}
                            className="accent-yellow-400"
                          />
                          <span className="text-sm font-semibold">{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label className="mb-2 block text-sm" htmlFor="records">
                      Medical records or photos (optional; demo only)
                    </label>
                    <label
                      htmlFor="records"
                      className="flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/25 bg-white/[0.025] p-5 text-center hover:border-gold-300"
                    >
                      <Upload className="mb-2 h-6 w-6 text-gold-300" />
                      <span className="text-sm">Choose files from this device</span>
                      <span className="mt-1 text-xs text-white/50">Nothing will be uploaded or saved</span>
                    </label>
                    <input
                      ref={fileInputRef}
                      id="records"
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      className="sr-only"
                      onChange={(event) =>
                        setSelectedFiles(Array.from(event.target.files ?? []).map((file) => file.name))
                      }
                    />
                    {selectedFiles.length > 0 && (
                      <ul className="mt-2 space-y-1 text-xs text-white/65" aria-live="polite">
                        {selectedFiles.map((name, index) => <li key={`${name}-${index}`}>{name}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {notice && (
                <p role="status" className="mt-4 rounded-lg border border-gold-300/30 bg-gold-300/10 p-3 text-sm text-gold-100">
                  {notice}
                </p>
              )}

              <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => { setNotice(''); setStep((current) => current - 1); }}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold hover:bg-white/5"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 rounded-lg bg-gold-400 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-gold-300"
                  >
                    Continue
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-gold-400 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-gold-300"
                  >
                    Submit demo
                    <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

function PackageCard({
  title,
  description,
  featured = false,
  onChoose,
}: {
  title: string;
  description: string;
  featured?: boolean;
  onChoose: () => void;
}) {
  return (
    <article className={`rounded-2xl border p-6 ${featured ? 'border-gold-400/50 bg-gold-400/[0.06]' : 'border-white/10 bg-white/[0.035]'}`}>
      <div className="mb-4 flex items-center gap-3">
        {featured ? (
          <Globe2 className="h-6 w-6 text-gold-300" />
        ) : (
          <Clock className="h-6 w-6 text-gold-300" />
        )}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="min-h-14 text-sm leading-6 text-white/65">{description}</p>
      <button
        type="button"
        onClick={onChoose}
        className="mt-5 rounded-lg border border-gold-400/50 px-4 py-2 text-sm font-semibold text-gold-300 hover:bg-gold-400 hover:text-navy-950"
      >
        Choose package
      </button>
    </article>
  );
}
