"use client";

import Contact from "@/components/Contact";
import FAQSectionOne from "@/components/FAQ/FAQSectionOne";
import FAQSectionTwo from "@/components/FAQ/FAQSectionTwo";
import { FaqVanishingInput } from "@/components/New-Faq-Base/vanishing-input";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { HeroHighlight } from "@/components/New-Main-Base/hero-highlight";

const FAQPage = () => {
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  const placeholders = [
    "Ensi Home enerji tasarrufu sağlar mı?",
    "Güvenlik sistemleri nasıl çalışıyor?",
    "Ensi Home evimi gerçekten koruyabilir mi?",
    "Akıllı ev sistemlerini kurmak için ek donanım ihtiyacım olacak mı?",
    "Ensi Home montajı ne kadar sürer ve maliyeti nedir?",
    "Ensi Home ile aydınlatmamı nasıl kontrol edebilirim?",
    "Isıtma ve soğutma sistemlerini uzaktan kontrol edebilir miyim?",
    "Akıllı ev sistemleri evde olmadığımda evimi nasıl yönetir?",
    "Akıllı ev sistemleri internet bağlantısı olmadan çalışabilir mi?",
    "Akıllı ev sistemleri farklı markaların cihazları ile uyumlu mu?",
    "Ensi Home sesli komutlarla çalışabilir mi?",
    "Ensi Home ile güvenlik kameralarını nasıl izleyebilirim?",
    "Ensi Home ile evdeki elektrikli cihazları otomatik olarak kapatabilir miyim?",
    "Ensi Home ile su sızıntılarını veya yangınları tespit edebilir miyim?",
    "Akıllı ev sistemleri kullanımı ne kadar karmaşık ve yaşlılar için uygun mu?",
    "Ensi Home için düzenli olarak bakım veya güncelleme yapmak gerekir mi?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <>
      <div className="z-0 min-h-screen w-full flex-grow scroll-smooth">
        {/* <HeroHighlight> */}
        <div
          className="flex min-h-screen flex-col items-center justify-center"
          id="question-part"
        >
          <div className="w-full pb-8">
            <FaqVanishingInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>

          <FAQSectionOne />
        </div>
        {/* <div className="min-h-screen snap-always snap-center flex flex-col items-center justify-center">
      <Contact />
    </div> */}
        {/* </HeroHighlight> */}
      </div>
    </>
  );
};

export default FAQPage;
