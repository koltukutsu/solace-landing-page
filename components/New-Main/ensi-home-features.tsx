"use client";

import { HoverEffect } from "../New-Main-Base/card-hover-effect";
import { useTranslations } from "next-intl";

export function EnsiHomeFeatures() {
  const t = useTranslations();

  const projects = [
    {
      title: t("main_EnsiHomeFeatures_merkeziKontrol"),
      description: t("main_EnsiHomeFeatures_merkeziKontrolDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_EnsiHomeFeatures_yapayZekaDestekliYonetim"),
      description: t("main_EnsiHomeFeatures_yapayZekaDestekliYonetimDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_EnsiHomeFeatures_kisisellestirilmisOtomasyon"),
      description: t("main_EnsiHomeFeatures_kisisellestirilmisOtomasyonDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_EnsiHomeFeatures_guvenliVeriYonetimi"),
      description: t("main_EnsiHomeFeatures_guvenliVeriYonetimiDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_EnsiHomeFeatures_sesliAsistanEntegrasyonu"),
      description: t("main_EnsiHomeFeatures_sesliAsistanEntegrasyonuDescription"),
      link: "https://ensihome.com",
    },
    {
      title: t("main_EnsiHomeFeatures_genisCihazUyumlulugu"),
      description: t("main_EnsiHomeFeatures_genisCihazUyumluluguDescription"),
      link: "https://ensihome.com",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
