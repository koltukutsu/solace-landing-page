import { StaticImageData } from "next/image";

export type Person = {
    id: number;
    name: string;
    position: string;
    image: StaticImageData;
    linkedin: string;
  };
  