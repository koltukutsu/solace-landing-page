export type Locale = (typeof supportedLocales)[number];

export const supportedLocales = ['en', 'tr', 'es', 'fr'] as const;
export const defaultLocale: Locale = 'tr';