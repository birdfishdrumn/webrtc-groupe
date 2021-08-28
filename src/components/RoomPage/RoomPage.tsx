import React from 'react'
import ChatSection from './ChatSection/ChatSection'
import ParticipantsSection from './ParticipantsSection/ParticipantsSection'
import RoomLabel from './RoomLabel'

import  "./RoomPage.css"
import VideoSection from './VideoSection/VideoSection'
import { useSelector } from "react-redux"
import { getRoomId } from "src/features/room/roomSlice";

const RoomPage = () => {
  const roomId = useSelector(getRoomId)
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
