import React from "react";
import post1 from "../../assets/blog/thumbnail1.svg";
import post2 from "../../assets/blog/thumbnail2.svg";
import post3 from "../../assets/blog/thumbnail3.svg";
import post4 from "../../assets/blog/thumbnail4.svg";
import post5 from "../../assets/blog/thumbnail5.svg";
import post6 from "../../assets/blog/thumbnail6.svg";
import { useState, useEffect, useMemo } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const posts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const allPosts = [
    {
      id: 1,
      author: "Admin",
      date: "22 Juli 2023 20:01",
      title:
        "Hasil Voli Putra SEA V League 2023: Indonesia Bungkam Vietnam 3-0",
      desc: "Timnas voli putra Indonesia berhadapan dengan Vietnam pada laga kedua SEA V League 2023 di Padepokan Voli Jenderal Polisi Kunarto, Sabtu (22/7/2023) malam WIB. Indonesia menang tiga set langsung atas Vietnam.",
      category: "Voli",
      link: "/postone",
      duration: "1000",
      image: post1,
    },
    {
      id: 2,
      author: "Admin",
      date: "20 Juli 2023 19:17",
      title: "Uji Nyali, Timnas Indonesia U-17 Tantang Korea Selatan",
      desc: "Timnas Indonesia U-17 terus mematangkan persiapan mereka jelang berkiprah di Piala Dunia U-17. Kali ini, tim yang dibesut Bima Sakti tersebut bakal menantang Tim Korea Selatan U-17 dalam sebuah laga uji coba.",
      category: "Sepak Bola",
      link: "",
      duration: "1250",
      image: post2,
    },
    {
      id: 3,
      author: "Admin",
      date: "14 Mei 2023 07:54",
      title: "Tinju sumbang dua medali perak untuk Indonesia di SEA Games 2023",
      desc: "Dua petinju Indonesia Asri Udin dan Maikhel Robberd Muskita menyumbang dua mendali perak untuk kontingen Indonesia di SEA Games 2023 pada laga final di Choy Changvar International Center, Phnom Penh, Kamboja, Sabtu (13/5)",
      category: "Tinju",
      link: "",
      duration: "1500",
      image: post3,
    },
    {
      id: 4,
      author: "Admin",
      date: "13 Mei 2023 07:54",
      title:
        "SEA Games 2023: Sejarah Tercipta, Timnas Basket Putri Indonesia Raih Emas",
      desc: "Timnas bola basket putri Indonesia mencetak sejarah seusai dipastikan membawa pulang medali emas SEA Games 2023 Kamboja.  Henny Sutjiono dkk melawan Kamboja pada laga kelima cabor bola basket SEA Games 2023 di Morodok Techo Indoor Sports Center, Phnom Penh, Kamboja, Sabtu (13/5/2023).",
      category: "Basket",
      link: "",
      duration: "1750",
      image: post4,
    },
    {
      id: 5,
      author: "Admin",
      date: "12 Mei 2023 13:00",
      title: "SEA Games 2023: Indonesia bawa pulang tiga emas dari renang",
      desc: "Cabang olahraga renang Indonesia memenuhi target membawa pulang tiga emas dari total 39 keping yang diperebutkan pada SEA Games XXXII/2023 Kamboja. Selain emas, skuad Merah Putih juga mengemas satu perak dan tiga perunggu dalam perlombaan yang berlangsung di Morodok Techo National Aquatics Center, Phnom Penh, sejak Sabtu (6/5) hingga Kamis (11/5).",
      category: "Renang",
      link: "",
      duration: "2000",
      image: post5,
    },
    {
      id: 6,
      author: "Admin",
      date: "11 Mei 2023 21:10",
      title: "Pencapaian Pencak Silat Indonesia Jadi Juara Umum SEA Games 2023",
      desc: "Indonesia menjadi juara umum cabang Pencak Silat di SEA Games 2023 Kamboja dengan raihan sembilan medali emas. Pencapaian ini bikin bangga bukan cuma karena nyaris dua kali lipat melampaui target awalnya.",
      category: "Pencak Silat",
      link: "",
      duration: "2250",
      image: post6,
    },
  ];

  const categories = [
    {
      value: "",
      label: "Semua",
    },
    {
      value: "Sepak Bola",
      label: "Sepak Bola",
    },
    {
      value: "Bulu Tangkis",
      label: "Bulu Tangkis",
    },
    {
      value: "Pencak Silat",
      label: "Pencak Silat",
    },
    {
      value: "Voli",
      label: "Voli",
    },
    {
      value: "Basket",
      label: "Basket",
    },
    {
      value: "Atletik",
      label: "Atletik",
    },
    {
      value: "Renang",
      label: "Renang",
    },
    {
      value: "Karate",
      label: "Karate",
    },
    {
      value: "Wushu",
      label: "Wushu",
    },
    {
      value: "Tinju",
      label: "Tinju",
    },
  ];

  const [category, setCategory] = useState("");

  const [search, setSearch] = useState("");

  const articles = useMemo(() => {
    if (category === "") {
      if (search === "") {
        return allPosts;
      } else {
        return allPosts.filter((post) => {
          const searchFields = `${post.title.toLowerCase()}`;
          return searchFields.includes(search.toLowerCase());
        });
      }
    }

    return allPosts.filter((post) => {
      const postCategory = `${post.category.toLowerCase()}`;
      return postCategory.includes(category.toLowerCase());
    });
  }, [category, search]);

  useEffect(() => {
    if (search !== "") {
      setCategory("");
    }
  }, [search]);

  return (
    <article className="py-20" id="blogging">
      <div className="container">
        <div
          className="text-left"
          data-AOS="fade-right"
          data-aos-duration="1200"
        >
          <h1 className="uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2">
            Blog & Artikel
          </h1>
          <h3 className="text-textColor font-bold text-[24px] md:text-[32px] leading-9">
            Yuk Baca Blog & Artikel Dari Kami
          </h3>
        </div>
        <form className="pt-6" data-AOS="fade-down" data-aos-duration="1500">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className=" text-sm mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#999aa4]"
            placeholder="Cari informasi kesukaanmu"
            type="search"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 mb-4 ring-1 text-sm rounded-md outline-none focus:ring-2 ring-gray-300 focus:ring-[#999aa4] block p-2"
          >
            {categories.map((items, i) => {
              return (
                <option value={items.value} key={i}>
                  {items.label}
                </option>
              );
            })}
          </select>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start pt-6 gap-4">
          {articles.map((items, index) => (
            <div
              key={index.id}
              data-AOS="zoom-in"
              data-aos-duration={items.duration}
              className="bg-secondary border-2 border-[#eeeeee] hover:border-primary duration-200 transition rounded-xl hover:bg-secondary/20 shadow-cards"
            >
              {/* <div className='bg-cover bg-center' style="background-image: url('../../assets/blog/Post1/thumbnail.png')"></div> */}
              <a href={items.link}>
                <img
                  className="mx-auto w-auto rounded-t-xl object-cover "
                  src={items.image}
                  alt=""
                />
              </a>
              <div className="p-4">
                <div className=" flex items-center space-x-2 pt-1">
                  <p className="text-xs text-textColor2/80">{items.date}</p>
                  <span>&bull;</span>
                  <p className="text-xs text-textColor2/80">{items.author}</p>
                </div>
                <div className="flex flex-row py-1">
                  <p className="text-sm text-primary">{items.category}</p>
                </div>
                <div className="pt-2">
                  <a
                    href={items.link}
                    className="font-bold text-base md:text-xl text-textColor"
                  >
                    {items.title}
                  </a>
                  <p className="text-xs md:text-sm pt-2 text-[#999aa4] blog-desc">
                    {items.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default posts;
