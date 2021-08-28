import React from 'react'

interface Props {
  roomId: string | null
}
const RoomLabel:React.FC<Props>= ({roomId}) => {
  return (
    <div className="room_label">
      <p className="room_label_paragraph">{roomId}</p>
    </div>
  )
}

export default RoomLabel
