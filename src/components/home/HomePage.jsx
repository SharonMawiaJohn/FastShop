import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Header from "./Header";
import CardContainer from "./CardContainer";
import Error from "../ui/Error";
import PlaceHolderContainer from '../ui/PlaceHolderContainer';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(""); // Clear previous errors before a new request

    axios.get("http://127.0.0.1:8001/products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err.message);
        setError(err.message); // Set the error message
      })
      .finally(() => {
        setLoading(false); // Ensure loading state is updated
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
