import { Coffee } from "./reducer";


export enum Actions {
  UPDATE_CART = "UPDATE_CART",
}

export function updateCartAction(coffee: Coffee, quantity: number) {
  return {
    type: Actions.UPDATE_CART,
    payload: {
      coffee,
      quantity,
    },
  };
}