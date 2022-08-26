import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPizzas} from "./PizzaAC";
import {Pizza} from "../../components/Layout/PizzaBlock/PizzaBlockList";
import {PizzaState} from "./PizzaTypes";
import {limitArray} from "../../utils/helpers";

const initialState: PizzaState = {
    pizzas: [],
    allPizzas: [],
    isLoading: false,
    error: '',
}

export const PizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<{ pizzas: Pizza[], page: number, limit: number }>) => {
            const {page, limit, pizzas} = action.payload;
            state.pizzas = limitArray(pizzas, limit, page);
        }
    },
    extraReducers: {
        [fetchPizzas.fulfilled.type]: (state, action: PayloadAction<{ pizzas: Pizza[], page: number, limit: number }>) => {
            const {page, limit, pizzas} = action.payload;
            state.isLoading = false;
            state.error = '';
            state.allPizzas = pizzas;
            state.pizzas = pizzas.slice((page - 1) * limit, page * limit);
        },
        [fetchPizzas.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPizzas.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
});

export default PizzaSlice.reducer;
export const PizzaActions = PizzaSlice.actions;
