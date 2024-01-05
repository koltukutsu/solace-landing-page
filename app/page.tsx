import { Metadata } from "next";
import { HiArrowDown} from "react-icons/hi2";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import TeamSection from "@/components/Team";
import MobileApplicationSection from "@/components/Smart-Life/MobileApplicationSection";
import InformationsSection from "@/components/About/InformationsSection";

export const metadata: Metadata = {
  title: "Solace | Yaşamı Avucunuza Sunuyoruz",
  description: "Akıllı Yaşam Çözümleri",
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
      <MobileApplicationSection/>
       {/*<Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <TeamSection />
      <Contact />
    </>
  );
}
