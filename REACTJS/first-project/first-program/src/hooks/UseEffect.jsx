import React, { use, useEffect, useState } from 'react'

function UseEffect() {
    const [data, setData] = useState(0);
    const [record, setRecord] = useState(10);

    useEffect(()=>{
        console.log('UseEffect is running')
    },[record])
  return (
    <>
    {data}
    <button onClick={()=>setData(data + 1)} >Increment</button>
    <p> {record} </p>
    <button onClick={()=>setRecord(record * 2)} >Double the value</button>

    </>
  )
}

export default UseEffect