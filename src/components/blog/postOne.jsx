import React from "react";
import Thumbnail from "../../assets/blog/Post1/thumbnail.png";
import Content1 from "../../assets/blog/Post1/content-1.png";
import { BiSolidShareAlt } from "react-icons/bi";

const postOne = () => {
  return (
    <section className="pt-40 py-20">
      <div className="container">
        <div className="flex flex-col lg:items-center lg:flex-row gap-4 lg:gap-12">
          <img
            className="rounded-xl lg:w-1/2"
            src={Thumbnail}
            alt="thumbnail"
          />
          <div className="lg:w-1/2">
            <h3 className="text-textColor font-bold text-xl md:text-3xl leading-8 md:leading-10">
              Hasil Voli Putra SEA V League 2023: Indonesia Bungkam Vietnam 3-0
            </h3>
            <div className=" flex items-center space-x-4 pt-2">
              <p className="text-sm text-textColor2/80">22 Juli 2023 20:01</p>
              <span>&bull;</span>
              <p className="text-sm text-textColor2/80">Admin</p>
              <span>&bull;</span>
              <p className="text-sm text-primary">Voli</p>
            </div>
            <div className="flex flex-row pt-4">
              <a className="hover:cursor-pointer items-center flex gap-2 hover:opacity-60 duration-200 transition border border-primary bg-primary text-secondary px-4 md:px-8 py-2 md:py-4 rounded-full text-center font-semibold text-xs md:text-sm">
                <BiSolidShareAlt size={20} />
                Bagikan
              </a>
            </div>
          </div>
        </div>
        <div className="content pt-6 space-y-4">
          <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
            Timnas voli putra Indonesia berhadapan dengan Vietnam pada laga
            kedua SEA V League 2023 di Padepokan Voli Jenderal Polisi Kunarto,
            Sabtu (22/7/2023) malam WIB. Indonesia menang tiga set langsung atas
            Vietnam.
          </p>
          <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
            Memakai jersey berwarna biru, Indonesia tampil sangat bagus.
            Indonesia menang 25-20 pada set pertama. Pada set kedua, Indonesia
            menang 25-19.
          </p>
          <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
            Set ketiga berjalan cukup sengit. Vietnam tak ingin kalah begitu
            saja. Namun, Indonesia terlalu tangguh dan menang 25-20. Hasil ini
            membuat Indonesia bersaing ketat dengan Thailand di klasemen, dengan
            sama-sama mendapat enam poin. Indonesia dan Thailand akan berhadapan
            pada laga ketiga, Minggu (23/7/2023) besok.
          </p>

          <div className="pt-4 space-y-4">
            <h1 className="text-textColor font-bold text-base md:text-xl lg:text-2xl ">
              Set Pertama
            </h1>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Vietnam mendapat angka pertama setelah spike dari Farhan Halim
              mampu diblok. Vietnam terus menambah poin hingga unggul 4-1.
              Indonesia kemudian bangkit lewat blok Hendra Kurniawan dan
              mengubah skor menjadi 5-5.
            </p>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Setelah itu, Indonesia unggul dan mampu mempertahankan situasi
              hingga kedudukan menjadi 14-8. Pada situasi ini, ada beberapa
              kesalahan yang dibuat pemain Vietnam yang membuat Indonesia
              mendapat poin.
            </p>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Fahri Septian melepas spike keras yang tak bisa dibendung Vietnam.
              Indonesia unggul 18-12. Malizi kemudian membuat skor menjadi
              22-16. Indonesia berada di atas angin. Pada akhirnya, Indonesia
              menang 25-20 pada set pertama.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h1 className="text-textColor font-bold text-base md:text-xl lg:text-2xl">
              Set Kedua
            </h1>
            <div>
              <img className="w-full" src={Content1} alt="" />
              <p className="text-center text-xs text-textColor leading-6 md:leading-8">
                Aksi timnas voli putra Indonesia pada laga SEA V League 2023
                melawan Vietnam pada Sabtu 22 Juli 2023 (c) Abdul Aziz
              </p>
            </div>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Spike Farhan Halim yang keluar membuat Vietnam mendapat poin
              pertama pada set kedua. Namun, Indonesia mampu berbalik unggul 7-6
              lewat poin yang sumbang Fahri Septian.
            </p>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Spike menyilang Hendra Kurniawan membuat Indonesia unggul 11-9.
              Dimas Saputra membuat jarak makin lebar menjadi 12-9. Melihat
              Indonesia menemukan ritme yang bagus, Vietnam lalu mengambil
              time-out untuk meracik taktik baru.
            </p>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Jump serve Farhan Halim membuat Indonesia menjauh 18-11. Indonesia
              terlihat tidak terbendung pada fase ini. Blok Hendra membuat
              Indonesia mendapat poin ke-22. Indonesia akhirnya menutup set
              kedua dengan kemenangan 25-19.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h1 className="text-textColor font-bold text-base md:text-xl lg:text-2xl ">
              Set Ketiga
            </h1>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Berbeda dengan set pertama dan kedua, pada set ketiga Indonesia
              mendapat poin pertama dari aksi Fahri Septian. Pemain 24 tahun
              kembali menyumbang poin lewat spike keras dan membuat Indonesia
              unggul 5-3 dari Vietnam.
            </p>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Vietnam sempat membuat skor menjadi 10-10. Serve Boy Arnes
              menghasilkan dua poin dan Indonesia unggul 13-10.
            </p>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Indonesia unggul 19-15 dan situasi menjadi lebih mudah. Boy Arnes
              membuat blok kuat yang menghasilkan poin. Indonesia menjauh,
              20-15. Indonesia akhirnya menutup set ketiga dengan kemenangan
              25-20 dari kesalahan pemain Vietnam.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h1 className="text-textColor font-bold text-base md:text-xl lg:text-2xl ">
              Rekap Hasil Indonesia vs Vietnam
            </h1>
            <p className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              Berikut adalah rangkuman hasil laga tim voli Putra Indonesia dan
              Vietnam pada Sabtu (2/7/2023) malam WIB:
            </p>
            <ul className="text-xs md:text-sm text-[#999aa4] leading-6 md:leading-8">
              <li>Set pertama: 25-20</li>
              <li>Set kedua: 25-19</li>
              <li>Set ketiga: 25-20</li>
            </ul>
          </div>

          <div className="pt-8">
            <a
              className="italic text-xs md:text-sm text-textColor leading-6 md:leading-8"
              href="https://www.bola.net/voli/hasil-voli-putra-sea-v-league-2023-indonesia-bungkam-vietnam-3-0-9210b9.html"
              target="_blank"
            >
              Silakan Klik Disini Untuk Mengakses Sumber Berita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default postOne;
