import {computeAmountOfCartItems, computePriceOfCartItems} from "../store/Cart/CartSlice";
import {CartState} from "../store/Cart/CartTypes";

export const getCartStateLS = () => {
    const str = localStorage.getItem('cartItems');
    if (!str) {
        return null;
    }
    // console.log('localStorage.getItem')
    const cartItems = JSON.parse(str);
    return {
        cartItems,
        totalPrice: computePriceOfCartItems(cartItems),
        totalItems: computeAmountOfCartItems(cartItems),
    } as CartState;
}
