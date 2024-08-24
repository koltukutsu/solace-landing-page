"use client";

import { useTranslations } from "next-intl";

export const FaqHeader = () => {
    const t = useTranslations();
    return (
        <div className="mt-8 text-center">
            <h1 className="bg:text-7xl text-6xl font-bold md:text-7xl">
              {t("faq.header.title")}
            </h1>
          </div>
    )
}