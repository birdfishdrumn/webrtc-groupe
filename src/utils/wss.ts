import io,{Socket} from "socket.io-client";
import { store } from "src/app/store"
import { setRoomId,setParticipants } from "src/features/room/roomSlice";
const SERVER = "http://localhost:5002"

type RoomData = {
  roomId:string
}

type ParticipantsData = {
   connectedUsers:string[]
}


let socket:Socket<any> | null= null;



// socketサーバーからデータを受信する処理
export const connectWithSocketIOServer = () => {
  socket = io(SERVER)
  console.log({socket})

  socket.on("connect", () => {
    console.log("success connect socket")

    console.log(socket?.id)
  })
  // serverから生成されたroomIdをreduxのroomIdにセットする
  socket.on("room-id", (data:RoomData) => {
    const { roomId } = data;
    console.log(roomId)
    store.dispatch(setRoomId(roomId))
  })

  socket.on("room-update", (data:ParticipantsData) => {
    const { connectedUsers } = data
    console.log(connectedUsers)
    store.dispatch(setParticipants(connectedUsers))
  })
}


export const createNewRoom = (identity:string) => {
  const data = {
    identity
  }
  // emitはsocketサーバーにdateを送る処理
  // 第一引数がメソッド名,第二引数は渡すデータ
  socket?.emit("create-new-room",data)
}

export const joinRoom = (identity:string,roomId:string | null) => {
  const data = {
   roomId,
    identity
  }

    socket?.emit("join-room",data)
}
