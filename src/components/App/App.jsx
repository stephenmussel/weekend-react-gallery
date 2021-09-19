import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import galleryItems from '../../modules/gallery.data';
import './App.css';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function App() {

  const [galleryList, setGalleryList] = useState ([]);

  // fetches images on page load
  useEffect(() => {
    fetchImages()
  }, [])

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
        {/* <GalleryList 
          galleryItems={galleryItems}
        /> */}
        <GalleryItem />
      </div>
    )
}

export default App;
