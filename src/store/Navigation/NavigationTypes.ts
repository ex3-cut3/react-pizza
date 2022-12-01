import {keysOfObj} from "../../utils/helpers";
import {Pizza} from '../../utils/models';

export enum SortOrderVariants {
    ASCENDING = 'asc',
    DESCENDING = 'desc',
}

export interface SortOptions {
    sortBy: keysOfObj<Pizza>;
    category: number;
    order: SortOrderVariants;
    page: number;
    searchQuery: string;
}

export interface NavigationState {
    pageLimit: number;
    totalPages: number;
    sortOptions: SortOptions;
}
