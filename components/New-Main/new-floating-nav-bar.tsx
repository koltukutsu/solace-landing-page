"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { FloatingNav } from "../New-Main-Base/floating-nav-bar";
import {IconHome, IconMail, IconQuestionMark, IconInfoCircle, IconUsers, IconBuilding} from "@tabler/icons-react";

export function NewFloatingNav() {
    const t = useTranslations(); 
    const navItems = [
        {
            name: t("Ana Sayfa"),
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: t("Hakkımızda"),
            link: "/about",
            icon: <
                IconBuilding className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: t("Bize Ulaşın"),
            link: "/contact",
            icon: (
                <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: t("SSS"),
            link: "/faq",
            icon: (
                <IconQuestionMark className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <FloatingNav navItems={navItems} />
    );
}
