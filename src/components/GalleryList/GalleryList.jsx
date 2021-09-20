import GalleryItem from "../GalleryItem/GalleryItem";
import { useState } from 'react';


function GalleryList({list, updateLove}) {

    const[description, setDescription] = useState(false);

    return(
        <>
            <div className="gallery-list-container">
            <h2>Gallery List</h2>
                {/* loops thru {list} to display each image in gallery.data.js */}
                {list.map(item => 
                        (<>
                            <img key={item.id} src={item.path} alt={item.description}/>
                            <br />
                            <GalleryItem 
                                item={item}
                                updateLike={updateLove}
                            />
                            
                            
                            {/* <p key={item.id}><img src={item.path} alt={item.description}/></p> */}
                            {/* <p>{item.description}</p> */}
                            {/* <GalleryItem /> */}
                        </>)
                    )}
                </div>
        </>
    )
}

export default GalleryList;