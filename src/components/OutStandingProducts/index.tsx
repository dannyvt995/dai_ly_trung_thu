import MainSection from '../commons/MainSection'
import CardProduct from '../commons/CardProduct'
import data from '@/data/fake.api.json'

export default function OutStandingProducts() {
  const results = data.products.filter(item => item.type.includes('combo'))

  return (
    <MainSection bgColor='bg-slate-100'>
      <div className=''>
        <div className='bg-black w-[100px] h-[2px] mx-auto'></div>
        <h2 className='text-[28px] py-[30px] text-center'>SẢN PHẨM NỔI BẬT</h2>
        <div className='grid grid-cols-12 gap-[30px]'>
          {results.map((combo, index) => (
            <div
              key={index}
              className='col-span-3 max-xl:col-span-4 max-md:col-span-6 max-sm:col-span-full p-2 border rounded-md bg-white shadow-xl hover:-translate-y-4 duration-300'
            >
              <CardProduct data={combo} href='/san-pham' />
            </div>
          ))}
        </div>
      </div>
    </MainSection>
  )
}
