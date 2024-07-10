"use client";

import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import SocialMediaAccounts from "@/components/Contact/SocialMediaAccounts";
import { HeroHighlight } from "@/components/New-Main-Base/hero-highlight";
import { CtaForm } from "@/components/New-Main/cta-signup-form";
import { NewContactForm } from "@/components/New-Contact/form";
import { NewContactBulletin } from "@/components/New-Contact/bulletin";

// Sections array defining the sections with their ids and labels
const sections = [
  { id: "form", label: "Form" },
  // { id: "bulletin", label: "Bulletin" },
  // { id: "social-media-accounts", label: "Social Media" },
];

const ContactPage = () => {
  // State for the currently active section and label to show
  const [activeSection, setActiveSection] = useState("");
  const [showLabelId, setShowLabelId] = useState<string | null>(null);
  // Ref for the intersection observer
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setShowLabelId(entry.target.id);
            // Hide label after 2 seconds
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

    // Observe each section element
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current?.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observerRef.current?.unobserve(element);
      });
    };
  }, []);

  return (
    <>
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
      <div className="no-scrollbar z-0 h-screen flex-grow snap-y snap-mandatory overflow-y-scroll scroll-smooth flex-row">
        <div className="snap-center snap-always flex flex-row" id="form">
        <NewContactForm />
        <NewContactBulletin />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
