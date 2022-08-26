import {Pizza} from "../../components/Layout/PizzaBlock/PizzaBlockList";

export interface CartItem {
    pizza: Pizza;
    amount: number;
    type: number;
    size: number;
    finalPrice: number;
}

export interface CartState extends Record<string, any> {
    cartItems: CartItem[];
    totalPrice: number;
    totalItems: number;
}
