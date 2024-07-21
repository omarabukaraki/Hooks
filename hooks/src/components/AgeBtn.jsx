import React from 'react'

const AgeBtn = ({action}) => {
    console.log('AgeBtn component Render');
  return (
    <button onClick={action}>Age Up</button>
  )
}

export default React.memo(AgeBtn)
