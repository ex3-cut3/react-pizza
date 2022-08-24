import cl from './search.module.scss';
import {useActions, useAppSelector} from "../../../hooks/useRedux";
import {ChangeEvent, useCallback, useState} from "react";
import debounce from "lodash.debounce";
import {debounceTime} from "../../../utils/constants";
import {selectNavigation} from "../../../store/Navigation/selectors";

const SearchBox = () => {
    const {sortOptions} = useAppSelector(selectNavigation);
    const {setSortOptions,} = useActions();
    const [localSearchQuery, setLocalSearchQuery] = useState<string>(sortOptions.searchQuery);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFn = useCallback(debounce((str: string) => {
        setSortOptions({...sortOptions, searchQuery: str, page: 1});
    }, debounceTime), []);

    function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
        setLocalSearchQuery(e.target.value);
        debounceFn(e.target.value);
    }

    return (
        <div className = {cl.search_root}>
            <svg className = {cl.search_icon} enableBackground = "new 0 0 32 32" id = "EditableLine"
                 version = "1.1" viewBox = "0 0 32 32" xmlns = "http://www.w3.org/2000/svg">
                <circle cx = "14" cy = "14" fill = "none" id = "XMLID_42_" r = "9" stroke = "#000000"
                        strokeLinecap = "round" strokeLinejoin = "round" strokeMiterlimit = "10"
                        strokeWidth = "2" data-darkreader-inline-stroke = ""
                ></circle>
                <line fill = "none" id = "XMLID_44_" stroke = "#000000" strokeLinecap = "round"
                      strokeLinejoin = "round" strokeMiterlimit = "10" strokeWidth = "2" x1 = "27"
                      x2 = "20.366" y1 = "27" y2 = "20.366" data-darkreader-inline-stroke = ""
                ></line>
            </svg>
            <input  className = {cl.search_input} placeholder = "Поиск пиццы..." value = {localSearchQuery}
                   onChange = {(e => handleSearchInput(e))}/>
        </div>
    );
};

export default SearchBox;
