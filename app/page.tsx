import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import TeamSection from "@/components/Team";

import { Metadata } from "next";
import InformationsSection from "@/components/About/InformationsSection";

export const metadata: Metadata = {
  title: "Solace | Yaşamı Avuçlarınıza Sunuyoruz",
  description: "Akıllı Ev Sistemi Çözümleri",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <InformationsSection/>
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <TeamSection />
      <Contact />
    </>
  );
}
