import React from 'react';
import Header from "./Header/header";
import Footer from './Footer/footer';
import ClothesList from './ListaProdutos/ClothesList';

function Clothes() {
  return (
    <>
    <Header/>
    <ClothesList/>
    <Footer/>
    </>
  );
}

export default Clothes;
