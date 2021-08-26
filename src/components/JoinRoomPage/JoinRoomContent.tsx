import React, { useState }from 'react'
import JoinRoomInput from './JoinRoomInput'

interface Props {
  isRoomHost:boolean
}

const JoinRoomContent:React.VFC<Props> = ({isRoomHost}) => {
  const [roomIdValue, setRoomIdValue] = useState("")
  const [nameValue,setNameValue] = useState("")
  return (
    <>
      <JoinRoomInput
        roomIdValue={roomIdValue}
          setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
    </>
  )
}

export default JoinRoomContent
