import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { setRoomHost,getRoomState } from "src/features/room/roomSlice";
import { useDispatch,useSelector  } from "react-redux";

export const useRoomHost = (isRoomHostState:string | null) => {
  const isRoomHost = useSelector(getRoomState)
  const dispatch =useDispatch()


  useEffect(() => {

     console.log(isRoomHost)
    if (isRoomHostState) {
         dispatch(setRoomHost(true))
    } else {
         dispatch(setRoomHost(false))
    }
  }, [])

  return isRoomHost
 }
