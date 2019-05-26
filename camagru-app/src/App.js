import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/profile.js';
import Post from './components/Post/post.js';
import ImageViewer from './components/ImageViewer/imageViewer.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CamViewer from './components/CamViewer/camViewer.js';

class  App extends Component {

  Users = () => {
    return <h2>Users</h2>;
  }
  
  render () {
    return (
      <div className="App">
            <Router>
        <div className="sidenav"> 
          <div>
            <img src="http://images.hellokids.com/_uploads/_tiny_galerie/20130312/b8p_how-to-draw-dragonair--dragonair-tutorial-drawing.jpg"></img>
            <a>
              <Link to="/">Browse</Link>
            </a>
            <a>
              <Link to="/webcam/">Webcam</Link>
            </a>
            <a>
            <Link to="/users/">Users</Link>
            </a>
          </div>
        </div>
        <div className="main">
            <Route path="/" exact component={ImageViewer} />
            <Route path="/webcam/" component={CamViewer} />
            <Route path="/users/" component={this.Users} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
