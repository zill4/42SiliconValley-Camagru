import React from 'react';
import  './imageViewerStyles.css';
import Post from '../Post/post.js';
import posts from '../../data/posts.json';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ImageViewer = props => {

 
    return (
         <div>
          <List>
               {
                    posts.posts.map((item, key) => {
                         return <li key={key}> <Post/> </li>
                    })
               }
          </List>
         </div>
    );
};

export default (ImageViewer);