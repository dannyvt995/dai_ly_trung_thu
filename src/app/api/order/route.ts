import { mailOptions, transporter } from '@/config/config.nodemailer'

const CONTACT_MESSAGE_FIELDS = {
  fullName: 'Họ và tên',
  email: 'Email',
  phone: 'Số điện thoại',
  content: 'Nội dung',
  typeService: 'Loại dịch vụ'
}

const generateEmailContent = (data: string) => {
  return {
    text: data
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    await transporter.sendMail({
      from: mailOptions.from,
      to: body.order.email,
      ...generateEmailContent(JSON.stringify(body.data)),
      subject: 'Tư vấn bánh trung thu'
    })
  
    return Response.json({
      message: 'Mua thành cồng'
    })
  } catch(e) {
    console.log('Da co loi')
  }
}
