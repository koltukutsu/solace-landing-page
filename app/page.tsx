import React, { useEffect, useState, useRef } from "react";
import { HeroAuroraBackground } from "@/components/New-Main/hero-aurora-background";
import { AboutHeroHighlight } from "@/components/New-Main/about-hero-highlight";
import { AboutStickyScrollReveal } from "@/components/New-Main/about-sticky-scroll-reveal";
import { FeaturesAndBenefitsWobbleCard } from "@/components/New-Main/features-and-benefits-wobble-card";
import ProductsLampEffect from "@/components/New-Main/products-lamp-effect";
import { ProductsMobileAppTabs } from "@/components/New-Main/products-mobile-app-tabs";
import { CtaForm } from "@/components/New-Main/cta-signup-form";
import { BackgroundBeams } from "@/components/New-Main-Base/background-beams";
import { HeroHighlight } from "@/components/New-Main-Base/hero-highlight";
import TeamSection from "@/components/Team";
import Footer from "@/components/Footer";

import Image from "next/image";
import EnsiHomePageMobileAppSection from "@/components/New-Main/ensi-mobile-app";
import { EnsiHomePillars } from "@/components/New-Main/ensi-home-pillars";
import { EnsiHoverFeaturesSection } from "@/components/New-Main/ensi-features-hover-section";
import { EnsiHomeFeatures } from "@/components/New-Main/ensi-home-features";
import { SolaceFeatures } from "@/components/New-Main/solace-features";
import Head from "next/head";
import { PageNavigation } from "@/components/Navigations/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solace Hakkımızda",
  description: "Akıllı Yaşam Çözümleri",
  keywords: "akıllı yaşam, teknoloji, ev çözümleri, Solace",
  authors: {name: "Solace",
    url: "https://solace.com.tr/"
  },
  openGraph: {
      title: "Solace Hakkımızda",
      description: "Akıllı Yaşam Çözümleri",
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
      title: "Solace Hakkımızda",
      description: "Akıllı Yaşam Çözümleri",
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


export default function Home() {
  
  return (
    <div className="md:no-scrollbar z-0 h-screen flex-grow md:snap-y md:snap-mandatory overflow-y-scroll  scroll-smooth">
      
      
      <PageNavigation/>

      {/* Content Sections */}
      <div className="ml-0">
        <div className="md:snap-center md:snap-always" id="hero-intro-background">
          <HeroAuroraBackground />
        </div>
        <div className="md:snap-center md:snap-always" id="about-hero">
          <AboutHeroHighlight />
        </div>
        <div className="md:snap-center md:snap-always" id="about-reveal">
          <HeroHighlight>
            <SolaceFeatures />
          </HeroHighlight>
        </div>
        <div className="md:snap-center md:snap-always" id="features-and-benefits">
          <HeroHighlight>
            <FeaturesAndBenefitsWobbleCard />
          </HeroHighlight>
        </div>
        <div className="h-72 bg-gradient-to-b from-white via-slate-700 to-slate-950" />
        <div className="md:snap-center md:snap-always" id="product-lamp">
          <ProductsLampEffect />
        </div>
        <div className="" id="product-beam-starting">
          <div className="relative flex w-full flex-col items-center justify-center bg-slate-950 antialiased">
            <BackgroundBeams />
            <div
              id="ensi-home-box"
              className="flex min-h-screen md:snap-center md:snap-always flex-col items-center justify-center bg-slate-950 p-4 md:flex-row md:p-20"
            >
              <div className="md:pr-18 flex flex-col items-center text-left md:mr-8 md:w-1/2 md:items-start">
                <h1
                  className="
        relative bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-6xl font-bold text-transparent md:text-left md:text-7xl
      "
                >
                  Ensi
                </h1>
                <h1
                  className="
        bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-2 text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-7xl
      "
                >
                  Home Box
                </h1>
                <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-xl text-neutral-500 md:mx-0 md:text-left">
                  Ensi Home ile birlikte evinizdeki akıllı cihazları tek bir
                  beyine toplayarak size eşsiz bir deneyim sunuyoruz. Tıpkı bir
                  orkestra şefi gibi Ensi, evinizdeki akıllı cihazların tam bir
                  harmoni ile birlikte çalışmasını sağlar.
                </p>
              </div>
              <img
                src="/ensi/ensi_home_box.jpg"
                alt="Ensi Home Box"
                className="mt-4 w-4/5 rounded-lg md:mt-0 md:w-3/5"
              />
            </div>
            `
          </div>
        </div>
        <div
          className="flex w-full md:snap-center md:snap-always items-center justify-center bg-slate-950"
          id="ensi-home-mobile-application"
        >
          <EnsiHomePageMobileAppSection />
        </div>
        <div
          className="flex w-full md:snap-center md:snap-always items-center justify-center bg-slate-950"
          id="ensi-home-features-section"
        >
          <EnsiHoverFeaturesSection />
        </div>
        <div
          className="flex min-h-screen w-full md:snap-center md:snap-always items-center justify-center bg-slate-950"
          id="ensi-home-pillars"
        >
          <EnsiHomePillars />
        </div>
        <div
          className="flex min-h-screen w-full md:snap-center md:snap-always items-center justify-center bg-slate-950"
          id="ensi-home-features"
        >
          <EnsiHomeFeatures />
        </div>

        {/* <ProductsMobileAppTabs /> */}
        <div className="h-72 bg-gradient-to-b from-slate-950 via-slate-700 to-white" />
        <div className="md:snap-center md:snap-always" id="teams-cards">
          <TeamSection />
        </div>
        {/*<div className="snap-center snap-always" id="cta-form">*/}
        {/*    <CtaForm/>*/}
        {/*</div>*/}
        <div className="md:snap-center md:snap-always" id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
