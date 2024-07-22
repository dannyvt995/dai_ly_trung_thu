'use client'

import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showBtn && window.scrollY > 400) {
        setShowBtn(true)
      } else if (showBtn && window.scrollY <= 400) {
        setShowBtn(false)
      }
    }
    window.addEventListener('scroll', checkScrollHeight)
    return () => {
      window.removeEventListener('scroll', checkScrollHeight)
    }
  }, [showBtn])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      className={`${
        showBtn ? 'flex' : 'hidden'
      } fixed bottom-4 right-4 w-[50px] h-[50px] items-center justify-center bg-green-900 rounded-md shadow-md cursor-pointer text-white text-3xl`}
      onClick={scrollToTop}
    >
      ^
    </button>
  )
}

export default BackToTop
