"use client";
import React from "react";
import { motion } from "framer-motion";
import {LampContainer} from "@/components/New-Main-Base/lamp-effect";

export default function ProductsLampEffect() {
    return (
        <div className="min-h-screen">

            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Ensi Home <br /> Akıllı Ev Sistemi
                </motion.h1>
            </LampContainer>
        </div>
    );
}

