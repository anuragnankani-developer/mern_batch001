import React, { useState } from 'react'
import ParamsData from './ParamsData'
import { useNavigate } from 'react-router-dom';

function MyMinComp() {
    const [state, setState] = useState(99);
    const [data, setData] = useState([10,20,30,40]);
    const navigate = useNavigate()
    let fname = 'alok';

    let obj = {
        name: 'sourabh',
        friend: 'shrey',
        designation: 'developer'
    }

    const navigateToParams =(()=>{
        navigate(`/sendParam/developer/${fname}`)

    })
  return (
    <>
    <button onClick={navigateToParams} > Go to Params </button>
    <div>MyMinComp</div>
    <ParamsData  name={fname} age="20" state={state} obj={obj} data={data} />
    </>
  )
}

export default MyMinComp