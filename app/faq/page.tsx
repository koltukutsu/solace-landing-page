import FAQSectionOne from "@/components/FAQ/FAQSectionOne";
import { FaqVanishingInput } from "@/components/New-Faq-Base/vanishing-input";
import faqList from "@/components/FAQ/faq";
import React, { useEffect, useRef, useState } from "react";
import { FAQNavigation } from "@/components/Navigations/sections";
import { Metadata } from "next";
import { FaqHeader } from "@/components/New-Faq/faq-h1";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Solace | SSS | Yaşamı Avucunuza Sunuyoruz",
  description: "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
  keywords: "akıllı yaşam, teknoloji, ev çözümleri, Solace",
  authors: {name: "Solace",
    url: "https://solace.com.tr/"
  },
  openGraph: {
      title: "Solace | SSS | Yaşamı Avucunuza Sunuyoruz",
      description: "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
      type: "website",
      url: "https://solace.com.tr/faq",
      images: [
          {
              url: "/images/logo/metadata.png",
              width: 800,
              height: 600,
              alt: "Solace logo"
          }
      ],
      siteName: "Solace",
      locale: "tr_TR"
  },
  twitter: {
      card: "summary_large_image",
      title: "Solace | SSS | Yaşamı Avucunuza Sunuyoruz",
      description: "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
      images: [
          {
              url: "/images/logo/metadata.png",
              alt: "Solace logo"
          }
      ],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};


const FAQPage = () => {
  return (
    <>
      <div className="md:no-scrollbar z-0 h-screen flex-grow overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
        <FAQNavigation />
        <div
          className={
            faqList.length > 4
              ? "md:2 mt-20 flex min-h-screen flex-col items-center justify-center"
              : "mt-20 flex min-h-screen flex-col items-center justify-center md:mt-2"
          }
          id="sss"
        >
          <FaqHeader/>
          <div className="w-full pb-8 pt-20">
            <FaqVanishingInput
              // placeholders={placeholders}
              // onChange={handleChange}
              // onSubmit={onSubmit}
            />
          </div>

          <FAQSectionOne />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default FAQPage;
