import ValuesSectionOne from "@/components/About-Values/ValuesSectionOne";
import ValuesSectionTwo from "@/components/About-Values/ValuesSectionTwo";
import VisionAndMissionOne from "@/components/About-Vission-And-Mission/VisionAndMissionOne";
import VisionAndMissionTwo from "@/components/About-Vission-And-Mission/VisionAndMissionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const OurValues = () => {

    return <>
    <Breadcrumb
      pageName="Değerlerimiz"
      description="Solace Akıllı Yaşam Sistemleri olarak, yaşamın kendisine değer veriyoruz."
    />
    <ValuesSectionOne />
    {/* <ValuesSectionTwo/> */}
  </>;

}

export default OurValues;