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
      // マウント時にserverとsocket.ioを通じてデータの送受信を行う
      webRTCHandler.getLocalPreviewAndInitRoomConnection(isRoomHost, identity, roomId)
    } else {
      history.push("/join-room")
      window.alert(`接続が途切れました。同じroomIdにもう一度アクセスしてください`)
    }
  }, [identity])

  // ブラウザバックを禁止
  useEffect(() => {
    // @ts-ignore
     window.history.pushState(null, null, null);
    window.addEventListener('popstate', function () {
       // @ts-ignore
    window.history.pushState(null, null, null);
  })

  }, [])


// リロード時に確認を取る
window.addEventListener('beforeunload', function(e){
    var message = '本当に更新してよろしいですか？';
  e.returnValue = message;
  return message;
});


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
