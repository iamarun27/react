form handling

import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="enter name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;


form.addEventListener('click',function(e){
  e.preventDefault();
  console.log("Submitted")
})


two-way binding

working of form not directly
