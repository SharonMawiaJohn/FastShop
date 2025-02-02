import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Header from "./Header";
import CardContainer from "./CardContainer";
import PlaceHolderContainer from '../ui/PlaceHolderContainer';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Move setLoading(true) before the request starts

    axios.get("http://127.0.0.1:8001/products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false); // Ensure loading state is updated after the request completes
      });
  }, []);

  return (
    <>
      <Header />
      {loading? <PlaceHolderContainer /> : <CardContainer products={products} />}
    </>
  );
};

export default HomePage;
