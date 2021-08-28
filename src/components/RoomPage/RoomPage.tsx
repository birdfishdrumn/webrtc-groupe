import React from 'react'
import ChatSection from './ChatSection/ChatSection'
import ParticipantsSection from './ParticipantsSection/ParticipantsSection'
import RoomLabel from './RoomLabel'

import  "./RoomPage.css"
import VideoSection from './VideoSection/VideoSection'

const RoomPage = () => {
  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection/>
      <RoomLabel roomId ="1234"/>
    </div>
  )
}

export default RoomPage
