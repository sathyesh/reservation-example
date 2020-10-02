import React from 'react';
import "./ImageHolder.scss";

function ImageHolder({src}) {
    
    return (
        <div className="image-holder">
         <img className="image-holder__img" loading="lazy" src={src} alt="Restaturant"></img>
        </div>
    )
}

export default ImageHolder
