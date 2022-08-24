import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { SortOptions } from "../Navigation/NavigationSlice";
import { Pizza } from "../../components/Layout/PizzaBlock/PizzaBlockList";
import { RejectedWithValueActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

export type FetchPizzasArgs = {
  sortOptions: SortOptions;
  page: number;
  limit: number;
};

export const fetchPizzas = createAsyncThunk<
  Pizza[] | RejectedWithValueActionFromAsyncThunk<any>,
  FetchPizzasArgs
>("pizzas/fetchPizzas", async ({ sortOptions, page, limit }, thunkAPI) => {
  try {
    const { category, sortBy, order, searchQuery } = sortOptions;

    const computedCategory = category !== 0 ? category : "";
    const response = await axios.get<Pizza[]>(
      `${process.env.REACT_APP_API_URL}?sortBy=${sortBy}&category=${computedCategory}&order=${order}`
    ); // &page=${page}&limit=${limit}
    return { pizzas: response.data, page, limit };
  } catch (e: unknown) {
    console.log(e);
    const { response } = e as AxiosError;
    return thunkAPI.rejectWithValue(
      "Unable to load pizzas 😒! " + response?.data
    );
  }
});
