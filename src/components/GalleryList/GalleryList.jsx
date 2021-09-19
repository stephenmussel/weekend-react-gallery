import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({list}) {
    return(
        <>
            <div className="gallery-list-container">
            <h2>Gallery List</h2>
                {/* loops thru {list} to display each image in gallery.data.js */}
                <p>{list.map(image => 
                        (<>
                            <img key={image.id} src={image.path} alt={image.description}/>
                            <p>{image.description}</p>
                            <GalleryItem />
                        </>)
                    )}
                </p>
            </div>
        </>
    )
}

export default GalleryList;