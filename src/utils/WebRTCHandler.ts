import { useDispatch } from "react-redux";
import { setOverlay } from "src/features/room/roomSlice";
import { store } from "src/app/store";
import * as wss from "./wss";
const constrains = {
  audio: true,
  video:true
}

let localStream;



export const getLocalPreviewAndInitRoomConnection = async (
  isRoomHost: boolean,
  identity: string,
  roomId:string | null
) => {

  try {

    const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia(constrains)
      console.log(mediaStream)
  localStream = mediaStream
    showLocalVideoPreview(localStream)
    store.dispatch(setOverlay(false))

    isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity,roomId)
  } catch (e) {
    console.error(e)
  }

}

const showLocalVideoPreview = (stream:MediaStream) => {

}
