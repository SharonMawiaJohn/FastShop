import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/home/HomePage";
import MainLayout from "./components/layout/MainLayout";
import NotFoundPage from './components/ui/NotFoundPage';
import ProductPage from './components/product/ProductPage';
import {useState} from 'react'

const App = () => {

  const [numCartItems, setNumberCartItems] = useState(0);

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
