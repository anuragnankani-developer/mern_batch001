import React, { createContext } from 'react'
import CompB from './CompB'

// Context Api : 1. createContext 2. Provider 3. Consumer
const context = createContext();
const data = createContext()

function CompA() {
    let designation = "developer";
    let fname = 'Shrey';

  return (
    <>
    <div>CompA</div>
    {/* <CompB desg={designation} />    //Props Drilling */}
    <context.Provider value={designation} >
        <data.Provider value={fname} >

             <CompB />

        </data.Provider>

       

    </context.Provider>
    </>
  )
}

export default CompA
export {context, data};