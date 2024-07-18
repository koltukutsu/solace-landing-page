'use client';

import {Metadata} from "next";
import {AboutSpotlight} from "@/components/New-About/about-spotlight-hero";
import {AboutFlipWords} from "@/components/New-About/about-flip-words";
import {AboutTextGenerateEffect} from "@/components/New-About/about-text-generate-effect";
import {AboutBentoGridThird} from "@/components/New-About/about-bento-grid";
import TeamSection from "@/components/Team";
import { WhoAreWeSVGMaskVision,  WhoAreWeSVGMaskMission} from "@/components/New-About/about-who-are-we";
import { useEffect, useRef, useState } from "react";

// export const metadata: Metadata = {
//     title: "Solace Hakkımızda",
//     description: "Akıllı Yaşam Çözümleri",
//     // other metadata
// };


const sections = [
    // turkcelestir
    { id: "solace-hakkimizda", label: "Hakkımızda" },
    { id: "solace-misyon", label: "Vizyonumuz" },
    { id: "solace-vizyon", label: "Misyonumuz" },
    { id: "degerler", label: "Değerlerimiz" },
    { id: "ekibimiz", label: "Solace Ekibi" },
    // {id: "cta-form", label: "CTA Form"},
  ];

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState("");
  const [showLabelId, setShowLabelId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setShowLabelId(entry.target.id);
            setTimeout(() => {
              setShowLabelId(null);
            }, 2000);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observerRef.current?.unobserve(element);
      });
    };
  }, []);

    return (
        <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
                <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 transform flex-col justify-center space-y-4 bg-transparent">
        {sections.map((section) => (
          <div
            key={section.id}
            className="group relative mr-2 flex items-center justify-center"
          >
            <a
              href={`#${section.id}`}
              className={`h-4 w-4 rounded-full transition duration-200 ease-in-out hover:bg-blue-500 ${
                activeSection === section.id
                  ? "scale-125 bg-specialBlue"
                  : "-my-4 scale-50 bg-gray-400"
              }`}
            >
              <span
                className={`absolute right-full z-10 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 pt-2 text-xs text-white transition-opacity duration-200 ease-in-out ${
                  showLabelId === section.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
            </a>
          </div>
        ))}
      </div>
                <div className="snap-always snap-center min-h-screen" id="solace-hakkimizda">
                    <AboutSpotlight/>
                </div>
                <div className="snap-always snap-center" id="solace-misyon">
                    <WhoAreWeSVGMaskMission/>
                </div>
                <div className="snap-always snap-center" id="solace-vizyon">
                    <WhoAreWeSVGMaskVision/>
                </div>
                {/* <div className="snap-always snap-center" id="solace-long-description">
                    <AboutTextGenerateEffect/>
                </div> */}
                <div
                    className="snap-always snap-center " id="degerler">
                    <AboutBentoGridThird/>
                </div>
                <div className="snap-always snap-center" id="ekibimiz">
                    {/* <TeamCardsAnimatedPin /> */}
                    <TeamSection/>
                </div>
        </div>
    );
};

export default AboutPage;