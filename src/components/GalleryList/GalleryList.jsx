import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({list}) {
    return(
        <>
            <div className="gallery-list-container">
            <h2>Gallery List</h2>
                {/* loops thru {list} to display each image in gallery.data.js */}
                {list.map(galleryItem => 
                        (<>
                            <p key={galleryItem.id}><img src={galleryItem.path} alt={galleryItem.description}/></p>
                            <p>{galleryItem.description}</p>
                            <GalleryItem />
                        </>)
                    )}
                </div>
        </>
    )
}

export default GalleryList;