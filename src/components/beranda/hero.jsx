import React, { useEffect } from "react";
import heroImage from "../../assets/hero.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="h-screen items-center justify-center flex">
      <div className="container">
        <div className="flex flex-wrap items-center md:gap-8 lg:gap-0">
          <div
            className="lg:max-w-[50%] max-w-full"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <div className="mt-6">
              <p className="text-primary font-semibold text-base text-center md:text-lg lg:text-left">
                SPORT INSPIRE ID 2023
              </p>
            </div>
            <h1 className="text-center lg:text-left md:leading-[64px] leading-0 mt-4 md:mt-6 text-4xl md:text-5xl font-bold text-textColor leading-[48px] lg:max-w-[80%]">
              Inspirasi Bangsa Melalui{" "}
              <span className="text-primary">Olahraga</span>
            </h1>
            <p className="lg:text-left lg:mx-0 text-center mt-6 md:mt-10 md:w-[80%] md:mx-auto text-base md:text-lg font-normal text-[#999aa4] leading-[24px] md:leading-[28px] lg:leading-[32px]">
              Jangan lewatkan kesempatan untuk mengeksplorasi berbagai informasi
              tentang olahraga.
            </p>
            <div className="flex flex-col gap-5 mt-8 md:mt-10 md:flex-row md:justify-center lg:justify-start">
              <a
                href="/blog"
                className="hover:cursor-pointer hover:opacity-60 duration-200 transition border border-primary bg-primary text-secondary px-6 md:px-8 py-4 rounded-full text-center font-semibold text-sm"
              >
                Eksplorasi
              </a>
              <a
                href="#kontak"
                className="hover:cursor-pointer hover:opacity-60 duration-200 transition border border-primary text-primary bg-secondary px-6 md:px-8 py-4 rounded-full text-center font-semibold text-sm"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <div
            className="md:max-w-[60%] lg:max-w-[50%] lg:block hidden mx-auto"
            data-AOS="fade-left"
            data-aos-duration="1200"
          >
            <img className="w-full" src={heroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
