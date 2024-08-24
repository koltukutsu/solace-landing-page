'use client';

import { useTranslations } from "next-intl";
import { WhiteHoverEffect } from "../New-Main-Base/white-card-hover-effect";

export function SolaceFeatures() {
  const t = useTranslations();
  
  const projects = [
    {
      title: t("main_solaceFeatures_moreThanSum"),
      description: t("main_solaceFeatures_moreThanSumDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_solaceFeatures_humanizingTechnology"),
      description: t("main_solaceFeatures_humanizingTechnologyDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_solaceFeatures_smartLivingSolutions"),
      description: t("main_solaceFeatures_smartLivingSolutionsDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_solaceFeatures_safeAndEfficientSystems"),
      description: t("main_solaceFeatures_safeAndEfficientSystemsDescription"),
      link: "https://ensihome.com",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <WhiteHoverEffect items={projects} />
    </div>
  );
}
