import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Solace | Yaşamı Avuçlarınıza Sunuyoruz",
  description: "Akıllı Ev Sistemi Çözümleri",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hakkımızda"
        description="Solace Akıllı Ev Sistemlerini Vizyon ve Misyonu."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
