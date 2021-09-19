import React, { useState } from 'react';

function GalleryList ({galleryItems}) {

    const [counter, setCounter] = useState(0);

    return(
        <>
            {galleryItems.map(image => 
            (<div className="gallery-grid">
                <img key={image.id} src={image.path} className="gallery-image"/><br />
                <p>&#10084;&#65039;&nbsp; {counter}</p>
            </div>)
            // <button onClick={() => setCounter(counter + 1)} className="love-button">love it!</button>

            )}
        </>
    )
}

export default GalleryList;