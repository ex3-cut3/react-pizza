import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCartStateLS} from "../../utils/getCartStateFromLS";
import {checkUniqueCartItemPredicate, filteredCartItemsPredicate} from "../../utils/helpers";
import {CartItem, CartState} from "./CartTypes";

export const computeAmountOfCartItems = (arr: CartItem[]) => arr.reduce((acc: number, item: CartItem) => acc + item.amount, 0);
export const computePriceOfAllCartItems = (arr: CartItem[]) => arr.reduce((acc: number, item: CartItem) =>
    acc + item.finalPrice * item.amount, 0);

const initialState: CartState = getCartStateLS() || {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0
};

export const CartSlice = createSlice({
    name: 'cartState',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const item = state.cartItems.find(item => checkUniqueCartItemPredicate(item, action.payload));
            if (item) {
                item.amount += 1;
            } else {
                state.cartItems.push(action.payload);
            }

            state.totalItems += 1;
            state.totalPrice += action.payload.finalPrice;
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            const {payload: removedItem} = action;
            state.cartItems = state.cartItems.filter(cartItem => filteredCartItemsPredicate(cartItem, removedItem));
            state.totalItems -= removedItem.amount;
            state.totalPrice -= removedItem.finalPrice * removedItem.amount;
        },
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.cartItems = action.payload;
            state.totalItems = computeAmountOfCartItems(state.cartItems);
            state.totalPrice = computePriceOfAllCartItems(state.cartItems);
        },
        setAmount: (state, action: PayloadAction<{ item: CartItem, amount: number }>) => {
            const item = state.cartItems.find(cartItem => checkUniqueCartItemPredicate(cartItem, action.payload.item));
            if (item) item.amount = action.payload.amount;

            state.totalItems = computeAmountOfCartItems(state.cartItems);
            state.totalPrice = computePriceOfAllCartItems(state.cartItems);
        },
        setCartState: (state, action: PayloadAction<CartState>) => {
            for (let stateKey in state) {
                state[stateKey] = action.payload[stateKey];
            }
            // state.cartItems = action.payload.cartItems;
            // state.totalItems = action.payload.totalItems;
            // state.totalPrice = action.payload.totalPrice;
        }
    }
});

export default CartSlice.reducer;
