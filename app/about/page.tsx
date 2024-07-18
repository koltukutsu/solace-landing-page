import {Metadata} from "next";
import {AboutSpotlight} from "@/components/New-About/about-spotlight-hero";
import {AboutFlipWords} from "@/components/New-About/about-flip-words";
import {AboutTextGenerateEffect} from "@/components/New-About/about-text-generate-effect";
import {AboutBentoGridThird} from "@/components/New-About/about-bento-grid";
import TeamSection from "@/components/Team";
import { WhoAreWeSVGMaskVision,  WhoAreWeSVGMaskMission} from "@/components/New-About/about-who-are-we";

export const metadata: Metadata = {
    title: "Solace Hakkımızda",
    description: "Akıllı Yaşam Çözümleri",
    // other metadata
};

const AboutPage = () => {
    return (
        <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
                <div className="snap-always snap-center min-h-screen" id="solace-motto">
                    <AboutSpotlight/>
                </div>
                <div className="snap-always snap-center" id="solace-mission">
                    <WhoAreWeSVGMaskMission/>
                </div>
                <div className="snap-always snap-center" id="solace-vision">
                    <WhoAreWeSVGMaskVision/>
                </div>
                {/* <div className="snap-always snap-center" id="solace-long-description">
                    <AboutTextGenerateEffect/>
                </div> */}
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