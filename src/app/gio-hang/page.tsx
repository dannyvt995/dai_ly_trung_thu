'use client'
import MainSection from '@/components/commons/MainSection'
import Link from 'next/link'
import BreadCrumb from '@/components/commons/BreadCrumb'
import useCartStore from '@/stores/cart.store'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Modal from '@/components/commons/Modal'
import CartProduct from '@/components/commons/CartProduct'

const ProductManager = () => {
  const [showModal, setShowModal] = useState(false)
  const [orderInfo, setOrderInfo] = useState({
    email: '',
    phone: '',
    fullName: '',
    address: '',
    notes: ''
  })

  const {
    cartItems,
    quantity,
    order
  } = useCartStore()

  const handleOrder = async (e: any) => {
    e.preventDefault()
    try {
      if (cartItems) {
        const payload = {
          order: orderInfo,
          data: cartItems
        }
        const promise = await fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }).then((response) => {
          if (!response.ok) {
            throw new Error('Có lỗi xày ra, vui lòng thử lại')
          }
          return response
        })
        order()
        toast.success('Đặt hàng thành cồng')
        return
      }
      toast.error('Không có đơn hàng')
    } catch (e) {
      console.log(e)
    } finally {
      setShowModal(false)
    }
  }

  const breadCrumb = [
    {
      text: 'Giỏ hàng',
      href: '/san-pham'
    }
  ]

  return (
    <>
      <BreadCrumb breadCrumb={breadCrumb} />
      <MainSection bgColor='bg-white'>
        {cartItems.length ? (
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-8 max-lg:col-span-full'>
              {cartItems?.map((item, index) => (
                <CartProduct item={item} key={index} />
              ))}
            </div>
            <div className='col-span-4 max-lg:col-span-full p-3 border shadow-contact rounded-lg h-fit'>
              <p className='pb-3 font-medium'>Thông tin đơn hàng</p>
              <p className='pb-3'>
                Số lượng sản phẩm:{' '}
                <span className='font-medium'>{quantity}</span>
              </p>
              <p className='pb-3'>
                Thành tiền: <span className='font-medium'>100 đ</span>
              </p>
              <hr className='bg-black' />
              <button
                className='w-full bg-[#007bff] hover:bg-[#0056b3] py-2 mt-3 text-white rounded-md'
                onClick={() => setShowModal(true)}
              >
                Đặt hàng
              </button>
              <Link
                href='/combo'
                className='block w-full border border-[#17a2b8] text-[#17a2b8] py-2 mt-3 text-center rounded-md'
              >
                Tiếp tục mua hàng
              </Link>
            </div>
          </div>
        ) : (
          <p>Giỏ hàng rỗng</p>
        )}
      </MainSection>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h3 className='text-xl font-medium mb-3'>Thông tin đặt hàng</h3>
        <form className='flex flex-col gap-2' onSubmit={handleOrder}>
          <div className=''>
            <label>Họ và tên</label>
            <input
              type='text'
              className='block w-full mt-2 outline-none border rounded-md p-2'
              value={orderInfo.fullName}
              onChange={(e) =>
                setOrderInfo((prev) => ({
                  ...prev,
                  fullName: e.target.value
                }))
              }
              placeholder='Nhập họ và tên'
              required
            />
          </div>
          <div className=''>
            <label>Email</label>
            <input
              type='email'
              className='block w-full mt-2 outline-none border rounded-md p-2'
              value={orderInfo.email}
              onChange={(e) =>
                setOrderInfo((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }
              placeholder='Nhập địa chỉ email'
              required
            />
          </div>
          <div className=''>
            <label>Số điện thoại</label>
            <input
              type='phone'
              className='block w-full mt-2 outline-none border rounded-md p-2'
              value={orderInfo.phone}
              onChange={(e) =>
                setOrderInfo((prev) => ({
                  ...prev,
                  phone: e.target.value
                }))
              }
              placeholder='Nhập địa chỉ email'
              required
            />
          </div>
          <div className=''>
            <label>Địa chỉ</label>
            <input
              type='address'
              className='block w-full mt-2 outline-none border rounded-md p-2'
              value={orderInfo.address}
              onChange={(e) =>
                setOrderInfo((prev) => ({
                  ...prev,
                  address: e.target.value
                }))
              }
              placeholder='Nhập địa chỉ email'
              required
            />
          </div>
          <div className=''>
            <label>Ghi chú</label>
            <input
              type='text'
              className='block w-full mt-2 outline-none border rounded-md p-2'
              value={orderInfo.notes}
              onChange={(e) =>
                setOrderInfo((prev) => ({
                  ...prev,
                  notes: e.target.value
                }))
              }
              placeholder='Nhập địa chỉ email'
              required
            />
          </div>
          <div>
            <button
              className='text-white bg-[#007bff] p-2 rounded-md'
              type='submit'
            >
              Hoàn tất đơn hàng
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default ProductManager
