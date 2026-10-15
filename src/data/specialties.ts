export interface Specialty {
  id: string;
  name: string;
  category: string;
  recoveryDays: string;
  iranPrice: number;
  indiaPrice: number;
  uaeTurkeyPrice: number;
  usUkPrice: number;
  savings: string;
}

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "rhinoplasty",
    name: "Rhinoplasty (Nose Surgery)",
    category: "Cosmetic & Plastic Surgery",
    recoveryDays: "7–10 days",
    iranPrice: 1650,
    indiaPrice: 2800,
    uaeTurkeyPrice: 4500,
    usUkPrice: 8500,
    savings: "80%"
  },
  {
    id: "dental-implants",
    name: "Dental Implants (Premium Titanium)",
    category: "Dental Care",
    recoveryDays: "3–5 days",
    iranPrice: 550,
    indiaPrice: 800,
    uaeTurkeyPrice: 1500,
    usUkPrice: 2800,
    savings: "80%"
  },
  {
    id: "lasik",
    name: "LASIK / Femto-LASIK (Both Eyes)",
    category: "Ophthalmology",
    recoveryDays: "2–3 days",
    iranPrice: 1100,
    indiaPrice: 1400,
    uaeTurkeyPrice: 2800,
    usUkPrice: 4200,
    savings: "74%"
  },
  {
    id: "hair-transplant",
    name: "Hair Transplant (FUE / Micro-FUE)",
    category: "Restoration & Aesthetics",
    recoveryDays: "3–4 days",
    iranPrice: 1250,
    indiaPrice: 2000,
    uaeTurkeyPrice: 2600,
    usUkPrice: 6000,
    savings: "79%"
  },
  {
    id: "ivf",
    name: "IVF (Full Treatment Cycle + ICSI)",
    category: "Reproductive Medicine",
    recoveryDays: "10–14 days",
    iranPrice: 3200,
    indiaPrice: 4500,
    uaeTurkeyPrice: 7500,
    usUkPrice: 15000,
    savings: "78%"
  },
  {
    id: "knee-replacement",
    name: "Total Knee Replacement",
    category: "Orthopedics & Joint Care",
    recoveryDays: "10–14 days",
    iranPrice: 4200,
    indiaPrice: 7500,
    uaeTurkeyPrice: 11000,
    usUkPrice: 22000,
    savings: "81%"
  },
  {
    id: "cardiology-stent",
    name: "Cardiology Stent / Angioplasty",
    category: "Cardiovascular Care",
    recoveryDays: "4–7 days",
    iranPrice: 3800,
    indiaPrice: 6500,
    uaeTurkeyPrice: 9500,
    usUkPrice: 20000,
    savings: "81%"
  },
  {
    id: "oncology-protocol",
    name: "Oncology Initial Treatment Protocol",
    category: "Oncology & Chemotherapy",
    recoveryDays: "7–14 days",
    iranPrice: 4500,
    indiaPrice: 8000,
    uaeTurkeyPrice: 12000,
    usUkPrice: 25000,
    savings: "82%"
  },
  {
    id: "bariatric-sleeve",
    name: "Bariatric Sleeve Surgery",
    category: "Metabolic & Weight Loss",
    recoveryDays: "5–7 days",
    iranPrice: 2850,
    indiaPrice: 4800,
    uaeTurkeyPrice: 6500,
    usUkPrice: 12000,
    savings: "76%"
  }
];
