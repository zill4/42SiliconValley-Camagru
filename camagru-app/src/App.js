import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/profile.js';
import ImageViewer from './components/ImageViewer/imageViewer.js';

const App = props => {
  const name = 'Mongo Deebee';
  const elem = <h1>Hey, {name}</h1>
  
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="sidenav">
        <Profile />
      </div>
      <div className="main">
        <div className="row">
          <ImageViewer />
        </div>
      </div>
    </div>
  );
}

export default App;
