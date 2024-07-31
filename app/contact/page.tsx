import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { NewContactForm } from "@/components/New-Contact/form";
import { NewContactBulletin } from "@/components/New-Contact/bulletin";
import socialMediaAccounts from "@/components/Footer/socialMediaAccounts";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ContactNavigation } from "@/components/Navigations/sections";
import { Metadata } from "next";

// const sections = [
//     // turkcelestir
//     {id: "social-media-accounts", label: "Sosyal Medya Hesapları"},
//     {id: "contact-and-bulletin", label: "İletişim ve Bülten"},
//     // {id: "cta-form", label: "CTA Form"},
// ];
export const metadata: Metadata = {
    title: "Solace | İletişim | Yaşamı Avucunuza Sunuyoruz",
    description: "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
    keywords: "akıllı yaşam, teknoloji, ev çözümleri, Solace",
    authors: {name: "Solace",
      url: "https://solace.com.tr/"
    },
    openGraph: {
        title: "Solace | İletişim | Yaşamı Avucunuza Sunuyoruz",
        description: "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
        type: "website",
        url: "https://solace.com.tr/",
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
        title: "Solace | İletişim | Yaşamı Avucunuza Sunuyoruz",
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
  

const ContactPage = () => {
  return (
    <>
      <div className="md:no-scrollbar z-0 h-screen flex-grow overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
        <ContactNavigation/>
        {/*CONTENT SECTION*/}
        <div
          className="flexflex-col items-center justify-center"
          id="question-part"
        >
          <div
            id="social-media-accounts"
            className="flex min-h-screen flex-col items-center justify-center md:h-56 md:snap-center md:snap-always"
          >
            <div className="mt-8 text-center">
              <h1 className="bg:text-7xl pb-8 text-6xl font-bold md:text-7xl">
                Bize Ulaşın
              </h1>
            </div>
            <SocialMediaIcons />
          </div>
          <div
            id="contact-and-bulletin"
            className="flex min-h-screen flex-col items-center justify-center md:snap-center md:snap-always md:flex-row md:pt-20"
          >
            <NewContactForm />
            <div className="w-12"></div>
            <NewContactBulletin />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

const SocialMediaIcons = () => {
  return (
    <div className="mt-4 flex justify-center space-x-4">
      <a
        href={socialMediaAccounts["instagram"]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-500"
      >
        <FaInstagram size={64} />
      </a>
      <a
        href={socialMediaAccounts["twitter"]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-500"
      >
        <FaTwitter size={64} />
      </a>
      <a
        href={socialMediaAccounts["linkedin"]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-500"
      >
        <FaLinkedin size={64} />
      </a>
    </div>
  );
};

// export default SocialMediaIcons;
