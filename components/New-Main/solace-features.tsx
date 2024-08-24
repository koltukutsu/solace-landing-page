'use client';

import { useTranslations } from "next-intl";
import { WhiteHoverEffect } from "../New-Main-Base/white-card-hover-effect";

export function SolaceFeatures() {
  const t = useTranslations();
  
  const projects = [
    {
      title: t("main.solaceFeatures.moreThanSum"),
      description: t("main.solaceFeatures.moreThanSumDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main.solaceFeatures.humanizingTechnology"),
      description: t("main.solaceFeatures.humanizingTechnologyDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main.solaceFeatures.smartLivingSolutions"),
      description: t("main.solaceFeatures.smartLivingSolutionsDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main.solaceFeatures.safeAndEfficientSystems"),
      description: t("main.solaceFeatures.safeAndEfficientSystemsDescription"),
      link: "https://ensihome.com",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <WhiteHoverEffect items={projects} />
    </div>
  );
}
