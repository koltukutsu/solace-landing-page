import VisionAndMissionOne from "@/components/About-Vission-And-Mission/VisionAndMissionOne";
import VisionAndMissionTwo from "@/components/About-Vission-And-Mission/VisionAndMissionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const VisionAndMission = () => {
  return (
    <>
      <Breadcrumb
        pageName="Vizyon ve Misyonumuz"
        description="Solace olarak, her daim vizyon ve misyonumuz çerçevesinde hareket ediyoruz."
      />
      <VisionAndMissionOne />
      <VisionAndMissionTwo />
    </>
  );
};

export default VisionAndMission;
