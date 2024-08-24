"use server";

import { cookies } from 'next/headers';
import { Locale, defaultLocale, supportedLocales } from '@/config';

const COOKIE_NAME = 'NEXT_LOCALE';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export async function getUserLocale(): Promise<Locale> {
  const locale = cookies().get(COOKIE_NAME)?.value;
  
  // Ensure the locale is valid
  if (locale && supportedLocales.includes(locale as Locale)) {
    return locale as Locale;
  }

  return defaultLocale;
}

export async function setUserLocale(locale: Locale): Promise<void> {
  if (!supportedLocales.includes(locale)) {
    console.log(locale)
    throw new Error(`Unsupported locale: ${locale}`);
  }

  cookies().set(COOKIE_NAME, locale, {
    maxAge: COOKIE_MAX_AGE, // Set the cookie to expire in 1 year
    path: '/',              // Cookie is accessible throughout the entire site
    sameSite: 'strict',     // Prevent CSRF attacks by restricting third-party access
    secure: process.env.NODE_ENV === 'production', // Use Secure flag only in production
    httpOnly: true,         // Prevent client-side access to the cookie
  });
}
