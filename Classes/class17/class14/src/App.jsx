import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div>
      <Navbar>
        <h1>Hello world</h1>
      </Navbar>

      <Sections />

      <Footer />
    </div>
  );
};

export default App;
