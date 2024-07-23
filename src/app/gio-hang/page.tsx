'use client'
import MainSection from '@/components/commons/MainSection'
import Link from 'next/link'
import BreadCrumb from '@/components/commons/BreadCrumb'
import useCartStore from '@/stores/cart.store'
import Image from 'next/image'

const ProductManager = () => {
  const { cartItems, quantity } = useCartStore()

  const handleAddProduct = () => {
    // addProduct(newProduct)
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
            {cartItems?.map((item, index) => (
              <div className='grid grid-cols-12 gap-[15px] p-3' key={item.id}>
                <div className='col-span-3'>
                  <div className='w-full h-[150px] bg-gray-200'>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-full h-full'
                    />
                  </div>
                </div>
                <div className='col-span-9'>
                  <div className='flex flex-wrap max-md:flex max-md:flex-col max-md:gap-y-2'>
                    <p className='basis-1/2 max-md:basis-full text-sm md:pr-2'>
                      {item.name}
                    </p>
                    <div className='flex items-center basis-1/4 gap-x-2 max-md:basis-full'>
                      <span className='block'>Số lượng</span>
                      <input
                        type='number'
                        className='w-[40px] border outline-none'
                        defaultValue={item.quantity}
                      />
                    </div>
                    <div className='flex items-center basis-1/4 max-md:basis-full'>
                      <p>{(item.quantity * item.price)?.toLocaleString()} đ</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-span-4 max-lg:col-span-full p-3'>
            <p className='pb-3 font-medium'>Thông tin đơn hàng</p>
            <p className='pb-3'>
              Số lượng sản phẩm: <span className='font-medium'>{quantity}</span>
            </p>
            <p className='pb-3'>
              Thành tiền:{' '}
              <span className='font-medium'>
                {cartItems?.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.price * currentValue.quantity,
                  0
                )?.toLocaleString()} đ
              </span>
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
