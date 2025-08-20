import React from 'react'
import { useLocation } from 'react-router-dom';

function Footer() {

  const location = useLocation()
  console.log('location',location);
  console.log('location',location?.state);
  // console.log('footerrrrr');
  const {name} = location?.state;
  console.log('state',name);

  return (
    <div>Hello {name}, Welcome to Footer </div>
  )
}

export default Footer