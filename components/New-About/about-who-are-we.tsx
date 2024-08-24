"use client";

import { MaskContainer } from "../New-About-Base/svg-mask-effect";
import { useTranslations } from 'next-intl';

export function WhoAreWeSVGMaskMission() {
  const t = useTranslations();

  return (
    <div className="min-h-screen w-full flex items-center justify-center sm:xl md:text-4xl overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center sm:xl md:text-4xl font-bold">
            {t("about_whoAreWeMission_wholeMissionText")}
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-red-500">{t("about_whoAreWeMission_missionTitle")}</span>, {t("about_whoAreWeMission_part1")}
        <span className="text-red-500">{t("about_whoAreWeMission_part2")}</span> {t("about_whoAreWeMission_part3")}
        <span className="text-red-500">{t("about_whoAreWeMission_part4")}</span> {t("about_whoAreWeMission_part5")}
        {t("about_whoAreWeMission_part6")} <span className="text-red-500">{t("about_whoAreWeMission_part7")}</span> {t("about_whoAreWeMission_part8")}
      </MaskContainer>
    </div>
  );
}

export function WhoAreWeSVGMaskVision() {
  const t = useTranslations();

  return (
    <div className="min-h-screen w-full flex items-center sm:xl md:text-4xl justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center sm:xl md:text-4xl font-bold">
            {t("about_whoAreWeMission_wholeVisionText")}
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-green-500">{t("about_whoAreWeVision_visionTitle")}</span>, {t("about_whoAreWeVision_part1")}
        <span className="text-green-500">{t("about_whoAreWeVision_part2")}</span> {t("about_whoAreWeVision_part3")}
        <span className="text-green-500">{t("about_whoAreWeVision_part4")}</span> {t("about_whoAreWeVision_part5")} <span className="text-green-500">{t("about_whoAreWeVision_part6")}</span> {t("about_whoAreWeVision_part7")}
      </MaskContainer>
    </div>
  );
}
