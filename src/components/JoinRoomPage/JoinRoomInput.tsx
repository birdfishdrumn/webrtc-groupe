import React, { SetStateAction } from 'react'


interface InputProps {
  placeholder: string;
  value: string;
  changeHandler:(e:any)=>any
}

const Input:React.VFC<InputProps> = ({ placeholder, value, changeHandler }) => {
  return (
    <input
      value={value}
      onChange={changeHandler}
      className="join_room_input"
      placeholder={placeholder}
    />
  )
}

interface Props {
  roomIdValue:string
  setRoomIdValue:React.Dispatch<SetStateAction<string>>
  nameValue:string
  setNameValue:React.Dispatch<SetStateAction<string>>
  isRoomHost:boolean
}

const JoinRoomInput:React.VFC<Props> = (props) => {
  const { roomIdValue, setRoomIdValue, nameValue, setNameValue, isRoomHost } = props

  const handleRoomIdValueChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setRoomIdValue(event.target.value)
  }

    const handleNameValueChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value)
  }
  return (
    <div className="join_room_inputs_container">
      {!isRoomHost && <Input placeholder="Enter meeting ID"
        value={roomIdValue}
        changeHandler={handleRoomIdValueChange}
      />
      }
      <Input
      placeholder="Enter your name"
        value={nameValue}
        changeHandler={handleNameValueChange}
      />
    </div>
  )
}

export default JoinRoomInput
