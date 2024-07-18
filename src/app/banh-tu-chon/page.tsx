import React from 'react'
import s from './style.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bánh Trung thu 2024 - Nhà phân phối bánh trung thu 2024",
  description: "Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt",
};


import postsData from '../../data/info.json';
import Link from 'next/link';
import SubBanner from '@/components/SubBanner';

export default function page({ }) {
  return (
    <main>
           <SubBanner/>
      <div className='container'>
   
        <div className={s.list_brand}>
          <div className={s.item}>
            <h2>Bánh Givral</h2>
            <Link
              href={`/banh-tu-chon/givral/danh-sach-banh`}
            >
              <span>
                btn giv
              </span>
            </Link>
          </div>
          <div className={s.item}>
            <h2>Bánh Brodard</h2>
            <Link
              href={`/banh-tu-chon/brodard/danh-sach-banh`}
            >
              <span>
                btn bro
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
