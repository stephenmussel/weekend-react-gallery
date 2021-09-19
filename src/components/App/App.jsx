import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import galleryItems from '../../modules/gallery.data';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState (galleryItems);
  const [counter, setCounter] = useState(0);

  const fetchImages = () => {
    Axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(error);
      alert('error in making GET request', error);
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Life of Phaydara</h1>
        </header>
        {/* <p>My Gallery</p> */}
        {galleryItems.map(image => 
          (<div className="gallery-grid">
            <img key={image.id} src={image.path} className="gallery-image"/><br />
            <button onClick={() => setCounter(counter + 1)} className="love-button">love it!</button>
            <p>&#10084;&#65039;&nbsp; {counter}</p>
          </div>)
        )}
      </div>
    )
}

export default App;
