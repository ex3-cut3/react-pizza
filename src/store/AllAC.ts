import {fetchPizzas} from "./Pizza/PizzaAC";
import {PizzaActions} from "./Pizza/PizzaSlice";
import {navigationActions} from "./Navigation/NavigationSlice";
import {CartSlice} from "./Cart/CartSlice";


export const allActions = {
    fetchPizzas,
    ...PizzaActions,
    ...navigationActions,
    ...CartSlice.actions,
}
