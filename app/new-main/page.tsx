'use client';

import React, { useEffect, useState, useRef } from 'react';

import { HeroAuroraBackground } from "@/components/New-Main/hero-aurora-background";
import { AboutHeroHighlight } from "@/components/New-Main/about-hero-highlight";
import { AboutStickyScrollReveal } from "@/components/New-Main/about-sticky-scroll-reveal";
import { FeaturesAndBenefitsWobbleCard } from "@/components/New-Main/features-and-benefits-wobble-card";
import ProductsLampEffect from "@/components/New-Main/products-lamp-effect";
import { ProductsMobileAppTabs } from "@/components/New-Main/products-mobile-app-tabs";
import { CtaForm } from "@/components/New-Main/cta-signup-form";
// import { TeamCardsAnimatedPin } from "@/components/New-Main/team-cards-3d-pin";
import { BackgroundBeams } from "@/components/New-Main-Base/background-beams";
import { HeroHighlight } from "@/components/New-Main-Base/hero-highlight";
import TeamSection from '@/components/Team';

const sections = [
    { id: 'hero-intro-background', label: 'Hero' },
    { id: 'about-hero', label: 'About Hero' },
    { id: 'about-reveal', label: 'About Reveal' },
    { id: 'featuers-and-benefits', label: 'Features & Benefits' },
    { id: 'product-lamp', label: 'Product Lamp' },
    { id: 'product-beam-starting', label: 'Beam Starting' },
    { id: 'products-mobile-app', label: 'Mobile App' },
    { id: 'teams-cards', label: 'Teams Cards' },
    { id: 'cta-form', label: 'CTA Form' },
];

export default function Home() {
    const [activeSection, setActiveSection] = useState('');
    const [showLabelId, setShowLabelId] = useState(null);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
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
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observerRef.current.observe(element);
        });

        return () => {
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) observerRef.current.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-center space-y-4 bg-transparent z-50">
                {sections.map((section) => (
                    <div key={section.id} className="relative flex items-center justify-center group mr-2">
                        <a href={`#${section.id}`}
                            className={`w-4 h-4 rounded-full hover:bg-blue-500 transition duration-200 ease-in-out ${activeSection === section.id ? 'bg-specialBlue scale-125' : 'bg-gray-400 scale-50 -my-4'}`}>
                            <span
                                className={`absolute right-full mr-3 pt-2 -translate-y-1/2 px-2 py-1 rounded-md bg-black text-white text-xs transition-opacity duration-200 ease-in-out whitespace-nowrap z-10 ${showLabelId === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`}>
                                {section.label}
                            </span>
                        </a>
                    </div>
                ))}
            </div>

            {/* Content Sections */}
            <div className="ml-0">
                <div className="snap-always snap-center" id="hero-intro-background">
                    <HeroAuroraBackground />
                </div>
                <div className="snap-always snap-center" id="about-hero">
                    <AboutHeroHighlight />
                </div>
                <div className="snap-always snap-center" id="about-reveal">
                    <HeroHighlight>
                        <AboutStickyScrollReveal />
                    </HeroHighlight>
                </div>
                <div className="snap-always snap-center" id="featuers-and-benefits">
                    <HeroHighlight>
                        <FeaturesAndBenefitsWobbleCard />
                    </HeroHighlight>
                </div>
                <div className="bg-gradient-to-b from-white via-slate-700 to-slate-950 h-72" />
                <div className="snap-always snap-center" id="product-lamp">
                    <ProductsLampEffect />
                </div>
                <div className="snap-always snap-center" id="product-beam-starting">
                    <div
                        className="min-h-screen w-full rounded-md bg-slate-950 relative flex flex-col items-center justify-center antialiased">
                        <BackgroundBeams />
                        <div className="max-w-2xl mx-auto p-4">
                            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                                Join the waitlist
                            </h1>
                            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                                Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business.
                            </p>
                            <input
                                type="text"
                                placeholder="hi@manuarora.in"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder-text-neutral-700"
                            />
                        </div>
                    </div>
                </div>
                <div className="snap-always snap-center" id="products-mobile-app">
                    <ProductsMobileAppTabs />
                </div>
                <div className="snap-always snap-center" id="teams-cards">
                    {/* <TeamCardsAnimatedPin /> */}
                    <TeamSection />

                </div>
                <div className="snap-always snap-center" id="cta-form">
                    <CtaForm />
                </div>
            </div>
        </div>
    );
}
