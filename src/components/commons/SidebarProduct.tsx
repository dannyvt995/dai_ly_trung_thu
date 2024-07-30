import Link from 'next/link'

const SidebarProduct = () => {
  const lists = [
    {
      text: 'Bánh Trung Thu Givral',
      href: '/san-pham?type=givral'
    },
    {
      text: 'Bánh Trung Thu Brodard',
      href: '/san-pham?type=brodard'
    }
  ]
  return (
    <div className='col-start-4  col-end-10 max-lg:col-span-full bg-white h-fit'>
      <div className='border-t-4 border-[#f3650e] bg-[#444444]'>
        <h4 className='text-center py-5 text-white uppercase'>Thương hiệu</h4>
      </div>
      <div className='p-[10px]'>
        <ul className='flex'>
          {lists.map((item, index) => (
            <li
              key={index}
              className='w-6/12 last:border-none border-r border-dashed border-[#c9c9c9]'
            >
              <Link
                href={item.href}
                className='text-center block text-lg py-[10px] px-[15px] hover:text-red-500'
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SidebarProduct
