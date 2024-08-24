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
            {t("about.whoAreWeMission.wholeMissionText")}
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-red-500">{t("about.whoAreWeMission.missionTitle")}</span>, {t("about.whoAreWeMission.part1")}
        <span className="text-red-500">{t("about.whoAreWeMission.part2")}</span> {t("about.whoAreWeMission.part3")}
        <span className="text-red-500">{t("about.whoAreWeMission.part4")}</span> {t("about.whoAreWeMission.part5")}
        {t("about.whoAreWeMission.part6")} <span className="text-red-500">{t("about.whoAreWeMission.part7")}</span> {t("about.whoAreWeMission.part8")}
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
            {t("about.whoAreWeMission.wholeVisionText")}
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-green-500">{t("about.whoAreWeVision.visionTitle")}</span>, {t("about.whoAreWeVision.part1")}
        <span className="text-green-500">{t("about.whoAreWeVision.part2")}</span> {t("about.whoAreWeVision.part3")}
        <span className="text-green-500">{t("about.whoAreWeVision.part4")}</span> {t("about.whoAreWeVision.part5")} <span className="text-green-500">{t("about.whoAreWeVision.part6")}</span> {t("about.whoAreWeVision.part7")}
      </MaskContainer>
    </div>
  );
}
