"use client";

import Contact from "@/components/Contact";
import FAQSectionOne from "@/components/FAQ/FAQSectionOne";
import FAQSectionTwo from "@/components/FAQ/FAQSectionTwo";
import {FaqVanishingInput} from "@/components/New-Faq-Base/vanishing-input";
import Breadcrumb from "@/components/Common/Breadcrumb";

const FAQPage = () => {
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    }
    return <>
        <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
            <div className="no-scrollbar snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 scroll-smooth">
                <div className="min-h-screen snap-always snap-center" id="question-part">
                    <FaqVanishingInput placeholders={placeholders} onChange={
                        handleChange
                    } onSubmit={
                        onSubmit
                    }/>
                    <FAQSectionOne/>
                </div>
                {/*<FAQSectionTwo/>*/}
                <div className={"snap-always snap-center"}>
                    <Contact/>
                </div>
            </div>
        </section>

    </>
}

export default FAQPage;