import React from 'react'

interface Props {
  errorMessage: string | null;
}

const ErrorMessage:React.VFC<Props> = ({errorMessage}) => {
  return (
    <div className="error_message_container">
      {errorMessage && <p className="error_message_paragraph">{errorMessage}</p>}
    </div>
  )
}

export default ErrorMessage
