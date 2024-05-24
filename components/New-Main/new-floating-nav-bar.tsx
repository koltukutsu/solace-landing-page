"use client";
import React from "react";
import { FloatingNav } from "../New-Main-Base/floating-nav-bar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function NewFloatingNav() {
    const navItems = [
        {
            name: "Ana Sayfa",
            link: "/new-main",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Hakkımızda",
            link: "/new-about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Bize Ulaşın",
            link: "/new-faq",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
            <FloatingNav navItems={navItems} />
    );
}