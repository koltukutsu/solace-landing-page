import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import PlausibleProvider from 'next-plausible';

import { Providers } from "./providers";
import { NewFloatingNav } from "@/components/New-Main/new-floating-nav-bar";

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { headers } from 'next/headers';
import MAINTENANCE_MODE from "@/middleware";


const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const locale = await getLocale();
    const messages = await getMessages();

    const pathname = headers().get('x-pathname') || '';
    // const isMaintenancePage = pathname === '/under-maintenance';

    const isMaintenancePage = MAINTENANCE_MODE;
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
                <PlausibleProvider domain="solace.fi">
                    <NextIntlClientProvider messages={messages}>
                        <MantineProvider>
                            <Providers>
                                {!isMaintenancePage && <NewFloatingNav />}
                                {children}
                                <Analytics />
                                {!isMaintenancePage && <ScrollToTop />}
                            </Providers>
                        </MantineProvider>
                    </NextIntlClientProvider>
                </PlausibleProvider>
            </body>
        </html>
    );
}

export default RootLayout;
