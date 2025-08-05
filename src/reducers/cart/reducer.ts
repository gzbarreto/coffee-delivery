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
  paymentMethod: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro"
  deliveryFee: number
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

    case Actions.REMOVE_FROM_CART: {
      const updatedCoffeeList = state.coffeeList.filter(
        (item) => item.coffee.id !== action.payload.id
      )
      return {
        ...state,
        coffeeList: updatedCoffeeList,
      }
    }

    case Actions.SUBMIT_ORDER: {
      console.log(action.payload)
          return {
        ...state,
        address: action.payload.address,
        paymentMethod: action.payload.paymentMethod,
        coffeeList: [], // Clear the cart after submitting the order
      }
    }

    default:
      return state
  }
}
