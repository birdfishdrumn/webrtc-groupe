import io,{Socket} from "socket.io-client";

const SERVER = "http://localhost:5002"

let socket:Socket<any> | null= null;


export const connectWithSocketIOServer = () => {
  socket = io(SERVER)
  console.log({socket})

  socket.on("connect", () => {
    console.log("success connect socket")

          console.log(socket?.id)


  })
}


export const createNewRoom = (identity:string) => {
  const data = {
    identity
  }

  socket?.emit("create-new-room",data)
}

export const joinRoom = (identity:string,roomId:string | null) => {
  const data = {
   roomId,
    identity
  }

    socket?.emit("join-room",data)
}
