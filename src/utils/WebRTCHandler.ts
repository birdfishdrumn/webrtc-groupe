import { useDispatch } from "react-redux";
import { setOverlay } from "src/features/room/roomSlice";
import { store} from "src/app/store";
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
  } catch (e) {
    console.error(e)
  }

}

const showLocalVideoPreview = (stream:MediaStream) => {

}
