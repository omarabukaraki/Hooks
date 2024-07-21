import React, { useContext } from 'react'
import { UserContext } from './Context';


const CurrentUser = ({ cUser }) => {
    const { setUser } = useContext(UserContext);

    return (
        <>
            {/* <h1>{cUser}</h1> */}
            <button onClick={() => {
                setUser('omar abu karaki')
            }}>change user</button>

        </>
    )
}

export default CurrentUser
