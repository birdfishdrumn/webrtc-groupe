import React from 'react'

const dummyParticipants = [
  {
    identity:"huuta"
  },
    {
    identity:"kii"
  },
]


const SingleParticipants = (props:any) => {
  const { identity, lastItem, participant } = props

  return <>
    <p className="participants_paragraph">{identity}</p>
    {!lastItem && <span className="participants_separator_line"></span>}
    </>
}


const Participants = () => {
  return (
    <div className="participants_container">
      {dummyParticipants.map((participant, index)=>(
        <SingleParticipants
          key={participant.identity}
          lastItem={dummyParticipants.length === index + 1}
          participant={participant}
          identity={participant.identity}
        />
     ))}

    </div>
  )
}

export default Participants
