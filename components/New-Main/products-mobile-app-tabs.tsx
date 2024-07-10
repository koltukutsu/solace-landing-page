"use client";

import Image from "next/image";
import {Tabs} from "../New-Main-Base/tabs";
import React from "react";
import CihazIFrame from "@/components/Phone-Wrapper/cihaz-iframe";

export function ProductsMobileAppTabs() {
    // const iframeRef = React.useRef(null);
    //
    // React.useEffect(() => {
    //     if (iframeRef.current) {
    //         const iframeWindow = iframeRef.current.contentWindow;
    //         // Now you can interact with the iframe's window object
    //         // For example, to access a global variable in the iframe:
    //         const data = iframeWindow.counter;
    //         console.log("Here is the data that I was looking for: ")
    //         console.log(data);
    //     }
    // }, []);
    const deviceControlUrl = "https://flutter-example-webapp.vercel.app/#/device-control";
    const deviceControlInDetailUrl = "https://flutter-example-webapp.vercel.app/#/device-controls-in-detail";
    const automationUrl = "https://flutter-example-webapp.vercel.app/#/automation";
    const userManagementUrl = "https://flutter-example-webapp.vercel.app/#/user-management";

    const tabs = [
        {
            title: "Cihaz Kontrolleri",
            value: "product",
            content: (
                <div
                    className="overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <CihazIFrame url={deviceControlUrl}/>
                </div>
            ),
        },
        {
            title: "Otomasyonlar",
            value: "services",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Services tab</p>
                    <DummyContent url="/images/mobile/prizler.png"/>
                </div>
            ),
        },
        {
            title: "Ev Paylaşımı",
            value: "playground",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Playground tab</p>
                    <DummyContent url="/images/mobile/muzik.png"/>
                </div>
            ),
        },
        {
            title: "Tam Kontrol",
            value: "content",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Content tab</p>
                    <DummyContent url="/images/mobile/kapi-kilidi.png"/>
                </div>
            ),
        },
        {
            title: "Anlık Bildirim",
            value: "random",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Random tab</p>
                    <DummyContent url="/images/mobile/isik.png"/>
                </div>
            ),
        },
    ];

    return (
        // <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <div className="min-h-screen container">

            <div
                className="h-[30rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 pt-20">
                <Tabs tabs={[tabs[0]]}/>
            </div>
        </div>
    );
}

interface DummyContentProps {
    url: string;
}

const DummyContent = ({url}: DummyContentProps) => {
    return (
        <Image
            src={url}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
