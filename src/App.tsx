import './scss/app.scss';
import {Suspense, useEffect, useRef} from "react";
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import {useAppSelector} from "./hooks/useRedux";
import MainLayout from "./MainLayout";
import {selectCart} from "./store/Cart/selectors";
import FullLoader from "./components/Layout/Loader/FullLoader";

const App = () => {
    const {cartItems} = useAppSelector(selectCart);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            // console.log('cartItems');
        }
        isMounted.current = true;
    }, [cartItems]);

    return (
        <Routes>
            <Route path = '/' element = {<MainLayout/>}>
                {routes.map(route =>
                    <Route key = {route.path} path = {route.path}
                           element = {<Suspense fallback = {<FullLoader/>}>
                               <route.element/>
                           </Suspense>}>
                    </Route>)}
            </Route>
        </Routes>
    );
}

export default App;
