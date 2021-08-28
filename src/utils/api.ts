import axios, { AxiosPromise, AxiosResponse}  from "axios";

type resRoomApiData = {
  roomExists: boolean
  full: boolean
}

const serverApi = "http://localhost:5002/api"

export const getRoomExists = async (roomId:string):Promise<resRoomApiData> => {
  const response: AxiosResponse<resRoomApiData>= await axios.get(`${serverApi}/room-exists/${roomId}`)
  return response.data
}
