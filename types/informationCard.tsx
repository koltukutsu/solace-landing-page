import { StaticImageData } from "next/image";

export type InformationCard = {
    title: string,
    description?:string,
    image:StaticImageData,
};