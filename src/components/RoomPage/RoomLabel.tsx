import React from 'react'

interface Props {
  roomId: string
}
const RoomLabel:React.FC<Props>= ({roomId}) => {
  return (
    <div className="room_label">
     <p className="room_label_paragraph"></p>
    </div>
  )
}

export default RoomLabel
