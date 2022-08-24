import classes from '../scss/modules/NotFound.module.scss';
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className='container' >
            <div className= {classes['align-text']}>
                <span style={{fontSize: '50px'}}>😕</span>
                <br/>
                <h1>Page not found!</h1>
                <Link to='/' className = "button pay-btn" style={{marginTop: '10px'}}>
                    <span>Вернуться на главную страницу</span>
                </Link>
            </div>
            <img className={classes['img']} src={'img/rainbow.png'} alt='rainbow'></img>
        </div>
    );
};

export default PageNotFound;
