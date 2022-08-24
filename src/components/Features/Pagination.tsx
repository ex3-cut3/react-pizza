import {useActions, useAppSelector} from "../../hooks/useRedux";

const Pagination = ({totalPages}: { totalPages: number }) => {
    const {setPage} = useActions();
    const page = useAppSelector(state => state.navigation.sortOptions.page);

    function handlePageClick(selectedPage: number) {
        setPage(selectedPage);
    }

    return (
        <div className = 'pagination'>
            {[...new Array(totalPages)].map((_, idx) => {
                return <button className = {`button button--outline button--pagination ${page === idx+1 ? 'active' : ''}`} onClick = {() => handlePageClick(idx + 1)} key = {idx}>{idx + 1}</button>
            })}
        </div>
    );
};

export default Pagination;
