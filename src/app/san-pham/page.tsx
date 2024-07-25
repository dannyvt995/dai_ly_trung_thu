import CardProduct from '@/components/commons/CardProduct'
import data from '@/data/fake.api.json'

const getProduct = (type: string | undefined) => {
  console.log('Check type: ', type)
  const listProducts = data.products
  if (type) {
    const productByType = listProducts.filter(
      (item) => item.type.toLowerCase() === type.toLowerCase()
    )
    return productByType
  }
  return listProducts
}

export default async function SanPham({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { type } = searchParams

  const twentyItems = getProduct(type)

  return (
    <div>
      <div className='p-[10px] mb-4 bg-white'>
        <button className='border rounded-md py-2 px-4'>Sắp theo:</button>
      </div>
      <div className='grid grid-cols-12 auto-rows-fr gap-[30px]'>
        {twentyItems?.map((item) => (
          <div
            key={item.id}
            className='col-span-4 max-md:col-span-6 max-sm:col-span-full bg-white'
          >
            <CardProduct data={item} href='/san-pham' />
          </div>
        ))}
      </div>
      {/* <Pagination slug={slug} /> */}
    </div>
  )
}
