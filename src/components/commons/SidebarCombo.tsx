'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const SidebarCombo = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('type')
  const lists = [
    {
      text: 'Bánh Trung Thu Givral',
      href: '/combo?type=givral'
    },
    {
      text: 'Bánh Trung Thu Brodard',
      href: '/combo?type=brodard'
    }
  ]
  return (
    <div className='text-center w-fit'>
      <ul className='flex'>
        <li className=''>
          <Link
            href={lists[0].href}
            className={`block text-nowrap p-4  border-b-2 border-transparent rounded-t-lg ${
              search === 'givral'
                ? 'border-mid-autumn-festival text-mid-autumn-festival'
                : 'border-gray-400'
            } `}
          >
            {lists[0].text}
          </Link>
        </li>
        <li className=''>
          <Link
            href={lists[1].href}
            className={`block text-nowrap p-4  border-b-2 border-transparent rounded-t-lg ${
              search === 'brodard'
                ? 'border-mid-autumn-festival text-mid-autumn-festival'
                : 'border-gray-400'
            } `}
          >
            {lists[1].text}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SidebarCombo
