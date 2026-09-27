'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { TRANSLATIONS, type Language } from '@/data/translations';
import { SPECIALTIES_DATA } from '@/data/specialties';

// Your live Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/mjykapno";

type PackageChoice = 'essential' | 'luxury';

type ConsultationForm = {
  specialty: string;
  timeframe: string;
  age: string;
  gender: string;
  notes: string;
  name: string;
  country: string;
  whatsapp: string;
  email: string;
  package: PackageChoice;
};

const initialForm: ConsultationForm = {
  specialty: '',
  timeframe: '',
  age: '',
  gender: '',
  notes: '',
  name: '',
  country: '',
  whatsapp: '',
  email: '',
  package: 'essential',
};

export default function HomePage() {
  const [lang] = useState<Language>('en'); // Defaulting to en for this view
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const t = TRANSLATIONS[lang];

  const updateForm = <K extends keyof ConsultationForm>(key: K, value: ConsultationForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert("Something went wrong. Please email us directly at health@maham-group.com");
      setStatus('idle');
    }
  };

  const nextStep = () => {
    // Basic validation for steps
    if (step === 1 && !form.specialty) return;
    if (step === 2 && (!form.timeframe || !form.age || !form.gender)) return;
    setStep((current) => Math.min(current + 1, 3));
  };

  // ... (Rest of your component logic remains the same)
  // Ensure the form JSX uses the handleSubmit function above
  
  return (
    /* Your existing UI code */
    <main>
        {/* ... */}
    </main>
  );
}
