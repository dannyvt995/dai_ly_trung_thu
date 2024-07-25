'use client'

import Link from 'next/link'
import Image from 'next/image'
import MainSection from '../commons/MainSection'
import { distributorNav } from '../../../public/navbar'
import IconPhone from '../icons/IconPhone'
import IConEmail from '../icons/IconEmail'
import IConSearch from '../icons/IconSearch'
import IConCart from '../icons/IConCart'
import IConBar from '../icons/IConBar'
import { useState } from 'react'
import IconClose from '../icons/IconClose'
import useCartStore from '@/stores/cart.store'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { quantity } = useCartStore()

  const hanleOpenMenu = () => {
    setOpen(!open)
  }

  const handleCloseMenu = () => {
    setOpen(false)
  }

  return (
    <>
      <MainSection className='max-[900px]:fixed w-full bg-white max-[900px]:border-b !py-0 z-[999]'>
        <div className='flex items-center justify-between h-[50px]'>
          <div className='flex items-center gap-x-2'>
            {open ? (
              <div
                className='cursor-pointer  min-[900px]:hidden '
                onClick={hanleOpenMenu}
              >
                <IconClose size={20} />
              </div>
            ) : (
              <div
                className='cursor-pointer  min-[900px]:hidden '
                onClick={hanleOpenMenu}
              >
                <IConBar size={20} />
              </div>
            )}
            <ul className='flex items-center gap-x-5 max-md:hidden'>
              <li>
                <Link href='#'>Quà tết</Link>
              </li>
              <li>
                <Link href='#'>Cqmart Food & Wine</Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-x-3'>
            <div className='relative p-1 border border-black rounded-sm flex items-center'>
              <input
                placeholder='Tìm kiếm sản phẩm'
                className='outline-none placeholder-gray-500 placeholder:text-sm text-gray-500 text-sm'
              />
              <span>
                <IConSearch size={16} color='white' />
              </span>
            </div>
            <Link href='/gio-hang' className='flex items-center'>
              <IConCart size={20} color='white' />
              <span className='text-red-500'>({quantity})</span>
            </Link>
          </div>
        </div>
      </MainSection>
      <MainSection className='border-y max-[900px]:mt-[49px]'>
        <nav className='relative w-full h-auto'>
          <div className='grid grid-cols-12 place-items-center gap-[30px]'>
            <div className='col-span-3 max-md:col-span-full'>
              <Link href={`/`}>
                <Image
                  src='/logo.png'
                  width={200}
                  height={100}
                  className='w-full h-auto'
                  alt='banh-trung-thu-logo'
                />
              </Link>
            </div>
            <div className='col-span-6 max-md:col-span-full'>
              <Image
                src={distributorNav}
                alt='nha-cung-cap-banh-trung-thu'
                width={distributorNav.width}
                height={distributorNav.height}
                className='w-full h-auto'
              />
            </div>
            <div className='col-span-3 max-md:hidden'>
              <p className='flex items-center gap-x-2'>
                <span>
                  <IconPhone size={16} />
                </span>
                <Link href='#'>0123456789</Link>
                <Link href='#'>0123456789</Link>
              </p>
              <p className='flex items-center gap-x-2 text-green-700'>
                <span>
                  <IConEmail size={16} />
                </span>
                <Link href='#'>kinhdoanh@cqmart.vn</Link>
              </p>
            </div>
          </div>
        </nav>
      </MainSection>
      <MainSection
        className={`${
          open
            ? 'fixed top-[51px] left-0 w-full h-screen bg-white'
            : 'max-[900px]:fixed max-[900px]:top-[51px] w-full max-[900px]:-left-full max-[900px]:h-screen bg-white'
        } duration-500 !py-0 z-[999]`}
      >
        <div>
          <ul className='flex flex-wrap min-[900px]:items-center'>
            <li className='relative group max-[900px]:basis-1/2'>
              <Link
                href={`/san-pham`}
                className='flex px-[14px] py-3 hover:text-red-500 max-[900px]:font-semibold'
                onClick={() => handleCloseMenu()}
              >
                Sản phẩm
              </Link>
              <ul className='min-[900px]:absolute min-[900px]:hidden min-[900px]:group-hover:block top-full left-0 min-w-[220px] min-[900px]:bg-white min-[900px]:shadow-contact duration-500'>
                <li className='p-1 pl-4' onClick={handleCloseMenu}>
                  <Link href='/san-pham?type=givral' className='capitalize hover:text-red-500'>
                    Bánh trung thu girval
                  </Link>
                </li>
                <li className='p-1 pl-4' onClick={handleCloseMenu}>
                  <Link href='/san-pham?type=brodard' className='capitalize hover:text-red-500'>
                    Bánh trung thu brodard
                  </Link>
                </li>
              </ul>
            </li>
            <li className='max-[900px]:basis-1/2'>
              <Link
                href={`/combo`}
                className='flex px-[14px] py-3 max-[900px]:font-semibold'
                onClick={() => handleCloseMenu()}
              >
                Combo 2024
              </Link>
            </li>
            <li className='max-[900px]:basis-1/2'>
              <Link
                href={`#`}
                className='flex px-[14px] py-3 max-[900px]:font-semibold'
                onClick={() => handleCloseMenu()}
              >
                Bảng giá
              </Link>
            </li>
            <li className='max-[900px]:basis-1/2'>
              <Link
                href={`/gioi-thieu`}
                className='flex px-[14px] py-3 max-[900px]:font-semibold'
                onClick={() => handleCloseMenu()}
              >
                Giới thiệu
              </Link>
            </li>
            <li className='max-[900px]:basis-1/2'>
              <Link
                href={`/lien-he`}
                className='flex px-[14px] py-3 max-[900px]:font-semibold'
                onClick={() => handleCloseMenu()}
              >
                Liên hệ
              </Link>
            </li>
            <li className='max-[900px]:basis-1/2'>
              <Link
                href={`/gio-hang`}
                className='flex px-[14px] py-3 max-[900px]:font-semibold'
                onClick={() => handleCloseMenu()}
              >
                Giỏ hàng
              </Link>
            </li>
          </ul>
        </div>
      </MainSection>
    </>
  )
}
