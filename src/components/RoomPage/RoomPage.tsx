import React, { useEffect } from 'react'
import ChatSection from './ChatSection/ChatSection'
import ParticipantsSection from './ParticipantsSection/ParticipantsSection'
import RoomLabel from './RoomLabel'

import  "./RoomPage.css"
import VideoSection from './VideoSection/VideoSection'
import { useSelector } from "react-redux"
import { getRoomId,getIdentity,getRoomState,getOverlay } from "src/features/room/roomSlice";
import * as webRTCHandler from "src/utils/WebRTCHandler";
import Overlay from './Overlay'
import {  useHistory} from "react-router-dom";

const RoomPage = () => {
  const roomId = useSelector(getRoomId)
  const identity = useSelector(getIdentity)
  const isRoomHost = useSelector(getRoomState)
    const showOverlay = useSelector(getOverlay)
const history = useHistory()
  useEffect(() => {
    if (identity) {
      webRTCHandler.getLocalPreviewAndInitRoomConnection(isRoomHost, identity, roomId)
    } else {
history.push("/join-room?host=true")
    }
  }, [])
  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection/>
      <RoomLabel roomId={roomId} />
     {showOverlay &&  <Overlay/>}
    </div>
  )
}

export default RoomPage
