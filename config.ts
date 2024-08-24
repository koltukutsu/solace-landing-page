export type Locale = (typeof locales)[number];

export const supportedLocales = ['en', 'tr', 'es', 'fr'] as const;
export const defaultLocale: Locale = 'tr';