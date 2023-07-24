import React, { useEffect } from "react";
import Image1 from "../../assets/jenisolahraga/sepakbola.svg";
import Image2 from "../../assets/jenisolahraga/bulutangkis.svg";
import Image3 from "../../assets/jenisolahraga/silat.svg";
import Image4 from "../../assets/jenisolahraga/voli.svg";
import Image5 from "../../assets/jenisolahraga/basket.svg";
import Image6 from "../../assets/jenisolahraga/atletik.svg";
import Image7 from "../../assets/jenisolahraga/renang.svg";
import Image8 from "../../assets/jenisolahraga/karate.svg";
import Image9 from "../../assets/jenisolahraga/tinju.svg";
import Image10 from "../../assets/jenisolahraga/wushu.svg";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const jenisOlahraga = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const olahraga = [
    {
      id: 1,
      title: "Sepak Bola",
      desc: "Sepak bola adalah sebuah permainan dan olahhraga beregu di lapangan, menggunakan bola sepak dari dua kelompok berlawanan yang masing-masing terdiri atas sebelas pemain, berlangsung 2 x 45 menit, kemenangan ditentukan oleh selisih gol yang masuk ke gawang lawan. (KBBI)",
      image: Image1,
    },
    {
      id: 2,
      title: "Bulu Tangkis",
      desc: "Bulu Tangkis adalah permainan dengan memakai raket dan ‘kok’ (bola dalam permainan bulu tangkis) yang dipukul melampaui jaring yang direntangkan di tengah lapangan. (KBBI)",
      image: Image2,
    },
    {
      id: 3,
      title: "Pencak Silat",
      desc: "Pencak Silat adalah seni bela diri khas indonesia dengan ketangkasan membela diri dan menyerang untuk pertandingan atau perkelahian. (KBBI)",
      image: Image3,
    },
    {
      id: 4,
      title: "Voli",
      desc: "Voli adalah permainan atau olahraga yang dimainkan oleh dua tim yang dimana pemain bola voli harus melambungkan bola sebelum menyentuh tanah. (KBBI)",
      image: Image4,
    },
    {
      id: 5,
      title: "Basket",
      desc: "Permainan bola yang dilakukan oleh dua regu, masing-masing terdiri atas lima orang, yang berusaha mengumpulkan angka dengan memasukkan bola ke dalam basket. (KBBI)",
      image: Image5,
    },
    {
      id: 6,
      title: "Atletik",
      desc: "Cabang olahraga (terutama yang dilakukan di luar dan memerlukan kekuatan, ketangkasan, dan kecepatan), terdiri atas nomor-nomor lari, jalan, lompat, dan lempar. (KBBI)",
      image: Image6,
    },
    {
      id: 7,
      title: "Renang",
      desc: "Renang adalah olahraga balap individu atau tim yang memerlukan penggunaan seluruh tubuh untuk bergerak di dalam air. Olahraga ini dilakukan di kolam renang atau di perairan terbuka (misalnya, di laut atau danau). (Wikipedia)",
      image: Image7,
    },
    {
      id: 8,
      title: "Karate",
      desc: "Cabang olahraga bela diri dengan menggunakan tangan kosong dan kaki untuk melumpuhkan lawan. (KBBI)",
      image: Image8,
    },
    {
      id: 9,
      title: "Tinju",
      desc: "Tinju adalah olahraga kontak fisik yang melibatkan dua orang petinju yang bertarung satu sama lain menggunakan tangan terbungkus sarung tinju.",
      image: Image9,
    },
    {
      id: 10,
      title: "Wushu",
      desc: "Wushu adalah seni bela diri tradisional dari Tiongkok yang memiliki asal-usul yang sangat kuno. ",
      image: Image10,
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div
          className="text-left"
          data-AOS="fade-right"
          data-aos-duration="1200"
        >
          <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
            Jenis Olahraga
          </h1>
          <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
            Jenis Olahraga di Indonesia
          </h3>
        </div>
        <Swiper
          data-AOS="fade-up"
          data-aos-duration="1200"
          loop={true}
          pagination={{ dynamicBullets: true }}
          style={{ "--swiper-pagination-color": "#FF0000" }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {olahraga.map((items, index) =>
            items.id % 2 == 1 ? (
              <SwiperSlide key={index.id}>
                <div className="flex flex-col md:flex-row pt-6 md:gap-8 lg:gap-12 md:items-center">
                  <div className="md:w-[50%] lg:w-[55%]">
                    <h1 className="font-bold text-xl text-textColor">
                      {items.title}
                    </h1>
                    <p className="text-sm pt-2 text-[#999aa4] leading-6 lg:leading-8 max-w-none lg:max-w-xl">
                      {items.desc}
                    </p>
                  </div>
                  <div className="md:pt-0 pt-6 md:w-[45%] lg:w-[40%]">
                    <img src={items.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={index.id}>
                <div className="flex flex-col md:flex-row pt-6 md:gap-8 lg:gap-20 md:items-center">
                  <div className="justify-end md:w-[50%] lg:w-[55%] order-1 md:order-2">
                    <h1 className="font-bold text-xl text-textColor">
                      {items.title}
                    </h1>
                    <p className="text-sm pt-2 text-[#999aa4] leading-6 lg:leading-8 max-w-none lg:max-w-xl">
                      {items.desc}
                    </p>
                  </div>
                  <div className="md:pt-0 pt-6 md:w-[45%] lg:w-[40%] order-2 md:order-1">
                    <img src={items.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default jenisOlahraga;
