import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Pizza} from "../../components/Layout/PizzaBlock/PizzaBlockList";

export const pizzasAPI = createApi({
    reducerPath: 'pizzaAPI',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (build) => ({
        fetchPizzaById: build.query<Pizza, string>({
            query(id) {
                return {
                    url: `/${id}`,
                    // headers: {Authorization: authBearer(token)}
                }
            }
        })
    })
})
