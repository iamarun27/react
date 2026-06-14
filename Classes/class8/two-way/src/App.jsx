import React, { useState } from "react";
import Men from "./components/Men";
import Women from "./components/Women";

const App = () => {
  const [gender, setGender] = useState("Male");
  return (
    <div className="p-10 ">
      <h1 className="text-white  font-extrabold text-4xl w-fit">{gender}</h1>
      <button
        onClick={() => {
          if (gender == "Male") setGender("Female");
          else setGender("Male");
        }}
        className="bg-emerald-800 text-white font-bold px-5 py-3 m-2 border-2 rounded-2xl active:scale-95"
      >
        Change Gender
      </button>

      {gender == "Male" ? <Men /> : <Women />}

      {/* <Men/>
      <Women/> */}
    </div>
  );
};

export default App;
