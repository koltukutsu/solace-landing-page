"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../New-Main-Base/wobble-card";

export function FeaturesAndBenefitsWobbleCard() {
    return (
        <div className="pt-24 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Parçaların Toplamından Daha Fazlası
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    Solace, parçaların toplamından daha fazlasını değer olarak ortaya koyar. Bütün, bireysel parçaların ötesinde bir sinerji ile değer oluşturur.
                    </p>
                </div>
                <Image
                    src="/images/mobile/sensorler.png"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Teknolojiyi insanlaştırma. Sade ve yalın, insan odaklı
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Solace, tasarımlarında insan odaklı olarak sade ve yalın çözümler sunar. Karmaşıklığı basitleştirir ve kullanıcı deneyimini ön planda tutar.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Akıllı yaşam çözümleri
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Solace, yüksek teknolojiyi kullanarak akıllı ve yenilikçi yaşam çözümleri geliştirir. Teknoloji, yaşam alanlarını daha konforlu ve verimli hale getirir.
                    </p>
                </div>
                <Image
                    src="/images/mobile/isik.png"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>

            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Güvenli ve verimli sistemler
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Solace, tam donanımlı, güvenli ve verimli akıllı sistemler geliştirir. Veri gizliliği ve kullanıcı güvenliği her zaman önceliklidir.
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Yenilikçi ve sürdürülebilir
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    Solace, yenilikçi yaklaşımlarla sürdürülebilir yaşam alanları yaratır. Enerji verimliliği ve kaynak yönetimi ile çevresel etkileri minimize eder.</p>
                </div>
                <Image
                    src="/images/mobile/sensorler.png"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>
    );
}
