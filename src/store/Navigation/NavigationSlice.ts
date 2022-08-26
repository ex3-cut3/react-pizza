import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza} from "../../components/Layout/PizzaBlock/PizzaBlockList";
import {NavigationState, SortOptions, SortVariants} from "./NavigationTypes";
import {keysOfObj} from "../../utils/helpers";

const initialState: NavigationState = {
    pageLimit: 6,
    totalPages: 1,
    sortOptions: {
        category: 0,
        sortBy: 'rating',
        order: SortVariants.ASCENDING,
        page: 1,
        searchQuery: '',
    }
}

export const NavigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setSortOptions: (state, action: PayloadAction<SortOptions>) => {
            state.sortOptions = action.payload;
            // console.log(state.sortOptions);
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.sortOptions.searchQuery = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.sortOptions.page = action.payload;
        },
        setPageLimit: (state, action: PayloadAction<number>) => {
            state.pageLimit = action.payload;
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        },
        setCategory: (state, action: PayloadAction<number>) => {
            state.sortOptions.category = action.payload;
        },
        setSortBy: (state, action: PayloadAction<keysOfObj<Pizza>>) => {
            state.sortOptions.sortBy = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortVariants>) => {
            state.sortOptions.order = action.payload;
        },
    }
});

export const navigationActions = NavigationSlice.actions;
export default NavigationSlice.reducer;
