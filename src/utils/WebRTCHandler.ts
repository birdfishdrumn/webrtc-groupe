import { isNullishCoalesce } from "typescript";

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
  } catch (e) {
    console.error(e)
  }

}

const showLocalVideoPreview = (stream:MediaStream) => {

}
