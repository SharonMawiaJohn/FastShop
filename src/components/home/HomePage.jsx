import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Header from "./Header";
import CardContainer from "./CardContainer";

const HomePage = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/products")
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <CardContainer products={products} />
    </>
  );
};

export default HomePage;
