import CardProduct from '@/components/commons/CardProduct'
import Pagination from '@/components/commons/Pagination'
import data from '@/data/fake.api.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Combo Trung thu 2024 - Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}

const getCombo = () => {
  const comboList = data.products
  return comboList
}

export default async function SanPham({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { slug } = searchParams

  const data = getCombo()

  return (
    <div>
      <div className='p-[10px] mb-4 bg-white'>
        <button className='border rounded-md py-2 px-4'>Sắp theo:</button>
      </div>
      <div className='grid grid-cols-12 auto-rows-fr gap-[30px]'>
        {data?.map((item) => (
          <div
            key={item.id}
            className='col-span-4 max-md:col-span-6 max-sm:col-span-full bg-white'
          >
            <CardProduct
              name={item.name}
              id={item.id}
              img={item.img}
              href={`/combo/${item.slug}-${item.id}`}
            />
          </div>
        ))}
      </div>
      <Pagination slug={slug} />
    </div>
  )
}
