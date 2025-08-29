import React, { useReducer } from 'react'

const initialState = {
    data: 0,
    arrState: [],
    obj: {}
}

function reducer(state, action){
       switch(action.type){
        case "Increment":
            return {data: state.data + 1};
            case "Decrement":
                return {data: state.data - 1}
                default: 
                return state
       }

}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <h1>UseReducer</h1>
    <p>Reducer value: {state.data} </p>
    <button onClick={()=>dispatch({type:"Increment"})} > Increment</button>
    <button onClick={()=>dispatch({type:"Decrement"})} >Decrement</button>


    {/* <input type='text' />
    <input type='number' />
    <input type='radio' /> */}

    </>
  )
}

export default UseReducer