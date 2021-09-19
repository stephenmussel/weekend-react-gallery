import { useState } from 'react';

// this is the button and counter for each image
// provides ability to track `love` for each image separately
function GalleryItem () {

    const [loveCounter, setLoveCounter] = useState(0);

    return(
        <>
            <button className="love-button" onClick={ () => setLoveCounter(loveCounter + 1) }>love it!</button>
            <div>&#10084;&#65039;&nbsp; {loveCounter}</div>
        </>
    )
}

export default GalleryItem;