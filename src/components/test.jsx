import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const test = () => {
  return (
    <div>
        <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className='text-center'
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
        </Swiper>
    </div>
  )
}

export default test