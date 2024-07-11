"use client";
import {FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

import {NewContactForm} from "@/components/New-Contact/form";
import {NewContactBulletin} from "@/components/New-Contact/bulletin";
import {motion} from "framer-motion";

const ContactPage = () => {
    return (
        <>
            <div className="z-0 min-h-screen w-full  flex-grow scroll-smooth">

                <div
                    className="flex min-h-screen flex-col items-center justify-center"
                    id="question-part"
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-center mt-8">
                            <h1 className="text-4xl md:text-7xl bg:text-7xl font-bold pb-8">Bize Ulaşın
                            </h1>

                        </div>
                        <SocialMediaIcons/>
                    </div>
                    <div className="pt-20 flex flex-col md:flex-row items-center justify-center">
                        <NewContactForm/>
                        <div className="w-24"></div>
                        <NewContactBulletin/>
                    </div>


                </div>
            </div>
        </>
    );
};

export default ContactPage;


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center mt-4 space-x-4">
            <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-500"
            >
                <FaInstagram size={64}/>
            </a>
            <a
                href="https://www.twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-500"
            >
                <FaTwitter size={64}/>
            </a>
            <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-500"
            >
                <FaLinkedin size={64}/>
            </a>
        </div>
    );
};

// export default SocialMediaIcons;
