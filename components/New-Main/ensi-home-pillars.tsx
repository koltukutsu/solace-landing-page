"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../New-Main-Base/canvas-reveal-effect";

export function EnsiHomePillars() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-slate-950 px-8 py-20 lg:flex-row">
        <Card title="Uzaktan Kontroller" icon={<SolaceGreyIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Otomasyonlar" icon={<SolaceNormalIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
        <Card title="Yapay Zekalar" icon={<SolaceGreyIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[30rem] w-full  max-w-sm items-center justify-center border border-white/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="mx-auto flex w-full items-center justify-center text-center  transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black group-hover/canvas-card:text-white dark:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};
const SolaceGreyIcon = () => {
  return (
    <svg
      width="63"
      height="66"
      viewBox="0 0 63 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_17)">
        <mask
          id="mask0_2_17"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-182"
          y="-244"
          width="2127"
          height="3024"
        >
          <path
            d="M-181.3 -243.905H1944.37V2779.25H-181.3V-243.905Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2_17)">
          <path
            d="M60.3416 40.2708H17.1122C9.12762 40.2708 2.64642 33.764 2.64642 25.7347H45.8865C49.8788 25.7347 53.4961 27.365 56.1065 29.9935C58.7204 32.6185 60.3416 36.2561 60.3416 40.2708Z"
            fill="#8F8F8F"
          />
        </g>
        <mask
          id="mask1_2_17"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-182"
          y="-244"
          width="2127"
          height="3024"
        >
          <path
            d="M-181.305 -243.905H1944.37V2779.25H-181.305V-243.905Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_17)">
          <path
            d="M-0.00642395 66H45.8797C53.8678 66 60.3419 59.4897 60.3419 51.4604H14.4522C6.46763 51.4604 -0.00642395 57.9707 -0.00642395 66Z"
            fill="#414141"
          />
        </g>
        <mask
          id="mask2_2_17"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-182"
          y="-244"
          width="2127"
          height="3024"
        >
          <path
            d="M-181.305 -243.905H1944.37V2779.25H-181.305V-243.905Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_2_17)">
          <path
            d="M62.9936 -7.85893e-05H17.1039C9.11933 -7.85893e-05 2.64885 6.51026 2.64885 14.5396H48.535C56.5195 14.5396 62.9936 8.02922 62.9936 -7.85893e-05Z"
            fill="#414141"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2_17">
          <rect width="63" height="66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const SolaceNormalIcon = () => {
  return (
    <svg
      width="63"
      height="66"
      viewBox="0 0 63 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_17)">
        <mask
          id="mask0_2_17"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-182"
          y="-244"
          width="2127"
          height="3024"
        >
          <path
            d="M-181.3 -243.905H1944.37V2779.25H-181.3V-243.905Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2_17)">
          <path
            d="M60.3416 40.2708H17.1122C9.12762 40.2708 2.64642 33.764 2.64642 25.7347H45.8865C49.8788 25.7347 53.4961 27.365 56.1065 29.9935C58.7204 32.6185 60.3416 36.2561 60.3416 40.2708Z"
            fill="#8F8F8F"
          />
        </g>
        <mask
          id="mask1_2_17"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-182"
          y="-244"
          width="2127"
          height="3024"
        >
          <path
            d="M-181.305 -243.905H1944.37V2779.25H-181.305V-243.905Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_17)">
          <path
            d="M-0.00642395 66H45.8797C53.8678 66 60.3419 59.4897 60.3419 51.4604H14.4522C6.46763 51.4604 -0.00642395 57.9707 -0.00642395 66Z"
            fill="#414141"
          />
        </g>
        <mask
          id="mask2_2_17"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="-182"
          y="-244"
          width="2127"
          height="3024"
        >
          <path
            d="M-181.305 -243.905H1944.37V2779.25H-181.305V-243.905Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_2_17)">
          <path
            d="M62.9936 -7.85893e-05H17.1039C9.11933 -7.85893e-05 2.64885 6.51026 2.64885 14.5396H48.535C56.5195 14.5396 62.9936 8.02922 62.9936 -7.85893e-05Z"
            fill="#414141"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2_17">
          <rect width="63" height="66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
