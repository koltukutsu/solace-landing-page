"use client";
import kenanImage from "@/public/faces/kenankocak.jpeg";
import farisImage from "@/public/faces/faris_2.png";
import furkanImage from "@/public/faces/furkan.png";
import semihImage from "@/public/faces/semih.png";
import erkamImage from "@/public/faces/erkam.jpeg";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { Person } from "@/types/person";

const TeamSection = ({ customWidth = "w-56", customHeight = "h-56" }) => {
  const t = useTranslations();
  const teamData: Person[] = [
    {
      id: 1,
      name: "Kenan KOÇAK",
      position: t("about.teamSection.kenan.position"),
      image: kenanImage,
      linkedin: "https://www.linkedin.com/in/kenan-ko%C3%A7ak-b19b66194/",
    },
    {
      id: 2,
      name: "A. Faris BALOĞLU",
      position: t("about.teamSection.faris.position"),
      image: farisImage,
      linkedin:
        "https://www.linkedin.com/in/ahmed-faris-balo%C4%9Flu-7459332a2/",
    },
    {
      id: 3,
      name: "A. Furkan AKINCI",
      position: t("about.teamSection.furkan.position"),
      image: furkanImage,
      linkedin: "https://www.linkedin.com/in/ahmet-furkan-akinci/",
    },
    {
      id: 4,
      name: "M. Semih BABACAN",
      position: t("about.teamSection.semih.position"),
      image: semihImage,
      linkedin: "https://www.linkedin.com/in/mehmetsemihbabacan/",
    },
    {
      id: 5,
      name: "Erkam KAVAK",
      position: t("about.teamSection.erkam.position"),
      image: erkamImage,
      linkedin: "https://tr.linkedin.com/in/erkam-kavak-8b8667184",
    },
  ];

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <h1 className="bg:text-7xl pb-8 text-4xl font-bold md:text-7xl">
        {t("about.teamSection.title")}
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamData.map((member) => (
          <div
            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            key={member.id}
          >
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <Image
                width={400}
                height={400}
                className={`${customWidth} ${customHeight} mb-3 rounded-full shadow-lg`}
                src={member.image}
                alt="Team member image"
              />
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
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
