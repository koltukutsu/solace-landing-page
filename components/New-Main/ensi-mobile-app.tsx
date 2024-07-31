"use client";


import CihazIFrame from "@/components/Phone-Wrapper/cihaz-iframe";
import React from "react";

// Define deviceControlUrl
const deviceControlUrl = "https://flutter-example-webapp.vercel.app/#/device-control";

export default function EnsiHomePageMobileAppSection() {
    return (
        <div className="overflow-hidden relative h-full p-4 md:p-10 text-4xl md:text-7xl font-bold text-white
         {/*bg-gradient-to-br from-purple-700 to-violet-900 */}
        relative min-w-full
        flex flex-col justify-center w-full">
            <div className="flex-col">
                <h1 className="relative bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-4lg font-bold text-transparent md:text-left md:text-7xl">
                    Ensi Home
                </h1>
                <h1 className="relative bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-4lg font-bold text-transparent md:text-left md:text-7xl pb-8">
                    Mobil Uygulama
                </h1>
            </div>
            <div className="flex-row relative">
                <div className="flex justify-center">
                    <CihazIFrame url={deviceControlUrl} />
                </div>
            </div>
        </div>
    );
}
