"use client";

import { useTranslations } from "next-intl";
import NavigationCustom from "./navigation";

export const PageNavigation = () => {
  const t = useTranslations();

  const pageSections = [
    { id: "hero-intro-background", label: t("Karşılama") },
    { id: "about-hero", label: t("Solace Ne Yapıyor?") },
    { id: "about-reveal", label: t("Solace Prensipleri") },
    { id: "features-and-benefits", label: t("Solace Özellikleri") },
    { id: "product-lamp", label: t("Ensi Home") },
    { id: "ensi-home-box", label: t("Ensi Home Box") },
    { id: "ensi-home-mobile-application", label: t("Ensi Home Mobil Uygulama") },
    { id: "ensi-home-features-section", label: t("Ensi Home Farkı") },
    { id: "ensi-home-pillars", label: t("Ensi Home Temelleri") },
    { id: "ensi-home-features", label: t("Ensi Home Özellikleri") },
    { id: "teams-cards", label: t("Solace Ekibi") },
  ];

  return <NavigationCustom sections={pageSections} />;
};

export const FAQNavigation = () => {
  const t = useTranslations();

  const faqSections = [
    { id: "sss", label: t("Sıkça Sorulan Sorular") },
  ];

  return <NavigationCustom sections={faqSections} />;
};

export const AboutNavigation = () => {
  const t = useTranslations();

  const aboutSections = [
    { id: "solace-hakkimizda", label: t("Hakkımızda") },
    { id: "solace-misyon", label: t("Vizyonumuz") },
    { id: "solace-vizyon", label: t("Misyonumuz") },
    { id: "degerler", label: t("Değerlerimiz") },
    { id: "ekibimiz", label: t("Solace Ekibi") },
  ];

  return <NavigationCustom sections={aboutSections} />;
};

export const ContactNavigation = () => {
  const t = useTranslations();

  const contactSections = [
    { id: "social-media-accounts", label: t("Sosyal Medya Hesapları") },
    { id: "contact-and-bulletin", label: t("İletişim ve Bülten") },
  ];

  return <NavigationCustom sections={contactSections} />;
};
