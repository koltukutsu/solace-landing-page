import NavigationCustom from "./navigation";

const pageSections = [
  { id: "hero-intro-background", label: "Karşılama" },
  { id: "about-hero", label: "Solace Ne Yapıyor?" },
  { id: "about-reveal", label: "Solace Prensipleri" },
  { id: "features-and-benefits", label: "Solace Özellikleri" },
  { id: "product-lamp", label: "Ensi Home" },
  { id: "ensi-home-box", label: "Ensi Home Box" },
  { id: "ensi-home-mobile-application", label: "Ensi Home Mobil Uygulama" },
  { id: "ensi-home-features-section", label: "Ensi Home Farkı" },
  { id: "ensi-home-pillars", label: "Ensi Home Temelleri" },
  { id: "ensi-home-features", label: "Ensi Home Özellikleri" },
  { id: "teams-cards", label: "Solace Ekibi" },
];

const faqSections = [
  // turkcelestir
  { id: "sss", label: "Sıkça Sorulan Sorular" },
  // {id: "cta-form", label: "CTA Form"},
];

const contactSections = [
  // turkcelestir
  { id: "social-media-accounts", label: "Sosyal Medya Hesapları" },
  { id: "contact-and-bulletin", label: "İletişim ve Bülten" },
  // {id: "cta-form", label: "CTA Form"},
];

const aboutSections = [
  // turkcelestir
  { id: "solace-hakkimizda", label: "Hakkımızda" },
  { id: "solace-misyon", label: "Vizyonumuz" },
  { id: "solace-vizyon", label: "Misyonumuz" },
  { id: "degerler", label: "Değerlerimiz" },
  { id: "ekibimiz", label: "Solace Ekibi" },
  // {id: "cta-form", label: "CTA Form"},
];

export const PageNavigation = () => {
  return <NavigationCustom sections={pageSections} />;
};

export const FAQNavigation = () => {
  return <NavigationCustom sections={faqSections} />;
};

export const AboutNavigation = () => {
  return <NavigationCustom sections={aboutSections} />;
};

export const ContactNavigation = () => {
  return <NavigationCustom sections={contactSections} />;
};
