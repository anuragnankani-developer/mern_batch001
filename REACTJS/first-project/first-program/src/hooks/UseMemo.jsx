import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [state, setState] = useState(0);
  const [data, setData] = useState(10);


const myMemo = useMemo(function (){
    console.log('addition function')
      return state * 2
  },[state]);
  

  return (
    <div>
      <h1> UseMemo </h1>
      State: {state} <br />
    <button onClick={()=>setState(state + 1)} > Increment </button>
    <br />
    My function: {myMemo}
    <h1> Data: {data} </h1>
    <button onClick={()=>setData(data + 10)} > Increse Data </button>
    </div>
  )
}

export default UseMemo