import React from 'react'
import s from './style.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combo Trung thu 2024 - Nhà phân phối bánh trung thu 2024",
  description: "Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt",
};


import postsData from '../../data/info.json';
import Link from 'next/link';

export default function page({ }) {
  return (
    <main>
      <h2>Combo Givral</h2>
      <Link href={`/combo/givral`}>Combo Givral</Link>

      <h2>Combo Brodard</h2>
      <Link href={`/combo/brodard`}>Combo Brodard</Link>

    </main>
  )
}
