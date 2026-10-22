import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Stethoscope, CheckCircle2, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'Medical Disclaimer | Maham Health',
  description: 'Clinical evaluation and medical disclaimer for Maham Health, operated under Soorin Maham Trade & Industry Development Corporation.',
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3C95] hover:text-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0B3C95] text-white flex items-center justify-center font-bold text-sm">
              M
            </div>
            <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">
              MAHAM HEALTH
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-3 border border-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-600" /> Mandatory Clinical Notice
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Medical Disclaimer
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Important medical context and clinical evaluation guidelines for international patients.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#0B3C95]" /> 1. No Direct Medical Advice
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Information presented on <strong>mahamhealth.com</strong>, including procedure comparisons, recovery timelines, and cost calculators, is provided strictly for educational and travel planning purposes. It does not constitute formal medical diagnosis, clinical advice, or a physician-patient relationship.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0B3C95]" /> 2. Physician-Led Clinical Authority
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All medical evaluations, surgical eligibility confirmations, prescription medicines, and clinical care plans are determined solely by board-certified physicians and surgeons operating within accredited hospital facilities. Pre-operative physical examinations, lab tests, and imaging in Iran take legal and clinical precedence over initial online assessments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#0B3C95]" /> 3. Individual Results & Surgical Risks
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              As with all surgical and clinical interventions worldwide, medical outcomes vary based on individual anatomy, age, lifestyle, medical history, and adherence to post-operative recovery instructions. Partner surgeons provide complete informed-consent consultations in advance of any surgical intervention.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Emergency Situations</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our website and WhatsApp channels are intended for scheduled medical travel and elective/planned treatments. They are not intended for acute medical emergencies. If you are experiencing an urgent medical event in your home country, please seek immediate emergency services.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900">5. Questions & Medical Records Inquiries</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To submit your diagnostic dossier for direct hospital physician review:
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1 border border-slate-200">
              <p><strong>Maham Health Medical Dossier Evaluation</strong></p>
              <p>Soorin Maham Trade & Industry Development Corporation</p>
              <p>Email: <a href="mailto:health@maham-group.com" className="text-[#0B3C95] font-semibold hover:underline">health@maham-group.com</a></p>
              <p>WhatsApp Concierge: <a href="https://wa.me/989055240772" className="text-[#0B3C95] font-semibold hover:underline">+98 905 524 0772</a></p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#06101E] text-slate-400 py-6 border-t border-slate-800 text-center text-xs">
        <div className="max-w-5xl mx-auto px-4">
          © {new Date().getFullYear()} Soorin Maham Trade & Industry Development Corporation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
