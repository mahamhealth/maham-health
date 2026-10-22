import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Building, CreditCard, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Maham Health',
  description: 'Terms of Service and concierge facilitation agreement for Maham Health, operated under Soorin Maham Trade & Industry Development Corporation.',
};

export default function TermsOfServicePage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B3C95] text-xs font-semibold mb-3">
              <BookOpen className="w-4 h-4" /> Facilitation & Concierge Agreement
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: October 2026 • Governing service delivery under Soorin Maham Trade & Industry Development Corporation.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-[#0B3C95]" /> 1. Scope of Services
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Maham Health provides premier medical tourism coordination and concierge travel logistics. Our scope encompasses coordinating medical dossier reviews with accredited partner hospitals, scheduling surgeon consultations, facilitating Ministry of Foreign Affairs Medical T-Visa issuance, airport VIP transfers, hotel accommodation, and dedicated bilingual translation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#0B3C95]" /> 2. Nature of Relationship
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Maham Health is an administrative and concierge facilitator, not a licensed healthcare provider, hospital, or physician practice. All clinical procedures, diagnostic interpretations, surgical decisions, post-operative nursing, and medical interventions are performed exclusively by licensed, independent hospitals and certified surgeons in Iran.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#0B3C95]" /> 3. Quotations, Pricing & Payments
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 leading-relaxed">
              <li><strong>Pre-Arrival Estimates:</strong> Online cost estimates and calculator results reflect baseline averages based on standard procedure parameters. Official binding quotations are issued only after reviewing full diagnostic records.</li>
              <li><strong>In-Person Clinical Confirmation:</strong> On-site pre-surgical diagnostics (blood panels, CT scans, anesthesia clearance) determine final surgical readiness. If pre-existing contraindications alter the treatment plan, adjustments are presented directly by the clinical team.</li>
              <li><strong>Transparency Guarantee:</strong> Concierge tier fees (accommodation, private transport, interpretation) are detailed explicitly without hidden surcharges.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Travel & Medical T-Visa Compliance</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              While Maham Health processes official medical approval codes and expedited T-Visa authorization letters through authorized hospital IPD channels, final visa authorization rests with the relevant consular and immigration authorities. Patients are responsible for carrying valid passports with at least 6 months validity.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900">5. Contact & Corporate Governance</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For contractual queries or official corporate inquiries:
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1 border border-slate-200">
              <p><strong>Soorin Maham Trade & Industry Development Corporation</strong></p>
              <p>Email: <a href="mailto:health@maham-group.com" className="text-[#0B3C95] font-semibold hover:underline">health@maham-group.com</a></p>
              <p>Direct WhatsApp: <a href="https://wa.me/989055240772" className="text-[#0B3C95] font-semibold hover:underline">+98 905 524 0772</a></p>
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
