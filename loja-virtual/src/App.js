import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Clothes from "./components/clothes";
import Eletronics from "./components/eletronics";
import Shoes from "./components/shoes";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="eletronics" element={<Eletronics />} />
        <Route path="shoes" element={<Shoes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;