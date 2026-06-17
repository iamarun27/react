import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  // run every time if any changes
  // useEffect(function () {
  //   console.log("Useeffect is running");
  // });

  //  useEffect(function () {
  //   console.log("Useeffect is running");
  // },[]);
  // only 1 time render kregaa

  useEffect(
    function () {
      console.log("Use-effect is running ......");
    },
    [counter]
  );
  // dependencies
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default App;
