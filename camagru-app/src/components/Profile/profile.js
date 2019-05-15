import React from 'react';
import  './profileStyles.css';

const Profile = props => {
    return (
    <div>
        <img src="http://images.hellokids.com/_uploads/_tiny_galerie/20130312/b8p_how-to-draw-dragonair--dragonair-tutorial-drawing.jpg"></img>
        <a href="#about">Name</a>
        <a href="#services">Bio</a>
        <a href="#clients">@Handle</a>
    </div>
    );
};

export default (Profile);