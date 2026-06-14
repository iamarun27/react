hooks - functional components - manage tasks easily

useState - state management , previous , current,next 

import React, { useState } from "react";

const App = () => {
  const [marks, setMarks] = useState([60, 55, 89, 12, 29]);

  const graceStudents = () => {
    const newMarks = marks.map((elem) => {
      if (elem > 95) return elem;
      else return elem + 5;
    });
    //console.log(newMarks);
    setMarks(newMarks);
  };
  return (
    <div>
      <h1 className="font-extrabold text-4xl">This is App</h1>

      {marks.map((elem, idx) => {
        return (
          <h1 key={idx}>
            student {idx + 1} = {elem} ({elem > 33 ? "PASS" : "FAIL"})
          </h1>
        );
      })}

      <button
        className="bg-emerald-600 px-5 py-3 m-3 rounded-2xl"
        onClick={graceStudents}
      >
        Grace Marks
      </button>
    </div>
  );
};

export default App;
