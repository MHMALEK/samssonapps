import React from "react";

class Camera extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.videoElement = React.createRef();
    setTimeout(() => {
      console.log(this.videoElement);
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            this.videoElement.srcObject = stream;
            this.videoElement.play();
          });
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        <video ref={this.videoElement} width="640" height="480" autoplay />
        <button id="snap">Snap Photo</button>
        <canvas id="canvas" width="640" height="480" />
      </div>
    );
  }
}

export default Camera;
