import React from 'react'

const Chils = (props) => {
    let message='this is from child'
  return (
    
    <div>
      {props.handlCallback(message)}
    </div>
  )
}

export default Chils
