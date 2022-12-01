import React from 'react';
import {typeNames} from "../../../utils/constants";
import {useActions} from "../../../hooks/useRedux";
import clsx from "clsx";
import {CartItem as ICartItem} from "../../../store/Cart/CartTypes";

const CartItem = ({item}: { item: ICartItem }) => {
    const {removeFromCart, setAmount,} = useActions();

    // console.log('cart item render!')

    function handleRemoveOneItem(item: ICartItem) {
        removeFromCart(item);
    }

    function handleMinusItem(item: ICartItem, e: unknown) {
        const _event = e as React.MouseEvent<HTMLButtonElement>;
        ((item.amount > 1) && setAmount({item, amount: item.amount - 1}))
    }

    function handlePlusItem(item: ICartItem) {
        setAmount({item, amount: item.amount + 1})
        // addToCart(item);
    }


    return (
        <div className = "content__items">
            <div className = "cart__item">
                <div className = "cart__item-img">
                    <img
                        className = "pizza-block__image"
                        src = {item.pizza.imageUrl}
                        alt = {`Pizza ${item.pizza.title}`}
                    />
                </div>
                <div className = "cart__item-info">
                    <h3>{item.pizza.title}</h3>
                    <p>{typeNames[item.type]} тесто, {item.size} см.</p>
                </div>
                <div className = "cart__item-count">
                    <button disabled = {item.amount === 1} className = {clsx("button button--outline button--circle " +
                        "cart__item-count-minus", {'cart__item-count-minus--disabled': item.amount === 1})}
                            onClick = {(e) => handleMinusItem(item, e)}>
                        <svg width = "10" height = "10" viewBox = "0 0 10 10" fill = "none"
                             xmlns = "http://www.w3.org/2000/svg">
                            <path
                                d = "M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill = "#EB5A1E"/>
                            <path
                                d = "M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill = "#EB5A1E"/>
                        </svg>

                    </button>
                    <b>{item.amount}</b>
                    <button className = "button button--outline button--circle cart__item-count-plus"
                            onClick = {() => handlePlusItem(item)}>
                        <svg width = "10" height = "10" viewBox = "0 0 10 10" fill = "none"
                             xmlns = "http://www.w3.org/2000/svg">
                            <path
                                d = "M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill = "#EB5A1E"/>
                            <path
                                d = "M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill = "#EB5A1E"/>
                        </svg>

                    </button>
                </div>
                <div className = "cart__item-price">
                    <b>{(item.amount * item.finalPrice).toFixed(2)} ₽</b>
                </div>
                <div className = "cart__item-remove">
                    <button className = "button button--outline button--circle"
                            onClick = {() => handleRemoveOneItem(item)}>
                        <svg width = "10" height = "10" viewBox = "0 0 10 10" fill = "none"
                             xmlns = "http://www.w3.org/2000/svg">
                            <path
                                d = "M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill = "#EB5A1E"/>
                            <path
                                d = "M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill = "#EB5A1E"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
