import React from 'react'
import { useHistory } from "react-router-dom";
interface ButtonProps {
  buttonText: string;
  cancelButton?: boolean
  onClickHandler:VoidFunction
}

const Button:React.VFC<ButtonProps>  = ({ buttonText, cancelButton = false, onClickHandler }) => {
  const buttonClass = cancelButton ?
    "join_room_cancel_button" : "join_room_success_button"

  return (
    <button className={buttonClass} onClick={onClickHandler}>{buttonText}</button>
  )
}

interface Props {
  handleJoinRoom: any
  isRoomHost:boolean
}

const JoinRoomButtons:React.VFC<Props> = ({ handleJoinRoom, isRoomHost }) => {
  const successButtonText = isRoomHost ? "Host " : "Join"
  const history = useHistory()
  const pushToIntroductionPage = () => {
    history.push("/")
  }

  return (
    <div className="join_room_buttons_container">
      <Button
        buttonText={successButtonText}
        onClickHandler={handleJoinRoom}
      />
       <Button
        buttonText="cancel"
        cancelButton
        onClickHandler={pushToIntroductionPage}
      />
    </div>
  )
}

export default JoinRoomButtons
