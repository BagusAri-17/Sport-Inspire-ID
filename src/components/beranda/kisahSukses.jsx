import React, { useEffect } from "react";
import Image1 from "../../assets/kisahsukses/atlet.svg";
import Image2 from "../../assets/kisahsukses/atlet2.svg";
import Image3 from "../../assets/kisahsukses/atlet3.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const kisahSukses = () => {
  const kisah = [
    {
      id: 1,
      name: "Wewey Winata",
      atlet: "Atlet Pencak Silat Indonesia",
      desc: "Wewey Wita adalah atlet pencak silat yang lahir pada 5 Februari 1993. Umur Wewey Wita adalah 29 tahun dan agamanya adalah Islam.",
      duration: "1500",
      image: Image1,
    },
    {
      id: 2,
      name: "Jafro Megawanto",
      atlet: "Atlet Paralayang Indonesia",
      desc: "Jafro Megawanto menjadi satu-satunya atlet Indonesia pemilik dua medali emas Asian Games 2018 sejauh ini. Dulu, dia berprofesi sebagai paraboy alias tukang melipat parasut.",
      duration: "1500",
      image: Image2,
    },
    {
      id: 3,
      name: "Lena dan Leni",
      atlet: "Atlet Pencak Silat Indonesia",
      desc: "Lena dan Leni, dua gadis kembar yang diunggulkan dalam cabang olahraga Sepak Takraw ini lahir dari keluarga sederhana.",
      duration: "1500",
      image: Image3,
    },
    {
      id: 4,
      name: "Lena dan Leni",
      atlet: "Atlet Pencak Silat Indonesia",
      desc: "Lena dan Leni, dua gadis kembar yang diunggulkan dalam cabang olahraga Sepak Takraw ini lahir dari keluarga sederhana.",
      duration: "1500",
      image: Image3,
    },
    {
      id: 5,
      name: "Jafro Megawanto",
      atlet: "Atlet Paralayang Indonesia",
      desc: "Jafro Megawanto menjadi satu-satunya atlet Indonesia pemilik dua medali emas Asian Games 2018 sejauh ini. Dulu, dia berprofesi sebagai paraboy alias tukang melipat parasut.",
      duration: "1500",
      image: Image2,
    },
    {
      id: 6,
      name: "Wewey Winata",
      atlet: "Atlet Pencak Silat Indonesia",
      desc: "Wewey Wita adalah atlet pencak silat yang lahir pada 5 Februari 1993. Umur Wewey Wita adalah 29 tahun dan agamanya adalah Islam.",
      duration: "1500",
      image: Image1,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <div
          className="text-left"
          data-AOS="fade-right"
          data-aos-duration="1200"
        >
          <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
            Kisah Sukses Mereka
          </h1>
          <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
            Kisah Sukses Para Atlet
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start pt-6 gap-4">
          {kisah.map((items, index) => (
            <div
              key={index.id}
              data-aos="zoom-in"
              data-aos-duration={items.duration}
              className="bg-secondary p-4 border-2 border-[#eeeeee] hover:border-primary duration-200 transition rounded-xl hover:bg-secondary/20 shadow-cards"
            >
              <img className="mx-auto rounded-xl" src={items.image} alt="" />
              <div className="pt-4">
                <h1 className="font-bold text-base md:text-xl text-textColor">
                  {items.name}
                </h1>
                <p className="text-sm md:text-base pt-2 text-textColor">
                  {items.atlet}
                </p>
                <p className="text-xs md:text-sm pt-2 text-[#999aa4] blog-desc">
                  {items.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default kisahSukses;
