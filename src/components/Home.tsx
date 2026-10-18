'use client';

import React from 'react';

type Props = { initialLanguage?: string };

export default function Home({ initialLanguage }: Props) {
  return (
    <main>
      <h1>Maham Health</h1>
      <p>Initial language: {initialLanguage ?? 'en'}</p>
    </main>
  );
}
