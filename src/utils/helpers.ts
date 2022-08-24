import qs from "qs";
import {keysOfObj, SortOptions, SortVariants} from "../store/Navigation/NavigationSlice";
import {Pizza} from "../components/Layout/PizzaBlock/PizzaBlockList";
import {categories, PRICE_MULTIPLIERS} from "./constants";
import {useLocation} from "react-router-dom";

export const checkAllParams = (sortOptions: SortOptions, location: ReturnType<typeof useLocation>) => {
    const query = qs.parse(location.search.slice(1));
    let pageFromURL = sortOptions.page, category = sortOptions.category, order: SortVariants = sortOptions.order,
        sortBy: keysOfObj<Pizza> = sortOptions.sortBy, searchQueryFromURL = sortOptions.searchQuery;
    if (query.page) {
        pageFromURL = +query.page;
        console.log(pageFromURL)
    }
    if (query.sortBy) {
        sortBy = query.sortBy as keysOfObj<Pizza>;
    }
    if (query.order && instanceOfSortVariants(query.order.toString())) {
        order = query.order as SortVariants;
    }
    if (query.category && +query.category >= 0 && +query.category < categories.length) {
        category = +query.category;
    }
    if (query.searchQuery) {
        searchQueryFromURL = query.searchQuery.toString();
    }
    return {page: pageFromURL, category, order, sortBy, searchQuery: searchQueryFromURL};
}

function instanceOfSortVariants(str: string) {
    return str === 'asc' || str === 'desc';
}

export function getMultiplier(size: number) {
    let overallMultiplier = 1;
    switch (size) {
        case 26:
            overallMultiplier *= PRICE_MULTIPLIERS.SMALL_SIZE;
            break;
        case 30:
            overallMultiplier *= PRICE_MULTIPLIERS.MEDIUM_SIZE;
            break;
        case 40:
            overallMultiplier *= PRICE_MULTIPLIERS.BIG_SIZE;
            break;
        default:
            overallMultiplier *= 1
    }
    return overallMultiplier;
}
