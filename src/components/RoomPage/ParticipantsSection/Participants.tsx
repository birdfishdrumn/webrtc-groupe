import React from 'react'
import { getParticipants} from "src/features/room/roomSlice";
import { useSelector } from "react-redux";



const SingleParticipants = (props:any) => {
  const { identity, lastItem, participant } = props

  return <>
    <p className="participants_paragraph">{identity}</p>
    {!lastItem && <span className="participants_separator_line"></span>}
    </>
}


const Participants = () => {
  const participants = useSelector(getParticipants)
  return (
    <div className="participants_container">
      {participants.map((participant, index)=>(
        <SingleParticipants
          key={participant.identity}
          lastItem={participants.length === index + 1}
          participant={participant}
          identity={participant.identity}
        />
     ))}

    </div>
  )
}

export default Participants
