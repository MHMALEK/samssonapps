import React from "react";
import Webcam from "react-webcam";

class Camera extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}

export default Camera;
// class Camera extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount() {
//         this.videoElement = React.createRef();
//         setTimeout(() => {
//             console.log(this.videoElement);
//             if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//                 // Not adding `{ audio: true }` since we only want video now
//                 navigator.mediaDevices
//                     .getUserMedia({ video: true })
//                     .then(function (stream) {
//                         //video.src = window.URL.createObjectURL(stream);
//                         this.videoElement.srcObject = stream;
//                         this.videoElement.play();
//                     });
//             }
//         }, 1000);
//     }
//     render() {
//         return (
//             <div>
//                 <video ref={this.videoElement} width="640" height="480" autoplay />
//                 <button id="snap">Snap Photo</button>
//                 <canvas id="canvas" width="640" height="480" />
//             </div>
//         );
//     }
// }

// export default Camera;
