import {RootReducerState} from "../store";
import {CartItem} from "./CartSlice";

export const selectCart = (state : RootReducerState) => state.cart;
export const selectCartItemsById = (id: string) => (state: RootReducerState) =>
    state.cart.cartItems.filter((item: CartItem) => item.pizza.id === id);
