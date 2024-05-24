"use client";
import {useEffect} from "react";
import {motion, stagger, useAnimate} from "framer-motion";
import {cn} from "@/utils/cn";

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                       duration,
                                       isOnScreen
                                   }: {
    words: string;
    className?: string;
    duration: number;
    isOnScreen: boolean;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        if (isOnScreen) {
            animate(
                "span",
                {
                    opacity: 1,
                },
                {
                    duration: duration,
                    delay: stagger(0.2),
                }
            );
        }
    }, [scope.current, isOnScreen]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className=" dark:text-white text-black text-3xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};