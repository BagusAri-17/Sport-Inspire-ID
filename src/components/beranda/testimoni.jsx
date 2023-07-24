import React, { useEffect } from "react";
import test1 from "../../assets/testimoni/test1.svg";
import test2 from "../../assets/testimoni/test2.svg";
import test3 from "../../assets/testimoni/test3.svg";
import test4 from "../../assets/testimoni/test4.svg";
import test5 from "../../assets/testimoni/test5.svg";
import test6 from "../../assets/testimoni/test6.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const testimoni = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20 bg-textColor">
      {/* Tab & Dekstop Version */}
      <div className="container hidden md:block">
        <div className="flex flex-col lg:flex-row pt-8 md:gap-4 lg:gap-8 lg:items-center">
          <div
            className="text-left lg:w-[30%] mb-4"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
              Testimoni
            </h1>
            <h3 className="text-secondary font-bold text-[24px] md:text-[32px] md:leading-10">
              Review Mereka Terhadap Kami
            </h3>
            <p className="pt-4 leading-6 text-sm text-[#999aa4]">
              {" "}
              <span className="text-primary">Sport Inspire ID</span> Menyediakan
              Komunitas Olahraga Untuk Membantu Dalam Meningkatkan Minat dan
              Bakat Kalian di Bidang Olahraga
            </p>
            <div className="flex pt-6 flex-row">
              <a className="hover:cursor-pointer hover:opacity-60 duration-200 transition border border-primary bg-primary text-secondary px-6 md:px-8 py-4 rounded-full text-center font-semibold text-sm">
                Join Grup WhatsApp
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[60%] lg:ml-16 mt-6 flex flex-wrap gap-4 md:gap-6 lg:gap-6">
            <div className="bg-secondary slide-ver-1 p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Sumber Informasi
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Sumber informasi olahraga terpercaya dan lengkap!
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test1} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Maya</p>
                  <p className="text-xs font-medium text-[#999AA4]">
                    Mahasiswa
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary slide-ver-2 p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Video Memotivasi
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Konten video yang menginspirasi dan memotivasi.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test2} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Santi</p>
                  <p className="text-xs text-[#999AA4] font-medium">
                    Masyarakat
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary slide-ver-1 p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Tampilan Menarik
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Tampilan website yang menarik dan mudah dinavigasi.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test3} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Wuhan</p>
                  <p className="text-xs text-[#999AA4] font-normal">
                    Trainer Gym
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary slide-ver-2 p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Meningkatkan Pengetahuan
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Membantu meningkatkan pengetahuan olahraga saya.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test4} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Bhismo</p>
                  <p className="text-xs text-[#999AA4] font-normal">
                    Atlet Basket
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary slide-ver-1 p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Website Pencinta Olahraga
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Website wajib bagi para pecinta olahraga!
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test5} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Miya</p>
                  <p className="text-xs text-[#999AA4] font-normal">
                    Atlet Voli
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary slide-ver-2 p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Artikel Up-to-Date
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Artikel-artikelnya selalu menarik dan up-to-date.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test6} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Lessy</p>
                  <p className="text-xs text-[#999AA4] font-normal">
                    Atlet Sepak Bola
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="container md:hidden block">
        <div className="flex flex-col lg:flex-row pt-8 md:gap-4 lg:gap-8 lg:items-center">
          <div
            className="text-left lg:w-[30%] mb-4"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
              Testimoni
            </h1>
            <h3 className="text-secondary font-bold text-[24px] md:text-[32px] md:leading-10">
              Review Mereka Terhadap Kami
            </h3>
            <p className="pt-4 leading-6 text-sm text-[#999aa4]">
              {" "}
              <span className="text-primary">Sport Inspire ID</span> Menyediakan
              Komunitas Olahraga Untuk Membantu Dalam Meningkatkan Minat dan
              Bakat Kalian di Bidang Olahraga
            </p>
            <div className="flex pt-6 flex-row">
              <a className="hover:cursor-pointer hover:opacity-60 duration-200 transition border border-primary bg-primary text-secondary px-6 md:px-8 py-4 rounded-full text-center font-semibold text-sm">
                Join Grup WhatsApp
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[60%] lg:ml-16 mt-6 flex flex-wrap gap-4 md:gap-6 lg:gap-6">
            <div className="bg-secondary p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Sumber Informasi
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Sumber informasi olahraga terpercaya dan lengkap!
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test1} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Maya</p>
                  <p className="text-xs font-medium text-[#999AA4]">
                    Mahasiswa
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Video Memotivasi
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Konten video yang menginspirasi dan memotivasi.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test2} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Santi</p>
                  <p className="text-xs text-[#999AA4] font-medium">
                    Masyarakat
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-5 rounded-lg md:rounded-2xl md:w-[46%] lg:w-[48%]">
              <div>
                <h1 className="text-textColor text-lg font-bold">
                  Tampilan Menarik
                </h1>
                <p className="pt-2 pb-4 text-sm text-[#999AA4]">
                  Tampilan website yang menarik dan mudah dinavigasi.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-9 h-9 rounded-full" src={test3} alt="" />
                <div className="">
                  <p className="text-xs font-bold text-textColor">Wuhan</p>
                  <p className="text-xs text-[#999AA4] font-normal">
                    Trainer Gym
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimoni;
