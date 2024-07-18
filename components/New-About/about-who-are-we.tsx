"use client";

import { MaskContainer } from "../New-About-Base/svg-mask-effect";

export function WhoAreWeSVGMaskMission() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Misyonumuz, tam kabiliyetli, verimli ve güvenli akıllı sistemler geliştirerek, bunları kullanıcılarımızla buluşturmak ve 
            teknolojinin sunduğu tüm olanakları en üst düzeyde sunmaktır. Kullanıcılarımızın ihtiyaçlarını karşılamak için 
            kişiselleştirilmiş çözümler üretiyor ve teknolojinin karmaşıklığını basitleştirerek herkesin kullanımına sunuyoruz.
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-red-500">Misyonumuz</span>, tam kabiliyetli, verimli ve güvenli akıllı sistemler geliştirerek, bunları <span className="text-red-500">kullanıcılarımızla</span> buluşturmak ve 
        <span className="text-red-500">teknolojinin</span> sunduğu tüm olanakları en üst düzeyde sunmaktır. Kullanıcılarımızın ihtiyaçlarını karşılamak için 
            kişiselleştirilmiş çözümler üretiyor ve teknolojinin karmaşıklığını basitleştirerek <span className="text-red-500">herkesin</span> kullanımına sunuyoruz.
      </MaskContainer>
    </div>
  );
}


export function WhoAreWeSVGMaskVision() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold">
            Vizyonumuz, çeşitli yüksek teknoloji ürünleri geliştiren ve bu ürünleri global pazara sunan lider bir teknoloji şirketi olmaktır. Piyasadaki cihazları potansiyellerine uygun kullanarak eksik kalan donanımları geliştirmeyi ve yenilikçi çözümlerimizle sektörde güven ve kalite sembolü olmayı hedefliyoruz.
          </p>
        }
        className="min-h-screen w-full border rounded-md"
      >
        <span className="text-green-500">Vizyonumuz</span>, çeşitli yüksek teknoloji ürünleri geliştiren ve bu ürünleri <span className="text-green-500">global pazara</span> sunan lider bir teknoloji şirketi olmaktır. Piyasadaki cihazları potansiyellerine uygun kullanarak eksik kalan donanımları geliştirmeyi ve yenilikçi çözümlerimizle sektörde <span className="text-green-500">güven</span> ve <span className="text-green-500">kalite</span> sembolü olmayı hedefliyoruz.
      </MaskContainer>
    </div>
  );
}