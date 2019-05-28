import React, { Component } from 'react';
import './camViewer.css';
import Webcam from "react-webcam";

class CamViewer extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = [];

    }
    setRef = webcam => {
        this.webcam = webcam;
      };
     
      capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.state.push(imageSrc);
        console.log(this.state);
      };
      
      render() {
        const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user"
        };

        return (
          <div>
              <div class="rightnav">
                <img src={this.state ? <img src={this.state} /> : null} />
            </div>
            <Webcam
              audio={false}
              height={480}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={480}
              videoConstraints={videoConstraints}
            />
            

            <button onClick={this.capture}>Capture photo</button>
          </div>
        );
      }
      
    }
export default (CamViewer);