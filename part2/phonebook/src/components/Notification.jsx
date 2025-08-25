import React from 'react'

const Notification = (props) => {
  const notifType = (props.notifType !== undefined ? props.notifType : 'secondary')
  const notifMessage = props.notifMessage

  const classString = `alert alert-${notifType}`  

  return (
    <div className={classString} role='alert'>
      {notifMessage}
    </div>
  )
}

export default Notification