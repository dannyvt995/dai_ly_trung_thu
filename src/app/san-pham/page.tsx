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
      
      {/*  <div className='p-[10px] mb-4 bg-white  flex justify-center'>
        <button className='border rounded-md py-2 px-4'>Sắp xếp theo:</button>
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
      </div> */}
      {/* <Pagination slug={slug} /> */}


      {/* 
      
      Cái trang sản phẩm , a nghĩ ko cần show chi tiết , chỉ cần 2 hãng , ấn vào 2 hãng thì show ra list ntn
      
      
      */}
      {type ? (
           twentyItems?.map((item,index) => (
            <div className="space-y-4" key={index}>
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <a className="text-blue-600">Xem thêm</a>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 border">-</button>
                  <input type="text" value="1" className="w-12 text-center border" />
                  <button className="px-2 py-1 border">+</button>
                  <select className="border p-1">
                  {item.trongluong &&
                    Object.keys(item.trongluong).map(key => {
                      const trongluongDetails = item.trongluong[key as keyof typeof item.trongluong]; // Sử dụng as
                      return (
                        <option key={key} value={key}>
                          {key}g {JSON.stringify(trongluongDetails)}
                        </option>
                      );
                    })}
                  </select>
                  <button className="text-red-600">🛒</button>
                </div>
              </div>
            </div>
    
          ))
      ):null}
     

    </div>
  )
}
