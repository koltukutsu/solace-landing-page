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


  export const PageNavigation = () => {
    return <NavigationCustom sections={pageSections}/>
  }