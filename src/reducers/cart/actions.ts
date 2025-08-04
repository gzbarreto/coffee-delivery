import { Coffee } from "./reducer"

export enum Actions {
  ADD_TO_CART = "ADD_TO_CART",
  UPDATE_CART = "UPDATE_CART",
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
