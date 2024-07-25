"use client";

import FAQSectionOne from "@/components/FAQ/FAQSectionOne";
import { FaqVanishingInput } from "@/components/New-Faq-Base/vanishing-input";
import faqList from "@/components/FAQ/faq";
import React, {useEffect, useRef, useState} from "react";

const sections = [
  // turkcelestir
  {id: "sss", label: "Sıkça Sorulan Sorular"},
  // {id: "cta-form", label: "CTA Form"},
];
const FAQPage = () => {
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  const placeholders = [
    "Ensi Home enerji tasarrufu sağlar mı?",
    "Güvenlik sistemleri nasıl çalışıyor?",
    "Ensi Home evimi gerçekten koruyabilir mi?",
    "Akıllı ev sistemlerini kurmak için ek donanım ihtiyacım olacak mı?",
    "Ensi Home montajı ne kadar sürer ve maliyeti nedir?",
    "Ensi Home ile aydınlatmamı nasıl kontrol edebilirim?",
    "Isıtma ve soğutma sistemlerini uzaktan kontrol edebilir miyim?",
    "Akıllı ev sistemleri evde olmadığımda evimi nasıl yönetir?",
    "Akıllı ev sistemleri internet bağlantısı olmadan çalışabilir mi?",
    "Akıllı ev sistemleri farklı markaların cihazları ile uyumlu mu?",
    "Ensi Home sesli komutlarla çalışabilir mi?",
    "Ensi Home ile güvenlik kameralarını nasıl izleyebilirim?",
    "Ensi Home ile evdeki elektrikli cihazları otomatik olarak kapatabilir miyim?",
    "Ensi Home ile su sızıntılarını veya yangınları tespit edebilir miyim?",
    "Akıllı ev sistemleri kullanımı ne kadar karmaşık ve yaşlılar için uygun mu?",
    "Ensi Home için düzenli olarak bakım veya güncelleme yapmak gerekir mi?",
  ];

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <>
      <div className="md:no-scrollbar md:snap-y md:snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
        {/* <HeroHighlight> */}
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
        <div
            className={faqList.length > 4 ? "flex min-h-screen flex-col items-center justify-center mt-20 md:2" : "flex min-h-screen flex-col items-center justify-center mt-20 md:mt-2"}
            id="sss"
        >
          <div className="text-center mt-8">
            <h1 className="text-6xl md:text-7xl bg:text-7xl font-bold">Sıkça Sorulan Sorular</h1>
          </div>
          <div className="w-full pb-8 pt-20">
            <FaqVanishingInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
          </div>

          <FAQSectionOne/>
        </div>
        {/* <div className="min-h-screen snap-always snap-center flex flex-col items-center justify-center">
      <Contact />
    </div> */}
        {/* </HeroHighlight> */}
      </div>
    </>
  );
};

export default FAQPage;
