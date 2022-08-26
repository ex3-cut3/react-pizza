import {Pizza} from "../../components/Layout/PizzaBlock/PizzaBlockList";
import {keysOfObj} from "../../utils/helpers";

export enum SortVariants {
    ASCENDING = 'asc',
    DESCENDING = 'desc',
}

export interface SortOptions {
    sortBy: keysOfObj<Pizza>;
    category: number;
    order: SortVariants;
    page: number;
    searchQuery: string;
}

export interface NavigationState {
    pageLimit: number;
    totalPages: number;
    sortOptions: SortOptions;
}
