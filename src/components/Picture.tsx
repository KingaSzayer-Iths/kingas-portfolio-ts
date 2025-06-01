import React from 'react'

type PictureProps = {
  image: string;
  alt?: string;
  height?: string;
}

const Picture: React.FC<PictureProps> = ({ image, alt = '', height = '300px' }) => {
  return (
    <picture>
      <img src={image} alt={alt} height={height} />
    </picture>
  )
}

export default Picture





// import React from 'react';

// const Picture = (image: string) => {
//     return (
//         <picture >
//             <img height="300px" src={image} alt="" />
//         </picture>
//     )
// }
  
// export default Picture




            {/* <source srcset={image} type="image/avif" media="(max-width:480px)"/>
            <source srcset={image} type="image/avif" media="(max-width:768px)"/>
            <source srcset={image} type="image/avif"/>
            <source srcset={image} type="image/webp" media="(max-width:480px)"/>
            <source srcset={image} type="image/webp" media="(max-width:768px)"/>
            <source srcset={image} type="image/webp"/> */}