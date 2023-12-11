import WhoAreWeSectionOne from "@/components/About-Who-Are-We/WhoAreWeSectionOne";
import WhoAreWeSectionTwo from "@/components/About-Who-Are-We/WhoAreWeSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const WhoAreWe = () => {
  return (
    <>
        <Breadcrumb
          pageName="Biz Kimiz?"
          description="Solace,
          teknoloji odaklı yenilenebilir
          yaşam alanlarını sunan bir şirkettir."
        />
        <WhoAreWeSectionOne />
        <Contact/>

        {/* <WhoAreWeSectionTwo /> */}
    </>
  );
};

export default WhoAreWe;
