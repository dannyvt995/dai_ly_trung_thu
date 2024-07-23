import Link from 'next/link'

const SidebarProduct = () => {
  const lists = [
    {
      text: 'Bánh Trung Thu Givral',
      href: '#'
    },
    {
      text: 'Bánh Trung Thu Brodard',
      href: '#'
    }
  ]
  return (
    <div className='col-span-3 max-lg:col-span-full bg-white h-fit'>
      <div className='border-l-4 border-[#f3650e] bg-[#444444]'>
        <h4 className='text-center py-5 text-white uppercase'>Thương hiệu</h4>
      </div>
      <div className='p-[10px]'>
        <ul>
          {lists.map((item, index) => (
            <li key={index} className='last:border-none border-b border-dashed border-[#c9c9c9]'>
              <Link href={item.href} className='block text-lg py-[10px] px-[15px] hover:text-red-500'>
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
