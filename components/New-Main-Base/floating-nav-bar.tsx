"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
// import { GlobeAltIcon } from '@heroicons/react/outline';  // Importing an icon for language
import logoImage from "@/public/images/logo/main_logo.svg";
import logoImageOnlyS from "@/public/images/logo/only_s.svg";
import { IconLanguage } from "@tabler/icons-react";
import {setUserLocale} from '@/app/locale';
import {useTransition} from 'react';
import {Locale} from '@/config';
import { useTranslations } from "next-intl";



interface LanguageButtonProps {
    languageCode: string;
    languageName: string;
    changeLanguage: (code: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ languageCode, languageName, changeLanguage }) => {
    
    return (
        <button
            onClick={() => {
                changeLanguage(languageCode);
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
            {languageName}
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

    function changeLanguage(localeString: string) {
        const locale = localeString as Locale;
        console.log("Language changed to: ", locale);
        startTransition(() => {
            setUserLocale(locale);
        });
    }
    // useMotionValueEvent(scrollYProgress, "change", (current) => {
    //     // Check if current is not undefined and is a number
    //     if (typeof current === "number") {
    //         let direction = current! - scrollYProgress.getPrevious()!;
    //
    //         if (scrollYProgress.get() < 0.05) {
    //             setVisible(false);
    //         } else {
    //             if (direction < 0) {
    //                 setVisible(true);
    //             } else {
    //                 setVisible(false);
    //             }
    //         }
    //     }
    // });

    const languages = [
        { code: 'en', name: t('English') },
        { code: 'tr', name: t('Turkish') },
        { code: 'es', name: t('Spanish') },
        { code: 'fr', name: t('French') },
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                    className
                )}
            >
                <Link
                    href="/"
                    className="text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    {/*SMALL SCREEN*/}
                    <div className="block sm:hidden w-[1.25rem]">
                        <Image
                            src={logoImageOnlyS}
                            alt="Solace logo"
                            width={5}
                            height={5}
                            className=" w-full dark:hidden"
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
                    <div className="hidden sm:block  w-[6rem]">
                        <Image
                            src={logoImage}
                            alt="Solace logo"
                            width={60}
                            height={30}
                            className=" w-full dark:hidden"
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
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-800 dark:hover:text-neutral-300 hover:text-neutral-500 mt-1"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}
                {/* Language Selector */}
                <div
                    className="relative"
                    // onMouseEnter={() => setIsDropdownOpen(true)}
                    // onMouseLeave={() => setIsDropdownOpen(false)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                // when it is clicked anywhere else, close the dropdown
                // onBlur={() => setIsDropdownOpen(false)}
                >
                    <button className="text-sm px-4 py-2 rounded-full dark:text-white text-black flex items-center">
                        {/* SMALL SCREEN ICON */}
                        <IconLanguage className="h-5 w-5 block sm:hidden" />
                        {/* LARGE SCREEN TEXT */}
                        <span className="hidden sm:block">Language</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-black shadow-lg rounded-md py-2 z-50">
                            {languages.map((language) => (
                                <LanguageButton
                                    key={language.code}
                                    languageCode={language.code}
                                    languageName={language.name}
                                    changeLanguage={changeLanguage}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="pr-4"></div>
            </motion.div>
        </AnimatePresence>
    );
};
