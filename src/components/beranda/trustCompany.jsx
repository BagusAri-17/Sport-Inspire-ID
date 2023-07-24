import React, { useEffect } from "react";
import unud from "../../assets/company/unud.svg";
import bemFmipa from "../../assets/company/bemmipa.svg";
import himakom from "../../assets/company/himakom.svg";
import dtalks from "../../assets/company/dtalks.svg";
import decubeit from "../../assets/company/decubeit.svg";
import google from "../../assets/company/google.svg";
import lenovo from "../../assets/company/lenovo.svg";
import samsung from "../../assets/company/samsung.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const trustCompany = () => {
  const company = [
    {
      id: 1,
      image: unud,
    },
    {
      id: 2,
      image: bemFmipa,
    },
    {
      id: 3,
      image: himakom,
    },
    {
      id: 4,
      image: dtalks,
    },
    {
      id: 5,
      image: decubeit,
    },
  ];

  const companyy = [
    {
      id: 1,
      image: google,
    },
    {
      id: 2,
      image: lenovo,
    },
    {
      id: 3,
      image: samsung,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20">
      <div className="container space-y-10">
        <div
          className="text-center"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
            Sponsor Kami
          </h1>
          <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
            Mereka Percaya Pada Kami
          </h3>
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {company.map((items) => (
            <a
              key={items.id}
              class="md:max-w-[120px] max-w-[80px] rounded-xl grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
            >
              <img src={items.image} alt="" />
            </a>
          ))}
        </div>
        <div
          class="flex flex-wrap items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {companyy.map((items) => (
            <a
              key={items.id}
              class="md:max-w-[200px] max-w-[120px] rounded-xl grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
            >
              <img src={items.image} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default trustCompany;
