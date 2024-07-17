import React from 'react'

import Link from 'next/link'
import s from './style.module.css'
export default function SanPham() {
  return (
    <main>
          <h1>Sản phẩm</h1>
        <Link href={'/san-pham/banh-trung-thu-brodard'}>Hãng bánh Brodard</Link>
        <Link href={'/san-pham/banh-trung-thu-givral'}>Hãng bánh Givral</Link> 
    </main>
  )
}
