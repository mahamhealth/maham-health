'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Home from '../components/Home';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language or fallback to 'en'
    const browserLang = (navigator.language || navigator.languages?.[0] || 'en').toLowerCase();
    const langPrefix = browserLang.split('-')[0];
    
    const supportedLangs = ['fa', 'ar', 'ur', 'sw', 'hi'];
    const matched = supportedLangs.includes(langPrefix) ? langPrefix : 'en';

    // Redirect directly to domain root locale path
    router.replace(`/${matched}/`);
  }, [router]);

  // Render initial fallback home while redirecting
  return <Home initialLanguage="en" />;
}
