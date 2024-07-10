import { FaLinkedin } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import teamData from "./teamData";
import Image from "next/image";

const TeamSection = ({ customWidth = "w-56", customHeight = "h-56" }) => {
    const LinkedinSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            />
        </svg>
    );
    return (
        <div className="container flex flex-col justify-center items-center min-h-screen">
            {/* <SectionTitle title="Ekibimiz" paragraph="" center width="665px" /> */}
            <h2 className={`mb-4 text-3xl font-bold !leading-tight text-black dark:text-white  sm:text-4xl md:text-[45px]`}>
          Ekibimiz
        </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                {teamData.map((member) => (
                    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800" key={member.id}>
                        <div className="flex justify-end px-4 pt-4">
                            {/* Hidden dropdown component here */}
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                width={400}
                                height={400}
                                className={`${customWidth} ${customHeight} mb-3 rounded-full shadow-lg`}
                                src={member.image}
                                alt="Team member image"
                            />
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center">
                                    <FaLinkedin className="hover:text-primary-dark -ml-1 mr-2 text-3xl text-linkedin duration-300 lg:text-3xl" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 hover:text-primary dark:text-white">
                                        {member.name}
                                    </h5>
                                </div>
                                <span className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  {member.position}
                </span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
