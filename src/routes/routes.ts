import HomeContent from "../pages/HomeContent";
import {lazy} from "react";
import Loadable from 'react-loadable';
import FullLoader from "../components/Layout/Loader/FullLoader";

// const Cart = lazy(() => import(/*webpackChunkName: "Cart"*/'../pages/Cart'));
const Cart = Loadable({
    loading: FullLoader,
    loader: ()=> import(/*webpackChunkName: "Cart"*/'../pages/Cart'),
});
const SelectedPizza = lazy(() => import(/*webpackChunkName: "SelectedPizza"*/ '../pages/SelectedPizza').then(m => ({
    default: m.SelectedPizza // if not exporting component as default, but as naming export
})));
const Payment = lazy(() => import(/*webpackChunkName: "Payment"*/ '../pages/Payment'));
const PageNotFound = lazy(() => import(/*webpackChunkName: "NotFound"*/'../pages/PageNotFound'));

export const routes: { path: string, element: any }[] = [
    {
        path: '',
        element: HomeContent,
    },
    {
        path: '/cart',
        element: Cart,
    },
    {
        path: '/payment',
        element: Payment,
    },
    {
        path: '/pizza/:id',
        element: SelectedPizza,
    },
    {
        path: '*',
        element: PageNotFound,
    },
];
