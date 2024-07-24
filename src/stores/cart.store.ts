import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from './counter-store'
import { toast } from 'react-toastify'

interface CartState {
  quantity: number
  cartItems: Product[]
  addProduct: (item: Product) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeItemFromCart: (id: number) => void
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      quantity: 0,
      cartItems: [],
      addProduct: (item) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === item.id
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
      increaseQuantity: (id: number) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id
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
      decreaseQuantity: (id: number) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id
        )

        if (itemExists) {
          if (itemExists.quantity === 1) {
            return
          } else {
            itemExists.quantity--
            set({
              cartItems: [...get().cartItems],
              quantity: (get().quantity -= 1)
            })
          }
        }
      },
      removeItemFromCart: (id: number) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === id
        )

        if (itemExists) {
          if (typeof itemExists.quantity === 'number') {
            const updatedCartItems = get().cartItems.filter(
              (item) => item.id !== id
            )
            set({
              cartItems: updatedCartItems,
              quantity: get().quantity - itemExists.quantity
            })
          }
        }
      }
    }),
    {
      name: 'cart-cake-moon'
    }
  )
)

export default useCartStore
