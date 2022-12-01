import {Pizza} from '../../utils/models';

export interface PizzaState {
    pizzas: Pizza[];
    allPizzas: Pizza[];
    isLoading: boolean;
    error: string
}
