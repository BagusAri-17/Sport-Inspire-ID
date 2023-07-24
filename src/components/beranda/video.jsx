import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const video = () => {
  const videoYt = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/CnlCO96wVtQ",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/0UjrardMvuI",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/5p6gW4WKTZE",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/TqU2JPFk7o8",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <div
          className="text-left mb-4"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
            Video Motivasi
          </h1>
          <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
            Temukan Inspirasi & Motivasi Melalui Video
          </h3>
        </div>
        <Swiper
          data-AOS="fade-up"
          data-aos-duration="1200"
          style={{ "--swiper-theme-color": "#FF0000" }}
          navigation={true}
          modules={[Navigation]}
          className="w-full mt-6"
        >
          {videoYt.map((items, index) => (
            <SwiperSlide>
              <iframe
                key={index.id}
                className="w-[320px] h-[180px] md:w-[640px] md:h-[360px] lg:w-[960px] lg:h-[540px] mx-auto"
                src={items.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default video;
