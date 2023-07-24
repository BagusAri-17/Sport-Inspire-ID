import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const sejarahContent = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const timelines = [
    {
      id: 1,
      tanggal: 'Abad ke-7 hingga ke-14',
      judul: ' Olahraga tradisional seperti sepak bola, pencak silat, dan panjat tebing telah ada dalam budaya Indonesia sejak zaman dahulu kala. Masyarakat setempat sering menggelar berbagai acara olahraga sebagai bagian dari tradisi dan ritual.',
    },
    {
      id: 2,
      tanggal: 'Abad ke-16:',
      judul: 'Penjajahan oleh Belanda membawa pengaruh olahraga modern ke Indonesia. Olahraga seperti tenis, sepak bola, dan golf diperkenalkan oleh para penjajah dan mulai diminati oleh penduduk setempat.',
    },
    {
      id: 3,
      tanggal: 'Abad ke-19',
      judul: 'Perkumpulan olahraga pertama di Indonesia, yaitu Bataviasche Sport Club (BSC), didirikan pada tahun 1900 di Batavia (sekarang Jakarta). BSC menjadi cikal bakal perkembangan organisasi-organisasi olahraga di Indonesia.g',
    },
    {
      id: 4,
      tanggal: 'Tahun 1946',
      judul: 'Indonesia meraih kemerdekaannya dari Belanda dan mendirikan Komite Olahraga Nasional Indonesia (KONI) pada tahun 1946 untuk mengkoordinasikan olahraga di negara tersebut.',
    },
    {
      id: 5,
      tanggal: 'Tahun 1951',
      judul: 'Indonesia berpartisipasi dalam Asian Games pertama di New Delhi, India, dan meraih medali perak dalam cabang bulu tangkis.',
    },
    {
      id: 6,
      tanggal: 'Tahun 1962',
      judul: 'Indonesia menjadi tuan rumah Asian Games kedua di Jakarta. Pada ajang ini, Indonesia berhasil meraih prestasi gemilang dengan perolehan 5 medali emas.',
    },
    {
      id: 7,
      tanggal: 'Tahun 1987',
      judul: 'Indonesia menjadi tuan rumah Pekan Olahraga Nasional (PON) pertama di Jakarta, yang menjadi ajang untuk mengembangkan olahraga di seluruh wilayah Indonesia',
    },
    {
      id: 8,
      tanggal: 'Tahun 2000',
      judul: 'Pada Olimpiade Sydney, Indonesia mencatat sejarah dengan meraih medali emas pertama melalui cabang bulu tangkis tunggal putra.',
    },
    {
      id: 9,
      tanggal: 'Tahun 2018',
      judul: 'Indonesia menjadi tuan rumah Asian Games ke-18 di Jakarta dan Palembang. Pada ajang ini, Indonesia berhasil meraih prestasi gemilang dengan perolehan 31 medali emas.',
    },
    {
      id: 10,
      tanggal: 'Tahun 2021',
      judul: 'Indonesia meraih prestasi gemilang dengan meraih medali emas Olimpiade pertama dalam cabang bulu tangkis ganda putra.',
    },
  ]

  return (
    <section className='pt-40 py-20'>
      <div className='container'>
        <div className='text-center' data-AOS='fade-down' data-aos-duration='1200'>
          <h1 className='uppercase text-primary font-bold text-base md:text-lg tracking-widest pb-2'>Sejarah Singkat</h1>
          <h3 className='text-textColor font-bold text-[24px] md:text-[32px] leading-9'>Sejarah Perkembangan Olahraga di Indonesia</h3>
        </div>
        <div id="ketentuan" className=" flex flex-col md:grid grid-cols-9 mx-auto p-2 text-primaryYel mt-20">
          {timelines.map((items) => (
            (items.id % 2 == 1 ? 
              <div className="flex flex-row-reverse md:contents">
                <div className="time-head col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto md:ml-auto md:mr-0 md:text-right" data-AOS='fade-right' data-aos-duration='2000'>
                  <h3 className="font-semibold text-base md:text-lg mb-1 text-primary">{items.tanggal}</h3>
                  <h5 className="leading-7 md:leading-8 text-textColor text-xs md:text-sm">{items.judul}</h5>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-primary pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary border-[#999aa4] shadow"></div>
                </div>
              </div> : 
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-primary pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary border-[#999aa4] shadow"></div>
                </div>
                <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto md:text-left" data-AOS='fade-left' data-aos-duration='2000'>
                  <h3 className="font-semibold text-base md:text-lg mb-1 text-primary">{items.tanggal}</h3>
                  <h5 className="leading-7 md:leading-8 text-textColor text-xs md:text-sm">{items.judul}</h5>
                </div>
              </div>
            )
          ))}
        </div>
        <div className='text-center pt-10'>
          <p data-AOS='fade-up' data-aos-duration='2000' className='text-xs md:text-sm max-w-3xl leading-6 md:leading-8 mx-auto text-textColor'>Sejak kemerdekaannya, Indonesia terus berkomitmen untuk mengembangkan olahraga dan berpartisipasi aktif dalam berbagai ajang olahraga internasional. Prestasi dan dedikasi para atlet Indonesia terus menginspirasi dan mengangkat nama bangsa di panggung dunia olahraga.</p>
        </div>
      </div>
    </section>
  )
}

export default sejarahContent