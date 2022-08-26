import cl from './Loader.module.scss'
const FullLoader = () => {
    return (
            <h1 style={{display: 'flex', justifyContent: 'center'}} className={cl['full-loader']}>Loading...</h1>
    );
};

export default FullLoader;
