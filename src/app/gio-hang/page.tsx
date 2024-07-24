'use client'
import MainSection from '@/components/commons/MainSection'
import Link from 'next/link'
import BreadCrumb from '@/components/commons/BreadCrumb'
import useCartStore from '@/stores/cart.store'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'

const ProductManager = () => {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')

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
          email: email,
          data: cartItems
        }
        const promise = fetch('/api/order', {
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
              Số lượng sản phẩm: <span className='font-medium'>{quantity}</span>
            </p>
            <p className='pb-3'>
              Thành tiền:{' '}
              <span className='font-medium'>
                {cartItems
                  ?.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.price * currentValue.quantity,
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
      </MainSection>

      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative my-6 mx-auto w-[800px]'>
              {/*content*/}
              <div className='border-0 w-full rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-2xl font-semibold'>
                    Đồng ý mua hàng không
                  </h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 !text-black'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black h-6 w-6 text-3xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <label>Nhập email</label>
                  <input
                    type='email'
                    className='block mt-2 outline-none border rounded-md p-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Đóng
                  </button>
                  <button
                    className='border px-6 py-2 rounded-md'
                    type='button'
                    onClick={(e) => handleOrder(e)}
                  >
                    Đồng ý
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}

export default ProductManager
