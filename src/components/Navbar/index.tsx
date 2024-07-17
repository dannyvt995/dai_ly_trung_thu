import Link from 'next/link'
import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className={s.navbar_section}>
      <div className='container'>
        <div className={s.deskop}>
          <div className={s.logo}>
            <Link href={`${process.env.SITE_URL}`}><Image src="/logo.png" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} alt="" /></Link>
          </div>
          <ul className={s.list_menu_des}>
            <li><Link href={`${process.env.SITE_URL}/san-pham`}>Sản phẩm</Link></li>
            <li><Link href={`${process.env.SITE_URL}/gioi-thieu`}>Giới thiệu</Link></li>
            <li><Link href={`${process.env.SITE_URL}/banh-tu-chon`}>Bánh trung thu tự chọn</Link></li>
            <li><Link href={`${process.env.SITE_URL}/combo`}>Combo 2024</Link></li>
            <li><Link href={`${process.env.SITE_URL}/bang-gia`}>Bảng giá</Link></li>
            <li><Link href={`${process.env.SITE_URL}/gio-hang`}>Giỏ hàng</Link></li>
            <li><Link href={`${process.env.SITE_URL}/lien-he`}>Liên hệ</Link></li>
          </ul>

        </div>
      </div>

      <div className={s.mobie}>

      </div>
    </nav>
  )
}
