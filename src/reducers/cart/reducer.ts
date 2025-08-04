import { Actions } from "./actions"

export interface Coffee {
  id: number
  title: string
  description?: string
  price: number
  tags?: string[] | undefined
  srcImg: string
}

export interface CoffeeOrder {
  coffee: Coffee
  quantity: number
}

export interface Address {
  cep: string
  street: string
  number: number
  complement?: string
  district: string
  city: string
  state: string
}

interface CartState {
  coffeeList: CoffeeOrder[]
  address?: Address
  paymentMethod?: string
  deliveryFee?: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case Actions.ADD_TO_CART: {
      const exists = state.coffeeList.some(
        (item) => item.coffee.id === action.payload.coffee.id
      )

      let updatedCoffeeList
      if (exists) {
        updatedCoffeeList = state.coffeeList.map((item) =>
          item.coffee.id === action.payload.coffee.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        updatedCoffeeList = [
          ...state.coffeeList,
          { coffee: action.payload.coffee, quantity: action.payload.quantity },
        ]
      }

      return {
        ...state,
        coffeeList: updatedCoffeeList,
      }
    }

    case Actions.UPDATE_CART: {
      const updatedCoffeeList = state.coffeeList.map((item) =>
        item.coffee.id === action.payload.id
          ? { ...item, quantity: action.payload.newQuantity }
          : item
      )
      return {
        ...state,
        coffeeList: updatedCoffeeList,
      }
    }

    default:
      return state
  }
}
