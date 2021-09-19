import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import galleryItems from '../../modules/gallery.data';
import './App.css';
import Header from './Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList';

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
        <Header />
        <GalleryList 
          galleryItems={galleryItems}
          counter={counter}
        />
      </div>
    )
}

export default App;
