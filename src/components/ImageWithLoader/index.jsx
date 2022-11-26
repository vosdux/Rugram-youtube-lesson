import { useState } from 'react';
import { Bars } from 'react-loader-spinner';
import cn from 'classnames';
import './styles.css';

const ImageWithLoader = ({ src, alt, className }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isImageErr, setIsImageErr] = useState(false);

    const onError = () => {
        setIsImageErr(true);
        setIsImageLoaded(false);
    };

    return (
        <div className={cn('cnImageWithLoaderRoot', className)}>
            {!isImageLoaded && <div className="cnImageWithLoaderWrapper"> {isImageErr ? 'err' : <Bars color="#000BFF" width={15} height={15} />} </div>}
            <img src={src} alt={alt} className={cn('cnImageWithLoaderImg', isImageLoaded && 'cnImageWithLoaderImgLoaded')} onError={onError} onLoad={() => setIsImageLoaded(true)} />
        </div>
    )
};

export default ImageWithLoader;