import React from 'react'

const SalaryBtn = ({action}) => {
    console.log('SalaryBtn component Render');

  return (
   <>
   <button onClick={action}>Salary Up</button>
   </>
  )
}

export default React.memo(SalaryBtn)
