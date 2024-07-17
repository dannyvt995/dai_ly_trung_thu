
import React from 'react';
import s from './style.module.css';
import { shuffleArray } from '@/utils/shuffleArray';
import data from '@/data/info.json';

type Brand = 'banh-trung-thu-givral' | 'banh-trung-thu-brodard';

export default function RelatedCombo({ slug }: { slug: Brand }) {
  const list_brand: Record<Brand, { id: number; name: string; slug: string; price: number; body: string;}[]> = {
    'banh-trung-thu-givral': data.givral.combo,
    'banh-trung-thu-brodard': data.brodard.combo,
  };

  const shuffledArray = shuffleArray([...list_brand[slug]]);
  const data_c = shuffledArray.slice(0, 4);

  return (
    <section className={s.relatedcombo_section}>
      <h2>Combo 2024</h2>
      {data_c.map((single, index) => (
        <button key={index}>{single.name}</button>
      ))}
    </section>
  );
}
