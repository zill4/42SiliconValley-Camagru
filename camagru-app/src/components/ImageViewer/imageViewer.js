import React from 'react';
import  './imageViewerStyles.css';
import Post from '../Post/post.js';
import posts from '../../data/posts.json';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ImageViewer = props => {

 
    return (
     <div className="row">
          {
          posts.posts.map((item, key) => {
               return(
                    <div className="container" key={key}> 
                         <div className="column">
                              <Post post={item}/>
                         </div>
                    </div> 
               )})
          }
     </div>
    );
};

export default (ImageViewer);