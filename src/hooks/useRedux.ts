import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {allActions, AppDispatch, RootReducerState} from "../store/store";
import {bindActionCreators} from "redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootReducerState> = useSelector;
export const useActions = () => bindActionCreators(allActions, useAppDispatch());
