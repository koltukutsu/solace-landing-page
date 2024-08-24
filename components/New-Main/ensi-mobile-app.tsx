'use client';

import CihazIFrame from "@/components/Phone-Wrapper/cihaz-iframe";
import { useTranslations } from "next-intl";
import React from "react";

// Define deviceControlUrl
const deviceControlUrl = "https://flutter-example-webapp.vercel.app/#/device-control";

export default function EnsiHomePageMobileAppSection() {
    const t = useTranslations();
    return (
        <div className="overflow-hidden relative h-full p-4 md:p-10 text-4xl md:text-7xl font-bold text-white flex flex-col justify-center w-full">
            <div className="flex flex-col items-center">
                <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-4lg font-bold text-transparent md:text-7xl">
                    {t("main_EnsiHomePageMobileAppSection_ensiHome")}
                </h1>
                <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-4lg font-bold text-transparent md:text-7xl pb-8">
                    {t("main_EnsiHomePageMobileAppSection_mobileApp")}
                </h1>
            </div>
            <div className="flex justify-center">
                <CihazIFrame url={deviceControlUrl} />
            </div>
        </div>
    );
}
