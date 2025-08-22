import React, { useContext } from "react";
import { context, data } from "./CompA";

function CompD() {

    let firstData = useContext(context);
    let secondData = useContext(data);

    console.log(firstData,'1')
    console.log(secondData,'2')

  return (
    <>
      
      {firstData} && {secondData}
      <context.Consumer>
        {(context) => {
          return (
            <data.Consumer>
              {(data) => {
                return (
                  <p>
                    {" "}
                    My name is {data} and my designation is: {context}{" "}
                  </p>
                );
              }}
            </data.Consumer>
          );
        }}
      </context.Consumer>
    </>
  );
}

export default CompD;
