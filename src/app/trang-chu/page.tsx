import React from 'react'
import BannerPage from '@/components/BannerPage'
import Intro from '@/components/Intro'
import OutStandingProducts from '@/components/OutStandingProducts'
import MainSection from '@/components/commons/MainSection'
export default function TrangChu() {
  return (
    <main>
      <BannerPage />
      <MainSection>
        <div className='flex flex-col gap-20'>
          <div>
            <h3 className='font-titleBanner text-5xl text-center'>
              Welcome to MoonCake Store
            </h3>
            <p className='text-center'>
              "Cửa hàng bánh trung thu của chúng tôi là nơi giao hòa giữa truyền
              thống và hiện đại. Với bàn tay khéo léo của những nghệ nhân làm
              bánh, mỗi chiếc bánh trung thu đều mang đậm hương vị cổ truyền,
              gợi nhớ những ký ức tuổi thơ. Chúng tôi không chỉ đơn thuần bán
              bánh, mà còn mang đến cho khách hàng những trải nghiệm ẩm thực
              tinh tế và ý nghĩa."
            </p>
          </div>
          <OutStandingProducts />
        </div>
      </MainSection>
      <Intro />
    </main>
  )
}
