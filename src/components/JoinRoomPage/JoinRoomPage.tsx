import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { setRoomHost,getRoomState } from "src/features/room/roomSlice";
import { useDispatch,useSelector  } from "react-redux";
import  "./JoinRoomPage.css";
import JoinRoomTitle from './JoinRoomTitle';


const JoinRoomPage = () => {

  const { search } = useLocation()
  const dispatch = useDispatch()
  const isRoomHost = useSelector(getRoomState)


  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host")
     console.log(isRoomHost)
    if (isRoomHost) {
         dispatch(setRoomHost(true))
    } else {
         dispatch(setRoomHost(false))
    }
  }, [])
  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost}/>
      </div>

    </div>
  )
}

export default JoinRoomPage
