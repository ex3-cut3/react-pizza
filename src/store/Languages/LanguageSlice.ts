import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getLanguageFromLS} from "../../utils/getLanguageFromLS";

export interface LanguageState{
    language: string
}

const initialState: LanguageState = {
    language: getLanguageFromLS()
}

const LanguageSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>){
            state.language = action.payload;
        }
    }
})

export const languageActions = LanguageSlice.actions;
export default LanguageSlice.reducer;
