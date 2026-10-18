'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Home from '../components/Home';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const navigatorLang = navigator.language || navigator.languages?.[0] || '';
    const prefix = navigatorLang.split('-')[0].toLowerCase();

    const supported = ['fa', 'ar', 'ur', 'sw', 'hi'];
    const matched = supported.includes(prefix) ? prefix : 'en';

    // Replace to locale route (trailing slash preserved for static export)
    router.replace(`/${matched}/`);
  }, [router]);

  // Render the home UI (fallback) so a static export still has content.
  return <Home initialLanguage="en" />;
}
