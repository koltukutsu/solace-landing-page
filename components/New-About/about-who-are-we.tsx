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
            {t(`Misyonumuz, tam kabiliyetli, verimli ve güvenli akıllı sistemler geliştirerek, bunları kullanıcılarımızla buluşturmak ve 
            teknolojinin sunduğu tüm olanakları en üst düzeyde sunmaktır. Kullanıcılarımızın ihtiyaçlarını karşılamak için 
            kişiselleştirilmiş çözümler üretiyor ve teknolojinin karmaşıklığını basitleştirerek herkesin kullanımına sunuyoruz.`)}
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-red-500">{t("Misyonumuz")}</span>, {t("tam kabiliyetli, verimli ve güvenli akıllı sistemler geliştirerek, bunları")}
        <span className="text-red-500">{t("kullanıcılarımızla")}</span> {t("buluşturmak ve")}
        <span className="text-red-500">{t("teknolojinin")}</span> {t("sunduğu tüm olanakları en üst düzeyde sunmaktır. Kullanıcılarımızın ihtiyaçlarını karşılamak için")}
        {t("kişiselleştirilmiş çözümler üretiyor ve teknolojinin karmaşıklığını basitleştirerek")} <span className="text-red-500">{t("herkesin")}</span> {t("kullanımına sunuyoruz.")}
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
            {t("Vizyonumuz, çeşitli yüksek teknoloji ürünleri geliştiren ve bu ürünleri global pazara sunan lider bir teknoloji şirketi olmaktır. Piyasadaki cihazları potansiyellerine uygun kullanarak eksik kalan donanımları geliştirmeyi ve yenilikçi çözümlerimizle sektörde güven ve kalite sembolü olmayı hedefliyoruz.")}
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-green-500">{t("Vizyonumuz")}</span>, {t("çeşitli yüksek teknoloji ürünleri geliştiren ve bu ürünleri")}
        <span className="text-green-500">{t("global pazara")}</span> {t("sunan lider bir teknoloji şirketi olmaktır. Piyasadaki cihazları potansiyellerine uygun kullanarak eksik kalan donanımları geliştirmeyi ve yenilikçi çözümlerimizle sektörde")}
        <span className="text-green-500">{t("güven")}</span> {t("ve")} <span className="text-green-500">{t("kalite")}</span> {t("sembolü olmayı hedefliyoruz.")}
      </MaskContainer>
    </div>
  );
}
