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

  const handleOnChange = (e: any)=> {
    setWeight(e.target.value)
    setQuantity(1)
  }

  const handleQuantity = (str: 'increase' | 'decrease') => {
    switch (str) {
      case 'increase':
        if(quantity >= 1) {
          setQuantity((prev) => prev + 1)
        }
        break
      case 'decrease':
        if(quantity > 1) {
          setQuantity((prev) => prev - 1)
        }
        break
      default:
        return
    }
  }

  useEffect(() => {
    setWeight(Object.keys(item?.trongluong)[0])
    setQuantity(1)
  }, [item])

  return (
    <div className='flex items-center space-x-2'>
      <button
        className='size-[30px] flex items-center justify-center border'
        onClick={() => handleQuantity('decrease')}
      >
        <RiSubtractFill />
      </button>
      <input
        type='number'
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        min={1}
        className='w-12 h-[30px] outline-none text-center border'
      />
      <button
        className='size-[30px] flex items-center justify-center border'
        onClick={() => handleQuantity('increase')}
      >
        <MdOutlineAdd size={18} />
      </button>
      <select
        className='border p-1'
        onChange={handleOnChange}
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
