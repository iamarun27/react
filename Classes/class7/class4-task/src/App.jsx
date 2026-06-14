import React from "react";

const App = () => {
  const btnClicked = () => {
    console.log("Button is clicked");
  };

  return (
    <div>
      <button
        onClick={btnClicked}
        className="bg-emerald-600 text-white m-4 px-6 py-3 rounded font-bold active:scale-95 "
      >
        Click to Download
      </button>


      <button
        onClick={()=>{
          console.log("Button is clicked!!!")
        }}
        className="bg-emerald-600 text-white m-4 px-6 py-3 rounded font-bold active:scale-95 "
      >
        Click to Download
      </button>
    </div>
  );
};

export default App;
