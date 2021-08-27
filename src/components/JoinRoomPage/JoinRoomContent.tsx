import React, { useState }from 'react'
import ErrorMessage from './ErrorMessage'
import JoinRoomInput from './JoinRoomInput'
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox'

interface Props {
  isRoomHost:boolean
}

const JoinRoomContent:React.VFC<Props> = ({isRoomHost}) => {
  const [roomIdValue, setRoomIdValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [errorMessage,setErrorMessage] = useState(null)
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
      <ErrorMessage errorMessage={errorMessage}/>
    </>
  )
}

export default JoinRoomContent
