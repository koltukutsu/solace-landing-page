'use client';

import React, { useRef } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";

export function Button({
                           borderRadius = "1.75rem",
                           children,
                           as: Component = "button",
                           containerClassName,
                           borderClassName,
                           duration,
                           className,
                           ...otherProps
                       }: {
    borderRadius?: string;
    children: React.ReactNode;
    as?: any;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
    [key: string]: any;
}) {
    return (
        <Component
            className={cn(
                "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden",
                containerClassName
            )}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}
        >
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
            >
                {children}
            </div>
        </Component>
    );
}

export const MovingBorder = ({
                                 children,
                                 duration = 2000,
                                 rx,
                                 ry,
                                 ...otherProps
                             }: {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
    [key: string]: any;
}) => {
    const pathRef = useRef<any>();
    const progress = useMotionValue<number>(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).x
    );
    const y = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).y
    );

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};

export const MovingBorderDot = ({ duration = 2000, children }) => {
    const pathRef = useRef<any>(null);
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const transform = useTransform(progress, (value) => {
        const point = pathRef.current?.getPointAtLength(value);
        return `translate(${point?.x}px, ${point?.y}px)`;
    });

    return (
        <div className="relative w-10 h-10">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <path
                    d="M 50,1 A 49,49 0 1,1 50,99 A 49,49 0 1,1 50,1"
                    fill="none"
                    stroke="dodgerblue"
                    strokeWidth="2"
                    ref={pathRef}
                />
            </svg>
            <motion.div className="absolute top-0 left-0" style={{ transform }}>
                {children}
            </motion.div>
        </div>
    );
};