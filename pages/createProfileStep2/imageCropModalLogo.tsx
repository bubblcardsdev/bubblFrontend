/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */

import "react-image-crop/dist/ReactCrop.css";

import React, { useRef, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ReactCrop, { Crop } from "react-image-crop";
import ButtonComp from "src/App/components/ui/CommonButtons/_commonbuttons";

import styles from "./imageCropLogo.module.css";

const loadingStates = {
  uploading: "uploading",
  completed: "completed",
};

type CropSectionT = {
  // eslint-disable-next-line no-unused-vars
  onSave: (squareImgBlob: Blob) => Promise<void>;
  onSavedSuccess: any;
};

function CropSectionLogo({ onSave, onSavedSuccess }: CropSectionT) {
  const [src, setSrc] = useState("");
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 30,
    height: 30,
    x: 0,
    y: 0,
    aspect: 1,
  });
  const [squareImgBlob, setSquareImgBlob] = useState<Blob | "">("");
  const [rectangleImgBlob, setRectangleImgBlob] = useState<Blob | "">("");
  const [uploadingState, setUploadingState] = useState<string>("");
  const [errorFileSize, setErrorFileSize] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  let buttonLabel = "Save";

  if (uploadingState === loadingStates.uploading) {
    buttonLabel = "Please wait, it's saving.";
  } else if (uploadingState === loadingStates.completed) {
    buttonLabel = "Saved Successfully";
  }

  const isDisabled =
    !(squareImgBlob && rectangleImgBlob) ||
    uploadingState === loadingStates.uploading;
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setErrorFileSize(false);
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.src = event?.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxWidth = 1300; // Set your desired maximum width here
          const maxHeight = 1300; // Set your desired maximum height here

          let { width } = img;
          let { height } = img;

          // Calculate new dimensions while maintaining aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            width *= maxHeight / height;
            height = maxHeight;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          // Get the scaled-down image as a data URL
          const scaledImageDataUrl = canvas.toDataURL("image/jpeg");

          setSrc(scaledImageDataUrl);
          // Cleanup the reader
          reader.onload = null;
          reader.onabort = null;
        };
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = (image: HTMLImageElement) => {
    imageRef.current = image;
  };

  const getCroppedImg = (
    image: HTMLImageElement,
    selectedCrop: Crop
  ): Promise<Blob> =>
    new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const pixelRatio = window.devicePixelRatio;
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const ctx = canvas.getContext("2d");

      canvas.width = selectedCrop.width! * pixelRatio * scaleX;
      canvas.height = selectedCrop.height! * pixelRatio * scaleY;

      ctx!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx!.imageSmoothingQuality = "high";

      ctx!.drawImage(
        image,
        selectedCrop.x! * scaleX,
        selectedCrop.y! * scaleY,
        selectedCrop.width! * scaleX,
        selectedCrop.height! * scaleY,
        0,
        0,
        selectedCrop.width! * scaleX,
        selectedCrop.height! * scaleY
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error("Canvas is empty");
            reject(new Error("Canvas is empty"));
            return;
          }
          window.URL.revokeObjectURL(image.src);
          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });

  const makeClientCrop = async (selectedCrop: Crop) => {
    if (imageRef.current && selectedCrop.width && selectedCrop.height) {
      const newCroppedImageUrl = await getCroppedImg(
        imageRef.current,
        selectedCrop
      );
      setRectangleImgBlob(newCroppedImageUrl);

      const newCroppedImageUrl1 = await getCroppedImg(imageRef.current, {
        ...selectedCrop,
        width: selectedCrop.width,
        height: selectedCrop.width,
      });
      setSquareImgBlob(newCroppedImageUrl1);
    }
  };
  const handleButtonClick = () => {
    document.getElementById("logoImgInput")?.click();
  };
  const onCropComplete = (selectedCrop: Crop) => {
    makeClientCrop(selectedCrop);
  };
  const onCropChange = (selectedCrop: Crop) => {
    setCrop(selectedCrop);
  };

  const onSaveImage = () => {
    if (squareImgBlob && rectangleImgBlob) {
      setUploadingState(loadingStates.uploading);
      onSave(squareImgBlob)
        .then(() => {
          setUploadingState(loadingStates.completed);
          onSavedSuccess();
        })
        .catch(() => {
          setUploadingState("");
        });
    }
  };
  return (
    <div className={styles.app}>
      <div className={styles.chooseFile}>
        {/* <input type="file" accept="image/*" onChange={onSelectFile} /> */}
        <div className={styles.DragDrop} onClick={handleButtonClick}>
          <label
            htmlFor="logoImgInput"
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
              display: "none",
            }}
          />

          <Button className={styles.UploadButton}>Click to Upload</Button>
          <input
            type="file"
            id="logoImgInput"
            accept="image/*"
            onChange={onSelectFile}
            style={{ display: "none" }}
          />
        </div>
      </div>
      {errorFileSize === true && (
        <div className={styles.errorFileSize}>
          <p>*file size must be less that 7MB</p>
        </div>
      )}
      {src && (
        <ReactCrop
          src={src}
          crop={crop}
          ruleOfThirds
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
        />
      )}

      <div className={styles.imageCropped}>
        <div className={styles.title}>
          {squareImgBlob && (
            <>
              <h6>Square Image</h6>
              <img
                alt="Crop"
                style={{ width: "100%" }}
                src={URL.createObjectURL(squareImgBlob)}
              />
            </>
          )}
        </div>
      </div>

      <Col xl={12} className={styles.savebtn_upload}>
        <ButtonComp
          label={buttonLabel}
          className={styles.savebtn}
          disabled={isDisabled}
          onClick={onSaveImage}
        />
      </Col>
    </div>
  );
}

export default CropSectionLogo;
