"use client";
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import {HeroHighlight, Highlight} from "../New-Main-Base/hero-highlight";
import React from "react";
import {cn} from "@/utils/cn";

export function AboutHeroHighlight() {

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
                        With Solace, nothing&apos;s real. Everything is far away. Everything
                        is {" "}
                        <Highlight className="text-black dark:text-white">
                            life, of you, that we care.
                        </Highlight>

                    </motion.h1>
                </HeroHighlight>

          {/*      <div*/}
          {/*          className={cn(*/}
          {/*              "relative h-[4rem] flex items-center bg-white dark:bg-black justify-center group",*/}
          {/*          )}*/}
          {/*          onMouseMove={handleMouseMove}*/}
          {/*      >*/}
          {/*          <div*/}
          {/*              className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none"/>*/}
          {/*          <motion.div*/}
          {/*              className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"*/}
          {/*              style={{*/}
          {/*                  WebkitMaskImage: useMotionTemplate`*/}
          {/*  radial-gradient(*/}
          {/*    200px circle at ${mouseX}px ${mouseY}px,*/}
          {/*    black 0%,*/}
          {/*    transparent 100%*/}
          {/*  )*/}
          {/*`,*/}
          {/*                  maskImage: useMotionTemplate`*/}
          {/*  radial-gradient(*/}
          {/*    200px circle at ${mouseX}px ${mouseY}px,*/}
          {/*    black 0%,*/}
          {/*    transparent 100%*/}
          {/*  )*/}
          {/*`,*/}
          {/*              }}*/}
          {/*          />*/}

          {/*          <div className={cn("container relative z-20")}></div>*/}
          {/*      </div>*/}
            </div>
        </div>
    );
}
