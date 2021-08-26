import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { setRoomHost } from "src/features/room/roomSlice";
import { useDispatch  } from "react-redux";
import  "./JoinRoomPage.css";

const JoinRoomPage = () => {
  const { search } = useLocation()
  const dispatch = useDispatch()


  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host")
     console.log(isRoomHost)
    if (isRoomHost) {
         dispatch(setRoomHost(true))
    }
  }, [])
  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">

      </div>
   join
    </div>
  )
}

export default JoinRoomPage
