import { mailOptions, transporter } from '@/config/config.nodemailer'
import { Html } from 'next/document'

const CONTACT_MESSAGE_FIELDS = {
  fullName: 'Họ và tên',
  email: 'Email',
  phone: 'Số điện thoại',
  content: 'Nội dung',
  typeService: 'Loại dịch vụ'
}

const generateEmailContent = (data: any) => {
  const tbody = data
    ?.map(
      (item: any, index: number) =>
        `
      <tr>
        <td>
          <p><strong>${index}</strong></p>
        </td>
        <td>
          <p><strong>${item?.id}</strong></p>
        </td>
        <td>
          <p><strong>${item?.name}</strong></p>
        </td>
        <td>
          <p><strong>Liên hệ</strong></p>
        </td>
        <td>
          <p><strong>${item?.quantity}</strong></p>
        </td>
        <td>
          <p></p>
        </td>
        <td>
          <p></p>
        </td>
        </tr>
        `
    )
    .join('')

  return {
    text: 'Đơn hàng',
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      }
  
      td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      }
  
      tr:nth-child(even) {
      background-color: #dddddd;
      }
      </style>
    </head>
    <body>
      <table>
        <thead>
          <tr>
            <td>
              <p><strong>STT</strong></p>
            </td>
            <td>
              <p><strong>Mã hàng</strong></p>
            </td>
            <td>
              <p><strong>Tên hàng hóa</strong></p>
            </td>
            <td>
              <p><strong>Giá tiền</strong></p>
            </td>
            <td>
              <p><strong>Số lượng</strong></p>
            </td>
            <td>
              <p><strong>Trọng lượng</strong> (Gram)</p>
            </td>
            <td>
              <p><strong>Đơn vị tính </strong> (Unit)</p>
            </td>
          </tr>
        </thead>
        <tbody>
          ${tbody}
        </tbody>
      </table>
    </body>
    </html>`
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    await transporter.sendMail({
      from: mailOptions.from,
      to: body.order.email,
      ...generateEmailContent(body.data),
      subject: 'Tư vấn bánh trung thu'
    })

    return Response.json({
      message: 'Mua thành cồng'
    })
  } catch (e) {
    console.log('Da co loi')
  }
}
