import React from 'react';
import  './imageViewerStyles.css';

const ImageViewer = props => {
    return (
    <div className="column">
        <h1> IMAGE VIEWER</h1>
        <div className="card">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png" style={{height: '20%', width: '20%'}}></img>
        </div>
        <div className="card">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png" style={{height: '20%', width: '20%'}}></img>
        </div>
    </div>
    );
};

export default (ImageViewer);