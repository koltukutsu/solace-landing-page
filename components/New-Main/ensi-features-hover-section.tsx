"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../New-Main-Base/canvas-reveal-effect";

export function EnsiHoverFeaturesSection() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative mx-auto flex h-[40rem] w-full flex-col items-center justify-center gap-4 overflow-hidden bg-slate-950 px-8 lg:flex-row"
    >
      <p className="relative z-20 mx-auto max-w-2xl text-center text-2xl font-medium text-white md:text-2xl">
        Ensi Home ile size gerçek bir akıllı ev sunuyoruz. Tüm cihazlarınızı tek
        bir platformda entegre eder, yapay zeka destekli otomasyonlarla
        yaşamınızı kolaylaştırır. Güvenli ve kişiselleştirilmiş bir akıllı ev
        deneyimi için Ensi Home'u keşfedin.
      </p>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
    </div>
  );
}
