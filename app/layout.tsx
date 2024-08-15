import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html suppressHydrationWarning>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            {/* <ColorSchemeScript/>? */}
            <body className={`
        no-scrollbar overflow-y-hidden
      bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
                <NextIntlClientProvider messages={messages}>
                    <MantineProvider>
                        <Providers>
                            {/*<Header />*/}
                            {/*<NewNavbarMenu/>*/}
                            <NewFloatingNav />
                            {children}
                            <Analytics />
                            {/*<Footer/>*/}
                            <ScrollToTop />
                        </Providers>
                    </MantineProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;

import { Providers } from "./providers";
import { NewNavbarMenu } from "@/components/New-Main/new-navbar-menu";
import { NewFloatingNav } from "@/components/New-Main/new-floating-nav-bar";
