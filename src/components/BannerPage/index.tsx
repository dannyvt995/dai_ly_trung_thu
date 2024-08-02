'use client'

import { banner1, banner2, banner3, banner4 } from '../../../public/banner'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'

export default function BannerPage() {
  const listBanners = [
    {
      title: 'Trăng rằm sum họp, tình thân bền lâu',
      desc: `"Chúc các bạn gần xa có một đêm trung thu hạnh phúc trọn vẹn cùng
        gia đình và bạn bè."`,
      image: banner1
    },
    {
      title: 'Trung thu rực rỡ, tuổi thơ ươm mơ',
      desc: `"Trẻ thơ nô đùa, dưới ánh trăng tròn. Gia đình sum họp, tình yêu chan hòa."`,
      image: banner2
    },
    {
      title: 'Vui Tết Trung thu, sẻ chia yêu thương',
      desc: `"Đèn lồng lung linh, tình người ấm áp, cùng nhau đón Tết, muôn nhà sum họp."`,
      image: banner3
    },
    {
      title: 'Hương vị quê nhà, trăng rằm đoàn viên',
      desc: `"Trăng rằm lung linh, soi sáng quê hương, đoàn viên sum họp, tình cảm đậm sâu."`,
      image: banner4
    }
  ]

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        effect={'fade'}
        centeredSlides={true}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {listBanners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='relative min-h-[420px] py-6'>
              <div className='py-12 my-12'>
                <div className='flex justify-center'>
                  <div className='basis-4/5 flex flex-col items-center gap-4 text-white'>
                    <h2 className='text-8xl font-titleBanner'>{item.title}</h2>
                    <p className='max-w-[750px] text-4xl text-center font-titleBanner'>
                      {item.desc}
                    </p>
                    <Link
                      href='/san-pham'
                      className='block w-fit rounded-full py-3 px-5 bg-mid-autumn-festival text-4xl font-titleBanner'
                    >
                      Shopping thôi
                    </Link>
                  </div>
                </div>
              </div>
              <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-[100]'>
                <Image
                  src={item.image}
                  width={item.image.width}
                  height={item.image.height}
                  alt='banner-banh-trung-thu'
                  className='w-full h-auto blur-[7px]'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
