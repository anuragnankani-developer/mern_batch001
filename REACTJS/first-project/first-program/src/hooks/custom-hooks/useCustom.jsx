import React,{useState} from 'react'

function useCustom(intial=0) {
    const [data, setData] = useState(intial);

  const increment = () => {
    setData(data + 1);
  };

  const decrement = () => {
    setData(data - 1);
  };
   
   return [data, increment, decrement]
  
}

export default useCustom