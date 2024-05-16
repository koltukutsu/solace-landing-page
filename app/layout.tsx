"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import {Inter} from "next/font/google";

import '@mantine/core/styles.css';

import {MantineProvider, ColorSchemeScript} from '@mantine/core';

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="tr">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        {/* <ColorSchemeScript/>? */}
        <body className={`
        no-scrollbar overflow-y-hidden
      bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <MantineProvider>
            <Providers>
                {/*<Header />*/}
                {/*<NewNavbarMenu/>*/}
                <NewFloatingNav/>
                {children}
                <Footer/>
                <ScrollToTop/>
            </Providers>
        </MantineProvider>
        </body>
        </html>
    );
}

import {Providers} from "./providers";
import {NewNavbarMenu} from "@/components/New-Main/new-navbar-menu";
import {NewFloatingNav} from "@/components/New-Main/new-floating-nav-bar";
