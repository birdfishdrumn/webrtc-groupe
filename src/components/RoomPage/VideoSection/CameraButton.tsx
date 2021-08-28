import React, { useState } from 'react'
import CameraButtonImg from "src/resources/images/camera.svg";
import CameraButtonImgOff from "src/resources/images/cameraOff.svg";
const CameraButton = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false)

  const handleCameraButtonPressed = () => {
    setIsLocalVideoDisabled(!isLocalVideoDisabled)
  }
  return (
    <div className="video_button_container">
      <img
        src={isLocalVideoDisabled ? CameraButtonImgOff : CameraButtonImg}
        className="video_button_image"
        onClick={handleCameraButtonPressed}
      />

    </div>
  )
}

export default CameraButton
