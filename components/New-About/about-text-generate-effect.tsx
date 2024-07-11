"use client";
import {TextGenerateEffect} from "../New-About-Base/text-generate-effect";

const words = `Misyonumuz, tam kabiliyetli, verimli ve güvenli akıllı sistemler geliştirerek, bunları kullanıcılarımızla buluşturmak ve teknolojinin sunduğu tüm olanakları en üst düzeyde sunmaktır. Kullanıcılarımızın ihtiyaçlarını karşılamak için kişiselleştirilmiş çözümler üretiyor ve teknolojinin karmaşıklığını basitleştirerek herkesin kullanımına sunuyoruz.`;

const words2 = `Vizyonumuz, çeşitli yüksek teknoloji ürünleri geliştiren ve bu ürünleri global pazara sunan lider bir teknoloji şirketi olmaktır. Piyasadaki cihazları potansiyellerine uygun kullanarak eksik kalan donanımları geliştirmeyi ve yenilikçi çözümlerimizle sektörde güven ve kalite sembolü olmayı hedefliyoruz.`;

export function AboutTextGenerateEffect() {

    return (
        <div className="min-h-screen container flex flex-col justify-center items-start">
            <TextGenerateEffect words={words}/>
            <TextGenerateEffect words={words2}/>
            {/*<TextGenerateEffect words={words2} duration={4} isOnScreen={isOnScreen}/>*/}
        </div>
    );
}