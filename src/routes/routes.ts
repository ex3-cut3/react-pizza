import PageNotFound from "../pages/PageNotFound";
import Cart from "../pages/Cart";
import HomeContent from "../pages/HomeContent";
import Payment from "../pages/Payment";
import SelectedPizza from "../pages/SelectedPizza";

export const routes: { path:string, element: (...args: any[]) => JSX.Element }[] = [
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
