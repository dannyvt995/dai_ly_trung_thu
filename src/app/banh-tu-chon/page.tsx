import type { Metadata } from 'next'
import data from '@/data/fake.api.json'

export const metadata: Metadata = {
  title: 'Bánh Trung thu 2024 - Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}

export default function page() {
  const listProducts = data.products
  
  return <div>Tu chọn</div>
}
