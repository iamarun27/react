 import axios from 'axios'
 
 export const getData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    ///setProductData(response.data);
    return response.data;
  };