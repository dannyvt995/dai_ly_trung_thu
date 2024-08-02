'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RiPhoneFill } from 'react-icons/ri'
import { CiFacebook } from 'react-icons/ci'
import { PiTwitterLogoThin } from 'react-icons/pi'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Navbar() {
  const listContact = [
    {
      href: '#',
      icon: CiFacebook
    },
    {
      href: '#',
      icon: PiTwitterLogoThin
    },
    {
      href: '#',
      icon: PiYoutubeLogoLight
    },
    {
      href: '#',
      icon: PiInstagramLogoThin
    }
  ]

  const listMenu = [
    {
      id: 1,
      title: 'Sản phẩm',
      href: '#',
      subMenu: [
        {
          title: 'Bánh trung thu Givral',
          href: '/san-pham?type=givral'
        },
        {
          title: 'Bánh trung thu Brodard',
          href: '/san-pham?type=brodard'
        }
      ]
    },
    {
      id: 2,
      title: 'Combo',
      href: '#',
      subMenu: [
        {
          title: 'Bánh trung thu Givral',
          href: '/combo?type=givral'
        },
        {
          title: ' Bánh trung thu Brodard',
          href: '/combo?type=brodard'
        }
      ]
    },
    {
      id: 3,
      title: 'Bảng giá',
      href: '#'
    },
    {
      id: 4,
      title: 'Giới thiệu',
      href: '#'
    },
    {
      id: 5,
      title: 'Liên hệ',
      href: '/lien-he'
    }
  ]

  return (
    <header>
      <div className='flex items-center py-4 px-5'>
        <div className='basis-1/3'>
          <Link href='#' className='flex items-center gap-x-1'>
            <span className='flex items-center justify-center size-[25px] bg-mid-autumn-festival rounded-full'>
              <RiPhoneFill size={16} className='text-white' />
            </span>
            <span>12345-67-8910</span>
          </Link>
        </div>
        <div className='basis-1/3 flex justify-center'>
          <div className='w-[150px]'>
            <Link href='/'>
              <Image
                src='/logo_givral_mooncake.svg'
                alt='logo-banh-trung-thu-givral'
                width={100}
                height={100}
                className='w-full h-auto'
              />
            </Link>
          </div>
        </div>
        <div className='basis-1/3'>
          <ul className='flex items-center gap-3 md:justify-end'>
            {listContact.map((item, index) => (
              <li key={index}>
                <Link href='#'>
                  <item.icon size={24} className='text-gray-light' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='border-t px-5'>
        <nav className='flex items-center'>
          <div className='flex-1 flex items-center justify-center'>
            <ul className='flex items-center uppercase md:gap-6'>
              {listMenu.map((item) => (
                <li key={item.id} className='group relative'>
                  <Link
                    href={item.href}
                    className='flex items-center p-4 text-gray-medium'
                  >
                    {item.title} {item.subMenu && <IoMdArrowDropdown />}
                  </Link>
                  {item.subMenu && (
                    <ul className='hidden group-hover:block absolute top-full bg-white shadow-lg border border-slate-300 text-gray-medium z-[999]'>
                      {item.subMenu.map((item, index) => (
                        <li key={index} className='min-w-52'>
                          <Link href={item.href} className='block w-full py-2 px-4 text-nowrap'>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center gap-x-3'>
            <div>
              <IoSearchOutline size={22} />
            </div>
            <div>
              <MdOutlineShoppingCart size={22} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
