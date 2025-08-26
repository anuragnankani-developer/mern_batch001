import React, { useCallback, useState } from 'react'
import Second from '../Second';

function UseCallback() {
    const [record, setRecord] = useState(10);

    

    const callback = useCallback(()=>{
        console.log('a callback function')
    },[data])
  return (
    <>
    UseCallback

    <h1> {record} </h1>
    <button  onClick={()=>setRecord(record + 1)}> Record Value </button>
    <Second add={callback} data ={data} />
    </>
  )
}

export default UseCallback