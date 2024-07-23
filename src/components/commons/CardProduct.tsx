import Link from 'next/link'
import ImageLoad from '../ImageLoad'

interface Props {
  img: string
  name: string
  id: number
  href: string
}

const CardProduct = ({ img, name, id, href = '#' }: Props) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className=''>
        {' '}
        <ImageLoad src={img} alt={'he'} />
      </div>
      <div className='p-[10px] flex flex-col justify-start gap-3'>
        <h3 className='font-medium text-center'>{name}</h3>
      </div>
      <Link
        href={href}
        className='block mx-auto text-center w-fit py-[5px] px-8 border rounded-full text-orange-500 mb-5'
      >
        {' '}
        Chi tiết
      </Link>
    </div>
  )
}

export default CardProduct
