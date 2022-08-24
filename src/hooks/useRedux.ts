import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReducerState} from "../store/store";
import {bindActionCreators} from "redux";
import {allActions} from "../store/AllAC";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootReducerState> = useSelector;
export const useActions = () => bindActionCreators(allActions, useAppDispatch());
