import Link from 'next/link'
import ImageLoad from '../ImageLoad'
import { FaCartPlus } from 'react-icons/fa'
import { IProduct } from '@/types/product.type'

interface Props {
  data: IProduct
  href: string
}

const CardProduct = ({ data, href }: Props) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <Link
        href={`${href}/${data.slug}-${data.id}`}
        className='h-36 overflow-hidden bg-slate-200'
      >
        {' '}
        {/* <ImageLoad src={data.img} alt={'he'} /> */}
      </Link>
      <div
        className='p-[10px] flex flex-col justify-start gap-3'
        style={{ maxWidth: '80%' }}
      >
        <h3 className='font-medium'>{data.name}</h3>
      </div>
      <p className='mb-2 text-center'>
        <Link href='#' className='px-10 py-2 border rounded-full'>
          Liên hệ
        </Link>
      </p>
      {/* <div className='flex items-center justify-between px-[10px]'>
        <p className='text-[#f3650e] font-bold'>{data?.price?.toLocaleString()} đ</p>
        <BtnAddToCart data={data}/>
      </div> */}
    </div>
  )
}

export default CardProduct
