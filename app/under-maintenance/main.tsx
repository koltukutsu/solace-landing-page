"use client";

import { useState, useTransition } from "react";
import { IconLanguage } from "@tabler/icons-react";
import { setUserLocale } from "@/app/locale";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logoImage from "@/public/images/logo/main_logo.svg";

const UnderMaintenanceMain = () => {
  const t = useTranslations();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [changingLanguage, setChangingLanguage] = useState(false);

  function changeLanguage(localeString: string) {
    const locale = localeString as Locale;
    startTransition(async() => {
      setChangingLanguage(true);
      await setTimeout(() => setChangingLanguage(false), 500);
      setUserLocale(locale);
    });
  }

  const languages = [
    {
      code: "tr",
      name: t("newFloatingNavBar_floatingNavBar_turkish"),
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg",
    },
    {
      code: "en",
      name: t("newFloatingNavBar_floatingNavBar_english"),
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    },
    {
      code: "bs",
      name: t("newFloatingNavBar_floatingNavBar_bosnian"),
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BA.svg",
    },
    {
      code: "es",
      name: t("newFloatingNavBar_floatingNavBar_spanish"),
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
    },
    {
      code: "fr",
      name: t("newFloatingNavBar_floatingNavBar_french"),
      icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    }
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#F2F2F7] to-[#E5E5EA] px-4 py-12 sm:px-6 lg:px-8">
      {/* Language Selector */}
      <div className="fixed right-32 top-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-black shadow-sm hover:bg-gray-50"
          >
            <IconLanguage className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">{t("newFloatingNavBar_floatingNavBar_language")}</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    changeLanguage(language.code);
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full items-center px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  <Image
                    src={language.icon}
                    alt={language.name}
                    width={24}
                    height={16}
                    className="mr-2 h-4 w-6 rounded-sm"
                  />
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-xl text-center w-full max-w-md transition-all duration-300 hover:shadow-lg">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#007AFF]/10 to-[#007AFF]/5"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-[#007AFF]/10 to-[#007AFF]/5"></div>
        
        <div className="relative flex justify-center mb-8">
          <div className="relative">
            <Image 
              src={logoImage.src} 
              alt="Solace Logo" 
              width={180} 
              height={60} 
              className="h-auto transition-all duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
        
        <h1 className="mb-4 text-2xl sm:text-3xl font-semibold text-[#1C1C1E] tracking-tight">{t('underMaintenance_title')}</h1>
        <div className="mb-8 h-1 w-20 bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] mx-auto rounded-full"></div>
        
        <p className="mb-8 text-base sm:text-lg leading-relaxed text-[#3A3A3C] max-w-sm mx-auto">
          {t('underMaintenance_description')}
        </p>
        
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-[#8E8E93] flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 bg-green-400 rounded-full animate-ping"></span>
            {t('underMaintenance_contact')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenanceMain;
