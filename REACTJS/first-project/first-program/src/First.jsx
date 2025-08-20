import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function First() {
  const [data, setData] = useState('sourabh')

  const myDesignation = 'developer'

//javascript code
  console.log('first component');

  const navigate = useNavigate();

  const navigateTo=()=>{
    // navigate('/header/footer',{state:['shrey',data]})
    navigate('/header/footer',{state:{name:'Sourabh', data:data, designation:myDesignation}})
  }

  return (

    // html code
    <>
    <div>First</div>
    <a href='/header/footer' > Go to Footer Page </a>
    {/* <link href='header/footer' > Again go to footer</link>  */}
    <br />
    <Link to={'/header/footer'} state={{data:data, name:"'hello from first component'"}} >Clink to got to next</Link>
    <br />
    <button onClick={navigateTo} >Click on button</button>
    </>
  )
}

export {First};