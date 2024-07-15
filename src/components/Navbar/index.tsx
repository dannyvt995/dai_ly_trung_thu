import Link from 'next/link'
import React from 'react'
import s from './style.module.css'
export default function Navbar() {
  return (
    <nav className={s.navbar_section}>
        <div className={s.deskop}>
          <ul className={s.list_menu_des}>
              <li><Link href={`${process.env.SITE_URL}`}>Trang chủ</Link></li>
              <li><Link href={`${process.env.SITE_URL}/ve-chung-toi`}>Về chúng tôi</Link></li>
              <li><Link href={`${process.env.SITE_URL}/banh-trung-thu`}>Bánh trung thu</Link></li>
              <li><Link href={`${process.env.SITE_URL}/combo-trung-thu`}>Combo 2024</Link></li>
              <li><Link href={`${process.env.SITE_URL}/bang-gia`}>Bảng giá</Link></li>
              <li><Link href={`${process.env.SITE_URL}/gio-hang`}>Giỏ hàng</Link></li>
              <li><Link href={`${process.env.SITE_URL}/lien-he`}>Liên hệ</Link></li>
          </ul>
        </div>
        <div className={s.mobie}>
          
        </div>
    </nav>
  )
}
