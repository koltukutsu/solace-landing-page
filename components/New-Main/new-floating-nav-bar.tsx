"use client";
import React, { useState, useEffect } from "react";
import { FloatingNav } from "../New-Main-Base/floating-nav-bar";
import { IconHome, IconMail, IconQuestionMark, IconInfoCircle, IconUsers, IconBuilding } from "@tabler/icons-react";

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
            icon: <IconBuilding className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Bize Ulaşın",
            link: "/contact",
            icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "SSS",
            link: "/faq",
            icon: <IconQuestionMark className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`fixed bottom-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
            <FloatingNav navItems={navItems} />
        </div>
    );
}
