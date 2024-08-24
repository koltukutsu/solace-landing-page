import { useTranslations } from "next-intl";

export const ContactHeader = () => {
    const t = useTranslations();
    return (
        <div className="mt-8 text-center">
              <h1 className="bg:text-7xl pb-8 text-6xl font-bold md:text-7xl">
                {t("contact_header_title")}
              </h1>
            </div>
    );
}
