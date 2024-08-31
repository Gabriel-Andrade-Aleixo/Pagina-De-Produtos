import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Products from '../components/products';
import NotFound from '../components/notFound';
import Shoes from '../components/shoes';
import Eletronics from '../components/eletronics';
import Clothes from '../components/clothes';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/eletronics" element={<Eletronics />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Rotas;
