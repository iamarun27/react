import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetalis = () => {
  const productData = useContext(ProductDataContext);
  // console.log(productData)
  // const params = useParams();
  // console.log(params.id);

  const { id } = useParams();

  const selectedProduct = productData.find((elem) => id == elem.id);
  ///console.log(selectedProduct);
  return (
    <div>
      <div>
        <img src={selectedProduct.image} alt="" />
        <h2> {selectedProduct.title}</h2>
        <h5> {selectedProduct.price}</h5>
      </div>
    </div>
  );
};

export default ProductDetalis;
