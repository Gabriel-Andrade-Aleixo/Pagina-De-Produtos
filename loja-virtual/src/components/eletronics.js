import React from 'react';
import Header from "./Header/header";
import Footer from './Footer/footer';
import ElectronicsList from './ListaProdutos/ElectronicsList';

function Eletronics() {
  return (
    <>
      <Header />
      <ElectronicsList />
      <Footer />
    </>
  );
}

export default Eletronics;
