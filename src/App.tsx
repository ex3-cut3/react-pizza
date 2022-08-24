import './scss/app.scss';
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import {useActions, useAppSelector} from "./hooks/useRedux";
import {selectCart} from "./store/Cart/selectors";
import MainLayout from "./MainLayout";

function App() {
    const state = useAppSelector(selectCart);
    const {setCartState} = useActions();

    useEffect(() => {
        const str = localStorage.getItem('cartState');
        if (!str) {
            return;
        }
        const cartState = JSON.parse(str);
        Object.keys(state).length === Object.keys(cartState).length && setCartState(cartState);
    }, []);

    return (
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    {routes.map(route => <Route key = {route.path} path = {route.path} element = {<route.element/>}></Route>)}
                </Route>
            </Routes>
    );
}

export default App;
