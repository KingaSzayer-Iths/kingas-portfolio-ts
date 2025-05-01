import React from 'react';

const Picture = (image: string) => {
    return (
        <picture >
            {/* <source srcset={image} type="image/avif" media="(max-width:480px)"/>
            <source srcset={image} type="image/avif" media="(max-width:768px)"/>
            <source srcset={image} type="image/avif"/>
            <source srcset={image} type="image/webp" media="(max-width:480px)"/>
            <source srcset={image} type="image/webp" media="(max-width:768px)"/>
            <source srcset={image} type="image/webp"/> */}
            <img height="300px" src={image} alt="" />
        </picture>
    )
}
  
export default Picture