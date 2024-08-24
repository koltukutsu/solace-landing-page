"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logo/main_logo.svg";
import logoImageOnlyS from "@/public/images/logo/only_s.svg";
import { IconLanguage } from "@tabler/icons-react";
import { setUserLocale } from "@/app/locale";
import { useTransition } from "react";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";

interface LanguageButtonProps {
  languageFlag: any;
  languageCode: string;
  languageName: string;
  changeLanguage: (code: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  languageFlag,
  languageCode,
  languageName,
  changeLanguage,
}) => {
  return (
    <button
      onClick={() => {
        changeLanguage(languageCode);
      }}
      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <div className="flex items-center space-x-2">
        <Image
          alt={languageName}
          src={languageFlag.props.src}
          width={24}  // Set width
          height={16} // Set height
          className="mr-1 h-4 w-6 rounded-sm"
        />
        {languageName}
      </div>
    </button>
  );
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const t = useTranslations();
  const { scrollYProgress } = useScroll();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [changingLanguage, setChangingLanguage] = useState(false);

  function changeLanguage(localeString: string) {
    const locale = localeString as Locale;
    console.log("Language changed to: ", locale);
    startTransition(async() => {
      setChangingLanguage(true); // Start the animation
      await setTimeout(() => setChangingLanguage(false), 500);
      setUserLocale(locale);
    });
  }

  const languages = [
    
    {
      code: "tr",
      name: t("newFloatingNavBar_floatingNavBar_turkish"),
      icon: (
        <Image
          alt={t("newFloatingNavBar_floatingNavBar_turkish")}
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg"
        />
      ),
    },
    {
      code: "en",
      name: t("newFloatingNavBar_floatingNavBar_english"),
      icon: (
        <Image
          alt={t("newFloatingNavBar_floatingNavBar_english")}
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
        />
      ),
    },
    {
      code: "bs",
      name: t("newFloatingNavBar_floatingNavBar_bosnian"),
      icon: (
        <Image
          alt={t("newFloatingNavBar_floatingNavBar_english")}
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BA.svg"
        />
      ),
    },
    {
      code: "es",
      name: t("newFloatingNavBar_floatingNavBar_spanish"),
      icon: (
        <Image
          alt={t("newFloatingNavBar_floatingNavBar_spanish")}
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
        />
      ),
    },
    {
      code: "fr",
      name: t("newFloatingNavBar_floatingNavBar_french"),
      icon: (
        <Image
          alt={t("newFloatingNavBar_floatingNavBar_french")}
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
        />
      ),
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {changingLanguage ? (
        <motion.div
          key="language-change"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[6000] bg-white dark:bg-black"
          transition={{ duration: 0.5 }}
        />
      ) : (
        <motion.div
          key="language-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
            className,
          )}
        >
          <Link
            href="/"
            className="relative rounded-full border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
          >
            {/*SMALL SCREEN*/}
            <div className="block w-[1.25rem] sm:hidden">
              <Image
                src={logoImageOnlyS}
                alt="Solace logo"
                width={5}
                height={5}
                className="w-full dark:hidden"
                priority
              />
              <Image
                src={logoImageOnlyS}
                alt="Solace logo"
                width={5}
                height={5}
                className="hidden w-full dark:block"
                priority
              />
            </div>
            {/*BIG SCREEN*/}
            <div className="hidden w-[6rem] sm:block">
              <Image
                src={logoImage}
                alt="Solace logo"
                width={60}
                height={30}
                className="w-full dark:hidden"
                priority
              />
              <Image
                src={logoImage}
                alt="Solace logo"
                width={60}
                height={30}
                className="hidden w-full dark:block"
                priority
              />
            </div>
          </Link>
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative mt-1 flex items-center space-x-1 text-neutral-800 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm sm:block">{navItem.name}</span>
            </Link>
          ))}
          {/* Language Selector */}
          <div
            className="relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button className="flex items-center rounded-full border border-neutral-300 px-4 pb-1 text-sm text-black dark:border-neutral-300 dark:text-white">
              {/* SMALL SCREEN ICON */}
              <IconLanguage className="mt-2 block h-4 w-4 text-neutral-500 dark:text-white sm:hidden" />
              {/* LARGE SCREEN TEXT */}
              <span className="mt-1 hidden space-x-1 text-neutral-800 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300 sm:block">
                {t("newFloatingNavBar_floatingNavBar_language")}
              </span>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 z-50 mt-2 w-32 divide-y divide-gray-300 rounded-md bg-white py-2 shadow-lg dark:bg-black"
                >
                  {languages.map((language) => (
                    <div className="flex space-x-4 py-2" key={language.code}>
                      <LanguageButton
                        languageFlag={language.icon}
                        languageCode={language.code}
                        languageName={language.name}
                        changeLanguage={changeLanguage}
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="pr-4"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
