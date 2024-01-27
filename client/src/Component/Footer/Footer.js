import React from 'react'
import {useUserContext} from '../../Context/UserContext'

function Footer() {
  const {state,dispatch} = useUserContext();

  return (
    <div>
        <div>Footer</div>
        <p>count {state.count}</p>
        <button onClick={()=>dispatch({type:"increase_count",value: {...state,count:state.count+1}})}>increase the count</button>
    </div>

  )
}

export default Footer