import React from 'react'
import data from '@/data/info.json'
import { shuffleArray } from '@/utils/shuffleArray'
import ImageLoad from '../ImageLoad'
import MainSection from '../commons/MainSection'
import Link from 'next/link'
import CardProduct from '../commons/CardProduct'

export default function OutStandingProducts() {
  const list_combo = [...data.givral.combo, ...data.brodard.combo]
  const shuffledArray = shuffleArray([...list_combo])
  const results = shuffledArray.slice(0, 9)

  return (
    <MainSection bgColor='bg-slate-100'>
      <div className=''>
        <div className='bg-black w-[100px] h-[2px] mx-auto'></div>
        <h2 className='text-[28px] py-[30px] text-center'>SẢN PHẨM NỔI BẬT</h2>
        <div className='grid grid-cols-12 gap-[30px]'>
          {results.map((combo, index) => (
            <div
              key={index}
              className='col-span-3 max-xl:col-span-4 max-md:col-span-6 max-sm:col-span-full p-2 border rounded-md bg-white shadow-xl hover:-translate-y-4 duration-300'
            >
              <CardProduct
              name={combo.name}
              id={combo.id}
              img={combo.img}
              href={`/san-pham/${combo.slug}-${combo.id}`}
            />
            </div>
          ))}
        </div>
      </div>
    </MainSection>
  )
}
