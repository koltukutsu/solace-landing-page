import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import SocialMediaAccounts from "@/components/Contact/SocialMediaAccounts";

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
        pageName="Bize Ulaşın"
        description="Solace Akıllı Yaşam Sistemlerini Vizyon ve Misyonu."
      />
      <SocialMediaAccounts/>
      <Contact />
    </>
  );
};

export default ContactPage;
