import React from 'react'

interface Props {
  createRoomButton?: boolean;
  buttonText: string;
  onClickHandler:VoidFunction
}

const ConnectingButton: React.VFC<Props> = ({ createRoomButton = false, buttonText, onClickHandler }) => {
  const buttonClass = createRoomButton ? "create_room_button" : "join_room_button"
  return (
    <button className={buttonClass} onClick={onClickHandler}>{buttonText}</button>
  )
}

export default ConnectingButton
