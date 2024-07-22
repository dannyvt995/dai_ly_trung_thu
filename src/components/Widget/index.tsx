import React from 'react'
import BackToTop from './BackToTop'

export default function Widget() {
  return (
    <section>
      <div className='fixed bottom-[2px] left-2 w-fit bg-white shadow-contact p-2 rounded-lg border border-gray-300'>
        <p>
          <a>SDT 0909090990</a>
        </p>
        <p>
          <a>Zalo 09090990</a>
        </p>
      </div>
      <BackToTop />
    </section>
  )
}
