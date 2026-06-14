import React, { useState } from "react";

const App = () => {
  // let a = 0;

  const [num, setNum] = useState(0);
  const [king, setKing] = useState("Arun");
  return (
    <div>
      {/* <h1>Hello Arun</h1> */}

      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
          // console.log("Btn is clicked");
        }}
        className="bg-emerald-600 text-white px-5 py-2 m-4 rounded-md border-2"
      >
        Click
      </button>

      <h2>{king}</h2>

      <button
        onClick={() => setKing("Akbar")}
        className="bg-emerald-600 text-white px-5 py-2 m-4 rounded-md border-2"
      >
        Change king
      </button>
    </div>
  );
};

export default App;
