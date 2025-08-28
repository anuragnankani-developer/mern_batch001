import React, { useState } from "react";
import useCustom from "./useCustom";
import SecondPage from "./SecondPage";

function FirstsPage() {
  
  const [data, increment, decrement] = useCustom();

  return (
    <div>
      <p>{data}</p>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>


      <hr />
      <SecondPage />
    </div>
  );
}

export default FirstsPage;
