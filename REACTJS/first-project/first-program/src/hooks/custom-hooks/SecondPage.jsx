import React, { useState } from "react";
import useCustom from "./useCustom";

function SecondPage() {
  
  const [data, increment, decrement] = useCustom(10);

  return (
    <div>
      <p>{data}</p>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
    </div>
  );
}

export default SecondPage;
