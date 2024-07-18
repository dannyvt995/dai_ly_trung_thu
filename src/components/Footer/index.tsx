import React from 'react'
import s from './style.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={s.footer_section}>
      <div className={`container ${s.footer_section_wrapper}`}>
        <div className={s.row}>
          <h3>Liên hệ</h3>
          <ul>
            <li>Công ty: TNHH Đầu Tư Thương Mại Dịch Vụ TVA</li>
            <li>Địa chỉ: 59 Nguyễn Khắc Nhu, P.Cô Giang, Quận 1, TP.HCM</li>
            <li>Điện thoại: 0906309885 - 0933138885</li>
            <li>Email: kinhdoanh@cqmart.vn</li>
          </ul>
        </div>
        <div className={s.row}>
          <h3>Sản phẩm</h3>
          <ul>
            <li><Link href={'/san-pham/banh-tu-chon-givral'}>Bánh Trung Thu Givral</Link></li>
            <li><Link href={'/san-pham/banh-tu-chon-brodard'}>Bánh Trung Thu Brodard</Link></li>
          </ul>
        </div>
        <div className={s.row}>
          <h3>Trợ giúp</h3>
          <ul>
            <li><Link href={'/lien-he'}>Liên hệ</Link></li>
            <li><Link href={'/gioi-thieu'}>Giới thiệu</Link></li>
            <li><a>Thanh toán</a></li>
            <li><a>Giao hàng</a></li>
            <li><a>Bảo hành / Đổi trả hàng</a></li>
            <li><a>Điều kiện sử dụng</a></li>
            <li><a>Chính sách bảo mật</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
