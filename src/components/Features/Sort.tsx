import React, {useEffect, useRef, useState} from 'react';
import {useAppSelector} from "../../hooks/useRedux";
import TrendImage from "../Layout/TrendImage";
import {sortTypes} from "../../utils/constants";
import {selectNavigation} from "../../store/Navigation/selectors";

export type PopupClick = MouseEvent & {
    path: Node[];
}

const Sort = ({handleSortSelected}: { handleSortSelected: (index: number, handlePopup: () => void, checkIfSelectedPreviouslySelectedCategory: (index: number) => boolean) => void }) => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const {sortOptions} = useAppSelector(selectNavigation);
    const sortRef = useRef(null);

    function handleOutsideClick(e: MouseEvent) {
        const _event = e as PopupClick;
        if (sortRef.current && !_event.path.includes(sortRef.current)) {
            setIsPopupOpen(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        }
    }, [])

    function handleSortPopup() {
        setIsPopupOpen((isOpen) => !isOpen);
    }

    function checkIfEqual(idx: number) {
        return sortTypes[idx].convertedAsItemProperty === sortOptions.sortBy && sortTypes[idx].sortOrder === sortOptions.order;
    }

    return (
        <div className = "sort" ref = {sortRef}>
            <div className = "sort__label">
                <svg
                    width = "10"
                    height = "6"
                    viewBox = "0 0 10 6"
                    fill = "none"
                    xmlns = "http://www.w3.org/2000/svg"
                >
                    <path
                        d = "M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill = "#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <div style = {{userSelect: 'none'}} onClick = {handleSortPopup}>
                    {sortTypes.find((sortType, i) => checkIfEqual(i))!.name} {sortOptions.order === 'desc' ? "↓" : '↑'}
                </div>
            </div>

            {isPopupOpen &&
                <div className = "sort__popup">
                    <ul>
                        {sortTypes.map((sortType, index) => {
                            return (
                                <li
                                    key = {index}
                                    className = {`sort-item ${checkIfEqual(index) ? 'active' : ''}`}
                                    onClick = {() => handleSortSelected(index, handleSortPopup, checkIfEqual)}
                                >
                                    {sortType.name} <TrendImage
                                    srcPath = {`img/trend-${sortTypes[index].sortOrder}.svg`}
                                    altText = {`in ${sortTypes[index].sortOrder}ending order`}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
        </div>
    );
};

export default Sort;
