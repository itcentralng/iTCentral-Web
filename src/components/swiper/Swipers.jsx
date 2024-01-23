import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

import InternCard from '../cards/InternCard';

export default function Swipers() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
        <SwiperSlide>
            <InternCard />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
