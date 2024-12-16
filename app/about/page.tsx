import { Metadata } from "next";
import { AboutSpotlight } from "@/components/New-About/about-spotlight-hero";
import { AboutFlipWords } from "@/components/New-About/about-flip-words";
import { AboutTextGenerateEffect } from "@/components/New-About/about-text-generate-effect";
import { AboutBentoGridThird } from "@/components/New-About/about-bento-grid";
import TeamSection from "@/components/Team";
import {
  WhoAreWeSVGMaskVision,
  WhoAreWeSVGMaskMission,
} from "@/components/New-About/about-who-are-we";
import { useEffect, useRef, useState } from "react";
import { AboutNavigation } from "@/components/Navigations/sections";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NewContactForm } from "@/components/New-Contact/form";
import { NewContactBulletin } from "@/components/New-Contact/bulletin";
import socialMediaAccounts from "@/components/Footer/socialMediaAccounts";
import { ContactHeader } from "@/components/New-Contact/header";

export const metadata: Metadata = {
  title: "Solace | Hakkımızda | Yaşamı Avucunuza Sunuyoruz",
  description:
    "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
  keywords: "akıllı yaşam, teknoloji, ev çözümleri, Solace",
  authors: { name: "Solace", url: "https://solace.com.tr/about" },
  openGraph: {
    title: "Solace | Hakkımzıda | Yaşamı Avucunuza Sunuyoruz",
    description:
      "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
    type: "website",
    url: "https://solace.com.tr/",
    images: [
      {
        url: "/images/logo/metadata.png",
        width: 800,
        height: 600,
        alt: "Solace logo",
      },
    ],
    siteName: "Solace",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solace | Hakkımızda | Yaşamı Avucunuza Sunuyoruz",
    description:
      "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
    images: [
      {
        url: "/images/logo/metadata.png",
        alt: "Solace logo",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

// const sections = [
//     // turkcelestir
//     { id: "solace-hakkimizda", label: "Hakkımızda" },
//     { id: "solace-misyon", label: "Vizyonumuz" },
//     { id: "solace-vizyon", label: "Misyonumuz" },
//     { id: "degerler", label: "Değerlerimiz" },
//     { id: "ekibimiz", label: "Solace Ekibi" },
//     // {id: "cta-form", label: "CTA Form"},
//   ];

const AboutPage = () => {
  return (
    <div className="md:no-scrollbar z-0 h-screen flex-grow overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
      <AboutNavigation />
      <div
        className="min-h-screen md:snap-center md:snap-always"
        id="solace-hakkimizda"
      >
        <AboutSpotlight />
      </div>
      <div className="md:snap-center md:snap-always" id="solace-misyon">
        <WhoAreWeSVGMaskMission />
      </div>
      <div className="md:snap-center md:snap-always" id="solace-vizyon">
        <WhoAreWeSVGMaskVision />
      </div>
      {/* <div className="snap-always snap-center" id="solace-long-description">
                    <AboutTextGenerateEffect/>
                </div> */}
      {/* <div
                    className="md:snap-center md:snap-always " id="degerler">
                    <AboutBentoGridThird/>
                </div> */}
      <div className="md:snap-center md:snap-always" id="iletisim">
        <div className="flex flex-col items-center justify-center">
          <div className="flex min-h-screen flex-col items-center justify-center md:h-56">
            <ContactHeader />
            <SocialMediaIcons />
          </div>
          <div className="flex min-h-screen flex-col items-center justify-center md:flex-row md:pt-20">
            <NewContactForm />
            <div className="w-12"></div>
            <NewContactBulletin />
          </div>
        </div>
      </div>
      <div className="md:snap-center md:snap-always" id="ekibimiz">
        <TeamSection />
      </div>
    </div>
  );
};

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
      {/* <a
                href={socialMediaAccounts["twitter"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-500"
            >
                <FaTwitter size={64} />
            </a> */}
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

export default AboutPage;
