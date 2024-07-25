import Link from 'next/link'
import ImageLoad from '../ImageLoad'
import { FaCartPlus } from 'react-icons/fa'
import BtnAddToCart from './BtnAddToCart'
import { IProduct } from '@/types/product.type'

interface Props {
  data: IProduct
  href: string
}

const CardProduct = ({ data, href }: Props) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <Link href={`${href}/${data.slug}-${data.id}`} className=''>
        {' '}
        <ImageLoad src={data.img} alt={'he'} />
      </Link>
      <div className='p-[10px] flex flex-col justify-start gap-3'>
        <h3 className='font-medium'>{data.name}</h3>
      </div>
      <div className='flex items-center justify-between px-[10px] mb-3'>
        <p className='text-[#f3650e]'>{data?.price?.toLocaleString()} đ</p>
        <BtnAddToCart data={data}/>
      </div>
      <div></div>
    </div>
  )
}

export default CardProduct
