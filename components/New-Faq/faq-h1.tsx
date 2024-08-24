"use client";

import { useTranslations } from "next-intl";

export const FaqHeader = () => {
    const t = useTranslations();
    return (
        <div className="mt-24 text-center">
            <h1 className="bg:text-7xl text-6xl font-bold md:text-7xl">
              {t("faq_header_title")}
            </h1>
          </div>
    )
}