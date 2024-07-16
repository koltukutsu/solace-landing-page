"use client";

import React, {useEffect, useState, useRef} from "react";
import {HeroAuroraBackground} from "@/components/New-Main/hero-aurora-background";
import {AboutHeroHighlight} from "@/components/New-Main/about-hero-highlight";
import {AboutStickyScrollReveal} from "@/components/New-Main/about-sticky-scroll-reveal";
import {FeaturesAndBenefitsWobbleCard} from "@/components/New-Main/features-and-benefits-wobble-card";
import ProductsLampEffect from "@/components/New-Main/products-lamp-effect";
import {ProductsMobileAppTabs} from "@/components/New-Main/products-mobile-app-tabs";
import {CtaForm} from "@/components/New-Main/cta-signup-form";
import {BackgroundBeams} from "@/components/New-Main-Base/background-beams";
import {HeroHighlight} from "@/components/New-Main-Base/hero-highlight";
import TeamSection from "@/components/Team";
import Footer from "@/components/Footer";

import Image from "next/image";
import EnsiHomePageMobileAppSection from "@/components/New-Main/ensi-mobile-app";
import { EnsiHomePillars } from "@/components/New-Main/ensi-home-pillars";
import { EnsiHoverFeaturesSection } from "@/components/New-Main/ensi-features-hover-section";
import { EnsiHomeFeatures } from "@/components/New-Main/ensi-home-features";

const sections = [
    // turkcelestir
    {id: "hero-intro-background", label: "Karşılama"},
    {id: "about-hero", label: "Solace Ne Yapıyor?"},
    {id: "about-reveal", label: "Solace Prensipleri"},
    {id: "features-and-benefits", label: "Solace Özellikleri"},
    {id: "product-lamp", label: "Ensi Home"},
    {id: "product-ensi", label: "Box"},
    {id: "ensi-home-features-section", label: "Ensi Home Farkı"},
    {id: "ensi-home-pillars", label: "Ensi Home Temelleri"},
    {id: "ensi-home-features", label: "Ensi Home Özellikleri"},
    {id: "products-mobile-app", label: "Mobil Uygulama"},
    {id: "teams-cards", label: "Solace Ekibi"},
    // {id: "cta-form", label: "CTA Form"},
];

export default function Home() {
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
        <div className="no-scrollbar z-0 h-screen flex-grow snap-y snap-mandatory overflow-y-scroll  scroll-smooth">
            <div
                className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 transform flex-col justify-center space-y-4 bg-transparent">
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

            {/* Content Sections */}
            <div className="ml-0">
                <div className="snap-center snap-always" id="hero-intro-background">
                    <HeroAuroraBackground/>
                </div>
                <div className="snap-center snap-always" id="about-hero">
                    <AboutHeroHighlight/>
                </div>
                <div className="snap-center snap-always" id="about-reveal">
                    <HeroHighlight>
                        <AboutStickyScrollReveal/>
                    </HeroHighlight>
                </div>
                <div className="snap-center snap-always" id="features-and-benefits">
                    <HeroHighlight>
                        <FeaturesAndBenefitsWobbleCard/>
                    </HeroHighlight>
                </div>
                <div className="h-72 bg-gradient-to-b from-white via-slate-700 to-slate-950"/>
                <div className="snap-center snap-always" id="product-lamp">
                    <ProductsLampEffect/>
                </div>
                <div className="" id="product-beam-starting">
                    <div
                        className="relative flex w-full flex-col items-center justify-center bg-slate-950 antialiased">
                        <BackgroundBeams/>
                        <div
                            id="product-ensi"
                            className="p-4 md:p-20 flex min-h-screen flex-col md:flex-row items-center justify-center bg-slate-950 snap-center snap-always"
                        >
                            <div
                                className="flex flex-col items-center md:mr-8 md:w-1/2 md:items-start md:pr-18 text-left">
                                <h1
                                    className="
        relative bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans font-bold text-transparent text-6xl md:text-left md:text-7xl
      "
                                >
                                    Ensi
                                </h1>
                                <h1
                                    className="
        bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center md:text-left font-medium tracking-tight text-transparent text-4xl md:text-7xl
      "
                                >
                                    Home Box
                                </h1>
                                <p className="relative z-10 mx-auto my-2 text-xl max-w-lg text-center text-neutral-500 md:text-left md:mx-0">
                                    Ensi Home ile birlikte evinizdeki akıllı cihazları tek bir beyine toplayarak size
                                    eşsiz bir deneyim sunuyoruz. Tıpkı bir orkestra şefi gibi Ensi, evinizdeki akıllı
                                    cihazların tam bir harmoni ile birlikte çalışmasını sağlar.
                                </p>
                            </div>
                            <img
                                src="/ensi/ensi_home_box.jpg"
                                alt="Ensi Home Box"
                                className="w-4/5 rounded-lg mt-4 md:mt-0 md:w-3/5"
                            />
                        </div>
`

                        <div className="w-full snap-center snap-always flex items-center justify-center" id="products-mobile-app">
                            <EnsiHomePageMobileAppSection/>
                        </div>
                        <div className="w-full snap-center snap-always flex items-center justify-center" id="ensi-home-features-section"
                        >
                            <EnsiHoverFeaturesSection/>
                        </div>
                        <div className="min-h-screen w-full snap-center snap-always flex items-center justify-center" id="ensi-home-pillars"
                        >
                            <EnsiHomePillars/>
                        </div>
                        <div className="min-h-screen w-full snap-center snap-always flex items-center justify-center" id="ensi-home-features"
                        >
                            <EnsiHomeFeatures/>
                        </div>
                    </div>
                </div>

                {/* <ProductsMobileAppTabs /> */}
                <div className="h-72 bg-gradient-to-b from-slate-950 via-slate-700 to-white"/>
                <div className="snap-center snap-always" id="teams-cards">
                    <TeamSection/>
                </div>
                {/*<div className="snap-center snap-always" id="cta-form">*/}
                {/*    <CtaForm/>*/}
                {/*</div>*/}
                <div className="snap-center snap-always" id="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
