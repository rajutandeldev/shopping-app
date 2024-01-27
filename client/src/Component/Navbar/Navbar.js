import React from 'react'
import {useUserContext} from '../../Context/UserContext'
function Navbar() {
    const {state,dispatch} = useUserContext();
  return (
    <div>
        <div>Navbar</div>
        <h4>username: {state.username}</h4>
        <button onClick={()=>dispatch({type:"change_name",value:{...state,username:"mahesh"}})}>Change user name</button>
    </div>
  )
}

export default Navbar