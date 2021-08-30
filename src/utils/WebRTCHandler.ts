import { useDispatch } from "react-redux";
import { setOverlay } from "src/features/room/roomSlice";
import { store } from "src/app/store";
import * as wss from "./wss";
import Peer from "simple-peer";

export type SignalData = {
  signal: any,
  connUserSocketId:string
}

const constrains = {
  audio: true,
  video:true
}

let localStream:MediaStream;


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


let peers: any = { };
let streams:MediaStream[] = []

const getConfiguration = () => {
  return {
    iceServers: [
      {
        urls: "stun.stun.l.google.com:19302"
      }
    ]
  }
}

export const prepareNewPeerConnection = (connUserSocketId: string,isInitiator:boolean) => {
  const configuration = getConfiguration()

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: configuration,
    stream:localStream
  })



  peers[connUserSocketId].on("signal", (data:any) => {
    // webRtc offer webRtc Answer(SDP informations),ice candidates
    const signalData:SignalData = {
      signal: data,
      connUserSocketId:connUserSocketId
    }

    wss.signalPeerData(signalData)
  })


  peers[connUserSocketId].on("stream", (stream:MediaStream) => {
    console.log("new stream")

    addStream(stream, connUserSocketId)
    streams = [...streams,stream]
  })

}

const addStream = (stream: MediaStream, connectUserSocketId:string) => {
  // display incoming stream
}
