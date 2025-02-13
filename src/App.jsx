import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/home/HomePage";
import MainLayout from "./components/layout/MainLayout";
import NotFoundPage from './components/ui/NotFoundPage';
import ProductPage from './components/product/ProductPage';
import {useState, useEffect} from 'react';
import api from "./api";

const App = () => {

  const [numCartItems, setNumberCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code")

  useEffect(() =>{
    if(cart_code){
      api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res=>{
        console.log(res.data)
      })

      .catch(err => {
        console.log(err.message)
      })
    }
    
  }, [cart_code])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout numCartItems = {numCartItems} />}>
        <Route index element={<HomePage />} />
        <Route path="products/:slug" element={<ProductPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
