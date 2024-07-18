import React from 'react'
import s from './style.module.css'
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Bảng giá - Nhà phân phối bánh trung thu 2024",
  description: "Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt",
};
export default function page() {
  return (
    <main>
      <div className='container'>
        <h1>Bảng giá</h1>
        <Link href={'/bang-gia/bang-gia-banh-givral'} >Bảng giá bánh Givral</Link>
        <Link href={'/bang-gia/bang-gia-banh-brodard'} >Bảng giá bánh Brodard</Link>
      </div>
    </main>
  )
}
