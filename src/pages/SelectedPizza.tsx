import {Navigate, useParams} from "react-router-dom";
import {pizzasAPI} from "../store/services/PizzasService";

function SelectedPizza() {
    const {id} = useParams();
    const {data: selectedPizza, isLoading, error} = pizzasAPI.useFetchPizzaByIdQuery(id!)

    if (isLoading ) return <h2>Loading...</h2>
    if (error || !selectedPizza) {
        console.log(error);
        return <Navigate to='/'></Navigate>;
    }

    return (
        <div className='container'>
            <img src = {selectedPizza.imageUrl} alt = {`${selectedPizza.title} pizza`}/>
            <h2>{selectedPizza.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nam?</p>
            <h4>От {selectedPizza.price} Р.</h4>
        </div>
    );
}

export default SelectedPizza;
