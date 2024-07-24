import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from './counter-store'
import { toast } from 'react-toastify'

interface CartState {
  quantity: number
  cartItems: Product[]
  addProduct: (item: Product) => void
  increaseQuantity: (id: number, type: string) => void
  decreaseQuantity: (id: number, type: string) => void
  removeItemFromCart: (id: number, type: string) => void
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      quantity: 0,
      cartItems: [],
      addProduct: (item) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === item.id && cartItem.type === item.type
        )

        if (itemExists) {
          if (typeof itemExists.quantity === 'number') {
            itemExists.quantity++
          }

          set({
            cartItems: [...get().cartItems],
            quantity: (get().quantity += 1)
          })
        } else {
          set({
            cartItems: [...get().cartItems, { ...item, quantity: 1 }],
            quantity: (get().quantity += 1)
          })
        }

        toast.success('Thêm vào giỏ hàng thành công')
      },
      increaseQuantity: (id: number, type: string) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id && cartItem.type === type
        )

        if (itemExists) {
          if (typeof itemExists.quantity === 'number') {
            itemExists.quantity++
          }

          set({
            cartItems: [...get().cartItems],
            quantity: (get().quantity += 1)
          })
        }
      },
      decreaseQuantity: (id: number, type: string) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id && cartItem.type === type
        )

        if (itemExists) {
          if (itemExists.quantity === 1) {
            const updatedCartItems = get().cartItems.filter(
              (item) => item.id !== id && item.type !== type
            )
            set({
              cartItems: updatedCartItems,
              quantity: (get().quantity -= 1)
            })
          } else {
            itemExists.quantity--
            set({
              cartItems: [...get().cartItems],
              quantity: (get().quantity -= 1)
            })
          }
        }
      },
      removeItemFromCart: (id: number, type: string) => {}
    }),
    {
      name: 'cart-cake-moon'
    }
  )
)

export default useCartStore
