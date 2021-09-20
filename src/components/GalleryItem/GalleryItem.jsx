import { useState } from 'react';

// this is the button and counter for each image
// provides ability to track `love` for each image separately
function GalleryItem ({item, updateLove}) {

    const [loveCounter, setLoveCounter] = useState(0);
    const [description, setDescription] =useState(false);

    const handleLove = (galleryId) => {
        console.log('in handleLove', galleryId); //
        setLoveCounter(loveCounter + 1);
        setDescription(true);
    }

    return(
        <>
            {/* {description && <p>My wife and I in our happy place, the forest of Fontainebleau.</p>} */}
            <button className="love-button" onClick={ () => handleLove(item) }>love it!</button>
            {/* <button className="love-button" onClick={ () => setLoveCounter(loveCounter + 1) }>love it!</button> */}
            <p>&#10084;&#65039;&nbsp; {loveCounter}</p>
            {description && <div>{item.description}</div>}<br />
        </>
    )
}

export default GalleryItem;