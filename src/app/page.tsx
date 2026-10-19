'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Home from '../components/Home';

export default function RootPage() {
  const router = useRouter();
  const repoBasePath = process.env.NODE_ENV === 'production' ? '/maham-health' : '';

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const navigatorLang = navigator.language || navigator.languages?.[0] || '';
    const prefix = navigatorLang.split('-')[0].toLowerCase();

    const supported = ['fa', 'ar', 'ur', 'sw', 'hi'];
    const matched = supported.includes(prefix) ? prefix : 'en';

    router.replace(`${repoBasePath}/${matched}/`);
  }, [repoBasePath, router]);

  return <Home initialLanguage="en" />;
}
