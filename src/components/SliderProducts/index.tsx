"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import ImageLoad from '../ImageLoad';

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
            {data.map((item: any, index: number) => (
                <SwiperSlide>
                    <div className='item'>
            
                        <div className='image'><ImageLoad src={item.img} alt={'he'}/></div>
                        <h3 className='name'>{item.name}</h3>
                        <a href={`/combo/${item.brand}/${item.slug}`}>Chi tiết</a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
