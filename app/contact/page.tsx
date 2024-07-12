"use client";
import {FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

import {NewContactForm} from "@/components/New-Contact/form";
import {NewContactBulletin} from "@/components/New-Contact/bulletin";
import socialMediaAccounts from "@/components/Footer/socialMediaAccounts";

import {motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";

const sections = [
    // turkcelestir
    {id: "social-media-accounts", label: "Sosyal Medya Hesapları"},
    {id: "contact-and-bulletin", label: "İletişim ve Bülten"},
    // {id: "cta-form", label: "CTA Form"},
];
const ContactPage = () => {
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
        <>
            <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
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
                {/*CONTENT SECTION*/}
                <div
                    className="flexflex-col items-center justify-center"
                    id="question-part"
                >
                    <div
                        id="social-media-accounts"
                        className="snap-always snap-center flex min-h-screen md:h-56 flex-col items-center justify-center">
                        <div className="text-center mt-8">
                            <h1 className="text-6xl md:text-7xl bg:text-7xl font-bold pb-8">Bize Ulaşın
                            </h1>

                        </div>
                        <SocialMediaIcons/>
                    </div>
                    <div
                        id="contact-and-bulletin"
                        className="snap-always snap-center min-h-screen md:pt-20 flex flex-col md:flex-row items-center justify-center">
                        <NewContactForm/>
                        <div className="w-12"></div>
                        <NewContactBulletin/>
                    </div>


                </div>
            </div>
        </>
    );
};

export default ContactPage;


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center mt-4 space-x-4">
            <a
                href={socialMediaAccounts["instagram"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-500"
            >
                <FaInstagram size={64}/>
            </a>
            <a
                href={socialMediaAccounts["twitter"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-500"
            >
                <FaTwitter size={64}/>
            </a>
            <a
                href={socialMediaAccounts["linkedin"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-500"
            >
                <FaLinkedin size={64}/>
            </a>
        </div>
    );
};

// export default SocialMediaIcons;
