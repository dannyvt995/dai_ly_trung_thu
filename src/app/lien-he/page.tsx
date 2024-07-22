import React from 'react'
import type { Metadata } from 'next'
import FormContact from '@/components/FormContact'
import MainSection from '@/components/commons/MainSection'

export const metadata: Metadata = {
  title: 'Danh sách sản phẩm - Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}
export default function page() {
  return (
    <MainSection className='py-10 px-[15px]'>
      <div className='grid grid-cols-12 gap-[15px]'>
        <div className='col-span-6 max-md:col-span-full h-[300px] bg-gray-100'>
          Bản đồ
        </div>
        <div className='col-span-6 max-md:col-span-full'>
          <FormContact />
        </div>
      </div>
    </MainSection>
  )
}
