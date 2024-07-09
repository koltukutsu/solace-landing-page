import {Metadata} from "next";
import {AboutSpotlight} from "@/components/New-About/about-spotlight-hero";
import {AboutFlipWords} from "@/components/New-About/about-flip-words";
import {AboutTextGenerateEffect} from "@/components/New-About/about-text-generate-effect";
import {AboutBentoGridThird} from "@/components/New-About/about-bento-grid";
import TeamSection from "@/components/Team";

export const metadata: Metadata = {
    title: "Solace | Yaşamı Avucunuza Sunuyoruz",
    description: "Akıllı Yaşam Çözümleri",
    // other metadata
};

const AboutPage = () => {
    return (
        <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
                <div className="snap-always snap-center" id="solace-motto">
                    <AboutSpotlight/>
                </div>
                <div className="snap-always snap-center" id="solace-short-description">
                    <AboutFlipWords/>
                </div>

                <div className="snap-always snap-center" id="solace-long-description">
                    <AboutTextGenerateEffect/>
                </div>
                <div
                    className="snap-always snap-center " id="values">
                    <AboutBentoGridThird/>
                </div>
                <div className="snap-always snap-center" id="teams-cards">
                    {/* <TeamCardsAnimatedPin /> */}
                    <TeamSection/>

                </div>
        </div>
    );
};

export default AboutPage;