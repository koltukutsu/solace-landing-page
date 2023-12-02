// components/TeamSection.js
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
    <div className="container">
      <SectionTitle title="Ekibimiz" paragraph="" center width="665px" />
      <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamData.map((member) => (
          <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800" key={member.id}>
            <div className="flex justify-end px-4 pt-4">
              {/* <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button> */}
              <div
                id="dropdown"
                className="z-10 hidden w-44 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:bg-gray-700"
              >
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <Image
              width={400}
              height={400}
                className={
                  customWidth +
                  " " +
                  customHeight +
                  " mb-3 rounded-full shadow-lg"
                }
                src={member.image}
                alt="Bonnie image"
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
              {/* <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
        </div> */}
            </div>
          </div>

          // <div
          //   key={member.id}
          //   classNameName="relative z-10 roundedmdm bg-white p-6 shadow-two dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark"
          // >
          //   <a
          //     href={member.linkedin}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     classNameName="mb-4 flex items-center"
          //   >
          //     <LinkedinSvg />

          //     <span classNameName="currentColor hover:underline px-2 text-xl">
          //       {member.name}
          //     </span>
          //   </a>
          //   <p classNameName="mb-2 font-bold text-primary text-m">{member.position}</p>
          //   <img
          //     src={member.image}
          //     alt={member.name}
          //     classNameName="mb-4 h-60 w-full rounded-md object-cover"
          //   />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
