'use client'

import useCartStore from '@/stores/cart.store'
import { useEffect, useState } from 'react'
import { RiSubtractFill } from 'react-icons/ri'
import { MdOutlineAdd } from 'react-icons/md'

const AddProduct = ({ item }: any) => {
  const { addProduct } = useCartStore()

  const [quantity, setQuantity] = useState(1)
  const [weight, setWeight] = useState('')

  const handleAddToCart = () => {
    addProduct(item, quantity, weight)
  }

  useEffect(()=> {
    setWeight(Object.keys(item?.trongluong)[0])
    setQuantity(1)
  }, [item])

  return (
    <div className='flex items-center space-x-2'>
      <button className='size-[30px] flex items-center justify-center border'>
        <RiSubtractFill />
      </button>
      <input
        type='number'
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        min={1}
        className='w-12 h-[30px] outline-none text-center border'
      />
      <button className='size-[30px] flex items-center justify-center border'>
        <MdOutlineAdd size={18} />
      </button>
      <select
        className='border p-1'
        onChange={(e) => setWeight(e.target.value)}
      >
        {item.trongluong &&
          Object.keys(item.trongluong).map((key) => {
            const trongluongDetails =
              item.trongluong[key as keyof typeof item.trongluong] // Sử dụng as
            return (
              <option key={key} value={key}>
                {key}g {JSON.stringify(trongluongDetails)}
              </option>
            )
          })}
      </select>
      <button className='text-red-600' onClick={handleAddToCart}>
        🛒
      </button>
    </div>
  )
}

export default AddProduct
