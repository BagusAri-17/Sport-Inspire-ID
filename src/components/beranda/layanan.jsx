import React, { useEffect } from "react";
import Image1 from "../../assets/layanan/news.svg";
import Image2 from "../../assets/layanan/motivation.svg";
import Image3 from "../../assets/layanan/education.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const layanan = () => {
  const layananContent = [
    {
      id: 1,
      title: "Informasi Olahraga",
      content:
        "Informasi terkini, berita, dan artikel seputar perkembangan olahraga di Indonesia.",
      duration: "1000",
      image: Image1,
    },
    {
      id: 2,
      title: "Inspirasi & Motivasi",
      content: "Konten inspiratif dan motivasi dalam bidang olahraga.",
      duration: "2000",
      image: Image2,
    },
    {
      id: 3,
      title: "Pendidikan Olahraga",
      content:
        "Memberikan panduan kepada pengguna yang ingin terlbat dalam olahraga.",
      duration: "3000",
      image: Image3,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="container py-20">
      <div className="text-left" data-AOS="fade-right" data-aos-duration="1200">
        <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
          Layanan
        </h1>
        <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
          Layanan Kami Untuk Anda
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start pt-6 gap-4">
        {layananContent.map((items) => (
          <div
            key={items.id}
            data-aos="zoom-in"
            data-aos-duration={items.duration}
            className=" shadow-cards"
          >
            <div className="bg-secondary p-4 md:p-8 rounded-xl">
              <img
                className="w-1/2 mx-auto hover:scale-110 duration-300 transition"
                src={items.image}
                alt=""
              />
              <div className="text-center pt-4">
                <h1 className="font-bold text-base md:text-xl text-textColor">
                  {items.title}
                </h1>
                <p className="text-xs md:text-sm pt-4 text-[#999aa4]">
                  {items.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default layanan;
