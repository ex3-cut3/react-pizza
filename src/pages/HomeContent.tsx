import {lazy, Suspense, useCallback, useEffect, useRef} from 'react';
import Categories from "../components/Features/Categories";
import Sort from "../components/Features/Sort";
import PizzaBlockList from "../components/Layout/PizzaBlock/PizzaBlockList";
import {useActions, useAppSelector} from "../hooks/useRedux";
import {useLocation, useNavigate} from "react-router-dom";
import {selectNavigation} from "../store/Navigation/selectors";
import {selectPizzas} from "../store/Pizza/selectors";
import {sortTypes} from "../utils/constants";

const HomeContent = () => {
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const location = useLocation();
    const Pagination = lazy(()=> import('../components/Features/Pagination'));

    const {allPizzas, pizzas, error, isLoading} = useAppSelector(selectPizzas);
    const {
        fetchPizzas,
        setTotalPages,
        setPizzas,
        setPage,
        setSortOptions,
        setCategory,
        setSortBy,
        setOrder
    } = useActions();
    const {totalPages, pageLimit, sortOptions,} = useAppSelector(selectNavigation);

    // const {data: dataPizzas, isLoading: dataLoading, error: dataError} = serviceAPI.useFetchAllPizzasQuery('');

    useEffect(() => {
        if (location.search) {
            import(/* webpackChunkName: "checkAddressBarParams" */ "../utils/checkAddressBarParams").then(module => {
                setSortOptions(module.checkAllParams(sortOptions, location));
            })
            isSearch.current = true;
        }
    }, []);

    useEffect(() => {
        !isSearch.current && fetchPizzas({sortOptions, page: sortOptions.page, limit: pageLimit});
        isSearch.current = false;
    }, [sortOptions]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [sortOptions.page]);

    useEffect(() => { // due to api inconsistency, filter on front
        const filteredPizzas = allPizzas.filter((pizza) => pizza.title.toLowerCase().includes(sortOptions.searchQuery.toLowerCase()))
        setPizzas({pizzas: filteredPizzas, page: sortOptions.page, limit: pageLimit});
        setTotalPages(Math.ceil(filteredPizzas.length / pageLimit));
    }, [sortOptions.searchQuery, sortOptions.page, allPizzas, pageLimit]);

    // useEffect(() => {
    //     if(isSearch.current) setPage(1);
    //     else isSearch.current = false;
    // }, [sortOptions.searchQuery, sortOptions.category]);

    // useEffect(() => {
    //     setTotalPages(Math.ceil(allPizzas.length / pageLimit));
    // }, [allPizzas, pageLimit]);

    useEffect(() => {
        if (!isMounted.current) {
            setTimeout(()=>isMounted.current = true, 0);
            return;
        }

        import(/* webpackChunkName: "QS" */ "qs").then(qs => {
            const queryString = qs.stringify({
                category: sortOptions.category,
                sortBy: sortOptions.sortBy,
                order: sortOptions.order,
                page: sortOptions.page,
                searchQuery: sortOptions.searchQuery,
            });
            navigate(`?${queryString}`);
        })
    }, [sortOptions])

    const handleCategoryChange = useCallback((idx: number) => {
        // setCategory(idx);
        // if (idx === sortOptions.category) return;
        // console.log({...sortOptions, category: idx, page: 1});
        setPage(1);
        setCategory(idx);
    }, []);

    const handleSortSelected = useCallback((idx: number, handlePopup: () => void/*, checkIfEqual: (index: number) => boolean*/) => {
        handlePopup();
        // if (checkIfEqual(idx)) return;
        setOrder(sortTypes[idx].sortOrder);
        setSortBy(sortTypes[idx].convertedAsItemProperty);
        // setSortOptions({ // do NOT use 'global' sortOptions as they will be used from first loaded memoized state.
        //     ...sortOptions,
        //     sortBy: sortTypes[idx].convertedAsItemProperty,
        //     order: sortTypes[idx].sortOrder
        // });
    }, []);

    if (error) {
        return <h1 style = {{textAlign: 'center', padding: '10px 15px'}}>An unknown error occured... {error}. Please, try later.</h1>
    }

    return (
        <div className='container'>
            <div className="content__top">
                <Categories handleCategoryChange={handleCategoryChange} isMounted={isMounted.current}/>
                <Sort handleSortSelected={handleSortSelected}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <PizzaBlockList/>
            <Suspense fallback=''>
                <Pagination totalPages={totalPages}/>
            </Suspense>
        </div>
    );
};

export default HomeContent;
