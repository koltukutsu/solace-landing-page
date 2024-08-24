'use client';

import { useTranslations } from 'next-intl';
import NavigationCustom from './navigation';

export const PageNavigation = () => {
  const t = useTranslations();

  const pageSections = [
    { id: 'hero-intro-background', label: t('navigationSection.pageNavigation.welcome') },
    { id: 'about-hero', label: t('navigationSection.pageNavigation.whatSolaceDoes') },
    { id: 'about-reveal', label: t('navigationSection.pageNavigation.solacePrinciples') },
    { id: 'features-and-benefits', label: t('navigationSection.pageNavigation.solaceFeatures') },
    { id: 'product-lamp', label: t('navigationSection.pageNavigation.ensiHome') },
    { id: 'ensi-home-box', label: t('navigationSection.pageNavigation.ensiHomeBox') },
    { id: 'ensi-home-mobile-application', label: t('navigationSection.pageNavigation.ensiHomeMobileApp') },
    { id: 'ensi-home-features-section', label: t('navigationSection.pageNavigation.ensiHomeDifference') },
    { id: 'ensi-home-pillars', label: t('navigationSection.pageNavigation.ensiHomePillars') },
    { id: 'ensi-home-features', label: t('navigationSection.pageNavigation.ensiHomeFeatures') },
    { id: 'teams-cards', label: t('navigationSection.pageNavigation.solaceTeam') },
  ];

  return <NavigationCustom sections={pageSections} />;
};

export const FAQNavigation = () => {
  const t = useTranslations();

  const faqSections = [
    { id: 'sss', label: t('navigationSection.faqNavigation.faq') },
  ];

  return <NavigationCustom sections={faqSections} />;
};

export const AboutNavigation = () => {
  const t = useTranslations();

  const aboutSections = [
    { id: 'solace-hakkimizda', label: t('navigationSection.aboutNavigation.aboutUs') },
    { id: 'solace-misyon', label: t('navigationSection.aboutNavigation.vision') },
    { id: 'solace-vizyon', label: t('navigationSection.aboutNavigation.mission') },
    { id: 'degerler', label: t('navigationSection.aboutNavigation.values') },
    { id: 'ekibimiz', label: t('navigationSection.aboutNavigation.solaceTeam') },
  ];

  return <NavigationCustom sections={aboutSections} />;
};

export const ContactNavigation = () => {
  const t = useTranslations();

  const contactSections = [
    { id: 'social-media-accounts', label: t('navigationSection.contactNavigation.socialMedia') },
    { id: 'contact-and-bulletin', label: t('navigationSection.contactNavigation.contactAndBulletin') },
  ];

  return <NavigationCustom sections={contactSections} />;
};
