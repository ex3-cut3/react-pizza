import {Navigate, useParams} from "react-router-dom";
import {pizzasAPI} from "../store/services/PizzasService";
import FullLoader from "../components/Layout/Loader/FullLoader";
import {useTranslation} from "react-i18next";

export function SelectedPizza() {
    const {id} = useParams();
    const {data: selectedPizza, isLoading, error} = pizzasAPI.useFetchPizzaByIdQuery(id!);
    const { t: translate } = useTranslation();


    if (isLoading) return <FullLoader/>
    if (error || !selectedPizza) {
        console.log(error);
        return <Navigate to='/'></Navigate>;
    }

    return (
        <div className='container'>
            <img src = {selectedPizza.imageUrl} alt = {`${selectedPizza.title} pizza`}/>
            <h2>{selectedPizza.title}</h2>
            <p>{translate('description')}</p>
            <h4>{translate('from')} {selectedPizza.price} {translate('currency')}.</h4>
        </div>
    );
}

// export default SelectedPizza;
