"use client";
import React from "react";
import { FloatingNav } from "../New-Main-Base/floating-nav-bar";
import {IconHome, IconMail, IconQuestionMark, IconInfoCircle, IconUsers, IconBuilding} from "@tabler/icons-react";

export function NewFloatingNav() {
    const navItems = [
        {
            name: "Ana Sayfa",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Hakkımızda",
            link: "/about",
            icon: <
                IconBuilding className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Bize Ulaşın",
            link: "/contact",
            icon: (
                <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "SSS",
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
