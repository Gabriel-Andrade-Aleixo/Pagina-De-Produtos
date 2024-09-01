import React from 'react';
import Header from "./Header/header";
import Footer from './Footer/footer';
import ShoesList from './ListaProdutos/shoesList';

function Shoes() {
  return (
    <>
      <Header />
      <ShoesList/>
      <Footer/>
    </>
  );
}

export default Shoes;
