'use client';

import Image from "next/image";
import React from "react";
import { WobbleCard } from "../New-Main-Base/wobble-card";
import { useTranslations } from "next-intl";

export function FeaturesAndBenefitsWobbleCard() {
    const t = useTranslations();

    return (
        <div className="pt-24 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        {t("main.featuresAndBenefitsWobbleCard.moreThanSum")}
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        {t("main.featuresAndBenefitsWobbleCard.moreThanSumDescription")}
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {t("main.featuresAndBenefitsWobbleCard.humanizingTechnology")}
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    {t("main.featuresAndBenefitsWobbleCard.humanizingTechnologyDescription")}
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        {t("main.featuresAndBenefitsWobbleCard.smartLivingSolutions")}
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                        {t("main.featuresAndBenefitsWobbleCard.smartLivingSolutionsDescription")}
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {t("main.featuresAndBenefitsWobbleCard.safeAndEfficientSystems")}
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    {t("main.featuresAndBenefitsWobbleCard.safeAndEfficientSystemsDescription")}
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        {t("main.featuresAndBenefitsWobbleCard.innovativeAndSustainable")}
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        {t("main.featuresAndBenefitsWobbleCard.innovativeAndSustainableDescription")}
                    </p>
                </div>
            </WobbleCard>
        </div>
    );
}
