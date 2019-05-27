import React from 'react';
import './camViewer.css';
import Webcam from "react-webcam";

const CamViewer = props => {
    return (
        <div>
        <h1>Webcam</h1>
        <Webcam/>  
        </div>
    );
};
export default (CamViewer);