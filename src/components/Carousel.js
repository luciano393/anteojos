import React from 'react';
import ImageGallery from 'react-image-gallery';

const Carousel = () => {
    const images = [
        {
            original: 'https://ik.imagekit.io/0lswtnkkmck/imagen_Htq0hdMHa.jpg?updatedAt=1691886269379'
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
            />
        </div>
    )
}

export default Carousel