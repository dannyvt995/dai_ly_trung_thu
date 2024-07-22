import Link from 'next/link'
import ImageLoad from '../ImageLoad'
import MainSection from '../commons/MainSection'

export default function Intro() {
  return (
    <MainSection className='py-16 px-[15px]'>
      <div className='grid grid-cols-12 gap-[30px]'>
        <div className='col-span-6 max-md:col-span-full'>
          <Link href={'/gioi-thieu'}>
            <ImageLoad src='/intro.png' alt='hi' />
          </Link>
        </div>
        <div className='col-span-6 max-md:col-span-full'>
          <h3 className='font-medium uppercase'>BÁNH TRUNG THU CQ MART</h3>
          <p className='my-2'>
            <span className='text-blue-400'>Bánh trung thu CQ Mart</span> xin
            chân thành cảm ơn sự ủng hộ và tín nhiệm của quý khách trong suốt 10
            năm qua. Một mùa trung thu nữa lại về, thay mặt toàn thể nhân viên
            công ty xin kính chúc quý khách hàng có một mùa trung thu đầm ấm và
            hạnh phúc.{' '}
          </p>{' '}
          <p className='my-2'>
            Bánh trung thu CQ Mart là đơn vị phân phối bánh trung thu hàng đầu
            tại TP HCM, là nhà phân phối trực tiếp cấp 1 của các hãng bánh danh
            tiếng hiện nay: Givral, Brodard, Kinh Đô, Như Lan, Bibica, Taithong,
            Casahana. Cty chúng tôi chuyên cung cấp Bánh Trung Thu cho công ty,
            xí nghiệp và đại lý bán lẻ với chất lượng đảm bảo, giá cả cạnh tranh
            nhất. Quý Khách hàng có thể tham khảo nhiều nơi, nhưng hãy liên hệ
            với chúng tôi để được trải nghiệm dịch vụ{' '}
            <span className='text-red-400'>
              4 NHẤT: SẢN PHẨM TỐT NHẤT, GIÁ TỐT NHẤT, GIAO HÀNG NHANH NHẤT,
              DỊCH VỤ TỐT NHẤT.
            </span>
          </p>
          <p className='mt-5'>
            <Link
              href={'/san-pham'}
              className='bg-[#007bff] text-white py-3 px-4 text-lg rounded-md'
            >
              Xem thêm
            </Link>
          </p>
        </div>
      </div>
    </MainSection>
  )
}
