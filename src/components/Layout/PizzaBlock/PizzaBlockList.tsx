import React, {memo, useRef} from 'react';
import PizzaBlock from "./PizzaBlock";
import Skeleton from "./Skeleton";
import {useAppSelector} from "../../../hooks/useRedux";
import {selectPizzas} from "../../../store/Pizza/selectors";

const PizzaBlockList = memo(() => {
    const {pizzas, isLoading} = useAppSelector(selectPizzas);
    const skeletonsAmount = 6;

    return (
        <div className = "content__items">
            {isLoading ? [...new Array(skeletonsAmount)].map((_, idx) => <Skeleton
                key = {idx}/>) : pizzas.map((pizza) => {
                return <PizzaBlock item = {pizza} key = {pizza.imageUrl}/>
            })}
        </div>
    );
});

export default PizzaBlockList;

export type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
};
