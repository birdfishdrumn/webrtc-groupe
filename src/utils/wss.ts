import io,{Socket} from "socket.io-client";

const SERVER = "http://localhost:5002"

let socket:Socket<any> | null= null;


export const connectWithSocketIOServer = () => {
  socket = io(SERVER)
  console.log({socket})

  socket.on("connect", () => {
    console.log("success connect socket")
    if (socket) {
          console.log(socket.id)
    }

  })
}
