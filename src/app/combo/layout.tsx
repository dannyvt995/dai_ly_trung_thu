import BreadCrumb from '@/components/commons/BreadCrumb'
import MainSection from '@/components/commons/MainSection'
import SidebarCombo from '@/components/commons/SidebarCombo'
import SidebarProduct from '@/components/commons/SidebarProduct'
import { ReactNode } from 'react'

const ComboLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  const breadCrumb = [
    {
      text: 'Combo',
      href: '/san-pham'
    }
  ]

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />

      <MainSection bgColor='bg-slate-100'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <SidebarCombo/>
          <div className='col-span-12 max-lg:col-span-full rounded-md'>{children}</div>
        </div>
      </MainSection>
    </>
  )
}

export default ComboLayout
