'use client'

import useCartStore from '@/stores/cart.store'
import Image from 'next/image'

const CartProduct = ({ item }: any) => {
  const { increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useCartStore()

  const handleIncreaseQuantity = (id: number, weight: any) => {
    increaseQuantity(id, weight)
  }

  const handleDecreaseQuantity = (id: number, weight: any) => {
    decreaseQuantity(id, weight)
  }

  const handleDelete = (id: number, weight: any) => {
    removeItemFromCart(id, weight)
  }

  return (
    <div
      className='grid grid-cols-12 gap-[15px] p-3 shadow-contact rounded-lg mb-3 border'
      key={item.id}
    >
      <div className='col-span-3'>
        <div className='w-[150px] h-[150px] border bg-gray-200'>
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
        <div>
          <div className='flex flex-wrap max-md:flex max-md:flex-col max-md:gap-y-2'>
            <p className='basis-1/2 max-md:basis-full md:pr-2'>{item.name}</p>
            <div className='flex items-center basis-1/4 max-md:basis-full'>
              <button
                className='size-[30px] text-center font-medium border'
                onClick={() => handleDecreaseQuantity(item.id, item.trongluong)}
              >
                -
              </button>
              <div
                className='size-[30px] flex items-center justify-center font-medium outline-none bg-gray-300'
                defaultValue={1}
              >
                {item.quantity}
              </div>
              <button
                className='size-[30px] text-center font-medium border'
                onClick={() => handleIncreaseQuantity(item.id, item.trongluong)}
              >
                +
              </button>
            </div>
            <div className='flex items-center basis-1/4 max-md:basis-full'>
              {item.trongluong ? (
                <p className=''>
                  {(item.trongluong?.price * item.quantity)?.toLocaleString()} đ
                </p>
              ) : (
                <p className=''>{item?.price?.toLocaleString()} đ</p>
              )}
            </div>
          </div>
          {item.trongluong && (
            <p className='text-sm'>
              {item.trongluong?.egg} Trứng - {item.trongluong?.weight} g
            </p>
          )}
          <button
            className=' hover:text-[#fd7e14]'
            onClick={() => handleDelete(item.id, item.trongluong)}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
