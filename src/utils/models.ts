import {SortOrderVariants} from '../store/Navigation/NavigationTypes';
import {keysOfObj} from './helpers';

export interface Language {
    name: string,
    flag: string,
    shortName: string,
}

export type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
};

export interface SortType {
    name: string,
    sortOrder: SortOrderVariants,
    convertedAsItemProperty: keysOfObj<Pizza>
}
