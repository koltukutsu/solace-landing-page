"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                   }: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once: true, amount: 0.5 });

    const wordsArray = words.split(" ");
    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    opacity: 1,
                },
                {
                    duration: 2,
                    delay: stagger(0.2),
                }
            );
        }
    }, [isInView, animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className={cn(
                            "dark:text-white text-black opacity-0",
                            idx === 0 ? "font-bold" : "font-light"
                        )}
                    >
                        {word}{" "}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-light", className)}>
            <div className="mt-4">
                <div className="dark:text-white text-black text-3xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
