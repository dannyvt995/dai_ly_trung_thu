import CardProduct from '@/components/commons/CardProduct'
import Pagination from '@/components/commons/Pagination'
import data from '@/data/fake.api.json'

const getProduct = (_id: string | undefined) => {
  const productId = _id !== '2' ? '1' : '2'
  return productId === '1'
    ? data.products.slice(0, 20)
    : data.products.slice(21)
}

export default async function SanPham({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { slug } = searchParams

  const twentyItems = getProduct(slug)

  return (
    <div>
      <div className='p-[10px] mb-4 bg-white'>
        <button className='border rounded-md py-2 px-4'>Sắp theo:</button>
      </div>
      <div className='grid grid-cols-12 auto-rows-fr gap-[30px]'>
        {twentyItems?.map((item) => (
          <div key={item.id} className='col-span-4 max-md:col-span-6 max-sm:col-span-full bg-white'>
            <CardProduct
              name={item.name}
              id={item.id}
              img={item.img}
              href={`/san-pham/${item.slug}-${item.id}`}
            />
          </div>
        ))}
      </div>
      <Pagination slug={slug}/>
    </div>
  )
}
