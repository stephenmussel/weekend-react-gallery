import React, { useState } from 'react';
import './App.css';

function App() {

  const [GalleryList, setGalleryList] = useState ([]);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>May Gallery</p>
        <div className="gallery-image">
          <img src="images/climbing-2.jpg"/>
          <br /><br />
          <button className="love-button">love it!</button>
          <br />
          <p>&#10084;&#65039;&nbsp; 125</p>
        </div>
      </div>
    );
}

export default App;
