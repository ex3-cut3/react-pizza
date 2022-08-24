import {useAppSelector} from "../hooks/useRedux";
import EmptyCart from "../components/Layout/Cart/EmptyCart";
import FullCart from "../components/Layout/Cart/FullCart";
import {selectCart} from "../store/Cart/selectors";

const Cart = () => {
    const {cartItems} = useAppSelector(selectCart);

    return (
        cartItems.length === 0 ? <EmptyCart/> : <FullCart/>
    );
};

export default Cart;
