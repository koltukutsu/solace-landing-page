'use client';
import {Metadata} from "next";
import {AboutSpotlight} from "@/components/New-About/about-spotlight-hero";
import {AboutFlipWords} from "@/components/New-About/about-flip-words";
import {AboutTextGenerateEffect} from "@/components/New-About/about-text-generate-effect";

// export const metadata: Metadata = {
//     title: "Solace | Yaşamı Avucunuza Sunuyoruz",
//     description: "Akıllı Yaşam Çözümleri",
//     // other metadata
// };

const AboutPage = () => {
    // const [ref1, isOnScreen1] = useOnScreen({threshold: 0.1});
    // const [ref2, isOnScreen2] = useOnScreen({threshold: 0.1});
    // const [ref3, isOnScreen3] = useOnScreen({threshold: 0.1});
    // const [ref4, isOnScreen4] = useOnScreen({threshold: 0.1});

    return (
        <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
            <RevealOnScroll>
                <div className="snap-always snap-center" id="solace-motto">
                    <AboutSpotlight/>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="snap-always snap-center" id="solace-short-description">
                    <AboutFlipWords/>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>

                <div className="snap-always snap-center" id="solace-long-description">
                    <AboutTextGenerateEffect/>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div
                    className="snap-always snap-center " id="values">
                    <AboutBentoGridThird/>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="snap-always snap-center" id="teams-cards">
                    {/* <TeamCardsAnimatedPin /> */}
                    <TeamSection/>

                </div>
            </RevealOnScroll>

        </div>
    );
};

export default AboutPage;


import React, {useEffect, useRef, useState} from 'react';
import {AboutBentoGridThird} from "@/components/New-About/about-bento-grid";
import TeamSection from "@/components/Team";
import RevealOnScroll from "@/components/Common/RevealOnScroll";

function useOnScreen(options) {
    const ref = useRef<HTMLDivElement>();
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isIntersecting];
}