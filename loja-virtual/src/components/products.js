import React from 'react';
import Header from "./Header/header";
import Footer from './Footer/footer';
import AllProductsList from './ListaProdutos/AllProductsList';

function Products() {
  return (
    <>
      <Header/>
      <AllProductsList/>
      <Footer/>
    </>
  );
}

export default Products;
