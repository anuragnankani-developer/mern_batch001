import React from 'react'

function ParamsData(props) {
    console.log('props', props)

    const myData = props.data;
    const {name, age} = props;
    console.log('name',name);

  return (
    <>
    <div> {props.name} </div>
    <div> {props.age} </div>
    <div> {props.state} </div>
    <div> {props.obj.name} </div>
    <div>
        {myData?.map((value)=>{        
        console.log('value', value)
       return `${value}`
    })}

    </div>
    
    
    </>
  )
}

export default ParamsData