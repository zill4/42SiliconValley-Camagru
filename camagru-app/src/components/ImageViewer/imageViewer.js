import React from 'react';
import  './imageViewerStyles.css';
import Post from '../Post/post.js';
const ImageViewer = props => {
    return (
    <div className="row">
    <div className="column">
         <div className="container">
         <Post />
         </div>
    </div>
    <div className="column">
         <div className="container">
         <Post />
         </div>
    </div>
    <div className="column">
         <div className="container">
         <Post />
         </div>
    </div>
    <div className="column">
        <div className="container">
        <Post />
        </div>
    </div>
    <div className="column">
        <div className="container">
        <Post />
        </div>
    </div>
    <div className="column">
        <div className="container">
        <Post />
        </div>
    </div>
    <div className="column">
         <div className="container">
         <Post />
         </div>
    </div>
    <div className="column">
         <div className="container">
         <Post />
         </div>
    </div>
    </div>
    );
};

export default (ImageViewer);