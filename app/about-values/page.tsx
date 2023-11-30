import ValuesSectionOne from "@/components/About-Values/ValuesSectionOne";
import ValuesSectionTwo from "@/components/About-Values/ValuesSectionTwo";
import VisionAndMissionOne from "@/components/About-Vission-And-Mission/VisionAndMissionOne";
import VisionAndMissionTwo from "@/components/About-Vission-And-Mission/VisionAndMissionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const OurValues = () => {

    return <>
    <Breadcrumb
      pageName="Değerlerimiz"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
    />
    <ValuesSectionOne />
    <ValuesSectionTwo/>
  </>;

}

export default OurValues;