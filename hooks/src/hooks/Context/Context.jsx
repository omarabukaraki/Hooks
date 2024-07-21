

import React, { createContext, useState } from 'react'

//Props deep drilling: that mining parent component have state pass to child component and child component pass to his child component.
//the pass parameter from child to parent and from parent to his parent and from parent to another component and from component to his child this process is hard in react 
//the sol: using redux and save all stats in redux and all component access this redux.

//the sol two: using useContext that the better sol because the hook from react not outside library same of redux.
//using to share the states with component

import User from './User';
import Cart from './Cart';

export const UserContext = createContext(null);

const Context = () => {

   const [userOne,setUser] = useState('omar');

  return (
    <>
     <UserContext.Provider value={{userOne,setUser}}>
       <User>
       <Cart user={userOne}/>
       </User>
     </UserContext.Provider>
    </>
  )
}

export default Context
