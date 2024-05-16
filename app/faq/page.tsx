import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
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
    <Contact/>

</>
}

export default FAQPage;