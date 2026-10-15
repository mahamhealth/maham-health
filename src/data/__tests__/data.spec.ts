import { WHATSAPP_CONFIG } from './constants';
import { SPECIALTIES_DATA } from './specialties';

describe('WHATSAPP_CONFIG', () => {
  it('uses the expected WhatsApp number', () => {
    expect(WHATSAPP_CONFIG.phoneNumber).toBe('989055240772');
  });

  it('builds the correct wa.me URL', () => {
    const url = WHATSAPP_CONFIG.buildUrl();
    expect(url).toContain('https://wa.me/989055240772?text=');
  });
});

describe('SPECIALTIES_DATA', () => {
  it('includes exactly 9 specialties and matches expected ids', () => {
    expect(SPECIALTIES_DATA).toHaveLength(9);
    expect(SPECIALTIES_DATA.map((item) => item.id)).toEqual([
      'rhinoplasty',
      'dental-implants',
      'lasik',
      'hair-transplant',
      'ivf',
      'knee-replacement',
      'cardiology-stent',
      'oncology-protocol',
      'bariatric-sleeve',
    ]);
  });

  it('has consistent pricing fields and benchmark values', () => {
    for (const specialty of SPECIALTIES_DATA) {
      expect(specialty).toHaveProperty('iranPrice');
      expect(specialty).toHaveProperty('indiaPrice');
      expect(specialty).toHaveProperty('uaeTurkeyPrice');
      expect(specialty).toHaveProperty('usUkPrice');
      expect(specialty.iranPrice).toBeGreaterThan(0);
      expect(specialty.indiaPrice).toBeGreaterThan(0);
      expect(specialty.uaeTurkeyPrice).toBeGreaterThan(0);
      expect(specialty.usUkPrice).toBeGreaterThan(0);
    }
  });
});
