import {combineReducers, configureStore} from "@reduxjs/toolkit";
import pizzaReducer from "./Pizza/PizzaSlice";
import navigationReducer from "./Navigation/NavigationSlice";
import cartReducer from "./Cart/CartSlice";
import {pizzasAPI} from "./services/PizzasService";

export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    navigation: navigationReducer,
    cart: cartReducer,
    [pizzasAPI.reducerPath]: pizzasAPI.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzasAPI.middleware)
})

export type RootReducerState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
