import {useAppSelector} from "../../hooks/useRedux";
import {categories} from "../../utils/constants";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

const Categories = ({isMounted, handleCategoryChange}: {isMounted: boolean, handleCategoryChange: (index: number) => void}) => {
    useWhyDidYouUpdate('categories', {isMounted, handleCategoryChange});
    const sortOptions = useAppSelector(state => state.navigation.sortOptions);

    return (
        <div className = "categories">
            <ul>
                {categories.map((category, idx) => <li className = {`${isMounted && sortOptions.category === idx ? 'active' : ''}`}
                                                       onClick = {() => handleCategoryChange(idx)} key = {idx}>{category}</li>)}
            </ul>
        </div>
    );
};
export default Categories;
