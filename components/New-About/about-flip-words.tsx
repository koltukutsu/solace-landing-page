import React from "react";
import { FlipWords } from "../New-About-Base/flip-words";

export function AboutFlipWords() {
    // Updated phrases with exactly three words
    const words = ["yapay zeka ile", "otonom karar verme", "koordinasyon ve adaptasyon", "bütünleşik sistem çözümü"];

    return (
        <div className="min-h-screen flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Solace size
                <FlipWords words={words} /> <br />
                sunar. Hayatı ulaşılabilir kılar.
            </div>
        </div>
    );
}
