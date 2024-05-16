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
import logoImage from "@/public/images/logo/main_logo.svg";
import logoImageOnlyS from "@/public/images/logo/only_s.svg";

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
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);
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
                    {/*<span>Bize Ulaşın</span>*/}
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
                        {/*<span*/}
                        {/*    className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"/>*/}

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
                        {/*<span*/}
                        {/*    className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"/>*/}

                    </div>
                    {/*<span*/}
                    {/*    className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"/>*/}
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
                <div className="pr-4"></div>
            </motion.div>
        </AnimatePresence>
    );
};
