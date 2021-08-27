import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { setRoomHost,getRoomState } from "src/features/room/roomSlice";
import { useDispatch,useSelector  } from "react-redux";
import  "./JoinRoomPage.css";
import JoinRoomTitle from './JoinRoomTitle';
import JoinRoomContent from './JoinRoomContent';
import {  useRoomHost} from "src/hooks/useRoomHost";


const JoinRoomPage = () => {

  const { search } = useLocation()

     const isRoomHostState = new URLSearchParams(search).get("host")

  const isRoomHost = useRoomHost(isRoomHostState)


  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent  isRoomHost={isRoomHost}/>
      </div>

    </div>
  )
}

export default JoinRoomPage
