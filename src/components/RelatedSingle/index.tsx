import React from 'react';
import s from './style.module.css';
import { shuffleArray } from '@/utils/shuffleArray';
import data from '@/data/info.json';
import Link from 'next/link';
import SliderProducts from '../SliderProducts';

type Brand = 'givral' | 'brodard';

export default function RelatedSingle({ slug }: { slug: Brand }) {
  const list_brand: Record<Brand, { id: number; name: string;brand:string;slug:string; trongluong: number; egg: number; price: number; }[]> = {
    'givral': data.givral.single,
    'brodard': data.brodard.single,
  };

  const shuffledArray = shuffleArray([...list_brand[slug]]);
  const data_c = shuffledArray.slice(0, 6);

  return (
    <section className={s.relatedsingle_section}>
      <div className='container'>
   
        <div className={s.title}>
          <h2>Bánh lẻ 2024</h2>
          <Link href={`/banh-tu-chon/${slug}/danh-sach-banh`}>Xem thêm</Link>
        </div>
        <SliderProducts data={data_c as any}/>
      </div>
    </section>
  );
}
