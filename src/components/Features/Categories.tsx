import {useAppSelector} from "../../hooks/useRedux";
import {categories} from "../../utils/constants";
import {memo} from "react";

const Categories = memo(({isMounted, handleCategoryChange}: {isMounted: boolean, handleCategoryChange: (index: number) => void}) => {
    // console.log(isMounted);
     // useWhyDidYouUpdate('categories', {isMounted, handleCategoryChange});
    // console.log('Categories render!')
    const {category: categoryFromStore} = useAppSelector(state => state.navigation.sortOptions);

    return (
        <div className = "categories">
            <ul>
                {categories.map((category, idx) => <li className = {`${isMounted && categoryFromStore === idx ? 'active' : ''}`}
                                                       onClick = {() => handleCategoryChange(idx)} key = {idx}>{category}</li>)}
            </ul>
        </div>
    );
});
export default Categories;
