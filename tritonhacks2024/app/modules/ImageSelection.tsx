"use client";
import "../globals.css"
import Webcam from "react-webcam"
import { ChangeEvent, useCallback, useRef, useState } from "react";
import Button from "@mui/material/Button"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import { styled } from "@mui/material/styles"

export default function ImageSelection() {
  const webcamRef = useRef(null); 
  var uploadRef = useRef(null);

  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc : string = webcamRef.current!.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const unCapture = () => { setImgSrc(null)}

  const onUpload = (event) => {
    uploadRef = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImgSrc(reader.result as string | null);
    };

    reader.readAsDataURL(file)
  };


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
      <div className="container w-full align-center">
        {imgSrc == null ? (
          <div className="capture-container">
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
                ref={uploadRef}
              >
              </input>
            </label>
          </div>
        ) : (
          <div className="confirm-container w-full align-center">
            <img src={imgSrc as string} alt="webcam"></img>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={unCapture}
              color="error"
            >
              Go Back
            </Button>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={unCapture}
              color="success"
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    );
}