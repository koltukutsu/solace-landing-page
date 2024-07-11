"use client";
import React from "react";
import { StickyScroll } from "../New-Main-Base/sticky-scroll-reveal";
import Image from "next/image";


const content = [
    {
        title: "İnsan Odaklı",
        description:
            "Solace, kullanıcıların yaşamlarını kolaylaştırmak için insan odaklı akıllı sistemler geliştirir. Bu, güvenli ve verimli çözümler sunarak, kullanıcıların ihtiyaçlarına uygun kişiselleştirilmiş teknolojiler üretmek anlamına gelir. Kullanıcı verilerinin gizliliği ve güvenliği önceliklidir.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "Akıllı Sistemler",
        description:
            "Yapay zeka ve yazılım entegrasyonu ile akıllı cihazları koordine eden sistemler geliştirir. Bu sistemler, kullanıcıların zihinsel yükünü azaltır ve günlük yaşamlarını daha rahat ve pratik hale getirir.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Yaşam Alanları",
        description:
            " Solace, teknolojiyi kullanarak yaşam alanlarını daha konforlu ve kullanıcı dostu hale getirir. Bu, günlük yaşamda rahatlık ve pratiklik sağlayan çözümler sunar.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Ulaşılabilirlik",
        description:
            "Solace, ileri teknolojileri herkesin kullanımına sunmak için uzmanlık gerektiren sistemleri basitleştirir. Bu, akıllı sistemlerin daha geniş kitlelere ulaşmasını ve teknolojinin faydalarından herkesin yararlanmasını sağlar.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];

 export function AboutStickyScrollReveal() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}