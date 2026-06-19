import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Navbar from "./components/navbar";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Random from "./Random";
import Courses from "./pages/Courses";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        {/* nested routes */}
        <Route path="/product/man" element={<Man />} />
        <Route path="/product/woman" element={<Woman />} />

        {/* dynamic routes */}

        <Route path="/about/:id" element={<Random />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default App;
