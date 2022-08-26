import {Pizza} from "./PizzaBlockList";
import {useActions, useAppSelector} from "../../../hooks/useRedux";
import {computeAmountOfCartItems} from "../../../store/Cart/CartSlice";
import {typeNames} from "../../../utils/constants";
import {useState} from "react";
import {selectCartItemsById} from "../../../store/Cart/selectors";
import {Link} from "react-router-dom";
import {getMultiplier} from "../../../utils/getMultiplier";


const PizzaBlock: ({item}: {item: Pizza}) => JSX.Element = ({item}) => {
    const [activeType, setActiveType] = useState<number>(item.types[0]);
    const [activeSize, setActiveSize] = useState<number>(item.sizes[0]);

    const {addToCart} = useActions();
    const cartItems = useAppSelector(selectCartItemsById(item.id));
    const {id, types, price, imageUrl, title, sizes, rating} = item;

    function onAddPizza(item: Pizza) {
        addToCart({pizza: item, amount: 1, type: activeType, size: activeSize, finalPrice: getMultiplier(activeSize) * price});
    }

    function handleTypeClick(type: number) {
        setActiveType(type);
    }

    function handleSizeClick(sizeIdx: number) {
        setActiveSize(sizeIdx);
    }

    function getItemAmount() {
        return computeAmountOfCartItems(cartItems);
    }

    return (
        <div className = "pizza-block">
            <Link to= {`/pizza/${item.id}`}>
            <img
                className = "pizza-block__image"
                src = {imageUrl}
                alt = "Pizza"
            />
            <h4  className = "pizza-block__title">{title}</h4>
            </Link>
            <div className = "pizza-block__selector">
                <ul>
                    {types.map((type, idx) => <li key = {idx} onClick = {() => handleTypeClick(type)}
                                                  className = {`${activeType === type ? 'active' : ''}`}>{typeNames[type]}</li>)}
                </ul>
                <ul>
                    {
                        sizes.map((size, idx) => <li className = {`${activeSize === size ? 'active' : ''}`}
                                                     key = {idx}
                                                     onClick = {() => handleSizeClick(size)}>{size} см.</li>)
                    }
                </ul>
            </div>
            <div className = "pizza-block__bottom">
                <div className = "pizza-block__price">от {price} ₽</div>
                <button className = "button button--outline button--add" onClick = {() => onAddPizza(item)}>
                    <svg
                        width = "12"
                        height = "12"
                        viewBox = "0 0 12 12"
                        fill = "none"
                        xmlns = "http://www.w3.org/2000/svg"
                    >
                        <path
                            d = "M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill = "white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {getItemAmount() > 0 && <i>{getItemAmount()}</i>}
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;
