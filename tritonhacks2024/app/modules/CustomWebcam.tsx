"use client";
import "../globals.css"
import Webcam from "react-webcam"
import { useCallback, useRef, useState } from "react";


export default function CustomWebcam() {
    const webcamRef = useRef(null);

    const [imgSrc, setImgSrc] = useState(null);

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current!.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);
    
    return (
        <div className="container">
            <Webcam height={600} width={600} ref={webcamRef} />
      <div className="btn-container">
        <button onClick={capture} className="border-4 rounded">Capture photo</button>
      </div>

      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <></>
      )}
    </div>

    );
}