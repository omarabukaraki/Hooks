

import React from 'react'

const AgeResult = ({age}) => {
    console.log('AgeResult component Render');
  return (
    <>
      <p>Age : {age}</p>
    </>
  )
}

export default React.memo(AgeResult)
