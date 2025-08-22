import React from 'react'
import CompC from './CompC'

function CompB({desg}) {
    // console.log(desg)
  return (
    <>
    
    {/* <CompC designation={desg} />    //Props Drilling */}
    <CompC />
    </>
  )
}

export default CompB