import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Globe } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Maham Health',
  description: 'Privacy Policy and patient health data protection standards for Maham Health, operated under Soorin Maham Trade & Industry Development Corporation.',
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-4 h-4" /> Patient Data Protection
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: October 2026 • Effective for all international inquiries under Soorin Maham Trade & Industry Development Corporation.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0B3C95]" /> 1. Commitment to Patient Confidentiality
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Maham Health (a dedicated healthcare concierge brand operated by <strong>Soorin Maham Trade & Industry Development Corporation</strong>), we treat personal and medical confidentiality with absolute priority. This Privacy Policy details our practices concerning the collection, storage, transfer, and safeguarding of patient information submitted via our website, WhatsApp channels, and direct correspondence.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0B3C95]" /> 2. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 leading-relaxed">
              <li><strong>Contact & Identity Details:</strong> Full name, country of residence, contact phone/WhatsApp number, and email address.</li>
              <li><strong>Medical Records & Diagnostic Files:</strong> Clinical histories, physician notes, MRI/CT scans, laboratory reports, and photos provided voluntarily for doctor evaluation and treatment planning.</li>
              <li><strong>Logistics & Travel Data:</strong> Passport copies and travel itineraries strictly utilized for issuing official Ministry of Foreign Affairs Medical T-Visa authorizations and hospital admission clearances.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0B3C95]" /> 3. How Your Information Is Used
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We exclusively use patient information to:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 leading-relaxed">
              <li>Present medical files to accredited hospital International Patient Departments (IPD) and board-certified surgeons for clinical case evaluation and quotation.</li>
              <li>Coordinate concierge ground logistics, bilingual medical interpreters, and VIP hospital admissions.</li>
              <li>Process expedited medical visa (T-Visa) applications with relevant governmental bodies.</li>
              <li>Maintain direct post-operative follow-up and clinical communication.</li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We do not sell, rent, monetize, or publicly disclose any patient records or contact information to third-party commercial marketing networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0B3C95]" /> 4. Data Security & Storage
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All submitted data, diagnostic reports, and medical communications are handled across encrypted protocols. Access is restricted strictly to authorized medical concierge managers and reviewing clinical personnel bound by professional non-disclosure standards.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900">5. Contact Information & Data Inquiries</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you have any questions regarding your personal information, wish to update your records, or request deletion of diagnostic files after your medical travel, please reach out directly:
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1 border border-slate-200">
              <p><strong>Soorin Maham Trade & Industry Development Corporation</strong></p>
              <p>Maham Health Division — Patient Privacy Desk</p>
              <p>Email: <a href="mailto:health@maham-group.com" className="text-[#0B3C95] font-semibold hover:underline">health@maham-group.com</a></p>
              <p>WhatsApp Concierge: <a href="https://wa.me/989055240772" className="text-[#0B3C95] font-semibold hover:underline">+98 905 524 0772</a></p>
              <p>Offices: Tehran • Shiraz • Kish • Dubai • Mumbai • Dar es Salaam</p>
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
