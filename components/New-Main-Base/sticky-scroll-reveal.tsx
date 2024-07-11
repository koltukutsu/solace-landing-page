"use client";
import React, {useRef, useState} from "react";
import {useScroll, motion} from "framer-motion";
import {cn} from "@/utils/cn";

export const StickyScroll = ({
                                 content,
                                 contentClassName,
                             }: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    // ScrollY Progress Change Logic
    React.useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            const cardsBreakpoints = content.map((_, index) => index / cardLength);
            const closestBreakpointIndex = cardsBreakpoints.reduce(
                (acc, breakpoint, index) => {
                    const distance = Math.abs(latest - breakpoint);
                    return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
                },
                0
            );
            setActiveCard(closestBreakpointIndex);
        });
        return () => unsubscribe();
    }, [scrollYProgress, cardLength]);

    // Colors and gradients
    const backgroundColors = ["var(--slate-900)", "var(--black)", "var(--neutral-900)"];
    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    return (
        <>
            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px; /* Width of the entire scrollbar */
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: var(--neutral-800); /* Color of the scrollbar track */
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: var(--blue-500); /* Color of the scrollbar thumb */
                    border-radius: 20px; /* Roundness of the scroll thumb */
                    border: 2px solid var(--neutral-800); /* Padding around thumb */
                }
            `}</style>
            {/* Motion Div with Scrollbar */}
            <motion.div
                ref={ref}
                className="custom-scrollbar h-[30rem] flex justify-center relative space-x-10 rounded-md p-10"
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
            >
                <div className="relative flex items-start px-4">
                    <div className="h-screen flex-grow z-0 max-w-2xl">
                        {content.map((item, index) => (
                            <div key={item.title + index} id={`snap${item.title + index}`}
                                 className="snap-always snap-center my-20">
                                <motion.h2
                                    initial={{opacity: 0}}
                                    animate={{opacity: activeCard === index ? 1 : 0.3}}
                                    className="text-2xl font-bold text-slate-100"
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{opacity: 0}}
                                    animate={{opacity: activeCard === index ? 1 : 0.3}}
                                    className="text-lg text-slate-300 max-w-sm mt-10"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        ))}
                        <div className="h-40"/>
                    </div>
                </div>
                <motion.div
                    animate={{background: linearGradients[activeCard % linearGradients.length]}}
                    className={cn(
                        "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
                        contentClassName
                    )}
                >
                    {content[activeCard].content ?? null}
                </motion.div>
            </motion.div>
        </>
    );
};
