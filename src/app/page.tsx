"use client";

import React, { FormEvent, useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, Globe2, HeartPulse, Menu, MessageCircle, ShieldCheck, Sparkles, X } from "lucide-react";
import { TRANSLATIONS, Language } from "@/data/translations";
import { SPECIALTIES_DATA } from "@/data/specialties";

const packages = [
  { id: "essential", name: "Essential Care", note: "Thoughtful help with the essentials", features: ["Treatment coordination", "Visa guidance", "Airport transfers"] },
  { id: "vip", name: "Luxury VIP", note: "A private, considered journey from arrival", features: ["Dedicated concierge", "Private chauffeur", "Premium stay coordination"] },
];
const journey = [
  ["01", "Share your story", "Tell us what brings you to Iran and what support you need."],
  ["02", "Clinical review", "We coordinate a review of your records and a proposed care plan."],
  ["03", "Plan your visit", "Align your appointment, travel documents and personal arrangements."],
  ["04", "Arrive with care", "Your local team helps coordinate airport reception and treatment."],
  ["05", "Continue care", "Leave with follow-up guidance coordinated with your provider."],
];
const faqs = [
  ["Do I need a visa, and will my passport be stamped?", "Entry rules depend on your nationality, route and current regulations. We can guide you through the process, but cannot guarantee visa approval or a particular passport-stamp policy. Please confirm requirements with the relevant embassy or consulate before booking."],
  ["How do payments and currency work?", "Payment options can vary by provider and nationality. International card access may be limited; some travelers plan currency arrangements through Dubai or bring cash in line with applicable laws. We discuss practical options in advance—please verify current rules and hospital payment terms before travel."],
  ["Will English- or Arabic-speaking staff be available?", "We can coordinate English- or Arabic-speaking assistance for key parts of the journey, subject to availability and the selected service. Tell us your preferred language in your consultation request so we can confirm arrangements."],
  ["Can someone meet me at the airport?", "VIP airport reception and transfer coordination can be arranged when available and agreed ahead of travel. Exact access, escort permissions and services depend on airport rules and your itinerary."],
  ["How do you assess clinical quality and IPD hospitals?", "We coordinate with partner providers and can help you request information about the treating team, facility, credentials and proposed plan. IPD (International Patient Department) support varies by hospital. Treatment decisions and outcomes remain with your licensed clinical team; please review credentials and costs directly before proceeding."],
];

export default function HomePage() {
  const [lang, setLang] = useState<Language>("en");
  const [formOpen, setFormOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const t = TRANSLATIONS[lang];
  const whatsappText = encodeURIComponent("Hello Maham Health, I would like to learn about a medical consultation in Iran.");

  function openConsultation() { setStep(1); setSent(false); setFormOpen(true); }
  function nextStep(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (!form) return;
    if (step === 1) {
      if (!form.querySelector('input[name="gender"]:checked')) { form.querySelector<HTMLInputElement>('input[name="gender"]')?.focus(); return; }
    }
    if (step === 2) {
      const choice = form.querySelector<HTMLSelectElement>('select[name="package"]');
      if (!choice?.value) { choice?.reportValidity(); return; }
    }
    setStep((current) => Math.min(current + 1, 3));
  }
  function submitRequest(e: FormEvent<HTMLFormElement>) {
    // Keep the native POST to Formspree. This only swaps the UI after a successful response.
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } })
      .then((response) => { if (response.ok) setSent(true); else form.submit(); })
      .catch(() => form.submit());
  }

  return (
    <div dir={t.dir} className="min-h-screen overflow-hidden bg-[#08111d] text-white selection:bg-amber-300 selection:text-slate-950">
      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#08111d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" aria-label="Maham Health home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-amber-200/30 bg-amber-200/10 text-amber-200"><HeartPulse size={21}/></span>
            <span className="text-sm font-semibold tracking-[.2em]">MAHAM <span className="text-amber-200">HEALTH</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-amber-200" href="#specialties">Treatments</a>
            <a className="hover:text-amber-200" href="#experience">Concierge</a>
            <a className="hover:text-amber-200" href="#journey">Your journey</a>
            <a className="hover:text-amber-200" href="#faq">FAQs</a>
          </nav>
          <div className="flex items-center gap-3">
            <label className="sr-only" htmlFor="language">Language</label>
            <select id="language" aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value as Language)} className="max-w-[105px] rounded-lg border border-white/10 bg-[#101d2b] px-2 py-2 text-xs text-slate-200">
              {(Object.keys(TRANSLATIONS) as Language[]).map((key) => (
                <option key={key} value={key}>{TRANSLATIONS[key].nativeName}</option>
              ))}
            </select>
            <button onClick={openConsultation} className="hidden rounded-full bg-amber-200 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-100 sm:block">
              {t.ctaConsultation}
            </button>
            <button aria-label="Toggle navigation" className="rounded-lg p-2 text-slate-200 md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <nav className="grid gap-1 border-t border-white/10 px-5 py-3 text-sm text-slate-200 md:hidden">
            {[["Treatments", "#specialties"], ["Concierge", "#experience"], ["Your journey", "#journey"], ["FAQs", "#faq"]].map(([label, href]) => (
              <a key={href} className="rounded-lg p-3" href={href} onClick={() => setMobileMenu(false)}>{label}</a>
            ))}
            <button onClick={openConsultation} className="rounded-lg bg-amber-200 p-3 text-left font-bold text-slate-950">
              {t.ctaConsultation}
            </button>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative isolate border-b border-white/[0.06]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_18%,rgba(201,165,100,.18),transparent_36%),radial-gradient(ellipse_at_15%_80%,rgba(51,87,115,.23),transparent_42%)]"/>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.12fr_.88fr] lg:px-8 lg:py-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-100/[0.06] px-4 py-2 text-xs tracking-wide text-amber-100">
                <ShieldCheck size={15}/>{t.heroBadge}
              </div>
              <h1 className="max-w-3xl text-4xl font-medium leading-[1.13] tracking-tight sm:text-6xl lg:text-[4.35rem]">
                {t.heroTitle} <span className="font-semibold text-amber-200">{t.heroHighlight}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {t.heroSubtitle} Personal guidance, considered care coordination and a clear plan—at every step.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={openConsultation} className="inline-flex items-center gap-3 rounded-full bg-amber-200 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-100">
                  {t.ctaConsultation}<ArrowRight size={17}/>
                </button>
                <a href="#specialties" className="rounded-full border border-white/15 px-6 py-4 text-sm text-white transition hover:border-amber-100/60">
                  {t.ctaPrices}
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2"><Check size={14} className="text-amber-200"/>Personalized coordination</span>
                <span className="inline-flex items-center gap-2"><Check size={14} className="text-amber-200"/>Partner hospital network</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2rem] border border-amber-200/10"/>
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-[#172638] to-[#101a27] p-7 shadow-2xl sm:p-9">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[.22em] text-amber-200">A more considered journey</div>
                    <h2 className="mt-4 text-2xl font-medium">Care, with a human touch.</h2>
                  </div>
                  <Sparkles className="text-amber-200" size={22}/>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  From the first conversation to your return home, your concierge helps bring the details together around you.
                </p>
                <div className="my-7 h-px bg-white/10"/>
                <div className="grid grid-cols-2 gap-5">
                  <div><div className="text-2xl font-semibold text-amber-200">40+</div><div className="mt-1 text-xs leading-5 text-slate-400">IPD partner centers</div></div>
                  <div><div className="text-2xl font-semibold text-amber-200">180+</div><div className="mt-1 text-xs leading-5 text-slate-400">Specialists in our network</div></div>
                  <div><div className="text-2xl font-semibold text-amber-200">70–90%</div><div className="mt-1 text-xs leading-5 text-slate-400">Potential cost savings</div></div>
                  <div><div className="text-2xl font-semibold text-amber-200">One</div><div className="mt-1 text-xs leading-5 text-slate-400">Dedicated point of contact</div></div>
                </div>
                <a className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-black/10 p-4 text-sm text-slate-200 hover:border-amber-200/40" href="#journey">
                  <span>Discover how it works</span>
                  <ArrowDown size={16} className="text-amber-200"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="specialties" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[.24em] text-amber-200">Thoughtful care options</p>
                <h2 className="mt-3 text-3xl font-medium sm:text-4xl">{t.specHeading}</h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-slate-400">
                {t.specSubheading} Costs are indicative starting estimates; final plans depend on clinical review.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[800px] text-left text-sm">
                <thead className="bg-white/[0.04] text-xs uppercase tracking-wide text-slate-300">
                  <tr>
                    {[t.tableSpecialty, t.tableIran, t.tableIndia, t.tableUAE, t.tableUS].map((label) => (
                      <th key={label} className="p-4 font-medium">{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SPECIALTIES_DATA.map((specialty) => (
                    <tr key={specialty.id} className="border-t border-white/[0.07] transition hover:bg-white/[0.025]">
                      <td className="p-4">
                        <div className="font-medium text-white">{specialty.name}</div>
                        <div className="mt-1 text-xs text-slate-500">{specialty.category} · {specialty.stayDays}</div>
                      </td>
                      <td className="bg-amber-100/[0.035] p-4 font-semibold text-amber-200">
                        ${specialty.iranPrice.toLocaleString()}
                        <div className="mt-1 text-xs font-normal text-emerald-300">{specialty.savings}</div>
                      </td>
                      <td className="p-4 text-slate-300">{specialty.indiaRange}</td>
                      <td className="p-4 text-slate-300">{specialty.uaeRange}</td>
                      <td className="p-4 text-slate-300">{specialty.usRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Prices are reference estimates, not an offer or medical advice. Confirm eligibility, inclusions and final quotation directly with the treating provider.
            </p>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-y border-white/[0.07] bg-[#0c1724] px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[.24em] text-amber-200">The right support, your way</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">{t.packagesHeading}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{t.packagesSubheading}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {packages.map((pkg, index) => (
                <article key={pkg.id} className={`rounded-2xl border p-7 sm:p-9 ${index === 1 ? "border-amber-200/35 bg-gradient-to-br from-amber-100/[0.08] to-transparent" : "border-white/10 bg-white/[0.025]"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[.18em] text-amber-200">{index === 1 ? "Signature" : "Essential"}</span>
                    {index === 1 && <Sparkles size={18} className="text-amber-200"/>}
                  </div>
                  <h3 className="mt-5 text-2xl font-medium">{index === 0 ? t.essentialTitle : t.luxuryTitle}</h3>
                  <p className="mt-2 text-sm text-slate-400">{pkg.note}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-slate-300">
                        <Check size={16} className="mt-0.5 shrink-0 text-amber-200"/>{feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={openConsultation} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm hover:border-amber-200/60">
                    Discuss this package <ArrowRight size={15}/>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[.24em] text-amber-200">From first hello to follow-up</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Your medical tourism journey</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                A clear five-step roadmap, coordinated around your needs.
              </p>
            </div>
            <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {journey.map(([number, title, description], i) => (
                <article key={number} className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-light text-amber-200">{number}</span>
                    {i < journey.length - 1 && <ArrowRight size={15} className="hidden text-slate-600 lg:block"/>}
                  </div>
                  <h3 className="mt-6 font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-t border-white/[0.07] bg-[#0c1724] px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="text-xs uppercase tracking-[.24em] text-amber-200">Good to know</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Questions about care in Iran?</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                We believe confidence begins with clear answers. Ask us about your own circumstances.
              </p>
              <button onClick={openConsultation} className="mt-7 inline-flex items-center gap-2 text-sm text-amber-200 hover:text-amber-100">
                Talk with a concierge <ArrowRight size={15}/>
              </button>
            </div>
            <div className="divide-y divide-white/10">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium marker:hidden">
                    {question}
                    <ChevronDown size={18} className="shrink-0 text-amber-200 transition group-open:rotate-180"/>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-slate-400">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-slate-500 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-semibold tracking-[.16em] text-slate-300">
              MAHAM <span className="text-amber-200">HEALTH</span>
            </div>
            <p className="mt-3">{t.corporateNote}</p>
          </div>
          <div className="sm:text-right">
            <a className="text-slate-300 hover:text-amber-200" href="mailto:health@maham-group.com">
              health@maham-group.com
            </a>
            <p className="mt-2">© {new Date().getFullYear()} Maham Health. {t.footerRights}</p>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/255744956506?text=${whatsappText}`}
        target="_blank
