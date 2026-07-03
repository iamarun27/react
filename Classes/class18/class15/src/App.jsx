
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetalis from "./pages/ProductDetalis";

const App = () => {
  

  return (
   

    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetalis/>}/>
    </Routes>
    </div>

  );
};

export default App;
