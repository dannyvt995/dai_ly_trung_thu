import React from 'react'
import s from './style.module.css'
import BannerPage from "@/components/BannerPage";
import Link from 'next/link';
import Intro from '@/components/Intro';
import OutStandingProducts from '@/components/OutStandingProducts';
export default function TrangChu() {
  return (
    <main>
      <BannerPage/>
      <OutStandingProducts/>
      <Intro/>
    </main>
  )
}
