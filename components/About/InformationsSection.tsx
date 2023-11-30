import { InformationCard } from "../Common/InformationCard";
import SectionTitle from "../Common/SectionTitle";
import informationCardsList from "./informationCards";
const InformationsSection = () => {
  return (
    <section id="about" className="pt-8 md:pt-10 lg:pt-12">
    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
      <div className="container">
        {/* Use flex and flex-wrap to create a flex container */}
        <div className="flex flex-wrap -mx-4">
        <SectionTitle
                title="Solace Sizin Çözüm Ortağınız"
                paragraph="Merak etmeyin, Solace hayatı avuçlarınıza sunuyor."
                mb="44px"
              />
          {informationCardsList.map((card) => (
            <div key={card.title} className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-8">
              {/* Each card takes up full width on small screens, half on medium, and one-third on large */}
              <InformationCard
                title={card.title}
                image={card.image}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>  
  );
};

export default InformationsSection;
