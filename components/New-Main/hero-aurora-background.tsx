"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../New-Main-Base/aurora-background";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/New-Main-Base/moving-border";

export function HeroAuroraBackground() {
    return (
        <div className={`min-h-screen`}>
            <AuroraBackground>
                <motion.div
                    initial={{opacity: 0.0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="w-1/2 md:w-1/3 lg:w-2/5 pb-8">
                        <Image
                            src="/images/logo/main_logo.svg"
                            alt="Description of SVG"
                            layout="responsive"
                            width={500}
                            height={200}
                        />
                    </div>
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Yaşamı Avucunuza Sunuyoruz
                    </div>
                    {/*<div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">*/}
                    {/*    Size akıllı yaşam alanları sunar.*/}
                    {/*</div>*/}
                    <Link href="#about-hero" className="pt-6">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-400 dark:border-slate-800 font-light text-2xl">
                            Keşfet
                        </Button>
                    </Link>

                </motion.div>
            </AuroraBackground>
        </div>
    );
}
