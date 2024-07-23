import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-white py-10 px-[15px] w-full max-md:pb-20'>
      <div className='min-[1200px]:max-w-screen-container-custom mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-3 max-[1200px]:col-span-5 max-md:col-span-full'>
            <h3 className='text-xl mb-3 max-md:font-medium'>Liên hệ</h3>
            <ul className='flex flex-col gap-2'>
              <li>Công ty: TNHH Đầu Tư Thương Mại Dịch Vụ TVA</li>
              <li>Địa chỉ: 59 Nguyễn Khắc Nhu, P.Cô Giang, Quận 1, TP.HCM</li>
              <li>Điện thoại: 0906309885 - 0933138885</li>
              <li>Email: kinhdoanh@cqmart.vn</li>
            </ul>
          </div>
          <div className='col-span-3 max-[1200px]:col-span-2 max-md:col-span-full'>
            <h3 className='text-xl mb-3 max-md:font-medium'>Sản phẩm</h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href={'/san-pham/banh-tu-chon-givral'}>
                  Bánh Trung Thu Givral
                </Link>
              </li>
              <li>
                <Link href={'/san-pham/banh-tu-chon-brodard'}>
                  Bánh Trung Thu Brodard
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-3 max-[1200px]:col-span-2 max-md:col-span-full'>
            <h3 className='text-xl mb-3 max-md:font-medium'>Trợ giúp</h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href={'/lien-he'}>Liên hệ</Link>
              </li>
              <li>
                <Link href={'/gioi-thieu'}>Giới thiệu</Link>
              </li>
              <li>
                <a>Thanh toán</a>
              </li>
              <li>
                <a>Giao hàng</a>
              </li>
              <li>
                <a>Bảo hành / Đổi trả hàng</a>
              </li>
              <li>
                <a>Điều kiện sử dụng</a>
              </li>
              <li>
                <a>Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
          <div className='col-span-3 max-[1200px]:col-span-2 max-md:col-span-full'>
            <h3 className='text-xl mb-3 max-md:font-medium'>Fanpage</h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href={'/lien-he'}>Bánh trung thu</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
