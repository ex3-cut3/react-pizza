import {Pizza} from "../../components/Layout/PizzaBlock/PizzaBlockList";

export interface PizzaState {
    pizzas: Pizza[];
    allPizzas: Pizza[];
    isLoading: boolean;
    error: string
}
