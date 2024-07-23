import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from './counter-store'
import { toast } from 'react-toastify'

interface CartState {
  quantity: number
  cartItems: Product[]
  addProduct: (item: Product) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  removeItemFromCart: (productId: number) => void
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
            cartItems: [
              ...get().cartItems,
              { ...item, quantity: (get().quantity += 1) }
            ],
            quantity: get().quantity++
          })
        }

        toast.success('Thêm vào giỏ hàng thành công')
      },

      increaseQuantity: (productId) => {},
      decreaseQuantity: (productId) => {},

      removeItemFromCart: (productId) => {}
    }),
    {
      name: 'cart-cake-moon'
    }
  )
)

export default useCartStore
