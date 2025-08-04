import { Coffee } from "./reducer"

export enum Actions {
  ADD_TO_CART = "ADD_TO_CART",
  UPDATE_CART = "UPDATE_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export function addToCartAction(coffee: Coffee, quantity: number) {
  return {
    type: Actions.ADD_TO_CART,
    payload: {
      coffee,
      quantity,
    },
  }
}

export function updateCartAction(id: number, newQuantity: number) {
  return {
    type: Actions.UPDATE_CART,
    payload: {
      id,
      newQuantity,
    },
  }
}

export function removeFromCartAction(id: number) {
  return {
    type: Actions.REMOVE_FROM_CART,
    payload: {
      id
    },
  }
}
