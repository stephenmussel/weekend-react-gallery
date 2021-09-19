function GalleryList ({galleryItems}, {counter}) {
    return(
        <>
            {galleryItems.map(image => 
            (<div className="gallery-grid">
                <img key={image.id} src={image.path} className="gallery-image"/><br />
                <button onClick={() => setCounter(counter + 1)} className="love-button">love it!</button>
                <p>&#10084;&#65039;&nbsp; {counter}</p>
            </div>)
            )}
        </>
    )
}

export default GalleryList;