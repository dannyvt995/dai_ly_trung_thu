import RelatedCombo from '@/components/RelatedCombo';
import RelatedSingle from '@/components/RelatedSingle';
import Link from 'next/link';
import React from 'react'

interface IParams {
    slug: string;
}
export default function BrandDetail({ params }: { params: IParams }) {
  const { slug } = params;

  if(slug === 'givral') {
    return (
        <main>
 
          <div>
          BÁNH TRUNG THU GIVRAL 2024
          Givral Bakery là một thương hiệu bánh nổi tiếng ở Sài Gòn, đã được hình thành và ghi dấu ấn trong lòng người Sài Gòn hơn 60 năm qua. Những sản phẩm của Givral chịu nhiều ảnh hưởng của tinh hoa văn hóa ẩm thực Pháp nên những sản phẫm làm ra thường mang những nét thanh tao, tinh tế và sang trọng. Givral Bakery cam kết không sử dụng chất bảo quản, phụ gia độc hại cho sức khỏe của người sử dụng, nên nói đến bánh của Givral Bakery người ta nghĩ ngay đến những chiếc bánh tươi thơm ngon, bổ dưỡng.
          Đặt Bánh trung thu Givral 2024 tại Bánh trung thu CQ MART, quý khách hàng sẽ được trải nghiệm dịch vụ 4 NHẤT:

            1.Sản phẩm tốt nhất: Bánh mới sản xuất với hạn sử dụng luôn đảm bảo tốt nhất, chính hãng, đảm bảo chất lượng 100%.

            2.Giá tốt nhất: Là nhà phân phối chính thức, cấp 1 của Givral Bakery nên chúng tôi luôn cam kết có chính sách giá và chiết khấu bán hàng tốt nhất cho khách hàng. Quý khách đặt số lượng càng nhiều, chiết khấu càng cao.

            3.Giao hàng nhanh nhất: Dịch vụ giao hàng nhanh, đúng hẹn, miễn phí, hỗ trợ đi tỉnh.

            4.Dịch vụ tốt nhất: Tư vấn nhiệt tình, miễn phí. Xuất hóa đơn VAT theo yêu cầu. Hỗ trợ In logo miễn phí lên hộp bánh, túi xách. Quà tặng hấp dẫn cho người liên hệ đặt hàng.
          </div>
          <div className='container'>
            <RelatedCombo slug={slug as any}/>
            <RelatedSingle slug={slug  as any}/>
          </div>
        </main>
      )
  }else if(slug === 'brodard') {
    return (
        <main>

          <div>
          BÁNH TRUNG THU BRODARD 2024
          Brodard đã gắn bó với mảnh đất Sài Thành tròn 7 thập kỷ với biết bao tâm tư – tình cảm & nhiệt huyết mong muốn mang đến vị ngọt cho cuộc sống vẹn tròn. Không những mang đến thế giới bánh ngọt “vị Tây – đậm chất Việt” mà trong suốt bao mùa trăng, các nghệ nhân Bánh Brodard đã không ngừng trao hết tâm tư tình cảm của mình vào từng chiếc bánh “trông trăng” như thay lời tri ân chân thanh gửi đến tất cả những ai “đã và đang yêu thương Brodard”
          Đặt Bánh trung thu Brodard 2024 tại Bánh trung thu CQ MART, quý khách hàng sẽ được trải nghiệm dịch vụ 4 NHẤT:

          1.Sản phẩm tốt nhất: Bánh mới sản xuất với hạn sử dụng luôn đảm bảo tốt nhất, chính hãng, đảm bảo chất lượng 100%, trực tiếp xuất xưởng từ nhà máy tới khách hàng.​

          2.Giá tốt nhất: Là nhà phân phối chính thức của các Hãng bánh nổi tiếng, không qua trung gian, nên chúng tôi luôn cam kết có chính sách giá và chiết khấu bán hàng tốt nhất cho khách hàng. Quý khách đặt số lượng càng nhiều, chiết khấu càng cao.

          3.Giao hàng nhanh nhất: Chúng tôi có dịch vụ giao hàng nhanh, đúng hẹn, miễn phí. Ngoài ra hỗ trợ giao hàng tân nơi tới các tỉnh, thành lân cận TP HCM.

          4.Dịch vụ tốt nhất: Tư vấn nhiệt tình, miễn phí. Xuất hóa đơn VAT theo yêu cầu. Hỗ trợ In logo doanh nghiệp miễn phí lên hộp bánh, túi xách. Quà tặng hấp dẫn cho người liên hệ đặt hàng.

          </div>
          <div className='container'>
            <RelatedCombo slug={slug  as any}/>
            <RelatedSingle slug={slug  as any}/>
          </div>
        </main>
      )
  }else{
    return (
        <main>
          Some err on slug san-pham
        </main>
      )
  }
  
}
