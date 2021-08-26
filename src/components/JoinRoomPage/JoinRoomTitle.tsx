import React from 'react'

interface Props {
  isRoomHost:boolean
}

const JoinRoomTitle:React.VFC<Props>= ({ isRoomHost }) => {

  const titleText = isRoomHost ? "Host meeting" : "join meeting"
  return (
    <p className="join_room_title">
      {titleText}
    </p>
  )
}

export default JoinRoomTitle
