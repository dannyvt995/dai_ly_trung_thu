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
            <Link href={`/`}><Image src="/logo.png" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} alt="" /></Link>
          </div>
          <ul className={s.list_menu_des}>
            <li><Link href={`/san-pham`}>Sản phẩm</Link></li>
            <li><Link href={`/gioi-thieu`}>Giới thiệu</Link></li>
            <li><Link href={`/banh-tu-chon`}>Bánh trung thu tự chọn</Link></li>
            <li><Link href={`/combo`}>Combo 2024</Link></li>
            <li><Link href={`/bang-gia`}>Bảng giá</Link></li>
            <li><Link href={`/gio-hang`}>Giỏ hàng</Link></li>
            <li><Link href={`/lien-he`}>Liên hệ</Link></li>
          </ul>

        </div>
      </div>

      <div className={s.mobie}>

      </div>
    </nav>
  )
}
