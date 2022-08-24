import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0
};

const filteredItemsPredicate = (cartItem: CartItem, payloadItem: CartItem) => {
    return cartItem.pizza.id !== payloadItem.pizza.id || cartItem.type !== payloadItem.type || cartItem.size !== payloadItem.size;
};

const checkUniqueItemPredicate = (cartItem: CartItem, payloadItem: CartItem) => {
    return cartItem.pizza.id === payloadItem.pizza.id && cartItem.type === payloadItem.type && cartItem.size === payloadItem.size;
};

export const reduceFn = (arr: any[], innerReduceFn: (acc: number, item: any) => any, initialValue: number = 0) => {
    return arr.reduce((acc: number, item: any) => innerReduceFn(acc, item), initialValue);
}

const calculateAmountOfItemsFn = (acc: number, cartItem: CartItem) => acc += cartItem.amount;
const calculateTotalPriceFn = (acc: number, cartItem: CartItem) => acc + cartItem.finalPrice * cartItem.amount;

export const CartSlice = createSlice({
    name: 'cartState',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const item = state.cartItems.find(item => checkUniqueItemPredicate(item, action.payload));
            if (item) {
                item.amount += 1;
            } else {
                state.cartItems.push(action.payload);
            }

            state.totalItems += 1;
            state.totalPrice += action.payload.finalPrice;
            localStorage.setItem('cartState', JSON.stringify(state));
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            state.cartItems = state.cartItems.filter(cartItem => filteredItemsPredicate(cartItem, action.payload));
            state.totalItems -= action.payload.amount;
            state.totalPrice -= action.payload.finalPrice * action.payload.amount;
            localStorage.setItem('cartState', JSON.stringify(state));
        },
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.cartItems = action.payload;
            state.totalItems = reduceFn(state.cartItems, calculateAmountOfItemsFn);
            state.totalPrice = reduceFn(state.cartItems, calculateTotalPriceFn);
            localStorage.setItem('cartState', JSON.stringify(state));
        },
        setAmount: (state, action: PayloadAction<{ item: CartItem, amount: number }>) => {
            const item = state.cartItems.find(cartItem => checkUniqueItemPredicate(cartItem, action.payload.item));
            if (item) item.amount = action.payload.amount;

            state.totalItems = reduceFn(state.cartItems, calculateAmountOfItemsFn);
            state.totalPrice = reduceFn(state.cartItems, calculateTotalPriceFn);
            localStorage.setItem('cartState', JSON.stringify(state));
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
