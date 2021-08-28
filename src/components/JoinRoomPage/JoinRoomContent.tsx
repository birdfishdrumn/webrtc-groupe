import React, { useState }from 'react'
import ErrorMessage from './ErrorMessage'
import JoinRoomButtons from './JoinRoomButtons'
import JoinRoomInput from './JoinRoomInput'
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox'
import { getRoomExists } from "src/utils/api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setRoomId,setIdentity } from "src/features/room/roomSlice";

interface Props {
  isRoomHost:boolean
}

const JoinRoomContent:React.VFC<Props> = ({isRoomHost}) => {
  const [roomIdValue, setRoomIdValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const dispatch = useDispatch()
  const history = useHistory()

  const handleJoinRoom = async () => {
    dispatch(setIdentity(nameValue))
    if (isRoomHost) {
     createRoom()
    } else {
      await joinRoom()
   }
  }

  const joinRoom = async() => {
     const responseMessage = await getRoomExists(roomIdValue)

    const { roomExists,full } = responseMessage
    console.log(responseMessage)

    if (roomExists) {
      if (full) {
              setErrorMessage("満員です。時間が経ってから再度ご訪問ください。")
      } else {
        dispatch(setRoomId(roomIdValue))
          history.push("/room")
      }
    } else {
      setErrorMessage("お部屋が見つかりません。")
    }
  }

  const createRoom = () => {
     history.push("/room")
  }
  return (
    <>
      <JoinRoomInput
        roomIdValue={roomIdValue}
          setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox />
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost} />
    </>
  )
}

export default JoinRoomContent
