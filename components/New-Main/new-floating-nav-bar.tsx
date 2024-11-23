"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FloatingNav } from "../New-Main-Base/floating-nav-bar";
import {
  IconHome,
  IconLayoutGrid,
  IconQuestionMark,
  IconBuilding,
  IconChevronRight,
} from "@tabler/icons-react";

export function NewFloatingNav() {
  const t = useTranslations();
  const navItems = [
    {
      name: t("newFloatingNavBar_main_home"),
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t("newFloatingNavBar_main_fields"),
      link: "#",
      icon: <IconLayoutGrid className="h-4 w-4 text-neutral-500 dark:text-white" />,
      subItems: [
        {
          brand: "Ensi",
          field: t("newFloatingNavBar_main_smartLiving"),
          link: "#",
          brandColor: "#54C5CF",
          items: [
            {
              name: "EnsiHome",
              link: "https://ensihome.solace.com.tr",
            },
          ],
        },
      ],
    },
    {
      name: t("newFloatingNavBar_main_about"),
      link: "/about",
      icon: (
        <IconBuilding className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    
  ];

  return <FloatingNav navItems={navItems} />;
}
