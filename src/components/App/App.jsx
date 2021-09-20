import React from 'react';
import './App.css';
import Header from '../Header/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import galleryItems from '../../modules/gallery.data';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState(galleryItems);
  // const [likeCounter, setLikeCounter] = useState(0);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('error in fetchGallery', error);
    });
  }

  const updateLove = (galleryId) => {
    console.log(galleryId);
    axios({
      method: 'PUT',
      url: `/like/${galleryId}`,
    }).then((response) => {
      fetchGallery();
    }).catch((error) => {
      alert('error in updateLove');
      console.log(error);
    })
  }

  useEffect(() => {
    fetchGallery();
  }, []);

    return (
      <div className="App">
        <Header />
        <GalleryList 
          list={galleryList}
          updateLove={updateLove}
        />
      </div>
    );
}

export default App;