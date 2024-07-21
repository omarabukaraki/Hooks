

import React from 'react'

const SalaryResult = ({salary}) => {
    console.log('SalaryResult component Render');

  return (
  <>
  <p>salary : {salary}</p>
  </>
  )
}

export default React.memo(SalaryResult)
