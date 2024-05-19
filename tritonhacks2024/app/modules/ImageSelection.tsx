"use client";
import "../globals.css"
import Webcam from "react-webcam"
import { ChangeEvent, useCallback, useRef, useState } from "react";
import Button from "@mui/material/Button"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import { styled } from "@mui/material/styles"

export default function ImageSelection() {
    const webcamRef = useRef(null);

    const [screenState, setScreenState] = useState(0); 
    const [imgSrc, setImgSrc] = useState('');

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc : string = webcamRef.current!.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const onUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImgSrc(reader.result);
      setScreenState(2);
    };

    reader.readAsDataURL(file)
  };

  const onTake = () => {
    setScreenState(1);
  };

  const onRetake = () => {
    setScreenState(0);
  }

  const onContinue = () => {
    setScreenState(3);
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
    
    return (
        <div className="container">
            {screenState == 0 ? (
                <div className="btn-container">
                  <label htmlFor="upload-image">
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Photo
                      <VisuallyHiddenInput type="file" />
                    </Button>
                    <input
                      id="upload-image"
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={onUpload}
                    >
                    </input>
                  </label>
                </div>
            ) : (
              <div className="confirm-container">
              <h3>Is this photo ok?</h3>
              <img src={imgSrc} alt="your photo">
              </img>
              <Button
                component="label"
                variant="contained"
                color="error"
              >
                Choose New Photo
              </Button>
              <Button
                component="label"
                variant="contained"
                color="success"
              >
                Continue
              </Button>
            </div>
            )}
        </div>

    );
}