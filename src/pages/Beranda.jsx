import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/beranda/hero'
import TrustCompany from '../components/beranda/trustCompany'
import Layanan from '../components/beranda/layanan'
import KisahSukses from '../components/beranda/kisahSukses'
import Video from '../components/beranda/video'
import Testimoni from '../components/beranda/testimoni'
import JenisOlahraga from '../components/beranda/jenisOlahraga'
import Contact from '../components/beranda/contact'
import Footer from '../components/footer'

const Beranda = () => {
  return (
    <>
      <Navbar />
      <Hero /> 
      <TrustCompany />
      <Layanan />
      <KisahSukses />
      <JenisOlahraga />
      <Video />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  )
}

export default Beranda