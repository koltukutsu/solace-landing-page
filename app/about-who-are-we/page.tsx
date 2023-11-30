import WhoAreWeSectionOne from "@/components/About-Who-Are-We/WhoAreWeSectionOne";
import WhoAreWeSectionTwo from "@/components/About-Who-Are-We/WhoAreWeSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const WhoAreWe = () => {
  return (
    <>
        <Breadcrumb
          pageName="Biz Kimiz?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
        <WhoAreWeSectionOne />
        <WhoAreWeSectionTwo />
    </>
  );
};

export default WhoAreWe;
