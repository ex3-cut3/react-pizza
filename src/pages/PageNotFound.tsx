import classes from '../scss/modules/NotFound.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {msToLeaveNotFoundPage} from "../utils/constants";

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, msToLeaveNotFoundPage);
    }, [])

    return (
        <div className = 'container'>
            <div className = {classes['align-text']}>
                <span style = {{fontSize: '50px'}}>😕</span>
                <br/>
                <h1>Page not found!</h1>
                <h4>You will be redirected to home page in {msToLeaveNotFoundPage/1000} seconds</h4>
                <Link to = '/' className = "button pay-btn" style = {{marginTop: '10px'}}>
                    <span>Вернуться на главную страницу</span>
                </Link>
            </div>
            <img className = {classes['img']} src = {'img/rainbow.png'} alt = 'rainbow'></img>
        </div>
    );
};

export default PageNotFound;
