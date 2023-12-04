import WhoAreWeSectionOne from "@/components/About-Who-Are-We/WhoAreWeSectionOne";
import WhoAreWeSectionTwo from "@/components/About-Who-Are-We/WhoAreWeSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const WhoAreWe = () => {
  return (
    <>
        <Breadcrumb
          pageName="Biz Kimiz?"
          description="Solace,
          teknoloji odakli yenilenebilir
          yasam alanlarini sunan bir şirkettir."
        />
        <WhoAreWeSectionOne />
        {/* <WhoAreWeSectionTwo /> */}
    </>
  );
};

export default WhoAreWe;
