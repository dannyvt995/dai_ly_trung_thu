'use client'

import Link from 'next/link'
import MainSection from './MainSection'
import { usePathname } from 'next/navigation'

interface Props {
  breadCrumb: {
    text: string
    href: string
  }[]
}

const BreadCrumb = ({ breadCrumb }: Props) => {
  const pathname = usePathname()
  console.log('Check pathname: ', pathname)
  
  return (
    <MainSection className='py-10' bgColor='bg-transparent'>
      <ul className='flex items-center gap-x-2 text-white'>
        <li>
          <Link href='#'>
            Trang chủ <span>/</span>
          </Link>
        </li>
        {breadCrumb?.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              {item.text} <span className='last:hidden'>/</span>
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  )
}

export default BreadCrumb
