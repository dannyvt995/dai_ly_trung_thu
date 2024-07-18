import React from 'react'
import s from './style.module.css'
import Link from 'next/link'
export default function Widget() {
  return (
    <section className={s.widget_section}>
        <div className={s.left}>
       
            <a>SDT 0909090990</a>
            <a>Zalo 09090990</a>
        </div>
        <div className={s.right}>
            <button>^</button>
        </div>
    </section>
  )
}
