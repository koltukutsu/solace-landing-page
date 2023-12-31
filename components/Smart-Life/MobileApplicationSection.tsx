"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import termostatImage from "@/public/images/mobile/termostat.png";
import isikImage from "@/public/images/mobile/isik.png";
import sensorlerImage from "@/public/images/mobile/sensorler.png";
import kapiKilidiImage from "@/public/images/mobile/kapi-kilidi.png";
import muzikImage from "@/public/images/mobile/muzik.png";
import prizlerImage from "@/public/images/mobile/prizler.png";
import perdelerImage from "@/public/images/mobile/perdeler.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSpring, animated } from '@react-spring/web'

const mobileAppData: {
  id: string;
  phoneImagePath: StaticImageData;
  phoneImageAlt: string;
  svgPath: string;
  svgAlt: string;
}[] = [
  {
    id: "Termostat",
    phoneImagePath: termostatImage,
    phoneImageAlt: "Termometre - Isi Kontrol",
    svgPath: "/images/mobile/svg/thermometer.svg",
    svgAlt: "Termometre - Isi Kontrol",
  },
  {
    id: "Işık",
    phoneImagePath: isikImage,
    phoneImageAlt: "Isik Kontrol",
    svgPath: "/images/mobile/svg/bulp.svg",
    svgAlt: "Isik Kontrol",
  },
  {
    id: "Sensörler",
    phoneImagePath: sensorlerImage,
    phoneImageAlt: "Sensorler Kontrol",
    svgPath: "/images/mobile/svg/sensor.svg",
    svgAlt: "Sensorler Kontrol",
  },
  {
    id: "Kapı Kilidi",
    phoneImagePath: kapiKilidiImage,
    phoneImageAlt: "Termometre - Isi Kontrol",
    svgPath: "/images/mobile/svg/thermometer.svg",
    svgAlt: "Termometre - Isi Kontrol",
  },
  {
    id: "Müzik",
    phoneImagePath: muzikImage,
    phoneImageAlt: "Guvenlik Kontrolu",
    svgPath: "/images/mobile/svg/shield.svg",
    svgAlt: "Guvenlik Kontrolu",
  },
  {
    id: "Prizler",
    phoneImagePath: prizlerImage,
    phoneImageAlt: "Termometre - Isi Kontrol",
    svgPath: "/images/mobile/svg/plug.svg",
    svgAlt: "Prizler Kontrol",
  },
  {
    id: "Perdeler",
    phoneImagePath: perdelerImage,
    phoneImageAlt: "Perdeler Kontrol",
    svgPath: "/images/mobile/svg/blind.svg",
    svgAlt: "Perdeler Kontrol",
  },
];

const MobileApplicationSection = () => {
  const [mobileImage, setMobileImage] = useState(termostatImage);
  const [chosenTab, setChosenTab] = useState("Termostat");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    // Function to check screen size and update state
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [springs, api] = useSpring(() => ({
    from: { x: 0, opacity: 1 }, // Adding opacity property for fade-in effect
  }));

  const handleClick = () => {
    api.start({
      from: { x: -25, opacity: 0 }, // Make sure to include opacity in the "from" object
      to: { x: 0, opacity: 1 }, // Adding opacity property for fade-out effect
    });
  };

  const PhoneView = ({ contextPath, contextAlt }) => {
    return (
      <animated.div
      style={{
        transform: springs.x.interpolate((x) => `translateX(${x}px)`),
        opacity: springs.opacity, // Use opacity from the animated values
      }}
        className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] min-h-[800px] w-[400px] text-center lg:m-0"
        data-wow-delay=".15s"
      >
        <Image
          src={contextPath}
          alt={contextAlt}
          fill
          className="relative drop-shadow-three"
        />
      </animated.div>
    );
  };

  const CarouselMobileApp = () => {
    return (
      <Carousel className="p-6" autoPlay>
        {mobileAppData.map((e) => (
          <div key={e.id}>
            <Image
              src={e.phoneImagePath}
              height={280}
              width={140}
              alt={e.phoneImageAlt}
              priority={true}
            />
            <p className="legend">{e.id}</p>
          </div>
        ))}
      </Carousel>
    );
  };
  const LargeScreen = () => (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="flex-cols flex w-full items-center px-4 md:w-full xl:w-1/2 ">
            <div className="md:flex">
              <ul className="flex-column space-y mb-4 space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:mb-0 md:me-4">
                {mobileAppData.map((e) => {
                  return (
                    <li key={e.id}>
                      <button
                        type="button"
                        className={
                          "active inline-flex w-full items-center justify-start rounded-md px-4 py-3  " +
                          (e.id === chosenTab
                            ? "text-primary hover:text-primary"
                            : "text-gray-500 hover:text-primary")
                        }
                        aria-current="page"
                        onClick={() => {
                          setMobileImage(e.phoneImagePath);
                          setChosenTab(e.id);
                          handleClick();
                          console.log(chosenTab);
                        }}
                      >
                        <div
                          // style={{
                          //   display: "flex",
                          //   flexDirection: "row",
                          //   alignItems: "center",
                          // }}
                          className="flex flex-row align-middle"
                        >
                          <Image
                            src={e.svgPath}
                            alt={e.svgAlt}
                            width={24}
                            height={24}
                            autoCorrect="true"
                            className="fill-[#00AEFF]"
                            priority={true}

                            // style={{ fill: "#00AEEF" }}
                          />
                          <span className="px-4 text-2xl">{e.id}</span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pl-10">
              <PhoneView
                contextPath={mobileImage}
                contextAlt={"Kontrol Paneli - Mobil Uygulama"}
              />
            </div>
          </div>
          <div className="w-full pl-4 md:w-full xl:w-1/2">
            <div className="wow fadeInUp max-w-full" data-wow-delay=".2s">
              <div className="mb-9 ml-10 sm:mt-4 md:mt-6">
                <h3 className="text-6xl mb-4 font-bold text-black dark:text-white sm:text-6xl lg:text-6xl xl:text-6xl">
                  Tüm Cihazlarınız İçin Kolay Kullanım.
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Markası ne olursa olsun tüm akıllı cihazlarınız için harika
                  bir arayüz! <br/> Akıllı evinizi avucunuza sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const SmallScreen = () => (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <CarouselMobileApp />
          <div className="w-full pl-4 md:w-full">
            <div className="wow fadeInUp max-w-5/6" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="text-6xl mb-4 font-bold text-black dark:text-white sm:text-6xl lg:text-6xl xl:text-6xl">
                  Tüm Cihazlarınız İçin Kolay Kullanım.
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Markası ne olursa olsun tüm akıllı cihazlarınız için harika
                  bir arayüz! Akıllı evinizi avucnuza sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <div id="solutions">
      {isSmallScreen ? <SmallScreen /> : <LargeScreen />}
    </div>
  );
};

export default MobileApplicationSection;
