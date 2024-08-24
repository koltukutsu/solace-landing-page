'use client';

import { useTranslations } from "next-intl";
import GLTFViewer from "../GLTFViewer/GLTF-viewer";

export const EnsiHomeBoxSection = () => {
  const t = useTranslations();
  const modelUrl = "/models/ensi-box.glb"; // Replace with your actual model path

  return (
    <div
      id="ensi-home-box"
      className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 md:snap-center md:snap-always md:flex-row md:p-20"
    >
      <div className="md:pr-18 flex flex-col items-center text-left md:mr-8 md:w-1/2 md:items-start">
        <h1
          className="
            relative bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-6xl font-bold text-transparent md:text-left md:text-7xl
          "
        >
          {t('home.ensiHomeBoxSection.ensi')}
        </h1>
        <h1
          className="
            bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-2 text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-7xl
          "
        >
          {t('home.ensiHomeBoxSection.homeBox')}
        </h1>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-xl text-neutral-500 md:mx-0 md:text-left">
          {t('home.ensiHomeBoxSection.description')}
        </p>
      </div>
      <GLTFViewer modelUrl={modelUrl} />
    </div>
  );
};
