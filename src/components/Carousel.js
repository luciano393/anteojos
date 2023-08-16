import React from 'react';
import ImageGallery from 'react-image-gallery';

const Carousel = () => {
    const images = [
        {
            original: 'https://ik.imagekit.io/0lswtnkkmck/imagen_Htq0hdMHa.jpg?updatedAt=1691886269379'
        },
        {
            original: 'https://ik.imagekit.io/0lswtnkkmck/imagen-prueba_iwer8dF69.jpg?updatedAt=1691886359601'
        },
        {
            original: 'https://ik.imagekit.io/0lswtnkkmck/imagen3_hVLVtgLm9.jpg?updatedAt=1691886342155'
        },
    ];

    return (
        <div className='carousel'>
            <ImageGallery 
                items={images} 
                infinite={true} 
                autoPlay={true} 
                showNav={true}
                showFullscreenButton={false}
                showPlayButton={false}
                stopPropagation={false}
                slideDuration={600}
            />
        </div>
    )
}

export default Carousel