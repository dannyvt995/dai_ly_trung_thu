import Link from 'next/link'
import MainSection from './MainSection'

const BreadCrumb = ({ text }: { text: string}) => {
  return (
    <MainSection className='py-10' bgColor='bg-transparent'>
      <ul className='flex items-center gap-x-2 text-white'>
        <li>
          <Link href='#'>
            Trang chủ <span>/</span>
          </Link>
        </li>
        <li>
          <Link href='#'>{text}</Link>
        </li>
      </ul>
    </MainSection>
  )
}

export default BreadCrumb
