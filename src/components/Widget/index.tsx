import React from 'react'
import BackToTop from './BackToTop'
import IconPhone from '../icons/IconPhone'
import IconZalo from '../icons/IconZalo'
import { FaPhone } from 'react-icons/fa'

export default function Widget() {
  return (
    <section>
      <div className='fixed bottom-[2px] left-2 w-fit bg-white shadow-contact p-2 rounded-lg border border-gray-300'>
        <p className='flex items-center gap-x-2 text-sm font-light'>
          <span className='w-[20px]'>
            <FaPhone className='text-blue-500 rotate-90' size={18}/>
          </span>
          <a>0909090990</a>
        </p>
        <p className='flex items-center gap-x-2 text-sm uppercase font-light'>
          <span className='w-[20px]'>
            <IconZalo size={30} />
          </span>
          <a>Chat Zalo</a>
        </p>
      </div>
      <BackToTop />
    </section>
  )
}
