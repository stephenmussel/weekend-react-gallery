import React, { useState } from 'react';

function GalleryItem() {

    const [counter, setCounter] = useState(0);
    const [description, setDescription] = useState(false);

    if (description) {
        return(<p>My wife and I in our happy place, the forest of Fontainebleau.</p>)
    } else {
        // do nothing
    }

    return(
        <>
            <img src="images/climbing-2.jpg" className="gallery-image"/><br />
            <button onClick={() => setCounter(counter + 1)} className="love-button">love it!</button>
            <p>&#10084;&#65039;&nbsp; {counter}</p>
        </>
    )
}

export default GalleryItem;