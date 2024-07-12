import React from 'react';
import { cn } from '@/utils/cn';
import { Spotlight } from '../New-About-Base/spotlight';

export function AboutSpotlight() {
    return (
        <div className="min-h-screen w-full rounded-md flex items-center justify-center bg-black bg-opacity-95 bg-[url('/path_to_grid_image.png')] bg-[length:100px_100px] relative overflow-hidden">
            <Spotlight
                className="absolute top-40 left-0 md:left-60 lg:top-20"
                fill="white"
            />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Solace <br /> Yaşamı Avucunuza Sunuyoruz
                </h1>
                <p className="mt-4 font-normal text-base md:text-2xl text-neutral-300 max-w-lg text-center mx-auto">
                    Solace olarak, yüksek teknolojileri tasarlayıp geliştirerek akıllı ve inovatif çözümleri hayata geçiriyoruz
                </p>
            </div>
        </div>
    );
}
