import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Header from "./Header";
import CardContainer from "./CardContainer";
import Error from "../ui/Error";
import PlaceHolderContainer from '../ui/PlaceHolderContainer';
import { randomValue } from '../../GenerateCartCode';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function(){
    if (localStorage.getItem("cart_code") === null)
      localStorage.setItem("cart_code", randomValue)
  },[])

  useEffect(() => {
    setLoading(true);
    setError(""); 

    axios.get("http://127.0.0.1:8001/products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err.message);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      {error && <Error error={error} />}
      {loading && <PlaceHolderContainer />}
      {loading || error !="" || <CardContainer products ={products} />}

    </>
  );
};

export default HomePage;
