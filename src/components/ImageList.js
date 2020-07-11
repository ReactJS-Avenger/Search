import React from 'react';

import ImageCard from './ImageCard';
import './ImageList.css'

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })
    return (
        <div className="row">
            <div className="image-list" style={{ width: '100%' }}>{images}</div>
        </div>
    )
}
export default ImageList;