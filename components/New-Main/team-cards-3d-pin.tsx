"use client";
import React from "react";
import { PinContainer } from "../New-Main-Base/3d-pin";
import teamData from "../Team/teamData";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export function TeamCardsAnimatedPin() {
    const customWidth = "w-56";
    const customHeight = "h-56";
    return (
        <div className="min-h-screen container">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950  text-center font-sans font-bold mt-16">
                Ekibimiz
            </h1>
            <div className="h-[47.5rem] grid grid-cols-1 lg:grid-cols-3 w-full flex items-center justify-center ">
                {teamData.map((member) => (
                    <PinContainer
                        title="LinkedIn"
                        href={member.linkedin}
                        key={member.name}
                    >
                        <div
                            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] justify-center items-center">
                            <div className="flex items-center justify-center">
                                <FaLinkedin
                                    className="hover:text-primary-dark -ml-1 mr-2 text-3xl text-linkedin duration-300 lg:text-3xl" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 hover:text-primary dark:text-white">
                                    {member.name}
                                </h5>
                            </div>
                            <div className="text-base !m-0 !p-0 font-normal justify-center items-center">
                                <span className="text-slate-500 ">
                                    {member.position}
                                </span>
                            </div>
                            <Image
                                width={400}
                                height={400}
                                className={
                                    customWidth +
                                    " " +
                                    customHeight +
                                    " mb-3 rounded-full border-gray-200 justify-center items-center mt-4"
                                }
                                src={member.image}
                                alt="Bonnie image"
                            />
                        </div>
                    </PinContainer>
                ))}
            </div>
        </div>
        // <div className="h-[40rem] w-full flex items-center justify-center ">
        //     <PinContainer
        //         title="/ui.aceternity.com"
        //         href="https://twitter.com/mannupaaji"
        //     >
        //         <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        //             <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
        //                 Aceternity UI
        //             </h3>
        //             <div className="text-base !m-0 !p-0 font-normal">
        //     <span className="text-slate-500 ">
        //       Customizable Tailwind CSS and Framer Motion Components.
        //     </span>
        //             </div>
        //             <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        //         </div>
        //     </PinContainer>
        // </div>
    );
}
