import React from 'react'

import Link from 'next/link'
import s from './style.module.css'
export default function SanPham() {
  return (
    <main>
         <div className='container'>
         <h1>Sản phẩm</h1>
        <Link href={'/san-pham/brodard'}>Hãng bánh Brodard</Link>
        <Link href={'/san-pham/brodard'}>Hãng bánh Givral</Link> 
         </div>
    </main>
  )
}
