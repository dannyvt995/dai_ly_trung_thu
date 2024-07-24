'use client'

import Link from 'next/link'
import IconFacebook from '../icons/IconFacebook'
import useCartStore from '@/stores/cart.store'
import { IProduct } from '@/types/data_type'

interface Props {
  data: IProduct
}

const CardProductDetail = ({ data }: Props) => {
  const { addProduct } = useCartStore()

  const handleAddProduct = (data: any) => {
    addProduct(data)
  }

  return (
    <div>
      <div>
        <h4 className='mb-2 text-xl'>Thông tin sản phẩm</h4>
        <p>{data?.name}</p>
      </div>
      <div className='mt-7 pt-5 pb-[10px] border-y border-dashed border-gray-300'>
        <p>
          Giá:{' '}
          {data?.price ? (
            <span className='text-[#f3650e]'>
              {data?.price.toLocaleString()} đ
            </span>
          ) : (
            <Link href='#' className='text-[#f3650e] font-medium'>
              Liên hệ
            </Link>
          )}
        </p>
        {data?.price && (
          <button
            className='w-full bg-[#dc3545] hover:bg-[#c82333] mt-2 py-2 rounded-md text-white'
            onClick={() => handleAddProduct(data)}
          >
            Thêm giỏ hàng
          </button>
        )}
      </div>
      <div className='pt-5 pb-[10px]'>
        <p className='flex'>
          Chia sẻ:{' '}
          <Link href='#' className=''>
            <IconFacebook color='blue' size={24} />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CardProductDetail
