import React, {Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Profile from './components/Profile/profile.js';
import Post from './components/Post/post.js';
import ImageViewer from './components/ImageViewer/imageViewer.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CamViewer from './components/CamViewer/camViewer.js';
import { Container } from 'reactstrap';

class  App extends Component {

  Users = () => {
    return <h2>Users</h2>;
  }
  
  render () {
    return (
              <div className="App">
      <Router>
        <div className="main">
        <div class="centerer">
            <p class="text one">CrispCode.io</p>
          </div>
          <div class="centerer">
            <p class="text two">CrispCode.io</p>
          </div>
        </div>
            <Route path="/" exact component={ImageViewer} />
            <Route path="/webcam/" component={CamViewer} />
            <Route path="/users/" component={this.Users} />
        </Router>
      </div>
    );
  }
}

export default App;
