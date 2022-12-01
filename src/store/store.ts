import {combineReducers, configureStore} from "@reduxjs/toolkit";
import pizzaReducer, {PizzaActions} from "./Pizza/PizzaSlice";
import navigationReducer, {navigationActions} from "./Navigation/NavigationSlice";
import cartReducer, {CartSlice} from "./Cart/CartSlice";
import {pizzasAPI} from "./services/PizzasService";
import {fetchPizzas} from "./Pizza/PizzaAC";
import LanguageSlice, {languageActions} from "./Language/LanguageSlice";

export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    navigation: navigationReducer,
    cart: cartReducer,
    [pizzasAPI.reducerPath]: pizzasAPI.reducer,
    language: LanguageSlice
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzasAPI.middleware)
})

export type RootReducerState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export const allActions = {
    fetchPizzas,
    ...PizzaActions,
    ...navigationActions,
    ...CartSlice.actions,
    ...languageActions
}
