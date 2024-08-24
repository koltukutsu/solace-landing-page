'use client';

import { useTranslations } from 'next-intl';
import NavigationCustom from './navigation';

export const PageNavigation = () => {
  const t = useTranslations();

  const pageSections = [
    { id: 'hero-intro-background', label: t('navigationSection_pageNavigation_welcome') },
    { id: 'about-hero', label: t('navigationSection_pageNavigation_whatSolaceDoes') },
    { id: 'about-reveal', label: t('navigationSection_pageNavigation_solacePrinciples') },
    { id: 'features-and-benefits', label: t('navigationSection_pageNavigation_solaceFeatures') },
    { id: 'product-lamp', label: t('navigationSection_pageNavigation_ensiHome') },
    { id: 'ensi-home-box', label: t('navigationSection_pageNavigation_ensiHomeBox') },
    { id: 'ensi-home-mobile-application', label: t('navigationSection_pageNavigation_ensiHomeMobileApp') },
    { id: 'ensi-home-features-section', label: t('navigationSection_pageNavigation_ensiHomeDifference') },
    { id: 'ensi-home-pillars', label: t('navigationSection_pageNavigation_ensiHomePillars') },
    { id: 'ensi-home-features', label: t('navigationSection_pageNavigation_ensiHomeFeatures') },
    { id: 'teams-cards', label: t('navigationSection_pageNavigation_solaceTeam') },
  ];

  return <NavigationCustom sections={pageSections} />;
};

export const FAQNavigation = () => {
  const t = useTranslations();

  const faqSections = [
    { id: 'sss', label: t('navigationSection_faqNavigation_faq') },
  ];

  return <NavigationCustom sections={faqSections} />;
};

export const AboutNavigation = () => {
  const t = useTranslations();

  const aboutSections = [
    { id: 'solace-hakkimizda', label: t('navigationSection_aboutNavigation_aboutUs') },
    { id: 'solace-misyon', label: t('navigationSection_aboutNavigation_vision') },
    { id: 'solace-vizyon', label: t('navigationSection_aboutNavigation_mission') },
    { id: 'degerler', label: t('navigationSection_aboutNavigation_values') },
    { id: 'ekibimiz', label: t('navigationSection_aboutNavigation_solaceTeam') },
  ];

  return <NavigationCustom sections={aboutSections} />;
};

export const ContactNavigation = () => {
  const t = useTranslations();

  const contactSections = [
    { id: 'social-media-accounts', label: t('navigationSection_contactNavigation_socialMedia') },
    { id: 'contact-and-bulletin', label: t('navigationSection_contactNavigation_contactAndBulletin') },
  ];

  return <NavigationCustom sections={contactSections} />;
};
