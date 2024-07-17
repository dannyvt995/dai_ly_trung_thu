import React from 'react'

import s from './style.module.css'
import Link from 'next/link'
import ImageLoad from '../ImageLoad'
export default function Intro() {
  return (
    <section>
        <div className={`container ${s.intro_section}`}>
            <div className={s.image}>
              <Link href={'/gioi-thieu'}>
                <ImageLoad src='/intro.png' alt='hi'/>
              </Link>
            </div>
            <div className={s.content}>
              <h3>BÁNH TRUNG THU CQ MART</h3>
              <p>
              Bánh trung thu CQ Mart xin chân thành cảm ơn sự ủng hộ và tín nhiệm của quý khách trong suốt 10 năm qua. Một mùa trung thu nữa lại về, thay mặt toàn thể nhân viên công ty xin kính chúc quý khách hàng có một mùa trung thu đầm ấm và hạnh phúc.

Bánh trung thu CQ Mart là đơn vị phân phối bánh trung thu hàng đầu tại TP HCM, là nhà phân phối trực tiếp cấp 1 của các hãng bánh danh tiếng hiện nay: Givral, Brodard, Kinh Đô, Như Lan, Bibica, Taithong, Casahana. Cty chúng tôi chuyên cung cấp Bánh Trung Thu cho công ty, xí nghiệp và đại lý bán lẻ với chất lượng đảm bảo, giá cả cạnh tranh nhất. Quý Khách hàng có thể tham khảo nhiều nơi, nhưng hãy liên hệ với chúng tôi để được trải nghiệm dịch vụ 4 NHẤT: SẢN PHẨM TỐT NHẤT, GIÁ TỐT NHẤT, GIAO HÀNG NHANH NHẤT, DỊCH VỤ TỐT NHẤT.
              </p>
              <Link href={'/san-pham'}>Xem thêm sản phẩm</Link>
            </div>
        </div>
    </section>
  )
}
