"use client"
import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function BannerPage() {

  return (
    <section className={s.banner_section}>
      <div className={s.banner_img}>
        <Image src="/banner.png" alt="banner" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={`container ${s.btn_brand}`}>
     
          <div className={s.itemBrand}>
            <Link href={'/san-pham/banh-tu-chon-brodard'}>
              <div>
                <Image src="/brodard/logo.png" alt="banner" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                <span>Hãng bánh Brodard</span>
              </div>
            </Link>
          </div>
          <div  className={s.itemBrand}>
            <Link href={'/san-pham/banh-tu-chon-givral'}>
              <div>
                <Image src="/givral/logo.png" alt="banner" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                <span>Hãng bánh Givral</span>
              </div>
            </Link>
           
          </div>

      </div>
    </section>
  )
}
