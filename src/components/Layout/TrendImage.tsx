
const TrendImage = ({srcPath, altText}: {srcPath: string, altText: string}) => {
    return (
        <img style={{height: '25px'}} alt = {altText} src={srcPath}/>
    );
};

export default TrendImage;
