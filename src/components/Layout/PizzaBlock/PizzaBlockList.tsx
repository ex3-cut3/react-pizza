import React, {memo} from 'react';
import PizzaBlock from "./PizzaBlock";
import Skeleton from "./Skeleton";
import {useAppSelector} from "../../../hooks/useRedux";
import {selectPizzas} from "../../../store/Pizza/selectors";
import {skeletonsAmount} from '../../../utils/constants';

const PizzaBlockList = () => {
    const {pizzas, isLoading} = useAppSelector(selectPizzas);

    return (
        <div className="content__items">
            {isLoading ? [...new Array(skeletonsAmount)].map((_, idx) => <Skeleton
                key={idx}/>) : pizzas.map((pizza) => {
                return <PizzaBlock item={pizza} key={pizza.imageUrl}/>
            })}
        </div>
    );
};

export default PizzaBlockList;

