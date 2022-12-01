import {useLocation} from "react-router-dom";
import qs from "qs";
import {categories} from "./constants";
import {instanceOfSortVariants, keysOfObj} from "./helpers";
import {SortOptions, SortOrderVariants} from "../store/Navigation/NavigationTypes";
import {Pizza} from './models';

export const checkAllParams = (sortOptions: SortOptions, location: ReturnType<typeof useLocation>): SortOptions => {
    const query = qs.parse(location.search.slice(1));
    let pageFromURL = sortOptions.page, category = sortOptions.category, order: SortOrderVariants = sortOptions.order,
        sortBy: keysOfObj<Pizza> = sortOptions.sortBy, searchQueryFromURL = sortOptions.searchQuery;
    if (query.page) {
        pageFromURL = +query.page;
        // console.log(pageFromURL)
    }
    if (query.sortBy) {
        sortBy = query.sortBy as keysOfObj<Pizza>;
    }
    if (query.order && instanceOfSortVariants(query.order.toString())) {
        order = query.order as SortOrderVariants;
    }
    if (query.category && +query.category >= 0 && +query.category < categories.length) {
        category = +query.category;
    }
    if (query.searchQuery) {
        searchQueryFromURL = query.searchQuery.toString();
    }
    return {page: pageFromURL, category, order, sortBy, searchQuery: searchQueryFromURL};
}
