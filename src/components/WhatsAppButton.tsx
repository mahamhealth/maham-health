'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../data/constants';

export default function WhatsAppButton() {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsRtl(document.documentElement.dir === 'rtl');
    }
  }, []);

  return (
    <aside aria-label="WhatsApp Concierge" className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-50`}>
      <a
        href={WHATSAPP_CONFIG.buildUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(32,186,89,0.28)] transition-transform"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />

        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">
            Online Coordinator
          </span>
          <span className="text-sm font-semibold whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
}
