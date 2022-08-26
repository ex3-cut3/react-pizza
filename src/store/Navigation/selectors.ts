import {RootReducerState} from "../store";

export const selectNavigation = (state : RootReducerState) => state.navigation;
export const selectSortOptions = (state : RootReducerState) => state.navigation.sortOptions;
