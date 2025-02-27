import { Metadata } from "next";
import UnderMaintenanceMain from "./main";

export const metadata: Metadata = {
  title: "Solace | Sitemiz Kısa Bir Mola Veriyor",
  description: "Web sitemiz şu anda bakımda. Kısa süre içinde yeniden aktif hale geleceğiz.",
};

const UnderMaintenancePage = () => {
  return <UnderMaintenanceMain />;
};

export default UnderMaintenancePage;