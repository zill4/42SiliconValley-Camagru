import React from 'react';
import './camViewer.css';
import Webcam from "react-webcam";

const CamViewer = props => {
    return (
        <div>
        <Webcam />  
        </div>
    );
};

export default (CamViewer);