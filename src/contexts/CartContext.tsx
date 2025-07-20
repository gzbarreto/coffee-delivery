import { createContext, ReactNode, useReducer } from "react"
import {
  CoffeeOrder,
  Coffee,
  Address,
  cartReducer,
} from "../reducers/cart/reducer"
import { updateCartAction } from "../reducers/cart/actions"

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  coffeeList?: CoffeeOrder[]
  address?: Address
  paymentMethod?: string
  deliveryFee?: number
  updateCart: (coffee: Coffee, quantity: number) => void
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
  function updateCart(coffee: Coffee, quantity: number) {
    dispatch(updateCartAction(coffee, quantity))
  }

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        deliveryFee,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
