import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  // first - read only
  // setFirst - write only
  // second - first ki value

  //console.log(a);

  var changeVal = () => {
    // console.log(a)
    // setA(a + 5);
    setA((prev) => prev + 1);
    setA((prev) => prev + 1);
    setA((prev) => prev + 1);
  };

  return (
    <div className="p-10">
      <h2>{a}</h2>
      {/* // only fnc name */}
      <button
        onClick={changeVal}
        className="px-8 py-5 rounded-2xl bg-blue-500 active:scale-95 mt-10"
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setA(a - 5);
        }}
        className="px-8 py-5 bg-yellow-600 active:scale-70 rounded-2xl mt-7"
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
