export const WHATSAPP_CONFIG = {
  phoneNumber: '989055240772',
  defaultMessage: 'Hello Maham Health, I would like to inquire about treatment in Iran.',
  buildUrl(customMessage?: string) {
    const text = encodeURIComponent(customMessage || this.defaultMessage);
    return `https://wa.me/${this.phoneNumber}?text=${text}`;
  },
};
