import React from 'react'
import s from './style.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combo Trung thu 2024 - Nhà phân phối bánh trung thu 2024",
  description: "Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt",
};


import postsData from '../../data/info.json';
import Link from 'next/link';

export default function page({}) {
  const productsGivral = postsData.givral.combo;
  const productsBrodard = postsData.brodard.combo;
  return (
    <main>
      <h2>Combo Givral</h2>
      <ul >
        {productsGivral.map((product:any) => (
          <li key={product.id}>
            <Link
              href={`/combo-trung-thu/${product.slug}`}
            >
              <span>
                {product.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Combo Brodard</h2>
      <ul >
        {productsBrodard.map((product:any) => (
          <li key={product.id}>
            <Link
              href={`/combo-trung-thu/${product.slug}`}
            >
              <span>
                {product.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
