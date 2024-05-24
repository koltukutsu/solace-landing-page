import React from "react";
import { FlipWords } from "../New-About-Base/flip-words";

export function AboutFlipWords() {
    const words = ["ileri teknoloji", "yasam", "otomasyon", "yapay zeka", "hayat"];

    return (
        <div className="min-h-screen flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Solace size
                <FlipWords words={words} /> <br />
                sunar. Hayati ulasilabilir kilar.
            </div>
        </div>
    );
}
