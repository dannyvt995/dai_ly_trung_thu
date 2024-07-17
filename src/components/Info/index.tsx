import React from 'react'
import s from './style.module.css'
export default function Info() {
  return (
    <section className={s.info_section}>
        <div className={`container ${s.info_section_wrapper}`}>
            <div>
                <p>Địa chỉ: 59 Nguyễn Khắc Nhu, P.Cô Giang, Quận 1, TP.HCM</p>
            </div>
            <div>
                <p>Email: kinhdoanh@cqmart.vn</p>
            </div>
            <div>
                <p>Hotline: 0906309885</p>
            </div>
        </div>
    </section>
  )
}
