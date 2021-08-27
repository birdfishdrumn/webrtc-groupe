import React from 'react'
import CheckImg from "../../resources/images/check.png";
import { getConnectOnlyWithAudio, setConnectOnlyWithAudio } from "src/features/room/roomSlice";
import { useDispatch,useSelector } from "react-redux";
const OnlyWithAudioCheckbox = () => {
  const dispatch = useDispatch()
  const connect = useSelector(getConnectOnlyWithAudio)
  const handleConnectionTypeChange = () => {
    dispatch(setConnectOnlyWithAudio(!connect))
  }
  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connect && (
           <img src={CheckImg} className="checkbox_image" />
        )
       }

      </div>
      <p className="checkbox_container_paragraph">only audio</p>
    </div>
  )
}

export default OnlyWithAudioCheckbox
