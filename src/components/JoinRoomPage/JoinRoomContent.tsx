import React, { useState }from 'react'
import JoinRoomInput from './JoinRoomInput'
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox'

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
      <OnlyWithAudioCheckbox/>
    </>
  )
}

export default JoinRoomContent
