import WhoAreWeSectionOne from "@/components/About-Who-Are-We/WhoAreWeSectionOne";
import WhoAreWeSectionTwo from "@/components/About-Who-Are-We/WhoAreWeSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQSectionOne from "@/components/FAQ/FAQSectionOne";
import FAQSectionTwo from "@/components/FAQ/FAQSectionTwo";

const FAQPage = () => {

    return <>
    <Breadcrumb
      pageName="Sıkça Sorulan Sorular"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
    />
    <FAQSectionOne />
    <FAQSectionTwo />
</>
}

export default FAQPage;