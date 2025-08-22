import React from 'react'
import CompD from './CompD'

function CompC({designation}) {
    // console.log('desg',designation)
  return (
    <>
    
    {/* <CompD desg={designation} />  //Props Drilling */}
    <CompD />
    </>
  )
}

export default CompC