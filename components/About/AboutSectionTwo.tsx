import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
          <SectionTitle
                title="Cironuzu ve Müşteri Memnuniyetinizi Artırın. Rakiplerinizin Önüne Geçin!"
                paragraph="Solace'ın Akıllı Ev Sistemleri çözümleri ile hem kazancınızı hem de müşteri memnuniyetinizi yukarılara çıkarın. Modern çağı yakalayın ve rakiplerinizden her seferinde bir adım önde olun."
                mb="44px"
              />
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-smart-house.png"
                alt="Smart House"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-md"
              />
              <Image
                src="/images/about/about-smart-house.png"
                alt="Smart House"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-md"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Akıllı Evlere Olan İlgi Artışı
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Günümüzde toplumumuzun %71&apos;i, Akıllı Ev sistemlerine ilgilier
                  olduğunu ifade ediyor. Bu oran gün geçtikçe artmakta ve
                  müşterilerin tüketim alışkanlıklarını değiştirmekte.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Enerji Harcamanızı Azaltın
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Enerji harcamalarınızın %20&apos;e kadar azalabilme imkanı var!
                  Yapay Zeka ve İnternet Devrimi ile birlikte Akıllı
                  Cihazlarımızı en verimli şekilde kullanabiliyoruz. Bu da bize
                  Enerji Tasarrufu ve Gereksiz Harcamaların önünü kesmek olarak
                  geri dönüyor.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Akıllı Evlerin Satışındaki Kar Artışı
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Günümüzde Akıllı Evlerin evlerin, Akıllı Sistemlere sahip olmayan evlere göre, %35&apos;e yakın bir ek kazanç getirisi olduğundan ötürü,
                  artık Akıllı Evlere ve Akıllı Sistemlere yönelik ciddi bir yönelim var.
                </p>
              </div>
              <Link
                    href="/smart-life"
                    className="inline-block rounded-md bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 mt-8"
                  >
                    Çözümlerimizi Keşfedin
                  </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
