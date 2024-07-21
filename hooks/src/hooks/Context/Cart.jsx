import React from 'react'
import CurrentUser from './CurrentUser'
import { UserContext } from './Context';
import  {useContext}from 'react'



const Cart = ({user}) => {

    const {userOne} = useContext(UserContext);

  return (
    <>
    <CurrentUser cUser={user}/>
    <h2>{userOne}</h2>
    </>
   
  )
}

export default Cart
