import { createContext, ReactNode, useReducer } from "react"
import {
  CoffeeOrder,
  Coffee,
  Address,
  cartReducer,
} from "../reducers/cart/reducer"
import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction,
} from "../reducers/cart/actions"

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  coffeeList?: CoffeeOrder[]
  address?: Address
  paymentMethod?: string
  deliveryFee?: number
  addToCart: (coffee: Coffee, quantity: number) => void
  updateCart: (id: number, newQuantity: number) => void
  removeFromCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)
export function CartContextProvider({ children }: CartContextProviderProps) {
  //initialize empty cart state
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffeeList: [],
    address: undefined,
    paymentMethod: "Cartão de Crédito",
    deliveryFee: 5.0, // Default delivery fee
  })

  const { coffeeList, deliveryFee } = cartState

  // Function to update the cart when user adds a coffee
  function addToCart(coffee: Coffee, quantity: number) {
    dispatch(addToCartAction(coffee, quantity))
  }

  function updateCart(id: number, newQuantity: number) {
    dispatch(updateCartAction(id, newQuantity))
  }

  function removeFromCart(id: number) {
    dispatch(removeFromCartAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        deliveryFee,
        addToCart,
        updateCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
