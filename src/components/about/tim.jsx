import React, { useEffect } from "react";
import tim1 from "../../assets/tim/tim1.png";
import tim2 from "../../assets/tim/tim2.png";
import tim3 from "../../assets/tim/tim3.png";
import tim4 from "../../assets/tim/tim4.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const tim = () => {
  const timWeb = [
    {
      id: 1,
      name: "Ismail Bin Mail",
      role: "Founder",
      duration: "1000",
      image: tim1,
    },
    {
      id: 2,
      name: "Violex",
      role: "Front-End",
      duration: "1500",
      image: tim2,
    },
    {
      id: 3,
      name: "Arisaman",
      role: "Designer",
      duration: "2000",
      image: tim3,
    },
    {
      id: 4,
      name: "Fernando",
      role: "Project Manager",
      duration: "2500",
      image: tim4,
    },
    {
      id: 5,
      name: "Ismail Bin Mail",
      role: "Founder",
      duration: "1000",
      image: tim1,
    },
    {
      id: 6,
      name: "Violex",
      role: "Front-End",
      duration: "1500",
      image: tim2,
    },
    {
      id: 7,
      name: "Arisaman",
      role: "Designer",
      duration: "2000",
      image: tim3,
    },
    {
      id: 8,
      name: "Fernando",
      role: "Project Manager",
      duration: "2500",
      image: tim4,
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
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
            Tim Kami
          </h1>
          <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
            Yuk Kenalan Dengan Tim SportInspireID
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6 gap-4 md:gap-6 lg:gap-8 slide-down">
          {timWeb.map((items, index) => (
            <div
              key={index.id}
              data-aos="zoom-in"
              data-aos-duration={items.duration}
              className="pb-4 max-w-sm flex flex-col items-center text-center"
            >
              <img
                className="mx-auto w-2/3 hover:scale-110 transition duration-200"
                src={items.image}
                alt="image-tim"
              />
              <div className="pt-4">
                <h1 className="font-bold text-xl text-textColor">
                  {items.name}
                </h1>
                <p className="text-sm font-semibold text-textColor/60">
                  {items.role}
                </p>
              </div>
              <div className="flex items-center pt-4 gap-2">
                <a className="text-textColor" href="https://www.instagram.com/">
                  <AiFillInstagram size={24} />
                </a>
                <a className="text-textColor" href="https://www.linkedin.com/">
                  <AiFillLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default tim;
