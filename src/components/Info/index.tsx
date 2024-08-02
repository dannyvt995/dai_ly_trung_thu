import Image from 'next/image'
import MainSection from '../commons/MainSection'
import { emailInfo, locationInfo, phoneInfo } from '../../../public/icon'

export default function Info() {
  return (
    <MainSection className='py-11 text-white' bgColor='bg-mid-autumn-festival'>
      <div className='grid grid-cols-12 gap-[30px]'>
        <div className='col-span-4 max-md:col-span-full flex items-center gap-x-5'>
          <div className='w-[40px] h-[40px] bg-orange-500 rounded-full flex items-center justify-center'>
            <Image
              src={locationInfo}
              alt='vị-trí-cua-hang-banh'
              width={locationInfo.width}
              height={locationInfo.height}
            />
          </div>
          <p className='flex-1 text-sm'>
            Địa chỉ: 59 Nguyễn Khắc Nhu, P.Cô Giang, Quận 1, TP.HCM
          </p>
        </div>
        <div className='col-span-4 max-md:col-span-full flex items-center gap-x-5'>
          <div className='w-[40px] h-[40px] bg-orange-500 rounded-full flex items-center justify-center'>
            <Image
              src={emailInfo}
              alt='dia-chi-email'
              width={emailInfo.width}
              height={emailInfo.height}
            />
          </div>
          <p className='flex-1 text-sm'>Email: kinhdoanh@cqmart.vn</p>
        </div>
        <div className='col-span-4 max-md:col-span-full  flex items-center gap-x-5'>
          <div className='w-[40px] h-[40px] bg-orange-500 rounded-full flex items-center justify-center'>
            <Image
              src={phoneInfo}
              alt='vị-trí-cua-hang-banh'
              width={phoneInfo.width}
              height={phoneInfo.height}
            />
          </div>
          <p className='flex-1 text-sm'>Hotline: 0906309885</p>
        </div>
      </div>
    </MainSection>
  )
}
