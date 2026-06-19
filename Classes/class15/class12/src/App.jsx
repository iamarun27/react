import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Kodr from "./pages/Kodr";
import Kodex from "./pages/Kodex";
import Footer from "./components/Footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      elememt: <Home />,
    },
    {
      path: "/",
      elememt: <About />,
    },
  ]);
  return (
    <div>
      <div>{/* <Navbar /> */}</div>

      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/kodr" elememt={<Kodr />} />
          <Route path="/about/kodex" elememt={<Kodex />} />
        </Route>
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
