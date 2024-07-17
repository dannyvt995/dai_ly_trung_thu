import React from 'react';
import s from './style.module.css';
import { shuffleArray } from '@/utils/shuffleArray';
import data from '@/data/info.json';

type Brand = 'givral' | 'brodard';

export default function RelatedSingle({ slug }: { slug: Brand }) {
  const list_brand: Record<Brand, { id: number; name: string;brand:string;slug:string; trongluong: number; egg: number; price: number; }[]> = {
    'givral': data.givral.single,
    'brodard': data.brodard.single,
  };

  const shuffledArray = shuffleArray([...list_brand[slug]]);
  const data_c = shuffledArray.slice(0, 4);

  return (
    <section className={s.relatedsingle_section}>
      <div className='container'>
        <h2>Bánh lẻ 2024</h2>

        <ul>
          {data_c.map((single, index) => (
            <li key={index}>
              <div className={s.item}>
                <h3>{single.name}</h3>
                <a href={`/banh-tu-chon/${single.brand}/${single.slug}`}>Chi tiết</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
