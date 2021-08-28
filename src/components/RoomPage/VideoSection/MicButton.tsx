import React, { useState } from 'react'
import MicButtonImg from "src/resources/images/mic.svg";
import MicButtonImgOff from "src/resources/images/micOff.svg";
const MicButton = () => {

  const [isMuted, setIsMuted] = useState<boolean>(false)

  const handleMicButtonPressed = () => {
    setIsMuted(!isMuted)
  }
  return (
    <div className="video_button_container">
      <img src={isMuted ? MicButtonImgOff : MicButtonImg}
        onClick={handleMicButtonPressed}
      className="video_button_image"/>
    </div>
  )
}

export default MicButton
