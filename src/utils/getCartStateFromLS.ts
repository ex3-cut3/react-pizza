import {computeAmountOfCartItems, computePriceOfAllCartItems} from "../store/Cart/CartSlice";
import {CartState} from "../store/Cart/CartTypes";

export const getCartStateLS = () => {
    const str = localStorage.getItem('cartItems');
    if (!str) {
        return null;
    }
    const cartItems = JSON.parse(str);
    return {
        cartItems,
        totalPrice: computePriceOfAllCartItems(cartItems),
        totalItems: computeAmountOfCartItems(cartItems),
    } as CartState;
}
