import React, { useEffect } from 'react'
import ChatSection from './ChatSection/ChatSection'
import ParticipantsSection from './ParticipantsSection/ParticipantsSection'
import RoomLabel from './RoomLabel'

import  "./RoomPage.css"
import VideoSection from './VideoSection/VideoSection'
import { useSelector } from "react-redux"
import { getRoomId,getIdentity,getRoomState } from "src/features/room/roomSlice";
import * as webRTCHandler from "src/utils/WebRTCHandler";

const RoomPage = () => {
  const roomId = useSelector(getRoomId)
  const identity = useSelector(getIdentity)
  const isRoomHost = useSelector(getRoomState)

  useEffect(() => {
webRTCHandler.getLocalPreviewAndInitRoomConnection(isRoomHost,identity,roomId)
  }, [])
  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection/>
      <RoomLabel roomId={roomId}/>
    </div>
  )
}

export default RoomPage
