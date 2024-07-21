import React from 'react'
import Cart from './Cart'

const User = ({children}) => {
  return (
    <Cart user={children}/>
  )
}

export default User
