import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const refElement = useRef(0);
    const refInput = useRef()
    const [state, setState]= useState("shrey");
    console.log(state);

    console.log('element',refElement.current)

    const increment =(e)=>{
       refElement.current = refElement.current + 1;
       return
    }
 
    const changeValue =()=>{
        
           return refInput.current.style.color = "red"
    }

    const resetData=()=>{
        setState('')
       return refInput.current.focus()
    }



  return (
    <div>
        
    <h1>Use Ref</h1>

    <h1 > Ref Value: {refElement.current} </h1>
    <button onClick={increment} > Increment  </button>

    <input type='text' ref={refInput}  placeholder='Enter your name' value={state} onChange={(e)=>setState(e.target.value)} />
    <button onClick={changeValue} > Click to change </button>
    <button onClick={resetData} > Reset </button>
    </div>
  )
}

export default UseRef;