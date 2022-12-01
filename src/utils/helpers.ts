import {CartItem} from "../store/Cart/CartTypes";
import {Pizza} from './models';
import {SortOrderVariants} from '../store/Navigation/NavigationTypes';

export function instanceOfSortVariants(str: SortOrderVariants | string) {
    return str === 'asc' || str === 'desc';
}

export const filteredCartItemsPredicate = (cartItem: CartItem, payloadItem: CartItem) => {
    return cartItem.pizza.id !== payloadItem.pizza.id || cartItem.type !== payloadItem.type || cartItem.size !== payloadItem.size;
};

export const checkUniqueCartItemPredicate = (cartItem: CartItem, payloadItem: CartItem) => {
    return cartItem.pizza.id === payloadItem.pizza.id && cartItem.type === payloadItem.type && cartItem.size === payloadItem.size;
};

export type keysOfObj<T> = keyof T;

export const limitArray = <T>(array: T[], limit: number, page: number) => {
    return array.slice((page - 1) * limit, page * limit);
}
