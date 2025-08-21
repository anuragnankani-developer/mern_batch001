import React from 'react'
import { useParams } from 'react-router-dom'

function SendParamData() {
    const params = useParams()
    console.log(params);
  return (
    <div>{params.designation }</div>
  )
}

export default SendParamData