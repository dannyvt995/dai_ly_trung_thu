import Image from 'next/image'
import Link from 'next/link'

export default function BannerPage() {
  return (
    <section className='bg-white'>
      <div className=''>
        <Image
          src='/banner.png'
          alt='banner'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className='md:h-[300px] max-md:py-10 relative'>
        {/* bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  */}
        <div className='md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-[40%] flex flex-wrap items-center justify-center gap-x-10'>
          <div className=''>
            <div className='size-[265px] border-4 border-white rounded-full overflow-hidden shadow-circle-cake hover:-translate-y-[10px] duration-300'>
              <Link
                href={'/san-pham/brodard'}
                className='flex items-center justify-center'
              >
                <Image
                  src='/intro.png'
                  alt='banner'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </div>
            <h3 className='uppercase text-xl text-center mt-5 mb-[10px]'>
              BÁNH TRUNG THU GIVRAL
            </h3>
          </div>
          <div className=''>
            <div className='size-[265px] border-4 border-white rounded-full overflow-hidden shadow-circle-cake hover:-translate-y-[10px] duration-300'>
              <Link
                href={'/san-pham/givral'}
                className='flex items-center justify-center'
              >
                <Image
                  src='/item_combo.jpg'
                  alt='banner'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '100%', height: '100%' }}
                />
              </Link>
            </div>
            <h3 className='uppercase text-xl text-center mt-5 mb-[10px]'>
              BÁNH TRUNG THU brodard
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
