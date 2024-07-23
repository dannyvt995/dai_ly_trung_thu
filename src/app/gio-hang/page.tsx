'use client'
import { useState } from 'react'
import { useCounterStore } from '@/providers/counter-store-provider'
import MainSection from '@/components/commons/MainSection'
import Link from 'next/link'
import BreadCrumb from '@/components/commons/BreadCrumb'

const ProductManager: React.FC = () => {
  const products = useCounterStore((state) => state.products)
  const addProduct = useCounterStore((state) => state.addProduct)
  const removeProduct = useCounterStore((state) => state.removeProduct)
  const updateProduct = useCounterStore((state) => state.updateProduct)

  const [newProduct, setNewProduct] = useState({ id: 0, name: '', brand: '' })

  const handleAddProduct = () => {
    // addProduct(newProduct)
    setNewProduct({ id: 0, name: '', brand: '' })
  }

  const breadCrumb = [
    {
      text: 'Giỏ hàng',
      href: '/san-pham'
    }
  ]
  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />
      <MainSection bgColor='bg-white'>
        <div className='grid grid-cols-12 border'>
          <div className='col-span-8 max-lg:col-span-full lg:border-r'>
            {[1, 2, 3].map((item, index) => (
              <div
                className='grid grid-cols-12 gap-[15px] p-3 border-b'
                key={item}
              >
                <div className='col-span-3'>
                  <div className='w-full h-[100px] bg-gray-200'></div>
                </div>
                <div className='col-span-9'>
                  <div className='flex flex-wrap max-md:flex max-md:flex-col max-md:gap-y-2'>
                    <p className='basis-1/2 max-md:basis-full text-sm md:pr-2'>
                      Bánh trung thu Kinh Đô 2024 - Combo CQ5
                    </p>
                    <div className='flex items-center basis-1/4 gap-x-2 max-md:basis-full'>
                      <span className='block'>Số lượng</span>
                      <input
                        type='number'
                        className='w-[40px] border outline-none'
                        defaultValue={1}
                      />
                    </div>
                    <div className='flex items-center basis-1/4 max-md:basis-full'>
                      <p>290,000đ</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-span-4 max-lg:col-span-full p-3'>
            <p className='pb-3 font-medium'>Thông tin đơn hàng</p>
            <p className='pb-3'>
              Số lượng sản phẩm: <span className='font-medium'>0</span>
            </p>
            <p className='pb-3'>
              Thành tiền: <span className='font-medium'>6.820.000 đ</span>
            </p>
            <hr className='bg-black' />
            <button className='w-full bg-[#007bff] hover:bg-[#0056b3] py-2 mt-3 text-white rounded-md'>
              Đặt hàng
            </button>
            <Link
              href='/combo'
              className='block w-full border border-[#17a2b8] text-[#17a2b8] py-2 mt-3 text-center rounded-md'
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
      </MainSection>
    </>
  )
}

export default ProductManager
