import BreadCrumb from '@/components/commons/BreadCrumb'
import MainSection from '@/components/commons/MainSection'
import SidebarProduct from '@/components/commons/SidebarProduct'
import { ReactNode } from 'react'

const ProductLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  const breadCrumb = [
    {
      text: 'Sản phẩm',
      href: '/san-pham'
    }
  ]

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />

      <MainSection bgColor='bg-slate-100'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <SidebarProduct />
          <div className='col-span-12 max-lg:col-span-full rounded-md'>{children}</div>
        </div>
      </MainSection>
    </>
  )
}

export default ProductLayout
