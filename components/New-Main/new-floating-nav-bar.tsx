"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FloatingNav } from "../New-Main-Base/floating-nav-bar";
import {
  IconHome,
  IconMail,
  IconQuestionMark,
  IconBuilding,
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
      name: t("newFloatingNavBar_main_about"),
      link: "/about",
      icon: (
        <IconBuilding className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: t("newFloatingNavBar_main_contact"),
      link: "/contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: t('newFloatingNavBar_main_faq'),
    //   link: '/faq',
    //   icon: <IconQuestionMark className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
  ];

  return <FloatingNav navItems={navItems} />;
}
