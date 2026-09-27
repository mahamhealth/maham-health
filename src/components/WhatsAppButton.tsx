'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/255744956506?text=Hello%20Maham%20Health%2C%20I%20would%20like%20to%20inquire%20about%20treatment%20in%20Iran."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
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
