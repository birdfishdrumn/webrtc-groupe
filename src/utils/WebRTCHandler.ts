import { useDispatch } from "react-redux";
import { setOverlay } from "src/features/room/roomSlice";
import { store } from "src/app/store";
import * as wss from "./wss";
const constrains = {
  audio: true,
  video:true
}

let localStream;


// RoomPageC.tsxからuseEffectを通して実行される
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
  //  isRoomHostがtrueなら新しい部屋を作成する処理、falseなら部屋に参加する処理を実行する。

    isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity,roomId)
  } catch (e) {
    console.error(e)
  }

}

const showLocalVideoPreview = (stream:MediaStream) => {

}
