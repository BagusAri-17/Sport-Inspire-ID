import React, { useEffect } from "react";
import Image1 from "../../assets/tentangkami.png";
import AOS from "aos";
import "aos/dist/aos.css";

const aboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="h-screen items-center justify-center flex">
      <div className="container">
        <div className="flex flex-col lg:flex-row pt-8 md:gap-4 lg:gap-8">
          <div
            className="text-left"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
              Siapa Kami?
            </h1>
            <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
              Sedikit Cerita Tentang Kami
            </h3>
            <img
              className="w-[80%] pt-4 hidden md:block md:mx-auto lg:mx-0"
              src={Image1}
              alt=""
            />
          </div>
          <div
            className="w-full lg:w-[60%] lg:pl-16 space-y-4 pt-6 text-[#999aa4]"
            data-AOS="fade-left"
            data-aos-duration="1200"
          >
            <p className=" text-base leading-8">
              Sport Inspire ID percaya pada kekuatan olahraga untuk
              menginspirasi dan memberdayakan individu dan komunitas. Misi kami
              adalah untuk mempromosikan dan memberikan semangat sportivitas,
              dedikasi, dan keunggulan dalam dunia olahraga di Indonesia.
            </p>
            <p className=" text-base leading-8">
              Sport Inspire ID adalah tim yang berdedikasi, terdiri dari para
              penggemar olahraga, penulis, dan kreator konten yang bersemangat
              untuk berbagi kisah inspiratif dan prestasi atlet serta acara
              olahraga di seluruh negeri. Tujuan kami adalah untuk menampilkan
              keberagaman dan budaya olahraga yang luar biasa di Indonesia,
              menginspirasi semua usia untuk merangkul gaya hidup aktif dan
              sehat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
