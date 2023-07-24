import React, { useEffect } from "react";
import { BiSolidPhone, BiSolidMap } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="kontak" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row pt-8 md:gap-16 lg:gap-32 items-start lg:items-center">
          <div
            className="md:w-[50%] text-left mb-4 md:mb-0 order-1 md:order-2"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
              Kontak Sport Inspire ID
            </h1>
            <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
              Silakan Hubungi Kami
            </h3>
            <p className="max-w-lg pt-4 leading-6 text-sm text-[#999aa4]">
              <span className="text-primary">Sobat Sport Inspire ID</span>, Jika
              Kalian Memiliki Masalah, Silakan Hubungi Kami Karena Kami Siap
              Mendengar Masukan dan Saran Kalian
            </p>
            <div className="pt-6 space-y-4 text-sm">
              <div className="flex items-center gap-4 text-textColor">
                <BiSolidPhone className="" size={20} />
                (021) 50858650
              </div>
              <div className="flex items-center gap-4 text-textColor">
                <AiFillMail className="" size={20} />
                sportinsid.official@gmail.com
              </div>
              <div className="flex items-center gap-4 text-textColor">
                <BiSolidMap className="" size={20} />
                Jalan Kampus Raya Unud, Jimbaran, Bali
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-[45%] lg:w-[40%] shadow-md bg-secondary p-8 mt-4 md:mt-0 rounded-xl order-2 md:order-1"
            data-AOS="fade-left"
            data-aos-duration="1200"
          >
            <form className="flex flex-col space-y-4">
              {/* Nama */}
              <div>
                <label className="text-sm font-semibold text-textColor" for="">
                  Nama
                </label>
                <input
                  className="text-sm mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#999aa4]"
                  type="text"
                  placeholder="Nama mu"
                />
              </div>
              {/* Alamat */}
              <div>
                <label className="text-sm font-semibold text-textColor" for="">
                  Alamat
                </label>
                <input
                  className="text-sm mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#999aa4]"
                  type="text"
                  placeholder="Alamat mu"
                />
              </div>
              {/* Pesan */}
              <div>
                <label className="text-sm font-semibold text-textColor" for="">
                  Pesan
                </label>
                <textarea
                  className="text-sm mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#999aa4]"
                  type="text"
                  rows={4}
                  placeholder="Pesan mu"
                />
              </div>
              <button
                type=""
                className="hover:opacity-60 duration-200 transition inline-block self-end bg-primary text-secondary font-bold rounded-lg px-6 py-2 text-sm"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
