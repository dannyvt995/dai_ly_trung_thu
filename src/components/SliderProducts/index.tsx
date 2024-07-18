"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function SliderProducts({ data }: { data: any }) {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {data.map((single: any, index: number) => (
                <SwiperSlide>
                    <div className='item'>
                        <div className='image'></div>
                        <h3 className='name'>{single.name}</h3>
                        <a href={`/combo/${single.brand}/${single.slug}`}>Chi tiết</a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
