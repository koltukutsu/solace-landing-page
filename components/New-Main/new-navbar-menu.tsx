"use client";
import React, {useEffect, useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "../New-Main-Base/navbar-menu";
import {cn} from "@/utils/cn";
import logoImage from "@/public/images/logo/main_logo.svg";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function NewNavbarMenu() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2"/>
            {/*<p className="text-black dark:text-white">*/}
            {/*    The Navbar will show on top of the page*/}
            {/*</p>*/}
        </div>
    );
}

function Navbar({className}: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };

    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        // window.addEventListener("scroll", handleStickyNavbar);
    });

    // submenu handler
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <>
            <header
                className={`header left-0 top-4 z-40 flex w-full items-center ${
                    sticky
                        ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
                        : "absolute bg-transparent"
                }`}
            >
                <div className="">
                    <div className="relative mx-8 flex items-center justify-between">
                        <div className="w-[10rem] max-w-full px-0 xl:mr-8">
                            <Link
                                href="/"
                                className="
                                header-logo block w-full
                                {/*py-2*/}
                                "
                            >
                                <div className="flex items-center">

                                    <Image
                                        src={logoImage}
                                        alt="Solace logo"
                                        width={60}
                                        height={30}
                                        className="w-full dark:hidden"
                                        priority
                                    />
                                    <Image
                                        src={logoImage}
                                        alt="Solace logo"
                                        width={60}
                                        height={30}
                                        className="hidden w-full dark:block"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
            >
                <Menu setActive={setActive}>
                    {/*<ProductItem*/}
                    {/*    href="https://algochurn.com"*/}
                    {/*    src={logoImage}*/}
                    {/*/>*/}
                    {/*<MenuItem setActive={setActive} active={active} item="Ana Sayfa">*/}
                    {/*<div className="flex flex-col space-y-4 text-sm">*/}
                    {/*    <HoveredLink href="/web-dev">Web Development</HoveredLink>*/}
                    {/*    <HoveredLink href="/interface-design">Interface Design</HoveredLink>*/}
                    {/*    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>*/}
                    {/*    <HoveredLink href="/branding">Branding</HoveredLink>*/}
                    {/*</div>*/}
                    {/*</MenuItem>*/}
                    <HoveredLink href="/new-main">Ana Sayfa</HoveredLink>
                    <MenuItem setActive={setActive} active={active} item="Hakkımızda">
                        <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Biz Kimiz"
                                href="https://algochurn.com"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Vizyonumuz"
                                href="https://tailwindmasterkit.com"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Misyonumuz"
                                href="https://gomoonbeam.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="SSS"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Bize Ulaşın">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </>

    )
        ;
}
