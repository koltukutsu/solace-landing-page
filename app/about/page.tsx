import {Metadata} from "next";
import {AboutSpotlight} from "@/components/New-About/about-spotlight-hero";
import {AboutFlipWords} from "@/components/New-About/about-flip-words";
import {AboutTextGenerateEffect} from "@/components/New-About/about-text-generate-effect";
import {AboutBentoGridThird} from "@/components/New-About/about-bento-grid";
import TeamSection from "@/components/Team";
import { WhoAreWeSVGMaskVision,  WhoAreWeSVGMaskMission} from "@/components/New-About/about-who-are-we";
import { useEffect, useRef, useState } from "react";
import { AboutNavigation } from "@/components/Navigations/sections";


export const metadata: Metadata = {
  title: "Solace | Hakkımızda | Yaşamı Avucunuza Sunuyoruz",
  description: "Solace Yüksek Teknolojileri Derleyerek Akıllı Yaşam Çözümleri Sunar.",
  keywords: "akıllı yaşam, teknoloji, ev çözümleri, Solace",
  authors: {name: "Solace",
    url: "https://solace.com.tr/"
  },
  openGraph: {
      title: "Solace | Hakkımzıda | Yaşamı Avucunuza Sunuyoruz",
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
      title: "Solace | Hakkımızda | Yaşamı Avucunuza Sunuyoruz",
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
        <div className="md:no-scrollbar md:snap-y md:snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
          <AboutNavigation/>
                <div className="md:snap-center md:snap-always min-h-screen" id="solace-hakkimizda">
                    <AboutSpotlight/>
                </div>
                <div className="md:snap-center md:snap-always" id="solace-misyon">
                    <WhoAreWeSVGMaskMission/>
                </div>
                <div className="md:snap-center md:snap-always" id="solace-vizyon">
                    <WhoAreWeSVGMaskVision/>
                </div>
                {/* <div className="snap-always snap-center" id="solace-long-description">
                    <AboutTextGenerateEffect/>
                </div> */}
                <div
                    className="md:snap-center md:snap-always " id="degerler">
                    <AboutBentoGridThird/>
                </div>
                <div className="md:snap-center md:snap-always" id="ekibimiz">
                    {/* <TeamCardsAnimatedPin /> */}
                    <TeamSection/>
                </div>
        </div>
    );
};

export default AboutPage;