'use client';

import { useState } from 'react';
import { Globe2 } from 'lucide-react';

type Language = 'en' | 'fa' | 'ar' | 'sw' | 'hi' | 'ur';

export default function Page() {
  const [lang, setLang] = useState<Language>('en');
  const [step, setStep] = useState(1);
  const [modal, setModal] = useState(false);

  return (
    <main className="min-h-screen bg-[#08111d] text-white">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#08111d]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-black text-slate-950 shadow-lg shadow-amber-500/20">
              M
            </div>

            <div>
              <span className="block text-xl font-bold tracking-tight text-white">
                MAHAM HEALTH
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-amber-400/90">
                Soorin Maham Group • Medical Concierge
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex items-center rounded-lg border border-slate-700/80 bg-slate-900 px-2 py-1.5 shadow-inner">
              <Globe2 className="mr-1.5 ml-1 h-4 w-4 text-amber-400" />

              <select
                value={lang}
                onChange={(event) => setLang(event.target.value as Language)}
                aria-label="Select Language"
                className="cursor-pointer bg-transparent pr-4 text-xs font-semibold text-slate-200 outline-none"
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
              type="button"
              onClick={() => {
                setStep(1);
                setModal(true);
              }}
              className="hidden items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 sm:inline-flex"
            >
              Get Free Assessment
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          Personalised medical care
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Trusted healthcare, coordinated around you.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Maham Health connects patients with trusted specialists and concierge
          support throughout their healthcare journey.
        </p>
        <button
          type="button"
          onClick={() => {
            setStep(1);
            setModal(true);
          }}
          className="mt-10 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 font-bold text-slate-950"
        >
          Start your free assessment
        </button>
      </section>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="assessment-title"
        >
          <div className="w-full max-w-md rounded-xl border border-slate-700 bg-[#0d1a2a] p-6 text-left shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="assessment-title" className="text-xl font-bold">
                  Free assessment
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Tell us how we can help. Assessment step {step}.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModal(false)}
                aria-label="Close assessment"
                className="text-2xl leading-none text-slate-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <button
              type="button"
              onClick={() => setModal(false)}
              className="mt-6 w-full rounded-lg bg-amber-400 px-4 py-3 font-bold text-slate-950"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
