import React, { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { getData } from "../api/productApi";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState([]);

  
  // const getData = async () => {
  //   const response = await axios.get(`https://fakestoreapi.com/products`);
  //   setProductData(response.data);
  //   // return response.data;
  // };

  const setData = async () =>{
    const data = await getData()
    setProductData(data)
  }

  useEffect(function () {
    setData();
  }, []);
  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
