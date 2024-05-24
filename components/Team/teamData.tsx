import { Person } from "@/types/person";
import kenanImage from "@/public/faces/kenankocak.jpeg";
import farisImage from "@/public/faces/faris_2.png";
import furkanImage from "@/public/faces/furkan.png";
import semihImage from "@/public/faces/semih.png";
import erkamImage from "@/public/faces/erkam.jpeg";

const teamData: Person[] = [
  {
    id: 1,
    name: "Kenan KOÇAK",
    position: "Şirket Lideri",
    image: kenanImage, // Replace with the path to the member's image
    linkedin: "https://www.linkedin.com/in/kenan-ko%C3%A7ak-b19b66194/",
  },
  {
    id: 2,
    name: "A. Faris BALOĞLU",
    position: "Strateji ve Finans Lideri",
    image: farisImage, // Replace with the path to the member's image
    linkedin: "https://www.linkedin.com/in/ahmed-faris-balo%C4%9Flu-7459332a2/",
  },
  {
    id: 3,
    name: "A. Furkan AKINCI",
    position: "Robotik ve IOT Lideri",
    image: furkanImage, // Replace with the path to the member's image
    linkedin: "https://www.linkedin.com/in/ahmet-furkan-akinci/",
  },
  {
    id: 4,
    name: "M. Semih BABACAN",
    position: "Yazılım Mimarisi ve Sistem Lideri",
    image: semihImage, // Replace with the path to the member's image
    linkedin: "https://www.linkedin.com/in/mehmetsemihbabacan/",
  },
  {
    id: 5,
    name: "Erkam KAVAK",
    position: "Baş Mühendis",
    image: erkamImage, // Replace with the path to the member's image
    linkedin: "https://tr.linkedin.com/in/erkam-kavak-8b8667184",
  },
  // Add more team members as needed
];
export default teamData;
