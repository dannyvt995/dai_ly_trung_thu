import ProductDetail from '@/components/commons/ProductDetail'
import IconFacebook from '@/components/icons/IconFacebook'
import data from '@/data/fake.api.json'
import Image from 'next/image'
import Link from 'next/link'

interface IParams {
  slug: string
}

const getProductId = (_id: string | undefined) => {
  if (_id) {
    return data.products.find((item) => item.id === parseInt(_id))
  } else {
    throw new Error('Không tìm thấy sản phẩm')
  }
}

export default function BrandDetail({ params }: { params: IParams }) {
  const { slug } = params
  let id = slug.split('-').pop()
  const data = getProductId(id)

  return (
    <>
      {data ? (
        <div className='p-4 bg-white rounded-md'>
          <h1 className='text-4xl mb-2'>{data?.name}</h1>
          <p>
            Thương hiệu:{' '}
            <span className='text-[#f3650e]'>
              Bánh trung thu {data?.type === 'girval' ? 'Girval' : 'Brodard'}
            </span>{' '}
          </p>
          <div className='grid grid-cols-12 gap-5 mt-4'>
            <div className='col-span-6 max-md:col-span-full'>
              <div className='w-[397px] h-[267px]'>
                <Image
                  src={data?.img}
                  alt={data?.name}
                  width={0}
                  height={0}
                  sizes='100%'
                  className='w-full h-full'
                />
              </div>
            </div>
            <div className='col-span-6 max-md:col-span-full'>
              <div>
                <h4 className='mb-2 text-xl'>Thông tin sản phẩm</h4>
                <p>{data?.name} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla unde magnam maiores officia placeat necessitatibus tenetur ducimus odio asperiores, atque delectus omnis sit, ipsam repellendus ipsum provident ea, iusto doloribus.</p>
              </div>
              <div className='mt-7 pt-5 pb-[10px] border-y border-dashed border-gray-300'>
                <p>
                  Giá:{' '}
                  <Link href='#' className='text-[#f3650e] font-medium'>
                    Liên hệ
                  </Link>
                </p>
              </div>
              <div className='pt-5 pb-[10px]'>
                <p className='flex'>
                  Chia sẻ:{' '}
                  <Link href='#' className=''>
                    <IconFacebook color='blue' size={24} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <ProductDetail />
        </div>
      ) : (
        <p>Không tìm thấy sản phẩm</p>
      )}
    </>
  )
}
