'use client'
import MainSection from '@/components/commons/MainSection'
import Link from 'next/link'
import BreadCrumb from '@/components/commons/BreadCrumb'
import useCartStore from '@/stores/cart.store'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Modal from '@/components/commons/Modal'

const ProductManager = () => {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
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
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
    order
  } = useCartStore()

  const handleIncreaseQuantity = (id: number) => {
    increaseQuantity(id)
  }

  const handleDecreaseQuantity = (id: number) => {
    decreaseQuantity(id)
  }

  const handleDelete = (id: number) => {
    removeItemFromCart(id)
  }

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
        setEmail('')
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
                  <div
                    className='grid grid-cols-12 gap-[15px] p-3 shadow-contact rounded-lg mb-3 border'
                    key={item.id}
                  >
                    <div className='col-span-3'>
                      <div className='w-[150px] h-[150px] border bg-gray-200'>
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={0}
                          height={0}
                          sizes='100%'
                          className='w-full h-full'
                        />
                      </div>
                    </div>
                    <div className='col-span-9'>
                      <div>
                        <div className='flex flex-wrap max-md:flex max-md:flex-col max-md:gap-y-2'>
                          <p className='basis-1/2 max-md:basis-full md:pr-2'>
                            {item.name}
                          </p>
                          <div className='flex items-center basis-1/4 max-md:basis-full'>
                            <button
                              className='size-[30px] text-center font-medium border'
                              onClick={() => handleDecreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <div
                              className='size-[30px] flex items-center justify-center font-medium outline-none bg-gray-300'
                              defaultValue={1}
                            >
                              {item.quantity}
                            </div>
                            <button
                              className='size-[30px] text-center font-medium border'
                              onClick={() => handleIncreaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <div className='flex items-center basis-1/4 max-md:basis-full'>
                            <p>
                              {(item.quantity * item.price)?.toLocaleString()} đ
                            </p>
                          </div>
                        </div>
                        <button
                          className='mt-3 hover:text-[#fd7e14]'
                          onClick={() => handleDelete(item.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='col-span-4 max-lg:col-span-full p-3 border shadow-contact rounded-lg h-fit'>
                <p className='pb-3 font-medium'>Thông tin đơn hàng</p>
                <p className='pb-3'>
                  Số lượng sản phẩm:{' '}
                  <span className='font-medium'>{quantity}</span>
                </p>
                <p className='pb-3'>
                  Thành tiền:{' '}
                  <span className='font-medium'>
                    {cartItems
                      ?.reduce(
                        (accumulator, currentValue) =>
                          accumulator +
                          currentValue.price * currentValue.quantity,
                        0
                      )
                      ?.toLocaleString()}{' '}
                    đ
                  </span>
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
          ): (
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
