import React from 'react';
import './App.css';
import Header from '../Header/Header';
import axios from 'axios';
import { useState } from 'react';
import galleryItems from '../../modules/gallery.data';
import { useEffect } from 'react/cjs/react.development';
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

  const loveItem = (galleryId) => {
    axios({
      method: 'PUT',
      url: `/like/${galleryId}`, // don't forget backticks!
    }).then((response) => {
      fetchGallery();
    }).catch((error) => {
      alert('error in loveItem');
      console.log(error);
    })
  }

  useEffect(() => {
    fetchGallery();
  }, []);

    return (
      <div className="App">
        <Header />
        <GalleryList list={galleryList}/>
      </div>
    );
}

export default App;