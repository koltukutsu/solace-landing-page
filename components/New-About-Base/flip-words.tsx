
"use client"
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
let interval: any;

export const FlipWords = ({
                              words,
                              duration = 3000,
                              className,
                          }: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        startAnimation();

        return () => {
            clearInterval(interval);
        };
    }, []);

    const startAnimation = () => {
        let i = 0;
        interval = setInterval(() => {
            i++;
            if (i === words.length) {
                i = 0;
            }
            const word = words[i];
            setCurrentWord(word);
        }, duration);
    };

    const formatWord = (word: string) => {
        return word.split(/(?=[A-Z])/).join(" ");
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}
                key={currentWord}
            >
                {formatWord(currentWord).split("").map((letter, index) => {
                    if (letter === " ") {
                        return <span key={currentWord + index} className="inline-block w-2" />;
                    } else {
                        return (
                            <motion.span
                                key={currentWord + index}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.4,
                                }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        );
                    }
                })}
            </motion.div>
        </AnimatePresence>
    );
};
