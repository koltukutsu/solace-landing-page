"use client";
import {TextGenerateEffect} from "../New-About-Base/text-generate-effect";

const words = `Misyon: Solace olarak misyonumuz tam kabiliyetli, verimli ve güvenli akıllı sistemler geliştirmek ve bunları yaygınlaştırmaktır
`;

const words2 = `Vizyon: Piyasadaki cihazları potansiyellerine uygun kullanmak, eksik kalan donanımı kendimiz geliştirmektir.`;

export function AboutTextGenerateEffect({ref}) {

    return (
        <div ref={ref} className="min-h-screen container flex flex-col justify-center items-start">
            <TextGenerateEffect words={words}/>
            {/*<TextGenerateEffect words={words2} duration={4} isOnScreen={isOnScreen}/>*/}
        </div>
    );
}