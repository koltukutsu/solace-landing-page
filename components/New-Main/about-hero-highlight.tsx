'use client';

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../New-Main-Base/hero-highlight";
import React from "react";
import { useTranslations } from "next-intl";

export function AboutHeroHighlight() {
    const t = useTranslations();

    return (
        <div className={`min-h-screen`}>
            <div className="">
                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        {t("main_aboutHeroHighlight_tagline")}
                        {"  "}
                        <Highlight className="text-black dark:text-white">
                            {t("main_aboutHeroHighlight_highlight")}
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>
            </div>
        </div>
    );
}
